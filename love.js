const request = require('request');

const options = {
  method: 'GET',
  url: 'https://love-calculator.p.rapidapi.com/getPercentage',
  qs: {fname: 'John', sname: 'Alice'},
  headers: {
    'x-rapidapi-key': '4862aa2e37msh30b060dbaffcaf2p13d7cbjsn9096b49893df',
    'x-rapidapi-host': 'love-calculator.p.rapidapi.com',
    useQueryString: true
  }
};

request(options, function (error, response, body) {
	if (error) throw new Error(error);

	console.log(body);
});