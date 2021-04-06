import { Pipe, PipeTransform } from '@angular/core';
import { IProducts } from './product/IProducts';

@Pipe({
  name: 'productSearch'
})
export class ProductSearchPipe implements PipeTransform {

  transform(value: IProducts[], args: string): IProducts[] {
    if(!args){
     return value;
    }
    return value.filter(
item=> item.Title.toLowerCase().indexOf(args.toLowerCase())> -1);
    

  }

}
