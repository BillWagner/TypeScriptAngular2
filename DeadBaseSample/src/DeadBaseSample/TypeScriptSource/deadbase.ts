import { bootstrap, Component, FORM_DIRECTIVES, NgFor } from 'angular2/angular2';

class ConcertSet {
    date: string;
    venue: string;
    set: number;
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

@Component({
    selector: 'deadbase-app',
    template: `
        <h1>{{title}}</h1>
        <h2>My Tape List</h2>
        <ul class="concerts">
            <li *ng-for="#concert of concerts" (click)="onselect(concert)">
                <span class="badge">{{concert.date}}</span> {{concert.venue}} {{concert.set}}
            </li>
        </ul>
        <h2>{{selectedConcert.date}} -- {{selectedConcert.venue}} Details!</h2>
        <div><label>date: </label><input [(ng-model)]="selectedConcert.date" type="date"></div>
        <div><label>venue: </label><input [(ng-model)]="selectedConcert.venue" placeholder="venue"></div>
        <div><label>set: </label><input [(ng-model)]="selectedConcert.set" type="number"></div>
    `,
    directives: [FORM_DIRECTIVES, NgFor],
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
  `]
})
class DeadBaseAppComponent {
    public title = "Deadbase - Grateful Dead Concert Archive";

    public concerts = AllConcerts;

    public selectedConcert: ConcertSet;

    onselect(concert: ConcertSet) {
        this.selectedConcert = concert;
    }
}

bootstrap(DeadBaseAppComponent);


