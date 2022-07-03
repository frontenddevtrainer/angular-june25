import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'edurekauppercase'
})
export class UppercasePipe implements PipeTransform {

  transform(value: string | null, ...args: unknown[]): string | null {
    if(value && value.length > 0)
      {
        return value.toUpperCase()
      }
    return value;
  }

}
