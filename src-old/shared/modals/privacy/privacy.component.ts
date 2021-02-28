import { Component, Injector, OnInit } from '@angular/core';
import {Extender} from '../../helpers/extender';

@Component({
  selector: 'app-privacy',
  templateUrl: './privacy.component.html',
  styleUrls: ['./privacy.component.scss'],
})
export class PrivacyComponent extends Extender implements OnInit {

  constructor(
    protected injector: Injector
  ) {
    super(injector);
  }

  public ngOnInit() { }

}
