import { Component, OnInit } from '@angular/core';
import { User } from 'src/models/user.class';
import { Firestore, collectionData } from '@angular/fire/firestore';
import { collection, addDoc } from "firebase/firestore";
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-dialog-edit-address',
  templateUrl: './dialog-edit-address.component.html',
  styleUrls: ['./dialog-edit-address.component.scss']
})
export class DialogEditAddressComponent implements OnInit {

  user: User = new User;
  userId: any;
  loading = false;

  constructor(public dialogRef: MatDialogRef<DialogEditAddressComponent>, private firestore: Firestore) { }

  ngOnInit(): void {
    console.log('user', this.user);
    console.log('userID', this.userId);
  }

  saveUser() {
    this.loading = true;
/*this.firestore
.collection('users')
.doc(this.userId)
.update(this.user.toJSON());

    .then(() => {
      this.loading = false;
      this.dialogRef.close();
    });
*/

  }

}
