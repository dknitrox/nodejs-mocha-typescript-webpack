import * as express from 'express';
import * as path from 'path';
import * as logger from 'morgan';
import * as cookieParser from 'cookie-parser';
import * as bodyParser from 'body-parser';
import * as mongoose from 'mongoose';
import * as cors from 'cors';

//Llamar a las rutas
//import config from './workspace/config';
//import routes from './src/routes';
const app = express();
const Router=express.Router;
//import db from './src/databases';

//db.mongo;
// view engine setup

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));

app.use(cors());
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.get('/',(req,res)=>{
  res.send("hlolaa");
})
//app.use('/controllers', routes(express,db.sequelize,mongoose));
app.get('/',(req,res)=>{
  res.send("ddsdss")
})
// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err:any = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
res.send("error");
});


export default app;
