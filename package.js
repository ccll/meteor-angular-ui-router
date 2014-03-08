Package.describe({
    summary: "angular-ui-router, the de-facto solution to flexible routing with nested views."
});

Package.on_use(function(api) {
    api.use('bower', 'client');

    api.use('angularite', 'client', {weak: true});
    api.use('ngMeteor', 'client', {weak: true});

    // Install bower components.
    api.add_files('smart.json', 'client');

    // Client files.
    api.add_files('init.js', 'client');
});
