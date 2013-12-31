Package.describe({
    summary: "angular-ui-router, the de-facto solution to flexible routing with nested views."
});

Package.on_use(function(api) {
    api.use('ngMeteor', 'client');

    // ui-router files.
    api.add_files('lib/angular-ui-router.js', 'client');

    // Client files.
    api.add_files('init.js', 'client');
});
