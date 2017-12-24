import Mongoose from 'mongoose';

const CarSchema = Mongoose.Schema({
  name: { type: String, required: true, unique: true, index: true },
  speed: { type: Number, required: false, unique: false, index: false },
}, { collection: 'Car' });

const CarModel = Mongoose.model('Car', CarSchema);

export { CarModel };
