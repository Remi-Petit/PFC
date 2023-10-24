import { StyleSheet, Text, View, SafeAreaView, Button } from "react-native";
import React, { useEffect, useState } from "react";
import useWebSocket, { ReadyState } from "react-native-use-websocket";
import Main from "./components/Main";

export default function App() {
  const [player, setPlayer] = useState();
  const [result, setResult] = useState();
  const [selectedCard, setSelectedCard] = useState();

  const socketUrl = "ws://0.tcp.eu.ngrok.io:19849";
  const { sendMessage, lastMessage, readyState } = useWebSocket(socketUrl);

  const connectionStatus = {
    [ReadyState.CONNECTING]: "Connecting",
    [ReadyState.OPEN]: "Open",
    [ReadyState.CLOSING]: "Closing",
    [ReadyState.CLOSED]: "Closed",
    [ReadyState.UNINSTANTIATED]: "Uninstantiated",
  }[readyState];

  useEffect(() => {
    if (lastMessage !== undefined) {
      if (lastMessage.data !== undefined) {
        let data = JSON.parse(lastMessage.data);

        if (data.type === "player") {
          setPlayer(data.value);
        } else if (data.type === "game") {
          setResult(data.value);
        }
      }
    }
  }, [lastMessage]);

  const sendPierre = () => {
    sendMessage(JSON.stringify({ value: "pierre" }));
  };

  const sendResult = (result) => {
    sendMessage(JSON.stringify({ value: result }));
  };

  // return (
  //   <View style={styles.container}>
  //     <Text>Le WebSocket est {connectionStatus}</Text>
  //     <Text>Vous êtes joueurs {player}</Text>
  //     <Text>{result ? result : <Text>En attente de resultat</Text>}</Text>
  //     <Button title='Pierre' onPress={() => sendPierre()} />
  //   </View>
  // );

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.player}>
        <View style={styles.cards}>
          <Main value="pierre1" onPress={() => sendResult("pierre")} />
          <Main value="feuille1" onPress={() => sendResult("feuille")} />
          <Main value="ciseaux1" onPress={() => sendResult("ciseaux")} />
        </View>
      </View>
      <View style={styles.player}>
        <Text>Le WebSocket est {connectionStatus}</Text>
        <Text>Vous êtes joueurs {player}</Text>
        <Text>{result ? result : <Text>En attente de resultat</Text>}</Text>
        <View style={styles.cards}>
          <Main
            value="pierre2"
            onPress={() => sendResult("pierre")}
            setSelectedCard={setSelectedCard}
            selectedCard={selectedCard}
          />
          <Main
            value="feuille2"
            onPress={() => sendResult("feuille")}
            setSelectedCard={setSelectedCard}
            selectedCard={selectedCard}
          />
          <Main
            value="ciseaux2"
            onPress={() => sendResult("ciseaux")}
            setSelectedCard={setSelectedCard}
            selectedCard={selectedCard}
          />
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: "auto",
    justifyContent: "center",
    alignItems: "center",
    background: "linear-gradient(#2364c2, #ffffff)",
  },

  player: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  name: {
    fontWeight: "700",
    textAlign: "center",
    fontSize: 20,
  },
  cards: {
    flexDirection: "row",
  },
});
