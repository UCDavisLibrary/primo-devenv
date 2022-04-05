const config = require('../config.js');
let buildParams = config.buildParams;

let config = require('@ucd-lib/cork-app-build').watch({
    // root directory, all paths below will be relative to root
    root : buildParams.viewRootDir(),
    // path to your entry .js file
    entry : buildParams.mainJsPath(),
    // folder where bundle.js will be written
    preview : buildParams.viewJsDir(),
    // path your client (most likely installed via yarn) node_modules folder.
    // Due to the flat:true flag of yarn, it's normally best to separate 
    // client code/libraries from all other modules (ex: build tools such as this).
    // will take an array of relative paths as well
    clientModules : buildParams.viewJsDir()+'/node_modules'
});

  // optionaly you can run:
  // require('@ucd-lib/cork-app-build').watch(config, true)
  // Adding the second flag will generate a ie build as well as a modern
  // build when in development.  Note this slows down the build process.
  
  module.exports = config;