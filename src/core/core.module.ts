import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HeaderComponent} from './header/header.component';
import {FooterComponent} from './footer/footer.component';
import {BannerComponent} from './banner/banner.component';
import {PageNotFoundComponent} from './page-not-found/page-not-found.component';
import {RouterLink, RouterLinkActive} from "@angular/router";
import {MatDialogModule} from "@angular/material/dialog";
import { LoginComponent } from './login/login.component';
import {FormsModule} from "@angular/forms";
import {MatFormFieldControl, MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";
import {MatButtonModule} from "@angular/material/button";
import {MatIconModule} from "@angular/material/icon";


@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    BannerComponent,
    PageNotFoundComponent,
    LoginComponent
  ],
  imports: [
    CommonModule,
    RouterLink,
    MatDialogModule,
    RouterLinkActive,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatIconModule
  ],
  exports: [
    HeaderComponent,
    FooterComponent,
    BannerComponent,
    PageNotFoundComponent,
    LoginComponent
  ]
})
export class CoreModule {
}
