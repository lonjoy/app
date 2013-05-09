/* base.js */
define("handy/app/1.0.0/base-debug", [ "$-debug", "arale/base/1.0.1/base-debug", "arale/class/1.0.0/class-debug", "arale/events/1.0.0/events-debug" ], function(require, exports, module) {
    "use strict";
    var $ = require("$-debug"), Base = require("arale/base/1.0.1/base-debug");
    var HandyBase = Base.extend({
        initialize: function(config, parent, root) {
            HandyBase.superclass.initialize.call(this, config);
            this.parent = parent;
            this.root = root || parent && parent.root || parent;
            this.setup();
        },
        setup: $.noop
    });
    return HandyBase;
});