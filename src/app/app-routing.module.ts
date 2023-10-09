import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PortafolioComponent } from './portafolio/portafolio.component';
import { InicioComponent } from './inicio/inicio.component';
import { ContactoComponent } from './contacto/contacto.component';
import { BlogComponent } from './blog/blog.component';
import { NosotrosComponent } from './nosotros/nosotros.component';
import { PrtflprinComponent } from './prtflprin/prtflprin.component';
import { CvmiloComponent } from './cvmilo/cvmilo.component';
import { TerComponent } from './ter/ter.component';
import { PoliticasComponent } from './politicas/politicas.component';
import { TerminosComponent } from './terminos/terminos.component';
import { AftereffectsComponent } from './aftereffects/aftereffects.component';

const routes: Routes = [
  { path: '', component: InicioComponent },
  { path: 'portafolio', component: PortafolioComponent},
  { path: 'contacto', component: ContactoComponent},
  { path: 'blog', component: BlogComponent},
  { path: 'nosotros', component: NosotrosComponent},
  { path: 'portafolioprincipal', component: PrtflprinComponent},
  { path: 'cvmilo', component: CvmiloComponent},
  { path: 'tresenraya', component: TerComponent},
  { path: 'terminos&condiciones', component: TerminosComponent},
  { path: 'animaciones', component: AftereffectsComponent},
  { path: 'politicasdeprivacidad', component: PoliticasComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }


