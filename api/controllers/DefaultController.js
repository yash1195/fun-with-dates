/**
 * DefaultController
 *
 * @description :: Server-side logic for managing defaults
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
	getDateInformation: getDateInformationAction
};

var unirest = require('unirest');

function getDateInformationAction(req,res){

	var month;
	var day;

	month = req.body.month;
	day = req.body.day;

	var requestUrl = "https://numbersapi.p.mashape.com/"+ month +"/"+ day +"/date?fragment=true&json=true";

	unirest
		.get(requestUrl)
		.header("X-Mashape-Key", "8DEgeKT3iVmshoADf7SgvdK24g7Xp1k5vPujsnJ0bHgVKaiEO8")
		.header("Accept", "text/plain")
		.end(function (result) {
			console.log(result.body);
		  res.send(result.body);
		});
}