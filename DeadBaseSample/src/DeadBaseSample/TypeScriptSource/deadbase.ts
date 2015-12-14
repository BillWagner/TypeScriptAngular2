import { bootstrap, Component, FORM_DIRECTIVES } from 'angular2/angular2';

class ConcertSet {
    date: string;
    venue: string;
    set: number;
}


@Component({
    selector: 'deadbase-app',
    template: `
        <h1>{{title}}</h1>
        <h2>{{concert.date}} -- {{concert.venue}} Details!</h2>
        <div><label>date: </label><input [(ng-model)]="concert.date" type="date"></div>
        <div><label>venue: </label><input [(ng-model)]="concert.venue" placeholder="venue"></div>
        <div><label>set: </label><input [(ng-model)]="concert.set" type="number"></div>
    `,
    directives: [FORM_DIRECTIVES]
})
class DeadBaseAppComponent {
    public title = "Deadbase - Grateful Dead Concert Archive";
    public concert: ConcertSet = {
        date: "1971-07-02",
        venue: "Filmore West",
        set: 2
    }
}

bootstrap(DeadBaseAppComponent);


