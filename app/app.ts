import {Component}                      from 'angular2/core';
import {RouteConfig, ROUTER_DIRECTIVES} from 'angular2/router';

import {HomeComponent}                  from './components/home/home.component';
import {GreeterComponent}               from './components/greeter/greeter.component';



@Component({
    selector: 'my-app',
    template: `
        <h1>Component Router</h1>
        <nav>
            <a [routerLink]="['Home']">Crisis Center</a>
            <a [routerLink]="['Greeter']">Heroes</a>
        </nav>
        <router-outlet></router-outlet>
    `,
    //styleUrls: ['app/app.css'],
    directives: [ROUTER_DIRECTIVES]
})

@RouteConfig([
    {path:'/home',      name: 'Home',       component: HomeComponent},
    {path:'/greeter',   name: 'Greeter',    component: GreeterComponent}
])

export class App { }
