const fs = require('fs');

async function readJSON() {
    return  await require('./config.json')
}

function evaluateElements(a, b, prop, order) {

    if (order == "asc") {
        if (a[prop] > b[prop]) { return 1 };
        if (a[prop] < b[prop]) { return -1 };
    }
    if (order == "desc") {
        if (a[prop] > b[prop]) { return -1 };
        if (a[prop] < b[prop]) { return 1 };
    }

    return 0;
}

function ordenateCollection(options) {     

    options.books.sort((a, b) => {
        let counter = 0;
        let result = 0;

        while (result == 0 && counter < options.props.length) {

            const prop = options.props[counter].name;
            const order = options.props[counter].order;

            result = evaluateElements(a, b, prop, order);

            counter++;
        };

        return result;
    });

    console.log(options.books);
    return options.books;
}

function validateOptions(option) {
    return option.props.every(prop => {
        if (prop.order == "") {
            return false;
        } 
        if (!prop.order) {
            throw new Error("Valor de ordenação: null");
        }
        return true;
    });
}


(async () => {
    try {
        const content = await readJSON();
        const validate = validateOptions(content);
        if (validate) {
            const collection = ordenateCollection(content);
        } else {
            console.log("Valor de ordenação vazio");
            process.exit();
        }
    } catch (err) {
        console.error(err);
        process.exit(0);
    }
})()

