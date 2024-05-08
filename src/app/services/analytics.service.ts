import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AnalyticsService {
  private apiAnalyticUrl = '/app/mock-api/dashboards/analytics/data.ts';
  private _data: BehaviorSubject<any> = new BehaviorSubject(null);

    /**
     * Constructor
     */
    // constructor(private _httpClient: HttpClient)
    // {
    // }

    // -----------------------------------------------------------------------------------------------------
    // @ Accessors
    // -----------------------------------------------------------------------------------------------------

    /**
     * Getter for data
     */
    get data$(): Observable<any>
    {
        return this._data.asObservable();
    }

    // -----------------------------------------------------------------------------------------------------
    // @ Public methods
    // -----------------------------------------------------------------------------------------------------

    /**
     * Get data
     */
    // getData(): Observable<any>
    // {
    //     return this._httpClient.get('api/dashboards/analytics').pipe(
    //         tap((response: any) => {
    //             this._data.next(response);
    //         })
    //     );
    // }

  //   getData(): Observable<any> {
  //     return this._httpClient.get<any>(this.apiAnalyticUrl); 
  // }
}
