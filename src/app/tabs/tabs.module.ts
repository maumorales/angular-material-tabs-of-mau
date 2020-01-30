import { NgModule } from '@angular/core';

import { TabsRoutingModule } from './tabs-routing.module';
import { MaterialModule } from '../shared/material-module';
import { MyTabsComponent } from './my-tabs/my-tabs.component';
import { MyViewComponent } from './my-view/my-view.component';

@NgModule({
  declarations: [
    MyViewComponent,
    MyTabsComponent,
  ],
  imports: [
    MaterialModule,
    TabsRoutingModule,
  ],
})
export class TabsModule { }
