import React, { useContext, useState } from "react"

const SummaryContext = React.createContext();

const data = [
    {product: "Shoe", price: 200, remaining: 6},
    {product: "Bag", price: 600, remaining: 2},
    {product: "Watch", price: 100, remaining: 8},
    {product: "Cap", price: 150, remaining: 1},
    {product: "perfume", price: 200, remaining: 1},
    {product: "Headphone", price: 500, remaining: 10}
]

const SummaryProvider = ({children}) => {
    const [items, setItems] = useState(data);
    
    return(
            <SummaryContext.Provider value={{items}}>
                {children}
            </SummaryContext.Provider>
    )

}

export const useSummaryContext = () => React.useContext(SummaryContext)

export default SummaryProvider