import React from 'react';
import mine from '../../public/mine.png';

function tileContent(content){
    switch ('content') {
        case 'unclicked':
            return null;
        case 'mine':
            return <img src={mine} />;
        case '0':
            return null;
        default:
            <span>content</span>;
    }
}

function Tile(props){
    return(
        <div>
            {props.clicked? tileContent(props.content): tileContent('unclicked')}
        </div>
    );
}

export default Tile;