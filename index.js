const express = require("express");
const app = express();

const arithmetic = require("./arithmeticFunctions");

app.use(express.urlencoded({extended:false}));

app.post("/", (req, res) => {
    let data = req.body;
    let val1 = parseFloat(data.value1);
    let val2 = parseFloat(data.value2);
    let result;
    let op;
    if (data.operation === "add") {
        result = arithmetic.add(val1, val2);
        op = "Addition";
    } else if (data.operation === "sub") {
        result = arithmetic.sub(val1, val2);
        op = "Subtraction";
    } else if (data.operation === "mul") {
        result = arithmetic.multiply(val1, val2);
        op = "Multiplication";
    } else if (data.operation === "div") {
        result = arithmetic.divide(val1, val2);
        op = "Divide";
    } else {
        return res.status(404).send("Operation not found");
    }

    let output = `Operation: ${op} <br/>`;
    output += `Value 1: ${val1} <br/>`;
    output += `Value 2: ${val2} <br/>`;
    output += `Result: ${result}`;
    res.status(200).send(output);
});

app.listen(8000, function() {
    console.log("Server listening on port 8000");
});
