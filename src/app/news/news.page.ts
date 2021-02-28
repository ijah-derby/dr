import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { NavController, MenuController } from "@ionic/angular";
@Component({
  selector: 'app-news',
  templateUrl: './news.page.html',
  styleUrls: ['./news.page.scss'],
})
export class NewsPage  {
  articles;

  constructor(private apiService: ApiService,private navCtrl: NavController,
    private manuCtrl: MenuController) { 

  }

     ionViewDidEnter(){
     
    this.apiService.getNews().subscribe((data)=>{
      console.log(data);
      this.articles = data['articles'];
    });
     }

     openMenu() {
      this.manuCtrl.enable(true, "first");
      this.manuCtrl.toggle("first");
     }
  
    

  ngOnInit() {
  }
}

