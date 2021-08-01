import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { searchMockup } from 'src/app/mockup/search-mock';
import { jobTypeLUTMockup } from 'src/app/mockup/job-type-mock';
import { levelLUTMockup } from 'src/app/mockup/level-mock';
import { jobFunctionLUTMockup } from 'src/app/mockup/job-function-mock';

export interface SearchModel {
  q?: string;
  type?: any;
  level?: any;
  func?: any;
  page?: number;
}
@Injectable({
  providedIn: 'root',
})
export class SearchService {
  cacheResponse: any = searchMockup;
  constructor(private http: HttpClient) {}

  public getJobTypes(): Observable<any> {
    return of(jobTypeLUTMockup);
  }

  public getLevels(): Observable<any> {
    return of(levelLUTMockup);
  }

  public getFunctions(): Observable<any> {
    return of(jobFunctionLUTMockup);
  }

  public getSearch(query: SearchModel = { q: '', page: 1 }): Observable<any> {
    const url = `https://jobs-api.blognone.com/search?q=${query.q}&page=${query.page}`;
    if (this.cacheResponse[url]) {
      return of(this.cacheResponse[url]);
    }

    return this.http.get('https://jobs-api.blognone.com/search', {
      params: { ...query },
    });
  }
}
