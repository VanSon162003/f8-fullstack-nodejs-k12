const cart = [
    {
        id: 1,
        name: "T-Shirt",
        price: 100000,
        quantity: 2,
        hotSale: false,
    },
    {
        id: 2,
        name: "Jean",
        price: 200000,
        quantity: 1,
        hotSale: false,
    },
    {
        id: 3,
        name: "Skirt",
        price: 150000,
        quantity: 3,
        hotSale: true,
    },
    {
        id: 4,
        name: "Shirt",
        price: 120000,
        quantity: 2,
        hotSale: false,
    },
    {
        id: 5,
        name: "Jacket",
        price: 250000,
        quantity: 1,
        hotSale: true,
    },
];

function renderOrder(cart) {
    if (!Array.isArray(cart)) {
        console.log("invalid");

        return;
    }

    let tBody = "";
    let total = 0;

    cart.forEach((item) => {
        let hotsaleCheck = "";
        if (item.hotSale) {
            hotsaleCheck = `style="color: red"`;
        }

        tBody += `
            <tr ${hotsaleCheck}>
                <td>${item.name}</td>
                <td>${item.price}</td>
                <td>${item.quantity}</td>
                <td>${item.price * item.quantity}</td>
            </tr>
        `;

        total += item.price * item.quantity;
    });

    const content = `
    <table>
  <thead>
    <tr>
      <th>Tên sản phẩm</th>
      <th>Đơn giá</th>
      <th>Số lượng</th>
      <th>Thành tiền</th>
    </tr>
  </thead>
  <tbody>
    ${tBody}
  </tbody>
  <tfoot>
    <tr>
      <td colspan="3">Tổng tiền</td>
      <td>${total}</td>
    </tr>
  </tfoot>
</table>

`;

    // console.log(content);

    document.write(content);

    const tableElement = document.querySelector("table");
    const tdElement = document.querySelectorAll("td");
    // const trElement = document.querySelectorAll("tr");

    console.log(tableElement);

    tableElement.style.border = "1px solid #ccc";
    tableElement.style.width = "500px";
    tableElement.style.borderCollapse = "collapse";

    tdElement.forEach((item) => {
        item.style.lineHeight = "25px";
        item.style.textAlign = "center";
        item.style.border = "1px solid #ccc";
    });
}

renderOrder(cart);
