import { StyleSheet, Text, View, Button } from 'react-native';
import React, { useState } from 'react';

export default function App() {

  const [winJ1, setWinJ1] = useState(0);
  const [loseJ1, setLoseJ1] = useState(0);
  const [nulJ1, setNulJ1] = useState(0);

  const [winJ2, setWinJ2] = useState(0);
  const [loseJ2, setLoseJ2] = useState(0);
  const [nulJ2, setNulJ2] = useState(0);

  function jouer(value) {
    /* JOUEUR 1 */

    var joueur1 = [
        { "id": 1, "win": 0, "lose": 0, "choice": value },
    ];

    /* JOUEUR 2 */

    function getRandomInt(max) {
        return Math.floor(Math.random() * max);
    }
    var choice = getRandomInt(3)+1;
    if (choice == 1) {
      choice = 'pierre';
    }
    else if (choice == 2) {
      choice = 'feuille';
    }
    else {
      choice = 'ciseaux';
    }

    console.log('Joueur 2 : ' + choice);

    var joueur2 = [
        { "id": 2, "win": 0, "lose": 0, "choice": choice },
    ];

    if (joueur1[0].choice == joueur2[0].choice) {
        setNulJ1(nulJ1 + 1);
        setNulJ2(nulJ2 + 1);
    }
    else if (joueur1[0].choice == 'pierre' && joueur2[0].choice == 'ciseaux' || joueur1[0].choice == 'feuille' && joueur2[0].choice == 'pierre' || joueur1[0].choice == 'ciseaux' && joueur2[0].choice == 'feuille') {
        setWinJ1(winJ1 + 1);
        setLoseJ2(loseJ2 + 1);
    }
    else {
        setLoseJ1(loseJ1 + 1);
        setWinJ2(winJ2 + 1);
    }
}

  return (
    <View style={styles.container}>
      <View style={styles.haut}>
        <Text class={styles.choix}>Pierre | 1</Text>
        <Text class={styles.choix}>Feuille | 2</Text>
        <Text class={styles.choix}>Ciseaux | 3</Text>
      </View>
      <Text> - </Text>
      
      
      <View style={styles.bas}>
        <Text class={styles.choix} onPress={() => jouer('pierre')}>Pierre | 1</Text>
        <Text class={styles.choix} onPress={() => jouer('feuille')}>Feuille | 2</Text>
        <Text class={styles.choix} onPress={() => jouer('ciseaux')}>Ciseaux | 3</Text>
      </View>

      <View>
        <Button title="JOUER" onPress={() => jouer('pierre')}/>
      </View>

      <View>
        <Text>JOUEUR 1</Text>
        <Text>Win : {winJ1}</Text>
        <Text>Lose : {loseJ1}</Text>
        <Text>Nul : {nulJ1}</Text>
      </View>
      <View>
        <Text>JOUEUR 2</Text>
        <Text>Win : {winJ2}</Text>
        <Text>Lose : {loseJ2}</Text>
        <Text>Nul : {nulJ2}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  haut: {
    backgroundColor: 'red',
    flexDirection: 'row',
  },
  bas: {
    backgroundColor: 'blue',
    flexDirection: 'row',
  },
  choix: {
    padding: 1000,
    margin: 100,
  },
});
