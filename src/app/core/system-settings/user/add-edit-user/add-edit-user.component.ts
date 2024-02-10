import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { userDetails } from 'src/app/shared/models/models';
import { routes } from 'src/app/shared/routes/routes';

@Component({
  selector: 'app-add-edit-user',
  templateUrl: './add-edit-user.component.html',
  styleUrls: ['./add-edit-user.component.scss']
})
export class AddEditUserComponent implements OnInit{

  public routes = routes;
  user: userDetails = {};
  isAdd: boolean = true;

  constructor(private router: Router, private activatedRoute: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
      let userId = params['id'];
      if(userId && userId != '0') {
        this.isAdd = false;
        this.user = this.searchUserDetails(userId);
      }
    })
  }

  searchUserDetails(id: number) {
    return {
      id: 1,
      name: 'israa',
      mobileNumber: "0698",
      identityNumber: "121212",
      birthDate: new Date(),
      email: 'israa@gmail.com',
      password: "123",
      username: "12"
    }
  }

  naviateToUsersList() {
    this.router.navigate([routes.users]);
  }

  onSave(form: NgForm) {
    if(form.invalid) {
      form.form.markAllAsTouched();
      return;
    }
    //this.addEditUser();
    this.naviateToUsersList();
  }
 
}
