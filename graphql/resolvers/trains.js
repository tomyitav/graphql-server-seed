import {TrainModel} from '../../db/trains'
import logger from '../../core/logger/app-logger'

const resolveFunctions = {
    Query: {
        train (_, {name}){
            let where = {};
            if (name != undefined) {
                Object.assign(where, {name: name})
            }
            return TrainModel.find(where, (err, trains) => {
                if (err) {
                    logger.error("Error- ", err);
                }
            })
        }

    },
    Mutation: {
        addTrain (_, {name, speed, diesel}) {
            let newTrain = new TrainModel({name, speed, diesel})
            newTrain.save((err, savedTrain) => {
                if(err) {
                    logger.error('Got error - ', err)
                }
            })
        },
    },
    Subscription: {
        trainUpdated(train) {
            return train
        },
        trainAdded(train) {
            return train
        },
        trainDeleted(train) {
            return train
        }
    }
};

export default resolveFunctions;