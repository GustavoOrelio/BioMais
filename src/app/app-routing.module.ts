import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  },
  {
    path: 'digestorio',
    loadChildren: () => import('./digestorio/digestorio.module').then( m => m.DigestorioPageModule)
  },
  {
    path: 'respiratorio',
    loadChildren: () => import('./respiratorio/respiratorio.module').then( m => m.RespiratorioPageModule)
  },
  {
    path: 'cardiovascular',
    loadChildren: () => import('./cardiovascular/cardiovascular.module').then( m => m.CardiovascularPageModule)
  },
  {
    path: 'urinario',
    loadChildren: () => import('./urinario/urinario.module').then( m => m.UrinarioPageModule)
  },
  {
    path: 'reprodutor',
    loadChildren: () => import('./reprodutor/reprodutor.module').then( m => m.ReprodutorPageModule)
  },
  {
    path: 'boca',
    loadChildren: () => import('./boca/boca.module').then( m => m.BocaPageModule)
  },
  {
    path: 'faringe',
    loadChildren: () => import('./faringe/faringe.module').then( m => m.FaringePageModule)
  },
  {
    path: 'esofago',
    loadChildren: () => import('./esofago/esofago.module').then( m => m.EsofagoPageModule)
  },
  {
    path: 'estomago',
    loadChildren: () => import('./estomago/estomago.module').then( m => m.EstomagoPageModule)
  },
  {
    path: 'intestino',
    loadChildren: () => import('./intestino/intestino.module').then( m => m.IntestinoPageModule)
  },
  {
    path: 'intestino-grosso',
    loadChildren: () => import('./intestino-grosso/intestino-grosso.module').then( m => m.IntestinoGrossoPageModule)
  },
  {
    path: 'anus',
    loadChildren: () => import('./anus/anus.module').then( m => m.AnusPageModule)
  }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
