/**
 * Cache events map.
 * @version 0.0.3
 * @example
 * class MyCache extends EventEmitter<CacheEventsMap<string>> {}
 */
export type CacheEventsMap<Payload, Key = string> = {
	get: [key: Key];
	set: [key: Key, payload: Payload, expires: Date | undefined];
	delete: [key: Key];
	has: [key: Key];
	expire: [key: Key, payload: Payload];
	clear: [];
};
