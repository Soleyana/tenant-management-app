import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Alert } from 'react-native';

export default function TenantForm({ navigation }) {
  const [apartmentNumber, setApartmentNumber] = useState('');
  const [area, setArea] = useState('');
  const [description, setDescription] = useState('');
  const [requests, setRequests] = useState([]);

  const handleSubmit = () => {
    if (apartmentNumber && area && description) {
      const newRequest = { apartmentNumber, area, description };
      setRequests([...requests, newRequest]);
      Alert.alert('Success', 'Request submitted successfully');
      setApartmentNumber('');
      setArea('');
      setDescription('');
    } else {
      Alert.alert('Error', 'Please fill out all fields');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Submit a Maintenance Request</Text>
      <TextInput
        style={styles.input}
        placeholder="Apartment Number"
        value={apartmentNumber}
        onChangeText={setApartmentNumber}
      />
      <TextInput
        style={styles.input}
        placeholder="Area (e.g., kitchen)"
        value={area}
        onChangeText={setArea}
      />
      <TextInput
        style={styles.input}
        placeholder="Description of the problem"
        value={description}
        onChangeText={setDescription}
        multiline
      />
      <Button title="Submit Request" onPress={handleSubmit} />
      <Button
        title="View Requests"
        onPress={() => navigation.navigate('Request List', { requests })}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f5f5f5',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  input: {
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    marginBottom: 15,
    paddingHorizontal: 10,
  },
});
