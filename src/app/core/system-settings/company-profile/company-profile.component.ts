import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { companyInfo } from 'src/app/shared/models/models';
import { routes } from 'src/app/shared/routes/routes';

@Component({
  selector: 'app-company-profile',
  templateUrl: './company-profile.component.html',
  styleUrls: ['./company-profile.component.scss']
})
export class CompanyProfileComponent implements OnInit{
  company: companyInfo = {}
  routes = routes;
  currencies: any[] = [{id: 1, name: 'USD'}, {id: 2, name: 'NIS'}]; // get from lookups
  constructor() {

  }

  ngOnInit(): void {
    // fill company info
  }

  onSave(form: NgForm) {
    if(form.invalid) {
      form.form.markAllAsTouched();
      return;
    }
    //this.addEditUser();
  }


}
