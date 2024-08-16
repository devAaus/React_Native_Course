import React, { useState } from 'react';
import {
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

function App(): React.JSX.Element {
  const [cardColor1, setCardColor1] = useState("#fb5607")
  const [cardColor2, setCardColor2] = useState("#e3d5ca")
  const [cardColor3, setCardColor3] = useState("#03045e")
  const [cardColor4, setCardColor4] = useState("#e36414")
  const [cardColor5, setCardColor5] = useState("#0077b6")
  const [cardColor6, setCardColor6] = useState("#caf0f8")
  const [cardColor7, setCardColor7] = useState("#f07167")
  const [cardColor8, setCardColor8] = useState("#ffd60a")

  const generateRandomColor = () => {
    const hexRange = "0123456789ABCDEF";
    let color = "#";
    for (let i = 0; i < 6; i++) {
      color += hexRange[Math.floor(Math.random() * 16)];
    }
    return color;
  };

  const generateColors = () => {
    setCardColor1(generateRandomColor());
    setCardColor2(generateRandomColor());
    setCardColor3(generateRandomColor());
    setCardColor4(generateRandomColor());
    setCardColor5(generateRandomColor());
    setCardColor6(generateRandomColor());
    setCardColor7(generateRandomColor());
    setCardColor8(generateRandomColor());
  };

  const cardColor = [cardColor1, cardColor2, cardColor3, cardColor4, cardColor5, cardColor6, cardColor7, cardColor8]

  return (
    <>
      <StatusBar backgroundColor='#ffcad4' />
      <View style={styles.container}>
        <View style={styles.colorCardContainer}>
          {cardColor.map((color) => (
            <View key={color} style={[styles.colorCard, { backgroundColor: color }]}>
              <Text selectable style={styles.colorText}>
                {color}
              </Text>
            </View>
          ))}
        </View>
        <TouchableOpacity
          onPress={generateColors}
        >
          <View style={styles.actionButton}>
            <Text style={styles.actionBtnTxt}>
              Generate
            </Text>
          </View>
        </TouchableOpacity>
        <View>
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffcad4',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 20,
  },
  colorCardContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    flexWrap: 'wrap',
    gap: 12,
  },
  colorCard: {
    width: 150,
    height: 150,
    borderWidth: 2,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center'
  },
  actionButton: {
    backgroundColor: 'blue',
    padding: 10,
    borderRadius: 5,
    alignItems: 'flex-end',
  },
  actionBtnTxt: {
    fontSize: 20,
    color: 'white',
    textTransform: 'uppercase',
  },
  colorText: {
    fontSize: 20,
    color: 'white',
    fontWeight: 'bold',
  }
});

export default App;
