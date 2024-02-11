import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { DataService } from 'src/app/shared/data/data.service';
import { companyDetails } from 'src/app/shared/models/models';
import { routes } from 'src/app/shared/routes/routes';

@Component({
  selector: 'app-company-profile',
  templateUrl: './company-profile.component.html',
  styleUrls: ['./company-profile.component.scss']
})
export class CompanyProfileComponent implements OnInit{
  company: companyDetails = {}
  routes = routes;
  currencies: any[] = [];
  locatio: any = {};
  categoriesCodes = ['Currency'];
  lookupsLists: any = {};

  constructor(private dataService: DataService, private toast: ToastrService) {

  }

  ngOnInit(): void {
    this.searchCompanyDetails();
    this.searchLookups();
  }

  searchCompanyDetails() {
    this.dataService.getCompanyDetails().subscribe(res => {
      this.company = res;
    })
  }

  searchLookups() {
    this.categoriesCodes.forEach((code: any) => {
      this.dataService.getLookupsByCategoryCode(code).subscribe((res) => {
        this.lookupsLists[code] = res ?? [];
      });
    });
  }

  addUpdateCompanyDetails() {
    return this.dataService.addUpdateCompanyDetails(this.company);
  }

  onSave(form: NgForm) {
    if(form.invalid) {
      form.form.markAllAsTouched();
      return;
    }
    this.addUpdateCompanyDetails().subscribe(
      (res) => {
        this.toast.success("Saved!")
      }, 
      (error) => {
        this.toast.error("Failed!")
      }
    );
  }
}
