import { Pipe, PipeTransform } from '@angular/core';
import { Products } from '../models/products';

@Pipe({
  name: 'filtroP',
})
export class FiltroPPipe implements PipeTransform {
  valueoption!: string;
  transform(
    product: Products[],
    searchInputP: string = '',
    optionPCategory: string = ''
  ): Products[] {
    if (searchInputP.length > 0) {
      const filterSearchProduct = product.filter(
        value =>
          value.name.toLowerCase().includes(searchInputP.toLowerCase()) ||
          value.type.toLowerCase().includes(searchInputP.toLowerCase())
      );
      return filterSearchProduct;
    }
    if (optionPCategory === 'desayuno' || optionPCategory === 'almuerzo') {
      this.valueoption =
        optionPCategory === 'desayuno' ? 'Desayuno' : 'Almuerzo y cena';
      const filterProductCategory = product.filter(
        value => value.type === this.valueoption
      );
      return filterProductCategory;
    }
    if (optionPCategory === 'none') {
      return product;
    }
    return product;
  }
}
