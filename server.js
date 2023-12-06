if(process.env.NODE_ENV !== 'production'){
    require('dotnev').config()
}

const express = require('express');
const app = express();
const port = 3000

const bcrypt = require('bcrypt')
const passport = require('passport')
const flash = require('express-flash')
const session = require('express-session')
const methodOverite = require('method-overide')

const users = [];

app.set('view engine', 'ejs')
app.use(express.urlencoded({ extended: false }));

app.get('/', (req, res) => res.render('register', {name:'Register'}));

app.get('/login', (req, res) => res.render('login.ejs'))
app.post('/login', (req,res) =>{

})
app.get('/register', (req, res) => res.render('register.ejs'))
app.post('/register', (req,res) =>{
req.body.email 
})
app.listen(port, () => console.log('Started port 3000'))

app.get('/register', checkNotAuthenticated, (req, res) => {
    res.render('register.ejs')
})
app.post('/register', checkNotAuthenticated, async (req, res) =>{
    try{
        const hashedPassword = await bcrypt.hash(req.body.password, 8)
        users.push({
            id: Date.now().toString(),
            name: req.body.name,
            email: req.body.email,
            password: hashedPassword
        })
        res.redirect('/login')
    }
    catch{
        res.redirect('/register')
    }
    console.log(users)
})
app.delete('/logout', (req, res) => {
    req.logOut()
    res.redirect('/login')
})
function checkAuthenticated(req, res, next){
    if(req.isAuthenticated()){
        return next()
    }
    res.redirect('/login')
}
function checkNotAuthenticated(req, res, next){
    if(req.isAuthenticated()){
        return res.redirect('/')
    }
    next()
}