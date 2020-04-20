import { of, interval } from 'rxjs'; 
import { map, switchMap, filter, toArray } from 'rxjs/operators';
import { ajax } from 'rxjs/ajax';

of(1,3,5).pipe(
    switchMap(i => 
    of(i * 10, i * 10, i * 10)
  ),
  toArray()
).subscribe(console.log)