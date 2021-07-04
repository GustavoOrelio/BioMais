import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'
@Component({
  selector: 'app-digestorio',
  templateUrl: './digestorio.page.html',
  styleUrls: ['./digestorio.page.scss'],
})
export class DigestorioPage implements OnInit {

  constructor(public router:Router) {}

  ngOnInit() {
  }
  chamarBoca(){
    this.router.navigate(['boca'])
  }
  chamarFaringe(){
    this.router.navigate(['faringe'])
  }
  chamarEsofago(){
    this.router.navigate(['esofago'])
  }
  chamarEstomago(){
    this.router.navigate(['estomago'])
  }
  chamarIntestinoDel(){
    this.router.navigate(['intestino'])
  }
  chamarIntestinoGro(){
    this.router.navigate(['intestino-grosso'])
  }
  chamarAnus(){
    this.router.navigate(['anus'])
  }

}
