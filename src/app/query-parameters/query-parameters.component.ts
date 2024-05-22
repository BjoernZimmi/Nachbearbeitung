import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable, switchMap } from 'rxjs';

@Component({
  selector: 'app-query-parameters',
  standalone: true,
  imports: [],
  templateUrl: './query-parameters.component.html'
})

export class QueryParametersComponent implements OnInit {

  heroes$: Observable<Hero[]> | undefined;
  selectedId: number | undefined;

  heroes: Hero[] = [{
    id: 1,
    name: "First Hero"
  }];

  constructor(private route: ActivatedRoute) {

  }

  ngOnInit() {
    // this.heroes$ = this.route.paramMap.pipe(
    //   switchMap(params => {
    //     this.selectedId = Number(params.get('id'));
    //     return this.service.getHeroes();
    //   })
    // );
  }

};

export interface Hero {
  id: number,
  name: string
};
