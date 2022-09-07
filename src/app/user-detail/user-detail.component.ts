import { Component, OnInit } from '@angular/core';
import { Firestore } from '@angular/fire/firestore';
import { ActivatedRoute } from '@angular/router';
import { doc, getDoc, onSnapshot } from "@firebase/firestore";
import { User } from 'src/models/user.class';


@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.scss']
})
export class UserDetailComponent implements OnInit {


userId: any = '';
user: User = new User();

  constructor(private route: ActivatedRoute, private firestore: Firestore) { 

  }

  ngOnInit(): void {
    this.route.paramMap.subscribe( paramMap => {
      this.userId = paramMap.get('id');
      console.log('GOT ID', this.userId);
      this.getUser();
  })
  }

  async getUser() {
    const unsub = onSnapshot(doc(this.firestore, "users", this.userId), (u) => {
      this.user = new User(u.data());
      console.log("Current data: ", u.data());
  });
  }

  }


