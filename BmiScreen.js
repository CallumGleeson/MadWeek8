import React, { useState } from "react";
import { Button, Text, TextInput, View } from "react-native";

export default function BmiScreen() {
  const [weight, setWeight] = useState("");
  const [height, setHeight] = useState("");
  const [result, setResult] = useState("");

  function calculateBMI() {
    const kg = Number(weight);
    const metres = Number(height) / 100;

    if (!Number.isFinite(kg) || !Number.isFinite(metres) || kg <= 0 || metres <= 0) {
      setResult("Enter a valid weight and height.");
      return;
    }

    const bmi = kg / (metres * metres);
    setResult("BMI: " + bmi.toFixed(1));
  }

  return (
    <View style={{ padding: 20, gap: 12 }}>
      <Text style={{ fontSize: 22, fontWeight: "bold" }}>BMI Calculator</Text>

      <Text>Weight (kg)</Text>
      <TextInput
        value={weight}
        onChangeText={setWeight}
        keyboardType="decimal-pad"
        style={{ borderWidth: 1, padding: 8 }}
      />

      <Text>Height (cm)</Text>
      <TextInput
        value={height}
        onChangeText={setHeight}
        keyboardType="decimal-pad"
        style={{ borderWidth: 1, padding: 8 }}
      />

      <Button title="Calculate BMI" onPress={calculateBMI} />
      <Text>{result}</Text>
    </View>
  );
}