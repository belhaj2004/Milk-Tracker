import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Keyboard, TouchableWithoutFeedback, KeyboardAvoidingView, Picker } from 'react-native';
import { BarChart } from 'react-native-chart-kit';
import DateTimePicker from '@react-native-community/datetimepicker';

const MilkScreen = ({ route }) => {
  const { username } = route.params;
  const [milkAmount, setMilkAmount] = useState('');
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [showDatePicker, setShowDatePicker] = useState(false);
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
  const [selectedDay, setSelectedDay] = useState(selectedDate.getDate());
  const [selectedMonth, setSelectedMonth] = useState(selectedDate.getMonth());
  const [selectedYear, setSelectedYear] = useState(selectedDate.getFullYear());

  const handleSave = () => {
    const newData = {
      labels: [...data.labels, `${selectedDay}/${selectedMonth + 1}/${selectedYear}`],
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

  const handleDateChange = (event, selectedDate) => {
    const currentDate = selectedDate || date;
    setShowDatePicker(false);
    setSelectedDate(currentDate);
    setSelectedDay(currentDate.getDate());
    setSelectedMonth(currentDate.getMonth());
    setSelectedYear(currentDate.getFullYear());
  };

  const showDatepicker = () => {
    setShowDatePicker(true);
  };

  const formattedDate = selectedDate.toLocaleDateString();

  return (
    <KeyboardAvoidingView style={styles.container} behavior="padding">
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <>
          <Text style={styles.title}>Milk Screen</Text>
          <Text style={styles.greeting}>Hi {username}!</Text>
          <View style={styles.dateContainer}>
            <Picker
              selectedValue={selectedDay}
              onValueChange={(itemValue, itemIndex) => setSelectedDay(itemValue)}
            >
              {[...Array(31)].map((_, i) => (
                <Picker.Item key={i} label={`${i + 1}`} value={i + 1} />
              ))}
            </Picker>
            <Picker
              selectedValue={selectedMonth}
              onValueChange={(itemValue, itemIndex) => setSelectedMonth(itemValue)}
            >
              {[                'January',                'February',                'March',                'April',                'May',                'June',                'July',                'August',                'September',                'October',                'November',                'December',              ].map((month, i) => (
                <Picker.Item key={i} label={month} value={i} />
              ))}
            </Picker>
            <Picker
              selectedValue={selectedYear}
              onValueChange={(itemValue, itemIndex) => setSelectedYear(itemValue)}
            >
 {[...Array(20)].map((_, i) => (
  <Picker.Item key={i} label={`${selectedDate.getFullYear() - i}`} value={selectedDate.getFullYear() - i} />
))}
        </Picker>
      </View>
      <TouchableOpacity style={styles.datePickerButton} onPress={showDatepicker}>
        <Text style={styles.datePickerButtonText}>Select Date</Text>
      </TouchableOpacity>
      {showDatePicker && (
        <DateTimePicker
          value={selectedDate}
          mode="date"
          display="spinner"
          onChange={handleDateChange}
        />
      )}
      <TextInput
        style={styles.input}
        keyboardType="numeric"
        placeholder="Enter Milk Amount"
        value={milkAmount}
        onChangeText={(text) => setMilkAmount(text)}
      />
      <TouchableOpacity style={styles.button} onPress={handleSave}>
        <Text style={styles.buttonText}>Save</Text>
      </TouchableOpacity>
      <BarChart
        data={data}
        width={350}
        height={220}
        yAxisLabel=""
        chartConfig={{
          backgroundGradientFrom: '#fff',
          backgroundGradientTo: '#fff',
          decimalPlaces: 2,
          color: (opacity = 1) => `rgba(0, 102, 204, ${opacity})`,
          style: {
            borderRadius: 16,
          },
        }}
        style={styles.chart}
      />
    </>
  </TouchableWithoutFeedback>
</KeyboardAvoidingView>
);
};
export default MilkScreen;

const styles = {
container: {
flex: 1,
justifyContent: 'center',
alignItems: 'center',
backgroundColor: '#fff',
},
title: {
fontSize: 28,
fontWeight: 'bold',
marginBottom: 20,
},
greeting: {
fontSize: 18,
marginBottom: 20,
},
input: {
width: 250,
height: 50,
borderColor: 'gray',
borderWidth: 1,
borderRadius: 5,
padding: 10,
marginBottom: 20,
},
button: {
backgroundColor: '#0066CC',
paddingVertical: 10,
paddingHorizontal: 20,
borderRadius: 5,
},
buttonText: {
color: '#fff',
fontSize: 18,
fontWeight: 'bold',
},
chart: {
marginTop: 20,
borderRadius: 16,
},
dateContainer: {
flexDirection: 'row',
alignItems: 'center',
marginBottom: 20,
},
datePickerButton: {
backgroundColor: '#0066CC',
paddingVertical: 10,
paddingHorizontal: 20,
borderRadius: 5,
marginBottom: 20,
},
datePickerButtonText: {
color: '#fff',
fontSize: 18,
fontWeight: 'bold',
},
};