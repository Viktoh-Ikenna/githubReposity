import React from 'react';
import styles from './eachRepo.module.css';
import { AiOutlineStar, AiOutlineCaretDown } from 'react-icons/ai';
interface RepoProps {
    elements?: any;
}
const EachRepo = ({ elements }: RepoProps) => {
    return (
        <div className={`${styles.container}`}>
            <div className={`${styles.desContainer}`}>
                <div className={`${styles.nameHolder}`}>
                    <div className={`${styles.name}`}>{elements.name}</div>
                    <div className={`${styles.existence}`}>
                        {elements.private ? 'Private' : 'Public'}
                    </div>
                </div>
                <div className={`${styles.descriptionHolder}`}>
                    <div className={`${styles.language}`}>
                        <div className={`${styles.round}`}></div>
                        <div>{elements.language}</div>
                    </div>
                    {elements.stargazers_count > 0 && (
                        <div className={`${styles.others}`}>
                            <span className={`${styles.icons} `}>
                                <AiOutlineStar />
                            </span>
                            {elements.stargazers_count}
                        </div>
                    )}
                    <div className={`${styles.timeUpadated}`}>
                        {elements.updated_at}
                    </div>
                </div>
            </div>
            <div className={`${styles.othContainer}`}>
                <div className={`${styles.starBtnContainer}`}>
                    <div className={`${styles.starBtnMain} ${styles.starDF}`}>
                        <span className={`${styles.icons} `}>
                            <AiOutlineStar />
                        </span>
                        star
                    </div>
                    <div className={`${styles.starBtnMain} ${styles.arrowF}`}>
                        <span className={`${styles.arrow}`}>
                            <AiOutlineCaretDown />
                        </span>
                    </div>
                </div>
                <div className={`${styles.lineContainer}`}>
                    <div className={`${styles.line}`}></div>
                </div>
            </div>
        </div>
    );
};

export default EachRepo;
