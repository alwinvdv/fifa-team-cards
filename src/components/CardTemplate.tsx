import React from 'react';
import { View, Image, Text, StyleSheet } from 'react-native';
import { PlayerCard } from '../types';

interface CardTemplateProps {
  player: Partial<PlayerCard>;
  isPreview?: boolean;
}

const CardTemplate: React.FC<CardTemplateProps> = ({ player, isPreview }) => {
  return (
    <View style={styles.card}>
      <View style={styles.header}>
        <Text style={styles.rating}>{player.rating || '??'}</Text>
        <Text style={styles.position}>{player.position || '??'}</Text>
      </View>
      <View style={styles.photoContainer}>
        {player.photoUri ? (
          <Image source={{ uri: player.photoUri }} style={styles.photo} />
        ) : (
          <View style={styles.photoPlaceholder} />
        )}
      </View>
      <Text style={styles.name}>{player.name || 'Player Name'}</Text>
      <View style={styles.stats}>
        <View style={styles.statRow}>
          <Text style={styles.stat}>PAC {player.pace || '??'}</Text>
          <Text style={styles.stat}>DRI {player.dribbling || '??'}</Text>
        </View>
        <View style={styles.statRow}>
          <Text style={styles.stat}>SHO {player.shooting || '??'}</Text>
          <Text style={styles.stat}>DEF {player.defending || '??'}</Text>
        </View>
        <View style={styles.statRow}>
          <Text style={styles.stat}>PAS {player.passing || '??'}</Text>
          <Text style={styles.stat}>PHY {player.physical || '??'}</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    width: 300,
    height: 420,
    backgroundColor: '#f4d03f',
    borderRadius: 10,
    padding: 15,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  rating: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  position: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  photoContainer: {
    width: '100%',
    height: 200,
    backgroundColor: '#fff',
    borderRadius: 5,
    marginBottom: 10,
    overflow: 'hidden',
  },
  photo: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
  photoPlaceholder: {
    width: '100%',
    height: '100%',
    backgroundColor: '#ddd',
  },
  name: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 10,
  },
  stats: {
    flex: 1,
    justifyContent: 'space-around',
  },
  statRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
  },
  stat: {
    fontSize: 16,
    fontWeight: '600',
  },
});

export default CardTemplate;
