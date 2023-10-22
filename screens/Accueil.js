import React, { useState, useRef, useEffect } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
  Dimensions,
  ImageBackground,
} from "react-native";
import { slides } from "../data/SlideData";
import BtnAccueil from "../components/BtnAccueil";
import BtnHome from "../components/BtnHome";
import BtnAcc from "../components/BtnAcc";
import DefileText from "../components/DefileText";
import { useNavigation } from "@react-navigation/native";
import { Linking } from "react-native";
import globalesStyles from "../styles/globalesStyles";

const Accueil = () => {
  const [activeSlide, setActiveSlide] = useState(0);
  const scrollViewRef = useRef();

  const navigation = useNavigation();

  const handleScroll = (event) => {
    const slideWidth = Dimensions.get("window").width;
    const slideIndex = Math.round(
      event.nativeEvent.contentOffset.x / slideWidth
    );
    setActiveSlide(slideIndex);
  };

  const openWebsite = () => {
    const url = "https://saintebible.com/"; // Remplacez par l'URL que vous souhaitez ouvrir
    Linking.openURL(url).catch((err) =>
      console.error("Erreur lors de l'ouverture du lien : ", err)
    );
  };

  const scrollToSlide = (index) => {
    const slideWidth = Dimensions.get("window").width;
    scrollViewRef.current.scrollTo({ x: index * slideWidth, animated: true });
  };

  // Fonction pour faire défiler automatiquement les diapositives
  const autoScroll = () => {
    const nextSlide = (activeSlide + 1) % slides.length;
    scrollToSlide(nextSlide);
  };

  useEffect(() => {
    const intervalId = setInterval(autoScroll, 10000); // Changer de diapositive toutes les 3 secondes
    return () => clearInterval(intervalId); // Nettoyer l'intervalle lors du démontage du composant
  }, [activeSlide]);

  return (
    <View style={styles.container}>
      <ScrollView
        ref={scrollViewRef}
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        onScroll={handleScroll}
      >
        {slides.map((slide, index) => (
          <View key={index} style={styles.slide}>
            <Image source={slide.image} style={styles.slideImage} />
          </View>
        ))}
      </ScrollView>
      <View style={styles.pagination}>
        {slides.map((_, index) => (
          <Text
            key={index}
            style={[
              styles.paginationDot,
              index === activeSlide && styles.activeDot,
            ]}
            onPress={() => scrollToSlide(index)}
          >
            &bull;
          </Text>
        ))}
      </View>

      <ImageBackground
        source={require("../assets/images/normal_Tignes-ruisseau_du_lac.jpeg")}
        style={styles.BtnAlign}
      >
        <BtnAccueil nameIcons="people-outline" title="Evangelisation" />
        <BtnAccueil
          title="Ressources"
          nameIcons="library-books"
          onPress={() => navigation.navigate("Ressources")}
        />

        <BtnAccueil
          nameIcons="menu-book"
          title="Bible"
          //url="https://lumieredumonde.tv/"
          onPress={openWebsite}
        />

        <BtnHome nameIcons="calendar" title="Agenda" />
        <BtnAcc nameIcons="hand-holding-heart" title="Dons" />
        <BtnAccueil nameIcons="live-tv" title="Media" />
      </ImageBackground>

      <View style={styles.newsContainer}>
        <DefileText />
        <Text style={styles.newsLabel}>News :</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  slide: {
    width: Dimensions.get("window").width,
    justifyContent: "flex-start",
    alignItems: "flex-start",
    backgroundColor: "#f5f5f5",
    marginBottom: 15,
  },
  slideImage: {
    width: Dimensions.get("window").width,
    height: 255,
    resizeMode: "cover", // Ou 'contain' selon vos besoins
  },
  pagination: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    paddingTop: 10,
    marginTop: -34,
  },
  paginationDot: {
    fontSize: 24,
    color: globalesStyles.white,
    margin: 5,
  },
  activeDot: {
    color: "#333",
  },
  BtnAlign: {
    flexDirection: "row", // Met les boutons en ligne
    flexWrap: "wrap", // Force les boutons à revenir à la ligne
    justifyContent: "center", // Centre les boutons horizontalement
    marginBottom: 80,
    resizeMode: "stretch", // Ou 'contain' selon vos besoins
    marginBottom: 0,
    marginTop: -10,
  },
  newsContainer: {
    flexDirection: "row", // Aligne les éléments horizontalement
    alignItems: "center", // Centre les éléments verticalement
  },
  newsLabel: {
    fontWeight: "bold", // Met le texte en gras si nécessaire
    backgroundColor: globalesStyles.rouge,
    color: globalesStyles.white,
    position: "absolute",
  },
  newsText: {
    marginLeft: 5, // Espace entre le label et le texte
  },
});

export default Accueil;
