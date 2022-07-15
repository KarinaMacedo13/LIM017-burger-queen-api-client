import { Pipe, PipeTransform } from '@angular/core';
import { order } from '../models/orders';

@Pipe({
  name: 'filterOrder'
})
export class FilterOrderPipe implements PipeTransform {

  transform(order: order[], optionStatus:string=''): order[] {
    order.sort((a, b) => <any> new Date(b.dataEntry) - <any> new Date(a.dataEntry));
    if(optionStatus==='pendiente'){
      const filterOrderCategory = order.filter(value => value.status === optionStatus);
      return filterOrderCategory;
    }
    if(optionStatus==='preparado'){
      const filterOrderCategory = order.filter(value => value.status === optionStatus);
      return filterOrderCategory;
    }
    if(optionStatus==='entregado'){
      const filterOrderCategory = order.filter(value => value.status === optionStatus);
      return filterOrderCategory;
    }
    if(optionStatus==='none'){
      return order;
    }
    return order;
  }

}
