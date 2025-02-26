const tarotDeck = [
    // Major Arcana
    {
        name: "The Fool",
        description:
            "Sự khởi đầu mới, cơ hội, sự ngây thơ và sự tin tưởng vào tương lai.",
    },
    {
        name: "The Magician",
        description:
            "Sức mạnh của ý chí, khả năng sáng tạo, và sự thành công nhờ vào khả năng sử dụng nguồn lực.",
    },
    {
        name: "The High Priestess",
        description:
            "Trực giác mạnh mẽ, sự thấu hiểu sâu sắc và khả năng tiếp nhận thông tin từ vô thức.",
    },
    {
        name: "The Empress",
        description: "Sự nuôi dưỡng, tình yêu thương, và sự sáng tạo.",
    },
    {
        name: "The Emperor",
        description: "Sự ổn định, quyền lực, sự kiểm soát và tổ chức.",
    },
    {
        name: "The Hierophant",
        description:
            "Truyền thống, tín ngưỡng, và sự tìm kiếm những giá trị tinh thần.",
    },
    {
        name: "The Lovers",
        description: "Lựa chọn, tình yêu, và sự cân nhắc giữa các con đường.",
    },
    {
        name: "The Chariot",
        description: "Quyết tâm, sự kiểm soát, và chiến thắng qua thử thách.",
    },
    {
        name: "Strength",
        description:
            "Sức mạnh nội tâm, sự can đảm, và khả năng vượt qua khó khăn.",
    },
    {
        name: "The Hermit",
        description:
            "Sự cô đơn, tìm kiếm sự thấu hiểu và ánh sáng trong bóng tối.",
    },
    {
        name: "Wheel of Fortune",
        description: "Sự thay đổi, vận may và chu kỳ của cuộc đời.",
    },
    {
        name: "Justice",
        description: "Công lý, sự cân bằng và sự thật.",
    },
    {
        name: "The Hanged Man",
        description: "Tạm dừng, quan điểm mới và sự hy sinh.",
    },
    {
        name: "Death",
        description: "Kết thúc và sự tái sinh, thay đổi lớn trong cuộc sống.",
    },
    {
        name: "Temperance",
        description: "Sự kiên nhẫn, sự cân bằng và khả năng điều hòa.",
    },
    {
        name: "The Devil",
        description: "Mắc kẹt trong cám dỗ, sự lệ thuộc và mất tự do.",
    },
    {
        name: "The Tower",
        description: "Sự đổ vỡ, phá vỡ và sự thay đổi đột ngột.",
    },
    {
        name: "The Star",
        description: "Hy vọng, sự tái sinh và sự chữa lành.",
    },
    {
        name: "The Moon",
        description: "Hấp dẫn, sự không chắc chắn và trực giác.",
    },
    {
        name: "The Sun",
        description: "Niềm vui, sự thành công và sự rõ ràng.",
    },
    {
        name: "Judgement",
        description:
            "Sự tái sinh, sự thức tỉnh và những quyết định quan trọng.",
    },
    {
        name: "The World",
        description: "Sự hoàn tất, thành công và sự hòa hợp.",
    },

    // Minor Arcana - Wands
    {
        name: "Ace of Wands",
        description: "Khởi đầu mới, nguồn năng lượng sáng tạo và nhiệt huyết.",
    },
    {
        name: "Two of Wands",
        description: "Sự quyết định, lựa chọn và chuẩn bị cho tương lai.",
    },
    {
        name: "Three of Wands",
        description: "Tầm nhìn xa, cơ hội mới và sự khám phá.",
    },
    {
        name: "Four of Wands",
        description: "Sự ổn định, thành công và lễ kỷ niệm.",
    },
    {
        name: "Five of Wands",
        description: "Cạnh tranh, xung đột và thử thách.",
    },
    {
        name: "Six of Wands",
        description: "Chiến thắng, sự công nhận và thành tựu.",
    },
    {
        name: "Seven of Wands",
        description: "Sự bảo vệ, phòng thủ và sự kiên trì.",
    },
    {
        name: "Eight of Wands",
        description: "Sự tiến bộ nhanh chóng, hành động và thay đổi.",
    },
    {
        name: "Nine of Wands",
        description: "Sự bền bỉ, quyết tâm và kiên cường.",
    },
    {
        name: "Ten of Wands",
        description: "Gánh nặng, trách nhiệm và cảm giác quá tải.",
    },
    {
        name: "Page of Wands",
        description: "Sự khám phá, sáng tạo và khởi đầu mới.",
    },
    {
        name: "Knight of Wands",
        description: "Hành động quyết đoán, đam mê và sự nhiệt huyết.",
    },
    {
        name: "Queen of Wands",
        description: "Sự tự tin, sáng tạo và năng lượng tích cực.",
    },
    {
        name: "King of Wands",
        description: "Lãnh đạo, tầm nhìn và sự quyết đoán.",
    },

    // Minor Arcana - Cups
    {
        name: "Ace of Cups",
        description: "Khởi đầu mới trong tình yêu và cảm xúc.",
    },
    {
        name: "Two of Cups",
        description: "Tình yêu, sự kết nối và sự hòa hợp.",
    },
    {
        name: "Three of Cups",
        description: "Niềm vui, sự đoàn kết và kỷ niệm.",
    },
    {
        name: "Four of Cups",
        description: "Sự chán nản, thiếu hài lòng và sự không thỏa mãn.",
    },
    {
        name: "Five of Cups",
        description: "Mất mát, tiếc nuối và nhìn lại quá khứ.",
    },
    {
        name: "Six of Cups",
        description: "Nhớ lại kỷ niệm, sự quay lại và tình bạn.",
    },
    {
        name: "Seven of Cups",
        description: "Sự phân vân, lựa chọn và ảo tưởng.",
    },
    {
        name: "Eight of Cups",
        description: "Rời bỏ, sự tìm kiếm và thay đổi.",
    },
    {
        name: "Nine of Cups",
        description: "Sự hài lòng, viên mãn và cảm giác thành tựu.",
    },
    {
        name: "Ten of Cups",
        description: "Hạnh phúc gia đình, sự hòa hợp và tình yêu trọn vẹn.",
    },
    {
        name: "Page of Cups",
        description: "Khám phá cảm xúc, sự sáng tạo và sự dễ bị tổn thương.",
    },
    {
        name: "Knight of Cups",
        description: "Lãng mạn, đam mê và sự theo đuổi cảm xúc.",
    },
    {
        name: "Queen of Cups",
        description: "Trực giác, sự chăm sóc và tình yêu thương.",
    },
    {
        name: "King of Cups",
        description: "Sự kiểm soát cảm xúc, sự bình tĩnh và trí tuệ cảm xúc.",
    },

    // Minor Arcana - Swords
    {
        name: "Ace of Swords",
        description: "Sự rõ ràng, sự thật và khởi đầu trí tuệ.",
    },
    {
        name: "Two of Swords",
        description: "Lựa chọn khó khăn, sự phân vân và sự quyết định.",
    },
    {
        name: "Three of Swords",
        description: "Nỗi đau, sự tổn thương và mất mát.",
    },
    {
        name: "Four of Swords",
        description: "Sự nghỉ ngơi, sự hồi phục và suy ngẫm.",
    },
    {
        name: "Five of Swords",
        description: "Xung đột, sự thất bại và chiến thắng qua sự tổn thương.",
    },
    {
        name: "Six of Swords",
        description: "Hành trình, sự vượt qua và tìm kiếm sự bình yên.",
    },
    {
        name: "Seven of Swords",
        description: "Lừa dối, sự gian lận và hành động mờ ám.",
    },
    {
        name: "Eight of Swords",
        description: "Cảm giác bị giam cầm, sự sợ hãi và thiếu tự do.",
    },
    {
        name: "Nine of Swords",
        description: "Lo âu, lo lắng và cảm giác bị ám ảnh.",
    },
    {
        name: "Ten of Swords",
        description: "Kết thúc, sự phản bội và sự đổ vỡ.",
    },
    {
        name: "Page of Swords",
        description: "Sự tò mò, tìm kiếm sự thật và sự cảnh giác.",
    },
    {
        name: "Knight of Swords",
        description: "Sự quyết đoán, hành động nhanh chóng và xung đột.",
    },
    {
        name: "Queen of Swords",
        description: "Trí tuệ, sự rõ ràng và khả năng nhìn nhận sự thật.",
    },
    {
        name: "King of Swords",
        description: "Lãnh đạo, sự quyết đoán và tầm nhìn sắc bén.",
    },

    // Minor Arcana - Pentacles
    {
        name: "Ace of Pentacles",
        description: "Khởi đầu mới trong tài chính, sự thịnh vượng và cơ hội.",
    },
    {
        name: "Two of Pentacles",
        description: "Quản lý tài chính, sự cân bằng và thay đổi.",
    },
    {
        name: "Three of Pentacles",
        description: "Hợp tác, sự công nhận và thành công trong công việc.",
    },
    {
        name: "Four of Pentacles",
        description: "Kiểm soát, sự bảo vệ tài sản và nỗi sợ mất mát.",
    },
    {
        name: "Five of Pentacles",
        description: "Thiếu thốn, khó khăn tài chính và sự cảm thấy bị bỏ rơi.",
    },
    {
        name: "Six of Pentacles",
        description: "Sự hào phóng, sự giúp đỡ và sự cân bằng trong tài chính.",
    },
    {
        name: "Seven of Pentacles",
        description:
            "Đầu tư thời gian và công sức, sự kiên nhẫn và thu hoạch kết quả.",
    },
    {
        name: "Eight of Pentacles",
        description: "Làm việc chăm chỉ, kỹ năng và sự phát triển nghề nghiệp.",
    },
    {
        name: "Nine of Pentacles",
        description:
            "Sự độc lập, thành tựu tài chính và sự tận hưởng cuộc sống.",
    },
    {
        name: "Ten of Pentacles",
        description: "Sự ổn định tài chính lâu dài và thành công gia đình.",
    },
    {
        name: "Page of Pentacles",
        description: "Khởi đầu mới trong sự nghiệp và tài chính.",
    },
    {
        name: "Knight of Pentacles",
        description: "Sự chăm chỉ, quyết tâm và ổn định trong công việc.",
    },
    {
        name: "Queen of Pentacles",
        description:
            "Sự chăm sóc, sự thịnh vượng và khả năng quản lý tài chính.",
    },
    {
        name: "King of Pentacles",
        description:
            "Sự thịnh vượng, khả năng quản lý tài chính và sự ổn định.",
    },
];

const modal = document.querySelector(".modal");

const btn = document.querySelector(".btn");

function random() {
    return Math.floor(Math.random() * tarotDeck.length);
}

console.log(random());

function render() {
    if (!Array.isArray(tarotDeck)) return;

    const buttonContinue = document.createElement("button");
    buttonContinue.innerText = "rút tiếp";
    buttonContinue.className = "btn";

    const buttonClose = document.createElement("button");
    buttonClose.innerText = "dừng";
    buttonClose.className = "btn";

    const buttonAction = document.createElement("div");
    buttonAction.append(buttonContinue, buttonClose);

    const backdrop = document.createElement("div");
    backdrop.className = "modal__backdrop";

    const container = document.createElement("div");
    container.className = "modal__container";

    const randomIndex = random();
    const name = document.createElement("h1");
    name.innerText = tarotDeck[randomIndex].name;

    const desc = document.createElement("p");
    desc.innerText = tarotDeck[randomIndex].description;

    container.append(name, desc, buttonAction);

    backdrop.appendChild(container);

    modal.appendChild(backdrop);

    modal.onclick = function (e) {
        if (e.target.matches(".modal__backdrop")) {
            backdrop.remove();
        }
    };
    document.onkeydown = function (e) {
        if (e.key === "Escape") {
            backdrop.remove();
        }
    };

    buttonContinue.onclick = function () {
        render();
        backdrop.remove();
    };

    buttonClose.onclick = function () {
        backdrop.remove();
    };
}

btn.onclick = function () {
    render();
};
