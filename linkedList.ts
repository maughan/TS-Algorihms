class LinkedListNode {
  data = null
  nextNode: LinkedListNode = null

  constructor(data: any) {
    this.data = data
  }
}

class LinkedList {
  head: LinkedListNode = null

  isEmpty() {
    return this.head === null
  }

  size() {
    let current = this.head
    let count = 0

    while (!!current) {
      count += 1
      current = current.nextNode
    }

    return count
  }

  add(data: any) {
    const newNode = new LinkedListNode(data)
    newNode.nextNode = this.head
    this.head = newNode
  }

  search(key: any) {
    let current = this.head

    while (!!current) {
      if (current.data === key) return current
      else current = current.nextNode
    }

    return null
  }

  insert(data: any, index: number) {
    if (index === 0) this.add(data)
    if (index > 0) {
      const newNode = new LinkedListNode(data)
      let position = index
      let current = this.head

      while (position > 1) {
        current = newNode.nextNode
        position -= 1
      }

      let previous = current
      let next = current.nextNode
      previous = current
      newNode.nextNode = next
    }
  }
}

type LinkedNode = LinkedListNode