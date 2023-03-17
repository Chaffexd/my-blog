import React from 'react';

import ProfilePhoto from '../../assets/images/IMG_9037.JPG';
import classes from './Profile.module.css';

const Profile = (props) => {
  return (
    <div className={classes.profile}>
        <div className={classes.profileHead}>
            <img src={ProfilePhoto} alt="Profile Pic" className={classes.photo} />
            <p className={classes.name}>{props.name}</p>
        </div>
        <div className={classes.info}>
          <div className={classes.postCounter}>
              <p>{props.postSection}</p>&nbsp;<span className={classes.postTotal}>{props.postTotal}</span>
          </div>
          <div className={classes.socials}>
              {props.width < 375 ? "" : "Socials"}
          </div>
        </div>
    </div>
  )
};

export default Profile;