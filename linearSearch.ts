function linearSearch<T>(list: T[], target: T): number {
  for (let i = 0; i < list.length; i++) {
    if (target === list[i]) return i
  }

  return -1
}