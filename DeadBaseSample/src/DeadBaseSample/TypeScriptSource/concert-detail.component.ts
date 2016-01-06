import { Component } from 'angular2/core';
import { ConcertSet } from './concertset';

@Component({
    selector: 'deadbase-concert',
    template: `
        <div *ngIf="concert">
            <h2>{{concert.date}} -- {{concert.venue}} Details!</h2>
            <div><label>date: </label><input [(ngModel)]="concert.date" type="date"></div>
            <div><label>venue: </label><input [(ngModel)]="concert.venue" placeholder="venue"></div>
            <div><label>set: </label><input [(ngModel)]="concert.set" type="number"></div>
        </div>
    `,
    inputs: [ "concert" ]
})
export class ConcertComponent {

    public concert: ConcertSet;
    
}
