const configfile = require('./gulp/config.js');
let buildParams = configfile.buildParams;

let config = require('@ucd-lib/cork-app-build').dist({
    // root directory, all paths below will be relative to root
    root : "",
    // path to your entry .js file
    entry : buildParams.mainJsPath(),
    modern : 'custom.js',

    // folder where bundle.js and ie-bundle.js will be written
    dist : buildParams.viewJsDir(),
    // path your client (most likely installed via yarn) node_modules folder.
    // Due to the flat:true flag of yarn, it's normally best to separate 
    // client code/libraries from all other modules (ex: build tools such as this).
    // will take an array of relative paths as well
    clientModules : buildParams.customNpmModuleRootDir()
  });
  
  module.exports = config[0];