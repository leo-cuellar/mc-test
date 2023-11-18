import React, {useState} from 'react';
import {MainLayout} from './main.layout';
import {Spacer, Text} from '../atoms/ui';
import {VendorList} from '../organisms/list';
import {Button} from '../molecules/button';
import {CTAModal, ConfirmationModal, DrawerModal} from '../organisms/modal';
import {useNavigation} from '@react-navigation/native';

const VENDORS = [
  {
    id: 1,
    name: 'netflix',
    connected: false,
  },
  {
    id: 2,
    name: 'spotify',
    connected: false,
  },
  {
    id: 3,
    name: 'uber-eats',
    connected: false,
  },
  {
    id: 4,
    name: 'starbucks',
    connected: false,
  },
];

export interface Vendor {
  id: number;
  name: string;
  connected: boolean;
}

export const OnboardingLayout: React.FC = () => {
  const navigation = useNavigation();
  const [modalVisible, setModalVisible] = useState('');
  const [vendors, setVendors] = useState(VENDORS);
  const [confirmationModalVisible, setConfirmationModalVisible] =
    useState(false);
  const [ctaModalVisible, setCtaModalVisible] = useState(false);

  const handleModalShow = (vendor: Vendor) => {
    const {name} = vendor;
    setModalVisible(name);
  };

  const handleConnect = (id: number) => {
    const newVendors = vendors.map(v => {
      if (v.id === id) {
        return {
          ...v,
          connected: true,
        };
      }
      return v;
    });
    setVendors(newVendors);
    setModalVisible('');
    setConfirmationModalVisible(true);
  };

  return (
    <MainLayout backgroundColor="white">
      <CTAModal
        visible={ctaModalVisible}
        hide={() => setCtaModalVisible(false)}
        action={() => navigation.navigate('DashboardMain' as never)}
      />
      <ConfirmationModal
        visible={confirmationModalVisible}
        hide={() => setConfirmationModalVisible(false)}
      />
      <DrawerModal
        id={vendors.filter(vendor => vendor.name === modalVisible)[0]?.id}
        name={modalVisible}
        visible={modalVisible}
        setVisible={setModalVisible}
        handleConnect={handleConnect}
      />
      <Spacer size={20} />
      <Text type="H5" textAlign="center">
        Connect service providers
      </Text>
      <Spacer size={14} />
      <Text type="P1" textAlign="center">
        Select accounts you have that you would like to update with your new
        credit card
      </Text>
      <Spacer size={30} />
      <VendorList vendorList={vendors} handleModalShow={handleModalShow} />
      <Spacer size={40} />
      <Button
        text="Continue"
        onPress={() => setCtaModalVisible(true)}
        disabled={!vendors.some(vendor => vendor.connected)}
      />
      <Spacer size={16} />
      <Button
        text="Skip for now"
        onPress={() => navigation.navigate('DashboardMain' as never)}
        type="secondary"
      />
      <Spacer size={16} />
    </MainLayout>
  );
};
