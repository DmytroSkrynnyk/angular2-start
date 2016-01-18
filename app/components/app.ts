import {Component, View} from 'angular2/core';
import {RouteConfig, ROUTER_DIRECTIVES } from 'angular2/router';

import {Greeter} from './greeter/greeter';
import {Home} from './home/home';

@Component({
    selector: 'app'
})

@View({
    template: `
        <h1>{{title}}</h1>
            <a [routerLink]="['Home']">Home</a>
            <a [routerLink]="['Greeter']">Greeter</a>
    `,
    styleUrls: ['app/components/app.css'],
    directives: [ROUTER_DIRECTIVES]
})

@RouteConfig([

    { path: "/home",
        name: "Home",
        component: Home ,
        useAsDefault: true},

    { path: "/greeter",
        name: "Greeter",
        component: Greeter }
])

export class App {
    public title = 'Title';
}