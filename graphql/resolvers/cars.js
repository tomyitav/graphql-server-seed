import {pubsub} from "../subscriptions/subscriptions";
import {CarModel} from "../../db/cars";
import logger from '../../core/logger/app-logger'

const resolveFunctions = {
    Query: {
        car (_, {name}){
            let where = {};
            if(name != undefined) {
                Object.assign(where, {name: name})
            }
            return CarModel.find(where ,(err, cars) => {
                if(err) {
                    logger.error("Error- ", err);
                }
            })
        }

    },
    Mutation: {
        updateCar (_, {currName, newName}) {
            logger.info('Updating  ' + currName + " with new name " + newName);
            let where = {};
            Object.assign(where, {name: currName});
            CarModel.findOneAndUpdate(where, {$set:{name:newName}} , {upsert : true}, (err, cars) => {
                if(err) {
                    logger.error('Got error - ' , err);
                }
                cars.name = newName;
                pubsub.publish('carUpdated', cars);
                return cars
            })
        },

        addCar (_, {name}) {
            let newCar = new CarModel({name})
            newCar.save((err, savedCar) => {
                if(err) {
                    logger.error('Got error - ', err)
                }
                logger.info('Logging saved car-');
                logger.info(savedCar);
                pubsub.publish('carAdded', savedCar);
            })
        },

        deleteCar (_, {name}) {
            logger.info('Deleting ' + name );
            let where = {};
            Object.assign(where, {name: name});
            CarModel.findOneAndRemove(where, (err, cars) => {
                if (err) {
                    logger.error('Got error - ', err);
                }
                logger.info('Removed car - ', cars);
                pubsub.publish('carDeleted', cars);
                return cars
            })
        }
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
    }
};

export default resolveFunctions;
