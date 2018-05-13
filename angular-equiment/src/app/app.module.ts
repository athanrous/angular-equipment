import { BrowserModule } from '@angular/platform-browser';
import { NgModule,NO_ERRORS_SCHEMA  } from '@angular/core';
import { AppComponent } from './app.component';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { RouterModule, Routes } from '@angular/router';
import { EquipmentComponent } from './equipment/equipment.component';
import { HttpClientModule } from '@angular/common/http';
import {RestApiService} from './rest.api.service';
import {ExcersiceComponent} from './excersice/excersice.component';
import {
  MatGridListModule,
  MatToolbarModule,
} from '@angular/material';
import { MuscleGroupsComponent } from './muscle-groups/muscle-groups.component';
import { EquipmentsComponent } from './equipments/equipments.component';
const appRoutes: Routes = [
  { path: 'library/equipment', component: EquipmentComponent },
  { path: '', component: AppComponent },
  { path: 'library/equipment/exercises/:id', component: ExcersiceComponent},
  {path: 'library/equipment/exercises/equipments/:id',component: EquipmentsComponent},
  {path: 'library/equipment/exercises/muscle-groups/:equipment_id/:exercise_id',component: MuscleGroupsComponent}

];


@NgModule({
  declarations: [
    AppComponent,
    EquipmentComponent,
    ExcersiceComponent,
    MuscleGroupsComponent,
    EquipmentsComponent
  ],
  imports: [
    BrowserModule,
    RouterModule,
    HttpClientModule,
    MDBBootstrapModule.forRoot(),
    RouterModule.forRoot(appRoutes),
    MatToolbarModule,
    MatGridListModule  
  ],
  providers: [RestApiService],
  bootstrap: [AppComponent],
  schemas: [ NO_ERRORS_SCHEMA ]
})
export class AppModule { }
