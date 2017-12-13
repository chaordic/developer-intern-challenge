import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { UrlInterface } from '../../interfaces/url.interface';
import { ApiRequestService } from '../../services/api-request.service';
import { PaginatedResponse } from '../../interfaces/paginated-response.interface';
import { HitsChangeService } from '../../services/hits-change.service';

@Component({
  selector: 'app-top',
  templateUrl: './top.component.html',
  styleUrls: ['./top.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class TopComponent implements OnInit {

  top5: UrlInterface[];

  constructor(private apiRequest: ApiRequestService, private hitsChangeService: HitsChangeService) {
  }

  ngOnInit() {
    this.getTop5();
    this.hitsChangeService.changesSubject.subscribe(
      () => {
        this.getTop5();
      }
    );
  }

  getTop5() {
    this.apiRequest.getTop5().subscribe(
      (response: PaginatedResponse) => {
        this.top5 = response.data;
      },
      (error) => {
        console.log(error);
      }
    );
  }

}
