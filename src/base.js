/* handy.js */
define(function (require, exports, module) {
  "use strict";
  var $ = require('$'), Base = require('base');

  var HandyBase = Base.extend({
    initialize: function (config, parent, root) {
      HandyBase.superclass.initialize.call(this, config);
      this.parent = parent;
      this.root = root || (parent && parent.root) || parent;
      this.setup();
    },
    setup: $.noop
  });

  return HandyBase;
});