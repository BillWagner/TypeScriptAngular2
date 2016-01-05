import { Component } from 'angular2/core';
import { ConcertSet } from './concertset';

@Component({
    selector: 'deadbase-app',
    template: `
        <h1>{{title}}</h1>
        <h2>{{concert.date}} -- {{concert.venue}} Details!</h2>
        <div><label>date: </label><input [(ngModel)]="concert.date" type="date"></div>
        <div><label>venue: </label><input [(ngModel)]="concert.venue" placeholder="venue"></div>
        <div><label>set: </label><input [(ngModel)]="concert.set" type="number"></div>
    `
})
export class DeadBaseAppComponent {
    public title = "Deadbase - Grateful Dead Concert Archive";
    public concert: ConcertSet = {
        date: "1971-07-02",
        venue: "Filmore West",
        set: 2
    }
}


