import React from 'react';
import styles from './profile.module.css';
import { GiBookCover } from 'react-icons/gi';
import { GoRepo } from 'react-icons/go';
import { MdOutlineCropRotate } from 'react-icons/md';
import { FiPackage } from 'react-icons/fi';
import { AiOutlineStar } from 'react-icons/ai';
import NumberWrapper from '../numWrapper.component';

interface inputPorps {
    placeholder?: string;
    label?: string;
    stylesB?: any;
}
const InputText = ({ placeholder, label, stylesB }: inputPorps) => {
    return (
        <div className={`${styles.contEdit}`}>
            <label htmlFor="">{label}</label>
            <input
                type="text"
                name="search"
                className={`${styles.input} ${stylesB}`}
                autoComplete="off"
                placeholder={placeholder}
            />
        </div>
    );
};

const ProfileContainer = () => {
    return (
        <div className={`${styles.container}`}>
            <div className={`${styles.imgContainer}`}>
                <img
                    src={
                        'https://avatars.githubusercontent.com/u/61013640?s=400&u=74a1c89c3ed983faead9be384dc16f7745c9a37f&v=4'
                    }
                    alt=""
                    className={`${styles.img}`}
                />
            </div>
            {/* <div className={`${styles.cont}`}>
                <div className={`${styles.name}`}>Viktoh-ikenna</div>
                <div className={`${styles.editProfileBtn}`}>Edit Profile</div>
            </div> */}
            <div className={`${styles.editProfileContainer}`}>
                <InputText placeholder="Name" label="Name" />
                <InputText
                    placeholder="Add a Bio"
                    label="Bio"
                    stylesB={styles.h}
                />
                <div className={`${styles.cancelContainer}`}>
                    <div className={`${styles.saveBtn}`}>save</div>
                    <div className={`${styles.cancelBtn}`}>cancel</div>
                </div>
            </div>
            <div className={`${styles.organization}`}></div>
        </div>
    );
};

export default ProfileContainer;
