//bootstrap a simple nodejs server
import express
import cors
import bodyParser
import mongoose
// import routes

const app = express();
const router = express.Router();

// configure app to use bodyParser()
// this will let us get the data from a POST
app.use(bodyParser.urlencoded({ extended: true }));

// configure app to use cors()

app.use(cors());

// connect to mongoose
mongoose.connect('mongodb://localhost:27017/yourDBName');

// register routes

// START THE SERVER
// =============================================================================
app.listen(3000);
console.log('Magic happens on port ' + 3000);
```
Now you can create your routes and models and import them into your server file.
```
// Path: Server\routes\index.js
