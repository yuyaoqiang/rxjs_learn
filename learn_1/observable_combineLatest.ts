import { Observable, from, interval, merge, concat, combineLatest } from "rxjs"
import { map, reduce, take, share, mergeMap, switchMap } from "rxjs/operators"

var source = interval(500).pipe(take(3));
var newest = interval(300).pipe(take(6));
var combin$ = combineLatest(source, newest);

combin$.subscribe(latestValues => {
    const [source, newest] = latestValues;
    console.log(
        `Timer One Latest: ${source},
       Timer Two Latest: ${newest},`
    );
})