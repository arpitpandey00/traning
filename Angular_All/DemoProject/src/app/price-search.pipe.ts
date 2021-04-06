import { Pipe, PipeTransform } from '@angular/core';
import { IProducts } from './product/IProducts';

@Pipe({
  name: 'priceSearch'
})
export class PriceSearchPipe implements PipeTransform {

  transform(value: IProducts[],args: number): IProducts[] {
    if(!args)
    {
    return value;
  }
  return value.filter(
    item=> item.Price>= args );
}

}
