import { Component, OnInit } from '@angular/core';
import { LoadingController } from '@ionic/angular';
import { ActivatedRoute } from '@angular/router';
import { PostsProvider } from '../providers/posts';
import { SocialSharing } from '@ionic-native/social-sharing/ngx';

@Component({
	selector: 'app-post',
	templateUrl: './post.page.html',
	styleUrls: ['./post.page.scss'],
})
export class PostPage implements OnInit {

	obj: any;
	list_related: any= [];
	loading: any;

	constructor(
		public loadingCtrl: LoadingController, 
		public postsProv: PostsProvider, 
		private route: ActivatedRoute,
		public socialSharing: SocialSharing
	) { 

		// this.presentLoading();
		
		this.route.params.subscribe(params => {
			this.obj = params;
			this.postsProv.getPostByRelated(this.obj.tag, this.obj.name).then(data => {
				// this.loading.dismiss().then(() => {
					this.list_related = data;
					console.log(this.list_related);
				// });
			});
		});

		console.log(this.obj);
	}

	ionViewWillEnter(){
	}

	share(link){
		this.socialSharing.share(this.obj.name, this.obj.description, null , link);
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

}
