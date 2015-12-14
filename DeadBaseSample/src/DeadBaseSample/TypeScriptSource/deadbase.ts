import { bootstrap, Component } from 'angular2/angular2';

class ConcertSet {
    date: Date;
    venue: string;
    set: number;
}


@Component({
    selector: 'deadbase-app',
    template: `
        <h1>{{title}}</h1>
        <h2>{{concert.date.toDateString()}} -- {{concert.venue}} Details!</h2>
        <div><label>date: </label><input value="{{concert.date.toDateString()}}" type="date"></div>
        <div><label>venue: </label><input value="{{concert.venue}}" placeholder="venue"></div>
        <div><label>set: </label><input value="{{concert.set}}" type="number"></div>
    `
})
class DeadBaseAppComponent {
    public title = "Deadbase - Grateful Dead Concert Archive";
    public concert: ConcertSet = {
        date: new Date(1971, 7, 2),
        venue: "Filmore West",
        set: 2
    }
}

bootstrap(DeadBaseAppComponent);


