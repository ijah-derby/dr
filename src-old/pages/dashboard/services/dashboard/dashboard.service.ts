import { Injectable, Injector } from '@angular/core';
import {Extender} from '../../../../shared/helpers/extender';
import {ITabView} from '../../../../shared/helpers/models';

/**
 * set data for tabs in dashboard
 */
@Injectable({
  providedIn: 'root'
})
export class DashboardService extends Extender {
  constructor(protected injector: Injector) {
    super(injector);
  }

  public get views(): ITabView[] {
    return [

         {
         id: 'chart',
         name: 'Dashboard',
         event: () => {
           this.goto(this.routes.chart);
        }
       },
      {
        id: 'schedule',
        name: this.translate.instant('dashboard-component.schedule-tab'),
        event: () => {
          this.goto(this.routes.schedule);
        }
      },
 
      {
        id: 'map',
        name: this.translate.instant('dashboard-component.maps-tab'),
        event: () => {
          this.goto(this.routes.map);
        }
      }
    ];
  }
}
