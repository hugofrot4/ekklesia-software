import express from 'express';
import sqlite3 from 'sqlite3';
import crypto from 'crypto';

const sqlite = sqlite3.verbose();
const db = new sqlite.Database('./database.db');

const app = express();
app.use(express.json());

db.run(`CREATE TABLE IF NOT EXISTS visitors (
    id UUID PRIMARY KEY,
    name TEXT NOT NULL,
    phone VARCHAR(20)
)`);

app.post('/visitors', (req, res) => {
    const id = crypto.randomUUID();
    const { name, phone } = req.body;

    db.run(
        `INSERT INTO visitors (id, name, phone) VALUES (?, ?, ?)`,
        [id, name, phone],
        (error) => {
            if (error) {
                res.status(500).send('Erro ao inserir visitante');
                console.log("Erro ao inserir visitante:", error);
            } else {
                res.status(201).send({ id, name, phone });
                console.log("Visitante inserido com sucesso:", { id, name, phone });
            }
        } 
    )
});

app.get('/visitors', (req, res) => {
    db.all(`SELECT * FROM visitors`, [], (error, rows) => {
        if (error) {
            res.status(500).send('Erro ao buscar visitantes');
            console.log("Erro ao buscar visitantes:", error);
        } else {
            res.status(200).send(rows);
            console.log("Visitantes buscados com sucesso:", rows);
        }
    })
})

app.listen(3000, () => {
    console.log('Servidor rodando na porta 3000');
});