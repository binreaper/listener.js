var Listener = (function () {
  'use strict';

  function Listener(){ }


  Listener.prototype = {
    channels: [],
    shout(channelName, message) {
      const channel = this._findChannel(channelName);
      if (channel) {
        channel.listeners.forEach(listenerInstance => {
          listenerInstance(message);
        });
      } else {
        this._addChannel(channelName);
      }
    },
    listen(channelName, cb) {
      let channel = this._findChannel(channelName);
      if (!channel) {
        channel = this._addChannel(channelName);
      }
      channel.listeners.push(cb);
    },
    _findChannel(name) {
      return this.channels.find(item => item.name === name);
    },
    _addChannel(name) {
      this.channels.push({
        name,
        listeners: []
      });
      return this._findChannel(name);
    }
  };

  return Listener;

}());
