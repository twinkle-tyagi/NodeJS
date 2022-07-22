/*
arr = ['apple', 'oranges' , ' ', 'mango', ' ' , 'lemon'];

const arrNew = arr.map(obj => {
    if(obj === ' ')
    {
        obj = 'empty string';
    }
    return obj;
});

/*
console.log(arrNew);

const obj1 = {'key1': 1 , 'key2' : 2}

const obj2 = { ...obj1, key1: 1000}


console.log(obj1)

console.log(obj2)
*/

/*
const obj1 = {'key1': 1, "key2": 2, "key3": 1000}

	const { key1, key3}  = { ...obj1}	

	console.log(key1, key3);

    const obj1 = {'key1': 1, "key2": 2, "key3": 1000}

	let { key1, key3}  = obj1

	

	key1 = 20;

	key3 = 123

	console.log(obj1.key1, obj1.key3)
    console.log(key1, key3);
*/

async function print()
{
    console.log('a');
    console.log('b');

    await new Promise((res, rej)=> {
        setTimeout(() => {
            console.log('c');
            res();
        }, 3000);
    });
    
    await new Promise((res, rej) => {
        setTimeOut(() => {
            console.log('d');
            res();
        }, 0);
    });

    console.log('e');
}
print();