import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})



export class HttpService {
  constructor(private _http: HttpClient) {
    this.getNames();
  }
  getNames() {
    // our http response is an Observable, store it in a variable
    const tempObservable = this._http.get('/names');
    // subscribe to the Observable and provide the code we would like to do with our data from the response
    tempObservable.subscribe(data => console.log('Got our names!', data));
  }
}


