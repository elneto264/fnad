import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA  } from '@angular/core';



import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AreasComponent } from './component/areas/areas.component';
import { ContactFormComponent } from './component/contact-form/contact-form.component';
import { HeaderComponent } from './component/header/header.component';
import { HomeComponent } from './component/home/home.component';
import { RecursosComponent } from './component/recursos/recursos.component';
import { ListaComponent } from "./component/lista/lista.component";
import { SidenavListComponent } from './component/sidenav-list/sidenav-list.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MaterialModule } from './material/material.module';
import { HttpClientModule } from '@angular/common/http';
import { AngularMaterialModule } from './material.module';
import { ApiService } from './shared/api.service';
import { FlexLayoutModule } from '@angular/flex-layout';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    AppComponent,
    AreasComponent,
    ContactFormComponent,
    HeaderComponent,
    HomeComponent,
    RecursosComponent,
    ListaComponent,
    SidenavListComponent
  ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatSelectModule,
    MatInputModule,
    HttpClientModule,
    AngularMaterialModule,
    Ng2SearchPipeModule,
    NgbModule,
    MatToolbarModule,
    MaterialModule,
    FlexLayoutModule
  ],
  providers: [
    ApiService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
