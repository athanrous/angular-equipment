import { Component,OnInit,Injectable } from '@angular/core';
import { RestApiEquipment,RestApiExercise} from './app.models';
import { Http, Response, HttpModule } from '@angular/http';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class RestApiService {
  
  public results: RestApiEquipment[];

  constructor(private http: HttpClient) { }
  
  public getEquipmentbyName(search: string): Observable<RestApiEquipment[]> {
  	console.log("Search term is" ,search);
  	if (search) {
  		let equipmentbyNameURL = 'http://173.212.236.88/api/v1/equipment/equipments/?search=' + search;
    	return this.http.get(equipmentbyNameURL).pipe(map((res: RestApiEquipment[]) => {
        console.log("New data" ,res);
    		return res;
    	}));
    } else {
    	return this.getEquipments();
    }	
  }

  public getEquipments(): Observable<RestApiEquipment[]> {
      
    let equipmentsURL = 'http://173.212.236.88/api/v1/equipment/equipments';
    return this.http.get(equipmentsURL).pipe(map((res: RestApiEquipment[]) => {
    return res;
    })); 
  }
  public getExcercises(id: number): Observable<RestApiExercise> {
      
    let equipmentsURL = 'http://173.212.236.88/api/v1/exercise/exercises/?equipments=' + id;
    return this.http.get(equipmentsURL).pipe(map((res: RestApiExercise) => {
    return res;
    })); 
  }
}