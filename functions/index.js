let functions = require('firebase-functions');
let admin = require('firebase-admin');
admin.initializeApp();

const db = admin.firestore();

exports.newGroupCreation = functions.firestore.document('users/{userId}/groups/{groupId}').onCreate(async (snapshot, context) => {
    
    const groupData = await db.doc('groups/' + context.params.groupId).get();
    const _groupData = groupData.data();
    const data = _groupData !== undefined ? _groupData : {};

    await sendMessage(context.params.userId, 'New Group Chat', 'you have been added into ' + data.name);
    return;
});

exports.conversation = functions.firestore.document('conversations/{conversationId}/messages/{messageId}').onCreate(async (snapshot, context) => {
    let message = snapshot.data();
    //console.log(message);
    if (message != null) {
        console.log('convID', context.params.conversationId);
        const groupData = await db.doc('conversations/' + context.params.conversationId).get();
        const _groupData = groupData.data();
        console.log('convDATA', _groupData);
        const data = _groupData !== undefined ? _groupData : {users: []};

        const userData = await db.doc('users/' + message.sender).get();
        const _userData = userData.data();
        const uData = _userData !== undefined ? _userData : {};

        let users = data.users;
        console.log('users array', users);
        users.forEach(async user => {
            if (message.sender != user) {
                // const convData = await db.doc('users/' + user).get();
                // const _convData = convData.data();
                // const cData = _convData !== undefined ? _convData : {};
                // await sendMessage(user, uData.displayName, 'sent ' + message.type + ' message');
                const payload = {
                    notification: {
                        title: uData.displayName,
                        body: 'sent ' + message.type + ' message',
                        sound: 'default'
                    }
                };
            
                 // getting tokens
                 const devicesRef = db.collection("fcm-devices").where("uid", "==", user);
                 devicesRef.get().then(devices => {
                    const tokens = [];
             
                    // send a notification to each device token
                    devices.forEach((result) => {
                        const token = result.data().token;
                        tokens.push(token);
                    });
                
                    if(tokens.length) {
                        console.log('tokens', tokens);
                        return admin.messaging().sendToDevice(tokens, payload);
                    }
                 }, err => {
                     console.log('error', err);
                     return;
                 });
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
        users.forEach(async (user, index) => {
            if (user != message.sender) {
                // const convData = await db.doc('users/' + user).get();
                // const _convData = convData.data();
                // const cData = _convData !== undefined ? _convData : {};
                await sendMessage(user, groupname, uData.displayName + ' sent ' + message.type + ' message');
                if(index  === (users.length - 1)) {
                    return;
                }
            }
        });
    } else return false;
});

function sendMessage(uid, title, message) {
    return new Promise((resolve, reject) => {
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
                console.log('tokens', tokens);
                admin.messaging().sendToDevice(tokens, payload);
                resolve(true);
            }
         }, err => {
             resolve(true);
         });
    });
}