import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, ScrollView, Alert } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../types';

type Props = NativeStackScreenProps<RootStackParamList, 'CreateTeam'>;

export const CreateTeamScreen: React.FC<Props> = ({ navigation }) => {
  const [teamName, setTeamName] = useState('');
  const [players, setPlayers] = useState<string[]>(['']);

  const addPlayer = () => {
    setPlayers([...players, '']);
  };

  const updatePlayer = (index: number, name: string) => {
    const newPlayers = [...players];
    newPlayers[index] = name;
    setPlayers(newPlayers);
  };

  const removePlayer = (index: number) => {
    if (players.length > 1) {
      const newPlayers = players.filter((_, i) => i !== index);
      setPlayers(newPlayers);
    }
  };

  const createTeam = () => {
    if (!teamName.trim()) {
      Alert.alert('Error', 'Please enter a team name');
      return;
    }

    const validPlayers = players.filter(name => name.trim());
    if (validPlayers.length === 0) {
      Alert.alert('Error', 'Please add at least one player');
      return;
    }

    // TODO: Create team in database
    const teamId = 'temp-id'; // This will come from the database
    navigation.navigate('TeamSetup', { teamId });
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.title}>Create Your Team</Text>
        
        <View style={styles.inputGroup}>
          <Text style={styles.label}>Team Name</Text>
          <TextInput
            style={styles.input}
            value={teamName}
            onChangeText={setTeamName}
            placeholder='Enter team name (e.g., AFC JO16-1)'
          />
        </View>

        <Text style={styles.sectionTitle}>Players</Text>
        {players.map((player, index) => (
          <View key={index} style={styles.playerRow}>
            <TextInput
              style={[styles.input, styles.playerInput]}
              value={player}
              onChangeText={(text) => updatePlayer(index, text)}
              placeholder={`Player ${index + 1}`}
            />
            <TouchableOpacity
              style={styles.removeButton}
              onPress={() => removePlayer(index)}
            >
              <Text style={styles.removeButtonText}>✗</Text>
            </TouchableOpacity>
          </View>
        ))}

        <TouchableOpacity style={styles.addButton} onPress={addPlayer}>
          <Text style={styles.addButtonText}>+ Add Player</Text>
        </TouchableOpacity>

        <TouchableOpacity 
          style={styles.createButton}
          onPress={createTeam}
        >
          <Text style={styles.createButtonText}>Create Team</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  content: {
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
    color: '#2c3e50',
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: '600',
    marginTop: 20,
    marginBottom: 10,
    color: '#2c3e50',
  },
  inputGroup: {
    marginBottom: 20,
  },
  label: {
    fontSize: 16,
    marginBottom: 8,
    color: '#34495e',
  },
  input: {
    borderWidth: 1,
    borderColor: '#bdc3c7',
    borderRadius: 8,
    padding: 12,
    fontSize: 16,
    backgroundColor: '#fff',
  },
  playerRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  playerInput: {
    flex: 1,
    marginRight: 10,
  },
  removeButton: {
    padding: 8,
    borderRadius: 20,
    backgroundColor: '#e74c3c',
    width: 36,
    height: 36,
    justifyContent: 'center',
    alignItems: 'center',
  },
  removeButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  addButton: {
    padding: 15,
    borderRadius: 8,
    backgroundColor: '#3498db',
    marginTop: 10,
    marginBottom: 20,
  },
  addButtonText: {
    color: '#fff',
    textAlign: 'center',
    fontSize: 16,
    fontWeight: '600',
  },
  createButton: {
    padding: 16,
    borderRadius: 8,
    backgroundColor: '#2ecc71',
    marginTop: 20,
  },
  createButtonText: {
    color: '#fff',
    textAlign: 'center',
    fontSize: 18,
    fontWeight: '600',
  },
});

export default CreateTeamScreen;