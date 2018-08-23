'use strict';

var _path    = require( 'path' );
var _resolve = _path.resolve;
var _sep     = _path.sep;

/**
 * Safe resolves path with folder scope.
 * @param {string} folder
 * @param {string} path
 * @returns {string?} `null` when `path` is out of `folder`.
 * @example
 * resolve( 'xyz', '../server.js' );      // -> null
 * resolve( 'xyz', './abc/index.js' );    // -> '/path/to/xyz/abc/index.js'
 * resolve( 'xyz', './abc/../index.js' ); // -> '/path/to/xyz/index.js'
 */
function resolve ( folder, path ) {
  var elements = path.split( _sep );
  var result   = [];
  var element, i, l;

  for ( i = 0, l = elements.length; i < l; ++i ) {
    element = elements[ i ];

    if ( element === '..' ) {
      if ( ! result.length ) {
        return null;
      }

      result.pop();
    } else if ( element !== '.' && element !== '' ) {
      result.push( element );
    }
  }

  return _resolve( folder, result.join( _sep ) );
}

module.exports = resolve;
