import { Component } from '@angular/core';
import { Socket } from 'ngx-socket-io';
import { ToastController } from '@ionic/angular';
@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
  darkMode: boolean = true;
  message = '';
  messages = [];
  currentUser = '';
  cont = 0;
  constructor(private socket: Socket, private toastCtrl: ToastController) { }

  ngOnInit() {

    setTimeout(data => {
      this.cont++;
      console.log('Revisando', this.cont);
    }, 2500);
    this.socket.connect();
    let name = `Usuario -${new Date().getTime()}`;
    this.currentUser = name;

    this.socket.emit('set-name', name);

    this.socket.fromEvent('users-changed').subscribe(data => {
      let user = data['user'];
      if (data['event'] === 'left') {
        this.showToast('User left: ' + user);
      } else {
        this.showToast('User joined: ' + user);
      }
    });

    this.socket.fromEvent('message').subscribe(message => {
      this.showToast(message['msg']);
      this.messages.push(message);
    });
  }

  sendMessage() {
    this.socket.emit('send-message', { text: this.message });
    this.message = '';
  }

  ionViewWillLeave() {
    this.socket.disconnect();
  }

  async showToast(msg) {
    let toast = await this.toastCtrl.create({
      message: msg,
      position: 'top',
      duration: 1000
    });
    toast.present();
  }

  cambio() {
    this.darkMode = !this.darkMode;
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)');
    document.body.classList.toggle('dark');

  }

}
