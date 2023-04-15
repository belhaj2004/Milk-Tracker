/*import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, TouchableWithoutFeedback, Keyboard } from 'react-native';
import { BarChart } from 'react-native-chart-kit';

const MilkScreen = ({ route }) => {
  const { username } = route.params;
  const [milkAmount, setMilkAmount] = useState('');
  const [data, setData] = useState({
    labels: [],
    datasets: [
      {
        data: [],
        color: (opacity = 1) => `rgba(0, 102, 204, ${opacity})`,
        strokeWidth: 2,
      },
    ],
  });

  const handleSave = () => {
    const newData = {
      labels: [...data.labels, data.labels.length],
      datasets: [
        {
          data: [...data.datasets[0].data, Number(milkAmount)],
          color: (opacity = 1) => `rgba(0, 102, 204, ${opacity})`,
          strokeWidth: 2,
        },
      ],
    };

    setData(newData);
    setMilkAmount('');
  };

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style={styles.container}>
        <Text style={styles.title}>Milk Screen</Text>
        <Text style={styles.greeting}>Hi {username}!</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter milk amount"
          value={milkAmount}
          onChangeText={(text) => setMilkAmount(text)}
          keyboardType="numeric"
        />
        <TouchableOpacity style={styles.button} onPress={handleSave}>
          <Text style={styles.buttonText}>Save</Text>
        </TouchableOpacity>
        <View style={styles.chartContainer}>
          {data.labels && data.datasets && (
            <BarChart
              data={data}
              width={350}
              height={220}
              yAxisInterval={1}
              fromZero={true}
              yLabelsOffset={-15}
              chartConfig={{
                backgroundGradientFrom: '#fff',
                backgroundGradientTo: '#fff',
                color: (opacity = 1) => `rgba(0, 102, 204, ${opacity})`,
                strokeWidth: 2,
              }}
              style={{
                marginVertical: 8,
                borderRadius: 16,
              }}
              verticalLabelRotation={-45}
              yAxisSuffix=" oz"
            />
          )}
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 32,
  },
  greeting: {
    fontSize: 18,
    marginBottom: 16,
  },
  input: {
    width: '80%',
    height: 48,
    padding: 8,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 6,
    marginBottom: 16,
  },
  button: {
    width: '80%',
    height: 48,
    backgroundColor: '#0066cc',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 6,
    marginBottom: 16,
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  chartContainer: {
    marginTop: 32,
  },
});

export default MilkScreen;*/

import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, TouchableWithoutFeedback, Keyboard } from 'react-native';
import { BarChart } from 'react-native-chart-kit';

const MilkScreen = ({ route }) => {
  const { username } = route.params;
  const [milkAmount, setMilkAmount] = useState('');
  const [data, setData] = useState({
    labels: [],
    datasets: [
      {
        data: [],
        color: (opacity = 1) => `rgba(0, 102, 204, ${opacity})`,
        strokeWidth: 2,
      },
    ],
  });

  const handleSave = () => {
    const newData = {
      labels: [...data.labels, data.labels.length],
      datasets: [
        {
          data: [...data.datasets[0].data, Number(milkAmount)],
          color: (opacity = 1) => `rgba(0, 102, 204, ${opacity})`,
          strokeWidth: 2,
        },
      ],
    };

    setData(newData);
    setMilkAmount('');
  };

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style={styles.container}>
        <Text style={styles.title}>Milk Screen</Text>
        <Text style={styles.greeting}>Hi {username}!</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter milk amount"
          value={milkAmount}
          onChangeText={(text) => setMilkAmount(text)}
          keyboardType="numeric"
        />
        <TouchableOpacity style={styles.button} onPress={handleSave}>
          <Text style={styles.buttonText}>Save</Text>
        </TouchableOpacity>
        <View style={styles.chartContainer}>
          {data.labels && data.datasets && (
            <BarChart
              data={data}
              width={350}
              height={220}
              yAxisInterval={1}
              chartConfig={{
                backgroundGradientFrom: '#fff',
                backgroundGradientTo: '#fff',
                color: (opacity = 1) => `rgba(0, 102, 204, ${opacity})`,
                strokeWidth: 2,
                barPercentage: 0.5,
                useShadowColorFromDataset: false,
                yMin: 0,
                yMax: 9,
              }}
            />
          )}
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 32,
  },
  greeting: {
    fontSize: 18,
    marginBottom: 16,
  },
  input: {
    width: '80%',
    height: 48,
    padding: 8,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 6,
    marginBottom: 16,
  },
  button: {
    width: '80%',
    height: 48,
    backgroundColor: '#0066cc',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 6,
    marginBottom: 16,
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  chartContainer: {
    marginTop: 32,
  },
});

export default MilkScreen;
