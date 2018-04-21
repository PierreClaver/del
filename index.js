
let express = require('express');
let mainRouter=require('./mainRoutes');
let app = express();

app.use('/', mainRouter);
app.listen(process.env.PORT || 3000);

		
		
		