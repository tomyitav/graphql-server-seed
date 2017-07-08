import path from "path";

let config = {};

config.logFileDir = path.join(__dirname, '../../log');
config.logFileName = 'app.log';
config.dbHost = 'localhost';
config.dbPort = '27017';
config.dbName = 'trains';

export default config;