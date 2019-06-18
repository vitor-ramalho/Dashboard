const express = require('express'); //importação express;
const path = require('path');
const mysql = require('mysql');

const app = express(); //instanciação express

const server = require('http').Server(app);


const connection = mysql.createConnection({  //configurando conexão
    host: '127.0.0.1',
    user: 'root',
    password: 'VermelhoLimao35423661',
    database: 'blogestudo',
})

connection.connect(); //começando conexão

server.listen(3333);

