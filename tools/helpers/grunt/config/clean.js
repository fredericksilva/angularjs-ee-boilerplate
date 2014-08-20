module.exports = function(grunt) {

grunt.config('clean', {

  build: {
    options: { force: true },
    src: ['<%= project.paths.build %>/']
  },

  dist: {
    options: { force: true },
    src: ['<%= project.paths.dist %>/']
  },

  reports: {
    options: { force: true },
    src: ['<%= project.paths.reports %>/']
  }

});

};
