import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'productDescription'
})
export class ProductDescriptionPipe implements PipeTransform {

  transform(value: number, ...args: unknown[]): string {
    if(value > 100000){
      return 'Expensive';
    }else{
      return 'Cheap';
    }
    return '';
  }

}
