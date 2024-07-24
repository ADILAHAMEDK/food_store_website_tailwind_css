import React, { createContext } from 'react'
import { categories } from '../Data/Data';
import { data } from '../Data/Data';

export const storeContext = createContext();

const ContextStore = (props) => {

    const values = {
      data,
      categories
    }
   
  return (
    <storeContext.Provider value={values}>
        {props.children}
    </storeContext.Provider>
  )
}

export default ContextStore