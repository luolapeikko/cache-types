/**
 * Cache events map.
 * @since v0.0.6
 * @example
 * class MyCache extends EventEmitter<CacheEventsMap<string>> {}
 */
export type CacheEventsMap<Payload, Key = string> = {
	get: [key: Key];
	set: [key: Key, payload: Payload, expires: Date | undefined];
	delete: [key: Key];
	has: [key: Key];
	expires: [key: Key, payload: Payload];
	clear: [Map<string, Payload>];
};
