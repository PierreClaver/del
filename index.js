

let mainRouter=require('./mainRoutes');
let express = require('express');
let app = express();

app.use('/', mainRouter);
app.listen('port', process.env.PORT || 8080)
console.log('Done')


		
		
		