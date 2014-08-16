
// Add module 'ui.router' as dependency.
Meteor.startup(function() {
    if (typeof(ngMeteor) !== 'undefined') {
        ngMeteor.requires.push('ui.router');
    }
});

// Exported.
UiRouter = {
    template: function(templName) {
        return function() {
            // test for pre 0.8.3
            if (Template[templName].render())
              return Template[templName].render().toHTML();
            else
              return Blaze.toHTML(Template[templName]);
        }
    }
}

