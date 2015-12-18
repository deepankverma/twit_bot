console.log("bot is starting");
var Twit = require('twit');
var config = require('./config');
// console.log(config);
var T = new Twit(config);

var stream = T.stream('user');

stream.on('follow', followed);
function followed(eventMsg) {
 var name = eventMsg.source.name;
 var screenName = eventMsg.source.screen_name;
 tweetIt('@' + screenName + ' do you like rainbows');
 
}

//tweetIt();
//setInterval(tweetIt, 1000*20);

function tweetIt(txt) {
 var r = Math.floor(Math.random()*100);
var tweet = {
 status: '#codingnow from node.js and experimenting with random no.' + r
}
T.post('statuses/update', tweet, tweeted);


function tweeted(err, data, response) {
  if (err) {
   console.log("something went wrong");
  } else {
   console.log("It worked");
  }
}
};