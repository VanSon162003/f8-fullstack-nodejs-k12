function isNumber(n) {
    return !Number.isNaN(n) && typeof n === "number"; // n === n
}

function enter(string) {
    return +prompt(`nhập vào ${string}`);
}

// bài 1

function calcTax() {
    const wage = enter("lương");

    if (isNumber(wage) && wage >= 0) {
        if (wage <= 11) return "Không tính thuế";
        if (wage > 11 && wage <= 25) return wage * 0.05;
        if (wage > 25 && wage <= 50) return wage * 0.1;
        if (wage > 50 && wage <= 80) return wage * 0.2;
        return wage * 0.3;
    }

    return "Mời bạn nhập lại wage đúng định dạng là số lớn hơn or bằng 0";
}

// console.log(calcTax());

//bài 2

function electricityBill() {
    const kWh = enter("kWh");

    if (isNumber(kWh) && kWh >= 0) {
        if (kWh <= 50) return 1.678;
        if (kWh > 50 && kWh <= 100) return kWh * 1.734;
        if (kWh > 100 && kWh <= 200) return kWh * 2.014;
        if (kWh > 200 && kWh <= 300) return kWh * 2.536;
        if (kWh > 300 && kWh <= 400) return kWh * 2.834;
        return kWh * 2.927;
    }

    return "Mời bạn nhập lại kWh đúng định dạng là số lớn hơn or bằng 0";
}

// console.log(electricityBill());

//bài 3

function isTriangle() {
    const a = enter("cạnh a");
    const b = enter("cạnh b");
    const c = enter("cạnh c");

    if (isNumber(a) && isNumber(b) && isNumber(c) && a > 0 && b > 0 && c > 0) {
        if (a + b > c && a + c > b && b + c > a)
            return "là 3 cạnh của 1 tam giác";
        return "khong là 3 cạnh của 1 tam giác";
    }

    return "Mời bạn nhập lại cạnh đúng định dạng là số lớn hơn 0";
}

// console.log(isTriangle());

//bài 4

function calcBIM() {
    const w = +prompt("cân nặng");
    const h = +prompt("chiều cao");

    let BMI = w / h ** 2;
    console.log(BMI);

    if (isNumber(w) && isNumber(h) && w > 0 && h > 0) {
        if (BMI < 18.5) return "suy dinh duong";
        if (BMI >= 18.5 && BMI < 23) return "Binh thuong";
        if (BMI >= 23 && BMI < 25) return "thua can";
        return "beo phi";
    }

    return "Dữ liệu không hợp lệ";
}

console.log(calcBIM());
