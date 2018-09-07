'use strict';

var resolve = require( '../' );

describe( 'resolve(folder: string, path: string)', () => {
  it( 'works', () => {
    resolve( 'static', '/index.js' ).should.match( /\/static\/index.js$/ );
  } );

  it( 'returns null when path is out of bounds', () => {
    should.equal( resolve( 'static', '/../index.js' ), null );
  } );
} );
