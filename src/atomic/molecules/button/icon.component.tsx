import React from 'react';
import {Icon} from '../../atoms/ui';
import {Pressable} from 'react-native';

interface IconButtonProps {
  name: string;
  onPress: () => void;
}

export const IconButton: React.FC<IconButtonProps> = ({name, onPress}) => {
  return (
    <Pressable onPress={onPress}>
      <Icon name={name} />
    </Pressable>
  );
};
