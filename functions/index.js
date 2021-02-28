let functions = require('firebase-functions');
let admin = require('firebase-admin');
admin.initializeApp();

const db = admin.firestore();

exports.newGroupCreation = functions.firestore.document('users/{userId}/groups/{groupId}').onCreate(async (snapshot, context) => {
    
    const groupData = await db.doc('groups/' + context.params.groupId).get();
    const _groupData = groupData.data();
    const data = _groupData !== undefined ? _groupData : {};

    return sendMessage(context.params.userId, 'New Group Chat', 'you have been added into ' + data.name);
});

exports.conversation = functions.firestore.document('conversations/{conversationId}/messages/{messageId}').onCreate(async (snapshot, context) => {
    let message = snapshot.data();
    //console.log(message);
    if (message != null) {
        const groupData = await db.doc('conversations/' + context.params.conversationId).get();
        const _groupData = groupData.data();
        const data = _groupData !== undefined ? _groupData : {};

        const userData = await db.doc('users/' + message.sender).get();
        const _userData = userData.data();
        const uData = _userData !== undefined ? _userData : {};

        let users = data.users;
        users.forEach(async user => {
            if (message.sender != user) {
                // const convData = await db.doc('users/' + user).get();
                // const _convData = convData.data();
                // const cData = _convData !== undefined ? _convData : {};
                return sendMessage(user, uData.displayName, 'sent ' + message.type + ' message')
            }
        });
    } else return false;

});

exports.groupConversation = functions.firestore.document('groups/{groupId}/messages/{messageID}').onCreate(async (snapshot, context) => {
    var message = snapshot.data();
    //console.log(message);
    if (message != null) {
        const groupData = await db.doc('groups/' + context.params.groupId).get();
        const _groupData = groupData.data();
        const data = _groupData !== undefined ? _groupData : {};

        const userData = await db.doc('users/' + message.sender).get();
        const _userData = userData.data();
        const uData = _userData !== undefined ? _userData : {};

        let groupname = data.name
        let users = data.members;
        users.forEach(async user => {
            if (user != message.sender) {
                // const convData = await db.doc('users/' + user).get();
                // const _convData = convData.data();
                // const cData = _convData !== undefined ? _convData : {};
                sendMessage(user, groupname, uData.displayName + ' sent ' + message.type + ' message');
            }
        });
    } else return false;
});

function sendMessage(uid, title, message) {

    const payload = {
        notification: {
            title: title,
            body: message,
            sound: 'default'
        }
    };

     // getting tokens
     const devicesRef = db.collection("fcm-devices").where("uid", "==", uid);
     devicesRef.get().then(devices => {
        const tokens = [];
 
        // send a notification to each device token
        devices.forEach((result) => {
            const token = result.data().token;
            tokens.push(token);
        });
    
        if(tokens.length) {
            return admin.messaging().sendToDevice(tokens, payload);
        }
     }, err => {
         return;
     });
}