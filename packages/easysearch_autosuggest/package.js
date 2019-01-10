Package.describe({
  name: 'edushareontario:easysearch-autosuggest',
  summary: "Selectize Autosuggest Component for EasySearch with open ended dependencies!",
  version: "2.1.0",
  git: "https://github.com/EduShareOntario/meteor-easy-search.git",
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom('1.2.0.1');

  // Dependencies
  api.use(['check', 'ecmascript', 'templating', 'blaze']);
  api.use(['edushareontario:easysearch-core', 'jeremy:selectize']);

  api.use(['erasaur:meteor-lodash'], { weak: true });

  api.addFiles([
    'lib/autosuggest.html',
    'lib/autosuggest.js'
  ], 'client');
});

Package.onTest(function(api) {
  api.use(['tinytest', 'ecmascript', 'templating']);
  api.use('edushareontario:easysearch-autosuggest');

  api.addFiles(['tests/autosuggest-tests.js'], 'client');
});
