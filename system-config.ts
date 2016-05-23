declare var System: any;

// Apply the CLI SystemJS configuration.
System.config({
  map: {
    '@angular': 'node_modules/@angular',
    'rxjs': 'node_modules/rxjs',
    'main': 'scripts/main.js'
  },
  packages: {
    '@angular/core': { main: 'index' },
    '@angular/common': { main: 'index' },
    '@angular/compiler': { main: 'index' },
    '@angular/platform-browser': { main: 'index' },
    '@angular/platform-browser-dynamic': { main: 'index' },

    // Thirdparty barrels.
    'rxjs': { main: 'Rx' },

    // App specific barrels.
    'components': { main: 'index' },
    'services': { main: 'index' },
  }
});
