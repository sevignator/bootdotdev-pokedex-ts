type CacheEntry<T> = {
  createdAt: number;
  val: T;
};

export class Cache {
  #cache = new Map<string, CacheEntry<any>>();
  #reapIntervalId: NodeJS.Timeout | undefined = undefined;
  #interval: number;

  constructor(interval: number) {
    this.#interval = interval;

    this.#startReapLoop();
  }

  add<T>(key: string, value: T) {
    this.#cache.set(key, {
      createdAt: Date.now(),
      val: value,
    });
  }

  get<T>(key: string): T | undefined {
    return this.#cache.get(key)?.val;
  }

  #reap() {
    for (const [key, value] of this.#cache.entries()) {
      if (Date.now() - this.#interval > value.createdAt) {
        this.#cache.delete(key);
      }
    }
  }

  #startReapLoop() {
    const intervalId = setInterval(() => {
      this.#reapIntervalId = intervalId;
      this.#reap();
    }, this.#interval);
  }

  stopReapLoop() {
    clearInterval(this.#reapIntervalId);
    this.#reapIntervalId = undefined;
  }
}
