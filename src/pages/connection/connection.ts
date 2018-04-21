import { Component } from "@angular/core";
import { NavController, ToastController } from "ionic-angular";
import { BluetoothSerial } from "@ionic-native/bluetooth-serial";
import { AlertController } from "ionic-angular";

@Component({
  selector: "page-connection",
  templateUrl: "connection.html"
})
export class ConnectionPage {
  unpairedDevices: any;
  pairedDevices: any;
  gettingDevices: Boolean;
  public measure1: any = [];
  public measure2: any = [];
  public measure3: any = [];

  constructor(
    private bluetoothSerial: BluetoothSerial,
    private alertCtrl: AlertController,
    private toastCtrl: ToastController
  ) {
    bluetoothSerial.enable();
  }

  startScanning() {
    this.pairedDevices = null;
    this.unpairedDevices = null;
    this.gettingDevices = true;
    this.bluetoothSerial.discoverUnpaired().then(
      success => {
        this.unpairedDevices = success;
        this.gettingDevices = false;
        success.forEach(element => {
          // alert(element.name);
        });
      },
      err => {
        console.log(err);
      }
    );

    this.bluetoothSerial.list().then(
      success => {
        this.pairedDevices = success;
      },
      err => {}
    );
  }
  success = data => alert(data);
  fail = error => alert(error);

  selectDevice(address: any) {
    let alert = this.alertCtrl.create({
      title: "Connect",
      message: "Do you want to connect with?",
      buttons: [
        {
          text: "Cancel",
          role: "cancel",
          handler: () => {
            console.log("Cancel clicked");
          }
        },
        {
          text: "Connect",
          handler: () => {
            this.bluetoothSerial.connect(address).subscribe(
              success => {
                this.bluetoothSerial.write("5").then(
                  data1 => {
                    this.bluetoothSerial.available().then(
                      numb => {
                        let bluetoothData: string;
                        this.bluetoothSerial.subscribe("F").subscribe(
                          rawData => {
                            console.log(JSON.stringify(rawData.split(";")));
                            let data = rawData.split(";");
                            this.measure1 = data[0];
                            this.bluetoothSerial.disconnect();
                          },
                          readError => {
                            console.log(readError);
                            this.bluetoothSerial.disconnect();
                          }
                        );
                      },
                      err => {
                        this.sendNotification("no serial data");
                      }
                    );
                  },
                  error => {
                    this.sendNotification("failed to send data");
                  }
                );
              },
              fail => {
                this.sendNotification("Connection failed");
              }
            );
          }
        }
      ]
    });
    alert.present();
  }

  disconnect() {
    let alert = this.alertCtrl.create({
      title: "Disconnect?",
      message: "Do you want to Disconnect?",
      buttons: [
        {
          text: "Cancel",
          role: "cancel",
          handler: () => {
            console.log("Cancel clicked");
          }
        },
        {
          text: "Disconnect",
          handler: () => {
            this.bluetoothSerial.disconnect();
          }
        }
      ]
    });
    alert.present();
  }

  Initiate(address) {
    this.bluetoothSerial.connect(address).subscribe(
      success => {
        this.bluetoothSerial
          .write("1")
          .then((data: any) => {
            this.measuring();
          })
          .catch(e => {
            this.sendNotification("Can not send data"); // Error alert
          });
      },
      error => {
        this.sendNotification("Connection failed"); // Error alert
      }
    );
  }

  measuring() {
    /*  this.bluetoothSerial.available().then((number: any) => {
      this.bluetoothSerial.subscribeRawData().subscribe(rawData => {
        this.bluetoothSerial.read().then(
          (data: any) => {
            this.measure2 = JSON.stringify(data);
            console.log(data);
            this.sendNotification("we get " + this.measure2);
            this.bluetoothSerial.clear();
            this.bluetoothSerial.disconnect();
          },
          error => {
            this.sendNotification("fail to receive");
          }
        );
      });
    });   */
  }

  sendNotification(message): void {
    let notification = this.toastCtrl.create({
      message: message,
      duration: 5000
    });
    notification.present();
  }
}
