import path from "path";

let config = {};

config.logFileDir = path.join(__dirname, '../logger/');
config.logFileName = 'app.log';
config.db = 'localhost';

export default config;