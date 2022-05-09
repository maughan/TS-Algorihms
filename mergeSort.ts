function mergeSort<T>(list: T[]): T[] {
  if (list.length <= 1) return list

  const mid = Math.floor(list.length / 2)
  const left = mergeSort(list.slice(0, mid))
  const right = mergeSort(list.slice(mid))
  const sorted: T[] = []
  let left_index = 0
  let right_index = 0

  while (left_index < left.length && right_index < right.length) {
    if (left[left_index] < right[right_index]) {
      sorted.push(left[left_index])
      left_index += 1
    } else {
      sorted.push(right[right_index])
      right_index += 1
    }
  }

  sorted.push(...left.slice(left_index))
  sorted.push(...right.slice(right_index))

  return sorted
}