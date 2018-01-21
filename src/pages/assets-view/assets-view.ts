import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AssetsEditPage } from "../assets-edit/assets-edit";

/**
 * Generated class for the AssetsViewPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
    selector: 'page-assets-view',
    templateUrl: 'assets-view.html',
})
export class AssetsViewPage {

    constructor(public navCtrl: NavController, public navParams: NavParams) {
    }

    goAssetsEditPage() {
        this.navCtrl.setRoot(AssetsEditPage);
    }


    ionViewDidLoad() {
        console.log('ionViewDidLoad AssetsViewPage');
    }

}