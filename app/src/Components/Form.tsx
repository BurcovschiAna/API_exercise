import { useState, useContext} from "react";
import { ApiContext, type ApiContextType, type ItemType } from "./ApiContext.js";
export default function Form(){
    const { addItem } = useContext(ApiContext) as ApiContextType;
    const [newItem, setNewItem] = useState<ItemType>({
        id: Date.now(),
        title: "",
        price: 0,
        description: "",
        image: ""
    });
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        console.log(newItem);
        
        e.preventDefault(); 
        addItem(newItem); 
        setNewItem({ id: Date.now(), title: "", price: 0, description: "", image: "" });
    };
    const handleChange = (field: keyof ItemType) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>)  =>  {
        const value = field === "price" ? parseFloat(e.target.value) : e.target.value;
        setNewItem(prevData => ({
            ...prevData,
            [field]: value
        }))
        console.log(field);
        
        console.log(newItem);
        
    }
    return(
        <div className="form-conatiner">
            <p>
                Complete the form to add new items
            </p>
            <form className="flex" onSubmit={handleSubmit}>
                <div>
                    <div className="input-item">
                        <label htmlFor="title">
                            Title
                        </label>
                        <input type="text" id="title" onChange={handleChange("title")}/>
                    </div>
                    <div className="input-item">
                        <label htmlFor="price">
                            Price
                        </label>
                        <input type="text" id="price" onChange={ handleChange("price")} />
                    </div>
                    
                    <div className="input-item">
                        <label htmlFor="image">
                            Image url
                        </label>
                        <input type="text" id="image" onChange={ handleChange("image")}/>
                    </div>
                </div>
                <div>
                    <div className="input-item">
                        <label htmlFor="description">
                            Description
                        </label>
                        <textarea id="description" onChange={handleChange("description")}></textarea>
                    </div>
                    <button className="btn">
                        Submit
                    </button> 
                </div>
           </form>
        </div>
    )
}