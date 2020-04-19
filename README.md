# Listener.js

A tiny and 0 deps Pub/Sub library


## Why?

I rewrote this everytime I worked on a vanilla js project and thought I'd just put it as a repository and install the repository when ever needed.

## Usage

I'm not publishing this on NPM anytime soon so you can go ahead with the github package installation using the below command.

```
npm i binreaper/listener.js
```

and here's an example:

```js
const listener = new Listener();
  let count = 0;

  listener.listen('INC_COUNT',()=>{
    document.querySelector('#count').innerHTML = ++count;
  });

  listener.listen('DEC_COUNT',()=>{
    document.querySelector('#count').innerHTML = --count;
  });

  listener.shout('INC_COUNT');


  const incrementButton = document.querySelector('#inc-button')
  incrementButton.addEventListener('click',()=>{
    listener.shout('INC_COUNT',count);
  });

  const decrementButton = document.querySelector('#dec-button')
  decrementButton.addEventListener('click',()=>{
    listener.shout('DEC_COUNT',count);
  });
```

You can see the above example as a [demo](https://binreaper.github.io/listener.js)

## Future

There's nothing that I'd like to add to the lib as of now since the point of this was to be a really small utitlity with no external dependencies and is enough for most of my use cases. Still, feedback is always welcome.

