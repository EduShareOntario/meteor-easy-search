Package.describe({
  name: 'easy:search',
  summary: "Easy-to-use search with Blaze Components (+ Elastic Search Support) with open ended dependencies!",
  version: "2.1.0",
  git: "https://github.com/EduShareOntario/meteor-easy-search.git",
  documentation: "../../README.md"
});

Package.onUse(function(api) {
  api.versionsFrom('1.2.0.1');

  api.use(['edushareontario:easysearch-core', 'edushareontario:easysearch-components']);

  api.export('EasySearch');
});
