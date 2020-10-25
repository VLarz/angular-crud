import { Component, OnInit } from '@angular/core';

import { Employee } from '../../models/employee.model';
import { EmployeeService } from '../../services/employee.service';

@Component({
  selector: 'app-view-employees',
  templateUrl: './view-employees.component.html',
  styleUrls: ['./view-employees.component.css']
})
export class ViewEmployeesComponent implements OnInit {

  search: string;
  employees: Employee[];
  searchEmployees: Employee[];

  constructor(private employeeService: EmployeeService) { }

  ngOnInit(): void {
    this.getEmployees();
  }

  getEmployees(): void {
    this.employeeService.getEmployees()
      .subscribe(emp =>
        this.employees = this.searchEmployees = emp.map(
          x => Object.assign(new Employee(), x)
        )
      );
  }

  onSearch(): void {
    const searchString = this.search.toLowerCase();
    this.searchEmployees = this.employees
      .filter(x =>
        x.fullName.toLowerCase()
          .includes(searchString) ||
        x.position.toLowerCase().includes(searchString)
      );
  }

}
