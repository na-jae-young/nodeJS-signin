"use strict"

const app = require("../app")
const logger = require("../src/config/logger")
const PORT = process.env.PORT;
app.listen(PORT,function(){
    logger.info(`${PORT} PORT :Server running at http://127.0.0.1:3000`);
});
