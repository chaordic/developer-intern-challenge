import { Injectable } from '@angular/core';
import { ApiPathsService } from './api-paths.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable()
export class ApiRequestService {

  constructor(private apiPaths: ApiPathsService, private http: HttpClient) {
  }

  getTop5() {
    return this.http.get(this.apiPaths.URLS);
  }

  getTotalHits() {
    return this.http.get(this.apiPaths.HITS);
  }

  postUrl(url: string) {
    const body = JSON.stringify({url: url});
    const headers = new HttpHeaders(
      {'Content-Type': 'application/json'});
    return this.http.post(
      this.apiPaths.URLS,
      body,
      {headers: headers});
  }

}
