import { Pipe, PipeTransform } from '@angular/core';
import { Products } from '../models/products';

@Pipe({
  name: 'filtroP'
})
export class FiltroPPipe implements PipeTransform {

  transform(product: Products[], searchInputP:string=''): Products[] {
    console.log('que trae pipe', product);
    if(searchInputP.length > 0){
      console.log('me estan buscando');
      const filterSearchProduct = product.filter(value => value.name.toLowerCase().includes(searchInputP.toLowerCase()) || value.type.toLowerCase().includes(searchInputP.toLowerCase()));
      console.log('whats filter', filterSearchProduct);
      return filterSearchProduct;
    }
    return product;
  }
}