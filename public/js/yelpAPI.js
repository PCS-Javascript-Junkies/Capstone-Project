var prevResults ={};

function yelpAPI(bounds, array, callback){
    var randInt = Math.floor((Math.random() * array.length) + 0);
    var result={};
    var slef = this;
      $.getScript( "http://oauth.googlecode.com/svn/code/javascript/oauth.js", function() {
        $.getScript( "http://oauth.googlecode.com/svn/code/javascript/sha1.js", function () {
            var auth = {
                consumerKey : "RJFp3rk_b9tsJv7dZTt9-w",
                consumerSecret : "-0pEjAPEzXcoZ2iCiqMhOIHfyAI",
                accessToken : "zPLB_TEBvUum9pXuIbcLKJ1zazumSkZ0",
                accessTokenSecret : "Tk94nPTKK0yL4bHebIHBdDUDG3A",
                serviceProvider : {
                    signatureMethod : "HMAC-SHA1"
                }
            };

            randInt = Math.floor((Math.random() * array.length) + 0);

            var terms = array[randInt];
            var boundit = bounds;


            var accessor = {
                consumerSecret : auth.consumerSecret,
                tokenSecret : auth.accessTokenSecret
            };
            parameters = [];
            parameters.push(['term', terms]);
            parameters.push(['bounds', boundit]);
            parameters.push(['callback', 'cb']);
            parameters.push(["oauth_consumer_key", auth.consumerKey]);
            parameters.push(['oauth_consumer_secret', auth.consumerSecret]);
            parameters.push(['oauth_token', auth.accessToken]);
            parameters.push(['oauth_signature_method', 'HMAC-SHA1']);

            var message = {
                'action' : 'http://api.yelp.com/v2/search',
                'method' : 'GET',
                'parameters' : parameters
            };


            OAuth.setTimestampAndNonce(message);
            OAuth.SignatureMethod.sign(message, accessor);

            var parameterMap = OAuth.getParameterMap(message.parameters);
            console.log("Parameters we send to yelp---->",parameterMap);

            function cb(data){
              //not needed
            }

            $.ajax({
                'url' : message.action,
                'data' : parameterMap,
                'dataType' : 'jsonp',
                'jsonpCallback' : 'cb',
                'success' : function(data, textStats, XMLHttpRequest) {
                    console.log("Data We get back from yelp --->",data);
                    var max;

                    if(data.businesses.length < 10)
                      max = data.businesses.length;
                    else
                      max = 10;

                    var randInt = Math.floor((Math.random() * max) + 0);
                    if(data.total > 0 && (prevResults.hasOwnProperty(data.businesses[randInt].name) === false)){
           
                        console.log(randInt);

                        prevResults[data.businesses[randInt].name] = data.businesses[randInt].name;

                        result.name = data.businesses[randInt].name;
                        result.address = data.businesses[randInt].location.address[0];
                        result.gps = data.businesses[randInt].location.coordinate;
                        result.rating = data.businesses[randInt].rating_img_url;
                        result.phoneNumber = data.businesses[randInt].display_phone;
                        result.ratingCount = data.businesses[randInt].review_count;
                        result.yelpInfoLink = data.businesses[randInt].url;
                        if(data.businesses[randInt].image_url !== undefined){
                            result.img = data.businesses[randInt].image_url;
                        } else { result.img = "./img/PortlandSign.jpg"};
                        callback();

                    }else{
                        self.yelpAPI(bounds, array, callback);
                    }

                }
            });
        });
    });
return result;
}
