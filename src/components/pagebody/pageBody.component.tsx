import React from 'react';
import Controllers from '../profileControllers/controllers.component';
import Search from '../searchBar/search.component';
import styles from './page.module.css';
import { AiOutlineCaretDown } from 'react-icons/ai';
import { GoRepo } from 'react-icons/go';
import EachRepo from '../EachRepo/EachRepo.component';
import ProfileContainer from '../Profile/profile.component';
import { useEffect } from 'react';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { repositories } from '../../store/reducers/repositories';
const origin = 'https://api.github.com';
const Myname = 'Viktoh-Ikenna';

const Pagebody = () => {
    const Repos = useSelector((state) => state.repositories.repos);
    const Dispatch = useDispatch();
    console.log(Repos);
    const DispatchRepos = (dispatch: any, payload: any) => {
        dispatch({
            type: repositories,
            payload,
        });
    };
    useEffect(() => {
        (async () => {
            const data = await axios.get(`${origin}/users/${Myname}/repos`);
            const result = await data.data;
            console.log(result);
            DispatchRepos(Dispatch, result);
        })();
    }, []);

    return (
        <div style={{ minHeight: '100%' }}>
            <Controllers />
            <div className={`${styles.divisions}`}>
                <div className={`${styles.side}`}>
                    <ProfileContainer />
                </div>
                <div className={`${styles.main}`}>
                    <div className={`${styles.controls2}`}>
                        <Search
                            placeholder=" Find a Repostory...."
                            stylesP={styles.search}
                        />
                        <div className={`${styles.lists}`}>
                            <div
                                className={`${styles.button} ${styles.bgButtonColor}`}
                            >
                                Type
                                <span className={`${styles.arrow}`}>
                                    <AiOutlineCaretDown />
                                </span>
                            </div>
                            <div
                                className={`${styles.button} ${styles.bgButtonColor}`}
                            >
                                Language
                                <span className={`${styles.arrow}`}>
                                    <AiOutlineCaretDown />
                                </span>
                            </div>
                            <div
                                className={`${styles.button} ${styles.bgButtonColor}`}
                            >
                                Sort
                                <span className={`${styles.arrow}`}>
                                    <AiOutlineCaretDown />
                                </span>
                            </div>
                        </div>
                        <div className={`${styles.button} ${styles.addnew}`}>
                            <span className={`${styles.icons} `}>
                                <GoRepo />
                            </span>
                            New
                        </div>
                    </div>
                    {/* FOR THE POSTS LISTINGS  */}
                    <div className={`${styles.repoContainer}`}>
                        {Repos ? (
                            Repos.map((el: any, i: number) => (
                                <EachRepo key={i} elements={el} />
                            ))
                        ) : (
                            <EachRepo key={i} />
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Pagebody;
