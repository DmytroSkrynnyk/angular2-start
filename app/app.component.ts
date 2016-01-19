import {Component}                      from 'angular2/core';
import {RouteConfig, ROUTER_DIRECTIVES} from 'angular2/router';
import {GreeterComponent}               from './components/greeter/greeter.component';
import {HomeComponent}                  from './components/home/home.component';

@Component({
    selector: 'my-app',
    templateUrl: 'app/app.component.html',
    styleUrls: ['app/app.component.css'],
    directives: [ROUTER_DIRECTIVES]
})

@RouteConfig([
    {path:'/home', name: 'Home', component: HomeComponent},
    {path:'/greeter', name: 'Greeter', component: GreeterComponent}
])

export class AppComponent { }