class CacheNode {
  key: string;
  value: string;
  next: CacheNode;
  prev: CacheNode;

  constructor(key: string, value: string) {
    this.key = key;
    this.value = value;
  }
}
