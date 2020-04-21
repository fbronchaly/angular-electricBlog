import { Component, OnInit } from '@angular/core';
import { FirebaseService } from '../firebase.service';


@Component({
  selector: 'app-portada',
  templateUrl: './portada.component.html',
  styleUrls: ['./portada.component.css']
})
export class PortadaComponent implements OnInit {

  constructor(private firebaseService: FirebaseService) {  }

  ngOnInit() {
    this.firebaseService.getUsers()
    .subscribe(result => {
      this.items = result;
    })
  }

}