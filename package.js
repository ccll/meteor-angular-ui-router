Package.describe({
  summary: "angular-ui-router, the de-facto solution to flexible routing with nested views.",
  version: "0.4.0",
  git: "https://github.com/Urigo/meteor-angular-ui-router.git"
});

function packageExists(pkgname) {
    var fs = Npm.require('fs');
    var path = Npm.require('path');
    var pkgpath = path.join('packages', pkgname);
    return fs.existsSync(pkgpath);
}

Package.on_use(function(api) {
  api.versionsFrom('METEOR@0.9.0.1');
  api.use('tinytest');

  //api.use('bower', 'client');
  api.use('templating', 'client');

  api.export('UiRouter', 'client');

  api.use('urigo:ngmeteor@0.2.0', 'client');


  api.addFiles('angular-ui-router.min.js', 'client');
  // Install bower components.
  api.addFiles('smart.json', 'client');

  // Client files.
  api.addFiles('init.js', 'client');
});

Package.onTest(function(api) {
  api.use('tinytest');
  api.addFiles('urigo:angular-ui-router-tests.js');
});
