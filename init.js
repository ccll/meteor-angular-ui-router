
// Add module 'ui.router' as dependency.
Meteor.startup(function() {
    if (typeof(ngMeteor) !== 'undefined') {
        ngMeteor.requires.push('ui.router');
    }

});

