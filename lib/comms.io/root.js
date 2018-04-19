this.Root = Class({

  /**
   * Initialization function
   * Root object lies dormant if uncleared for transmissions
   */

  init: function (receiver, req, res) {
    this.receiver = reciever;
    this.subscribed = false;
    this.cleared = false;
    this.subscribtions = 0;
    this._onSubscribe(req, res);
  },

  /**
   *
   */
  transmit: function () {
  },

  /**
   *
   */
  close: function () {
  },

  /**
   *
   */
  _onData: function (data) {
    let d = JSON.parse(data);
  },

  /**
   *
   */
  _onSubscribe: function (req, res) {

  },

  /**
   *  Queue state objects to prepare for sending to any available nodes
   */
  _queueState: function (state) {
    if (!(_recordQueue in this)) _recordQueue = [];
    this._recordQueue.push(state);
    return this;
  },

  /**
   * Generate unique episodic constant to record the instant this root comes online
   */
  _generateEpisodicId: function () {

  },


});