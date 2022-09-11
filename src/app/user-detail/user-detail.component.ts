import { Component, OnInit } from '@angular/core';
import { Firestore } from '@angular/fire/firestore';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute } from '@angular/router';
import { doc, getDoc, onSnapshot } from "@firebase/firestore";
import { User } from 'src/models/user.class';
import { DialogEditAddressComponent } from '../dialog-edit-address/dialog-edit-address.component';
import { DialogEditUserComponent } from '../dialog-edit-user/dialog-edit-user.component';


@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.scss']
})
export class UserDetailComponent implements OnInit {


  userId: any = '';
  user: User = new User();

  constructor(private route: ActivatedRoute, private firestore: Firestore, public dialog: MatDialog) {

  }

  ngOnInit(): void {
    this.route.paramMap.subscribe(paramMap => {
      this.userId = paramMap.get('id');
      //console.log('GOT ID', this.userId);  // _____CONSOLE
      this.getUser();
    })
  }

  async getUser() {
    const unsub = onSnapshot(doc(this.firestore, "users", this.userId), (u) => {
      this.user = new User(u.data());
      this.user.id = this.userId;
      //console.log("Current data: ", u.data());    // _____CONSOLE
    });
  }

  editUserDetail() {
    const dialog = this.dialog.open(DialogEditUserComponent);
    dialog.componentInstance.user = new User(this.user.toJSON()) //copy the Object for changes
    dialog.componentInstance.userId = this.userId;
  }

  editUserAddress() {
    const dialog = this.dialog.open(DialogEditAddressComponent);
    dialog.componentInstance.user = new User(this.user.toJSON());
    dialog.componentInstance.userId = this.userId;
  }


}