import { Component } from 'angular2/core';
import { ConcertSet } from './concertset';

import { AllConcerts } from './mock-concerts';

@Component({
    selector: 'deadbase-app',
    template: `
        <h1>{{title}}</h1>
        <h2>My Tape List</h2>
        <ul class="concerts">
            <li *ngFor="#concert of concerts"
                (click)="onselect(concert)">
                <span class="badge">{{concert.date}}</span> {{concert.venue}} {{concert.set}}
            </li>
        </ul>
        <div *ngIf="selectedConcert">
            <h2>{{selectedConcert.date}} -- {{selectedConcert.venue}} Details!</h2>
            <div><label>date: </label><input [(ngModel)]="selectedConcert.date" type="date"></div>
            <div><label>venue: </label><input [(ngModel)]="selectedConcert.venue" placeholder="venue"></div>
            <div><label>set: </label><input [(ngModel)]="selectedConcert.set" type="number"></div>
        </div>
    `,
    styles: [`
      .concerts {list-style-type: none; margin-left: 1em; padding: 0; width: 30em;}
      .concerts li { cursor: pointer; position: relative; left: 0; transition: all 0.2s ease; }
      .concerts li:hover {color: #369; background-color: #EEE; left: .2em;}
      .concerts .badge {
        font-size: small;
        color: white;
        padding: 0.1em 0.7em;
        background-color: #369;
        line-height: 1em;
        position: relative;
        left: -1px;
        top: -1px;
      }
      .selected { background-color: #EEE; color: #369; }
  `],

})
export class DeadBaseAppComponent {
    public title = "Deadbase - Grateful Dead Concert Archive";

    public concerts = AllConcerts;

    public selectedConcert: ConcertSet;

    onselect(concert: ConcertSet) {
        this.selectedConcert = concert;
    }}
