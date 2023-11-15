import {IconButton} from '../../molecules/button';
import React, {useState} from 'react';
import styled from 'styled-components/native';

const InputContainer = styled.View`
  background-color: ${({theme}) => theme.color.light};
  border-radius: 0;
  padding: 10px 14px;
  border-radius: 4px;
  display: flex;
  flex-direction: row;
`;

const StyledInput = styled.TextInput`
  border-width: 0;
  color: ${({theme}) => theme.color.black};
  font-size: 16px;
  line-height: 20px;
  flex: 1;
`;

interface InputFieldProps {
  isPassword?: boolean;
  value: string;
  onChange: (text: string) => void;
}

export const InputField: React.FC<InputFieldProps> = ({
  isPassword = false,
  value,
  onChange,
}) => {
  const [secureText, setSecureText] = useState(isPassword);

  return (
    <InputContainer>
      <StyledInput
        secureTextEntry={secureText}
        value={value}
        onChangeText={(text: string) => onChange(text)}
        autoCapitalize="none"
        autoComplete="off"
        autoCorrect={false}
      />
      {isPassword && (
        <IconButton
          name="eye-off-o"
          onPress={() => setSecureText(!secureText)}
        />
      )}
    </InputContainer>
  );
};
