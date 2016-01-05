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

var AllConcerts: ConcertSet[] = [
    { date: "1971-07-02", venue: "Filmore West", set: 1 },
    { date: "1971-07-02", venue: "Filmore West", set: 2 },
    { date: "1971-12-14", venue: "Hill Auditorium", set: 1 },
    { date: "1971-12-14", venue: "Hill Auditorium", set: 2 },
    { date: "1978-12-31", venue: "The Winterland Auditorium", set: 1 },
    { date: "1978-12-31", venue: "The Winterland Auditorium", set: 2 },
    { date: "1978-12-31", venue: "The Winterland Auditorium", set: 3 },
    { date: "1989-04-05", venue: "Crisler Arena", set: 1 },
    { date: "1989-04-05", venue: "Crisler Arena", set: 2 },
    { date: "1989-04-06", venue: "Crisler Arena", set: 1 },
    { date: "1989-04-06", venue: "Crisler Arena", set: 2 },
    { date: "1991-06-19", venue: "Pine Knob", set: 1 },
    { date: "1991-06-19", venue: "Pine Knob", set: 2 },
    { date: "1991-06-20", venue: "Pine Knob", set: 1 },
    { date: "1991-06-20", venue: "Pine Knob", set: 2 },
    { date: "1994-07-31", venue: "Palace of Auburn Hills", set: 1 },
    { date: "1994-07-31", venue: "Palace of Auburn Hills", set: 2 },
    { date: "1994-08-01", venue: "Palace of Auburn Hills", set: 1 },
    { date: "1994-08-01", venue: "Palace of Auburn Hills", set: 2 }
];



