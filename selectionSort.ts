function selectionSort<T>(list: T[]): T[] {
  const length = list.length
  const sorted: T[] = []

  for (let i = 0; i < length; i++) {
    sorted.push(list.splice(minIndex(list), 1)[0])
  }

  return sorted
}

function minIndex<T>(list: T[]): number {
  let index = 0

  for (let i = 0; i < list.length; i++) {
    if (list[i] < list[index]) {
      index = i
    }
  }

  return index
}