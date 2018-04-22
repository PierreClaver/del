

let mainRouter=require('./mainRoutes');
let express = require('express');
let app = express();

app.use('/', mainRouter);
//app.set('port', process.env.PORT || 8080)
port = port = process.env.port || 3000;
app.listen(port);

console.log('Done')


		
		
		