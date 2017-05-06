import Mongoose from 'mongoose';

const TrainSchema = Mongoose.Schema({
    name: {type: String, required: true},
    speed: {type: Number, required: true},
    diesel: {type: Boolean, required: false}
}, {collection : 'Train'});

const TrainModel= Mongoose.model('Train', TrainSchema);

export { TrainModel };