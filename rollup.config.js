export default {
  input: 'lib/listener.js',
  output: [
  {
    file: 'lib/listener.cjs.js',
    format: 'cjs'
  },
  {
    file: 'lib/listener.global.js',
    name: 'Listener',
    format: 'umd'
  },
  {
    file: 'lib/listener.es.js',
    format: 'es'
  }
  ]
};

