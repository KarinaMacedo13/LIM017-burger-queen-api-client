import { Pipe, PipeTransform } from '@angular/core';
import { Workers } from '../models/workers';

@Pipe({
  name: 'filter',
})
export class FilterPipe implements PipeTransform {
  valueoption!: boolean;

  transform(
    workers: Workers[],
    searchInput: string = '',
    optionAdmin: string = ''
  ): Workers[] {
    if (searchInput.length > 0) {
      const filterSearch = workers.filter(
        value =>
          value.email.toLowerCase().includes(searchInput.toLowerCase()) ||
          value.password.includes(searchInput)
      );
      return filterSearch;
    }
    if (optionAdmin === 'admin') {
      const filterAdmin = workers.filter(
        value => value.roles.description === optionAdmin
      );
      return filterAdmin;
    }
    if (optionAdmin === 'weiter') {
      const filterAdmin = workers.filter(
        value => value.roles.description === optionAdmin
      );
      return filterAdmin;
    }
    if (optionAdmin === 'chef') {
      const filterAdmin = workers.filter(
        value => value.roles.description === optionAdmin
      );
      return filterAdmin;
    }
    if (optionAdmin === 'none') {
      return workers;
    }
    return workers;
  }
}
