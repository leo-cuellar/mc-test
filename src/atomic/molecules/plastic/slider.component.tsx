import React from 'react';
import styled from 'styled-components/native';
import {Plastic} from './plastic.component';
import {View} from 'react-native';

const Container = styled(View)`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
`;

const PlasticSliderContainer = styled(View)`
  width: 260px;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  gap: 24px;
`;

interface CardSliderProps {
  expanded: boolean;
  locked: boolean;
  selectedCard: {[key: string]: any};
}

export const PlasticSlider: React.FC<CardSliderProps> = ({
  selectedCard,
  expanded,
  locked,
}) => {
  return (
    <Container>
      <PlasticSliderContainer>
        <Plastic expanded={expanded} name={selectedCard.name} locked={locked} />
        <Plastic expanded={expanded} name="" disabled />
      </PlasticSliderContainer>
    </Container>
  );
};
