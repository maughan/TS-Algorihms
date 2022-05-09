# TS-Algorihms
Useful algorithms, generically typed with TS


### binary search
O(log n)

```js
function binarySearch<T>(list: T[], target: T): number {
  let first = 0
  let last = list.length - 1

  while (first <= last) {
    let mid = Math.floor(first + last) / 2

    if (list[mid] === target) return mid

    if (list[mid] < target) first += 1
    else last -= 1
  }

  return -1
}
```
