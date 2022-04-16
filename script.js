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

}];




function renderPlayer(number, lastName, team, scores, goals, assists) {
    let div = document.createElement('div');
    div.innerHTML = number;
    document.getElementsByClassName("wrapper")[0].append(div);

    let div2 = document.createElement('div');
    div2.innerHTML = lastName;
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

    let img = document.createElement('img');
    img.innerHTML = 'img';
    document.getElementsByClassName("wrapper")[0].append(div2);
}

function renderPlayers() {
    for (var i = 0; i < players.length; i++) {

        renderPlayer(i + 1, players[i].player, players[i].team, players[i].s, players[i].a, players[i].g);
    }

}