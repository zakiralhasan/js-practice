const items = [
    {name: 'Nokia', price: 39000, color: 'white', memory: 64},
    {name: 'iphone', price: 92000, color: 'silver', memory: 256},
    {name: 'Samsung', price: 32000, color: 'black', memory: 128},
    {name: 'walton', price: 20000, color: 'gray', memory: 16},
    {name: 'Oppo', price: 25000, color: 'black', memory: 32},
];

function matchSomething(items, search){
    const matchedItem = [];

    for(const item of items){
        if(item.color.includes(search)){
            matchedItem.push(item);
            // console.log(matchedItem);
        };
    };
    if(matchedItem == ''){
        // console.log('no item matched');
        return 'no item matched';
    };
    return matchedItem;
};

const result = matchSomething(items, 'u');
console.log(result);