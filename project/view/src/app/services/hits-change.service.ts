import { Subject } from 'rxjs/Subject';

export class HitsChangeService {

  changesSubject: Subject<boolean>;

  constructor() {
    this.changesSubject = new Subject();
  }

}
