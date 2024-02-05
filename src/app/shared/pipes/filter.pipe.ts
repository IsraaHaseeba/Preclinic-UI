import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterPipe'
})

export class FilterPipe implements PipeTransform {
  transform(list: any[], filterValue: string, properties?: string[]): any[] {
    filterValue = filterValue.trim().toLowerCase();

    if (!list || !filterValue) {
      return list;
    }
    if(properties) 
      return list.filter(item => {
        return properties.some(property => item[property].trim().toLowerCase().includes(filterValue));
      });
    return list.filter(item => item.trim().toLowerCase().includes(filterValue));
  }
}
