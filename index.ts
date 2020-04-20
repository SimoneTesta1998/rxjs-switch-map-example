import { of } from 'rxjs'; 
import { map, switchMap } from 'rxjs/operators';

of(1,3,5).pipe(
    switchMap(i => of(i * 10, i * 10, i * 10))
).subscribe(console.log)