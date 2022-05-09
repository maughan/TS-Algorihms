function quickSort<T>(list: T[]): T[] {
  if (list.length <= 1) return list

  const lessPivot: T[] = []
  const greaterPivot: T[] = []
  const pivot = list[0]

  for (let item of list.slice(1)) {
    if (item <= pivot) {
      lessPivot.push(item)
    } else {
      greaterPivot.push(item)
    }
  }

  return [...quickSort(lessPivot), pivot, ...quickSort(greaterPivot)]
}