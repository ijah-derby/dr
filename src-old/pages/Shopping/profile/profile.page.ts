import { Component, OnInit } from '@angular/core';
import { Events, MenuController, LoadingController, AlertController, Platform } from '@ionic/angular';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import { Storage } from '@ionic/storage';
import { UsersProvider } from '../providers/users';
import { Router } from '@angular/router';

import * as firebase from "firebase";

import { Camera, CameraOptions } from "@ionic-native/camera/ngx";
import { File } from "@ionic-native/file/ngx";

import { FileTransfer, FileUploadOptions, FileTransferObject } from '@ionic-native/file-transfer/ngx';
import {FilePath} from '@ionic-native/file-path/ngx';
declare var cordova: any;


@Component({
	selector: 'app-profile',
	templateUrl: './profile.page.html',
	styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {

	addressForm : FormGroup;
	user: any;
	loading: any;

	result;

	constructor(
		public menuCtrl: MenuController, 
		public events: Events, 
		public alertCtrl: AlertController, 
		private storage: Storage, 
		public loadingCtrl: LoadingController, 
		public usersProv: UsersProvider, 
		private formBuilder: FormBuilder,
		private router: Router,
		public camera: Camera,
		public file: File,
		public filePath: FilePath,
		public transfer: FileTransfer,
		public platform: Platform
	) {
		
	}


	ionViewWillEnter(){
		this.storage.ready().then(() => {
			this.storage.get('user').then((val) => {
				console.log(val);
				this.user = val;
				this.addressForm = this.formBuilder.group({
					username: [val.username],
					fullname: [val.fullname],
					address: [val.address],
					phone: [val.phone]
				});
			})
		})
	}






	// =============== up avt =======================


	async pickImage() {
		const options: CameraOptions = {
		  quality: 80,
		  destinationType: this.camera.DestinationType.FILE_URI,
		  encodingType: this.camera.EncodingType.JPEG,
		  mediaType: this.camera.MediaType.PICTURE
		};
	
		try {
		  let cameraInfo = await this.camera.getPicture(options);
		  let blobInfo = await this.makeFileIntoBlob(cameraInfo);
		  let uploadInfo: any = await this.uploadToFirebase(blobInfo);
	
		  alert("File Upload Success " + uploadInfo.fileName);
		} catch (e) {
		  console.log(e.message);
		  alert("File Upload Error " + e.message);
		}
	}



	// -------------------

	makeFileIntoBlob(_imagePath) {
		// INSTALL PLUGIN - cordova plugin add cordova-plugin-file
		return new Promise((resolve, reject) => {
		  let fileName = "";
		  this.file
			.resolveLocalFilesystemUrl(_imagePath)
			.then(fileEntry => {
			  let { name, nativeURL } = fileEntry;
	
			  // get the path..
			  let path = nativeURL.substring(0, nativeURL.lastIndexOf("/"));
			  console.log("path", path);
			  console.log("fileName", name);
	
			  fileName = name;
	
			  // we are provided the name, so now read the file into
			  // a buffer
			  return this.file.readAsArrayBuffer(path, name);
			})
			.then(buffer => {
			  // get the buffer and make a blob to be saved
			  let imgBlob = new Blob([buffer], {
				type: "image/jpeg"
			  });
			  console.log(imgBlob.type, imgBlob.size);
			  resolve({
				fileName,
				imgBlob
			  });
			})
			.catch(e => reject(e));
		});
	}


	// ------------------------

	
	uploadToFirebase(_imageBlobInfo) {
		console.log("uploadToFirebase");
		return new Promise((resolve, reject) => {
		  let fileRef = firebase.storage().ref("users/" + _imageBlobInfo.fileName);
	
		  let uploadTask = fileRef.put(_imageBlobInfo.imgBlob);
	
		  uploadTask.on(
			"state_changed",
			(_snapshot: any) => {
			  console.log(
				"snapshot progess " +
				  (_snapshot.bytesTransferred / _snapshot.totalBytes) * 100
			  );
			},
			_error => {
			  console.log(_error);
			  reject(_error);
			},
			() => {
			  // completion...
			  resolve(uploadTask.snapshot);
			}
		  );
		});
	}



	// =============== end up avt =======================




	updateAddress(){
		this.usersProv.updateUser(this.user.id, this.addressForm.value).then(data => {
			this.loading.dismiss().then(() => {
				console.log(data);

				this.user.username = this.addressForm.value.username;
				this.user.fullname = this.addressForm.value.fullname;
				this.user.address = this.addressForm.value.address;
				this.user.phone = this.addressForm.value.phone;

				this.storage.set('user', this.user);
				this.events.publish('user: change', this.user);
			});
		}, error => {
			this.loading.dismiss().then(() => {
				this.presentAlertErr(error);
			});
		});
		this.presentLoading();
	}

	logout() {
		this.usersProv.logoutUser().then(() => {
			this.storage.remove('user');
			this.user = null;
			this.router.navigateByUrl('/login');
			this.menuCtrl.enable(false);
		});
	}


	async presentLoading() {
		this.loading = await this.loadingCtrl.create({
			message: 'waiting',
			duration: 2000
		});
		return await this.loading.present();
	}

	async presentAlertErr(err) {
		const alert = await this.alertCtrl.create({
			message: err.message,
			buttons: [{
				text: "Ok",
				role: 'cancel'
			}]
		});
		await alert.present();
	}


	ngOnInit() {
	}

}
