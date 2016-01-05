import {  Component } from 'angular2/core';

@Component({
    selector: 'deadbase-app',
    template: '<h1>{{title}}</h1><h2>{{venue}} Details!</h2>'
})
export class DeadBaseAppComponent {
    public title = "Deadbase - Grateful Dead Concert Archive";
    public venue = "Filmore West";
}


