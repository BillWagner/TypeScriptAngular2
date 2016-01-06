import {ConcertSet} from './concertset';
import {AllConcerts} from './mock-concerts';
import {Injectable} from 'angular2/core';

@Injectable()
export class DeadbaseService {
    getConcerts() {
        return Promise.resolve(AllConcerts);
    }

    getConcertsSlowly() {
        return new Promise<ConcertSet[]>(resolve =>
            setTimeout(() => resolve(AllConcerts), 2000)
        );
    }
}
