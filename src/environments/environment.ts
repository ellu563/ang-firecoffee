// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  // tässä laitetaan alla yhteys firebase nosql kantaan
  firebaseConfig: {
    apiKey: 'AIzaSyAI01vdmh4vl1vbXec1ijtXUP3QYTiO_wM',
    authDomain: 'ang-firecoffee-elina.firebaseapp.com',
    projectId: 'ang-firecoffee-elina',
    storageBucket: 'ang-firecoffee-elina.appspot.com',
    messagingSenderId: '891493515859',
    appId: '1:891493515859:web:2fd7cb82eb62dd18a63ca6',
    measurementId: 'G-NGTHQ19F49',
  },
  // ei tuotantotilassa vaan kehitys tilassa
  production: false,
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
