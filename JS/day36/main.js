// // const task1 = () =>
// //     new Promise((resolve, reject) => {
// //         console.log("task1 done");

// //         setTimeout(() => {
// //             resolve("hehe");
// //         }, 1000);

// //         // reject("huhu");
// //     });

// // const task2 = () =>
// //     new Promise((resolve, reject) => {
// //         console.log("task2 done");

// //         setTimeout(() => {
// //             resolve("hehe");
// //         }, 6000);
// //     });

// // const task3 = () =>
// //     new Promise((resolve, reject) => {
// //         console.log("task3 done");

// //         setTimeout(() => {
// //             resolve("hehe");
// //         }, 10000);

// //         // reject("huhu");
// //     });

// // // task1()
// // //     .then((result) => {
// // //         console.log(result);
// // //         return task2();
// // //     })
// // //     .then((result) => {
// // //         console.log(result);
// // //         task3();
// // //     })
// // //     .catch((err) => console.log(err));

// // // Promise.all([task1(), task2(), task3()])
// // //     .then((result) => {
// // //         console.log(result);
// // //         console.log("All done");
// // //     })
// // //     .catch((err) => console.log(err));

// // console.time("hi");

// // Promise.race([task1(), task2(), task3()])
// //     .then((result) => {
// //         console.log(result);
// //         console.log("done");
// //         console.timeEnd("hi");
// //     })
// //     .catch((err) => console.log(err));

// // console.log({ Promise });

// console.time("hi");
// console.time("he");

// const a = () =>
//     fetch("https://dummyjson.com/products")
//         .then((res) => res.json())
//         .then((data) => {
//             console.log(data);
//             console.timeEnd("hi");
//         });

// const b = () =>
//     fetch("https://dummyjson.com/products/category-list")
//         .then((res) => res.json())
//         .then((data) => {
//             console.log(data);
//             console.timeEnd("he");
//         });

// Promise.race([a(), b()]).then((result) => {
//     console.log("da xong");
// });

// fetch("https://dummyjson.com/products")
//     .then((res) => res.json())
//     .then((data) => console.log(data));

const getApi = async () => {
    try {
        const res = await fetch("https://dummyjson.com/products");
        const data = await res.json();
        return data;
    } catch (error) {
        console.log(error);
    }
};

console.log(getApi());

// getApi().then((data) => console.log(data));
