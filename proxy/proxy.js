const person = {
    age: '30',
    name: 'Juan',
    lastname: 'Perez',
};

const handler = {
    get(obj, prop) {
        if (prop in obj) {
            return obj[prop];
        }

        const suggestion = Object.keys(obj).find(key => {
            return Levenshtein.get(key, prop) <= 3;
        });

        if (suggestion) {
            console.log(`${prop} doesn't exist. Suggestion:  ${suggestion}?`
            );
        }

        return obj[prop];
    },
};

const myPerson = new Proxy(person, handler);

