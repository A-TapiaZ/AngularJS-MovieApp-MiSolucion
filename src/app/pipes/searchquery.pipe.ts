import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'searchquery'
})
export class SearchqueryPipe implements PipeTransform {

  transform(value: string, ...args: unknown[]): string {
    
    return value

  }

}
