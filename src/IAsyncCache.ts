/**
 * Asynchronous cache interface
 * @template Payload - The type of the cached value
 * @template Key - Optional type of the cache key (default is string)
 * @version 0.0.1
 * @example
 * function foo(cache: IAsyncCache<string>) {
 *   const value = await cache.get('key');
 *   await cache.set('key', 'value');
 *   await cache.has('key'); // true
 *   await cache.delete('key');
 *   await cache.clear();
 *   await cache.size(); // 0
 * }
 */
export interface IAsyncCache<Payload, Key = string> {
	/**
	 * Gets a value from the cache
	 * @param key - The key to get the value for
	 * @returns {Payload | undefined | Promise<Payload | undefined>} Promise of the cached value or undefined if not found
	 */
	get(key: Key): Payload | undefined | Promise<Payload | undefined>;
	/**
	 * Sets a value in the cache with an optional expiration date
	 * @param key - The key to set the value for
	 * @param value - The value to set in the cache
	 * @param expires - The optional expiration date for the cache entry
	 * @returns {void | Promise<void>} Promise of void
	 */
	set(key: Key, value: Payload, expires?: Date): void | Promise<void>;
	/**
	 * Deletes a value from the cache
	 * @param key - The key to delete the value for
	 * @returns {boolean | Promise<boolean>} Promise of true if the value was deleted, false otherwise
	 */
	delete(key: Key): boolean | Promise<boolean>;
	/**
	 * Checks if a key exists in the cache
	 * @param key - The key to check for
	 * @returns {boolean | Promise<boolean>} Promise of true if the key exists in the cache, false otherwise
	 */
	has(key: Key): boolean | Promise<boolean>;
	/**
	 * Get key expiration Date object or undefined if not found in cache
	 * @param key - The key to get the expiration for
	 * @returns {Promise<Date | undefined>} Promise of Date object or undefined if not found in cache
	 */
	expires(key: Key): Date | undefined | Promise<Date | undefined>;
	/**
	 * Clear all cached values
	 */
	clear(): void | Promise<void>;
	/**
	 * Gets the number of items in the cache
	 * @returns {Promise<number>} Promise of the number of items in the cache
	 */
	size(): number | Promise<number>;

	/**
	 * Returns an async iterator of key and value pairs for every entry in the cache.
	 * @example
	 * for await (const [key, value] of cache.entries()) {
	 *   console.log(key, value);
	 * }
	 */
	entries(): IterableIterator<[Key, Payload]> | AsyncIterableIterator<[Key, Payload]>;

	/**
	 * Async iterator for cache keys
	 * @example
	 * for await (const key of cache.keys()) {
	 *   console.log(key);
	 * }
	 */
	keys(): IterableIterator<Key> | AsyncIterableIterator<Key>;

	/**
	 * Async iterator for cache values
	 * @example
	 * for await (const value of cache.values()) {
	 *   console.log(value);
	 * }
	 */
	values(): IterableIterator<Payload> | AsyncIterableIterator<Payload>;
}
