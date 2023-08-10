import { Component, OnInit } from '@angular/core';
import { RangeValueAccessor } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import {IonicStorageModule} from  '@ionic/storage-angular';
import { AppAlmacenamientoService } from 'src/services/app-almacenamiento.service';
import { CommonModule } from '@angular/common';




@Component({
  standalone:true,
  selector: 'app-persona',
  templateUrl: './persona.component.html',
  styleUrls: ['./persona.component.scss'],

imports: [ RouterLink,IonicModule,IonicStorageModule,CommonModule]
})
export class PersonaComponent  implements OnInit {

  
  generos =[
    {id:1,
     nombre:"Femenido",
   }
];

  pesovalue = '';
  estaturavalue = '';
  nacimientovalue = '';
  actividadvalue = '';
  generovalue= '';
  private objetoPersona = {pesoobj: '', estaturaobj: '', genero:'', nacimientoobj:'', actividadobj: '', keyobj:'' , dietaobj:'', preferenciasobj:[{id:0, nombre:''}], restriccionesobj:[{id:0 ,nombre:''}], otrarestriccion:"", objetivosobj:[{id:0, nombre:''}] };

  constructor(private appalmacenamientoservice:AppAlmacenamientoService) { }


  rangoCambia(evento:any){
    
    console.log (evento.detail.value.upper);
    this.actividadvalue = evento.detail.value.upper;
  }

  pinFormatter(value: number) {
    return `${value} horas`;
  }

  onInputPeso(ev: { target: any; }){
    const value = ev.target!.value;
    this.pesovalue = value;
  }
  onInputEstatura(ev: { target: any; }){
    const value = ev.target!.value;
    this.estaturavalue = value;
  }
  
  onInputNacimiento(ev: { target: any; }){
    const value = ev.target!.value;
    this.nacimientovalue = value;
  }



  setPersona(){    
    //this.objetoPersona = {pesoobj:this.pesovalue, estaturaobj:this.estaturavalue, nacimientoobj:this.nacimientovalue, actividadobj:this.actividadvalue, keyobj:'usuario'}
    this.objetoPersona.pesoobj=this.pesovalue;
    this.objetoPersona.estaturaobj=this.estaturavalue;
    this.objetoPersona.nacimientoobj=this.nacimientovalue;
    this.objetoPersona.actividadobj=this.actividadvalue;
    this.objetoPersona.keyobj="usuario";
    this.objetoPersona.preferenciasobj = [{id:0, nombre:'nulo'}];
    this.objetoPersona.restriccionesobj = [{id:0, nombre:'nulo'}];
    this.objetoPersona.otrarestriccion = "";
    this.objetoPersona.objetivosobj = [{id:0, nombre:'nulo'}];
    this.objetoPersona.dietaobj = "sin dieta";
    this.objetoPersona.genero = this.generovalue;


    //this.appalmacenamientoservice.remove("usuario");
    this.appalmacenamientoservice.set(this.objetoPersona.keyobj, this.objetoPersona);
  }

  getPersona(){
    const value= this.appalmacenamientoservice.get("usuario");
    console.log(value);
  }

  generoChange(evento: any){
    this.generovalue = evento.detail.value.nombre;
    console.log("CAMBIO GENERO");
    console.log(evento);
  }

  ngOnInit() {

    this.generos =[
      {id:1,
       nombre:"Hombre"
     },{id:2,
      nombre:"Mujer"
    },{id:3,
      nombre:"N/A"
    }
  ];

    
  }

}
