import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { IonicModule } from '@ionic/angular';



@Component({
  standalone:true,
  selector: 'app-logueo',
  templateUrl: './logueo.component.html',
  styleUrls: ['./logueo.component.scss'],
  imports:[RouterLink,IonicModule]
})
export class LogueoComponent  implements OnInit {

  constructor() { }

  aPersona(){}

  ngOnInit() {}

}
