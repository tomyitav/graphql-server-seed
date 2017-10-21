import path from "path";

let config = {};

config.logFileDir = path.join(__dirname, '../../log');
config.logFileName = 'app.log';

config.dbHost = process.env.dbHost || 'localhost';
config.dbPort = process.env.dbPort || '27017';
config.dbName = process.env.dbName || 'trains';

config.serverPort = process.env.serverPort || 8080;
config.serverWsPort = process.env.serverWsPort || 8090;

export default config;