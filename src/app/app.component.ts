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
  backSteering = false;
  colors = ["White","Red","Blue","Yellow","Green"];
  color="";
  addExtras(colorChange?){
    this.extras=[this.extraTyres,this.frontLoader,this.extraLights, this.backSteering,this.color]
  }
}
