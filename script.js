// Задание 1
// Дан объект numbers. Необходимо в консоль вывести все значения больше или равные 3.

// const numbers = {
// keyin1: 1,
// keyin2: 2,
// keyin3: 3,
// keyin4: 4,
// keyin5: 5,
// keyin6: 6,
// keyin7: 7,
// }

const numbers = {
    keyin1: 1,
    keyin2: 2,
    keyin3: 3,
    keyin4: 4,
    keyin5: 5,
    keyin6: 6,
    keyin7: 7,
};
// 1 способ
const moreThree = (numbers) => {
    let array = [];
    if (numbers !== null) {
        for (const key in numbers) {
            if (numbers[key] >= 3) {
                array.push(numbers[key]);
            }
        }
    }

    return array;
};

console.log(moreThree(numbers));

//2 способ
console.log(Object.values(numbers).filter((el) => el >= 3));

// Задание 2
// Необходимо из объекта, который лежит в константе post вывести значения,
// к которым приписан комментарий, в консоль.

const post = {
    author: "John", // вывести этот текст
    postId: 23,
    comments: [
        {
            userId: 10,
            userName: "Alex",
            text: "lorem ipsum",
            rating: {
                likes: 10,
                dislikes: 2, // вывести это число
            },
        },
        {
            userId: 5, // вывести это число
            userName: "Jane",
            text: "lorem ipsum 2", // вывести этот текст
            rating: {
                likes: 3,
                dislikes: 1,
            },
        },
    ],
};



// Задание 3
// Дан массив products, необходимо цену каждого
// продукта уменьшить на 15% используя метод forEach.

const products = [
    {
        id: 3,
        price: 200,
    },
    {
        id: 4,
        price: 900,
    },
    {
        id: 1,
        price: 1000,
    },
];

let arraySale = products.forEach((products) => {
    // const product = Object.keys(products)[1];
    // const price = products[product];
    const price = products[Object.keys(products)[1]];
    console.log(`Discount 15% = ${price * 0.85}`);
});

// Задание 4
// 1. Необходимо вывести в консоль массив продуктов в котором есть
//  хоть одна фотография используя метод filter. Исходные данные - массив products.
// 2. Необходимо отсортировать массив products используя метод sort по цене,
// начиная с самой маленькой, заканчивая самой большой ценой,
// после чего вывести отсортированный массив в консоль.

const products2 = [
    {
        id: 3,
        price: 127,
        photos: ["1.jpg", "2.jpg"],
    },
    {
        id: 5,
        price: 499,
        photos: [],
    },
    {
        id: 10,
        price: 26,
        photos: ["3.jpg"],
    },
    {
        id: 8,
        price: 78,
    },
];

const havePhotos = (products) => {
    console.log(
        products.filter(
            (product) =>
                Array.isArray(product.photos) || product.photos != Array[0]
        )
    );
};
havePhotos(products2);

// **Задание 5**
// Дано 2 массива
// const en = ["mon", "tue", "wed", "thu", "fri", "sat", "sun"];
// const ru = ["понедельник", "вторник", "среда", "четверг", "пятница", "суббота", "воскресенье"];
// Вам необходимо объединить 2 этих массива,
// чтобы значения первого массива были ключами, а значения второго массива — значениями.

const en = ["mon", "tue", "wed", "thu", "fri", "sat", "sun"];
const ru = [
    "понедельник",
    "вторник",
    "среда",
    "четверг",
    "пятница",
    "суббота",
    "воскресенье",
];

function arraysToObject(array1, array2) {
    let daysOfWeek = {};
    if (array1.length === array2.length) {
        for (let i = 0; i < array1.length; i++) {
            daysOfWeek[array1[i]] = array2[i]; //добавление в обьект ключа и значения из массивов
        }
    } else {
        console.log("Wrong length of array. Try again");
    }
    return daysOfWeek;
}
console.log(arraysToObject(en, ru));
