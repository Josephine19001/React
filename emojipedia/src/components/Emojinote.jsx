import React from 'react';


function Emojinote(props){
    return(
        <div  className="note">
            <p className="emoji">{props.emoji}</p>
            <dl>
                <dt >{props.name}</dt>
                <dd >{props.description}</dd>
            </dl>
        </div>
    );
}

export default Emojinote;