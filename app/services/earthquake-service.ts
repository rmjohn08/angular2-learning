import {Injectable} from 'angular2/core';
import {Http,Response, URLSearchParams} from 'angular2/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/Rx';

@Injectable()
export class EarthquakeFinder {
  quakesUrl : string = "http://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/2.5_day.geojson";
  //" http://earthquake.usgs.gov/fdsnws/event/1/query";
  constructor (private http: Http) {}

  findEarthquakes(magnitude: string) {
    var params = new URLSearchParams();
    params.set('format','geojson');
    params.set('starttime','2016-03-01');
    params.set('endtime','2016-03-15');
    params.set('minmagnitude',magnitude);

    //getEarthquakes(): any {
    return this.http.get(this.quakesUrl)
          .map(this.extractData)
          .catch(this.handleError);
    }

    private extractData(res:Response) {
      if (res.status < 200 || res.status >= 300) {
        throw new Error('bad response status:'+res.status);
      }
      let body = res.json();
      return body.features || {};
    }

    private handleError(error: any) {
      let errMsg = error.message;
      console.error(errMsg);
      return Observable.throw(errMsg);
    }



}
