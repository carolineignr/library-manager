const fs = require('fs');

function readJSON(path) {
    return require(path)
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

function getBooks(path) {
    try {

        const options = readJSON(path)    
        if (validateOptions(options)) {
            return { data: ordenateCollection(options) } 
        } 

        return { error: "Valor de ordenação vazio"  }        
    
    } catch (err) {
        return { error: err  }
        // console.error(err);
        // process.exit(0);
    }
}

module.exports = getBooks