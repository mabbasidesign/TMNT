import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

  var config = {
    apiKey: "AIzaSyDV3DxqcwOD28EUSSjQLDckhgXdWVjVi7Q",
    authDomain: "net-ninja-marioplan-814cd.firebaseapp.com",
    databaseURL: "https://net-ninja-marioplan-814cd.firebaseio.com",
    projectId: "net-ninja-marioplan-814cd",
    storageBucket: "net-ninja-marioplan-814cd.appspot.com",
    messagingSenderId: "80501941899"
  };
  firebase.initializeApp(config);
  firebase.firestore().settings({ timestampsInSnapshots: true });

export default firebase 
