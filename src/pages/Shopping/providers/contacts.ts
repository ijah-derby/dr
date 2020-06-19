
//import * as Constants from '../../config/constants';
// import { Observable } from 'rxjs-compat/Observable';
// import { AngularFirestore } from 'angularfire2/firestore';

import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable()
export class ContactsProvider {

	private snapshotChangesSubscription: any;
	private temp: any;

	constructor(public afs: AngularFirestore) {}

	getContacts() {
		return new Promise<any>((resolve, reject) => {
			this.snapshotChangesSubscription = this.afs.collection('orders').snapshotChanges()
			.subscribe(snapshots => {
				resolve(snapshots);
				this.snapshotChangesSubscription.unsubscribe();
			})
		});
	}

	getContactsSpec(active = null, fullname = null, start = null, jump = null, order = null) {
		return new Promise<any>((resolve, reject) => {

			let query = function (ref) {
				if(jump != null){
					ref = ref.limit(jump);
				}
				if (active != null) {
					ref = ref.where('active', '==', active);
				}
				if (fullname != null){
					ref = ref.where('fullname', '==', fullname);
				}
				if(start != null){
					ref = ref.startAt(start);
				}
				if(order) {
					ref = ref.orderBy(order);
				}
				return ref;
			}

			this.snapshotChangesSubscription = this.afs.collection('contacts', query).snapshotChanges().subscribe(snapshots => {
				resolve(snapshots);
				this.snapshotChangesSubscription.unsubscribe();
			})

		})
	}

	activeContact(val, key, where) {
		return new Promise<any>((resolve, reject) => {
			this.afs.collection('contacts').doc(key).update({
				active: val,
				created: Date()
			}).then(
			res => {
				this.afs.collection('contacts', ref => ref.where('fullname', '==', where)).snapshotChanges()
				.subscribe(snapshots => {
					resolve(snapshots);
					this.snapshotChangesSubscription.unsubscribe();
				})
			},
			err => reject(err)
			)
		})
	}


	deleteContact(key) {
		return new Promise<any>((resolve, reject) => {
			this.snapshotChangesSubscription = this.afs.collection('contacts').doc(key).delete()
			.then(
				res => resolve(res),
				err => reject(err)
				)
		})
	}


}
