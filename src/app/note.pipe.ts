import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'note'
})
export class NotePipe implements PipeTransform {

  transform(value: number): string {
    const fullStar = '★';
    const emptyStar = '☆';
    const rating = Math.round(value);
    return fullStar.repeat(rating) + emptyStar.repeat(5 - rating);
  }

}
