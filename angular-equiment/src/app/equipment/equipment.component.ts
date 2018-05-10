import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {RestApiService} from '../rest.api.service';
import {Observable} from 'rxjs';
import {RestApiEquipment} from '../app.models';

@Component({
  selector: 'app-equipment',
  templateUrl: './equipment.component.html',
  styleUrls: ['./equipment.component.scss']
})
export class EquipmentComponent implements OnInit {
  
  public data: Array<RestApiEquipment>;
  constructor(private http: HttpClient,private service: RestApiService) { }

  ngOnInit(): void {
  	// Here I have to retrieve all the equipments 
  	// via the Resolver and present them in cards (MDBootstrap-grid view)
  	// https://mdbootstrap.com/angular/components/cards/
	// http://via.placeholder.com/400x200/
    this.service.getEquipments().subscribe(data => {
      console.log("Equipment data" ,data);
      this.data = data; 
    });
  }

}
