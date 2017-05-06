import Mongoose from 'mongoose';

const mongoConn = Mongoose.connect('mongodb://localhost:27017/trains', (err) => {
    if(err){
        console.error('Could not connect to MongoDB on port 27017');
    }
    else {
        console.log('Connected to mongo!!!')
    }
});

export { mongoConn };