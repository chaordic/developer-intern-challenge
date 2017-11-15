import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ApiRequestService } from '../../services/api-request.service';
import { HttpErrorResponse } from '@angular/common/http';
import { HitsChangeService } from '../../services/hits-change.service';

@Component({
  selector: 'app-total',
  templateUrl: './total.component.html',
  styleUrls: ['./total.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class TotalComponent implements OnInit {

  hits: number;

  constructor(private apiRequest: ApiRequestService, private hitsChangeService: HitsChangeService) {
  }

  ngOnInit() {
    this.hits = 0;
    this.getTotalHits();
  }

  getTotalHits() {
    this.apiRequest.getTotalHits().subscribe(
      (response: TotalHitsResponse) => {
        if (this.hits !== response.hits) {
          this.hitsChangeService.changesSubject.next(true);
        }
        this.hits = response.hits;
      },
      (error: HttpErrorResponse) => {
        console.log(error);
      }
    );
    setTimeout(() => {
      this.getTotalHits();
    }, 1000);
  }

}

interface TotalHitsResponse {
  hits: number;
}
