import React from 'react';
import {Frame} from '../../atoms/container';
import {Image} from '../../atoms/ui';

const IMAGES = {
  amazon: require('../../../assets/vendors/amazon.png'),
  'dunkin-donuts': require('../../../assets/vendors/dunkin-donuts.png'),
  netflix: require('../../../assets/vendors/netflix.png'),
  spotify: require('../../../assets/vendors/spotify.png'),
  starbucks: require('../../../assets/vendors/starbucks.png'),
  'uber-eats': require('../../../assets/vendors/uber-eats.png'),
};

interface SizeProps {
  size?: number;
}

interface VendorFrameProps extends SizeProps {
  vendorName: string;
}

export const VendorFrame: React.FC<VendorFrameProps> = ({vendorName, size}) => {
  const imageSource = IMAGES[vendorName as keyof typeof IMAGES];
  return (
    <Frame size={size}>
      <Image source={imageSource} />
    </Frame>
  );
};
