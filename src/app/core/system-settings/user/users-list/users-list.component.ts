import { Component } from '@angular/core';
import { Sort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { doctorlist, pageSelection, userList, userDetails } from 'src/app/shared/models/models';
import { routes } from 'src/app/shared/routes/routes';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.scss']
})
export class UsersListComponent {

  public routes = routes;
  dataSource!: MatTableDataSource<doctorlist>;
  displayedColumns: {key:string, name: string}[] = 
  [
    {key: 'name', name: 'Name'}, 
    {key: 'mobileNumber', name: 'Mobile Number'}, 
    {key: 'identityNumber', name: 'Identity Number'},
    {key: 'birdthDate', name: 'Birth Date'}
  ];

  filterKeys = ['name', 'mobileNumber', 'identityNumber'];
  searchText = "";
 
  usersList: userList[] = [
    {
      id: 1,
      name: 'israa',
      mobileNumber: "0698",
      identityNumber: "121212",
      birthDate: new Date()
    },
    {
      id: 2,
      name: 'ola',
      mobileNumber: "06982",
      identityNumber: "11111",
      birthDate: new Date()
    },
    {
      id: 3,
      name: 'hadeel',
      mobileNumber: "11",
      identityNumber: "2222",
      birthDate: new Date()
    }
  ];

  constructor(private router: Router){
  }
  
  public sortData(sort: Sort) {
    const data = this.usersList.slice();

    if (!sort.active || sort.direction === '') {
      this.usersList = data;
    } else {
      this.usersList = data.sort((a, b) => {
        const aValue = (a as any)[sort.active];
        const bValue = (b as any)[sort.active];
        return (aValue < bValue ? -1 : 1) * (sort.direction === 'asc' ? 1 : -1);
      });
    }
  }

  naviateToAddEditForm(id?: number) {
    this.router.navigate([routes.addEditUser  + '/' + (id ?? 0)]);
  }

}
