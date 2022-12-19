import React, { useContext, useState } from "react"

const SummaryContext = React.createContext();

const data = [
    {id: "1", product: "Shoe", price: 200, remaining: 6},
    {id: "2", product: "Bag", price: 600, remaining: 2},
    {id: "3", product: "Watch", price: 100, remaining: 8},
    {id: "4", product: "Cap", price: 150, remaining: 1},
    {id: "5", product: "perfume", price: 200, remaining: 1},
    {id: "6", product: "Headphone", price: 500, remaining: 10}
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