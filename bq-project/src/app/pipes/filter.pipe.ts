import { Pipe, PipeTransform } from '@angular/core';
import { Workers } from '../models/workers';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(workers: Workers[], searchInput:string=''): Workers[] {
    console.log(workers);
    console.log(searchInput);
    if(searchInput.length === 0){
      return workers;
    }
    const filterSearch = workers.filter(value => value.email.includes(searchInput) || value.password.includes(searchInput));
    return filterSearch;
  }
}
