const express = require('express');
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended : false }));

app.get("/custom_api", (req, res) => {
    res.send({
        "completed" : true,
        "count" : 46,
        "version" : {
            "test" : 1.2
        }
    })
}).listen(3700);

