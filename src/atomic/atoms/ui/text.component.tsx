import React from 'react';
import {Text as ReactText, StyleSheet} from 'react-native';
import {useTheme} from 'styled-components';

export type TextType =
  | 'H1'
  | 'H1T'
  | 'H1R'
  | 'H2'
  | 'H3'
  | 'H4'
  | 'H4R'
  | 'H5'
  | 'H6'
  | 'P1'
  | 'P1B'
  | 'P2'
  | 'P2B'
  | 'L1'
  | 'L1B';

interface TextProps {
  children: React.ReactNode;
  type: TextType;
  color?: string;
  textAlign?: 'left' | 'right' | 'center' | 'justify';
}

const styles = (
  color: string,
  textAlign: 'left' | 'right' | 'center' | 'justify',
) =>
  StyleSheet.create({
    base: {color, textAlign},
    H1: {fontSize: 36, lineHeight: 46, fontWeight: '600'},
    H1T: {fontSize: 36, lineHeight: 46, fontWeight: '100'},
    H1R: {fontSize: 36, lineHeight: 46, fontWeight: '400'},
    H2: {fontSize: 32, lineHeight: 40, fontWeight: '600'},
    H3: {fontSize: 30, lineHeight: 36, fontWeight: '600'},
    H4: {fontSize: 26, lineHeight: 32, fontWeight: '600'},
    H4R: {fontSize: 26, lineHeight: 32, fontWeight: '400'},
    H5: {fontSize: 22, lineHeight: 28, fontWeight: '600'},
    H6: {fontSize: 18, lineHeight: 24, fontWeight: '600'},
    P1: {fontSize: 16, lineHeight: 20, fontWeight: '400'},
    P1B: {fontSize: 16, lineHeight: 20, fontWeight: '700'},
    P2: {fontSize: 14, lineHeight: 18, fontWeight: '400'},
    P2B: {fontSize: 14, lineHeight: 18, fontWeight: '700'},
    L1: {fontSize: 12, lineHeight: 16, fontWeight: '500'},
    L1B: {fontSize: 12, lineHeight: 16, fontWeight: '700'},
  });

export const Text: React.FC<TextProps> = ({
  children,
  type,
  color,
  textAlign = 'left',
}) => {
  const theme = useTheme();
  return (
    <ReactText
      style={{
        ...styles(color || theme.color.black, textAlign).base,
        ...styles(color || theme.color.black, textAlign)[type],
      }}>
      {children}
    </ReactText>
  );
};
