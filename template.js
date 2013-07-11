'use strict';

// Basic template description.
exports.description = 'Create an Angular application.';

// Template-specific notes to be displayed before question prompts.
exports.notes = '';

// The actual init template.
exports.template = function(grunt, init, done) {
  var files = [
    '.gitignore',
    'Gruntfile.js',
    'package.json',
    'public/index.html',
    'public/js/lib/angular.js',
    'public/js/app.js'
  ];

  files.forEach(init.copy);
};
