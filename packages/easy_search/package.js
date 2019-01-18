Package.describe({
  name: 'edushareontario:easysearch-search',
  summary: "Easy-to-use search with Blaze Components (+ Elastic Search Support), w/Coffeescript2 dependencies!",
  version: "2.1.2",
  git: "https://github.com/EduShareOntario/meteor-easy-search.git",
  documentation: "../../README.md"
});

Package.onUse(function(api) {
  api.versionsFrom('METEOR@1.4.4.5');

  api.use(['edushareontario:easysearch-core@2.1.1', 'edushareontario:easysearch-components@2.1.2']);

  api.export('EasySearch');
});
