import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'friendFilter'
})
export class FriendPipe implements PipeTransform {

  transform(friends: any[], search: string): any {
    if (!friends) {
      return;
    } else if (!search) {
      return friends;
    } else {
      let term = search.toLowerCase();
      console.log(friends);
      return friends.filter(friend => friend.displayName && friend.displayName.toLowerCase().indexOf(term) > -1);
    }
  }

}
