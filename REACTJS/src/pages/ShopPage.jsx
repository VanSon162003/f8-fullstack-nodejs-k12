import React from "react";

function ShopPage({ product }) {
    return product.map((item, i) => (
        <div key={i}>
            <h1>{item.name}</h1>
            <p>{item.description}</p>
        </div>
    ));
}

export default ShopPage;
