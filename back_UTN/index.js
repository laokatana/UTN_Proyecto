const express = require('express');
const mysql = require('mysql2');
const app = express();
require('dotenv').config();
const PORT = process.env.PORT || 8080;
const cors= require('cors')

app.use(cors())
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//Conexión a la Base de Datos de MySQL
const conexion = mysql.createConnection({
    host: process.env.HOST,
    user: process.env.USER,
    password: process.env.PASSWORD,
    database: process.env.DATABASE,
    port: process.env.DBPORT
});

conexion.connect((err) => {
    // if (err) throw err;
    console.log(`Conexión establecida con la base de datos`);
});

//Crud GET, POST, PUT, DELETE

app.get('/equipos', (req, res) => {
    let sql = 'SELECT * FROM equipo'
    let query = conexion.query(sql, (err, result) => {
        if (err) throw err;
        res.json(result)
        console.log(result)
    })
    return query
    
})

app.post('/enviar', (req, res) => {

    const { nombreDelEquipo, ciudad, estadio, fechaDecreacion } = req.body;
    console.log(`${nombreDelEquipo} - ${ciudad}-${estadio}-${fechaDecreacion}`);

    let dato = {
        nombre : nombreDelEquipo,
        ciudad: ciudad ,
        estadio: estadio ,
        fecha: fechaDecreacion 
    }

    let sql = 'INSERT INTO equipo SET ?'

    let query = conexion.query(sql, dato, (err, result) => {
        if (err) throw err;
        res.send(`Sus datos han sido registrados`)
    });

 
});


app.put('/actualizar', (req, res) => {

    let sql = "UPDATE equipo SET nombre_de_equipo='" +
        req.body.nombreDelEquipo +
        "' WHERE idEquipo=" +
        req.body.idEquipo;

    console.log(sql);

    let query = conexion.query(sql, (err, result) => {

        res.send(`Sus datos han sido Actualizados.`);
    })
  
});


app.delete('/eliminar/:id', (req, res) => {

    const { id } = req.params



    let query = conexion.query( 'DELETE FROM equipo WHERE idEquipo=?' ,id , (err, result) => {
        if(err) throw err;
        res.json({
            msg: "Date por eliminado lince"
        })

    })

return query

})


app.listen(PORT, () => {
    console.log(`Aplicación corriendo en el Puerto ${PORT}`);
});