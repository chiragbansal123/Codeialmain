const mongoose=require('mongoose');
const env = require('./environment');
mongoose.connect(`mongodb+srv://chiragb184:bansal184@cluster0.lne9m.mongodb.net/${env.db}`);
const db=mongoose.connection;
db.on('error',console.error.bind(console,"Error connecting to database"));
db.once('open', function(){
    console.log('Connected to Database :: MongoDB');
});
module.exports=db;