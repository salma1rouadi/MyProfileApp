import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image, Alert } from 'react-native';

export default function Page() {
  
  const handlePress = () => {
    Alert.alert(
      "Contact Info",
      "Email: salma.rouadi@email.com \nPhone: +212 6XX-XXXXXX",
      [{ text: "OK" }]
    );
  };

  return (
    <View style={styles.screen}>
      <View style={styles.card}>
        
        <Image 
          source={{ uri: 'https://via.placeholder.com/100' }} 
          style={styles.profileImg} 
        />

        <Text style={styles.name}>Salma Rouadi</Text>
        <Text style={styles.role}>Développeuse Mobile Full-Stack</Text>
        
        <Text style={styles.bio}>
          Passionnée par le développement d'applications mobiles performantes avec React Native. 🚀
        </Text>

        <TouchableOpacity 
          style={styles.button} 
          onPress={handlePress}
          activeOpacity={0.7}
        >
          <Text style={styles.buttonText}>Contactez-moi</Text>
        </TouchableOpacity>

      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F0F2F5',
  },
  card: {
    width: '85%',
    backgroundColor: 'white',
    borderRadius: 25,
    padding: 25,
    alignItems: 'center',
    elevation: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 5 },
    shadowOpacity: 0.15,
    shadowRadius: 10,
  },
  profileImg: {
    width: 100,
    height: 100,
    borderRadius: 50,
    borderWidth: 3,
    borderColor: '#2ecc71',
    marginBottom: 15,
  },
  name: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#1C1E21',
  },
  role: {
    fontSize: 14,
    color: '#2ecc71',
    fontWeight: '600',
    marginBottom: 15,
    textTransform: 'uppercase',
  },
  bio: {
    fontSize: 15,
    color: '#606770',
    textAlign: 'center',
    lineHeight: 22,
    marginBottom: 20,
  },
  button: {
    backgroundColor: '#1877F2',
    paddingVertical: 12,
    paddingHorizontal: 30,
    borderRadius: 12,
    width: '100%',
    alignItems: 'center',
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
});