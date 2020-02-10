import { Injectable } from '@angular/core';
import { ScullyRoute, ScullyRoutesService } from '@scullyio/ng-lib';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { Post } from './../models/post.interface';

const dateRegex = /(\d\d?-\d\d?-\d\d\d\d)/;

@Injectable()
export class Posts {
  constructor(private _scullyRoutes: ScullyRoutesService) {}

  /**
   * Taking the flat array of articles [{}, {}, {}...]
   * and turning it into an array of pairs of articles [[{}, {}], [{}, {}], [{}, {}]...]
   * This makes it simpler to create the grid
   */

  posts$ = this._scullyRoutes.available$.pipe(
    map(routeList => {
      return routeList
        .filter((route: ScullyRoute) => route.route.startsWith(`/post/`))
        .map((e, idx) => ({ ...e, number: routeList.length - idx }))
        .reduce((result, value, index, array) => {
          if (index % 2 === 0) {
            result.push(array.slice(index, index + 2));
          }
          return result;
        }, []);
    })
  ) as Observable<Post[]>;
}
