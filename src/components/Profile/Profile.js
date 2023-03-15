import React from 'react';

import ProfilePhoto from '../../assets/images/IMG_9037.JPG';
import classes from './Profile.module.css';

const Profile = (props) => {
  return (
    <div className={classes.profile}>
        <div className={classes.profileHead}>
            <img src={ProfilePhoto} alt="Profile Pic" className={classes.photo} />
            <p>{props.name}</p>
        </div>
        <div>
            <p>{props.postSection}{props.postTotal}</p>
        </div>
        <div>
            Socials
        </div>
    </div>
  )
};

export default Profile;