import React from 'react';
import classes from './WereTrustworthy.module.css';
import WereTrustworthyItem from './WereTrustworthyItem/WereTrustworthyItem';
import Title from '../../common/Title/Title';


const WereTrustworthy = props => {
    let whyWereTrustedItems = props.whyWereTrusted.map(item => <WereTrustworthyItem text={item.text} icon={item.icon} key={item.id} />)
    return (
        <section className={classes.trustworthy}>
            <Title text='Нам доверяют'/>
            <div className={classes.grid}>
                { whyWereTrustedItems }
            </div>
        </section>
    );
};

export default WereTrustworthy;