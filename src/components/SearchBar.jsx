import React from 'react'
import { BsFillSearchHeartFill, BsSearch } from 'react-icons/bs';
import FormInput from './FormInput';

function SearchBar({width , style, ref,placeholder}) {
  return (
    <form className={`SearchBar d-flex align-items-center  py-2 ${style}`} style={{boxShadow: 'rgba(0, 0, 0, 0.15) 0px 2px 8px',width: width, margin : 'auto'}} ref={ref}>
        <BsSearch  className='icon mx-2 fs-6' />
        <input type='text' className={`border-0 w-100 `} placeholder={placeholder} name='data' style={{outline:'none',fontSize:'13px', background: 'transparent'}}/>
    </form>
  )
}

export default SearchBar;