﻿import { Component } from 'angular2/core';
import { ConcertSet } from './concertset';


@Component({
    selector: 'deadbase-app',
    template: `
        <h1>{{title}}</h1>
        <h2>{{concert.date.toDateString()}} -- {{concert.venue}} Details!</h2>
        <div><label>date: </label>{{concert.date.toDateString()}}</div>
        <div><label>venue: </label>{{concert.venue}}</div>
        <div><label>set: </label>{{concert.set}}</div>
    `
})
export class DeadBaseAppComponent {
    public title = "Deadbase - Grateful Dead Concert Archive";
    public concert: ConcertSet = {
        date: new Date(1971, 7, 2),
        venue: "Filmore West",
        set: 2
    }
}


