import React, { Component } from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  ImageBackground,
  TextInput,
  TouchableOpacity,
  Alert,
  KeyboardAvoidingView,
  Platform,
  StatusBar,
  SafeAreaView,
} from "react-native";

export default class Profile extends Component {
  render() {
    return (
      <SafeAreaView style={styles.droidSafeArea}>
       <View style={styles.container}>
         <Text style={styles.textTitle}>Perfil do Dog</Text>
       </View>

        <View style={styles.inputContainer}>
           <TextInput 
              style={styles.textinput}
              onChargeText={text => this.setState({ })}
              placeholder={"Nome do seu Dog"} 
              placeholderTextColor={"#FFFFFF"} 
              autoFocus
           />

           <TextInput
              style={[styles.textinput,{marginTop: 20}]}
              onChargeText={text => this.setState({ })}
              placeholder={"Raça do seu Dog"} 
              placeholderTextColor={"#FFFFFF"} 
              secureTextEntry
            />

          <TextInput
              style={[styles.textinput,{marginTop: 20}]}
              onChargeText={text => this.setState({ })}
              placeholder={"Idade do seu Dog"} 
              placeholderTextColor={"#FFFFFF"} 
              secureTextEntry
            />
          
        </View>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 0.2,
    justifyContent: "center",
    alignItems: "center"
  },
  droidSafeArea: {
    marginTop: Platform.OS === "android" ? StatusBar.currentHeight : RFValue(35)
  },
  textTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  inputContainer: {
    flex: 0.4,
    justifyContent: "center",
  },
  textinput: { 
    width: "75%", 
    height: 55, 
    padding: 10, 
    borderColor: "#FFFFFF", 
    borderWidth: 4, 
    borderRadius: 10, 
    fontSize: 18, 
    color: "#FFFFFF",
    backgroundColor: "#5653D4" 
}, 
});