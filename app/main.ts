import {Component, provide} from 'angular2/core';
import {bootstrap}    from 'angular2/platform/browser';
import {AppComponent} from './app.component';
import {UserService} from './services/user.service';
import {EarthquakeFinder} from './services/earthquake-service';
import {CheckoutNotificatorService} from './services/checkout-notificator.service';
import {HTTP_PROVIDERS} from 'angular2/http';

//import {RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS} from 'angular2/router';
import {RouteConfig,  ROUTER_DIRECTIVES, ROUTER_PROVIDERS,APP_BASE_HREF,
        LocationStrategy, HashLocationStrategy} from 'angular2/router';

class MainComponent{}

bootstrap(AppComponent,
[UserService, CheckoutNotificatorService,EarthquakeFinder,ROUTER_PROVIDERS,
   HTTP_PROVIDERS, provide(LocationStrategy,{useClass: HashLocationStrategy})])
.catch(err => console.error(err));
