import React, { useState, useEffect } from 'react';
import axios from "axios";
import { Text, StyleSheet, View, ActivityIndicator } from 'react-native';

import VisitHistoryCard from '../../components/UserScreen/VisitHistoryCard';

import { VisitHistory } from '../../constants/datatypes';
import { API_URL, test_acess_token } from '../../shared/routes';

const dataSet = [
  {
    id: 1,
    date: "2021-02-12",
    hospital: "Vaccination Center",
    ward: 2,
    status: "Completed"
  },
  {
    id: 2,
    date: "2021-08-05",
    hospital: "Colombo Hospital",
    ward: 2,
    status: "Completed"
  },
  {
    id: 3,
    date: "2021-10-15",
    hospital: "Kurunegala Hospital",
    ward: 2,
    status: "Completed"
  },
]

export default function VisitHistoryScreen() {
  const [visitHistoryList, setVisitHistoryList] = useState<Array<VisitHistory>>([]);
  const [message, setMessage] = useState('');
  const [isError, setIsError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
      setIsLoading(true);
      axios.get(`${API_URL}/management/api/V1/visitor/getVisitHistory/5`, {
          headers: {
              'Authorization': `Bearer ${test_acess_token}`
          }
      })
          .then((res) => {
              setIsLoading(false);
              console.log(res);
              if (res.data.histories.length == 0) {
                  setIsError(true);
                  setMessage("No Records to Display");
              } else {
                  console.log(res.data.histories);
                  setVisitHistoryList(res.data.histories);
              }
          })
          .catch((error) => {
              setIsLoading(false);
              console.error(error);
              setIsError(true);
              setMessage("An error Occured. Try Again Later");
          })
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.info}>
        <Text style={styles.infoFont}>**Last 3 hospital visit history records will be displayed here.</Text>
      </View>
      {isLoading && <ActivityIndicator size="large" color="#04767a" />}
      {isError &&
                <View style={styles.info}>
                    <Text style={styles.infoFont}>{message}</Text>
                </View>
            }
      {visitHistoryList.map((visit: VisitHistory) => {
        return (
          <VisitHistoryCard key={visit.visit_id} VisitData={visit} />
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
