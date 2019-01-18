Package.describe({
  name: 'edushareontario:easysearch-autosuggest',
  summary: "Selectize Autosuggest Component for EasySearch, with Coffeescript2 compatible dependencies!",
  version: "2.1.1",
  git: "https://github.com/EduShareOntario/meteor-easy-search.git",
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom('METEOR@1.4.4.5');

  // Dependencies
  api.use(['check', 'ecmascript', 'templating@1.2.15', 'blaze@2.2.0']);
  api.use(['edushareontario:easysearch-core@2.1.1', 'edushareontario:easysearch-components@2.1.1', 'jeremy:selectize@0.12.1_4']);

  api.use(['erasaur:meteor-lodash@4.0.0'], { weak: true });

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
