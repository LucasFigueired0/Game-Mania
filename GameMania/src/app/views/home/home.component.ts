import { style } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';

declare var aumentarImg: () => void;

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  constructor() { }
  ngOnInit(): void {
    let logo: any = document.querySelector('.logo_imagem');
    
  }
}

