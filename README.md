# The Singleton Pattern

[http://en.wikipedia.org/wiki/Singleton_pattern](http://en.wikipedia.org/wiki/Singleton_pattern)

## The singleton pattern is a design pattern that is used to restrict
## instantiation of a class to one object.

This implementation differs from Gavins in that the user never has to initialize
it, and instead only needs to ask for it. All initialization occurs internally
in the lazy-load fashion: the first time it is requested it is internally
initialized - thereafter the original instance is always returned.