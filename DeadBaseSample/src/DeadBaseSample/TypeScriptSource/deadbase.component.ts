import { Component } from 'angular2/core';
import { ConcertSet } from './concertset';

import { AllConcerts } from './mock-concerts';

@Component({
    selector: 'deadbase-app',
    template: `
        <h1>{{title}}</h1>
        <h2>My Tape List</h2>
        <ul class="concerts">
            <li *ngFor="#concert of concerts">
                <span class="badge">{{concert.date}}</span> {{concert.venue}} {{concert.set}}
            </li>
        </ul>
        <h2>{{concert.date}} -- {{concert.venue}} Details!</h2>
    `
})
export class DeadBaseAppComponent {
    public title = "Deadbase - Grateful Dead Concert Archive";
    public concerts = AllConcerts; 
    public concert: ConcertSet = {
        date: "1971-07-02",
        venue: "Filmore West",
        set: 2
    }
}


