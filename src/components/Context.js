import React, { useState, useEffect } from "react";

export const DataContext = React.createContext();

const DataProvider = (props) => {
  const [counter, setCounter] = useState(0) //  poyloqchi (observer)
  // initialState
  const [state, setState] = useState({
    products: [
      {
        _id: "1",
        title: "Nike Shoes 01",
        src: "https://www.upsieutoc.com/images/2020/06/27/img1.jpg",
        description: "UI/UX designing, html css tutorials",
        content:
          "Welcome to our channel Dev AT. Here you can learn web designing, UI/UX designing, html css tutorials, css animations and css effects, javascript and jquery tutorials and related so on.",
        price: 23,
        colors: ["red", "black", "crimson", "teal"],
        count: 1,
      },
      {
        _id: "2",
        title: "Nike Shoes 02",
        src: "https://www.upsieutoc.com/images/2020/06/27/img2.jpg",
        description: "UI/UX designing, html css tutorials",
        content:
          "Welcome to our channel Dev AT. Here you can learn web designing, UI/UX designing, html css tutorials, css animations and css effects, javascript and jquery tutorials and related so on.",
        price: 19,
        colors: ["red", "crimson", "teal"],
        count: 1,
      },
      {
        _id: "3",
        title: "Nike Shoes 03",
        src: "https://www.upsieutoc.com/images/2020/06/27/img3.jpg",
        description: "UI/UX designing, html css tutorials",
        content:
          "Welcome to our channel Dev AT. Here you can learn web designing, UI/UX designing, html css tutorials, css animations and css effects, javascript and jquery tutorials and related so on.",
        price: 50,
        colors: ["lightblue", "white", "crimson", "teal"],
        count: 1,
      },
      {
        _id: "4",
        title: "Nike Shoes 04",
        src: "https://www.upsieutoc.com/images/2020/06/27/img4.jpg",
        description: "UI/UX designing, html css tutorials",
        content:
          "Welcome to our channel Dev AT. Here you can learn web designing, UI/UX designing, html css tutorials, css animations and css effects, javascript and jquery tutorials and related so on.",
        price: 15,
        colors: ["orange", "black", "crimson", "teal"],
        count: 1,
      },
      {
        _id: "5",
        title: "Nike Shoes 05",
        src: "https://www.upsieutoc.com/images/2020/06/27/img5.jpg",
        description: "UI/UX designing, html css tutorials",
        content:
          "Welcome to our channel Dev AT. Here you can learn web designing, UI/UX designing, html css tutorials, css animations and css effects, javascript and jquery tutorials and related so on.",
        price: 10,
        colors: ["orange", "black", "crimson", "teal"],
        count: 1,
      },
      {
        _id: "6",
        title: "Nike Shoes 06",
        src: "https://www.upsieutoc.com/images/2020/06/27/img6.jpg",
        description: "UI/UX designing, html css tutorials",
        content:
          "Welcome to our channel Dev AT. Here you can learn web designing, UI/UX designing, html css tutorials, css animations and css effects, javascript and jquery tutorials and related so on.",
        price: 17,
        colors: ["orange", "black", "crimson", "teal"],
        count: 1,
      },
    ],
    card: [],
    cart:""
  });

  const { products, card } = state;
  
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
      setCounter((prev) => prev += 1)
    }
  }
  


  function increase(id) {
    setState({
      ...state,
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
      setState({
        ...state,
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
      setState({ ...state, card: data });
    }
  }


  
    useEffect(() =>{
      if (card.length > 0) {
        localStorage.setItem('dataCart', JSON.stringify(card))
      }
    })


    const dataCart = JSON.parse(localStorage.getItem('dataCart'));

  
  window.document.addEventListener("reset", () =>{
    if(dataCart !== null){
          setState({card: dataCart});
      }
  })






  
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
