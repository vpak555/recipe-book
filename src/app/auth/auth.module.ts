import {NgModule} from '@angular/core';

import {AuthRoutingModule} from './auth-routing.module';
import {AuthComponent} from "./auth.component";
import {SharedModule} from "../shared/shared.module";
import {FormsModule} from "@angular/forms";


@NgModule({
  declarations: [
    AuthComponent
  ],
  imports: [
    FormsModule,
    AuthRoutingModule,
    SharedModule
  ],
  exports: [
    AuthComponent
  ]
})
export class AuthModule { }
