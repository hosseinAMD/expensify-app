// Object destructring

const person = {
    name: 'Hossein',
    age: 22,
    location: {
        city: 'Tehran',
        temp: 24
    }
};

const {name: firstName = 'Anonymous',age} = person;

console.log(`${firstName} is ${age} years old!`);

const {city,temp: tempreature} = person.location;

if(city && tempreature){
    console.log(`It's ${tempreature} degree in ${city}`);
}

const book = {
    title: 'Ego is enemy',
    author: 'Rayan Holiday',
    publisher: {
        name: 'Penguin'
    }
};

const {name:publisherName = 'Self-Published'} = book.publisher;

console.log(publisherName);


// Array destructring

const item = ['Latte','$3','$3.25','$4'];
const [itemName, , mediumPrice] = item;

console.log(`${itemName} in medium size is ${mediumPrice}`);