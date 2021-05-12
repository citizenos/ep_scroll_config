'use strict';
const settings = require('ep_etherpad-lite/node/utils/Settings');

exports.clientVars = (hookName, context, callback) => {
  if (settings.ep_scroll_config) {
    return callback({'ep_scroll_config': settings.ep_scroll_config.disableEvents || []});
  }

  return callback();
};
