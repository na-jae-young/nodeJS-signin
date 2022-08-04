"use strict"

const app = require("../app")
const POST = process.env.PORT;
app.listen(POST,function(){
    console.log('Server running at http://127.0.0.1:3000');
});
