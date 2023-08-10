import { Routes } from '@angular/router';


export const routes: Routes = [
  {
    path: 'home',
    loadComponent: () => import('./home/home.page').then((m) => m.HomePage),
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'logueo',
    loadComponent: () => import('./logueo/logueo.component').then((m) => m.LogueoComponent),
  },
  {
    path: 'persona',
    loadComponent: () => import('./persona/persona.component').then((m) => m.PersonaComponent),
  },
  {
    path: 'preferencias',
    loadComponent: () => import('./preferencias/preferencias.component').then((m) => m.PreferenciasComponent),
  },{
    path: 'tipodieta',
    loadComponent: () => import('./tipodieta/tipodieta.component').then((m) => m.TipodietaComponent),
  },{
    path: 'restricciones',
    loadComponent: () => import('./restricciones/restricciones.component').then((m) => m.RestriccionesComponent),
  },{
    path: 'objetivos',
    loadComponent: () => import('./objetivos/objetivos.component').then((m) => m.ObjetivosComponent),
  },

];
