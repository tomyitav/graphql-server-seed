import path from "path";

let config = {};

config.logFileDir = path.join(__dirname, '../log/');
config.logFileName = 'app.log';
config.db = 'localhost';

export default config;