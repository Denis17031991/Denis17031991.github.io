function myFunction() {
    alert('Очки');
}

var players = [{
        flag: 'img/russia.png',
        player: 'Овечкин А.',
        team: "Вашингтон",
        s: 56,
        g: 27,
        a: 29,
    },

    {
        flag: "img/canada.png",
        player: 'Юбердо Дж.',
        team: "Флорида",
        s: 55,
        g: 15,
        a: 40.
    },

    {
        flag: "img/germany.png",
        player: 'Драйзайтль Л.',
        team: "Эдмонтон",
        s: 54,
        g: 26,
        a: 28.
    },

    {
        flag: "img/canada.png",
        player: 'Макдэвид К.',
        team: "Эдмонтон",
        s: 53,
        g: 19,
        a: 34.
    },

    {
        flag: "img/canada.png",
        player: 'Кадри Н.',
        team: "Колорадо",
        s: 51,
        g: 15,
        a: 36.
    },

    {
        flag: "img/finland.png",
        player: 'Рантанен М.',
        team: "Колорадо",
        s: 48,
        g: 21,
        a: 27.
    },

    {
        flag: "img/canada.png",
        player: 'Стэмкос С.',
        team: "Тампа-Бэй",
        s: 48,
        g: 19,
        a: 29.
    },

    {
        flag: "img/swiss.png",
        player: 'Майер Т.',
        team: "Сан-Хосе",
        s: 46,
        g: 21,
        a: 25.
    },

    {
        flag: "img/russia.png",
        player: 'Капризов К.',
        team: "Миннесота",
        s: 46,
        g: 16,
        a: 30.
    },

    {
        flag: "img/canada.png",
        player: 'Маршанд Б.',
        team: "Бостон",
        s: 43,
        g: 20,
        a: 23.
    },

    {
        flag: "img/flag.png",
        player: 'Павелски Дж.',
        team: "Даллас",
        s: 43,
        g: 16,
        a: 27
    },

    {
        flag: "img/canada.png",
        player: 'Гудро Дж.',
        team: "Калгари",
        s: 43,
        g: 15,
        a: 28
    },

    {
        flag: "img/sweden.png",
        player: 'Хедман В.',
        team: "Тампа-Бэй",
        s: 43,
        g: 9,
        a: 34
    },

    {
        flag: "img/flag.png",
        player: 'Фокс А.',
        team: "Рейнджерс",
        s: 43,
        g: 7,
        a: 36.
    },

    {
        flag: "img/finland.png",
        player: 'Ахо С.',
        team: "Каролина",
        s: 42,
        g: 17,
        a: 25.
    },

    {
        flag: "img/swiss.png",
        player: 'Йоси Р.',
        team: "Нэшвилл",
        s: 42,
        g: 13,
        a: 29

    }

];

function renderPlayer(number, flag, lastName, team, scores, goals, assists) {
    let div = document.createElement('div');
    div.innerHTML = number;
    document.getElementsByClassName("wrapper")[0].append(div);
    // <div><img class="flag" src="img/swiss.png" />Йоси Р.</div>
    let div2 = document.createElement('div');
    let img = document.createElement('img');
    img.src = flag; //img
    img.className = 'flag'; //<img class="flag" src="img/swiss.png" />
    div2.append(img); // <div><img class="flag" src="img/swiss.png" /></div>
    div2.append(lastName);
    document.getElementsByClassName("wrapper")[0].append(div2);

    let div3 = document.createElement('div');
    div3.innerHTML = team;
    document.getElementsByClassName("wrapper")[0].append(div3);

    let div4 = document.createElement('div');
    div4.innerHTML = scores;
    document.getElementsByClassName("wrapper")[0].append(div4);

    let div5 = document.createElement('div');
    div5.innerHTML = goals;
    document.getElementsByClassName("wrapper")[0].append(div5);

    let div6 = document.createElement('div');
    div6.innerHTML = assists;
    document.getElementsByClassName("wrapper")[0].append(div6);
}

function renderPlayers() {
    for (var i = 0; i < players.length; i++) {
        renderPlayer(i + 1, players[i].flag, players[i].player, players[i].team,
            players[i].s, players[i].a, players[i].g);
    }
}

renderPlayers();