import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sortbynote'
})
export class SortbynotePipe implements PipeTransform {

  transform(artisans: any[]): any[] {
    return artisans.sort((a:any,b: any) => {return b.note - a.note});  
   
  }
    
}
