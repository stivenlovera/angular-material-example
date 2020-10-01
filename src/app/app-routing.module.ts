import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';


const routes: Routes = [
  {
    path:'inicio',
    loadChildren:()=>import('./otros/otros.module').then(mod => mod.OtrosModule),
    data: {
      preload: true,
      delay: false
    }
  },
  {
    path:'',
    loadChildren:()=>import('./usuario/usuario.module').then(mod => mod.UsuarioModule),
    data: {
      preload: true,
      delay: false
    }
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{
    //enableTracing:true, //<-- debuggin
    preloadingStrategy:PreloadAllModules
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
