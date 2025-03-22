// Write a function that takes an array of product objects ({ name, type }) and groups them by type.
/*
    Example
        Input:
            groupProducts([
                { name: "Laptop", type: "Electronics" },
                { name: "Banana", type: "Food" },
                { name: "Phone", type: "Electronics" },
                { name: "Apple", type: "Food" }
            ]);
        Output:
            {
                Electronics: ["Laptop", "Phone"],
                Food: ["Banana", "Apple"]
            }
*/

type Item = {
    name: string
    type: string
}

type ItemArr = Item[] 

function groupProducts (arr: ItemArr): object {
    let categoryType: { [key: string]: string[] } = {}

    for (const item of arr) {
        categoryType[item.type] = (categoryType[item.type] || []);
        categoryType[item.type].push(item.name)
    }

    return categoryType
}


