import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sortbynote'
})
export class SortbynotePipe implements PipeTransform {

  transform(produits: any[]): any[] {
    return produits.sort((a:any,b: any) => {return b.note - a.note});  }

}
