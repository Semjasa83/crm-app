import { Component, OnInit } from '@angular/core';
import { User } from 'src/models/user.class';
import { Firestore, collectionData } from '@angular/fire/firestore';
import { collection, addDoc } from "firebase/firestore";
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { doc, updateDoc } from "firebase/firestore";

@Component({
  selector: 'app-dialog-edit-address',
  templateUrl: './dialog-edit-address.component.html',
  styleUrls: ['./dialog-edit-address.component.scss']
})
export class DialogEditAddressComponent implements OnInit {

  user!: User;
  userId: any;
  loading = false;

  constructor(public dialogRef: MatDialogRef<DialogEditAddressComponent>, private firestore: Firestore) { }

  ngOnInit(): void {
    //console.log('user', this.user); // _____CONSOLE
    //console.log('userID', this.userId); // _____CONSOLE
  }

  async saveUser() {
    this.loading = true;

    const editData = doc(this.firestore, "users", this.userId);
    await updateDoc(editData, {
      street: this.user.street,
      zipCode: this.user.zipCode,
      city: this.user.city,
      }).then(() => {
        this.loading = false;
        this.dialogRef.close();
      })
      ;
  }

}
