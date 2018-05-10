import { Component,OnInit,Injectable } from '@angular/core';
import { RestApiEquipment} from './app.models';
import { Http, Response, HttpModule } from '@angular/http';
import { map } from "rxjs/operators";
//import 'rxjs/add/operator/map';
import { HttpClient } from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable()
export class RestApiService {
  
  public results: RestApiEquipment[];

  constructor(private http: HttpClient) { }
  
  public getEquipments(): Observable<RestApiEquipment[]> {
      
    let equipmentsURL = 'http://173.212.236.88/api/v1/equipment/equipments';
    return this.http.get(equipmentsURL)
        .map(res => { 
          return res.map(item => { 
            return new RestApiEquipment( 
                item.id,
                item.name,
                item.url,
                item.image
            );
        });
      }); 
  }
}