# @luolapeikko/cache-types

Typescript Cache interfaces.

Cache interface is a simple Map like key-value interface with basic operations like `get`, `set`, `has`, `delete` and `clear` with cache related options like "set" method to add entry ttl to the cache and "expires" method to get current entry ttl.

## Example

```typescript
import {type ICache} from '@luolapeikko/cache-types';

function foo(cache: ICache<string>) {
	const value = cache.get('key');
	cache.set('key', 'value' /*, ttl: Date */);
	cache.has('key'); // true
	cache.expires('key'); // Date or undefined
	cache.delete('key');
	cache.clear();
	cache.size(); // 0
}
```

## [Full Documentation](https://luolapeikko.github.io/cache-types/)

- [ICache](https://luolapeikko.github.io/cache-types/interfaces/ICache.html)
- [IAsyncCache](https://luolapeikko.github.io/cache-types/interfaces/IAsyncCache.html)
