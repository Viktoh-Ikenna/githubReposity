import React from 'react';
import styles from './navBar.module.css';
import { BsGithub } from 'react-icons/bs';
import { AiOutlineBell, AiOutlineCaretDown } from 'react-icons/ai';
import { IoMdAdd } from 'react-icons/io';
import Search from '../searchBar/search.component';

const NavBar = () => {
    return (
        <div className={`${styles.container}`}>
            <div className={`${styles.logo}`}>
                <BsGithub />
            </div>
            <div className={`${styles.lists}`}>
                <Search placeholder="Search" />
                <div className={`${styles.navItemsContainer}`}>
                    <div>Pull requests</div>
                    <div>Issues</div>
                    <div>Marketplace</div>
                    <div>Explore</div>
                </div>
            </div>

            <div className={`${styles.others}`}>
                <div>
                    <AiOutlineBell />
                </div>
                <div>
                    <IoMdAdd />
                    <span className={`${styles.arrow}`}>
                        <AiOutlineCaretDown />
                    </span>
                </div>
                <div>
                    <img
                        src={
                            'https://avatars.githubusercontent.com/u/61013640?s=400&u=74a1c89c3ed983faead9be384dc16f7745c9a37f&v=4'
                        }
                        className={`${styles.avata}`}
                    />
                    <span className={`${styles.arrow}`}>
                        <AiOutlineCaretDown />
                    </span>
                </div>
            </div>
        </div>
    );
};

export default NavBar;
