import { Pipe, PipeTransform } from '@angular/core';
import { ordersProduct } from '../models/products';
@Pipe({
  name: 'filterMenu',
})
export class FilterMenuPipe implements PipeTransform {
  valueoption!: string;
  transform(
    product: ordersProduct[],
    searchInputP: string = '',
    optionPCategory: string = ''
  ): ordersProduct[] {
    if (searchInputP.length > 0) {
      const filterSearchProduct = product.filter(
        value =>
          value.product.name
            .toLowerCase()
            .includes(searchInputP.toLowerCase()) ||
          value.product.type.toLowerCase().includes(searchInputP.toLowerCase())
      );
      return filterSearchProduct;
    }
    if (optionPCategory === 'desayuno' || optionPCategory === 'almuerzo') {
      this.valueoption =
        optionPCategory === 'desayuno' ? 'Desayuno' : 'Almuerzo y cena';
      const filterProductCategory = product.filter(
        value => value.product.type === this.valueoption
      );
      return filterProductCategory;
    }
    if (optionPCategory === 'none') {
      return product;
    }
    return product;
  }
}
