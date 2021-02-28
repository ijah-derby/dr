import { Injectable } from '@angular/core';
import { Events } from '@ionic/angular'
import { Storage } from '@ionic/storage';
import { IonicStorageModule } from '@ionic/storage';
import { AngularFirestore } from '@angular/fire/firestore';
/*
Generated class for the HelpersProvider provider.

See https://angular.io/guide/dependency-injection for more info on providers
and Angular DI.
*/
@Injectable()
export class CurrenciesProvider {

  setting: any = null;

  private snapshotChangesSubscription: any;

	constructor(private storage: Storage, public afs: AngularFirestore) {
    if(this.setting == null){
      new Promise<any>((resolve, reject) => {
        this.snapshotChangesSubscription = this.afs.collection('settings').valueChanges()
        .subscribe(snapshots => {
          this.setting = snapshots[0];
          this.storage.set('setting', snapshots[0]);
          console.log(this.setting);
          this.snapshotChangesSubscription.unsubscribe();
        })
      })
    }
	}

	formatMoney(money){
    const formatter = Intl.NumberFormat(this.setting.currency_language_code +'-'+ this.setting.currency_iso_alpha2, {
      style: 'currency',
      currency: this.setting.currency_code
    })
    return formatter.format(money);
	}


}