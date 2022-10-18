import React from 'react';
import { v4 as uuidv4 } from 'uuid';

interface category {
    categories: Array<string>;
}

const Breadcrumb = ({categories}: category) => {
    return (
        <div className={'breadcrumbContainer'} style={{textAlign: 'center'}}>
            {categories.map((category,index, argument) => {
                    if(argument.length -1 === index){
                        return (<span key={uuidv4()}> {category} </span>);
                    }
                    return (<span key={uuidv4()}> {category} &gt; </span>);
                }
            )}
        </div>
    );
};

export default Breadcrumb;