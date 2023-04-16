/*import React, { useState, useEffect } from 'react';
import { View, Button, TextInput, Dimensions } from 'react-native';
import { BarChart } from 'react-native-chart-kit';
import { auth, database } from './firebase';
import { saveWaterIntake } from './saveWaterIntake';

const WaterTrackingScreen = () => {
  const [waterIntake, setWaterIntake] = useState('');
  const [data, setData] = useState([]);

  useEffect(() => {
    const user = auth.currentUser;
    if (!user) {
      console.log('User not authenticated');
      return;
    }

    const userId = user.uid;
    const userRef = database.ref(`users/${userId}`);
    userRef.on('value', (snapshot) => {
      const dataObj = snapshot.val();
      const dataArr = Object.keys(dataObj).map((date) => ({
        date,
        intake: dataObj[date],
      }));
      setData(dataArr);
    });
  }, []);

  const handleSave = () => {
    const user = auth.currentUser;
    if (!user) {
      console.log('User not authenticated');
      return;
    }
    const date = new Date().toISOString().slice(0, 10);
    saveWaterIntake(date, waterIntake)
      .then(() => {
        const newData = [...data, { date, intake: parseInt(waterIntake) }];
        setData(newData);
        setWaterIntake('');
      })
      .catch((error) => {
        console.log('Error saving water intake:', error);
      });
  };
  
  
  

  const chartConfig = {
    backgroundGradientFrom: '#fff',
    backgroundGradientTo: '#fff',
    decimalPlaces: 0,
    color: (opacity = 1) => `rgba(0, 0, 255, ${opacity})`,
    labelColor: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
    style: {
      borderRadius: 16,
    },
    propsForDots: {
      r: '6',
      strokeWidth: '2',
      stroke: '#ffa726',
    },
  };

  return (
    <View>
      <BarChart
        data={{
          labels: data.map((item) => item.date),
          datasets: [
            {
              data: data.map((item) => item.intake),
            },
          ],
        }}
        width={Dimensions.get('window').width}
        height={220}
        yAxisLabel="ml"
        chartConfig={chartConfig}
      />
      <TextInput
        value={waterIntake}
        onChangeText={setWaterIntake}
        placeholder="Enter water intake in ml"
        keyboardType="numeric"
      />
      <Button title="Save" onPress={handleSave} />
    </View>
  );
};

export default WaterTrackingScreen;*/

import React, { useState, useEffect } from 'react';
import { View, Button, TextInput, Dimensions } from 'react-native';
import { BarChart } from 'react-native-chart-kit';
import { auth, database } from './firebase';
import { saveWaterIntake } from './saveWaterIntake';

const WaterTrackingScreen = () => {
  const [waterIntake, setWaterIntake] = useState('');
  const [data, setData] = useState([]);

  useEffect(() => {
    const user = auth.currentUser;
    if (!user) {
      console.log('User not authenticated');
      return;
    }

    const userId = user.uid;
    const userRef = database.ref(`users/${userId}`);

    userRef.on('value', (snapshot) => {
      const dataObj = snapshot.val();
      const dataArr = Object.keys(dataObj || {}).map((date) => ({
        date,
        intake: dataObj[date],
      }));
      setData(dataArr);
    });

    return () => {
      userRef.off(); // remove listener when component unmounts
    };
  }, []);

  const handleSave = () => {
    const user = auth.currentUser;
    if (!user) {
      console.log('User not authenticated');
      return;
    }
    const date = new Date().toISOString().slice(0, 10);
    saveWaterIntake(date, waterIntake)
      .then(() => {
        setWaterIntake('');
        setData([...data, { date, intake: waterIntake }]);
      })
      .catch((error) => {
        console.log('Error saving water intake: ', error);
      });
  };
  const chartConfig = {
    backgroundGradientFrom: '#fff',
    backgroundGradientTo: '#fff',
    decimalPlaces: 0,
    color: (opacity = 1) => `rgba(0, 0, 255, ${opacity})`,
    labelColor: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
    style: {
      borderRadius: 16,
    },
    propsForDots: {
      r: '6',
      strokeWidth: '2',
      stroke: '#ffa726',
    },
  };

  return (
    <View>
      <BarChart
        data={{
          labels: data.map((item) => item.date),
          datasets: [
            {
              data: data.map((item) => item.intake),
            },
          ],
        }}
        width={Dimensions.get('window').width}
        height={220}
        yAxisLabel="ml"
        chartConfig={chartConfig}
      />
      <TextInput
        value={waterIntake}
        onChangeText={setWaterIntake}
        placeholder="Enter water intake in ml"
        keyboardType="numeric"
      />
      <Button title="Save" onPress={handleSave} />
    </View>
  );
};

export default WaterTrackingScreen;


