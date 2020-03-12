import React from 'react';
import { ProfileNameAvatar } from 'components/Profile /Profile/Profile';
import { PasswordCard } from 'components/Profile /ProfilePassword/ProfilePassword';
import { ProfileAddress } from 'components/Profile /ProfileAddress/ProfileAddress';
import ChefProfile from 'components/Profile /ChefProfile/chefProfile';

export const Profile = () => {
  const userName = sessionStorage.getItem('userName');
  const firstName = sessionStorage.getItem('firstName');
  return (
    <div className='container' style={{ position: 'relative', top: '20%' }}>
      <div className='row my-1'>
        <div className='col-md-6'>
          <ProfileNameAvatar
            name={firstName}
            email={userName}
            img='https://theresolutioncentre.co.uk/wp-content/uploads/2018/06/profile.png'
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
