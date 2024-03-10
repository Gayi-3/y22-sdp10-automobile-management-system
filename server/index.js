import express from 'express';
import cors from 'cors';
import { MongoClient } from 'mongodb';
import bcrypt from 'bcrypt';

const app = express();
app.use(express.json());
app.use(cors());

const client = new MongoClient('mongodb+srv://admin2:admin2@cluster0.x2hbcuo.mongodb.net/project0?retryWrites=true&w=majority&appName=Cluster0');
client.connect();
const db = client.db('skill');
const col = db.collection('user');
const col2 = db.collection('Details');
const col3 = db.collection('Detail');

app.get('/home', (req, res) => {
    res.send('It is a home page - new page');
});

app.post('/insert', async (req, res) => {
    req.body.password = await bcrypt.hash(req.body.password, 5);
    console.log(req.body);
    col.insertOne(req.body);
    res.send('Data received');
});

app.post('/check', async (req, res) => {
    console.log(req.body);
    var result = await col.findOne({ name: req.body.un });
    if (result != null) {
        if (await bcrypt.compare(req.body.pw, result.password)) {
            res.send(result);
        } else {
            res.send('fail');
        }
    } else {
        res.send('fail');
    }
});

app.get('/show', async (req, res) => {
    var result = await col.find().toArray();
    console.log(result);
    res.send(result);
});

app.post('/entry', (req, res) => {
    console.log(req.body);
    col2.insertOne(req.body);
    res.send('Successfully Inserted');
});

app.put('/entry', async (req, res) => {
    console.log(req.body);
    var doc = {
        $set: {
            sname: req.body.sname,
            pstatus: req.body.pstatus,
            scompany: req.body.scompany,
            sctc: req.body.sctc,
        },
    };
    await col2.updateOne({ sid: req.body.sid }, doc);
    res.send('updated successfully');
});

app.get('/display', async (req, res) => {
    var result = await col2.find().toArray();
    res.send(result);
});

app.delete('/delete', async (req, res) => {
    console.log(req.query);
    await col2.deleteOne({ sid: req.query.id });
    res.send('deleted');
});

);

const port = 8081;
app.listen(port, () => {
    console.log(`Server running on port ${port}`);

});
