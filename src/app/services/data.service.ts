import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireAction } from '@angular/fire/database';
import { AngularFireAuth } from '@angular/fire/auth';
import 'firebase/auth';
import * as firebase from "firebase/app";
import { FirestoreService } from 'src/shared/services/firestore/firestore.service';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(
    private afAuth: AngularFireAuth,
    private afdb: AngularFireDatabase,
    private firestore: FirestoreService
  ) { }


  // Get all users
  getUsers() {
    // return this.afdb.list('/accounts', ref => ref.orderByChild('name'));
  }

  searchUser(keyword) {
    // return this.firestore.list('/accounts', (ref: any) => ref.where('name', '>=',keyword).where('name','<=',keyword + "\uf8ff").orderBy('name'));
  }

  // Get user with username
  getUserWithUsername(username) {
    return this.firestore.col$('users', ref => ref.orderByChild('username').equalTo(username));
  }

  // Get logged in user data
  getCurrentUser() {
    return this.firestore.doc$('users/' + firebase.auth().currentUser.uid);
  }

  // Get user by their userId
  getUser(userId) {
    return this.firestore.doc$('users/' + userId);
  }

  // Get requests given the userId.
  getRequests(userId) {
    return this.afdb.object('/requests/' + userId);
  }

  // Get friend requests given the userId.
  getFriendRequests(userId) {
    return this.afdb.list('/requests', ref => ref.orderByChild('receiver').equalTo(userId));
  }

  // Get conversation given the conversationId.
  getConversation(conversationId) {
    return this.firestore.doc$('conversations/' + conversationId);
  }

  // Get conversations of the current logged in user.
  public getConversations() {
    return this.firestore.colWithIds$('users/' + firebase.auth().currentUser.uid + '/conversations', ref => ref.orderBy('createdAt', 'desc'));
  }

  // Get messages of the conversation given the Id.
  getConversationMessages(conversationId) {
    return this.firestore.colOnce$('conversations/' + conversationId + '/messages', ref => ref.orderBy('createdAt', 'desc'));
  }

  // Get messages of the group given the Id.
  getGroupMessages(groupId, date) {
    return this.firestore.colOnce$('groups/' + groupId + '/messages', ref => ref.orderBy('createdAt').startAt(date));
  }

  // Get groups of the logged in user.
  getGroups() {
    return this.firestore.col$('users/' + firebase.auth().currentUser.uid + '/groups');
  }

  // Get group info given the groupId.
  getGroup(groupId) {
    return this.firestore.doc$('groups/' + groupId);
  }

  getBlockedLists() {
    return this.firestore.col$('users/' + firebase.auth().currentUser.uid + '/conversations', ref => ref.orderByChild('blocked').equalTo(true));
  }

}
