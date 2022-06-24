import { Pipe, PipeTransform } from '@angular/core';
import { Workers } from '../models/workers';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {
  valueoption!: boolean;

  transform(workers: Workers[], searchInput:string='', optionAdmin:string =''): Workers[] {
    // console.log(workers);
    // console.log(searchInput);
    // console.log('soy option', optionAdmin);
    // console.log('soy option con el tipo de:', typeof optionAdmin);
    // console.log('soy option con el tipo de:', optionAdmin.length);
    if(searchInput.length > 0 ){
      console.log('me estan buscando');
      const filterSearch = workers.filter(value => value.email.toLowerCase().includes(searchInput.toLowerCase()) || value.password.includes(searchInput));
      return filterSearch;
    }

    if(optionAdmin === "true" || optionAdmin === "false"){
      this.valueoption = optionAdmin==='true'?true:false;
      console.log('entro a option admin');
      const filterAdmin = workers.filter(value => value.roles.admin===this.valueoption?true : false);
      console.log(filterAdmin)
      return filterAdmin;
    }
    if(optionAdmin==='none'){
      return workers;
    }
    console.log('consoleo a todos los usuarios');
    return workers;
  }
}
