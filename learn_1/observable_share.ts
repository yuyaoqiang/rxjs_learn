import { Observable, from, interval, merge, concat, timer } from "rxjs"
import { map, reduce, take, share, tap, mapTo } from "rxjs/operators"
const source = timer(1000);
const example = source.pipe(
    tap(() => console.log(`**** side effect ***`)),
    mapTo(`*** result ***`)
)

const sharedExample = example.pipe(share());
sharedExample.subscribe(val => console.log(val));
sharedExample.subscribe(val => console.log(val))