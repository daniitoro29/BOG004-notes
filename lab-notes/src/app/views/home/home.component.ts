import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
img: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }
  //Esto es un método. Solo se activa cuando le damos click al botón
  showTag(){
    this.img=true;
  }

}
