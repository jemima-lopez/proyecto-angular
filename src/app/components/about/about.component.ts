import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {
  public title: string;
  public subtitle: string;
  public email: string;

  constructor() {
    this.title = "Jemima Lopez Juarez";
    this.subtitle = "Desarrolladora Web";
    this.email = "jlopezj11@miumg.edu.gt";
   }

  ngOnInit(): void {
  }

}
