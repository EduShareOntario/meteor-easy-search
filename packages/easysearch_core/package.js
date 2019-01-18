Package.describe({
  name: 'edushareontario:easysearch-core',
  summary: "Javascript Core for EasySearch, with Coffeescript2 compatible dependencies!",
  version: "2.1.1",
  git: "https://github.com/EduShareOntario/meteor-easy-search.git",
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom('METEOR@1.4.4.5');

  // Dependencies
  api.use(['check', 'ecmascript', 'mongo', 'underscore']);
  api.use(['erasaur:meteor-lodash@4.0.0'], { weak: true });

  // Core packages
  api.addFiles([
    'lib/core/index.js',
    'lib/core/engine.js',
    'lib/core/reactive-engine.js',
    'lib/core/cursor.js',
    'lib/core/search-collection.js'
  ]);

  // Engines
  api.addFiles([
    'lib/engines/mongo-db.js',
    'lib/engines/minimongo.js',
    'lib/engines/mongo-text-index.js'
  ]);

  // Global
  api.addFiles(['lib/globals.js']);

  api.export('EasySearch');
});

Package.onTest(function(api) {
  api.use(['tinytest', 'mongo', 'tracker', 'ecmascript', 'audit-argument-checks', 'underscore']);
  api.use('edushareontario:easysearch-core');

  // Test Helpers
  api.addFiles(['tests/helpers.js']);

  // Unit tests
  api.addFiles([
    'tests/unit/core/cursor-tests.js',
    'tests/unit/core/engine-tests.js',
    'tests/unit/core/reactive-engine-tests.js',
    'tests/unit/core/index-tests.js'
  ]);

  // Functional tests
  api.addFiles([
    'tests/functional/mongo-db-tests.js',
    'tests/functional/mongo-text-index-tests.js',
    'tests/functional/minimongo-tests.js'
  ]);
});
