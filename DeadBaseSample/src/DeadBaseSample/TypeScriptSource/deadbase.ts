import { bootstrap, Component } from 'angular2/angular2';

@Component({
    selector: 'deadbase-app',
    template: '<h1>This is loaded from TypeScript</h1>'
})
class DeadBaseAppComponent {
}

bootstrap(DeadBaseAppComponent);


