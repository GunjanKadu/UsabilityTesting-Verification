import React from 'react';
import { ProfileNameAvatar } from 'components/Profile /Profile/Profile';
import { PasswordCard } from 'components/Profile /ProfilePassword/ProfilePassword';
import { ProfileAddress } from 'components/Profile /ProfileAddress/ProfileAddress';
import { ChefProfile } from 'components/Profile /ChefProfile/chefProfile';

export const Profile = () => {
  return (
    <div className='container' style={{ position: 'relative', top: '20%' }}>
      <div className='row my-1'>
        <div className='col-md-6'>
          <ProfileNameAvatar
            name='Arpith Muddi'
            email='arpithpm@gmail.com'
            img='https://pics.paypal.com/00/p/NTNhMDY1YjYtOWRhNS00ZDg2LWJhNWItMmI4MGU1OGI2NGM1/image_2.JPG'
          />
          <PasswordCard
            password='arpithpm'
            email='arpithpm@gmail.com'
            img='https://pics.paypal.com/00/p/NTNhMDY1YjYtOWRhNS00ZDg2LWJhNWItMmI4MGU1OGI2NGM1/image_2.JPG'
          />
        </div>
        <div className='col-md-6'>
          <ProfileAddress
            name='Arpith Muddi'
            email='arpithpm@gmail.com'
            img='https://pics.paypal.com/00/p/NTNhMDY1YjYtOWRhNS00ZDg2LWJhNWItMmI4MGU1OGI2NGM1/image_2.JPG'
          />
          <ChefProfile
            name='Arpith Muddi'
            email='arpithpm@gmail.com'
            img='https://pics.paypal.com/00/p/NTNhMDY1YjYtOWRhNS00ZDg2LWJhNWItMmI4MGU1OGI2NGM1/image_2.JPG'
          />
        </div>
      </div>
    </div>
  );
};
