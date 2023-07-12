import React from 'react';
import Card from './Card';

const CardList = ({ robots }) => {
  if(robots.length===0){
    throw new Error("no the cardlist is down")
  }
  else{
    return (
      <div>
        {
          robots.map((user, i) => {
            return (
              <Card
                key={i}
                id={robots[i].id}
                name={robots[i].name}
                email={robots[i].email}
                />
            );
          })
        }
      </div>
    );

  }
 
}

export default CardList;