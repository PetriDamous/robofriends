import React from 'react';

const Card = (e) => {
    console.log(e.name);    
    return(        
        <div className="bg-light-green tc dib br3 pa3 ma2 grow bw2 shadow-5">
            <img alt="robot face" src={`https://robohash.org/${e.id}?200x200`} />
            <h2>{e.name}</h2>
            <p>{e.email}</p>
        </div>
    );
}

export default Card;