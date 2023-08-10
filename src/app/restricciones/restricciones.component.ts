import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { IonicStorageModule } from '@ionic/storage-angular';
import { AppAlmacenamientoService } from 'src/services/app-almacenamiento.service';




@Component({
  standalone: true,
  selector: 'app-restricciones',
  templateUrl: './restricciones.component.html',
  styleUrls: ['./restricciones.component.scss'],

imports: [ RouterLink,IonicModule,IonicStorageModule, CommonModule]
})
export class RestriccionesComponent  implements OnInit {


  objetoPreferencias: any;//{pesoobj: '', estaturaobj: '', nacimientoobj:'', actividadobj: '', keyobj:'' , dietaobj:'', preferenciasobj:[], restriccionesobj:[],objetivosobj:[] };
  selectedrest:any;
  continua=true;

  constructor(private appalmacenamientoservice:AppAlmacenamientoService) { }

  
  

 restricciones =[
  {id:1,
   nombre:"Sin Gluten",
   selectedrest: false,
   filli:"undefined"
 },{id:2,
   nombre:"Sin Picante",
   selectedrest: false,
   filli:"undefined"
 },{id:3,
   nombre:"Baja en Sal/Sodio",
   selectedrest: false,
   filli:"undefined"
 },{id:3,
  nombre:"Baja en Sal/Sodio",
  selectedrest: false,
  filli:"undefined"
},{id:4,
  nombre:"Otra",
  selectedrest: false,
  filli:"undefined"
},

];


restriccionesinicio = [
  {id:0,
    nombre:"Ninguna",
    selectedrest: false,
    filli: "undefined"
  },{id:1,
   nombre:"Sin gluten",
   selectedrest: false,
   filli: "undefined"
 },{id:2,
   nombre:"Sin picante",
   selectedrest: false,
   filli: "undefined"
 },{id:3,
   nombre:"Baja en sal y sodio",
   selectedrest: false,
   filli: "undefined"
 },{id:4,
  nombre:"Sin lácteos",
  selectedrest: false,
  filli: "undefined"
},{id:5,
  nombre:"Sin azúcar añadida",
  selectedrest: false,
  filli: "undefined"
},{id:6,
  nombre:"Sin frutos secos",
  selectedrest: false,
  filli: "undefined"
},{id:7,
  nombre:"Sin ultraprocesados",
  selectedrest: false,
  filli: "undefined"
},{id:8,
  nombre:"Estado de embarazo",
  selectedrest: false,
  filli: "undefined"
},{id:9,
  nombre:"Sin aceites vegetales",
  selectedrest: false,
  filli: "undefined"
},{id:10,
  nombre:"Otra",
  selectedrest: false,
  filli: "undefined"
},
];


ningunarestriccion=[
  {id:0,
    nombre:"Ninguna",
    selectedrest: false,
    filli: "solid"
  },{id:1,
   nombre:"Sin gluten",
   selectedrest: true,
   filli: "undefined"
 },{id:2,
   nombre:"Sin picante",
   selectedrest: true,
   filli: "undefined"
 },{id:3,
   nombre:"Baja en sal y sodio",
   selectedrest: true,
   filli: "undefined"
 },{id:4,
  nombre:"Sin lácteos",
  selectedrest: true,
  filli: "undefined"
},{id:5,
  nombre:"Sin azúcar añadida",
  selectedrest: true,
  filli: "undefined"
},{id:6,
  nombre:"Sin frutos secos",
  selectedrest: true,
  filli: "undefined"
},{id:7,
  nombre:"Sin ultraprocesados",
  selectedrest: true,
  filli: "undefined"
},{id:8,
  nombre:"Estado de embarazo",
  selectedrest: true,
  filli: "undefined"
},{id:9,
  nombre:"Sin aceites vegetales",
  selectedrest: true,
  filli: "undefined"
},{id:10,
  nombre:"Otra",
  selectedrest: true,
  filli: "undefined"
},
];


  showOtraRestriccion: boolean = false;
  otrarest:string= "";
  

   restriccionesvalue: any = [];
  // =[
  //   {id:0,
  //    nombre:"Sin Restricciones",
  //    selectedrest: false,
  //    filli:"undefined"
  //  }
  // ];
  





  showInput(item: any){
    
  }



    //////////////////////////////


  restriccionChange(evento:any){

    const esotra = evento.target.innerText;
    console.log("SELECCIONA:");
    console.log(esotra);
    console.log("RESTRICCIONESVALUE ANTES");
    console.log(this.restriccionesvalue);

    var upd_obj = this.restricciones.findIndex((obj => obj.nombre == esotra));
    var objind = this.restriccionesvalue.indexOf(esotra);

    if(esotra === 'Otra'){
      if (this.restricciones[upd_obj].filli === "solid") {
        console.log("YA ERA OTRA")
        //this.restriccionesvalue.splice(objind, 1);
        this.showOtraRestriccion= false;
        this.otrarest = "";
        this.restricciones[upd_obj].filli = "undefined";      
      }else{
        console.log("ES PERO NO ERA OTRA");
        this.showOtraRestriccion = true;
        this.restricciones[upd_obj].filli = "solid";
      }
    }
    else if (esotra =="Ninguna"){
      if(this.restriccionesvalue.includes("Ninguna")){
        this.restricciones = this.restriccionesinicio;
        this.restriccionesvalue = [];
      }else{
        this.showOtraRestriccion= false;
        this.restriccionesvalue = ["Ninguna"];
        this.restricciones = this.ningunarestriccion;
      }
      
    }else {
      for (var i = 0; i < this.restricciones.length; i++) {
        if (i == upd_obj) {
          if (this.restricciones[upd_obj].filli == "solid") {
            this.restricciones[upd_obj].filli = "undefined";
            this.restriccionesvalue.splice(objind, 1);
          } else {
            this.restricciones[upd_obj].filli = "solid";
            this.restriccionesvalue.push(esotra);
          }

        } else {
          //this.restricciones[upd_obj].selectedrest = false;
        }
      }
  }
    console.log("RESTRICCIONES VALUE:");
    console.log(this.restriccionesvalue.length);
    if(this.restriccionesvalue.length==0){
      console.log("NINGUNO SELECCIONADO");
      this.continua=true;
    }else{
      this.continua=false;
    }

}

  notifyRestriccionInput(evento:any){
    console.log("EVENTO NOTIFY REST");
    const value:string = evento.target!.value;
    this.continua=false;

     
      //const nuevaotra = {id:11, nombre:value, selectedrest:false}
      //this.restriccionesvalue.push(value);
      this.otrarest = value;
      console.log(this.restriccionesvalue);    
  }


  //////////////////////////////



//////////////////////

  async setRestricciones(){    
    const objetollega = await this.appalmacenamientoservice.get("usuario");
    console.log("OBJETO LLEGA:");
    console.log(objetollega);
    for (var i=0; i<this.restriccionesvalue.length; i++){
      if(this.restriccionesvalue[i] == 'Otra'){
        console.log("ENTRA AL IF BORRAR");
        this.restriccionesvalue.splice(i);
        console.log(this.restriccionesvalue);
        break;
      }

   }
    this.objetoPreferencias = objetollega;
    this.objetoPreferencias.restriccionesobj= this.restriccionesvalue;
    this.objetoPreferencias.otrarestriccion=this.otrarest;
    this.appalmacenamientoservice.set("usuario", this.objetoPreferencias);


  }

  async getPersona() {
    const value = await this.appalmacenamientoservice.get("usuario");
    console.log("OBJETO LLEGA GET PREF:");
    console.log(value);
  }

  ngOnInit() {

   this.restricciones =[
    {id:0,
      nombre:"Ninguna",
      selectedrest: false,
      filli: "undefined"
    },{id:1,
     nombre:"Sin gluten",
     selectedrest: false,
     filli: "undefined"
   },{id:2,
     nombre:"Sin picante",
     selectedrest: false,
     filli: "undefined"
   },{id:3,
     nombre:"Baja en sal y sodio",
     selectedrest: false,
     filli: "undefined"
   },{id:4,
    nombre:"Sin lácteos",
    selectedrest: false,
    filli: "undefined"
  },{id:5,
    nombre:"Sin azúcar añadida",
    selectedrest: false,
    filli: "undefined"
  },{id:6,
    nombre:"Sin frutos secos",
    selectedrest: false,
    filli: "undefined"
  },{id:7,
    nombre:"Sin ultraprocesados",
    selectedrest: false,
    filli: "undefined"
  },{id:8,
    nombre:"Estado de embarazo",
    selectedrest: false,
    filli: "undefined"
  },{id:9,
    nombre:"Sin aceites vegetales",
    selectedrest: false,
    filli: "undefined"
  },{id:10,
    nombre:"Otra",
    selectedrest: false,
    filli: "undefined"
  },
  ];



    //this.currentDieta = "Sin Restricciones";

  }

}
