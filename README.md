# The Singleton Pattern

[http://en.wikipedia.org/wiki/Singleton_pattern](http://en.wikipedia.org/wiki/Singleton_pattern)

## The singleton pattern is a design pattern that is used to restrict instantiation of a class to one object.

This implementation differs from Gavins in that the user never has to initialize
it, and instead only needs to ask for it. All initialization occurs internally
in the lazy-load fashion: the first time it is requested it is internally
initialized - thereafter the original instance is always returned. See line 49
of `singleton.js` for the lazy-load bit.

To view the demo, download the code and navigate to `demo.html` in your browser.

To view the code, click on that `singleton.js` file in the file list.

## The Original Implementation

Gavins original implementation is [here](http://github.com/dandean/singleton-demo-one/commit/2d088102d72a0b0ec6acb3c66909f62708b89ba6#diff-2):