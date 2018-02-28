import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './components/app/app.component';
import { NavMenuComponent } from './components/navmenu/navmenu.component';
import { AppRoutingModule } from './app.router.module';

@NgModule({
    declarations: [
        AppComponent,
        NavMenuComponent
    ],
    imports: [
        CommonModule,
        HttpModule,
        FormsModule,
        AppRoutingModule
    ]
})
export class AppModuleShared {
}
