const express = require("express");
const PORT = process.env.PORT || 3001;
const app = express();
const bodyParser = require('body-parser')
const morgan = require('morgan')
const session = require('express-session')
const dbConnection = require('./database') 
const MongoStore = require('connect-mongo')(session)
const passport = require('./passport');
// const routes = require("./routes");
const mongoose = require("mongoose");
mongoose.set("useCreateIndex", true);
const AWS = require('aws-sdk');
const fs = require('fs');
const fileType = require('file-type');
const bluebird = require('bluebird');
const multiparty = require('multiparty');
// Route requires
const user = require('./routes/user')

// configure the keys for accessing AWS
AWS.config.update({
  accessKeyId: "",
  secretAccessKey: ""
});

// configure AWS to work with promises
AWS.config.setPromisesDependency(bluebird);

// create S3 instance
const s3 = new AWS.S3();

// abstracts function to upload a file returning a promise
const uploadFile = (buffer, name, type) => {
  const params = {
    ACL: 'public-read',
    Body: buffer,
    Bucket: "tag-this-app-adoelp",
    ContentType: type.mime,
    Key: `${name}.${type.ext}`
  };
  return s3.upload(params).promise();
};



// Define Middleware Here -------------------------------------
app.use(morgan('dev'))
//app.use(express.urlencoded({ extended: true }));
app.use(
	bodyParser.urlencoded({
		extended: false
	})
)
//app.use(express.json());
app.use(bodyParser.json());

// Serve Up Static Assets (usually on Heroku) -----------------
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

// Define API Routes Here -------------------------------------
// app.use(routes);

// Define POST route
app.post('/test-upload', (request, response) => {
  const form = new multiparty.Form();
    form.parse(request, async (error, fields, files) => {
      if (error) throw new Error(error);
      try {
        const path = files.file[0].path;
        const buffer = fs.readFileSync(path);
        const type = fileType(buffer);
        const timestamp = Date.now().toString();
        const fileName = `bucketFolder/${timestamp}-lg`;
        const data = await uploadFile(buffer, fileName, type);
        //console.log();
        return response.status(200).send(data);
      } catch (error) {
        return response.status(400).send(error);
      }
    });
});

// Sessions
app.use(
	session({
		secret: 'fraggle-rock', //pick a random string to make the hash that is generated secure
		store: new MongoStore({ mongooseConnection: dbConnection }),
		resave: false, //required
		saveUninitialized: false //required
	})
)

// Passport
app.use(passport.initialize())
app.use(passport.session()) // calls the deserializeUser


// Routes
app.use('/user', user)

// Connect to the MongoDB Database ----------------------------
const MONGODB_URI =
  process.env.MONGODB_URI || "mongodb://localhost/tag-this-db";
mongoose.connect(MONGODB_URI, { useNewUrlParser: true });

app.listen(PORT, () => {
  console.log(`API Server now on port: ${PORT}`);
});
