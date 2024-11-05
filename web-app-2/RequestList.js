import React from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';

export default function RequestList({ route }) {
  const { requests } = route.params;

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Submitted Requests</Text>
      <FlatList
        data={requests}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => (
          <View style={styles.requestItem}>
            <Text>Apartment: {item.apartmentNumber}</Text>
            <Text>Area: {item.area}</Text>
            <Text>Description: {item.description}</Text>
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  requestItem: {
    padding: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
});
