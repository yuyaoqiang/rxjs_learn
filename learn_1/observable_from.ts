import { Observable, from, interval, merge, concat } from "rxjs"
import { map, reduce, take } from "rxjs/operators"
interface user {
    name: string,
    age: number,
    salary: number
}
let persons: user[] = [
    { name: 'Dave', age: 34, salary: 2000 },
    { name: 'Nick', age: 37, salary: 32000 },
    { name: 'Howie', age: 40, salary: 26000 },
    { name: 'Brian', age: 40, salary: 30000 },
    { name: 'Kevin', age: 47, salary: 24000 },
];

const observer = {
    next: value => console.log(`nexet: ` + value),
    err: err => console.log(`err: ` + err),
    complete: () => console.log(`complete `),
}
from(persons).pipe(
    map(p => p['salary']),
    reduce((total, current) => total + current, 0)
).subscribe(observer)
