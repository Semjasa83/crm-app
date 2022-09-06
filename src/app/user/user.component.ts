import { Component, OnInit } from '@angular/core';
import { Firestore } from '@angular/fire/firestore';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { User } from 'src/models/user.class';
import { DialogAddUserComponent } from '../dialog-add-user/dialog-add-user.component';
import { collection, collectionData } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {

  user = new User();  
  allUsers$: Observable<any>;
  allUsers = [];

  constructor(public dialog: MatDialog, private firestore: Firestore) { 

    const coll = collection(firestore, 'users');
    this.allUsers$ = collectionData(coll);

    this.allUsers$.subscribe((changes: any) => {
      console.log('received changes:', changes);
      this.allUsers = changes;
      console.log(this.allUsers);
    })
  }

  ngOnInit(): void {

  }

  openDialog() {
    this.dialog.open(DialogAddUserComponent);
  }
}
