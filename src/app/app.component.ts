import { Component } from '@angular/core';
import * as firebase from 'firebase';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  constructor() {
    // Your web app's Firebase configuration
    var firebaseConfig = {
      apiKey: "AIzaSyD6192og8qCXXsL18Jb4Ugwhs7ZkdvdfNc",
      authDomain: "http-client-demo-216ff.firebaseapp.com",
      databaseURL: "https://http-client-demo-216ff.firebaseio.com",
      projectId: "http-client-demo-216ff",
      storageBucket: "http-client-demo-216ff.appspot.com",
      messagingSenderId: "38702379277",
      appId: "1:38702379277:web:eed35679dc86e0fb47c044",
      measurementId: "G-EK4SKK7F82"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
    firebase.analytics();
  }
}
