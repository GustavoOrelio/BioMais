import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  constructor(public router:Router) {}

  chamarDigestorio(){
    this.router.navigate(['digestorio']);
  }
  chamarCardiovascular(){
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
