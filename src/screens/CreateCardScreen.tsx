import React, { useState } from 'react';
import {
  View,
  ScrollView,
  TextInput,
  StyleSheet,
  Text,
  TouchableOpacity,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../types';
import CardTemplate from '../components/CardTemplate';
import PhotoPicker from '../components/PhotoPicker';

type Props = NativeStackScreenProps<RootStackParamList, 'CreateCard'>;

const POSITIONS = ['GK', 'DEF', 'MID', 'FWD'];

const CreateCardScreen: React.FC<Props> = ({ navigation }) => {
  const [playerData, setPlayerData] = useState({
    name: '',
    position: 'MID',
    rating: '',
    pace: '',
    shooting: '',
    passing: '',
    dribbling: '',
    defending: '',
    physical: '',
    photoUri: '',
  });

  const updateField = (field: string, value: string) => {
    setPlayerData(prev => ({
      ...prev,
      [field]: value,
    }));
  };

  const handlePhotoSelect = (uri: string) => {
    updateField('photoUri', uri);
  };

  const handleSave = () => {
    // TODO: Save card data
    navigation.goBack();
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={styles.container}
    >
      <ScrollView style={styles.scrollView}>
        <View style={styles.previewContainer}>
          <CardTemplate
            player={{
              ...playerData,
              rating: parseInt(playerData.rating) || 0,
              pace: parseInt(playerData.pace) || 0,
              shooting: parseInt(playerData.shooting) || 0,
              passing: parseInt(playerData.passing) || 0,
              dribbling: parseInt(playerData.dribbling) || 0,
              defending: parseInt(playerData.defending) || 0,
              physical: parseInt(playerData.physical) || 0,
            }}
          />
        </View>

        <View style={styles.form}>
          <PhotoPicker
            onPhotoSelect={handlePhotoSelect}
            photoUri={playerData.photoUri}
          />

          <View style={styles.inputGroup}>
            <Text style={styles.label}>Player Name</Text>
            <TextInput
              style={styles.input}
              value={playerData.name}
              onChangeText={(value) => updateField('name', value)}
              placeholder="Enter player name"
            />
          </View>

          <View style={styles.inputGroup}>
            <Text style={styles.label}>Position</Text>
            <View style={styles.positionContainer}>
              {POSITIONS.map((pos) => (
                <TouchableOpacity
                  key={pos}
                  style={[
                    styles.positionButton,
                    playerData.position === pos && styles.positionButtonActive,
                  ]}
                  onPress={() => updateField('position', pos)}
                >
                  <Text
                    style={[
                      styles.positionButtonText,
                      playerData.position === pos && styles.positionButtonTextActive,
                    ]}
                  >
                    {pos}
                  </Text>
                </TouchableOpacity>
              ))}
            </View>
          </View>

          <View style={styles.statsContainer}>
            <View style={styles.statInput}>
              <Text style={styles.label}>Rating</Text>
              <TextInput
                style={styles.input}
                value={playerData.rating}
                onChangeText={(value) => updateField('rating', value)}
                keyboardType="numeric"
                maxLength={2}
                placeholder="0-99"
              />
            </View>

            <View style={styles.statInput}>
              <Text style={styles.label}>Pace</Text>
              <TextInput
                style={styles.input}
                value={playerData.pace}
                onChangeText={(value) => updateField('pace', value)}
                keyboardType="numeric"
                maxLength={2}
                placeholder="0-99"
              />
            </View>

            <View style={styles.statInput}>
              <Text style={styles.label}>Shooting</Text>
              <TextInput
                style={styles.input}
                value={playerData.shooting}
                onChangeText={(value) => updateField('shooting', value)}
                keyboardType="numeric"
                maxLength={2}
                placeholder="0-99"
              />
            </View>

            <View style={styles.statInput}>
              <Text style={styles.label}>Passing</Text>
              <TextInput
                style={styles.input}
                value={playerData.passing}
                onChangeText={(value) => updateField('passing', value)}
                keyboardType="numeric"
                maxLength={2}
                placeholder="0-99"
              />
            </View>

            <View style={styles.statInput}>
              <Text style={styles.label}>Dribbling</Text>
              <TextInput
                style={styles.input}
                value={playerData.dribbling}
                onChangeText={(value) => updateField('dribbling', value)}
                keyboardType="numeric"
                maxLength={2}
                placeholder="0-99"
              />
            </View>

            <View style={styles.statInput}>
              <Text style={styles.label}>Defending</Text>
              <TextInput
                style={styles.input}
                value={playerData.defending}
                onChangeText={(value) => updateField('defending', value)}
                keyboardType="numeric"
                maxLength={2}
                placeholder="0-99"
              />
            </View>

            <View style={styles.statInput}>
              <Text style={styles.label}>Physical</Text>
              <TextInput
                style={styles.input}
                value={playerData.physical}
                onChangeText={(value) => updateField('physical', value)}
                keyboardType="numeric"
                maxLength={2}
                placeholder="0-99"
              />
            </View>
          </View>

          <TouchableOpacity style={styles.saveButton} onPress={handleSave}>
            <Text style={styles.saveButtonText}>Create Card</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  scrollView: {
    flex: 1,
  },
  previewContainer: {
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#f8f9fa',
  },
  form: {
    padding: 20,
  },
  inputGroup: {
    marginBottom: 20,
  },
  label: {
    fontSize: 16,
    fontWeight: '600',
    marginBottom: 8,
    color: '#333',
  },
  input: {
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 8,
    padding: 12,
    fontSize: 16,
  },
  positionContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  positionButton: {
    flex: 1,
    padding: 12,
    borderWidth: 1,
    borderColor: '#ddd',
    marginHorizontal: 4,
    borderRadius: 8,
    alignItems: 'center',
  },
  positionButtonActive: {
    backgroundColor: '#2ecc71',
    borderColor: '#2ecc71',
  },
  positionButtonText: {
    fontSize: 16,
    color: '#333',
  },
  positionButtonTextActive: {
    color: '#fff',
  },
  statsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  statInput: {
    width: '48%',
    marginBottom: 16,
  },
  saveButton: {
    backgroundColor: '#2ecc71',
    padding: 16,
    borderRadius: 8,
    alignItems: 'center',
    marginTop: 20,
  },
  saveButtonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: '600',
  },
});

export default CreateCardScreen;
