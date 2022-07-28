import { Pipe, PipeTransform } from '@angular/core';
import { Products, ordersProduct } from '../models/products';

@Pipe({
  name: 'filterMenu'
})
export class FilterMenuPipe implements PipeTransform {
  valueoption!: string;
  transform(product: ordersProduct[], searchInputP:string='', optionPCategory:string=''): ordersProduct[] {
    // console.log('que trae pipe', product);
    if(searchInputP.length > 0){
     // console.log('me estan buscando');
      const filterSearchProduct = product.filter(value => value.product.name.toLowerCase().includes(searchInputP.toLowerCase()) || value.product.type.toLowerCase().includes(searchInputP.toLowerCase()));
      // console.log('whats filter', filterSearchProduct);
      return filterSearchProduct;
    }
    if(optionPCategory==="desayuno" || optionPCategory==="almuerzo"){
      this.valueoption = optionPCategory==='desayuno'? "Desayuno": "Almuerzo y cena";
      // console.log('entro a optionPCcategory');
      const filterProductCategory = product.filter(value => value.product.type === this.valueoption);
      // console.log('que filtra :', filterProductCategory);
      return filterProductCategory;
    }
    if(optionPCategory==='none'){
      return product;
    }
    return product;
  }
}
