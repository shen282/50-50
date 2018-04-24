/*import { Injectable } from '@angular/core';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import { AngularFireAuth } from 'angularfire2/auth';


export class Item {
  body: string;
}


@Injectable()
export class ItemService {

  items: FirebaseListObservable<Item[]> = null;
  userId: string;

  constructor(private db: AngularFireDatabase, private afAuth: AngularFireAuth) {
    this.afAuth.authState.subscribe(user => {
      if(user) this.userId = user.uid
    })
  }


  // Return an observable list with optional query
  // You will usually call this from OnInit in a component
  getItemsList(): FirebaseListObservable<Item[]> {
    if (!this.userId) return;
    this.items = this.db.list(`items/${this.userId}`);
    return this.items
  }


  createItem(item: Item)  {
    this.items.push(item)
  }

}*/
var database = firebase.database();

var textIn = document.getElementById("testB");
var text = "h";

function testBoard(){
  window.alert("hi");
  //document.getElementById("testId").innerHTML = "userid&email " + uID + email;
  firebase.database().ref().child("users/"+uID).set({score: 100});


}

function testBoard2(){
  window.alert(uID);
  firebase.database().ref().child("users/"+uID).set({score: 200});
}
