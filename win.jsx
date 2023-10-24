function jouer(value) {
    /* JOUEUR 1 */

    var joueur1 = [
        { "id": 1, "win": 0, "lose": 0, "choice": value },
    ];

    console.log("Joueur 1 : " + joueur1[0].choice);

    /* JOUEUR 2 */

    function getRandomInt(max) {
        return Math.floor(Math.random() * max);
    }
    var choice = getRandomInt(3)+1;

    var joueur2 = [
        { "id": 2, "win": 0, "lose": 0, "choice": choice },
    ];

    console.log("Joueur 2 : " + joueur2[0].choice);

    /* */

    var lose = 0;
    var win = 0;
    var nul = 0;

    if (joueur1[0].choice == joueur2[0].choice) {
        nul += 1;
        console.log("nul : " + nul);
        return nul;
    }
    else if (joueur1[0].choice == 1 && joueur2[0].choice == 3 || joueur1[0].choice == 2 && joueur2[0].choice == 1 || joueur1[0].choice == 3 && joueur2[0].choice == 2) {
        win += 1;
        console.log("win : " + win);
        return win;
    }
    else {
        lose += 1;
        console.log("lose : " + lose);
        return lose;
    }
}