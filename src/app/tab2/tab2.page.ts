import { Component, ElementRef, ViewChild } from '@angular/core';


@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  map: google.maps.Map;

  @ViewChild('map',{read : ElementRef,static : false }) mapRef: ElementRef;

  constructor() {}

  ionViewWillEnter(){
   this.exibirMapa();
  }

  exibirMapa(){
    const posicao = new google.maps.LatLng(-28.359387, -49.290233);
    const opcoes = {
      center: posicao,
      zoom: 8,
      //disableDefaultUI: true
    };

    
    this.map = new google.maps.Map(this.mapRef.nativeElement, opcoes);

    new google.maps.Marker({
      position : posicao,
      map : this.map,
      title: "Teste Aplicativo",
      animation: google.maps.Animation.BOUNCE 
    });


  }

}



