import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { MyViewComponent } from './my-view/my-view.component';

const routes: Routes = [
  { path: '', component: MyViewComponent }
];

@NgModule({
  imports: [ RouterModule.forChild(routes) ],
  exports: [ RouterModule ],
})
export class TabsRoutingModule {
}
