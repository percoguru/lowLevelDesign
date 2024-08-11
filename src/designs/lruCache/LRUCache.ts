class LRUCahce {
  capacity: number;
  head: CacheNode;
  tail: CacheNode;
  nodeMap: Map<string, CacheNode>;
  size: number;

  constructor(capacity: number) {
    this.capacity = Math.floor(capacity);
    this.head = new CacheNode("head", Infinity.toString());
    this.tail = new CacheNode("tail", Infinity.toString());

    this.head.next = this.tail;
    this.tail.prev = this.head;
    this.size = 0;
  }

  private removeNode(node: CacheNode): CacheNode {
    const prev = node.prev;
    const next = node.next;

    prev.next = next;
    next.prev = prev;

    this.size--;
    this.nodeMap.delete(node.key);

    return node;
  }

  put(key: string, value: string) {
    let node: CacheNode;
    if (this.nodeMap.has(key)) {
      node = this.nodeMap.get(key)!;
      this.removeNode(node);
    } else {
      if (this.size === this.capacity) {
        node = this.removeNode(this.head.next);
      } else {
        node = new CacheNode(key, value);
      }
    }

    this.size++;
    const lastNode = this.tail.prev;
    node.value = value;
    node.key = key;
    lastNode.next = node;
    node.prev = lastNode;
    node.next = this.tail;
    this.tail.prev = node;
  }

  get(key: string) {
    if (this.nodeMap.has(key)) {
      this.put(key, this.nodeMap.get(key)!.value);
      return this.nodeMap.get(key)!.value;
    }

    return -1;
  }
}
