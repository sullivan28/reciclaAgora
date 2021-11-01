import { Component } from '@angular/core';
import { ApiService } from './../services/api.service';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  constructor(private ApiService: ApiService) {
    //  this.createData();
    // this.readData();
    // this.updateDate();
    //   this.deleteData();


  }

  bntClicked() {
    console.log("bnt Clicked");
    alert("Cadastro Com Sucesso")
  }


  // creadtData(){
  //  this.ApiService.createData(data).subscribe(data => {console.log(data)})
  //}
  //readData(){
  //  this.ApiService.readData().subscribe(data => {console.log(data)});
  // }

  //   updataData(){   
  //     this.ApiService.updateData(data).subscribe(data => {console.log(data)});
  //}

  // deleteData(){
  //   this.ApiService.deleteData().subscribe(data => {console.log.(data)});
  //}



}
