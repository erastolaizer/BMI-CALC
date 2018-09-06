import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { UbongoPage } from '../ubongo/ubongo';
import { LiverPage } from '../liver/liver';
import { BreastsPage } from '../breasts/breasts';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }
  ubongo(){
    this.navCtrl.push(UbongoPage);
  }
  ini(){
    this.navCtrl.push(LiverPage);
  }
  matiti(){
    this.navCtrl.push(BreastsPage);
  }
}
