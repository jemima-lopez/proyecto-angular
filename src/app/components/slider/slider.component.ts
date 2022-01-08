import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
declare var $:any;

@Component({
  selector: 'slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.scss']
})
export class SliderComponent implements OnInit {

  @Input()
  ancho!: number;
  @Output() conseguirAutor = new EventEmitter();

  public autor: any;

  constructor() {
    this.autor = {
      nombre: "Jemima Lopez",
      email: "jlopezj11@gmail.com"
    }
   }

  ngOnInit(): void {
    $("#logo").click(function(e: { preventDefault: () => void; }): void{
      e.preventDefault();
      $("header").css("background","green")
                 .css("height","90px");
    });

    $('.galeria').bxSlider({
      mode: 'fade',
      caption: false,
      slideWidth: this.ancho
    });

    this.conseguirAutor.emit(this.autor);
  }

  lanzar(event: any): void{
    this.conseguirAutor.emit(this.autor);
  }

}
