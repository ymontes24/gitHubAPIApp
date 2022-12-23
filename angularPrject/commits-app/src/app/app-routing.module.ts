import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from './layout/layout.component';

const routes: Routes = [{
  path:'',
  component: LayoutComponent,
  children:[
    {
      path:'',
      redirectTo:'/commits-list',
      pathMatch:'full'
    },
    {
      path: 'commits-list',
      loadChildren: ()=> import ('./commit-list/components/commit-list.module').then(m=> m.CommitListModule)
    }
  ]
}];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    preloadingStrategy:PreloadAllModules
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
