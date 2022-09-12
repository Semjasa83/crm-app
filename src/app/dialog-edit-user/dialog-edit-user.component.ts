import { Component, OnInit } from '@angular/core';
import { User } from 'src/models/user.class';
import { Firestore, collectionData } from '@angular/fire/firestore';
import { collection, addDoc } from "firebase/firestore";
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { doc, updateDoc } from "firebase/firestore";
@Component({
  selector: 'app-dialog-edit-user',
  templateUrl: './dialog-edit-user.component.html',
  styleUrls: ['./dialog-edit-user.component.scss']
})
export class DialogEditUserComponent implements OnInit {

  user!: User;
  userId: any;
  loading = false;
  birthDate!: Date;

  constructor(public dialogRef: MatDialogRef<DialogEditUserComponent>, private firestore: Firestore) { }

  ngOnInit(): void {
  }

  async saveUser() {
    this.loading = true;
    
    const editData = doc(this.firestore, "users", this.userId);
    await updateDoc(editData, {
      firstName: this.user.firstName,
      lastName: this.user.lastName,
      email: this.user.email,
      }).then(() => {
        this.loading = false;
        this.dialogRef.close();
      })
      ;
  }

}
