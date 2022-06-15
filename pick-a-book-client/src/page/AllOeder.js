import React from 'react';
import AllOrderForm from '../component/AllOrder.js/AllOrderForm';
import SubNav from '../component/SubNav/SubNav';
import { LayoutContiner } from '../style/MetariulUiStyle';

const AllOeder = () => {
    return (
        <LayoutContiner>
        <SubNav project="ALL ORDER" />
        <AllOrderForm />
      </LayoutContiner>
    );
};

export default AllOeder;