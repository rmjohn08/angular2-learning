import {Component, OnInit} from 'angular2/core';
import {EarthquakeFinder} from '../services/earthquake-service';

@Component({
  selector:'earthquakes',
  templateUrl: 'app/earthquakes/earthquakes.html',
  providers: [EarthquakeFinder]
})
export class EarthquakeComponent implements OnInit {

  private earthquakes: any;
  private errorMessage : any;

  constructor(private _eqf : EarthquakeFinder) {

  }

  ngOnInit() {
    var mag : string = "5";
    this._eqf.findEarthquakes(mag)
        .subscribe(eqf => this.earthquakes = eqf,
        error => this.errorMessage = <any>error);

  }

}
