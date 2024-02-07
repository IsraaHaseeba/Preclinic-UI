import { Component, ElementRef, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Sort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { categoryList, lookupList } from 'src/app/shared/models/models';
import { routes } from 'src/app/shared/routes/routes';

export enum ModalEntities {Lookup, Category}

@Component({
  selector: 'app-lookups',
  templateUrl: './lookups.component.html',
  styleUrls: ['./lookups.component.scss']
})
export class LookupsComponent {
  public routes = routes;
  categoriesSearchText = '';
  lookupsSearchText = '';
  displayedColumns: {key:string, name: string}[] = 
  [
    {key: 'categoryName', name: 'Category Name'}, 
    {key: 'enName', name: 'En Name'}, 
    {key: 'arName', name: 'Ar Name'},
    {key: 'code', name: 'Code'}
  ];
  lookupsFilterKeys = this.displayedColumns.map(c => c.key);
  categoriesFilterKeys: string[] = ['code'];

  dataSource: MatTableDataSource<any> = new MatTableDataSource<any>();
  isActive: boolean = true;
  categories: categoryList[] = [
    {
      id: 1,
      code: 'code 1',
      enName: 'string',
      arName: 'string',
    },
    {
      id: 3,
      code: 'hi',
      enName: 'ss',
      arName: 'سس',
    },
    {
      id: 2,
      code: 'code 2',
      enName: 'string',
      arName: 'string',
    }];
  categoryLookups: lookupList[] = [];
  allLookups: lookupList[] = [
    {
      id: 1,
      categoryName: 'code 1',
      enName: 'string',
      arName: 'string',
      code: 'L code 1',
      categoryId: 1
    },
    {
      id: 3,
      categoryName: 'code 1',
      enName: 'ss',
      arName: 'سس',
      code: 'hi',
      categoryId: 1
    },
    {
      id: 2,
      categoryName: 'code 2',
      enName: 'string',
      arName: 'string',
      code: 'L code 2',
      categoryId: 2
    }
  ];
  selectedCategory?: categoryList;
  lookup: lookupList = {};
  category: categoryList = {};
  modalEntities = ModalEntities;
  isFormValid: boolean = true;
  isCodeExist: boolean = false;
  @ViewChild('closeLookupModalBtn') closeLookupModalBtn: ElementRef<any> | undefined;
  @ViewChild('closeCategoryModalBtn') closeCategoryModalBtn: ElementRef<any> | undefined;


  constructor() {
    this.dataSource.data = this.allLookups;
  }

  public sortData(sort: Sort) {
    const data = this.categoryLookups.slice();

    if (!sort.active || sort.direction === '') {
      this.categoryLookups = data;
    } else {
      this.categoryLookups = data.sort((a, b) => {
        const aValue = (a as any)[sort.active].toLowerCase();
        const bValue = (b as any)[sort.active].toLowerCase();
        return (aValue < bValue ? -1 : 1) * (sort.direction === 'asc' ? 1 : -1);
      });
    }
  }

  selectCategory(category?: categoryList) {
    if(category) {
      this.selectedCategory = category;
      this.lookup.categoryId = category.id;
      this.categoryLookups = this.dataSource.data.filter(l => l.categoryId == category.id);
    }
  }

  fillModalInfo(entity: number, object: any) {
    if(entity == ModalEntities.Lookup) {
      this.lookup = object;
    }
    else if(entity == ModalEntities.Category) {
      this.category = object;
    }
  }

  onSave(form: NgForm, entity: number) {
    if (form.invalid) {
      this.isFormValid = false;
      form.form.markAllAsTouched();
      return;
    }

    if (entity == ModalEntities.Lookup) {
      this.allLookups.push(this.lookup);
      this.selectCategory(this.selectedCategory);
      this.closeLookupModalBtn?.nativeElement.click();
    }
    else if (entity == ModalEntities.Category) {
      if(!this.checkIfCodeExists(this.category.code)){
        this.categories.push(this.category);
        this.closeCategoryModalBtn?.nativeElement.click();
        this.isCodeExist = false;
      } else {
        this.isCodeExist = true; 
      }
    }
  }

  checkIfCodeExists(code?: string) {
    if(code) {

    }
    return false;
  }

  reset() {
    this.category = {};
    this.lookup = {};
  }
  
}
