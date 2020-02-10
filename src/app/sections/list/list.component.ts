import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Article } from 'src/app/models/article.interface';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styles: []
})
export class ListComponent implements OnInit {
  articles$: Observable<Article[]>;

  constructor(private http: HttpClient) {}

  ngOnInit() {
    /**
     * Taking the flat array of articles [{}, {}, {}...]
     * and turning it into an array of pairs of articles [[{}, {}], [{}, {}], [{}, {}]...]
     * This makes it simpler to create the grid
     */
    this.articles$ = this.http.get('/assets/articles.json').pipe(
      map((articles: any[]) => {
        return articles.reduce((result, value, index, array) => {
          if (index % 2 === 0) {
            result.push(array.slice(index, index + 2));
          }
          return result;
        }, []) as Article[];
      })
    );
  }
}
