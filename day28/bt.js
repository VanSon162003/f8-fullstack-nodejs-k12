const countdown = () => {
    const day1 = new Date("2026-01-01 00:00:00");
    const day2 = new Date();

    // const day3 = 0;
    const day3 = day1 - day2;

    if (day3 === 0) {
        const div = document.createElement("div");

        div.innerText = "chúc mừng năm mới!!! bùm chát bùm chát....";
        document.body.innerText = "";
        document.body.appendChild(div);

        return;
    }

    const days = Math.floor(day3 / (1000 * 60 * 60 * 24));
    const our = Math.floor((day3 % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minute = Math.floor((day3 % (1000 * 60 * 60)) / (1000 * 60));
    const second = Math.floor((day3 % (1000 * 60)) / 1000);

    const result = `còn ${days} ngày ${our} giờ ${minute} phút ${second} giây là đến 2026`;

    const div = document.createElement("div");

    div.innerText = result;
    document.body.innerText = "";
    document.body.appendChild(div);
};

setInterval(countdown, 1000);
