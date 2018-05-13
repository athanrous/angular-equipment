import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {RestApiMuscleGroup,RestApiExercise,RestApiResults} from '../app.models';
import {RestApiService} from '../rest.api.service';
import {Observable} from 'rxjs';
import {ActivatedRoute} from "@angular/router";
@Component({
  selector: 'app-muscle-groups',
  templateUrl: './muscle-groups.component.html',
  styleUrls: ['./muscle-groups.component.scss']
})
export class MuscleGroupsComponent implements OnInit {

  public data: any;
  public results: RestApiResults;
  public final: RestApiMuscleGroup[];
  public excercise_id: number; 			
  public equipment_id: number
  constructor(private http: HttpClient,private service: RestApiService,private route: ActivatedRoute) {
  	this.route.params.subscribe( params => {this.excercise_id = params['exercise_id'];
  	this.equipment_id = params['equipment_id']; } ); 
  }

  ngOnInit() {

  	this.service.getMucleGroups(this.equipment_id,this.excercise_id).subscribe(data => {
  		
      let id = Number(this.excercise_id);
      this.data = data;
      this.data.forEach(function (value) {
        if (value['id'] === id) {
          this.final.push(value);
        }
      }); 
  	});
  }

}
