import React, { useState, useEffect } from "react";
import data from "../data"
import i19 from "../assets/product_imges/9.jpg"

export const DataContext = React.createContext();

const DataProvider = (props) => {
  const [observer, setObserver] = useState(0) //  poyloqchi (observer)
  const [ cards, setCards] = useState({card:[
    {colors:  ['#DCDCDC', '\t#808080', '#E6E6FA', 'black'],
    content: "Welcome to our channel Dev AT. Here you can learn web designing, UI/UX designing, html css tutorials, css animations and css effects, javascript and jquery tutorials and related so on.",
  count: 1,
  description: "UI/UX designing, html css tutorials",
  price: 19,
  src:i19,
  title: "Shirts 29",
  _id: "200",}]}) // cards order
  const [state, setState] = useState(data);   // initialState

  const { products } = state;
  const {card} = cards; 
console.log(card);

  // addCard function
  function addCard(id) {
    const yes = products?.find((p) => {
      return p._id == id;
    });
    const is = card?.find((c) => {
      return c._id == id;
    });
  
    if (is) {
      return card;
    }
    else {
      card.push(yes);
      setObserver((prev) => prev += 1)
    }
  }
  

  // increase function
  function increase(id) {
    setCards({
      ...cards,
      tekenProducts: card?.map((c) => (c._id == id ? (c.count += 1) : c)),
    });
  }


  // decrease function
  function decrease(id) {
    const is = card?.find((c) => {
      return c._id == id;
    });

    if (is.count == 1) {
      return is;
    }
    if (is.count > 1) {
      setCards({
        ...cards,
        tekenProducts: card?.map((c) => (c._id == id ? (c.count -= 1) : c)),
      });
    }
  }


  // remove card function
  function removeCard(id) {
    const is = card?.find((c) => {
      return c._id == id;
    });

    if (is) {
      let data = card?.filter((c) => c._id != is._id);
      setCards({ ...cards, card: data });
    }
  }
  

  // order and remove LocalStorage all card function
  function payOrder() {
    window.localStorage.removeItem('dataCart');
    localStorage.setItem('dataCart', JSON.stringify([]))
  }

  // add LocalStorage
  useEffect(() =>{
    if (card?.length > 0) {
      localStorage.setItem('dataCart', JSON.stringify(card))
    }
  })

  // load LocalStorage
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
        payOrder
      }}
    >
      {props.children}
    </DataContext.Provider>
  );
};

export default DataProvider;