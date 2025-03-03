import React from "react";
import style from "./ProductList.module.css";
console.log(style);

function ProductList({ isPosture }) {
    const data = [
        {
            id: 1,
            title: "T-shirt",
            price: 100,
            description: "This is a T-shirt",
        },
        { id: 2, title: "Shirt", price: 200, description: "This is a Shirt" },
        { id: 3, title: "Pants", price: 300, description: "This is a Pants" },
        { id: 4, title: "Shoes", price: 400, description: "This is a Shoes" },
    ];
    return (
        <div
            className={`${style.productList} ${isPosture ? style.posture : ""}`}
        >
            {data.map((product) => (
                <div key={product.id}>
                    <h1>{product.title}</h1>
                    <p>{product.price}</p>
                    <p>{product.description}</p>
                </div>
            ))}
        </div>
    );
}

export default ProductList;
