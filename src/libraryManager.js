const options = {
    props: [
        { name: "editionYear", order: "asc" },
        { name: "author", order: "asc" },
        { name: "number", order: "desc" }
    ],
    books: [
        {
            number: 2,
            title: "Patterns of Enterprise Application Architecture",
            author: "Martin Fowler",
            editionYear: 2002
        },
        {
            number: 3,
            title: "Head First Design Patterns",
            author: "Elisabeth Freeman",
            editionYear: 2004
        },
        {
            number: 5,
            title: "Harry Potter",
            author: "Deitel & Deitel",
            editionYear: 2007
        },
        {
            number: 1,
            title: "Java How To Program",
            author: "Deitel & Deitel",
            editionYear: 2007
        },
        {
            number: 4,
            title: "Internet & World Wide Web: How to Program",
            author: "Felipe Neto",
            editionYear: 2007
        }
    ]
};

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