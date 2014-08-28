Package.describe({
    summary: "angular-ui-router, the de-facto solution to flexible routing with nested views."
});

function packageExists(pkgname) {
    var fs = Npm.require('fs');
    var path = Npm.require('path');
    var pkgpath = path.join('packages', pkgname);
    return fs.existsSync(pkgpath);
}

Package.on_use(function(api) {
    api.use('bower', 'client');
    api.use('templating', 'client');

    api.export('UiRouter', 'client');

    api.use('urigo:ngmeteor', 'client');


    // Install bower components.
    api.add_files('smart.json', 'client');

    // Client files.
    api.add_files('init.js', 'client');
});
