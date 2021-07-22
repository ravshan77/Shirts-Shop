import React, { useState, useEffect } from "react";
import data from "../data"

export const DataContext = React.createContext();

const DataProvider = (props) => {
  const [observer, setObserver] = useState(0) //  poyloqchi (observer)
  const [ cards, setCards] = useState({card:[]})
  // initialState
  const [state, setState] = useState(data);

  const { products } = state;
  const {card} = cards; 
  function addCard(id) {
    const yes = products.find((p) => {
      return p._id == id;
    });
    const is = card.find((c) => {
      return c._id == id;
    });
  
    if (is) {
      return card;
    } else {
      card.push(yes);
      setObserver((prev) => prev += 1)
    }
  }
  

  function increase(id) {
    setCards({
      ...cards,
      tekenProducts: card.map((c) => (c._id == id ? (c.count += 1) : c)),
    });
  }

  function decrease(id) {
    const is = card.find((c) => {
      return c._id == id;
    });

    if (is.count == 1) {
      return is;
    }
    if (is.count > 1) {
      setCards({
        ...cards,
        tekenProducts: card.map((c) => (c._id == id ? (c.count -= 1) : c)),
      });
    }
  }

  function removeCard(id) {
    const is = card.find((c) => {
      return c._id == id;
    });

    if (is) {
      let data = card.filter((c) => c._id != is._id);
      setCards({ ...cards, card: data });
    }
  }
  
    useEffect(() =>{
      if (card.length > 0) {
        localStorage.setItem('dataCart', JSON.stringify(card))
      }
    })

    useEffect(() => {
      const cardData = localStorage.getItem('dataCart');
      setCards(prevState => ({
        ...prevState,
        card: JSON.parse(cardData)
      }))
    }, []);


  
  return (
    <DataContext.Provider
      value={{
        products,
        addCard,
        card,
        decrease,
        increase,
        removeCard,
      }}
    >
      {props.children}
    </DataContext.Provider>
  );
};

export default DataProvider;