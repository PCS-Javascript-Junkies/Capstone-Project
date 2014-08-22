var yelp = require("yelp").createClient({
  consumer_key: "8bwLib9ZGlwEh8vuZvIJwA", 
  consumer_secret: "8FO6lp2UHpJPxIj33AJz2Gpq0Zg",
  token: "QJ1OT2cuLv6pHEojeOxyrXbpSjef4t-Z",
  token_secret: "bq9snW2XB6wne5Td9HmeYDFPBLY"
});

// See http://www.yelp.com/developers/documentation/v2/search_api
yelp.search({term: "discgolf", "hiking", "lakes", "parks", "swimmmingpools", "minigolf", "bikerentals", location: "Portland"}, function(error, data) {
  console.log(error);
  console.log(data);
});

// See http://www.yelp.com/developers/documentation/v2/business
yelp.business("yelp-Portland", function(error, data) {
  console.log(error);
  console.log(data);
});