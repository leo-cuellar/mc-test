import React from 'react';
import {InputField, Spacer, Text} from '../../atoms/ui';
import {View} from 'react-native';

interface InputProps {
  isPassword?: boolean;
  value: string;
  onChange: any;
}

export const Input: React.FC<InputProps> = ({isPassword, value, onChange}) => {
  return (
    <View>
      <Text type="L1">{isPassword ? 'Password' : 'User Name'}</Text>
      <Spacer size={8} />
      <InputField isPassword={isPassword} value={value} onChange={onChange} />
    </View>
  );
};
