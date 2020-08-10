const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/fruitsDB', { useNewUrlParser: true, useUnifiedTopology: true });

var fruitsSchema = new mongoose.Schema({
    _id: Number,
    name: String,
    age: Number
});

const Fruit = mongoose.model('Fruit', fruitsSchema);

const fruit = new Fruit(
    {
        _id: 1,
        name: "Apple",
        score: 8,
        review: "Great fruit"
    },
    {
        _id: 2,
        name: "Orange",
        score: 6,
        review: "Kinda sour"
    },
    {
        _id: 3,
        name: "Banana",
        score: 9,
        review: "Great stuff!"
    }
);

const personSchema = new mongoose.Schema({
    _id: Number,
    name: String,
    age: Number
});

const Person = mongoose.model('Person', personSchema);

const person = new Person(
    {
        _id: 1,
        name: "Fabricio",
        age: 35
    },
    {
        _id: 2,
        name: "Amanda",
        score: 28,
    },
    {
        _id: 3,
        name: "Heloisa",
        age: 3,

    }
)

const apple = new Fruit({
    name: "Apple",
    score: 8,
    review: "Great fruit"
})
const orange = new Fruit({
    name: "orange",
    score: 7,
    review: "Great"
})
const banana = new Fruit({
    name: "banana",
    score: 8,
    review: "also Great "
})



Fruit.find(function (err, fruits) {
    if (err) {
        console.log(err);
    } else {


        fruits.forEach(fruit => {
            console.log(fruit.name);
        });
        mongoose.Connection.close();
    }
});