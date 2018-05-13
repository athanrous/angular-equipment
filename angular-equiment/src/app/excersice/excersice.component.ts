import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {RestApiExercise,RestApiResults} from '../app.models';
import {RestApiService} from '../rest.api.service';
import {Observable} from 'rxjs';
import {ActivatedRoute} from "@angular/router";
@Component({
  selector: 'app-excersice',
  templateUrl: './excersice.component.html',
  styleUrls: ['./excersice.component.scss']
})
export class ExcersiceComponent implements OnInit {
  
  public data: RestApiExercise;
  public results: Array<RestApiResults>;
  public equipment_id: number; 		
  constructor(private http: HttpClient,private service: RestApiService,private route: ActivatedRoute) {
  	this.route.params.subscribe( params => {this.equipment_id = params['id'];});
  }

  ngOnInit() {
  	this.service.getExcercises(this.equipment_id).subscribe(data => {
      	this.data = data;
      	this.results = data['results']; 
  	});
  }

}
