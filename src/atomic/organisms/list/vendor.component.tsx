import React from 'react';
import {Box, Spacer} from '../../atoms/ui';
import {VendorCard} from '../../molecules/card';
import {Vendor} from '../../layouts';

interface VendorListProps {
  vendorList: Vendor[];
  handleModalShow: (vendor: Vendor) => void;
}

export const VendorList: React.FC<VendorListProps> = ({
  vendorList,
  handleModalShow,
}) => {
  const [vendor1, vendor2, vendor3, vendor4] = vendorList;
  return (
    <Box>
      <Box row>
        <VendorCard
          vendorName={vendor1.name}
          handleAction={() => handleModalShow(vendor1)}
          connected={vendor1.connected}
        />
        <Spacer size={16} horizontal />
        <VendorCard
          vendorName={vendor2.name}
          handleAction={() => handleModalShow(vendor2)}
          connected={vendor2.connected}
        />
      </Box>
      <Spacer size={16} />
      <Box row>
        <VendorCard
          vendorName={vendor3.name}
          handleAction={() => handleModalShow(vendor3)}
          connected={vendor3.connected}
        />
        <Spacer size={16} horizontal />
        <VendorCard
          vendorName={vendor4.name}
          handleAction={() => handleModalShow(vendor4)}
          connected={vendor4.connected}
        />
      </Box>
    </Box>
  );
};
