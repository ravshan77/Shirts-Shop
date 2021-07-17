import React, { useState } from 'react'

export const DataContext = React.createContext();

const DataProvider = (props) => {
const [state,setState] = useState({
    products: [
        {
            "_id": "1",
            "title": "Nike Shoes 01",
            "src": "https://www.upsieutoc.com/images/2020/06/27/img1.jpg",
            "description": "UI/UX designing, html css tutorials",
            "content": "Welcome to our channel Dev AT. Here you can learn web designing, UI/UX designing, html css tutorials, css animations and css effects, javascript and jquery tutorials and related so on.",
            "price": 23,
            "colors": ["red", "black", "crimson", "teal"],
            "count": 1
        },
        {
            "_id": "2",
            "title": "Nike Shoes 02",
            "src": "https://www.upsieutoc.com/images/2020/06/27/img2.jpg",
            "description": "UI/UX designing, html css tutorials",
            "content": "Welcome to our channel Dev AT. Here you can learn web designing, UI/UX designing, html css tutorials, css animations and css effects, javascript and jquery tutorials and related so on.",
            "price": 19,
            "colors": ["red", "crimson", "teal"],
            "count": 1
        },
        {
            "_id": "3",
            "title": "Nike Shoes 03",
            "src": "https://www.upsieutoc.com/images/2020/06/27/img3.jpg",
            "description": "UI/UX designing, html css tutorials",
            "content": "Welcome to our channel Dev AT. Here you can learn web designing, UI/UX designing, html css tutorials, css animations and css effects, javascript and jquery tutorials and related so on.",
            "price": 50,
            "colors": ["lightblue", "white", "crimson", "teal"],
            "count": 1
        },
        {
            "_id": "4",
            "title": "Nike Shoes 04",
            "src": "https://www.upsieutoc.com/images/2020/06/27/img4.jpg",
            "description": "UI/UX designing, html css tutorials",
            "content": "Welcome to our channel Dev AT. Here you can learn web designing, UI/UX designing, html css tutorials, css animations and css effects, javascript and jquery tutorials and related so on.",
            "price": 15,
            "colors": ["orange", "black", "crimson", "teal"],
            "count": 1
        },
        {
            "_id": "5",
            "title": "Nike Shoes 05",
            "src": "https://www.upsieutoc.com/images/2020/06/27/img5.jpg",
            "description": "UI/UX designing, html css tutorials",
            "content": "Welcome to our channel Dev AT. Here you can learn web designing, UI/UX designing, html css tutorials, css animations and css effects, javascript and jquery tutorials and related so on.",
            "price": 10,
            "colors": ["orange", "black", "crimson", "teal"],
            "count": 1
        },
        {
            "_id": "6",
            "title": "Nike Shoes 06",
            "src": "https://www.upsieutoc.com/images/2020/06/27/img6.jpg",
            "description": "UI/UX designing, html css tutorials",
            "content": "Welcome to our channel Dev AT. Here you can learn web designing, UI/UX designing, html css tutorials, css animations and css effects, javascript and jquery tutorials and related so on.",
            "price": 17,
            "colors": ["orange", "black", "crimson", "teal"],
            "count": 1
        }
    ],
    cart: [],
    total: 0,
    
})

function addCart(id){
    const {products, cart} = state;
        const check = cart.every(item =>{
            return item._id !== id
        })
        if(check){
            const data = products.filter(product =>{
                return product._id === id
            })
            setState({cart: [...cart,...data]})
        }else{
            alert("The product has been added to cart.")
        }
    };
    console.log(state.cart);

// 2 chi add cart function

// function addCart(id){
//     const {products, cart} = state;
//     const isExist = (cart) => {
//         return  cart.find((item) => item._id == id)
//     }
//         if(isExist(cart)){
//              cart.map((item)=>{
//                  item._id === id ? cart.push({...item,count: item.count + 1, price:item.price * (item.count+1)}) : cart.push(item);
//             })
//             // setState({cart: [...cart,...data]})
//         }else{
//              const data = products.filter(item => item._id === id)
//                 cart.push(data[0])
//         }
//     };

    console.log(state.cart);

   function reduction(id){
        const { cart } = state;
        cart.forEach(item =>{
            if(item._id === id){
                item.count === 1 ? item.count = 1 : item.count -=1;
            }
        })
        setState({cart: cart});
        getTotal();
    };

   function increase(id){
        const { cart } = state;
        cart.forEach(item =>{
            if(item._id === id){
                item.count += 1;
            }
        })
        setState({cart: cart});
        getTotal();
    };

   function removeProduct(id){
        if(window.confirm("Do you want to delete this product?")){
            const {cart} = state;
            cart.forEach((item, index) =>{
                if(item._id === id){
                    cart.splice(index, 1)
                }
            })
            setState({cart: cart});
            getTotal();
        }
       
    };

   function getTotal(){
        const{cart} = state;
        const res = cart?.reduce((prev, item) => {
            return prev + (item.price * item.count);
        },0)
        setState({total: res})
    };
    
    // componentDidUpdate(){
        // localStorage.setItem('dataCart', JSON.stringify(state.cart))
        // localStorage.setItem('dataTotal', JSON.stringify(state.total))
    // };

    // componentDidMount(){
        const dataCart = JSON.parse(localStorage.getItem('dataCart'));
        if(dataCart !== null){
            setState({cart: dataCart});
        }
        const dataTotal = JSON.parse(localStorage.getItem('dataTotal'));
        if(dataTotal !== null){
            setState({total: dataTotal});
        }
    // }
   

    // render() {
        const {products, cart,total} = state;
        // const {addCart,reduction,increase,removeProduct,getTotal} = ;
        return (
            <DataContext.Provider 
            value={{products, addCart, cart, reduction,increase,removeProduct,total,getTotal}}>
                {props.children}
            </DataContext.Provider>
        )
    // }
}


export default DataProvider;