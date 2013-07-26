var Bot    = require('ttapi');
var AUTH   = 'authID'; //code spat out via ttapi bookmarklet
var USERID = 'userID'; //your userID
var ROOMID = 'roomID'; //the roomID of the room you're in

//throughout this code I put 'userID' or 'roomID' - you will need to replace these with the code from the bookmarklet.

var bot = new Bot(AUTH, USERID);
var STALK;

//this puts the bot in the room specified above immediately upon starting the program
bot.on('ready', function (data) { 
  bot.roomRegister(ROOMID); 
});

 function stalkme() {
	if (STALK) {
	bot.roomInfo(function (data) {
		var thisroom = data.room.roomid;
		bot.stalk('userID', function (data) {
			var stalkroom = data.roomId;
			if (thisroom != stalkroom) {
			bot.roomRegister(stalkroom);
			}
		});
	});   
	}
};

//this allows the bot to announce when he's arrived in the room. this also helps you know it's working.
bot.on('roomChanged', function (data) {
	ROOMNAME = data.room.name;
	ROOMINFO = data.room.description;
	ROOMID = data.room.roomid;
	bot.speak('hey, room!');
	STALK = 0;
	THEME = 0;
});

// 'speak' functions are the majority of this bot. this means that when someone says a certain trigger word, the bot will react. you can decide what and how.

bot.on('speak', function (data) {

//when you type the command '/grab', your bot will snag the song and bop for whomever is DJing. if someone else types this command, nothing will happen.

  if (data.text.match(/^\/grab$/)) {
  if (data.userid == "userID") {
      bot.speak('heart fart!'), bot.bop(), bot.snag(); 
    } else {
			bot.speak('What? I wasn\'t paying attention.');
		}
    }

//on a certain command, you can make your bot respond with a single answer:
   if (data.text.match(/^\/commands$/i)) {
  bot.speak('I can do lot\'s of stuff!');
   }

//or you can have your bot have a variety of random responses:

   if (data.text.match(/^\/shakeit$/i)) {
	  var keywords = ['boogie down', '\\o\/', 'shimmy shimmy cocopuff!' ];
	  var keyword = keywords[Math.floor(Math.random()*keywords.length)];
	  bot.speak(''+keyword+'');
  }

//this lets your bot bop for anyone except you (the superusers sometimes like when you're considerate enough not to have your bot bop for you. unless your Sultan, in which case it just doesn't matter.

   if (data.text.match(/^\/dance$/i)) {
  bot.roomInfo(true,function(data) {
	var CurrentDJID = data.room.metadata.current_song.djid;
	var CurrentDJName = data.room.metadata.current_song.djname;
   	if (CurrentDJID == "userID") {
	bot.speak('I\'m dancing in my mind.');
	} else {	
	bot.speak('rock'), bot.bop();
  }
  }
  }
  
//typing '/followme' will have your bot follow you into any room you go to, but only if you say it.  
     if (data.text.match(/^\/followme$/i)) {
  	if (data.userid == "userID") {
			STALK = 1;
			setInterval(function () { stalkme(); }, 2000);
		} else {
			bot.speak('I mean, you\'re cool and all, but no thanks.');
		}
  }

//this turns your bot off. again, only if YOU tell it to go away.

   if (data.text.match(/^\/saybye$/)) {
		if (data.userid == "userID") {
//http://www.e-nanigans.com/gifs/NinjaCatWarrior.gif
			bot.speak('bye, everyone!');
			bot.roomDeregister();
			process.exit(1);
		} else {
			bot.speak(':zzz:');
		}
   }

});
