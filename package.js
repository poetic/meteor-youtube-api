Package.describe({
  name: 'yang2007chun:youtube-api',
  version: '0.0.1',
  // Brief, one-line summary of the package.
  summary: 'wrapper for youtube api',
  // URL to the Git repository containing the source code for this package.
  git: 'https://github.com/poetic/meteor-youtube-api',
  // By default, Meteor will default to using README.md for documentation.
  // To avoid submitting documentation, set this field to null.
  documentation: 'README.md'
});

Npm.depends({"youtube-api": "0.3.2"})

Package.onUse(function(api) {
  api.versionsFrom('1.1.0.2');
  api.addFiles('youtube-api.js', 'server');
  api.export('Youtube', 'server')
});
