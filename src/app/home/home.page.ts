import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { LogueoComponent } from '../logueo/logueo.component';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: true,
  imports: [IonicModule,LogueoComponent, RouterLink],
})
export class HomePage {
  constructor() {}

  aLogueo(){
    console.log("veamos");
  }
}
