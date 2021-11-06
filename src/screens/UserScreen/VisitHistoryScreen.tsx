import React, { memo, useState } from 'react';
import { Text, StyleSheet, View, Button, Alert } from 'react-native';

import VisitHistoryCard from '../../components/UserScreen/VisitHistoryCard';

import { VisitHistory } from '../../constants/datatypes';

const dataSet = [
  {
    id: 1,
    date: "2021-12-12",
    hospital: "Vaccination Center",
    ward: 2,
    status: "completed"
  },
  {
    id: 2,
    date: "2021-12-12",
    hospital: "Colombo Hospital",
    ward: 2,
    status: "completed"
  },
  {
    id: 3,
    date: "2021-12-12",
    hospital: "Kurunegala Hospital",
    ward: 2,
    status: "completed"
  },
]

export default function VisitHistoryScreen() {
  return (
    <View style={styles.container}>
      <View style={styles.info}>
        <Text style={styles.infoFont}>**Last 3 hospital visit history records will be displayed here.</Text>
      </View>
      {dataSet.map((visit: VisitHistory) => {
        return (
          <VisitHistoryCard key={visit.id} VisitData={visit} />
        )
      })}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'space-around',
    padding: 10,
  },
  info: {
    backgroundColor: '#b6dddb',
    width: "100%",
    padding: 10,
    marginBottom: 8,
    marginTop: 8, 
  },
  infoFont: {
    fontSize: 17,
  },
});
