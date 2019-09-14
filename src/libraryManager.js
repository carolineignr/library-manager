const options;

function evaluateElements(a, b, prop, order) {

    if (order == "asc") {
        if (a[prop] > b[prop]) {return 1};
        if (a[prop] < b[prop]) {return -1};
    }
    if (order == "desc") {
        if (a[prop] > b[prop]) {return -1};
        if (a[prop] < b[prop]) {return 1};
    }

    return 0;
}

function ordenateCollection() {

    options.books.sort((a, b) => {
        let counter = 0;
        let result = 0;

        while (result == 0 && counter < options.props.length) {
            
            const prop = [options.props[counter].name];
            const order = [options.props[counter].order];

            result = evaluateElements(a, b, prop, order);

            counter++;
        }
        
        return result;
    });

    console.log(options.books)
}


ordenateCollection();