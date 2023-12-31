import { useState } from "react";
import { AddCategory, GifGrid } from "./components";

export const GifExpertApp = () => {

    const [ categories, setCategories] = useState(['Dragon Ball']);

    const onAddCategory = (newCategory) => {

        if (categories.includes(newCategory)) return;

        setCategories( [newCategory, ...categories] );
    };

    return (
        <>
            {/*Título*/}
            <h1>GifExpertApp</h1>

            {/*Input*/}
            <AddCategory 
                onNewCategory={ onAddCategory }
            />

            {/*Listado de Gifs*/}
            { categories.map( category => (
                <GifGrid 
                    key={category}
                    category={category}
                />
                ))
            }
        </>
    );
}
