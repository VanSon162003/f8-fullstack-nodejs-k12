function countElements(tagName) {
    if (typeof tagName !== "string" || tagName.length === 0) return "invalid";

    const tag = document.querySelectorAll(tagName);

    if (!tag) return 0;

    return tag.length;
}
// Giả sử trên trang web có 10 thẻ div và 5 thẻ p

console.log(countElements("div")); // 10
console.log(countElements("p")); // 5
console.log(countElements("a")); // 5
console.log(countElements(0)); // 5
console.log(countElements("")); // 5
