import { Observable, from, interval, merge, concat } from "rxjs"
import { map, reduce, take, share, mergeMap, switchMap } from "rxjs/operators"

/**
 * mergeMap
 */
// const observable = interval(1000).pipe(take(3));
// const observer = observable.pipe(
//     mergeMap(x => {
//         return interval(400).pipe(
//             take(5),
//             map(y => `outer ${x} :inner${y}`)
//         )
//     })
// )
// observer.subscribe(res => console.log(`reslut ${res}`))

/**
 * switchMap
 */
const outer = interval(1000).pipe(take(3));
const observer2 = outer.pipe(
    switchMap(x => {
        return interval(400).pipe(
            take(5),
            map(y => `outer ${x}: inner ${y}`)
        )
    })
)
observer2.subscribe(res => console.log(`result ${res}`))