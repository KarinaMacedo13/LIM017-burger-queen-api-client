import { Pipe, PipeTransform } from '@angular/core';
import { Products } from '../models/products';

@Pipe({
  name: 'filtroP'
})
export class FiltroPPipe implements PipeTransform {
  valueoption!: string;
  transform(product: Products[], searchInputP:string='', optionPCategory:string=''): Products[] {
    // console.log('que trae pipe', product);
    if(searchInputP.length > 0){
     // console.log('me estan buscando');
      const filterSearchProduct = product.filter(value => value.name.toLowerCase().includes(searchInputP.toLowerCase()) || value.type.toLowerCase().includes(searchInputP.toLowerCase()));
      // console.log('whats filter', filterSearchProduct);
      return filterSearchProduct;
    }
    if(optionPCategory==="desayuno" || optionPCategory==="almuerzo"){
      this.valueoption = optionPCategory==='desayuno'? "Desayuno": "Almuerzo y cena";
      // console.log('entro a optionPCcategory');
      const filterProductCategory = product.filter(value => value.type === this.valueoption);
      // console.log('que filtra :', filterProductCategory);
      return filterProductCategory;
    }
    if(optionPCategory==='none'){
      return product;
    }
    return product;
  }
}