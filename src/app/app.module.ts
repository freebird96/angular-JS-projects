import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { AngularFireModule } from 'angularfire2';
import { ChatPage } from '../pages/chat/chat';
import { AngularFireDatabaseModule } from 'angularfire2/database';


var config = {
    apiKey: "AIzaSyCiW7yV4QTp8v3JdBUL5yyODkNEUF6z6bA",
    authDomain: "chat-app-8eb6c.firebaseapp.com",
    databaseURL: "https://chat-app-8eb6c.firebaseio.com",
    projectId: "chat-app-8eb6c",
    storageBucket: "chat-app-8eb6c.appspot.com",
    messagingSenderId: "824729096082"
  };


@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ChatPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(config),
    AngularFireDatabaseModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ChatPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
