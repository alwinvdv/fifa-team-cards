import React from 'react';
import {
  View,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  Text,
  Dimensions,
} from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../types';
import CardTemplate from '../components/CardTemplate';

type Props = NativeStackScreenProps<RootStackParamList, 'Home'>;

// Temporary mock data - we'll replace this with real data storage later
const mockCards = [
  {
    id: '1',
    name: 'Add Your First Player',
    position: 'NEW',
    rating: 99,
    pace: 99,
    shooting: 99,
    passing: 99,
    dribbling: 99,
    defending: 99,
    physical: 99,
    photoUri: '',
    teamId: '1',
  },
];

const HomeScreen: React.FC<Props> = ({ navigation }) => {
  const renderCard = ({ item }: any) => (
    <TouchableOpacity
      style={styles.cardContainer}
      onPress={() => navigation.navigate('CardDetails', { cardId: item.id })}
    >
      <CardTemplate player={item} />
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={mockCards}
        renderItem={renderCard}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.listContent}
        ListHeaderComponent={
          <View style={styles.header}>
            <Text style={styles.title}>Your Team Cards</Text>
            <TouchableOpacity
              style={styles.addButton}
              onPress={() => navigation.navigate('CreateCard')}
            >
              <Text style={styles.addButtonText}>Create New Card</Text>
            </TouchableOpacity>
          </View>
        }
        ListEmptyComponent={
          <View style={styles.emptyContainer}>
            <Text style={styles.emptyText}>No cards yet</Text>
            <Text style={styles.emptySubtext}>
              Create your first FIFA card by tapping the button above
            </Text>
          </View>
        }
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8f9fa',
  },
  listContent: {
    padding: 16,
  },
  header: {
    marginBottom: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 16,
  },
  addButton: {
    backgroundColor: '#2ecc71',
    padding: 16,
    borderRadius: 8,
    alignItems: 'center',
  },
  addButtonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: '600',
  },
  cardContainer: {
    marginBottom: 20,
    alignItems: 'center',
  },
  emptyContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
    marginTop: 40,
  },
  emptyText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 8,
  },
  emptySubtext: {
    fontSize: 16,
    color: '#666',
    textAlign: 'center',
  },
});

export default HomeScreen;
