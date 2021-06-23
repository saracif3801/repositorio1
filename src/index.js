const express = require ('express');
const morgan = require ('morgan');
const handlebars = require ('express-handlebars');
const path = require ('path');


//inicializaciones
const app = express();

//configuraciones
app.set('port', process.env.PORT || 4000);
app.set('views', path.join(__dirname, 'views'));
app.engine('.hbs', express({
    defaultlayout: 'main',
    layoutsdir: path.join(app.get('views'), 'layouts'),  
    partialsdir: path.join(app.get('views'), 'partials'),
    extname: '.hbs',
    helpers: require('./lib/handlebars'),
}));
app.set('view engine', '.hbs'),

//middlewares
app.use(morgan('dev'));
app.use(express.urlencoded({extended: false}));
app.use(express.json());

//variables globales
app.use((req,res,next)=>{
 next();   
}),
//rutas
app.use(require('./routes/'));
app.use(require('./routes/authentication'));
app.use('links', require('./routes/links'));



//archivos publicos
app.use(express.static(path.join(__dirname, 'public')));

//inikcializar el servidor
app.listen(app.get('port')), ()=> {
    console.log('servidor en el puerto',app.get('port'));
}