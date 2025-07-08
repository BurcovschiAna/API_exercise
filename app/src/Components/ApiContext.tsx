import { createContext, useState, useEffect, type ReactNode } from "react";
export type ItemType = {
  id: number,
  title: string,
  price: number,
  description: string,
  image: string,
};
export type ApiContextType = {
    items: ItemType[] | null,
    loading: boolean,
    getItem: (id: number) => void,
    deleteItem: (id: number) => void,
    selectedItem: ItemType | null,
}

export const ApiContext = createContext<ApiContextType | null>(null);
export const ApiProvider = ({ children }: { children: ReactNode }) => {
    const [items, setItems] = useState<ItemType[] | null>(null);
    const [newItem, setNewItem] = useState<[] | null>(null);
    const [loading, setLoading] = useState<boolean>(true);
    const [selectedItem, setSelectedItem] = useState<ItemType | null>(null)
    
    const fetchItems = () => {
        fetch('https://fakestoreapi.com/products')
        .then(response => response.json())
        .then(json => {
            setItems(json);
            setLoading(false)
        })
        .catch(error => {
            console.error("Error fetching data:", error);
        });
    };

    useEffect(() => {
        fetchItems();
    }, []);

    const getItem = (id:number) => {
        const item = items?.find(item => item.id === id) || null;
        setSelectedItem(item);
    }
    const deleteItem = (id:number) => {
        fetch(`https://fakestoreapi.com/products/${id}`, {
            method: "DELETE",
        })
        .then(response => {
            if (response.ok) {
                setItems(prevItems => prevItems ? prevItems.filter(item => item.id !== id) : null);
            }
        })
        .catch(error => {
            console.error("Error fetching data:", error);
        });
    }
    return (
        <ApiContext.Provider value={{items, loading,  getItem, deleteItem, selectedItem}}>
            {children}
        </ApiContext.Provider>
    ) 
}