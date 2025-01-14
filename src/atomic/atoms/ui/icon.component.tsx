import React from 'react';
import {Image as ReactImage} from 'react-native';
import styled from 'styled-components/native';

const ICONS = {
  'alert-triangle-o': require('../../../assets/icons/leaf.png'),
  'apple-wallet': require('../../../assets/icons/apple-wallet.png'),
  'arrow-ios-left': require('../../../assets/icons/arrow-ios-left.png'),
  'arrow-ios-right-o-w': require('../../../assets/icons/arrow-ios-right-o-w.png'),
  'arrow-ios-right-o': require('../../../assets/icons/arrow-ios-right-o.png'),
  chain: require('../../../assets/icons/chain.png'),
  'checkmark-circle-2-o': require('../../../assets/icons/checkmark-circle-2-o.png'),
  'checkmark-circle-f': require('../../../assets/icons/checkmark-circle-f.png'),
  'close-w': require('../../../assets/icons/close-w.png'),
  close: require('../../../assets/icons/close.png'),
  'eye-off-o': require('../../../assets/icons/eye-off-o.png'),
  'face-id-white': require('../../../assets/icons/face-id_white.png'),
  'face-id-m': require('../../../assets/icons/face-id-m.png'),
  globe: require('../../../assets/icons/globe.png'),
  image: require('../../../assets/icons/image.png'),
  'image-o': require('../../../assets/icons/image-o.png'),
  leaf: require('../../../assets/icons/leaf.png'),
  'link-2': require('../../../assets/icons/link-2.png'),
  'lock-f': require('../../../assets/icons/lock-f.png'),
  'lock-o': require('../../../assets/icons/lock-o.png'),
  'master-card': require('../../../assets/icons/master-card.png'),
  'nfc-w': require('../../../assets/icons/nfc-w.png'),
  nfc: require('../../../assets/icons/nfc.png'),
  'person-add-o': require('../../../assets/icons/person-add-o.png'),
  refresh: require('../../../assets/icons/refresh.png'),
  'security-f': require('../../../assets/icons/security-f.png'),
  'security-o': require('../../../assets/icons/security-o.png'),
  'settings-f': require('../../../assets/icons/settings-f.png'),
  'settings-o': require('../../../assets/icons/settings-o.png'),
  'sorting-m': require('../../../assets/icons/sorting-m.png'),
  speedometer: require('../../../assets/icons/speedometer.png'),
  'wallet-m': require('../../../assets/icons/wallet-m.png'),
  'bell-o': require('../../../assets/icons/bell-o.png'),
  'credit-card': require('../../../assets/icons/credit-card.png'),
  'settings-sort': require('../../../assets/icons/settings-sort.png'),
  'settings-card': require('../../../assets/icons/settings-card.png'),
};

interface IconProps {
  source?: string;
  name?: string;
  width?: string;
}

const StyledIcon = styled(ReactImage)<IconProps>`
  ${props => props.width && `width: ${props.width};`}
  resize-mode: contain;
`;

export const Icon: React.FC<IconProps> = ({name, width}) => {
  return (
    <StyledIcon source={ICONS[name as keyof typeof ICONS]} width={width} />
  );
};
