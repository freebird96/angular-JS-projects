import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { AngularFireDatabase} from 'angularfire2/database';

/**
 * Generated class for the ChatPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

//@IonicPage()
@Component({
  selector: 'page-chat',
  templateUrl: 'chat.html',
})
export class ChatPage {
    
    username: string ='';
    message: string = '';
    s;
    messages: object[] = [];

  constructor(public db: AngularFireDatabase, public navCtrl: NavController, public navParams: NavParams) {
      this.username = this.navParams.get('username');
      this.s = this.db.list('/chat').valueChanges().subscribe( data =>{
          data.map(elem => {
              this.messages.push(elem);
          });
      });
  }
    
sendMessage() {
        this.db.list('/chat').push({
              username: this.username,
              message: this.message
        })
}
    
  ionViewDidLoad() {
    console.log('ionViewDidLoad ChatPage');
  }

}
    

