// ==UserScript==
// @name         Mo-Bot
// @author       MWisBest <repinski23@gmail.com>
// @namespace    MWisBest
// @contributor  Glitch (348583240)
// @contributor  Mobster (244080236)
// @description  JavaScript bot for Xat Mobile.
// @include      http://m.xat.com:10049/*
// @version      0.4.5.0
// @icon         https://mo-bot.googlecode.com/hg/icons/Mo-Bot.png
// @icon64       https://mo-bot.googlecode.com/hg/icons/Mo-Bot.png
// @homepage     http://code.google.com/p/mo-bot/
// @require      https://mo-bot.googlecode.com/hg/mo-bot.utils.js
// @updateURL    https://mo-bot.googlecode.com/hg/mo-bot.meta.js
// ==/UserScript==


/* !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
 * !!!!!!!!!!!!!!!!!!!!!!!!!!! VERY IMPORTANT !!!!!!!!!!!!!!!!!!!!!!!!!!!
 * !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
 * !                                                                    !
 * !  REQUIRES SCRIPTISH ADD-ON FOR FIREFOX --- CANNOT BE USED WITHOUT  !
 * !                                                                    !
 * !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
 * !!!!!!!!!!!!!!!!!!!!!!!!!!! VERY IMPORTANT !!!!!!!!!!!!!!!!!!!!!!!!!!!
 * !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
 */


var cmdChar = "!";
var extraWait = 2;
var originalDate = new Date();
var originalMilliseconds = originalDate.getTime();
var startTime = time();
var overtakeCode = generateOvertake();
var botDead = false;
var scrambling = false;
var scrambleWord = "";
var scrambleAnswer = "";
var ApiKeys = [];
ApiKeys['spellCheck'] = "";
ApiKeys['lastFm'] = "";
ApiKeys['translate'] = "MoBot";
ApiKeys['pastebin'] = "";
ApiKeys['bitlyLogin'] = "";
ApiKeys['bitlyKey'] = "";
var Colors = [];
Colors['Tab'] = "#000000";
Colors['Background'] = "#000000";
Colors['Text'] = "#FFFFFF";
Colors['NameText'] = "#FFFFFF";
Colors['TabText'] = "#FFFFFF";

if( getValue( "BotData" ) != undefined )
{
	var BotData = JSON.parse( getValue( "BotData" ) );
}
else
{
	var BotData = { "botdevs" : " ", // insert your ID followed by a space, e.x. " 229279396 "
					"devs" : " ",
					"supports" : " ",
					"trusteds" : " ",
					"banneds" : " ",
					"botName" : "Mo-Bot",
					"currentChat" : "wick3d",
					"botRegname": "", // insert bot's RegName here
					"botID" : "", // insert bot's ID here
					"botRealPass" : "", // insert bot's password here (for reboot capabilities, among other things)
					"botPass" : "" // leave this one blank
				   };
}
BotData.botPass = calcPass( BotData.botRealPass );
var factcore = ["Rats cannot throw up.","Honey does not spoil.","The billionth digit of Pi is 9.","The square root of rope is string.","A gallon of water weighs 8.34 pounds.","Dental floss has superb tensile strength.","An ostrich's eye is bigger than its brain.","Hot water freezes quicker than cold water.","Polymerase I polypeptide A is a human gene.","The Sun is 330,330 times larger than Earth.","The moon orbits the Earth every 27.32 days.","A nanosecond lasts one billionth of a second.","To make a photocopier, simply photocopy a mirror.","Humans can survive underwater. But not for very long.",
"The average adult body contains half a pound of salt.","Volcano-ologists are experts in the study of volcanoes.","Cellular phones will not give you cancer. Only hepatitis.","Avocados have the highest fiber and calories of any fruit.","The atomic weight of Germanium is seven two point six four.","China produces the world's second largest crop of soybeans.","Human tapeworms can grow up to twenty-two point nine meters.","89% of magic tricks are not magic. Technically, they are sorcery.","Iguanas can stay underwater for twenty-eight point seven minutes.",
"Every square inch of the human body has 32 million bacteria on it.","The average life expectancy of a rhinoceros in captivity is 15 years.","At the end of The Seagull by Anton Chekhov, Konstantin kills himself.","According to most advanced algorithms, the world's best name is Craig.","Whales are twice as intelligent, and three times as delicious, as humans.","At some point in their lives 1 in 6 children will be abducted by the Dutch.","Tungsten has the highest melting point of any metal, at 3,410 degrees Celsius.","The first person to prove that cow's milk is drinkable was very, very thirsty.",
"Raseph, the Semitic god of war and plague, had a gazelle growing out of his forehead.","Gently cleaning the tongue twice a day is the most effective way to fight bad breath.","Avocados have the highest fiber and calories of any fruit. They are found in Australians.","The Mexican-American War ended in 1848 with the signing of the Treaty of Guadalupe Hidalgo.","According to Norse legend, thunder god Thor's chariot was pulled across the sky by two goats.","The value of Pi is the ratio of any circle's circumference to its diameter in Euclidean space.",
"Edmund Hillary, the first person to climb Mount Everest, did so accidentally while chasing a bird.","The first commercial airline flight took to the air in 1914. Everyone involved screamed the entire way.","The plural of surgeon general is surgeons general. The past tense of surgeons general is surgeonsed general.","Marie Curie invented the theory of radioactivity, the treatment of radioactivity, and dying of radioactivity.","The occupation of court jester was invented accidentally, when a vassal's epilepsy was mistaken for capering.",
"In Greek myth, Prometheus stole fire from the Gods and gave it to humankind. The jewelry he kept for himself.","Dreams are the subconscious mind's way of reminding people to go to school naked and have their teeth fall out.","In Greek myth, the craftsman Daedalus invented human flight so a group of Minotaurs would stop teasing him about it.","Before the Wright Brothers invented the airplane, anyone wanting to fly anywhere was required to eat 200 pounds of helium.","In 1879, Sandford Fleming first proposed the adoption of worldwide standardized time zones at the Royal Canadian Institute.",
"In 1948, at the request of a dying boy, baseball legend Babe Ruth ate seventy-five hot dogs, then died of hot dog poisoning.","While the submarine is vastly superior to the boat in every way, over 97% of people still use boats for aquatic transportation.","Roman toothpaste was made with human urine. Urine as an ingredient in toothpaste continued to be used up until the 18th century.","Before the invention of scrambled eggs in 1912, the typical breakfast was either whole eggs still in the shell or scrambled rocks.",
"The Tariff Act of 1789, established to protect domestic manufacture, was the second statute ever enacted by the United States government.","During the Great Depression, the Tennessee Valley Authority outlawed pet rabbits, forcing many to hot glue-gun long ears onto their pet mice.","William Shakespeare did not exist. His plays were masterminded in 1589 by Francis Bacon, who used a Ouija board to enslave play-writing ghosts.","Pants were invented by sailors in the sixteenth century to avoid Poseidon's wrath. It was believed that the sight of naked sailors angered the sea god.",
"Diamonds are made when coal is put under intense pressure. Diamonds put under intense pressure become foam pellets, commonly used today as packing material.","Contrary to popular belief, the Eskimo does not have one hundred different words for snow. They do, however, have two hundred and thirty-four words for fudge."];

function reboot( normalID )
{
	var chat = BotData.currentChat.toLowerCase();
	if( chat != "wick3d" && chat != "mwisbest" && chat != "moabster" && chat != "conj" )
	{
		sendMessage( "Unknown chat!" );
		return;
	}
	else
	{
		var myForm = document.createElement( "form" );
		myForm.method = "post";
		if( chat == "mwisbest" )
		{
			if( normalID ) var p = { n : BotData.botRegname, gid : "113269290", g : "mwisbest", t : BotData.botPass };
			else var p = { n : BotData.botName, gid : "113269290", g : "mwisbest", t : BotData.botPass };
		}
		else if( chat == "wick3d" )
		{
			if( normalID ) var p = { n : BotData.botRegname, gid : "122966601", g : "wick3d", t : BotData.botPass };
			else var p = { n : BotData.botName, gid : "122966601", g : "wick3d", t : BotData.botPass };
		}
		else if( chat == "moabster" )
		{
			if( normalID ) var p = { n : BotData.botRegname, gid : "165673541", g : "moabster", t : BotData.botPass };
			else var p = { n : BotData.botName, gid : "165673541", g : "moabster", t : BotData.botPass };
		}
		else if( chat == "conj" )
		{
			if( normalID ) var p = { n : BotData.botRegname, gid : "140496130", g : "conj", t : BotData.botPass };
			else var p = { n : BotData.botName, gid : "140496130", g : "conj", t : BotData.botPass };
		}
		myForm.action = "http://m.xat.com:10049/Index";
		for( var k in p )
		{
			var myInput = document.createElement( "input" );
			myInput.setAttribute( "name", k );
			myInput.setAttribute( "value", p[k] );
			myForm.appendChild( myInput );
		}
		document.body.appendChild( myForm );
		myForm.submit();
		document.body.removeChild( myForm );
	}
}
function initializeUserData( id )
{
	BotData[id] = { "FCs" : "",
					"nickname" : ""
				  };
}

document.getElementsByTagName( "head" )[0].innerHTML += "<link rel=\"icon\" type=\"image/gif\" href=\"https://mo-bot.googlecode.com/hg/icons/MobileIcon.gif\" />"
document.getElementById( "body" ).bgColor = Colors['Background'];
document.getElementById( "body" ).innerHTML = "<div id=\"fillMe\" style=\"position:relative;left:0px;width:70%;background-color:" + Colors['Background'] + ";\" ></div><div id=\"fillUser\" style=\"position:fixed;top:0px;right:0px;width:30%;text-align:right;background-color:" + Colors['Background'] + ";\" ></div><div id=\"tabs\" style=\"display:none;\"></div><div id=\"name\" style=\"display:none;\" ></div>";
document.title = BotData.botName;
unsafeWindow.Messages = [];
unsafeWindow.Messages['Chat'] = "";
unsafeWindow.Messages['Users'] = "";

unsafeWindow.AddMess = function AddMess( tab, s )
{
	if( tab == "Chat" )
	{
		var curTime = time();
		if( curTime >= startTime + extraWait )
		{
			if( isSubStr( s, "<b>" ) )
			{
				var id = s.between( "(", ")" );
				var msg = s.between( "<b>", "</b>" ) + " "; // the space has to be added for commands without any arguments apparently
				if( msg.charAt( 0 ) == cmdChar )
				{
					var cmd = msg.substring( 1, msg.indexOf( " " ) );
					handleCommand( cmd, msg.substring( msg.indexOf( " " ) + 1 ), id );
				}
			}
			else if( isSubStr( s, "<strong id=\"PC\PM\">" ) )
			{
				var id = s.between( "(", ")" );
				var msg = s.between( "<strong id=\"PC\PM\">", "</strong>" ) + " "; // the space has to be added for commands without any arguments apparently
				if( msg.charAt( 0 ) == cmdChar )
				{
					var cmd = msg.substring( 1, msg.indexOf( " " ) );
					handleCommand( cmd, msg.substring( msg.indexOf( " " ) + 1 ), id );
				}
			}
		}
		else
		{
			unsafeWindow.Messages['Chat'] = "";
			s = "";
		}
		if( s != "" ) unsafeWindow.Messages['Chat'] += s + "<br>";
		unsafeWindow.SetBox( unsafeWindow.Messages['Chat'] );
	}
	else if( tab == "Users" )
	{
		if( s != "" )
		{
			var test = s.between( "<span style=\"color:" + Colors['Text'] + "\" >", "</span>" );
			if( isSubStr( unsafeWindow.Messages['Users'], test.substring( 0, 9 ) ) ) // Probably not needed anymore due to how users get removed from the list on a disconnect, but will be left here for now
			{
				var toReplace = unsafeWindow.Messages['Users'].between( test.substring( 0, 9 ), "</span>" );
				unsafeWindow.Messages['Users'] = unsafeWindow.Messages['Users'].replace( toReplace, test.substring( 9 ) );
			}
			else unsafeWindow.Messages['Users'] += s + "<br>";
			unsafeWindow.SetUserBox( unsafeWindow.Messages['Users'] );
		}
	}
}
unsafeWindow.DoMessage = function DoMessage( id, KickBan, Reason )
{
	var parameters = "u=" + id + "&t=" + encodeURIComponent( KickBan );
	parameters = "p=" + encodeURIComponent( Reason ) + "&" + parameters;
	xmlHttp2 = new XMLHttpRequest();
	xmlHttp2.open( "GET", "/Post?" + parameters, true );
	xmlHttp2.setRequestHeader( "Content-Type", "text/plain" );
	xmlHttp2.setRequestHeader( "Connection", "close" );
	xmlHttp2.send( parameters );
}
unsafeWindow.BanKick = function BanKick( id, Type, Reason ) {} // Not used anymore
unsafeWindow.Make = function Make( id, Type ) {} // Not used anymore
unsafeWindow.DoUser = function DoUser( id ) {} // Not used anymore
unsafeWindow.CloseTab = function CloseTab( tab ) {} // Not used anymore
unsafeWindow.CreateTab = function CreateTab( id ) {} // Not used anymore
unsafeWindow.DispTabs = function DispTabs() {} // Not used anymore
unsafeWindow.DoBut = function DoBut( Action, Value ) {} // Not used anymore
unsafeWindow.SetTab = function SetTab( tab ) {} // Not used anymore
unsafeWindow.UserInfo = function UserInfo( node )
{
	if( !node.attributes.u ) return;
	var s, id = parseInt( node.attributes.u.value );
	unsafeWindow.Users[id] = [];
	unsafeWindow.Users[id]['n'] = "" + id;
	unsafeWindow.Users[id]['N'] = "";
	unsafeWindow.Users[id]['f'] = 0;
	if( node.attributes.n ) unsafeWindow.Users[id]['n'] = node.attributes.n.value;
	if( node.attributes.N ) unsafeWindow.Users[id]['N'] = node.attributes.N.value;
	if( node.attributes.f ) unsafeWindow.Users[id]['f'] = parseInt( node.attributes.f.value );
	s = "<span style=\"color:" + Colors['Text'] + "\" >";
	s += id + " ";
	if( unsafeWindow.Users[id]['N'] ) s += "<b>" + unsafeWindow.Users[id]['N'] + "</b> ";
	s += unsafeWindow.StripSmilies( unsafeWindow.Users[id]['n'] );
	s += "</span>";
	unsafeWindow.AddMess( "Users", s );
}
unsafeWindow.UndoUserInfo = function UndoUserInfo( id )
{
	if( unsafeWindow.Users[id] == undefined ) return;
	var test = unsafeWindow.Messages['Users'];
	var test2 = "<span style=\"color:" + Colors['Text'] + "\" >" + id + " ";
	if( unsafeWindow.Users[id]['N'] ) test2 += "<b>" + unsafeWindow.Users[id]['N'] + "</b> ";
	test2 += unsafeWindow.StripSmilies( unsafeWindow.Users[id]['n'] ) + "</span><br>";
	if( isSubStr( test, test2 ) )
	{
		test = test.replace( test2, "" );
	}
	unsafeWindow.Messages['Users'] = test;
	unsafeWindow.SetUserBox( unsafeWindow.Messages['Users'] );
}
unsafeWindow.SetBox = function SetBox( s )
{
	var Div = document.getElementById( "fillMe" );
	var curTime = time();
	if( curTime >= startTime + extraWait )
	{
		Div.innerHTML = s;
		window.scrollTo( 0, Div.scrollHeight );
	}
	else Div.innerHTML = "";
}
unsafeWindow.SetUserBox = function SetUserBox( s )
{
	var Div = document.getElementById( "fillUser" );
	Div.innerHTML = s;
}
unsafeWindow.StripSmilies = function StripSmilies( s )
{
	var s2 = "";
	var b = false;
	var c;
	for( var n = 0; n < s.length; n++ )
	{
		c = s.charAt( n );
		if( n == 0 && c == "$" ) {}
		else if( !b && c != "(" && c != "#" ) s2 += c;
		else if( c == "(" ) b = true;
		else if( !b && c == "#" && ( s.charAt( n + 1 ) == "#" || s.charAt( n - 1 ) == "#" ) ) break;
		else if( !b && c == "#" ) s2 += c;
		else if( c == ")" ) b = false;
	}
	if( s2.length == 0 ) s2 = s;
	var max = s2.length;
	if( max > 10 ) max = 10;
	return s2.substr( 0, max );
}
unsafeWindow.fillElementId = function fillElementId()
{
	xmlHttp = new XMLHttpRequest();
	xmlHttp.onreadystatechange = function()
	{
		if( xmlHttp.readyState == 4 && xmlHttp.status == 200 )
		{
			var test = xmlHttp.responseText;     // This (somewhat) fixes the issue with PHP bots messing up Xat Mobile
			test = test.replace( /i="0"/g, "" ); // They send a duplicate "i" node in their messages which causes mobile to not parse properly
			var parser = new DOMParser();        // This _would_ fix bots making users not show up in mobile, but this function isn't replaced fast enough
			var xmlDocument = parser.parseFromString( test, "text/xml" );
			var nn = "";
			for( var n = 0; n < xmlDocument.firstChild.childNodes.length; n++ )
			{
				var e = xmlDocument.firstChild.childNodes[n];
				nn = xmlDocument.firstChild.childNodes[n].nodeName;
				if( nn == "p" || nn == "z" ) // z = pm , p = pc
				{
					if( e.attributes.t.value.charAt( 0 ) == "/" ) continue;
					var id = parseInt( e.attributes.u.value );
					var name = "";
					var r = id;
					if( unsafeWindow.Users[id] == undefined ) 
					{
						if( nn == "z" ) unsafeWindow.UserInfo( e );
						else continue;
					}
					if( unsafeWindow.Users[id]['N'] ) r = unsafeWindow.Users[id]['N'] + " (" + id + ")";
					if( unsafeWindow.Users[id]['n'] ) name = "<span class=\"usernamePC\PM\" title=\"" + r + "\" style=\"color:" + Colors['NameText'] + "\" >" + unsafeWindow.StripSmilies( unsafeWindow.Users[id]['n'] ) + ": </span>";
					unsafeWindow.AddMess( "Chat", "<span style=\"color:" + Colors['Text'] + "\" ><strong>[PC/PM] </strong></span>" + name + " <span style=\"color:" + Colors['NameText'] + "\" ><strong id=\"PC\PM\">" + e.attributes.t.value + "</strong></span>" );
				}
				else if( nn == "m" ) // main chat message
				{
					var t = e.attributes.t.value;
					if( t.charAt( 0 ) == "/" )
					{
						var y = t.charAt( 1 );
						var derp = t.charAt( 2 );
						if( y != "g" && y != "k" && y != "u" ) continue;
						var d = parseInt( e.attributes.d.value );
						if( unsafeWindow.Users[d] == undefined ) continue;
						if( y == "g" && derp != "m" ) t = "I have banned " + unsafeWindow.StripSmilies( unsafeWindow.Users[d]['n'] ) + " for " + ( parseInt( t.substr( 2 ) ) / 3600 ) + " hours.";
						else if( y == "g" && derp == "m" ) t = "I have muted " + unsafeWindow.StripSmilies( unsafeWindow.Users[d]['n'] ) + " for " + ( parseInt( t.substr( 3 ) ) / 3600 ) + " hours.";
						else if( y == "k" ) t = "I have kicked " + unsafeWindow.StripSmilies( unsafeWindow.Users[d]['n'] );
						else if( y == "u" ) t = "I have unbanned " + unsafeWindow.StripSmilies( unsafeWindow.Users[d]['n'] );
						else continue;
					}
					var id = parseInt( e.attributes.u.value );
					if( unsafeWindow.Users[id] == undefined ) continue;
					var name = "";
					var r = id;
					if( unsafeWindow.Users[id]['N'] ) r = unsafeWindow.Users[id]['N'] + " (" + id + ")";
					if( unsafeWindow.Users[id]['n'] ) name = "<span class=\"username\" title=\"" + r + "\" style=\"color:" + Colors['NameText'] + "\" >" + unsafeWindow.StripSmilies( unsafeWindow.Users[id]['n'] ) + ": </span>";
					unsafeWindow.AddMess( "Chat", name + " <span style=\"color:" + Colors['NameText'] + "\" ><b>" + t + "</b></span>" );
				}
				else if( nn == "l" ) // User logs out
				{
					var id = parseInt( e.attributes.u.value );
					unsafeWindow.UndoUserInfo( id );
				}
				else if( nn == "u" ) // User connects
				{
					var t = 1;
					unsafeWindow.UserInfo( e );
					t++;
				}
				/*
				else if( nn == "gn" ) // This was used to set the chat name in places, but it didn't always work. Removed for now
				{
					document.getElementById( "name" ).innerHTML = "&nbsp;" + e.attributes.n.value;
				}
				*/
				else if( nn == "v" ) // Xat error of some sort
				{
					var e = parseInt( e.attributes.e.value );
					if( e == 1 )
					{
						unsafeWindow.AddMess( "Chat", "<span style=\"color:" + Colors['Text'] + "\" ><strong>You have been logged out!</strong></span>" );
						reboot();
						nn = "logout";
					} 
					else if( e == 8 )
					{
						unsafeWindow.AddMess( "Chat", "<span style=\"color:" + Colors['Text'] + "\" ><strong>Bad password!</strong></span>" );
						nn = "logout";
					}
					else if( e == 6 )
					{
						unsafeWindow.AddMess( "Chat", "<span style=\"color:" + Colors['Text'] + "\" ><strong>Bad user name!</strong></span>" );
						reboot( true );
						nn = "logout";
					}		
					else				
					{
						unsafeWindow.AddMess( "Chat", "<span style=\"color:" + Colors['Text'] + "\" ><strong>Error Z" + e + "</strong></span>" );
						reboot();
						nn = "logout";
					}		
					break;
				}
				else if( nn == "logout" )
				{
					unsafeWindow.AddMess( "Chat", "<span style=\"color:" + Colors['Text'] + "\" ><strong>You have been logged out!</strong></span>" );
					reboot();
					break;
				}
				xmlHttp = null;
				if( nn != "logout" ) unsafeWindow.fillElementId();
			}
		}
	};
	var ourDate = new Date();
	xmlHttp.open( "GET", "/Get?" + ourDate.getTime(), true );
	xmlHttp.setRequestHeader( "Content-Type", "application/x-www-form-urlencoded" );
	xmlHttp.send( null );
}
setTimeout( function()
{
	unsafeWindow.OldTab = undefined; // Not used anymore
	unsafeWindow.ShowUsers = undefined; // Not used anymore
	unsafeWindow.Tabs = undefined; // Not used anymore
	unsafeWindow.myWidth = undefined; // What the hell were they thinking? This is never used anywhere at ALL!!
	unsafeWindow.myHeight = undefined; // What the hell were they thinking? This is never used anywhere at ALL!!
	unsafeWindow.Active = undefined; // Not used anymore
	unsafeWindow.Ignore = undefined; // Not used anymore
	unsafeWindow.t = undefined; // What the hell were they thinking? This is never used anywhere at ALL!!
	unsafeWindow.PrevMsg = undefined; // Not used anymore
	unsafeWindow.cnt = undefined; // What the hell were they thinking? This is never used anywhere at ALL!!
}, 500 );
setTimeout( function() { unsafeWindow.AddMess( "Chat", "<span style=\"color:" + Colors['Text'] + "\" ><strong>Welcome to Mo-Bot, created by MW!<br>Overtake Code: " + overtakeCode + "</strong></span>" ); }, extraWait * 999.9 );

function handleCommand( cmd, arg, id )
{
	cmd = cmd.toLowerCase();
	var isBanned = isSubStr( BotData.banneds, id );
	if( isBanned ) return;
	arg = arg.substring( 0, arg.length - 1 ); // Removes extra space added to message. Fixes crypto() not hashing correct thing
	var args = arg.split( " " );
	var isBotdev = isSubStr( BotData.botdevs, id );
	var isDev = isSubStr( BotData.devs, id );
	var isSupport = isSubStr( BotData.supports, id );
	var isTrusted = isSubStr( BotData.trusteds, id );
	if( isBotdev )
	{
		switch( cmd )
		{
			case "die": die();	break;
			case "resurrect": resurrect(); break;
		}
	}
	if( botDead ) return;
	switch( cmd )
	{
		case "say": respond( arg, id ); break;
		case "overtake": overtake( args[0], id ); break;
		case "fc": viewFC( args[0], id ); break;
	}
	if( isBotdev || isDev || isSupport || isTrusted )
	{
		switch( cmd )
		{
			case "8":
			case "8b":
			case "8ball": eightBall( id ); break;
			case "acc": acc( args[0] ); break;
			case "saypc": sendPC( arg, args[0] ); break;
			case "regname": regname( args[0] ); break;
			case "id": getId( args[0] ); break;
			case "fact": fact(); break;
			case "google": google( arg ); break;
			case "youtube": youtube( arg ); break;
			case "addfc": addFC( args[0], args[1], id ); break;
			case "remfc":
			case "removefc": removeFC( args[0], id ); break;
			case "googl": GooGl( args[0] ); break;
			case "bitly": bitly( args[0] ); break;
			case "define": dictionary( arg ); break;
			case "wotd":
			case "wordoftheday": wordOfTheDay(); break;
			case "urban": urban( arg, false ); break;
			case "rurban": urban( "", true ); break;
			case "md5": crypto( arg, "MD5" ); break;
			case "sha1": crypto( arg, "SHA1" ); break;
			case "sha256": crypto( arg, "SHA256" ); break;
			case "sha384": crypto( arg, "SHA384" ); break;
			case "sha512": crypto( arg, "SHA512" ); break;
			case "md2": crypto( arg, "MD2" ); break;
			case "twitter": twitter( args[0] ); break;
			case "power": powerimage( args[0] ); break;
			case "tinypaste": tinypaste( arg ); break;
			case "pastebin": pastebin( arg ); break;
			case "pastekde":
			case "kdepaste": kdepaste( arg ); break;
			case "danish": googleTranslate( arg, "da" ); break;
			case "dutch": googleTranslate( arg, "nl" ); break;
			case "english": googleTranslate( arg, "en" ); break;
			case "french": googleTranslate( arg, "fr" ); break;
			case "german": googleTranslate( arg, "de" ); break;
			case "italian": googleTranslate( arg, "it" ); break;
			case "polish": googleTranslate( arg, "pl" ); break;
			case "portuguese": googleTranslate( arg, "pt" ); break;
			case "spanish": googleTranslate( arg, "es" ); break;
			case "swedish": googleTranslate( arg, "sv" ); break;
			case "artist": lastFm( arg, "artist" ); break;
			case "chart": lastFm( arg, "chart" ); break;
			case "lastfm": lastFm( arg, "user" ); break;
			case "factcore": factCore(); break;
			case "s":
			case "scramble": scramble( args[0], id ); break;
			case "spell":
			case "spelling":
			case "spellcheck": spellCheck( args[0] ); break;
			case "w":
			case "weather": googleWeather( arg ); break;
			case "fml":
			case "fmylife": fMyLife(); break;
			case "horo":
			case "horoscope": horoScope( args[0] ); break;
			case "stock":
			case "stocks": googleStocks( args[0] ); break;
			case "runtime":
			case "uptime": upTime(); break;
			case "imdb": iMDBsearch( arg ); break;
			case "yahoo": yahooSearch( arg ); break;
		}
	}
	if( isBotdev || isDev || isSupport )
	{
		switch( cmd )
		{
			case "kick": kick( args[0], "Kicked by " + id ); break;
			case "zap": kick( args[0], "Kicked by " + id + " #1#1" ); break;
			case "ranks": ranks( args[0], args[1], id ); break;
			case "chatlog": chatLog(); break;
		}
	}
	if( isBotdev || isDev )
	{
		switch( cmd )
		{
			case "ban": ban( args[0], "Banned by " + id, args[1] ); break;
			case "unban": unban( args[0] ); break;
			case "mute": mute( args[0], "Muted by " + id, args[1] ); break;
			case "cc": cc( args[0] ); break;
			case "hush": hush( args[0], args[1] ); break;
			case "p": p(); break;
			case "scroll": scroll( arg ); break;
			case "away": away(); break;
		}
	}
	if( isBotdev )
	{
		switch( cmd )
		{
			case "add": add( args[0], args[1] ); break;
			case "remove": remove( args[0] ); break;
			case "name": bawtName( args[0] ); break;
			case "reboot":
			case "restart": reboot(); break;
			case "currentchat":
			case "chatname": chatName( args[0] ); break;
			case "setnick": setNick( args[0], id, args[1] ); break;
			case "getnick": getNick( id, args[0] ); break;
			case "clearfc": clearFC( id ); break;
		}
	}
}
/////////////
//FUCNTIONS//
/////////////
function yahooSearch( query )
{
	query = query.replace( / /g, "+" );
	getPage( "http://search.yahoo.com/search?p=" + query,
	function( doc )
	{
		var offset = 0;
		var results = doc.getElementsByClassName( "yschttl spt" );
		var result1 = results[0 + offset].href;
		var result1index = result1.indexOf( "**http" ) + 2;
		result1 = result1.substring( result1index );
		result1 = decodeURIComponent( result1 );
		while( isSubStr( result1, "yahoo.com" ) )
		{
			offset++;
			result1 = results[0 + offset].href;
			result1index = result1.indexOf( "**http" ) + 2;
			result1 = result1.substring( result1index );
			result1 = decodeURIComponent( result1 );
		}
		setTimeout( function() { sendMessage( result1 ); }, 1000 );
		var result2 = results[1 + offset].href;
		var result2index = result2.indexOf( "**http" ) + 2;
		result2 = result2.substring( result2index );
		result2 = decodeURIComponent( result2 );
		while( isSubStr( result2, "yahoo.com" ) )
		{
			offset++;
			result2 = results[1 + offset].href;
			result2index = result2.indexOf( "**http" ) + 2;
			result2 = result2.substring( result2index );
			result2 = decodeURIComponent( result2 );
		}
		setTimeout( function() { sendMessage( result2 ); }, 2000 );
		var result3 = results[2 + offset].href;
		var result3index = result3.indexOf( "**http" ) + 2;
		result3 = result3.substring( result3index );
		result3 = decodeURIComponent( result3 );
		while( isSubStr( result3, "yahoo.com" ) )
		{
			offset++;
			result3 = results[2 + offset].href;
			result3index = result3.indexOf( "**http" ) + 2;
			result3 = result3.substring( result3index );
			result3 = decodeURIComponent( result3 );
		}
		setTimeout( function() { sendMessage( result3 ); }, 3000 );
	}
	);
}
function chatLog()
{
	var filled = document.getElementById( "fillMe" );
	var messages = filled.getElementsByTagName( "b" );
	var users = filled.getElementsByClassName( "username" );
	var pastetext = "";
	for( var i in users )
	{
		pastetext += users[i].innerHTML + messages[i].innerHTML + "%0A";
	}
	pastetext = pastetext.replace( /&nbsp;/gi, " " );
	tinypaste( pastetext ); // does tinypaste because only tinypaste works correctly with "%0A" as linebreaks
}
function iMDBsearch( query )
{
	query = query.replace(/ /g,"+");
	getPage( "http://m.imdb.com/find?q=" + query,
	function( doc )
	{
		var results = doc.getElementsByClassName( "title" );
		var result1 = results[0].innerHTML.between( " href=\"", "\" " );
		result1 = "http://www.imdb.com" + result1;
		var result1title = results[0].innerHTML.between( "\">", "</a>" ) + results[0].innerHTML.between( "</a> ", "\n" );
		setTimeout( function() { sendMessage( result1title + " - " + result1 ); }, 1000 );
		var result2 = results[1].innerHTML.between( " href=\"", "\" " );
		result2 = "http://www.imdb.com" + result2;
		var result2title = results[1].innerHTML.between( "\">", "</a>" ) + results[1].innerHTML.between( "</a> ", "\n" );
		setTimeout( function() { sendMessage( result2title + " - " + result2 ); }, 2000 );
		var result3 = results[2].innerHTML.between( " href=\"", "\" " );
		result3 = "http://www.imdb.com" + result3;
		var result3title = results[2].innerHTML.between( "\">", "</a>" ) + results[2].innerHTML.between( "</a> ", "\n" );
		setTimeout( function() { sendMessage( result3title + " - " + result3 ); }, 3000 );
	}
	);
}
function upTime()
{
	var currentDate = new Date();
	var currentMilliseconds = currentDate.getTime();
	var uptimeMilliseconds = currentMilliseconds - originalMilliseconds;
	var hours = Math.floor( uptimeMilliseconds / 3600000 );
	var minutes = Math.floor( uptimeMilliseconds / 60000 );
	var seconds = Math.floor( uptimeMilliseconds / 1000 );
	seconds -= minutes * 60;
	minutes -= hours * 60;
	hours = hours.toString();
	minutes = minutes.toString();
	seconds = seconds.toString();
	if( hours.length == 1 ) hours = "0" + hours;
	hours = hours.substring( 0, 2 );
	if( minutes.length == 1 ) minutes = "0" + minutes;
	minutes = minutes.substring( 0, 2 );
	if( seconds.length == 1 ) seconds = "0" + seconds;
	seconds = seconds.substring( 0, 2 );
	setTimeout( function() { sendMessage( "Bot uptime: " + hours + ":" + minutes + ":" + seconds ); }, 500 );
}
function googleStocks( query )
{
	getPage( "http://www.google.com/ig/api?stock=" + query,
	function( doc )
	{
		if( doc.getElementsByTagName( "company" )[0] != undefined && doc.getElementsByTagName( "company" )[0].getAttribute( "data" ) != "" )
		{
			var company = doc.getElementsByTagName( "company" )[0].getAttribute( "data" );
			var current = doc.getElementsByTagName( "last" )[0].getAttribute( "data" );
			var change = doc.getElementsByTagName( "change" )[0].getAttribute( "data" );
			var percchange = doc.getElementsByTagName( "perc_change" )[0].getAttribute( "data" );
			setTimeout( function() { sendMessage( company + " " + current + " " + change + "(" + percchange + "%)" ); }, 1000 );
		}
		else
		{
			setTimeout( function() { sendMessage( "Stock not found." ); }, 1000 );
		}
	}
	);
}
function horoScope( sign )
{
	sign = sign.toLowerCase();
	if( sign != "aries" && sign != "taurus" && sign != "gemini" && sign != "cancer" && sign != "leo" && sign != "virgo" && sign != "libra" && sign != "scorpio" && sign != "sagittarius" && sign != "capricorn" && sign != "aquarius" && sign != "pisces" )
	{
		setTimeout( function() { sendMessage( "Valid Signs: aquarius, aries, cancer, capricorn, gemini, leo, libra, pisces, sagittarius, scorpio, taurus, virgo." ); }, 1000 );
	}
	else
	{
		var d = new Date();
		var year = d.getUTCFullYear().toString();
		var month = d.getUTCMonth().toString();
		var day = d.getUTCDate().toString();
		switch( month )
		{
			case "0": month = "01"; break;
			case "1": month = "02"; break;
			case "2": month = "03"; break;
			case "3": month = "04"; break;
			case "4": month = "05"; break;
			case "5": month = "06"; break;
			case "6": month = "07"; break;
			case "7": month = "08"; break;
			case "8": month = "09"; break;
			case "9": month = "10"; break;
			case "10": month = "11"; break;
			case "11": month = "12"; break;
		}
		switch( day )
		{
			case "1": day = "01"; break;
			case "2": day = "02"; break;
			case "3": day = "03"; break;
			case "4": day = "04"; break;
			case "5": day = "05"; break;
			case "6": day = "06"; break;
			case "7": day = "07"; break;
			case "8": day = "08"; break;
			case "9": day = "09"; break;
			default: break;
		}
		getPage( "http://m.astrology.com/inf/infomo;?site=astrology.com&view=horoscope_details&feed:a=astrolist&feed:c=astrolist&feed:i=64A08E5F1E6C39FAEB90108C430EB120&feed=dailyoverview&tdate=" + year + month + day + "&astsign=" + sign.charAt( 0 ).toUpperCase() + sign.substring( 1 ),
		function( doc )
		{
			var horoscope = doc.getElementsByClassName( "list" )[0].innerHTML;
			var breakLocation = horoscope.indexOf( "br" );
			breakLocation += 3;
			horoscope = horoscope.substring( breakLocation );
			setTimeout( function() { sendMessage( horoscope ); }, 2500 );
		}
		);
	}
}
function fMyLife()
{
	getPage( "http://m.fmylife.com/",
	function( doc )
	{
		var fmls = doc.getElementsByClassName( "text" );
		var story = fmls[Math.floor( Math.random() * 12 )].innerHTML;
		var offset = 0;
		while( story.length > 200 && offset < 12 )
		{
			story = fmls[Math.floor( Math.random() * 12 )].innerHTML;
			offset++;
		}
		if( story.length <= 200 ) setTimeout( function() { sendMessage( story ); }, 2500 );
		else setTimeout( function() { sendMessage( "Stories too long. FML" ); }, 1000 );
	}
	);
}
function googleWeather( query )
{
	getPage( "http://www.google.com/ig/api?weather=" + query,
	function( doc )
	{
		if( doc.getElementsByTagName( "condition" )[0] != undefined )
		{
			var condition = doc.getElementsByTagName( "condition" )[0].getAttribute( "data" );
			var f = doc.getElementsByTagName( "temp_f" )[0].getAttribute( "data" );
			var c = doc.getElementsByTagName( "temp_c" )[0].getAttribute( "data" );
			var humidity = doc.getElementsByTagName( "humidity" )[0].getAttribute( "data" );
			var wind = doc.getElementsByTagName( "wind_condition" )[0].getAttribute( "data" );
			var windspeedmph = wind.between( "at ", " mph" );
			var windspeedkph = Math.round( windspeedmph * 1.609344 );
			setTimeout( function() { sendMessage( condition + ", " + f + "F(" + c + "C), " + humidity + ", " + wind + "(" + windspeedkph + " kph)." ); }, 1000 );
		}
		else
		{
			setTimeout( function() { sendMessage( "Weather not found." ); }, 1000 );
		}
	}
	);
}
function spellCheck( query )
{
	getPage( "http://svc.webservius.com/v1/spellcheck/spellcheck/?wsvKey=" + ApiKeys['spellCheck'] + "&cmd=check_spelling&version=1.0&format=xml&ignore_domain_names=1&text=" + encodeURI( query ),
	function( doc )
	{
		var suggestions = doc.getElementsByTagName( "suggestion" );
		if( suggestions != undefined && suggestions[0] != undefined && suggestions[1] == undefined ) setTimeout( function() { sendMessage( "Did you mean: " + suggestions[0].innerHTML + " ?" ); }, 500 );
		else if( suggestions != undefined && suggestions[0] != undefined && suggestions[1] != undefined && suggestions[2] == undefined ) setTimeout( function() { sendMessage( "Did you mean: " + suggestions[0].innerHTML + ", " + suggestions[1].innerHTML + " ?" ); }, 500 );
		else if( suggestions != undefined && suggestions[0] != undefined && suggestions[1] != undefined && suggestions[2] != undefined && suggestions[3] == undefined ) setTimeout( function() { sendMessage( "Did you mean: " + suggestions[0].innerHTML + ", " + suggestions[1].innerHTML + ", " + suggestions[2].innerHTML + " ?" ); }, 500 );
		else if( suggestions != undefined && suggestions[0] != undefined && suggestions[1] != undefined && suggestions[2] != undefined && suggestions[3] != undefined ) setTimeout( function() { sendMessage( "Did you mean: " + suggestions[0].innerHTML + ", " + suggestions[1].innerHTML + ", " + suggestions[2].innerHTML + ", " + suggestions[3].innerHTML + " ?" ); }, 500 );
		else setTimeout( function() { sendMessage( "Nothing found." ); }, 500 );
	}
	);
}
function scramble( argOrWord, id )
{
	if( argOrWord == "start" && !scrambling )
	{
		scrambling = true;
		getPage( "http://watchout4snakes.com/CreativityTools/RandomWord/RandomWord.aspx",
		function( doc )
		{
			scrambleAnswer = doc.getElementsByClassName( "randomWord" )[0].innerHTML;
			scrambleWord = wordScramble( scrambleAnswer );
			setTimeout( function() { sendMessage( "Scrambled Word: " + scrambleWord ); }, 500 );
		}
		);
	}
	else if( argOrWord == "end" && scrambling && scrambleAnswer != "end" )
	{
		scrambling = false;
		setTimeout( function() { sendMessage( "Game ended. Correct Answer: " + scrambleAnswer ); scrambleAnswer = ""; scrambleWord = ""; }, 500 );
	}
	else if( argOrWord == scrambleAnswer && scrambling )
	{
		scrambling = false;
		setTimeout( function() { sendMessage( "Congratulations! Correct Answer: " + scrambleAnswer ); scrambleAnswer = ""; scrambleWord = ""; }, 500 );
	}
	else if( argOrWord == "solution" && scrambling && ( isSubStr( BotData.botdevs, id ) || isSubStr( BotData.devs, id ) ) ) sendPC( "Scramble Solution: " + scrambleAnswer, id );
}
function dictionary( query )
{
	getPage( "http://m.dictionary.com/d/?q=" + query,
	function( doc )
	{
		var name = doc.getElementsByTagName( "meta" )[1].name;
		if( name == undefined || name != "description" ) setTimeout( function() { sendMessage( query + " not found." ); }, 750 );
		else
		{
			var definition = doc.getElementsByTagName( "meta" )[1].content;
			setTimeout( function() { sendMessage( query + " - " + definition ); }, 750 );
		}
	}
	);
}
function wordOfTheDay()
{
	getPage( "http://m.dictionary.com/",
	function( doc )
	{
		var word = doc.getElementsByClassName( "subheader currentword nounderline" )[0].innerHTML;
		dictionary( word );
	}
	);
}
function factCore()
{
	var randomNumber = Math.floor( Math.random() * factcore.length );
	setTimeout( function() { sendMessage( factcore[randomNumber] ); }, 1000 );
}
function lastFm( query, mode )
{
	if( mode == "artist" )
	{
		getPage( "http://ws.audioscrobbler.com/2.0/?method=artist.getinfo&artist=" + query + "&api_key=" + ApiKeys['lastFm'],
		function( doc )
		{
			var artist = doc.getElementsByTagName( "url" );
			setTimeout( function() { sendMessage( artist[0].innerHTML ); }, 500 );
		}
		);
		getPage( "http://ws.audioscrobbler.com/2.0/?method=artist.gettopalbums&artist=" + query + "&api_key=" + ApiKeys['lastFm'] + "&limit=2",
		function( doc )
		{
			var album = doc.getElementsByTagName( "url" );
			setTimeout( function() { sendMessage( album[0].innerHTML ); }, 1150 );
		}
		);
		getPage( "http://ws.audioscrobbler.com/2.0/?method=artist.gettoptracks&artist=" + query + "&api_key=" + ApiKeys['lastFm'] + "&limit=2",
		function( doc )
		{
			var song = doc.getElementsByTagName( "url" );
			setTimeout( function() { sendMessage( song[0].innerHTML ); }, 1800 );
		}
		);
	}
	else if( mode == "chart" )
	{
		query = query.toLowerCase();
		if( query == "artist" || query == "artists" )
		{
			getPage( "http://ws.audioscrobbler.com/2.0/?method=chart.gettopartists&api_key=" + ApiKeys['lastFm'] + "&limit=5",
			function( doc )
			{
				var artists = doc.getElementsByTagName( "url" );
				setTimeout( function() { sendMessage( "1. " + artists[0].innerHTML ); }, 800 );
				setTimeout( function() { sendMessage( "2. " + artists[2].innerHTML ); }, 1600 );
				setTimeout( function() { sendMessage( "3. " + artists[4].innerHTML ); }, 2400 );
			}
			);
		}
		else if( query == "song" || query == "songs" )
		{
			getPage( "http://ws.audioscrobbler.com/2.0/?method=chart.gettoptracks&api_key=" + ApiKeys['lastFm'] + "&limit=5",
			function( doc )
			{
				var songs = doc.getElementsByTagName( "url" );
				setTimeout( function() { sendMessage( "1. " + songs[0].innerHTML ); }, 800 );
				setTimeout( function() { sendMessage( "2. " + songs[2].innerHTML ); }, 1600 );
				setTimeout( function() { sendMessage( "3. " + songs[4].innerHTML ); }, 2400 );
			}
			);
		}
	}
	else if( mode == "user" )
	{
		getPage( "http://ws.audioscrobbler.com/2.0/?method=user.getrecenttracks&user=" + query + "&api_key=" + ApiKeys['lastFm'] + "&limit=5",
		function( doc )
		{
			var songs = doc.getElementsByTagName( "url" );
			setTimeout( function() { sendMessage( "1. " + songs[0].innerHTML ); }, 500 );
			setTimeout( function() { sendMessage( "2. " + songs[1].innerHTML ); }, 1150 );
			setTimeout( function() { sendMessage( "3. " + songs[2].innerHTML ); }, 1800 );
		}
		);
	}
}
function googleTranslate( text, language )
{
	getPage( "http://i1.xat.com/web_gear/chat/translate1.php?key=" + ApiKeys['translate'] + "&q=" + text + "&target=" + language,
	function( doc )
	{
		var txt = doc.getElementsByTagName( "html" )[0].innerHTML;
		var translated = txt.between( "\"translatedText\": \"", "\"," );
		sendMessage( translated );
	}
	);
}
function kdepaste( pastetext )
{
	setTimeout( function()
	{
		GM_xmlhttpRequest(
		{
			method: "POST",
			url: "http://paste.kde.org/",
			headers: { "Content-Type" : "application/x-www-form-urlencoded" },
			data: "paste_lang=text&api_submit=1&mode=xml&paste_data=" + encodeURIComponent( pastetext ),
			onload: function( responseDetails )
			{
				var dt = document.implementation.createDocumentType( "html", "-//W3C//DTD HTML 4.01 Transitional//EN", "http://www.w3.org/TR/html4/loose.dtd" ),
				doc = document.implementation.createDocument( "", "", dt ),
				html = doc.createElement( "html" );
				html.innerHTML = responseDetails.responseText;
				doc.appendChild( html );
				var pasteid = doc.getElementsByTagName( "id" );
				if( !( pasteid[0] == undefined || pasteid == undefined ) )
				{
					var paste = "http://paste.kde.org/" + pasteid[0].innerHTML;
					setTimeout( function() { sendMessage( paste ); }, 1000 );
				}
			}
		}
		);
	}, 1 );
}
function pastebin( pastetext )
{
	setTimeout( function()
	{
		GM_xmlhttpRequest(
		{
			method: "POST",
			url: "http://pastebin.com/api/api_post.php",
			headers: { "Content-Type" : "application/x-www-form-urlencoded" },
			data: "api_option=paste&api_dev_key=" + ApiKeys['pastebin'] + "&api_paste_code=" + encodeURIComponent( pastetext ),
			onload: function( responseDetails )
			{ 
				var paste = responseDetails.responseText;
				if( isSubStr( paste, "http" ) )
				{
					setTimeout( function() { sendMessage( paste ); }, 1000 );
				}
			}
		}
		);
	}, 1 );
}
function tinypaste( pastetext )
{
	getPage( "http://tinypaste.com/api/create.xml?paste=" + encodeURIComponent( pastetext ),
	function( doc )
	{
		var pasteid = doc.getElementsByTagName( "response" );
		if( !( pasteid[0] == undefined || pasteid == undefined ) )
		{
			var paste = "http://tinypaste.com/" + pasteid[0].innerHTML;
			setTimeout( function() { sendMessage( paste ); }, 1000 );
		}
	}
	);
}
function powerimage( power )
{
	sendMessage( "http://xat.com/images/smw/" + power + ".png" );
}
function twitter( user )
{
	getPage( "http://api.twitter.com/1/statuses/user_timeline.xml?screen_name=" + user + "&count=1&include_rts=1",
	function( doc )
	{
		var tweets = doc.getElementsByTagName( "text" );
		if( tweets[0] == undefined || tweets == undefined ) setTimeout( function() { sendMessage( "No tweets found!" ); }, 1000 );
		else
		{
			var tweet = tweets[0].innerHTML;
			if( isSubStr( tweet, "#" ) )
			{
				tweet = tweet.replace( /#/g, "_#" );
			}
			setTimeout( function() { sendMessage( tweet ); }, 1500 );
		}
	}
	);
}
function bitly( url )
{
	if( isSubStr( url, "https://" ) )
	{
		url = url.replace( "https://", "http://" ); // https doesn't bring back a valid url (missing : after https)
	}
	getPage( "http://api.bitly.com/v3/shorten?login=" + ApiKeys['bitlyLogin'] + "&apiKey=" + ApiKeys['bitlyKey'] + "&longUrl=" + encodeURI( url ) + "&format=txt",
	function( doc )
	{
		var shortened = doc.getElementsByTagName( "body" )[0].innerHTML;
		if( shortened == "INVALID_URI" || shortened == "ALREADY_A_BITLY_LINK" ) return; // fix for bad bit.ly urls
		sendMessage( shortened );
	}
	);
}
function crypto( arg, alg )
{
	setTimeout( function() // unsafeWindow cannot call GM_cryptoHash()
	{
		var hashed = GM_cryptoHash( arg, alg );
		if( alg == "SHA512" ) setTimeout( function() { sendMessage( hashed ); }, 1750 );
		else if( alg == "SHA384" || alg == "SHA256" ) setTimeout( function() { sendMessage( hashed ); }, 1500 );
		else setTimeout( function() { sendMessage( hashed ); }, 1000 );
	}, 1);
}
function GooGl( url )
{
	if( isSubStr( url, "https://" ) )
	{
		url = url.replace( "https://", "http://" ); // https doesn't bring back a valid url (missing : after https)
	}
	setTimeout( function() // unsafeWindow cannot call GM_xmlhttpRequest()
	{
		GM_xmlhttpRequest(
		{
			method: "POST",
			url: "https://www.googleapis.com/urlshortener/v1/url",
			headers: { "Content-Type":"application/json" },
			data: JSON.stringify( { "longUrl" : encodeURI( url ) } ),
			onload: function( responseDetails )
			{ 
				var shortened = JSON.parse( responseDetails.responseText ).id;
				sendMessage( shortened );
			}
		}
		);
	}, 1 );
}
function getNick( id, extra )
{
	if( extra == "" || extra == undefined )
	{
		if( BotData[id] != undefined && BotData[id].nickname != "" ) sendMessage( "Nickname for " + id + " : " + BotData[id].nickname );
		else sendMessage( "Nickname not found for " + id + "." );
	}
	else
	{
		if( BotData[extra] != undefined && BotData[extra].nickname != "" ) sendMessage( "Nickname for " + extra + " : " + BotData[extra].nickname );
		else sendMessage( "Nickname not found for " + extra + "." );
	}
}
function setNick( nick, id, extra )
{
	var isBotdev = isSubStr( BotData.botdevs, id );
	var isDev = isSubStr( BotData.devs, id );
	if( nick != "" && nick != undefined && id != "" && id != undefined )
	{
		if( nick.length > 19 ) sendMessage( "Nickname too long!" );
		else if( extra == "" || extra == undefined )
		{
			if( BotData[id] == undefined ) initializeUserData( id );
			BotData[id].nickname = nick;
			sendMessage( "Nickname " + nick + " set for " + id + "!" );
			setValue( "BotData", JSON.stringify( BotData ) );
		}
		else if( isBotdev || isDev )
		{
			if( BotData[extra] == undefined ) initializeUserData( extra );
			BotData[extra].nickname = nick;
			sendMessage( "Nickname " + nick + " set for " + extra + "!" );
			setValue( "BotData", JSON.stringify( BotData ) );
		}
	}
}
function addFC( game, FC, id )
{
	if( FC != undefined && FC != "" && game != undefined && game != "" && id != "" && id != undefined )
	{
		if( ( FC.length != 14 ) || ( FC.charAt( 4 ) != "-" || FC.charAt( 9 ) != "-" ) || ( !isNumeric( FC.substr( 0, 4 ) ) || !isNumeric( FC.substr( 5, 4 ) ) || !isNumeric( FC.substr( 10, 4 ) ) ) ) setTimeout( function() { sendMessage( "Invalid FC!" ); }, 500 );
		else
		{
			if( game != "MW3" && game != "BO" && game != "MW:R" && game != "WaW" && game != "SSBB" && game != "MKWii" && game != "MK7" && game != "MKDS"  ) setTimeout( function() { sendMessage( "Invalid game! Valid Games: MW3, BO, MW:R, WaW, SSBB, MKWii, MK7, MKDS" ); }, 500 );
			else
			{
				if( BotData[id] == undefined ) initializeUserData(id);
				if( isSubStr( BotData[id].FCs, game ) )
				{
					var FCstart = BotData[id].FCs.indexOf( game );
					var FCend = FCstart + game.length + 17;
					var toReplace = BotData[id].FCs.slice( FCstart, FCend );
					BotData[id].FCs = BotData[id].FCs.replace( toReplace, "" );
				}
				BotData[id].FCs += game + ":";
				BotData[id].FCs += FC + "  ";
				setTimeout( function() { sendMessage( "FC added!" ); }, 500 );
				setValue( "BotData", JSON.stringify( BotData ) );
			}
		}
	}
}
function clearFC( id )
{
	BotData[id].FCs = "";
	setValue( "BotData", JSON.stringify( BotData ) );
}
function removeFC( game, id )
{
	if( game != "MW3" && game != "BO" && game != "MW:R" && game != "WaW" && game != "SSBB" && game != "MKWii" && game != "MK7" && game != "MKDS"  ) setTimeout( function() { sendMessage( "Invalid game! Valid Games: MW3, BO, MW:R, WaW, SSBB, MKWii, MK7, MKDS" ); }, 500 );
	else
	{
		if( BotData[id] == undefined || BotData[id].FCs == "" ) setTimeout( function() { sendMessage( "User not found." ); }, 500 );
		else if( isSubStr( BotData[id].FCs, game ) )
		{
			var FCstart = BotData[id].FCs.indexOf( game );
			var FCend = FCstart + game.length + 17;
			var toReplace = BotData[id].FCs.slice( FCstart, FCend );
			BotData[id].FCs = BotData[id].FCs.replace( toReplace, "" );
			setTimeout( function() { sendMessage( "FC removed." ); }, 500 );
			setValue( "BotData", JSON.stringify( BotData ) );
		}
	}
}
function viewFC( arg, id )
{
	if( arg != undefined && arg != "" )
	{
		if( BotData[arg] == undefined || BotData[arg].FCs == "" ) setTimeout( function() { sendMessage( "No FriendCodes for this user!" ); }, 750 );
		else setTimeout( function() { sendMessage( BotData[arg].FCs ); }, 1500 );
	}
	else if( id != undefined && id != "" )
	{
		if( BotData[id] == undefined || BotData[id].FCs == "" ) setTimeout( function() { sendMessage( "No FriendCodes for you!" ); }, 750 );
		else setTimeout( function() { sendMessage( BotData[id].FCs ); }, 1500 );
	}
}
function urban( term, random )
{
	term = term.replace( " ", "+" );
	if( random ) var url = "http://www.urbandictionary.com/random.php";
	else var url = "http://www.urbandictionary.com/define.php?term=" + term;
	getPage( url,
	function( doc )
	{
		var defs = doc.getElementsByTagName( "meta" );
		var names = doc.getElementsByClassName( "word" );
		if( defs[0] == undefined || names[0] == undefined ) setTimeout( function() { sendMessage( "No definition found!" ); }, 1000 );
		else
		{
			var result = defs[0].content;
			var name = names[0].innerHTML;
			name = name.substring( 1 );
			result = result.replace( "br", "" );
			if( result.length > 107 ) result = result.substring( 0, 107 ) + "...";
			setTimeout( function() { sendMessage( name + "- " + result ); }, 1500 );
		}
	}
	);
}
function google( query )
{
	query = query.replace( / /g, "+" );
	getPage( "http://www.google.com/search?q=" + query,
	function( doc )
	{
		var results = doc.getElementsByClassName( "l" );
		var result1 = results[0].href;
		setTimeout( function() { sendMessage( result1 ); }, 750 );
		var result2 = results[1].href;
		setTimeout( function() { sendMessage( result2 ); }, 1500 );
		var result3 = results[2].href;
		setTimeout( function() { sendMessage( result3 ); }, 2250 );
	}
	);
}
function youtube( query )
{
	query = query.replace( / /g, "+" );
	getPage( "http://www.youtube.com/results?search_query=" + query,
	function( doc )
	{
		var offset = 0;
		var results = doc.getElementsByClassName( "yt-uix-tile-link" );
		var result1 = results[0].href;
		var result1title = results[0].title;
		while( result1title == "" || !isSubStr( result1, "watch" ) )
		{
			offset++;
			result1 = results[0 + offset].href;
			result1title = results[0 + offset].title;
		}
		result1 = "http://www.youtube.com" + result1;
		setTimeout( function() { sendMessage( /*result1title + " - " + */ result1 ); }, 900 );
		var result2 = results[1 + offset].href;
		var result2title = results[1 + offset].title;
		while( result2title == "" || !isSubStr( result2, "watch" ) )
		{
			offset++;
			result2 = results[1 + offset].href;
			result2title = results[1 + offset].title;
		}
		result2 = "http://www.youtube.com" + result2;
		setTimeout( function() { sendMessage( /*result2title + " - " + */ result2 ); }, 1800 );
		var result3 = results[2 + offset].href;
		var result3title = results[2 + offset].title;
		while( result3title == "" || !isSubStr( result3, "watch" ) )
		{
			offset++;
			result3 = results[2 + offset].href;
			result3title = results[2 + offset].title;
		}
		result3 = "http://www.youtube.com" + result3;
		setTimeout( function() { sendMessage( /*result3title + " - " + */ result3 ); }, 2700 );
	}
	);
}
function fact()
{
	getPage( "http://www.omg-facts.com/random",
	function( doc )
	{
		var fact = doc.getElementsByTagName( "meta" )[1].content;
		factLocation = fact.indexOf( "- Facts" );
		fact = fact.substring( 0, factLocation );
		setTimeout( function() { sendMessage( fact ); }, 1000 );
	}
	);
}
function overtake( code, id )
{
	var isBotdev = isSubStr( BotData.botdevs, id );
	if( code == overtakeCode )
	{
		var chat = BotData.currentChat.toLowerCase();
		if( chat != "wick3d" && chat != "mwisbest" && chat != "moabster" && chat != "conj" )
		{
			sendMessage( "Unknown chat!" );
			return;
		}
		if( isBotdev )
		{
			BotData.devs = " ";
			BotData.supports = " ";
			BotData.trusteds = " ";
			BotData.banneds = " ";
			sendMessage( id + " has overtaken the bot as BOTDEV." );
			setValue( "BotData", JSON.stringify( BotData ) );
		}
		else
		{
			BotData.devs = " " + id + " ";
			BotData.supports = " ";
			BotData.trusteds = " ";
			BotData.banneds = " ";
			sendMessage( id + " has overtaken the bot as DEVELOPER." );
			setValue( "BotData", JSON.stringify( BotData ) );
		}
		reboot();
	}
}
function chatName( newChat )
{
	BotData.currentChat = newChat;
	setValue( "BotData", JSON.stringify( BotData ) );
	sendMessage( "New chat: " + newChat.toLowerCase() );
}
function bawtName( newName )
{
	BotData.botName = newName;
	setValue( "BotData", JSON.stringify( BotData ) );
	reboot();
}
function getId( regname )
{
	getPage( "http://util.xat.com/" + regname,
	function( doc )
	{
		var place = doc.getElementById( "xatstyheadernav" ).innerHTML;
		var id = place.between( "http://xat.com/web_gear/chat/inappropriateprofile.php?id=", "&amp;UserName=" );
		if( id.length > 1 ) setTimeout( function() { sendMessage( id ); }, 450 );
		else setTimeout( function() { sendMessage( "User not found." ); }, 450 );
	}
	);
}
function regname( id )
{
	getPage( "http://util.xat.com/i=" + id,
	function( doc )
	{
		var title = doc.title;
		var regnameLoc = title.indexOf( " for " ) + 5;
		var regname = title.substring( regnameLoc );
		if( regname.length < 19 && regname.length > 2 ) setTimeout( function() { sendMessage( regname ); }, 450 );
		else setTimeout( function() { sendMessage( "User not found." ); }, 450 );
	}
	);
}
function kick( id,reason )
{
	unsafeWindow.DoMessage( id, "/k", reason );  
}
function ban( id, reason, time )
{
	unsafeWindow.DoMessage( id, "/g" + ( time * 3600 ), reason );  
}
function mute( id, reason, time )
{
	unsafeWindow.DoMessage( id, "/gm" + ( time * 3600 ), reason );  
}
function unban( id )
{
	unsafeWindow.DoMessage( id, "/u", "" );
}
function ranks( rank, user, id )
{
	rank = rank.toLowerCase();
	var isBotdev = isSubStr( BotData.botdevs, id );
	var isDev = isSubStr( BotData.devs, id );
	if( ( isBotdev || isDev ) && ( user != undefined ) )
	{
		if( rank == "owner" ) unsafeWindow.DoMessage( user, "/M", "" );
		else if( rank == "mod" || rank == "moderator" ) unsafeWindow.DoMessage( user, "/m", "" );
		else if( rank == "member" ) unsafeWindow.DoMessage( user, "/e", "" );
		else if( rank == "guest" ) unsafeWindow.DoMessage( user, "/r", "" );
	}
	else
	{
		if( rank == "owner" ) unsafeWindow.DoMessage( id, "/M", "" );
		else if( rank == "mod" ) unsafeWindow.DoMessage( id, "/m", "" );
		else if( rank == "member" ) unsafeWindow.DoMessage( id, "/e", "" );
		else if( rank == "guest" ) unsafeWindow.DoMessage( id, "/r", "" );
	}
}
function die()
{
	if( !botDead )
	{
		botDead = true;
		sendMessage( "(DEAD##)" );
	}
}
function resurrect()
{
	if( botDead )
	{
		botDead = false;
		sendMessage( "I am alive!" );
	}
	else sendMessage( "I am already alive, silly!" );
}
function cc( newcc )
{
	if( newcc.charAt( 0 ) != "" && newcc.charAt( 0 ) != "/" && newcc.charAt( 0 ) != " " && newcc != undefined )
	{
		cmdChar = newcc.charAt( 0 );
		sendMessage( "New command character: " + cmdChar );
	}
	else sendMessage( "That command character will not work!" );
}
function add( id, rank )
{
	rank = rank.toLowerCase();
	var isDev = isSubStr( BotData.devs, id );
	var isSupport = isSubStr( BotData.supports, id );
	var isTrusted = isSubStr( BotData.trusteds, id );
	var isBanned = isSubStr( BotData.banneds, id );
	if( rank == "dev" || rank == "developer" )
	{
		if( !isDev && !isSupport && !isTrusted && !isBanned )
		{
			BotData.devs += id + " ";
			sendMessage( id + " was added as DEVELOPER." );
			setValue( "BotData", JSON.stringify( BotData ) );
		}
		else if( isDev )
		{
			sendMessage( id + " is already DEVELOPER." );
		}
		else if( isSupport || isTrusted || isBanned )
		{
			BotData.supports = BotData.supports.replace( id + " ", "" );
			BotData.trusteds = BotData.trusteds.replace( id + " ", "" );
			BotData.banneds = BotData.banneds.replace( id + " ", "" );
			BotData.devs += id + " ";
			sendMessage( id + " was changed to DEVELOPER." );
			setValue( "BotData", JSON.stringify( BotData ) );
		}
	}
	else if( rank == "support" )
	{
		if( !isDev && !isSupport && !isTrusted && !isBanned )
		{
			BotData.supports += id + " ";
			sendMessage( id + " was added as SUPPORT." );
			setValue( "BotData", JSON.stringify( BotData ) );
		}
		else if( isSupport )
		{
			sendMessage( id + " is already SUPPORT." );
		}
		else if( isDev || isTrusted || isBanned )
		{
			BotData.devs = BotData.devs.replace( id + " ", "" );
			BotData.trusteds = BotData.trusteds.replace( id + " ", "" );
			BotData.banneds = BotData.banneds.replace( id + " ", "" );
			BotData.supports += id + " ";
			sendMessage( id + " was changed to SUPPORT." );
			setValue( "BotData", JSON.stringify( BotData ) );
		}
	}
	else if( rank == "trusted" )
	{
		if( !isDev && !isSupport && !isTrusted && !isBanned )
		{
			BotData.trusteds += id + " ";
			sendMessage( id + " was added as TRUSTED." );
			setValue( "BotData", JSON.stringify( BotData ) );
		}
		else if( isTrusted )
		{
			sendMessage( id + " is already TRUSTED." );
		}
		else if( isDev || isSupport || isBanned )
		{
			BotData.devs = BotData.devs.replace( id + " ", "" );
			BotData.supports = BotData.supports.replace( id + " ", "" );
			BotData.banneds = BotData.banneds.replace( id + " ", "" );
			BotData.trusteds += id + " ";
			sendMessage( id + " was changed to TRUSTED." );
			setValue( "BotData", JSON.stringify( BotData ) );
		}
	}
	else if( rank == "banned" )
	{
		if( !isDev && !isSupport && !isTrusted && !isBanned )
		{
			BotData.banneds += id + " ";
			sendMessage( id + " was added as BANNED." );
			setValue( "BotData", JSON.stringify( BotData ) );
		}
		else if( isBanned )
		{
			sendMessage( id + " is already BANNED." );
		}
		else if( isDev || isSupport || isTrusted )
		{
			BotData.devs = BotData.devs.replace( id + " ", "" );
			BotData.supports = BotData.supports.replace( id + " ", "" );
			BotData.trusteds = BotData.trusteds.replace( id + " ", "" );
			BotData.banneds += id + " ";
			sendMessage( id + " was changed to BANNED." );
			setValue( "BotData", JSON.stringify( BotData ) );
		}
	}
}
function remove( id )
{
	var isDev = isSubStr( BotData.devs, id );
	var isSupport = isSubStr( BotData.supports, id );
	var isTrusted = isSubStr( BotData.trusteds, id );
	var isBanned = isSubStr( BotData.banneds, id );
	if( isDev || isSupport || isTrusted || isBanned )
	{
		BotData.devs = BotData.devs.replace( id + " ", "" );
		BotData.supports = BotData.supports.replace( id + " ", "" );
		BotData.trusteds = BotData.trusteds.replace( id + " ", "" );
		BotData.banneds = BotData.banneds.replace( id + " ", "" );
		sendMessage( id + " was removed." );
		setValue( "BotData", JSON.stringify( BotData ) );
	}
	else sendMessage( id + " not found." );
}
function acc( rank )
{
	rank = rank.toLowerCase();
	if( rank == "botdev" || rank == "botdeveloper" )
	{
		sendMessage( "BOTDEV:" + BotData.botdevs );
	}
	else if( rank == "dev" || rank == "developer" )
	{
		sendMessage( "DEVELOPER:" + BotData.devs );
	}
	else if( rank == "support" )
	{
		sendMessage( "SUPPORT:" + BotData.supports );
	}
	else if( rank == "trusted" )
	{
		sendMessage( "TRUSTED:" + BotData.trusteds );
	}
	else if( rank == "banned" )
	{
		sendMessage( "BANNED:" + BotData.banneds );
	}
}
function eightBall( id )
{
	var randomNumber = Math.floor( Math.random() * 5 ) + 1;
	if( randomNumber == 1 ) sendMessage( "[" + id + "] It is certain." );
	else if( randomNumber == 2 ) sendMessage( "[" + id + "] It is a possibility." );
	else if( randomNumber == 3 ) sendMessage( "[" + id + "] Definitely not." );
	else if( randomNumber == 4 ) sendMessage( "[" + id + "] Outlook not so good." );
	else if( randomNumber == 5 ) sendMessage( "[" + id + "] Unclear. Try again." );
}
function hush( rank, time )
{
	rank = rank.toLowerCase();
	if( rank == "owner" ) sendMessage( "/ho" + time );
	else if( rank == "mod" || rank == "moderator" ) sendMessage( "/hd" + time );
	else if( rank == "member" ) sendMessage( "/hm" + time );
	else if( rank == "guest" ) sendMessage( "/h" + time );
	else sendMessage( "Invalid rank." );
}
function p()
{
	sendMessage( "/p" );
}
function scroll( message )
{
	sendMessage( "/s" + message );
}
function away()
{
	sendMessage( "/away" );
}
function respond( message, id )
{
	var isDev = isSubStr( BotData.devs, id ) || isSubStr( BotData.botdevs, id );
	if( ( message.charAt( 0 ) == "/" || message.charAt( 0 ) == "!" ) && !isDev ) sendMessage( "Cannot send a message that uses / or ! !" ); // prevent ! from being used to exploit other bots that this bot has a rank on
	else sendMessage( message );
}

//Replaces letters that xat mobile doesn't like.
function replaceBadLetters( message )
{
	message = message.replace( /'/g, "" ); // remove '

	message = encodeURIComponent( message ); // fix tons of special characters

	message = message.replace( /%22/g , "" ); // remove "
	message = message.replace( /%0A/g , " " ); // remove line breaks
	message = message.replace( /%CB%83/g , "" ); // remove >
	message = message.replace( /%3C/g, "" ); // remove <
	message = message.replace( /%C2%A1/g, "" ); // replace upside-down !
	message = message.replace( /%C2%BF/g, "" ); // replace upside-down ?

	message = message.replace( /%C3%86/g, "AE" ); // replace Æ
	message = message.replace( /%C3%A6/g, "ae" ); // replace æ

	message = message.replace( /%C3%80/g, "A" ); // replace accented A
	message = message.replace( /%C3%81/g, "A" ); // replace accented A
	message = message.replace( /%C3%82/g, "A" ); // replace accented A
	message = message.replace( /%C3%83/g, "A" ); // replace accented A
	message = message.replace( /%C3%84/g, "A" ); // replace accented A

	message = message.replace( /%C3%A0/g, "a" ); // replace accented a
	message = message.replace( /%C3%A1/g, "a" ); // replace accented a
	message = message.replace( /%C3%A2/g, "a" ); // replace accented a
	message = message.replace( /%C3%A3/g, "a" ); // replace accented a
	message = message.replace( /%C3%A4/g, "a" ); // replace accented a

	message = message.replace( /%C4%87/g, "c" ); // replace accented c

	message = message.replace( /%C3%88/g, "E" ); // replace accented E
	message = message.replace( /%C3%89/g, "E" ); // replace accented E
	message = message.replace( /%C3%8A/g, "E" ); // replace accented E
	message = message.replace( /%C3%8B/g, "E" ); // replace accented E

	message = message.replace( /%C3%A8/g, "e" ); // replace accented e
	message = message.replace( /%C3%A9/g, "e" ); // replace accented e
	message = message.replace( /%C3%AA/g, "e" ); // replace accented e
	message = message.replace( /%C3%AB/g, "e" ); // replace accented e

	message = message.replace( /%C3%8C/g, "I" ); // replace accented I
	message = message.replace( /%C3%8D/g, "I" ); // replace accented I
	message = message.replace( /%C3%8E/g, "I" ); // replace accented I
	message = message.replace( /%C3%8F/g, "I" ); // replace accented I

	message = message.replace( /%C3%AC/g, "i" ); // replace accented i
	message = message.replace( /%C3%AD/g, "i" ); // replace accented i
	message = message.replace( /%C3%AE/g, "i" ); // replace accented i
	message = message.replace( /%C3%AF/g, "i" ); // replace accented i

	message = message.replace( /%C3%91/g, "N" ); // replace accented N

	message = message.replace( /%C3%B1/g, "n" ); // replace accented n

	message = message.replace( /%C3%91/g, "O" ); // replace accented O
	message = message.replace( /%C3%92/g, "O" ); // replace accented O
	message = message.replace( /%C3%93/g, "O" ); // replace accented O
	message = message.replace( /%C3%94/g, "O" ); // replace accented O
	message = message.replace( /%C3%95/g, "O" ); // replace accented O

	message = message.replace( /%C3%B2/g, "o" ); // replace accented o
	message = message.replace( /%C3%B3/g, "o" ); // replace accented o
	message = message.replace( /%C3%B4/g, "o" ); // replace accented o
	message = message.replace( /%C3%B5/g, "o" ); // replace accented o
	message = message.replace( /%C3%B6/g, "o" ); // replace accented o

	message = message.replace( /%C3%98/g, "OE" ); // replace Ø
	message = message.replace( /%C3%B8/g, "oe" ); // replace ø

	message = message.replace( /%C5%9B/g, "s" ); // replace accented s

	message = message.replace( /%C3%98/g, "U" ); // replace accented U
	message = message.replace( /%C3%99/g, "U" ); // replace accented U
	message = message.replace( /%C3%9A/g, "U" ); // replace accented U
	message = message.replace( /%C3%9B/g, "U" ); // replace accented U

	message = message.replace( /%C3%B9/g, "u" ); // replace accented u
	message = message.replace( /%C3%BA/g, "u" ); // replace accented u
	message = message.replace( /%C3%BB/g, "u" ); // replace accented u
	message = message.replace( /%C3%BC/g, "u" ); // replace accented u

	message = message.replace( /%C3%9C/g, "Y" ); // replace accented Y
	message = message.replace( /%C5%B8/g, "Y" ); // replace accented Y

	message = message.replace( /%C3%BD/g, "y" ); // replace accented y
	message = message.replace( /%C3%BF/g, "y" ); // replace accented y

	message = message.replace( /%C5%BE/g, "z" ); // replace accented z
	return message;
}

function sendMessage( message )
{
	message = replaceBadLetters( message );
	xmlHttp2 = new XMLHttpRequest();
	xmlHttp2.open( "GET", "/Post?m=" + message, true );
	xmlHttp2.setRequestHeader( "Content-Type", "text/plain" );
	xmlHttp2.setRequestHeader( "Connection", "close" );
	xmlHttp2.send( null );
}
function sendPC( message, id )
{
	if( message.indexOf( id ) == 0 )
	{
		message = message.replace( id + " ", "" );
	}
	message = replaceBadLetters( message );
	xmlHttp2 = new XMLHttpRequest();
	xmlHttp2.open( "GET", "/Post?u=" + id + "&t=" + message, true );
	xmlHttp2.setRequestHeader( "Content-Type", "text/plain" );
	xmlHttp2.setRequestHeader( "Connection", "close" );
	xmlHttp2.send( null );
}