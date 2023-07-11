import { Component, OnInit } from '@angular/core';
import { EmployeeI } from '../employee-i';
import { EmployeeServiceService } from '../employee-service.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})


export class DashboardComponent implements OnInit{
  
  empData:EmployeeI[] = [];
  displayedColumns:string[]=["Id","Name","Role","Department"];

  constructor(private emp:EmployeeServiceService){}

  ngOnInit(): void {
    this.getAllData();
  }

  getAllData()
  {
    this.emp.getAllEmp().subscribe((data)=>{this.empData=data})
  }




}
