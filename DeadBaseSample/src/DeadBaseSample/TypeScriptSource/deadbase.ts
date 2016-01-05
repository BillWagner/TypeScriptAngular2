import { Component } from 'angular2/core';
import { bootstrap } from 'angular2/platform/browser';

@Component({
    selector: 'deadbase-app',
    template: '<h1>This is loaded from TypeScript</h1>'
})
class DeadBaseAppComponent {
}

bootstrap(DeadBaseAppComponent);


