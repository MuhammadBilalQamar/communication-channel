/* eslint-disable no-nested-ternary */
import React from 'react';
import { LinearGradient } from 'expo-linear-gradient';

const GradientStyle = ({ style, children }) => {
  return (
    <LinearGradient
      colors={['#c9e2f5', '#eae9f3']}
      style={style}
      useAngle={true}
      angle={-110}
      angleCenter={{ x: 0.5, y: 0.5 }}
      start={{ x: 1.0, y: 1.0 }}
      end={{ x: 1.0, y: 0.0 }}
    >
      {children}
    </LinearGradient>
  );
};

export default GradientStyle;
