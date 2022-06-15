import React from 'react';
import MakeAdminForm from '../component/MakeAdmin/MakeAdminForm';
import SubNav from '../component/SubNav/SubNav';
import { LayoutContiner } from '../style/MetariulUiStyle';

const MakeAdmin = () => {
    return (
        <LayoutContiner>
        <SubNav project="MAKE ADMIN" />
        <MakeAdminForm />
      </LayoutContiner>

    );
};

export default MakeAdmin;