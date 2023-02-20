const mongoose = require('mongoose');


export const setupDb = async (mongoURL) => {

const connect = await mongoose.connect(mongoURL);

connect.connection.addListener('connect', () => {
console.log('MongoDB was connected');
});
return connect;
};