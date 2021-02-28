import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'groupFilter'
})
export class GroupPipe implements PipeTransform {

  transform(groups: any[], search: string): any {
    if (!groups) {
      return;
    } else if (!search) {
      return groups;
    } else {
      let term = search.toLowerCase();
      return groups.filter(group => group.name.toLowerCase().indexOf(term) > -1);
    }
  }

}
