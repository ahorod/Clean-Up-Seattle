import { Pipe, PipeTransform } from '@angular/core';
import { Meetup } from './meetup.model'
import { Mess } from './mess.model'

@Pipe({
  name: 'meetupByMess',
  pure: false
})
export class MeetupByMessPipe implements PipeTransform {

  transform(input: Meetup[], messId: string){
   var output: Meetup[] = [];
   for (var i = 0; i < input.length; i++) {
     if (input[i].messId === messId) {
       output.push(input[i]);
     }
   }
   return output;
 }
}
