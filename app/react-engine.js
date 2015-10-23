import { renderToStaticMarkup } from 'react-dom/server';
import React from 'react';

export default (filePath, options = {}, callback) => {
  try {
    // declarative es6 import disallows this :/
    const Component = require(filePath);
    const html = renderToStaticMarkup(<Component { ...options }/>);
    // react can't render doctype, so it prepended here
    return void callback(null, `<!doctype html>${html}`);
  } catch (e) {
    callback(e);
  }
};
