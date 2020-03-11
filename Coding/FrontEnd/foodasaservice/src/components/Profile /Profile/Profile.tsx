import React from 'react';

export const ProfileNameAvatar = props => {
  return (
    <div className='row'>
      <div className='col'>
        <div className='card border-danger mx-1'>
          <span className='my-1 mx-3 text-danger'>Profile</span>
          <div className='row mx-0'>
            <div className='col-md-5 my-2'>
              <img src={props.img} alt='...' className='img-thumbnail ' />
            </div>
            <div className='col'>
              <div className='card-body p-0 my-3 '>
                <h5 className='card-title h4'>{props.name}</h5>
                <h6 className='card-subtitle mb-2 text-muted'>{props.email}</h6>

                <hr className='mr-3 badge-danger' />
                <p className='card-text '>
                  <strong>Bio: </strong>Some quick example text to build on the
                  card title and make up the bulk of the card's content.
                </p>
                <div className='text-right'>
                  <a href='#' className='card-link '>
                    Edit Profile
                  </a>
                </div>
                {/*<a href="#" className="card-link">Another link</a>*/}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
