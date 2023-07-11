import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { EmployeeI } from './employee-i';

@Injectable({
  providedIn: 'root'
})
export class EmployeeServiceService {

  constructor(private http:HttpClient) { }

  //getAllEmployees
  getAllEmp():Observable<EmployeeI[]>{
      return this.http.get<EmployeeI[]>("http://localhost:3000/employees");
  }

  createE(payload:EmployeeI):Observable<EmployeeI>
  {
    return this.http.post<EmployeeI>("http://localhost:3000/employees",payload);
  }

}
