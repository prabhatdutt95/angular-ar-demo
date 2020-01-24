import { Component, ElementRef, EventEmitter, OnInit, Output, ViewChild } from "@angular/core";
import { WebGLRenderer } from "three";

@Component({
  selector: 'app-model-viewer',
  templateUrl: './model-viewer.component.html',
  styleUrls: ['./model-viewer.component.css']
})
export class ModelViewerComponent implements OnInit {

  @ViewChild("canvas", {static: true})
  canvasRef !: ElementRef;

  @Output()
  public sceneInit: EventEmitter<WebGLRenderer> = new EventEmitter();

  constructor() {
  }

  ngOnInit() {
    const canvas: HTMLCanvasElement = this.canvasRef.nativeElement;
    const renderer = new WebGLRenderer({ canvas, antialias: true });
    this.sceneInit.emit(renderer);
  }
  ngAfterViewInit(){
    this.canvasRef.nativeElement.ownerDocument.body.style.backgroundColor = 'white';
 }
}
