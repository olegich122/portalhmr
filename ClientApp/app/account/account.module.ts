import { NgModule } from '@angular/core';

import { AccountComponent } from './account.component';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { FormsModule } from '@angular/forms';
import { AccountRoutingModule } from './account.router.module';

@NgModule({
    imports: [CommonModule,FormsModule,AccountRoutingModule],
    exports: [],
    declarations: [AccountComponent,LoginComponent,RegisterComponent],
    providers: [],
})
export class AccountModule { }
