import { Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Pipe({
  name: 'youtube'
})
export class YoutubePipe implements PipeTransform {

  constructor(private domSanitizer: DomSanitizer) {
  }
  public transform(value, args) {
    return this.domSanitizer.bypassSecurityTrustResourceUrl(value);
  }

}
