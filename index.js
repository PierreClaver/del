
let express = require('express');
let mainRouter=require('./mainRoutes');
let app = express();

app.use('/', mainRouter);
pp.listen(process.env.PORT || 3000);

		
		
		