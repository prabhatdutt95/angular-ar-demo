import { Component, OnInit , Input, OnChanges, SimpleChanges } from "@angular/core";
import { ProductConfiguratorService } from "../product-configurator.service";
// import { ActivatedRoute, Router } from "@angular/router";
import { ProductConfigurationEvent } from "../product-configurator-events";
import * as THREE from "three";
import { ProductConfigurator } from "../3D/ProductConfigurator";

@Component({
  selector: 'app-model-loader',
  templateUrl: './model-loader.component.html',
  styleUrls: ['./model-loader.component.css']
})
export class ModelLoaderComponent implements OnInit, OnChanges {
  @Input() extras:any;
  public loadingsStarted: number = 0;
  public loadingsFinished: number = 0;
  public renderer;

  constructor(private productConfiguratorService: ProductConfiguratorService) {
    console.log("inside model-loader")
    this.productConfiguratorService.getSubject(ProductConfigurationEvent.Loading_Started)
      .subscribe(() => {
        this.loadingsStarted++;
      });

    this.productConfiguratorService.getSubject(ProductConfigurationEvent.Loading_Finished)
      .subscribe(() => {
        this.loadingsFinished++;
        if (this.loadingsFinished === this.loadingsStarted) {
          this.loadingsStarted = 0;
          this.loadingsFinished = 0;
        }
      });
  }

  public ngOnInit(): void {
  }
  ngOnChanges(changes: SimpleChanges){
    if(this.renderer){
      this.onSceneInit(this.renderer, changes.extras.currentValue)
    }
  }

  public onSceneInit(renderer: THREE.WebGLRenderer, extras?) {
    this.renderer = renderer;
    if(extras){
      const productConfigurator = new ProductConfigurator(renderer, this.productConfiguratorService, extras);
    } else{
      const productConfigurator = new ProductConfigurator(renderer, this.productConfiguratorService);
    }
  }


}
