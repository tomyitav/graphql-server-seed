import { pubsub } from '../subscriptions/subscriptions';
import { CarModel } from '../../db/cars';
import logger from '../../core/logger/app-logger';

const resolveFunctions = {
  Query: {
    car(_, { name, speed }) {
      const where = {};
      if (name) {
        Object.assign(where, { name });
      }
      if (speed) {
        Object.assign(where, { speed });
      }
      return CarModel.find(where, (err, cars) => {
        if (err) {
          logger.error('Error- ', err);
        }
      });
    },

  },
  Mutation: {
    updateCar(_, { currName, newName, newSpeed }) {
      const where = {},
        change = {};
      Object.assign(where, { name: currName });
      if (newName) {
        logger.info(`Updating  ${currName} with new name ${newName}`);
        Object.assign(change, { name: newName });
      }
      if (newSpeed) {
        logger.info(`Updating  ${currName} with new speed ${newSpeed}`);
        Object.assign(change, { speed: newSpeed });
      }
      CarModel.findOneAndUpdate(where, { $set: change }, { upsert: true, new: true }, (err, car) => {
        if (err) {
          logger.error('Got error - ', err);
        }
        logger.info(`new car = ${car}`);
        pubsub.publish('carUpdated', car);
        return car;
      });
    },

    addCar(_, { name, speed }) {
      const newCar = new CarModel({ name, speed });
      newCar.save((err, savedCar) => {
        if (err) {
          logger.error('Got error - ', err);
        }
        logger.info('Logging saved car-');
        logger.info(savedCar);
        pubsub.publish('carAdded', savedCar);
      });
    },

    deleteCar(_, { name }) {
      logger.info(`Deleting ${name}`);
      const where = {};
      Object.assign(where, { name });
      CarModel.findOneAndRemove(where, (err, cars) => {
        if (err) {
          logger.error('Got error - ', err);
        }
        logger.info('Removed car - ', cars);
        pubsub.publish('carDeleted', cars);
        return cars;
      });
    },
  },
  Subscription: {
    carUpdated(car) {
      return car;
    },
    carAdded(car) {
      return car;
    },
    carDeleted(car) {
      return car;
    },
  },
};

export default resolveFunctions;
