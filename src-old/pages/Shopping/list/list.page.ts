import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { LoadingController, ToastController, Events } from '@ionic/angular';
import { CategoriesProvider } from '../providers/categories';
import { ProductsProvider } from '../providers/products';
import { CurrenciesProvider } from '../providers/currencies';
import { FavoritesProvider } from '../providers/favorites';
import { Storage } from '@ionic/storage';
import { IUser } from 'src/pages/auth/helpers/model';
import { AuthService } from 'src/pages/auth/services/auth/auth.service';

@Component({
  selector: 'app-list',
  templateUrl: 'list.page.html',
  styleUrls: ['list.page.scss']
})
export class ListPage implements OnInit {

  obj: any;
  list_cat: any= [];
  list_cart: any= [];
  loading: any;
  list_product: any = [];
  list_slide_product: any = [];
  id_user: any;
  favo_str: string = '';
  id_favo_str: any;
  start: any;
  arr_start: any;
  jump: number = 4;

  u_grid: boolean = true;

  slidePerViewOpts = {
    speed: 1000,
    spaceBetween: 16,
    centeredSlides: true,
    initialSlide: 1,
    slidesPerView: 3
  };

  constructor(
    private route: ActivatedRoute,
    public events: Events, 
    public catProv: CategoriesProvider, 
    public toastCtrl: ToastController, 
    public favoritesProv: FavoritesProvider, 
    private storage: Storage, 
    public currenciesProv: CurrenciesProvider, 
    public loadingCtrl: LoadingController, 
    public productsProv: ProductsProvider,
    private authService: AuthService
  ) {

    this.presentLoading();
    
    this.route.queryParams.subscribe(params => {
      console.log(params);
      this.obj = params;
      console.log(this.obj);

      this.arr_start = new Array();
      this.list_product = new Array();

      this.catProv.getCatChild(this.obj.id).then(data => {
        this.list_cat = data;
        console.log(this.list_cat);
        console.log(data.length);

        if(data.length > 0){
          for (var i = 0; i < data.length; ++i) {
            // console.log(this.list_cat[i].payload.doc.id);
            let jump = 2;
            this.productsProv.getProductByCat(null, jump, this.obj.id).then(val => {
              if(val && val.length > 0){
                console.log(val);
                this.list_product = this.list_product.concat(val);
                this.arr_start = this.arr_start.concat(val[val.length - 1].payload.doc.data().id_cat);
                console.log(this.list_product);
              }else{
                // jump = jump + 4;
                // this.productsProv.getProductByCat(null, jump, this.list_cat[i].payload.doc.id);
              }
            }, error => {

            });
          }
        }else{
          this.productsProv.getProductByCat(null, 2, this.obj.id).then(data => {
            if(data && data.length > 0){
              this.list_product = data;
              this.start = data[data.length - 1].payload.doc.data().id_cat;
              console.log(this.list_product);
            }else{

            }
          }, error => {

          });
        }
      }, error => {

      });


      this.productsProv.getProductBySlide(5, this.obj.id).then(data => {
        this.list_slide_product = data;
        console.log(this.list_slide_product);
      });

      this.storage.get('cart_list').then((val) => {
        if(!val || val == null){
          this.list_cart = new Array();
        }else{
          this.list_cart = val;
        }
        console.log(this.list_cart);
      });
      

      this.events.subscribe('cart_list: change', (lst) => {
        this.list_cart = lst;
      });
    });
    // if(!this.obj) {return;}
  }

  ionViewWillEnter(){ 
    
  }

  loadMore(event){
    if(this.list_cat.length > 0){
      for (var i = 0; i < this.list_cat.length; ++i) {
        console.log(this.list_cat[i].payload.doc.id);
        console.log(this.arr_start[i]);
        let jump = 2;
        this.productsProv.getProductByCat(this.arr_start[i], jump, this.list_cat[i].payload.doc.id).then(val => {
          if(val && val.length > 0){
            console.log(val);
            this.list_product = this.list_product.concat(val);
            this.arr_start[i] = val[val.length - 1].payload.doc.data().id_cat;
            console.log(this.list_product);

            setTimeout(() => {
              event.target.disabled = true;
            }, 1500);
          }else{
            // jump = jump + 4;
            // this.productsProv.getProductByCat(this.arr_start[i], jump, this.list_cat[i].payload.doc.id);
            setTimeout(() => {
              event.target.disabled = true;
            }, 1500);
          }
        }, error => {
          setTimeout(() => {
            event.target.disabled = true;
          }, 1500);
        });
      }
    }else{
      console.log(this.start);
      this.productsProv.getProductByCat(this.start, 2, this.obj.id).then(data => {
        if(data && data.length > 0){
          console.log(data);
          this.list_product = this.list_product.concat(data);
          this.start = data[data.length - 1].payload.doc.data().id_cat;
          console.log(this.start);
        }else{

        }
      }, error => {

      });
    }
  }



  favorites(item){
    console.log(item.payload.doc.id);
    let check = this.favo_str.indexOf(item.payload.doc.id);
    if(check == -1){
      this.favo_str = this.favo_str + item.payload.doc.id + ' ';
    }else{
      this.favo_str = this.favo_str.replace(item.payload.doc.id + ' ', '');
    }
    this.favoritesProv.favoritesAdd(this.favo_str, this.id_user, this.id_favo_str).then((data) => {
      if(!this.id_favo_str || this.id_favo_str == null){
        this.favoritesProv.getByUserId(this.id_user).then(newFavo => {
          this.id_favo_str = newFavo[0].payload.doc.id;
        })
      }
    })
  }



  addCart(item){

    console.log(item);

    let itemCv = {
      id: item.payload.doc.id,
      name: item.payload.doc.data().name,
      price: item.payload.doc.data().price,
      discount: item.payload.doc.data().discount,
      description: item.payload.doc.data().description,
      vote: item.payload.doc.data().vote,
      created: item.payload.doc.data().created,
      id_cat: item.payload.doc.data().id_cat,
      tag: item.payload.doc.data().tag,
      thumb: item.payload.doc.data().thumb,
      thumb1: item.payload.doc.data().thumb1,
      thumb2: item.payload.doc.data().thumb2,
      thumb3: item.payload.doc.data().thumb3,
      thumb4: item.payload.doc.data().thumb4,
      quantity: 1
    }

    let temp = this.list_cart.filter((element) => {
      if(element.id == itemCv.id){
        element.quantity = 1 + element.quantity;
        return true;
      }
    })

    console.log(temp);

    if(temp.length == 0){
      this.list_cart = this.list_cart.concat(itemCv);
    }

    const toast = this.toastCtrl.create({
      message: 'added success',
      duration: 2000,
      position: 'top'
    });

    this.presentToast();

    // this.list_cart = new Array();
    this.events.publish('cart_list: change', this.list_cart);
    this.storage.set('cart_list', this.list_cart);
    console.log(this.list_cart);
  }



  async presentLoading() {
    this.loading = await this.loadingCtrl.create({
      message: 'waiting',
      duration: 2000
    });
    return await this.loading.present();
  }
  async presentToast() {
    const toast = await this.toastCtrl.create({
      message: 'added success',
      duration: 2000,
      position: 'top'
    });
    toast.present();
  }


  u_list(val){
    this.u_grid = val;
  }



  async ngOnInit() {
    let currentUser: IUser = await this.authService.getUser();
    this.id_user = currentUser.uid;
    this.favoritesProv.getByUserId(this.id_user).then(data => {
      this.loading.dismiss().then(() => {
        if(data.length > 0){
          this.favo_str = data[0].payload.doc.data().id_product;
          this.id_favo_str = data[0].payload.doc.id;
          console.log(data);
        }
      })
    });
  }
  // add back when alpha.4 is out
  // navigate(item) {
    //   this.router.navigate(['/list', JSON.stringify(item)]);
    // }
  }
