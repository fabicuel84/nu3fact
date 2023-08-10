import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { IonicStorageModule } from '@ionic/storage-angular';
import { AppAlmacenamientoService } from 'src/services/app-almacenamiento.service';




@Component({
  standalone: true,
  selector: 'app-objetivos',
  templateUrl: './objetivos.component.html',
  styleUrls: ['./objetivos.component.scss'],

imports: [ RouterLink,IonicModule,IonicStorageModule, CommonModule]
})
export class ObjetivosComponent  implements OnInit {


  objetoPreferencias: any;//{pesoobj: '', estaturaobj: '', nacimientoobj:'', actividadobj: '', keyobj:'' , dietaobj:'', preferenciasobj:[], objetivosobj:[],objetivosobj:[] };
  selectedrest:any;

  constructor(private appalmacenamientoservice:AppAlmacenamientoService) { }

  
  
objetivos =[
  {id:0,
    nombre:"Ningún objetivo",
    selectedrest: false,
    filli: "undefined"
  },{id:1,
   nombre:"Bajar de peso",
   selectedrest: false,
   filli: "undefined"
 },{id:2,
  nombre:"Mantener peso actual",
  selectedrest: false,
  filli: "undefined"
},{id:3,
  nombre:"Aumentar peso",
  selectedrest: false,
  filli: "undefined"
},{id:4,
  nombre:"Aumentar masa muscular",
  selectedrest: false,
  filli: "undefined"
},{id:5,
  nombre:"Mejorar rendimiento deportivo",
  selectedrest: false,
  filli: "undefined"
},{id:6,
  nombre:"Mejorar estado de salud",
  selectedrest: false,
  filli: "undefined"
},{id:7,
  nombre:"Otro",
  selectedrest: false,
  filli: "undefined"
},
];



objetivosinicio =[
  {id:0,
    nombre:"Ningún objetivo",
    selectedrest: false,
    filli: "undefined"
  },{id:1,
   nombre:"Bajar de peso",
   selectedrest: false,
   filli: "undefined"
 },{id:2,
  nombre:"Mantener peso actual",
  selectedrest: false,
  filli: "undefined"
},{id:3,
  nombre:"Aumentar peso",
  selectedrest: false,
  filli: "undefined"
},{id:4,
  nombre:"Aumentar masa muscular",
  selectedrest: false,
  filli: "undefined"
},{id:5,
  nombre:"Mejorar rendimiento deportivo",
  selectedrest: false,
  filli: "undefined"
},{id:6,
  nombre:"Mejorar estado de salud",
  selectedrest: false,
  filli: "undefined"
},{id:7,
  nombre:"Otro",
  selectedrest: false,
  filli: "undefined"
},
];


ningunobjetivo =[
  {id:0,
    nombre:"Ningún objetivo",
    selectedrest: false,
    filli: "solid"
  },{id:1,
   nombre:"Bajar de peso",
   selectedrest: true,
   filli: "undefined"
 },{id:2,
  nombre:"Mantener peso actual",
  selectedrest: true,
  filli: "undefined"
},{id:3,
  nombre:"Aumentar peso",
  selectedrest: true,
  filli: "undefined"
},{id:4,
  nombre:"Aumentar masa muscular",
  selectedrest: true,
  filli: "undefined"
},{id:5,
  nombre:"Mejorar rendimiento deportivo",
  selectedrest: true,
  filli: "undefined"
},{id:6,
  nombre:"Mejorar estado de salud",
  selectedrest: true,
  filli: "undefined"
},{id:7,
  nombre:"Otro",
  selectedrest: true,
  filli: "undefined"
},
];


objetivosbajar =[
  {id:0,
    nombre:"Ningún objetivo",
    selectedrest: false,
    filli: "undefined"
  },{id:1,
   nombre:"Bajar de peso",
   selectedrest: false,
   filli: "solid"
 },{id:2,
  nombre:"Mantener peso actual",
  selectedrest: true,
  filli: "undefined"
},{id:3,
  nombre:"Aumentar peso",
  selectedrest: true,
  filli: "undefined"
},{id:4,
  nombre:"Aumentar masa muscular",
  selectedrest: false,
  filli: "undefined"
},{id:5,
  nombre:"Mejorar rendimiento deportivo",
  selectedrest: false,
  filli: "undefined"
},{id:6,
  nombre:"Mejorar estado de salud",
  selectedrest: false,
  filli: "undefined"
},{id:7,
  nombre:"Otro",
  selectedrest: false,
  filli: "undefined"
},
];




  
  showOtroObjetivo: boolean = false;
  showBajar: boolean = false;
  showAumentar: boolean = false;


  objetivosvalue:any = [];
  otroobj:string= "";
  continua=true;

  objval:any;





  showInput(item: any){
    
  }


  ////////////////////


  // objetivosChange(evento:any){
  //   console.log(evento);
  //   const esotra = evento.detail.value;
  //   console.log(esotra.length);
  //   this.objetivosvalue = esotra;


  //   for (var i=0; i<esotra.length; i++){
  //     console.log("FOR CON:" + i);
  //       if(esotra[i].nombre == 'Otro'){
  //         console.log("ENTRA AL IF OBJ");
  //         this.showOtroObjetivo = true;
  //         break;
  //       }
  //       else
  //       this.showOtroObjetivo= false;
  //     }
  //   }


///////////////////////////////////

objetivoChange(evento:any){

  const esotra = evento.target.innerText;
  console.log("SELECCIONA:");
  console.log(esotra);
  console.log("objetivosVALUE ANTES");
  console.log(this.objetivosvalue);

  var upd_obj = this.objetivos.findIndex((obj => obj.nombre == esotra));
  var objind = this.objetivosvalue.indexOf(esotra);

  if(esotra === 'Otro'){
    if (this.objetivos[upd_obj].filli === "solid") {
      console.log("YA ERA OTRA")
      //this.objetivosvalue.splice(objind, 1);
      this.showOtroObjetivo= false;
      this.otroobj = "";
      this.objetivos[upd_obj].filli = "undefined";      
    }else{
      console.log("ES PERO NO ERA OTRA");
      this.showOtroObjetivo = true;
      this.objetivos[upd_obj].filli = "solid";
    }
  }
  else if (esotra ==="Ningún objetivo"){
    console.log("NINGUN OBJETIVO!!");
    if(this.objetivosvalue.includes("Ningún objetivo")){
      this.objetivos = this.objetivosinicio;
      this.objetivosvalue = [];
    }else{
      this.showOtroObjetivo= false;
      this.objetivosvalue = ["Ningún objetivo"];
      this.objetivos = this.ningunobjetivo;
    }
    
  }else if (esotra ==="Bajar de peso"){
    if (this.objetivos[upd_obj].filli === "solid") {
      console.log("YA ERA BAJAR DE PESO")
      //this.objetivosvalue.splice(objind, 1);
      this.showBajar= false;
      this.objetivos[upd_obj].filli = "undefined";  
      this.objetivos[upd_obj+1].filli = "undefined";    
      this.objetivos[upd_obj+1].selectedrest = false;  
      this.objetivos[upd_obj+2].filli = "undefined";    
      this.objetivos[upd_obj+2].selectedrest = false;
    }else{
      console.log("ES PERO NO ERA BAJAR");
      this.showBajar = true;
      this.objetivos[upd_obj].filli = "solid";
      this.objetivos[upd_obj+1].selectedrest = true;
      this.objetivos[upd_obj+2].selectedrest = true;

      //this.objetivos = this.objetivosbajar;

    }

  }else if (esotra ==="Aumentar peso"){
    if (this.objetivos[upd_obj].filli === "solid") {
      console.log("YA ERA BAJAR DE PESO")
      //this.objetivosvalue.splice(objind, 1);
      this.showBajar= false;
      this.objetivos[upd_obj].filli = "undefined";  
      this.objetivos[upd_obj+1].filli = "undefined";    
      this.objetivos[upd_obj+1].selectedrest = false;  
      this.objetivos[upd_obj-1].filli = "undefined";    
      this.objetivos[upd_obj-1].selectedrest = false;
    }else{
      console.log("ES PERO NO ERA BAJAR");
      this.showBajar = true;
      this.objetivos[upd_obj].filli = "solid";
      this.objetivos[upd_obj+1].selectedrest = true;
      this.objetivos[upd_obj-1].selectedrest = true;
    }

  }else if (esotra ==="Mantener peso actual"){
    if (this.objetivos[upd_obj].filli === "solid") {
      console.log("YA ERA BAJAR DE PESO")
      //this.objetivosvalue.splice(objind, 1);
      this.showBajar= false;
      this.objetivos[upd_obj].filli = "undefined";  
      this.objetivos[upd_obj-2].filli = "undefined";    
      this.objetivos[upd_obj-2].selectedrest = false;  
      this.objetivos[upd_obj-1].filli = "undefined";    
      this.objetivos[upd_obj-1].selectedrest = false;
    }else{
      console.log("ES PERO NO ERA BAJAR");
      this.showBajar = true;
      this.objetivos[upd_obj].filli = "solid";
      this.objetivos[upd_obj-2].selectedrest = true;
      this.objetivos[upd_obj-1].selectedrest = true;

      //this.objetivos = this.objetivosbajar;

    }

  }
  
  
  else {
    for (var i = 0; i < this.objetivos.length; i++) {
      if (i == upd_obj) {
        if (this.objetivos[upd_obj].filli == "solid") {
          this.objetivos[upd_obj].filli = "undefined";
          this.objetivosvalue.splice(objind, 1);
        } else {
          this.objetivos[upd_obj].filli = "solid";
          this.objetivosvalue.push(esotra);
        }

      } else {
        //this.objetivos[upd_obj].selectedrest = false;
      }
    }
}
  console.log("objetivos VALUE:");
  console.log(this.objetivosvalue.length);
  if(this.objetivosvalue.length==0){
    console.log("NINGUNO SELECCIONADO");
    this.continua=true;
  }else{
    this.continua=false;
  }

}
//////////////////////////////////



  notifyObjetivoInput(evento:any){
    console.log("EVENTO NOTIFY OBJ");
    const value:string = evento.target!.value;
    for (var i=0; i<this.objetivosvalue.length; i++){
        if(this.objetivosvalue[i].nombre == 'Otro'){
          this.objetivosvalue.splice(i);
          console.log(this.objetivosvalue);
          break;
        }
        else{
        }
      }
      const nuevaotra = {id:11, nombre:value, selectedrest:false}
      this.objetivosvalue.push(nuevaotra);
      console.log(this.objetivosvalue);
  }

//////////////////////

  async setObjetivos(){    
    const objetollega = await this.appalmacenamientoservice.get("usuario");
    console.log("OBJETO LLEGA:");
    console.log(objetollega);
    this.objetoPreferencias = objetollega;
    
    this.objetoPreferencias.objetivosobj = this.objetivosvalue;
    this.appalmacenamientoservice.set("usuario", this.objetoPreferencias);
  }

  async getPersona() {
    const value = await this.appalmacenamientoservice.get("usuario");
    console.log("OBJETO LLEGA GET PREF:");
    console.log(value);
  }

  ngOnInit() {

  this.objetivos =[
    {id:0,
      nombre:"Ningún objetivo",
      selectedrest: false,
      filli: "undefined"
    },{id:1,
     nombre:"Bajar de peso",
     selectedrest: false,
     filli: "undefined"
   },{id:3,
    nombre:"Aumentar peso",
    selectedrest: false,
    filli: "undefined"
  },{id:2,
    nombre:"Mantener peso actual",
    selectedrest: false,
    filli: "undefined"
  },{id:4,
    nombre:"Aumentar masa muscular",
    selectedrest: false,
    filli: "undefined"
  },{id:5,
    nombre:"Mejorar rendimiento deportivo",
    selectedrest: false,
    filli: "undefined"
  },{id:6,
    nombre:"Mejorar estado de salud",
    selectedrest: false,
    filli: "undefined"
  },{id:7,
    nombre:"Otro",
    selectedrest: false,
    filli: "undefined"
  },
  ];
    //this.currentDieta = "Sin objetivos";

  }

}
