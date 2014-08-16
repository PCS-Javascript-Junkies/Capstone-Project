// <script type="text/javascript" src="http://ajax.googleapis.com/ajax/libs/jquery/1.4.4/jquery.min.js"></script>
// <script type="text/javascript" src="http://oauth.googlecode.com/svn/code/javascript/oauth.js"></script>
// <script type="text/javascript" src="http://oauth.googlecode.com/svn/code/javascript/sha1.js"></script>

$ = require("../../node_modules/jquery")(window);

$.when(
    $.getScript( "http://ajax.googleapis.com/ajax/libs/jquery/1.4.4/jquery.min.js" ),
    $.getScript( "http://oauth.googlecode.com/svn/code/javascript/oauth.js" ),
    $.getScript( "http://oauth.googlecode.com/svn/code/javascript/sha1.js" ),
    $.Deferred(function( deferred ){
        $( deferred.resolve );
    })
).done(function(){

            // Really we can break down the following code  into these sections:
            // 1) populating the  message to Google in the proper format they want
            // 2) making a request to Google for a token and authorization key
            // 3) taking our response from Google and sending it to yelp (Tricky tricky)

// Section 1: populating the message request

            // Google once the consumer keys and tokens in terms all to be in a certain format
            // So it's easier to just start organizing the into object variables, here we are creating
            // An authorization object  with all of our yelp consumer information
            // Google won't actually do anything with this information, but it needs to be in the message to Google
            //  because their APIs expecting these keys to be a certain part of message
            var auth = {
                consumerKey : "RJFp3rk_b9tsJv7dZTt9-w",
                consumerSecret : "-0pEjAPEzXcoZ2iCiqMhOIHfyAI",
                accessToken : "zPLB_TEBvUum9pXuIbcLKJ1zazumSkZ0",
                accessTokenSecret : "Tk94nPTKK0yL4bHebIHBdDUDG3A", // You wouldn't actually want to expose your access token secret like this in a real application.
                serviceProvider : {
                    signatureMethod : "HMAC-SHA1"  // This is the center method that the Google API wants
                }
            };

            // Here we are passing in the relevant search terms
            var terms = 'food';
            var near = 'Portland';

            //Here's your actually populating the Google API message
            //They apparently wanted in a  form such as this:
            //{[terms],[Location],[Callback function name],[Consumer key],[Consumer secret],[Access token],[Signature method]}
            var accessor = {
                consumerSecret : auth.consumerSecret,
                tokenSecret : auth.accessTokenSecret
            };
            parameters = [];
            parameters.push(['term', terms]);
            parameters.push(['location', near]);
            parameters.push(['callback', 'cb']);
            parameters.push(['oauth_consumer_key', auth.consumerKey]);
            parameters.push(['oauth_consumer_secret', auth.consumerSecret]);
            parameters.push(['oauth_token', auth.accessToken]);
            parameters.push(['oauth_signature_method', 'HMAC-SHA1']);
// End of section 1
// Section 2: Sending the message to Google to get a timestamp
            //This is where we start populating our actual message
            //Google once to see that you're sending a message "object" But isn't
            //actually making the request to yelp for us for doing that later
            //So here we are reformatting our message  with the  1st part of the url
            //And  arbitrarily  specifying a method forget and parameters
            var message = {
                'action' : 'http://api.yelp.com/v2/search',
                'method' : 'GET',
                'parameters' : parameters
            };

            //Here's our actual request to Google to get  a timestamp and signature
            OAuth.setTimestampAndNonce(message);
            OAuth.SignatureMethod.sign(message, accessor);
//End of section 2
//Section 3: taking our response from Google and sending it to yelp
            //So we made a request to Google now we need to catch it in a variable
            var parameterMap = OAuth.getParameterMap(message.parameters);
            console.log("Parameters we send to yelp---->",parameterMap);

            //Ajax methods   which is basically an asynchronous way to get information from
            //Another website, a built-in part of J query. You can access the data through the success function
            //Or  through a callback function. The reason we have both is the success method which you'll see later
            //Is used right away as soon as you get the information back, If we wanted to pass that information
            //To another function we would need a callback function.  So long story short  we don't need the following function
            function cb(data){
              console.log("Bam we are in the cb funciton!--->", data);
            }

            $.ajax({
                'url' : message.action,   //Finally  sending to yelp
                'data' : parameterMap,    //Our list of parameters
                'dataType' : 'jsonp',     //Sending it as Jason P because were not bad people
                'jsonpCallback' : 'cb',   //Specifying a call back for Ajax so that we can send the data somewhere else if we wanted to
                'success' : function(data, textStats, XMLHttpRequest) {  //Success function will fire if we get a successful response

                    //I output to the console the data so you can see it when you inspect element on the local host 3000 page
                    console.log("Data We get back from yelp --->",data);
                    //Just for fun I output it to the page and attach it to a div
                    for(i=0; i<10; ++i){
                    $("#here").append("<div>" + data.businesses[i].name + "</div>");
                  }
                }
            });
//End of section 3

});
