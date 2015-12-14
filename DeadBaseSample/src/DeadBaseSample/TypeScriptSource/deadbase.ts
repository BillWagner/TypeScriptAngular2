import { bootstrap, Component } from 'angular2/angular2';

class ConcertSet {
    date: Date;
    venue: string;
    set: number;
}


@Component({
    selector: 'deadbase-app',
    template: '<h1>{{title}}</h1><h2>{{concert.date}} -- {{concert.venue}} Details!</h2>'
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


