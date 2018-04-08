import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { TrendPage } from '../trend/trend';
import { BluetoothSerial } from '@ionic-native/bluetooth-serial';
import { ConnectionPage } from '../connection/connection';
@Component({
  selector: 'page-measure',
  templateUrl: 'measure.html',
})
export class MeasurePage {
  public var2: string ;
  public lists = [];
  public isScanning:boolean;
  public devices:any ;
  constructor(public bluetoothSerial:BluetoothSerial, public navCtrl: NavController, public navParams: NavParams) {
  }

  measure(){
    this.navCtrl.push(ConnectionPage);
  }

 trend(){
this.navCtrl.push(TrendPage);
 }
}
