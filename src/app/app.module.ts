import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {NgxPaginationModule} from 'ngx-pagination';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { InicioComponent } from './inicio/inicio.component';
import { FooterComponent } from './footer/footer.component';
import { PortafolioComponent } from './portafolio/portafolio.component';
import { ContactoComponent } from './contacto/contacto.component';
import { BlogComponent } from './blog/blog.component';
import { NosotrosComponent } from './nosotros/nosotros.component';
import { TerminosComponent } from './terminos/terminos.component';
import { PoliticasComponent } from './politicas/politicas.component';
import { ContrapidoComponent } from './contrapido/contrapido.component';
import { PrtflprinComponent } from './prtflprin/prtflprin.component';
import { CvmiloComponent } from './cvmilo/cvmilo.component';
import { TerComponent } from './ter/ter.component';
import { AftereffectsComponent } from './aftereffects/aftereffects.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    InicioComponent,
    FooterComponent,
    PortafolioComponent,
    ContactoComponent,
    BlogComponent,
    NosotrosComponent,
    TerminosComponent,
    PoliticasComponent,
    ContrapidoComponent,
    PrtflprinComponent,
    CvmiloComponent,
    TerComponent,
    AftereffectsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgxPaginationModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
