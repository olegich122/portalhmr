import { FormsModule } from "@angular/forms";
import { NgModule } from "@angular/core";

import { PortalComponent } from "./components/portal/portal.component";
import { PortalRoutingModule } from "./portal.router.module";
import { NavMenuComponent } from "./components/navmenu/navmenu.component";
import { HttpModule } from "@angular/http";
import { HomeComponent } from "./components/home/home.component";
import { CounterComponent } from "./components/counter/counter.component";
import { FetchDataComponent } from "./components/fetchdata/fetchdata.component";
import { CommonModule } from "@angular/common";

@NgModule({
  imports: [CommonModule,PortalRoutingModule, HttpModule, FormsModule],
  exports: [],
  declarations: [
    PortalComponent,
    NavMenuComponent,
    HomeComponent,
    CounterComponent,
    FetchDataComponent
  ],
  providers: []
})
export class PortalModule {}
