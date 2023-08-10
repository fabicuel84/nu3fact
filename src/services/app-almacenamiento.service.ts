import { Injectable } from '@angular/core';
import {Storage} from '@ionic/storage-angular';

@Injectable({
  providedIn: 'root'
})
export class AppAlmacenamientoService {
  private _storage : Storage | null = null ;

  constructor(private storage: Storage) { this.init(); }

  async init(){
    const storage = await this.storage.create();
    this._storage = storage;
  }

  async set(key:string, value: any){
    let result =  await this._storage?.set(key, value);
    console.log("RESULT DEL SET:");
    console.log(result);
  }

  async get(key:string){
    let value =  await this._storage?.get(key);
    console.log("SERVICIO GET:");
    console.log(value);
    return value;
  } 
  
  async remove(key:string){
    let value =  await this._storage?.remove(key);
   
  }
  async clear(){
    let value =  await this._storage?.clear();
    console.log("VALUE CLEAR");
    console.log(value);
  } 
  async keys(key:string){
    let value =  await this._storage?.keys();
    console.log(value);
    return value;
  } 
  

}
