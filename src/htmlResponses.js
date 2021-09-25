const fs = require('fs'); // pull in the file system module

const errorPage = fs.readFileSync(`${__dirname}/../client/error.html`);
const cssStyles = fs.readFileSync(`${__dirname}/../client/default-styles.css`);

const get404Response = (request, response, params, acceptedTypes) => {
  response.writeHead(404, { 'Content-Type': 'text/html' });
  response.write(errorPage);
  response.end();
};

const getCSSResponse = (request, response, params, acceptedTypes) => {
  response.writeHead(200, { 'Content-Type': 'text/css' });
  response.write(cssStyles);
  response.end();
};

module.exports = {
  get404Response, getCSSResponse,
};
