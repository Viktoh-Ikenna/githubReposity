import React from 'react';
import styles from './controllers.module.css';
import { GiBookCover } from 'react-icons/gi';
import { GoRepo } from 'react-icons/go';
import { MdOutlineCropRotate } from 'react-icons/md';
import { FiPackage } from 'react-icons/fi';
import { AiOutlineStar } from 'react-icons/ai';
import NumberWrapper from '../numWrapper.component';

const Controllers = () => {
    return (
        <div className={`${styles.container}`}>
            <div className={`${styles.listsItems}`}>
                <div>
                    <span className={`${styles.icons}`}>
                        <GiBookCover />
                    </span>
                    Overview
                    <NumberWrapper>1</NumberWrapper>
                </div>
                <div className={`${styles.active} `}>
                    <span className={`${styles.icons} `}>
                        <GoRepo />
                    </span>
                    Respositories
                    <NumberWrapper>17</NumberWrapper>
                </div>
                <div>
                    <span className={`${styles.icons}`}>
                        <MdOutlineCropRotate />
                    </span>
                    Projects
                </div>
                <div>
                    <span className={`${styles.icons}`}>
                        <FiPackage />
                    </span>
                    Packages
                </div>
                <div>
                    <span className={`${styles.icons} `}>
                        <AiOutlineStar />
                    </span>
                    Stars
                </div>
            </div>
        </div>
    );
};

export default Controllers;
