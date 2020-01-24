import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Project';
  extras = []
  extraTyres = false;
  frontLoader = false;
  extraLights = false;
  addExtras(){
    this.extras=[this.extraTyres,this.frontLoader,this.extraLights]
    console.log(this.extras)
  }
}
