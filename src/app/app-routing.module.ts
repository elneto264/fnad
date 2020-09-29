import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AreasComponent } from './component/areas/areas.component';
import { HomeComponent } from './component/home/home.component';
import { RecursosComponent } from './component/recursos/recursos.component';
import { ContactFormComponent } from './component/contact-form/contact-form.component';

const routes: Routes = [
  { path:  '', redirectTo:  'inicio', pathMatch: 'full'},
{ path:  'inicio', component: HomeComponent },
{ path:  'areas' , component: AreasComponent },
{ path:  'recursos' , component: RecursosComponent },
{ path:  'contacto' , component: ContactFormComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
