define([
  'joshlib!utils/woodman',
  'joshlib!utils/dollar',
  'joshlib!vendor/underscore',
  'joshlib!vendor/backbone',

  'joshlib!ui/layout',

  'views/homepage/displayer/MenuDisplayView',
  'views/homepage/displayer/DisplayPanel',

  'text!templates/homepage/displayer/DisplayerLayout.html'
], function(
  woodman,
  $,
  _,
  Backbone,

  Layout,

  MenuDisplay,
  DisplayPanel,

  DisplayerTemplate
) {
  var logger = woodman.getLogger('views.DisplayerView');
  var DisplayerView = Layout.extend({

    initialize: function(options) {
      logger.info('initialize DisplayerView');
      var options = options || {};
      options.template = DisplayerTemplate;

      this.menuDisplay = new MenuDisplay({
        appController: options.appController,
        model: new Backbone.Model()
      });

      this.panelDisplay = new DisplayPanel({
        appController: options.appController
      });

      options.children = {
        menuDisplay: this.menuDisplay,
        panelDisplay: this.panelDisplay
      };

      Layout.prototype.initialize.call(this,options);
    },
  });

  return DisplayerView;
});