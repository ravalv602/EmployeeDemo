import { Component, OnInit } from '@angular/core';
import { EmployeeI } from '../employee-i';
import { EmployeeServiceService } from '../employee-service.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-add-emp',
  templateUrl: './add-emp.component.html',
  styleUrls: ['./add-emp.component.css']
})
export class AddEmpComponent implements OnInit {
  ngOnInit(): void {
  }
  employeeRecords:EmployeeI ={
    'Id':0,
    'Name':'',
    'Role': '',
    'Department': ''
  }
  constructor(private addEmpS:EmployeeServiceService,private router:Router){
  }

  addEmp()
  {
    console.log(this.employeeRecords);
    this.addEmpS.createE(this.employeeRecords).subscribe((data)=>{this.router.navigate(["/"])});
  }

}
