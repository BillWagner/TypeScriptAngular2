import { bootstrap, Component } from 'angular2/angular2';

@Component({
    selector: 'deadbase-app',
    template: '<h1>{{title}}</h1><h2>{{venue}} Details!</h2>'
})
class DeadBaseAppComponent {
    public title = "Deadbase - Grateful Dead Concert Archive";
    public venue = "Filmore West";
}

bootstrap(DeadBaseAppComponent);


