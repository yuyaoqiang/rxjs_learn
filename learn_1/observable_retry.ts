import { Observable, from, interval, merge, concat, throwError, of, } from "rxjs"
import { map, reduce, retry, mergeMap } from "rxjs/operators"

const source = interval(1000);
const example = source.pipe(
    mergeMap(val => {
        if (val > 5) {
            return throwError('error')
        }
        return of(val)
    }),
    retry(2)
)

const subscribe = example.subscribe({
    next: val => console.log(val),
    error: val => console.log(`${val}`)
})