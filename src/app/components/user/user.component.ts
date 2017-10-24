import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';
import { Address } from '../../models/Address';
import { Posts } from '../../models/Posts';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  name: string;
  age: number;
  email: string;
  address: Address;
  hobbies: string[]; /*it can by any or number*/
  posts: Posts[]; /* use [] because you're getting an array*/
  isEdit = false;

  constructor(private dataService: DataService) {
    console.log('constructor ran...');
  }

  ngOnInit() {
    console.log('ngOnInit ran...');

    this.name = 'John Doe';
    this.age = 30;
    this.email = 'my@email.com';

    this.address = {
      street: 'streetName',
      city: 'San Francisco',
      state: 'CA'
    };

    this.hobbies = ['football', 'parkour', 'write code'];

    /* POSTS HERE */
    this.dataService.getPosts().subscribe((posts) => {
      console.log(posts);
      this.posts = posts;
    });

  }

  onClick() {
    this.name = 'Peter';
    this.hobbies.push('New Hobby');
  }

  addHobby(hobby) {
    console.log(hobby);
    this.hobbies.unshift(hobby);
    return false;
  }

  deleteHobby(hobby) {
    for (let i = 0; i < this.hobbies.length; i++) {
      if (this.hobbies[i] === hobby) {
          this.hobbies.splice(i, 1);
      }
    }
  }

  toggleEdit() {
    this.isEdit = !this.isEdit;
  }

}

// YOU CAN USE INTERFACES INSTEAD OF CLASSES BUT INTERFACES WORK WITH SIGNATURES ONLY
// THIS MEANS THEY CANNOT HAVE IMPLEMENTATIONS (METHODS) INSIDE OF THEM
/* interface Address {
  street: string,
  city: string,
  state: string,
  doSomething: () => void
} */
