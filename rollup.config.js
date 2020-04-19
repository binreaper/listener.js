export default {
  input: 'lib/listener.js',
  output: [
  {
    file: 'lib/listner.cjs.js',
    format: 'cjs'
  },
  {
    file: 'lib/listner.browser.js',
    name: 'Listener',
    format: 'iife'
  },
  {
    file: 'lib/listner.es.js',
    format: 'es'
  }
  ]
};

