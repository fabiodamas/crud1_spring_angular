import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {EmployeeListComponent} from "./components/employee-list/employee-list.component";
import {CreateEmployeeComponent} from "./components/create-employee/create-employee.component";
import {UpdateEmployeeComponent} from "./components/update-employee/update-employee.component";
import {EmployeeDetailsComponent} from "./components/employee-details/employee-details.component";


const routes: Routes = [
  { path: '', redirectTo: 'employee', pathMatch: 'full' },
  { path: 'employees', component: EmployeeListComponent },
  { path: 'add-emp', component: CreateEmployeeComponent },
  { path: 'update-emp/:id', component: UpdateEmployeeComponent },
  { path: 'emp-detail/:id', component: EmployeeDetailsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
