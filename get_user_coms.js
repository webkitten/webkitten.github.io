var Datastore = require( 'nedb' );

var MongoClient = require( 'mongodb' ).MongoClient;
var MongoUrl = 'mongodb://localhost:27017/allpikabu2';
var MongoCollaction = 'allpikabu2';
// sad
var user1 = new Datastore( { filename: 'user1.db', autoload: true } );
var user2 = new Datastore( { filename: 'user2.db', autoload: true } );
var user3 = new Datastore( { filename: 'user3.db', autoload: true } );
var user4 = new Datastore( { filename: 'user4.db', autoload: true } );
var user5 = new Datastore( { filename: 'user5.db', autoload: true } );

var seenDocs = 0;

var users = {
  "user1": "SomeUser1",
  "user2": "SomeUser2",
  "user3": "SomeUser3",
  "user4": "SomeUser4",
  "user5": "SomeUser5"
};


MongoClient.connect( MongoUrl, ( err, db ) => {
  err && console.log( err );
  var collection = db.collection( MongoCollaction );
  collection.count({}, function( err, numOfDocs ) {
    err && console.log( err );
    setInterval(function() {
      console.log( seenDocs + "/" + numOfDocs );
    }, 10000);
    collection.find({}).forEach(function(doc) {
      seenDocs++;
      let postComs = doc['comments'];
      if( postComs ) {
        for( let c = 0; c < postComs.length; c++ ) {
          let com = postComs[c];
          if( com.comment_author === users['user1'] ) {
            com.link = doc.link + "#comment_" + com.comment_id;
            user1.insert( com, function ( err, newDoc ) {});
          } else if( com.comment_author === users['user2'] ) {
            com.link = doc.link + "#comment_" + com.comment_id;
            user2.insert( com );
          } else if( com.comment_author === users['user3'] ) {
            com.link = doc.link + "#comment_" + com.comment_id;
            user3.insert( com );
          } else if( com.comment_author === users['user4'] ) {
            com.link = doc.link + "#comment_" + com.comment_id;
            user4.insert( com );
          } else if( com.comment_author === users['user5'] ) {
            com.link = doc.link + "#comment_" + com.comment_id;
            user5.insert( com );
          }
        }
      }
    }, function( err ) {
      console.log( err );
    });
  })
})