import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'mypipe'
})
export class MypipePipe implements PipeTransform {

  transform(value: any, ...args: any[]): any {
    console.log("values in mypipe",value)
    var x = value.sort()
    console.log(x)
    return x
  }

}
