import { BrowserModule } from '@angular/platform-browser';
import { NgModule,NO_ERRORS_SCHEMA  } from '@angular/core';
import { AppComponent } from './app.component';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { RouterModule, Routes } from '@angular/router';
import { EquipmentComponent } from './equipment/equipment.component';
import { HttpClientModule } from '@angular/common/http';
import {RestApiService} from './rest.api.service';

const appRoutes: Routes = [
  { path: 'library/equipment', component: EquipmentComponent },
  { path: '', component: AppComponent }
];


@NgModule({
  declarations: [
    AppComponent,
    EquipmentComponent
  ],
  imports: [
    BrowserModule,
    RouterModule,
    HttpClientModule,
    MDBBootstrapModule.forRoot(),
    RouterModule.forRoot(appRoutes)  
  ],
  providers: [RestApiService],
  bootstrap: [AppComponent],
  schemas: [ NO_ERRORS_SCHEMA ]
})
export class AppModule { }
