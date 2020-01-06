import { Pipe, PipeTransform } from '@angular/core';
import { DefaultService } from './default.service'

@Pipe({
  name: 'namingaction'
})
export class NamingactionPipe implements PipeTransform {

  constructor(private Users: DefaultService) {}

  nameCodes = {
    0: this.Users.ACTIVITIES[0].name,
    1: this.Users.ACTIVITIES[1].name,
    2: this.Users.ACTIVITIES[2].name,
    3: this.Users.ACTIVITIES[3].name,
    4: this.Users.ACTIVITIES[4].name,
}

  transform(value: any): any {
    return this.nameCodes[value];
  }
}
