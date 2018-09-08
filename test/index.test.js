/* globals expect, describe, it */

'use strict';

var resolve = require( '../' );

describe( "require('resolve_path')", function () {
  it( 'works', function () {
    expect( resolve ).be.a( 'function' );
  } );
} );

describe( 'example', function () {
  it( 'works', function () {
    expect( resolve( 'xyz', '../server.js' ) ).equal( null );
    expect( resolve( 'xyz', './abc/index.js' ) ).match( /\/xyz\/abc\/index.js$/ );
    expect( resolve( 'xyz', './abc/../index.js' ) ).match( /\/xyz\/index.js$/ );
  } );
} );

describe( 'resolve(folder: string, path: string)', function () {
  it( 'works', function () {
    expect( resolve( 'static', '/index.js' ) ).match( /\/static\/index.js$/ );
  } );

  it( 'returns null when path is out of bounds', function () {
    expect( resolve( 'static', '/../index.js' ) ).equal( null );
  } );
} );
