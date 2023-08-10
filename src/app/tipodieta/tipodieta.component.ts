import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { IonicStorageModule } from '@ionic/storage-angular';
import { AppAlmacenamientoService } from 'src/services/app-almacenamiento.service';





@Component({
  standalone: true,
  selector: 'app-restricciones',
  templateUrl: './tipodieta.component.html',
  styleUrls: ['./tipodieta.component.scss'],

imports: [ RouterLink,IonicModule,IonicStorageModule, CommonModule]
})
export class TipodietaComponent  implements OnInit {


  objetoPreferencias: any;//{pesoobj: '', estaturaobj: '', nacimientoobj:'', actividadobj: '', keyobj:'' , dietaobj:'', preferenciasobj:[], restriccionesobj:[],objetivosobj:[] };
  selectedrest:any;
  continua=true; 

  constructor(private appalmacenamientoservice:AppAlmacenamientoService, public router: Router) { }

  routerlinkvar="../restricciones";
  dietas =[
     {id:1,
      nombre:"Vegetariana",
      filli: "undefined",
      icono:""
    },{id:2,
      nombre:"Vegana",
      filli: "undefined",
      icono:""
    },{id:3,
      nombre:"Flexetariana",
      filli: "undefined",
      icono:""
    },
 ];

 





  showOtraDieta: boolean = false;
  

  dietavalue = '';
  


  showInput(item: any){
    
  }


  dietaChange(evento:any){
    this.routerlinkvar="../restricciones";

    
    console.log("EVENTO");
    console.log(evento);
    this.continua=false;
    
    var esotra : string = ""; 
    esotra = evento.target.innerText;
    this.dietavalue = esotra;
    const vegetariana =  "Vegetariana";
    console.log("SELECCIONAAA:");
    console.log(esotra);

    if(esotra == 'Otra'){
      this.routerlinkvar="/tipodieta";
      this.continua=true;
      console.log("ENTRA AL IF");
      this.showOtraDieta = true;
    }
    else{
    this.showOtraDieta = false;
  }
   

    var upd_obj = this.dietas.findIndex((obj => obj.nombre == esotra));
    
    for (var i=0; i<this.dietas.length; i++){
      if(i==upd_obj){
        this.dietas[upd_obj].filli = "solid";
      }else{
        this.dietas[i].filli = "undefined";

      }
    }
    console.log("DIETAS:");
    console.log(upd_obj);
    this.router.navigate([this.routerlinkvar]);
}

  notifyDietaInput(evento:any){
    this.continua=false;

    console.log("EVENTO NOTIFY");
    const value = evento.target!.value;
    this.dietavalue = value;
  }


    //////////////////////////////


//////////////////////

  async setDieta(){     
    const objetollega = await this.appalmacenamientoservice.get("usuario");
    console.log("OBJETO LLEGA:");
    console.log(objetollega);
    this.objetoPreferencias = objetollega;
    this.objetoPreferencias.dietaobj = this.dietavalue;
    
    this.appalmacenamientoservice.set("usuario", this.objetoPreferencias);
  }

  async getPersona() {
    const value = await this.appalmacenamientoservice.get("usuario");
    console.log("OBJETO LLEGA GET PREF:");
    console.log(value);
  }

  

  ngOnInit() {
    

    this.dietas =[
      {id:1,
       nombre:"Sin dieta específica",
       filli: "undefined",
       icono: "../../assets/icon/comidarapida.svg"
     },{id:2,
       nombre:"Vegetariana",
       filli: "undefined",
       icono: "../../assets/icon/dieta.svg"
       
     },{id:3,
      nombre:"Vegana",
      filli: "undefined",
      icono:"../../assets/icon/vegan1.svg"
    },{id:5,
       nombre:"Flexetariana",
       filli: "undefined",
       icono:"../../assets/icon/flexibility.svg"
     },{id:6,
      nombre:"Pescetariana",
      filli: "undefined",
      icono:"../../assets/icon/fish.svg"
    },{id:7,
      nombre:"No carnes rojas",
      filli: "undefined",
      icono:"../../assets/icon/nomeat.svg"
    },{id:8,
      nombre:"Otra",
      filli: "undefined",
      icono:""
    }
   ];


    //this.currentDieta = "Sin Restricciones";

  }

}
