import { Component } from 'angular2/core';
import { OnInit } from 'angular2/core';
import { ConcertSet } from './concertset';

import { DeadbaseService } from './deadbase-service';
import { ConcertComponent } from './concert-detail.component';

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
        <deadbase-concert [concert]="selectedConcert"></deadbase-concert>
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
    directives: [ConcertComponent],
    providers: [ DeadbaseService ]

})
export class DeadBaseAppComponent implements OnInit {
    constructor(private _deadbaseService: DeadbaseService) { }

    public title = "Deadbase - Grateful Dead Concert Archive";

    public concerts: ConcertSet[];

    public selectedConcert: ConcertSet;

    onselect(concert: ConcertSet) {
        this.selectedConcert = concert;
    }

    ngOnInit() {
        this._deadbaseService.getConcerts().then(c => this.concerts = c);
    }
}
