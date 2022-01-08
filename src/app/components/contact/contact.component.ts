import { Component, OnInit } from '@angular/core';
//import * as $ from 'jquery';
declare var $:any;

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {
  public widthSlider!: number;
  public anchoToSlider!: any;
  public autor: any;

  constructor() { }

  ngOnInit(): void {
  }

  cargarSlider(){
    this.anchoToSlider = this.widthSlider;
  }
  borrarSlider(){
    this.anchoToSlider = false;
  }

  getAutor(event: any): void{
    this.autor = event;
  }
}

