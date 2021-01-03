import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { PagSeguroProvider } from '../../providers/pag-seguro/pag-seguro';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController, private pagseg: PagSeguroProvider) {
    this.pagseg.iniciar("eneylton@hotmail.com", "A7BC0FCBD91A4571A741E367DD355A98", true);

  }

}
