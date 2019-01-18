Package.describe({
  name: 'edushareontario:easysearch-elasticsearch',
  summary: "Elasticsearch Engine for EasySearch, with observing optimization ability.",
  version: "2.2.0",
  git: "https://github.com/EduShareOntario/meteor-easy-search.git",
  documentation: 'README.md'
});

Npm.depends({
  'elasticsearch': '15.3.0'
});

Package.onUse(function(api) {
  api.versionsFrom('METEOR@1.4.4.5');

  // Dependencies
  api.use(['check', 'ecmascript']);
  api.use(['edushareontario:easysearch-core@2.1.1', 'erasaur:meteor-lodash@4.0.0']);

  api.addFiles([
    'lib/data-syncer.js',
    'lib/engine.js'
  ]);

  api.export('EasySearch');
});

Package.onTest(function(api) {
  api.use(['tinytest', 'ecmascript']);
  api.use('edushareontario:easysearch-elasticsearch');

  api.addFiles(['tests/engine-tests.js']);
});
