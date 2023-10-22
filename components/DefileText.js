import React, { useRef, useEffect } from 'react';
import { ScrollView, Text, View, StyleSheet, Animated, Dimensions } from 'react-native';
import globalesStyles from '../styles/globalesStyles';

const ScreenWidth = Dimensions.get('window').width;
const TextWidth = 2 * ScreenWidth; // La largeur du texte dépendra de la quantité de texte que vous avez

const DefileText = () => {
  const scrollX = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    const scrollAnimation = Animated.loop(
      Animated.timing(scrollX, {
        toValue: -TextWidth,
        duration: 19000, // Durée de l'animation en millisecondes
        useNativeDriver: false,
      })
    );

    scrollAnimation.start();

    return () => {
      scrollAnimation.stop();
    };
  }, [scrollX]);

  return (
    <View style={styles.container}>
      <Animated.View
        style={[
          styles.textContainer,
          {
            transform: [{ translateX: scrollX }],
          },
        ]}
      >
        <Text style={styles.scrollText}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero.
        </Text>
      </Animated.View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'right',
  },
  textContainer: {
    flexDirection: 'row',
    alignItems: 'right',
  },
  scrollText: {
    fontSize: 16,
    width: TextWidth, // Largeur du texte
    textAlign:'right',
    color:globalesStyles.bleu
  },
});

export default DefileText