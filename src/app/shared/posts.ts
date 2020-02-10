import { Injectable } from '@angular/core';
import { ScullyRoute, ScullyRoutesService } from '@scullyio/ng-lib';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { Post } from './../models/post.interface';

const dateRegex = /(\d\d?-\d\d?-\d\d\d\d)/;

@Injectable()
export class Posts {
  constructor(private _scullyRoutes: ScullyRoutesService) {}

  episodes$ = this._scullyRoutes.available$.pipe(
    map(routeList => {
      routeList = routeList
        .filter(r => dateRegex.test(r.route))
        .sort((a, b) => {
          const adate = dateRegex.exec(a.route)[0];
          const bdate = dateRegex.exec(b.route)[0];
          return new Date(bdate).getTime() - new Date(adate).getTime();
        });
      return routeList.filter((route: ScullyRoute) => route.route.startsWith(`/post/`)).map((e, idx) => ({ ...e, number: routeList.length - idx }));
    })
  ) as Observable<Post[]>;
}
