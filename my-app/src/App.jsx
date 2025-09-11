import {useState} from "react";
import Counter from "./components/Counter";
import UserProfile from "./components/UserProfile";
import ProductList from "./components/ProductList";
import Greeting from "./components/Greeting.jsx";
import MyButton from "./components/MyButton.jsx";
import Counter1 from "./components/Counter1.jsx";
import Counter2 from "./components/Counter2.jsx";
import Square from "./components/Square";
import FilterableProductTable from "./components/FilterableProductTable";

const PRODUCTS = [
    {category: "Fruits", price: "$1", stocked: true, name: "Apple"},
    {category: "Fruits", price: "$1", stocked: true, name: "Dragonfruit"},
    {category: "Fruits", price: "$2", stocked: false, name: "Passionfruit"},
    {category: "Vegetables", price: "$2", stocked: true, name: "Spinach"},
    {category: "Vegetables", price: "$4", stocked: false, name: "Pumpkin"},
    {category: "Vegetables", price: "$1", stocked: true, name: "Peas"},
];

export default function App() {
    return (
        <main>
            <h1>Welcome to My App</h1>
            <Greeting name = "Kostya" />
            <Counter />
            <UserProfile />
            <ProductList />
            <MyButton />
            <Counter1 />
            <Counter2 />
            <Square />
            <FilterableProductTable products = {PRODUCTS}/>
        </main>
    )
}


