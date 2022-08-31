import { Component, OnInit } from '@angular/core';
import { User } from 'src/models/user.class';
import { Firestore, collectionData, collection } from '@angular/fire/firestore';
import { doc, setDoc } from "firebase/firestore";

@Component({
  selector: 'app-dialog-add-user',
  templateUrl: './dialog-add-user.component.html',
  styleUrls: ['./dialog-add-user.component.scss']
})
export class DialogAddUserComponent implements OnInit {

  user = new User();
  birthDate!: Date;

  constructor(private firestore: Firestore) {
  }

  ngOnInit(): void {
  }

  async saveUser() {
    this.user.birthDate = this.birthDate.getTime();
    console.log('CurrentUser', this.user);

    await setDoc(doc(this.firestore, "users"), this.user)
    .then((result: any) => { console.log('adding user finished', result)
   })
    .catch((e) => {console.error('error: ', e);
    });

  }
}
