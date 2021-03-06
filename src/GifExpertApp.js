import { useState } from 'react';

import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';
const GifExpertApp = () => {

  const [categories, setCategories] = useState(['Super Mario']);

  // const handleAdd = () => {
  //     setCategories((categories) => [...categories, 'Oliver y Benji']);
  // }

  return (
    <>
      <h2>GifExpertApp</h2>
      <hr></hr>

      <AddCategory setCategories={setCategories}/>
    
      <ol>
        {
          categories.map( category => {
            return <GifGrid key={category} category={category} />
          })
        }
      </ol>
    </>
  )
};

export default GifExpertApp;
