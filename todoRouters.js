let router = express.Router();
let todoList = [] ; 

router.get('/',function (req,res){
	res.sendFile(path.join(__dirname, 'views', 'todo', 'index.html' )
});
	
