import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'dash',
    pathMatch: 'full'
  },
  {
    path: 'dash',
    loadChildren: './dash/dash.module#DashPageModule'
  },
  {
    path: 'list',
    loadChildren: './list/list.module#ListPageModule'
  },
  { path: 'create', loadChildren: './create/create.module#CreatePageModule' },
  { path: 'plant', loadChildren: './plant/plant.module#PlantPageModule' },
  { path: 'item', loadChildren: './item/item.module#ItemPageModule' }
  { path: 'item/:id', loadChildren: './item/item.module#ItemPageModule' },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
