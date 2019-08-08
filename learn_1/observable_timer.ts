import { timer } from "rxjs"
import { map, reduce, take } from "rxjs/operators"

const source = timer(5000, 1000);
source.subscribe(val => console.log(val))