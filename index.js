var request = require('request');
const cheerio = require('cheerio');
const fs = require('fs');

request('http://www.google.com', (error, response, body) => {

  // console.log('error:', error); // Print the error if one occurred 
  // console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received 
  // console.log('body:', body); // Print the HTML for the Google homepage.

  fs.writeFile('scraped.html', body)

  let $ = cheerio.load(body);

  console.log( $("#_eEe").text() )

});