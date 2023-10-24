import { Image, StyleSheet, TouchableOpacity } from "react-native";
import { useState, useEffect } from "react";
import React from "react";

const Main = ({ value, onPress, setSelectedCard, selectedCard }) => {
  const [images, setImages] = useState(require("../img/j1_pierre.png")); // set a default value
  const [choice, setChoice] = useState(false);
  

  useEffect(() => {
    switch (value) {
      case "pierre1":
        setImages(require("../img/card-back.png"));
        break;
      case "feuille1":
        setImages(require("../img/card-back.png"));
        break;
      case "ciseaux1":
        setImages(require("../img/card-back.png"));
        break;
      case "pierre2":
        setImages(require("../img/j2_pierre.png"));
        break;
      case "feuille2":
        setImages(require("../img/j2_papier.png"));
        break;
      case "ciseaux2":
        setImages(require("../img/j2_ciseaux.png"));
        break;
      default:
        break;
    }
  }, [value]);

  const handleCardSelection = () => {
    if (!selectedCard) {
      setSelectedCard(value);
    }
    setChoice(true);
    onPress();
  };

  return (
    <TouchableOpacity style={styles.main} onPress={handleCardSelection}>
      <Image
        style={[styles.card, selectedCard === value && styles.choiceCard]}
        source={images}
      />
    </TouchableOpacity>
  );
};

export default Main;

const styles = StyleSheet.create({
  main: {
    flexDirection: "row",
    margin: 15,
  },
  card: {
    height: 150,
    width: 100,
    borderRadius: 15,
    borderColor: "lightgrey",
    borderWidth: 1,
  },
  choiceCard: {
    borderWidth: 4,
    borderColor: "green",
  },
});
