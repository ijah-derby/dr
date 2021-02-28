import { Component, OnInit } from '@angular/core';
import { LoadingController, NavController } from '@ionic/angular';

import { PostsProvider } from '../providers/posts';

@Component({
	selector: 'app-blog',
	templateUrl: './blog.page.html',
	styleUrls: ['./blog.page.scss'],
})
export class BlogPage implements OnInit {

	list_post_star: any;
	list_post_new: any;
	list_post: any;
	loading: any;
	start: any;

	constructor(
		public loadingCtrl: LoadingController,
		public postsProv: PostsProvider,
		private navCtrl: NavController
		) { 

		this.presentLoading();
		
		this.postsProv.getPostByStar().then(data => {
			this.list_post_star = data;
			console.log(this.list_post_star);
		}, error => {

		});

		this.postsProv.getPostByNew().then(data => {
			this.list_post_new = data;
			console.log(this.list_post_new);
		}, error => {

		});

		this.postsProv.getPost(null, 2).then(data => {
			this.loading.dismiss().then(() => {
				this.list_post = data;
				this.start = data[data.length - 1].name;
				console.log(this.list_post);
			});
		}, error => {

		});
	}

	loadMore(event){
		this.postsProv.getPost(this.start, 2).then(data => {
			this.loading.dismiss().then(() => {
				this.list_post = this.list_post.concat(data);
				console.log(data);
				if(data.length > 0){
					this.start = data[data.length - 1].name;
				}
				console.log(this.list_post);

				setTimeout(() => {
					event.target.disabled = true;
				}, 1500);
			});
		});
	}

	async presentLoading() {
		this.loading = await this.loadingCtrl.create({
			message: 'waiting',
			duration: 2000
		});
		return await this.loading.present();
	}

	ngOnInit() {
	}

	goBack() {
		this.navCtrl.back();
	}

}
