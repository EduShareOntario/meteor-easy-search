Easy Search Core
=====================

The core package allows you to search indexes with configured engines through the Javascript API. The `easy:search` package wraps this package together with `edushareontario:easysearch-components` for convenience. 

```javascript
// On Client and Server
let Players = new Meteor.Collection('players'),
  PlayersIndex = new EasySearch.Index({
    collection: Players,
    fields: ['name'],
    engine: new EasySearch.MongoDB()
  });

Tracker.autorun(() => {
  let cursor = PlayersIndex.search('Peter');
  
  console.log(cursor.fetch()); // logs the documents
  console.log(cursor.count()); // logs the count of all matched documents
});
```

## How to install

```sh
cd /path/to/project
meteor add edushareontario:easysearch-core
```

NB: This package will use the `erasaur:meteor-lodash` package if it is already installed in your application, else it will fallback to the standard Meteor `underscore` package.
