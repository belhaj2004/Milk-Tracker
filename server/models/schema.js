const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
    username: {type:String, required:true},
    name: {type:String, required:true},
});

const entrySchema = new Schema({
    amount: {type:String, required:true},
    user: {type:Schema.Types.ObjectId, ref:'users'}
});

const Users = mongoose.model('users', userSchema, 'users');
const Entry = mongoose.model('entry', entrySchema, 'entry');
const mySchemas = {'Users':Users, 'Entry':Entry};

module.exports = mySchemas;