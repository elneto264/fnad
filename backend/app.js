let express = require('express'),
  path = require('path'),
  mongoose = require('mongoose'),
  cors = require('cors'),
  bodyParser = require('body-parser'),
  dataBaseConfig = require('./database/db');

const documentoRoute = require('./routes/documento.route')
// Connecting mongoDB
const { MongoClient } = require("mongodb");
const url = "mongodb+srv://infofnad:biologia@fnad.ea9vu.mongodb.net/fnad?retryWrites=true&w=majority";
const client = new MongoClient(url);
const dbName = "libreriadb";
async function run() {
    try {
        await client.connect(dataBaseConfig);
        console.log("Connected correctly to server");
        
        //console.log(client);
        const db = client.db(dbName);

         // Use the collection "people"
         const col = db.collection("documentos");
         const myDoc = await col.findOne();
         console.log(myDoc);
         mongoose.connect(dataBaseConfig.mongo, {
          useNewUrlParser: true,
          useUnifiedTopology:true,
          useFindAndModify: false
        }).then(() => {
            console.log('Database conectada ')
            //console.log(Documentos.db)
          },
          error => {
            console.log('Could not connected to database : ' + error)
          }
        )


        

    } catch (err) {
        console.log(err.stack);
        // error handler
    app.use(function (err, req, res, next) {
      console.error(err.message);
      if (!err.statusCode) err.statusCode = 500;
      res.status(err.statusCode).send(err.message);
    });
    }
    finally {
        //await client.close();
        
    }
}

// Set up express js port
const documentotRoute = require('./routes/documento.route')

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: false
}));
app.use(cors());


// Setting up static directory
app.use(express.static(path.join(__dirname, 'dist/fnad')));


// RESTful API root
app.use('/api', documentoRoute)

// PORT
const port = process.env.PORT || 8000;

app.listen(port, () => {
  console.log('Connected to port ' + port)
  
})

// Find 404 and hand over to error handler
// app.use((req, res, next) => {
//   next(createError(404));
// });

// Index Route
app.get('/', (req, res) => {
  res.send('invaild endpoint');
});

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist/fnad'));
});
// Connecting mongoDB
// mongoose.Promise = global.Promise;
// mongoose.connect(dataBaseConfig.mongo, {
//   useNewUrlParser: true,
//   useUnifiedTopology:true,
//   useFindAndModify: false
// }).then(() => {
//     console.log('Database connected sucessfully ')
//     console.log(Documentos.db)
//   },
//   error => {
//     console.log('Could not connected to database : ' + error)
//   }
// )




run().catch(console.dir);