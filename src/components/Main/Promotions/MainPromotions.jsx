import React from 'react';
import Title from '../../common/Title/Title';
import classes from './MainPromotions.module.css';
import Promotion from './Promotion/Promotion';

const MainPromotions = props => {
    let promotions = props.promotions.map(promotion => <Promotion header={promotion.header} body={promotion.body} image={promotion.image} key={promotion.id}/>)
    return (
        <section className={classes.promotions}>
            <Title text={'Акции'} />
            <div className={classes.promotionContainer}>
                {promotions}
            </div>
        </section>
    );
};

export default MainPromotions;