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
  
    this.service.getEquipments().subscribe(data => {
      this.data = data; 
    });
  } 

  public onKey(event): void {
    this.service.getEquipmentbyName(event.target.value).subscribe(data => {
      console.log("The new data after search" ,data);
      this.data = data;
    });
  }
}
