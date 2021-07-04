import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  constructor(public router:Router) {}

  chamardiGestorio(){
    this.router.navigate(['digestorio']);
  }
  chamarConf(){
    this.router.navigate(['configuracoes'])
  }
  chamarcarDiovascular(){
    this.router.navigate(['cardiovascular'])
  }
  chamarRespiratorio(){
    this.router.navigate(['respiratorio'])
  }
  chamarUrinario(){
    this.router.navigate(['urinario'])
  }
  chamarReprodutor(){
    this.router.navigate(['reprodutor'])
  }

}
