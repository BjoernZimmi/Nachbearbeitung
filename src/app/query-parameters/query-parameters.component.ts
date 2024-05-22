import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-query-parameters',
  standalone: true,
  imports: [],
  templateUrl: './query-parameters.component.html'
})

export class QueryParametersComponent implements OnInit {

  selectedId: Number | undefined;
  loadId: Observable<Number> | undefined;
  loadSort: Observable<Number> | undefined;

  constructor(private route: ActivatedRoute) {

  }

  ngOnInit() {

    this.route.queryParams.subscribe(params => 
      this.loadId = params['id']
    )

    this.route.queryParams.subscribe(params => 
      this.loadSort = params['sort']
    )

    console.log(this.loadId);

    if (this.loadId) {
      this.selectedId = Number(this.loadId)
    }
    
  }

}
