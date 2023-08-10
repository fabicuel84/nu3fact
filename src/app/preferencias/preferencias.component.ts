import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { IonicStorageModule } from '@ionic/storage-angular';
import { AppAlmacenamientoService } from 'src/services/app-almacenamiento.service';




@Component({
  standalone: true,
  selector: 'app-preferencias',
  templateUrl: './preferencias.component.html',
  styleUrls: ['./preferencias.component.scss'],

imports: [ RouterLink,IonicModule,IonicStorageModule, CommonModule]
})
export class PreferenciasComponent  implements OnInit {


  objetoPreferencias: any;//{pesoobj: '', estaturaobj: '', nacimientoobj:'', actividadobj: '', keyobj:'' , dietaobj:'', preferenciasobj:[], restriccionesobj:[],objetivosobj:[] };
  selectedrest:any;

  constructor(private appalmacenamientoservice:AppAlmacenamientoService) { }

  
  dietas =[
     {id:1,
      nombre:"Vegetariana"
    },{id:2,
      nombre:"Vegana"
    },{id:3,
      nombre:"Flexetariana"
    },
 ];

 restricciones =[
  {id:1,
   nombre:"Sin Gluten",
   selectedrest: false
 },{id:2,
   nombre:"Sin Picante",
   selectedrest: false
 },{id:3,
   nombre:"Baja en Sal/Sodio",
   selectedrest: false
 },{id:3,
  nombre:"Baja en Sal/Sodio",
  selectedrest: false
},{id:4,
  nombre:"Otra",
  selectedrest: false
},

];

preferencias =[
  {id:1,
   nombre:"Pasta"
 },{id:2,
   nombre:"Comida Mexicana"
 },{id:3,
   nombre:"Comida Peruana"
 },{id:4,
  nombre:"Comida Cubana"
},{id:5,
  nombre:"Comida Francesa"
},{id:6,
  nombre:"Comida Japonesa"
},{id:7,
  nombre:"Comida Thai"
},{id:8,
  nombre:"Comida China"
},{id:9,
  nombre:"Comida Mediterránea"
},{id:10,
  nombre:"Otra"
},
];



objetivos =[
  {id:1,
   nombre:"Bajar 1-10kg de peso"
 },{id:2,
   nombre:"Bajar 10-20kg de peso"
 },{id:3,
   nombre:"Bajar más de 10-20kg de peso"
 },{id:4,
  nombre:"Mantener peso actual"
},{id:5,
  nombre:"Aumentar masa muscular"
},{id:6,
  nombre:"Aumentar peso"
},{id:7,
  nombre:"Mejorar rendimiento deportivo"
},{id:8,
  nombre:"Mejorar estado de salud"
},{id:9,
  nombre:"Otro"
},
];


  showOtraDieta: boolean = false;
  showOtraRestriccion: boolean = false;
  showOtraPreferencia: boolean = false;
  showOtroObjetivo: boolean = false;

  dietavalue = '';
  restriccionesvalue: any =[
    {id:0,
     nombre:"Sin Restricciones",
     selectedrest: false
   }
  ];
  preferenciasvalue:any;
  objetivosvalue:any;

  objval:any;





  showInput(item: any){
    
  }


  dietaChange(evento:any){
    console.log("EVENTO");
    console.log(evento);
    console.log("SHOWINPUT:" + evento);
    const esotra = evento.detail.value.nombre;
    this.dietavalue = esotra;

  if(esotra == 'Otra'){
    console.log("ENTRA AL IF");
  this.showOtraDieta = true;
  }
  else{
  this.showOtraDieta = false;
}

  if(esotra == 'Vegana'){
    console.log("ENTRA AL IF VEGANA");
    this.restricciones =[
      {id:0,
        nombre:"Ninguna",
        selectedrest: false
      },{id:1,
       nombre:"Sin gluten",
       selectedrest: false
     },{id:2,
       nombre:"Sin picante",
       selectedrest: false
     },{id:3,
       nombre:"Baja en sal y sodio",
       selectedrest: false
     },{id:4,
      nombre:"Sin lácteos",
      selectedrest: true
    },{id:5,
      nombre:"Sin azúcar añadida",
      selectedrest: false
    },{id:6,
      nombre:"Sin frutos secos",
      selectedrest: false
    },{id:7,
      nombre:"Sin ultraprocesados",
      selectedrest: false
    },{id:8,
      nombre:"Estado de embarazo",
      selectedrest: false
    },{id:9,
      nombre:"Sin aceites vegetales",
      selectedrest: false
    },{id:10,
      nombre:"Otra",
      selectedrest: false
    },
    ];
  }
  else{
    this.restricciones =[
      {id:0,
        nombre:"Ninguna",
        selectedrest: false
      },{id:1,
       nombre:"Sin gluten",
       selectedrest: false
     },{id:2,
       nombre:"Sin picante",
       selectedrest: false
     },{id:3,
       nombre:"Baja en sal y sodio",
       selectedrest: false
     },{id:4,
      nombre:"Sin lácteos",
      selectedrest: false
    },{id:5,
      nombre:"Sin azúcar añadida",
      selectedrest: false
    },{id:6,
      nombre:"Sin frutos secos",
      selectedrest: false
    },{id:7,
      nombre:"Sin ultraprocesados",
      selectedrest: false
    },{id:8,
      nombre:"Estado de embarazo",
      selectedrest: false
    },{id:9,
      nombre:"Sin aceites vegetales",
      selectedrest: false
    },{id:10,
      nombre:"Otra",
      selectedrest: false
    },
    ];
  
}
}

  notifyDietaInput(evento:any){
    console.log("EVENTO NOTIFY");
    const value = evento.target!.value;
    this.dietavalue = value;
  }


    //////////////////////////////


  restriccionChange(evento:any){
    //console.log(evento);
    const esotra = evento.detail.value;
    //console.log(esotra.length);
    this.restriccionesvalue = esotra;

    for (var i=0; i<esotra.length; i++){
      console.log("FOR CON:" + i);
        if(esotra[i].nombre == 'Otra'){
          console.log("ENTRA AL IF");
          console.log(this.restriccionesvalue);
          this.showOtraRestriccion = true;
          break;
        }else if(esotra[i].nombre == 'Ninguna'){
          this.restricciones =[
            {id:0,
              nombre:"Ninguna",
              selectedrest: false
            },{id:1,
             nombre:"Sin gluten",
             selectedrest: true
           },{id:2,
             nombre:"Sin picante",
             selectedrest: true
           },{id:3,
             nombre:"Baja en sal y sodio",
             selectedrest: true
           },{id:4,
            nombre:"Sin lácteos",
            selectedrest: true
          },{id:5,
            nombre:"Sin azúcar añadida",
            selectedrest: true
          },{id:6,
            nombre:"Sin frutos secos",
            selectedrest: true
          },{id:7,
            nombre:"Sin ultraprocesados",
            selectedrest: true
          },{id:8,
            nombre:"Estado de embarazo",
            selectedrest: true
          },{id:9,
            nombre:"Sin aceites vegetales",
            selectedrest: true
          },{id:10,
            nombre:"Otra",
            selectedrest: true
          },
          ];
          this.restriccionesvalue={id:0, nombre:"ninguna restricción", selectedrest:false};
          this.showOtraRestriccion = false;
          break;

        }
        else{
          this.showOtraRestriccion = false;

        }
      }
    }

  notifyRestriccionInput(evento:any){
    console.log("EVENTO NOTIFY REST");
    const value:string = evento.target!.value;
    for (var i=0; i<this.restriccionesvalue.length; i++){
        if(this.restriccionesvalue[i].nombre == 'Otra'){
          console.log("ENTRA AL IF BORRAR");
          this.restriccionesvalue.splice(i);
          console.log(this.restriccionesvalue);
          break;
        }
        else{
        }
      }
      const nuevaotra = {id:11, nombre:value, selectedrest:false}
      this.restriccionesvalue.push(nuevaotra);
      console.log(this.restriccionesvalue);    
  }


  //////////////////////////////



  preferenciasChange(evento:any){
    console.log(evento);
    const esotra = evento.detail.value;
    console.log(esotra.length);
    this.preferenciasvalue = esotra;
   for (var i=0; i<esotra.length; i++){
      console.log("FOR CON:" + i);
        if(esotra[i].nombre == 'Otra'){
          console.log("ENTRA AL IF");
          this.showOtraPreferencia = true;
          break;
        }
        else
        this.showOtraPreferencia = false;
      }
    }

  notifyPreferenciaInput(evento:any){
    console.log("EVENTO NOTIFY PREF");
    const value:string = evento.target!.value;
    for (var i=0; i<this.preferenciasvalue.length; i++){
        if(this.preferenciasvalue[i].nombre == 'Otra'){
          console.log("ENTRA AL IF BORRAR");
          this.preferenciasvalue.splice(i);
          console.log(this.preferenciasvalue);
          break;
        }
        else{
        }
      }
      const nuevaotra = {id:11, nombre:value, selectedrest:false}
      this.preferenciasvalue.push(nuevaotra);
      console.log(this.preferenciasvalue);
  }


  ////////////////////


  objetivosChange(evento:any){
    console.log(evento);
    const esotra = evento.detail.value;
    console.log(esotra.length);
    this.objetivosvalue = esotra;


    for (var i=0; i<esotra.length; i++){
      console.log("FOR CON:" + i);
        if(esotra[i].nombre == 'Otro'){
          console.log("ENTRA AL IF OBJ");
          this.showOtroObjetivo = true;
          break;
        }
        else
        this.showOtroObjetivo= false;
      }
    }

  notifyObjetivosInput(evento:any){
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

  async setPreferencias(){    
    const objetollega = await this.appalmacenamientoservice.get("usuario");
    console.log("OBJETO LLEGA:");
    console.log(objetollega);
    this.objetoPreferencias = objetollega;
    this.objetoPreferencias.restriccionesobj= this.restriccionesvalue;
    this.objetoPreferencias.dietaobj = this.dietavalue;
    this.objetoPreferencias.preferenciasobj = this.preferenciasvalue;
    this.objetoPreferencias.objetivosobj = this.objetivosvalue;
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
       nombre:"Sin dieta específica"
     },{id:2,
       nombre:"Vegetariana"
     },{id:3,
      nombre:"Vegana"
    },{id:5,
       nombre:"Flexetariana"
     },{id:6,
      nombre:"Pescetariana"
    },{id:7,
      nombre:"No carnes rojas"
    },{id:8,
      nombre:"Otra"
    }
   ];


   this.restricciones =[
    {id:0,
      nombre:"Ninguna",
      selectedrest: false
    },{id:1,
     nombre:"Sin gluten",
     selectedrest: false
   },{id:2,
     nombre:"Sin picante",
     selectedrest: false
   },{id:3,
     nombre:"Baja en sal y sodio",
     selectedrest: false
   },{id:4,
    nombre:"Sin lácteos",
    selectedrest: false
  },{id:5,
    nombre:"Sin azúcar añadida",
    selectedrest: false
  },{id:6,
    nombre:"Sin frutos secos",
    selectedrest: false
  },{id:7,
    nombre:"Sin ultraprocesados",
    selectedrest: false
  },{id:8,
    nombre:"Estado de embarazo",
    selectedrest: false
  },{id:9,
    nombre:"Sin aceites vegetales",
    selectedrest: false
  },{id:10,
    nombre:"Otra",
    selectedrest: false
  },
  ];



  this.preferencias =[
    {id:0,
      nombre:"Ninguna"
    },{id:1,
      nombre:"Pasta"
    },{id:2,
      nombre:"Comida Mexicana"
    },{id:3,
      nombre:"Comida Peruana"
    },{id:4,
     nombre:"Comida Cubana"
   },{id:5,
     nombre:"Comida Francesa"
   },{id:6,
     nombre:"Comida Japonesa"
   },{id:7,
     nombre:"Comida Thai"
   },{id:8,
     nombre:"Comida China"
   },{id:9,
     nombre:"Comida Colombiana"
   },{id:10,
    nombre:"Comida Mediterránea"
  },{id:11,
     nombre:"Otra"
   },
  ];


  this.objetivos =[
    {id:1,
     nombre:"Bajar 1-10kg de peso"
   },{id:2,
     nombre:"Bajar 10-20kg de peso"
   },{id:3,
     nombre:"Bajar más de 10-20kg de peso"
   },{id:4,
    nombre:"Mantener peso actual"
  },{id:5,
    nombre:"Aumentar masa muscular"
  },{id:6,
    nombre:"Aumentar peso"
  },{id:7,
    nombre:"Mejorar rendimiento deportivo"
  },{id:8,
    nombre:"Mejorar estado de salud"
  },{id:9,
    nombre:"Otro"
  },
  ];
    //this.currentDieta = "Sin Restricciones";

  }

}
