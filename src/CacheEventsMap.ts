/**
 * Cache events map.
 * @example
 * class MyCache extends EventEmitter<CacheEventsMap<{name: string}>> {}
 * @template Payload - The type of the cached value
 * @template Key - Optional type of the cache key (default is string)
 * @since v0.0.7
 */
export type CacheEventsMap<Payload, Key = string> = {
	get: [key: Key];
	set: [key: Key, payload: Payload, expires: Date | undefined];
	delete: [key: Key];
	has: [key: Key];
	expires: [key: Key, payload: Payload];
	clear: [Map<Key, Payload>];
};
