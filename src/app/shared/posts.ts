import { Injectable } from '@angular/core';
import { ScullyRoute, ScullyRoutesService } from '@scullyio/ng-lib';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { Post } from '../models/post.interface';

const dateRegex = /([12]\d{3}-(0[1-9]|1[0-2])-(0[1-9]|[12]\d|3[01]))/;

@Injectable()
export class Posts {
  constructor(private _scullyRoutes: ScullyRoutesService) {}

  /**
   * Taking the array of ScullyRoutes,
   * filtering it by only Posts from route name,
   * matching only yyyy/mm/dd routes,
   * mapping it to have a date based on route name and
   * sorting it by date
   */

  posts$ = this._scullyRoutes.available$.pipe(
    map(routeList => {
      return routeList
        .filter((route: ScullyRoute) => route.route.startsWith(`/post/`))
        .filter((route: ScullyRoute) => dateRegex.test(route.route))
        .map(route => ({ ...route, date: new Date(dateRegex.exec(route.route)[0]) }))
        .sort((a, b) => (new Date(a.date).getTime() - new Date(b.date).getTime()));
    })
  ) as Observable<Post[]>;
}
