import React from 'react';
import "./Feedback.scss";
import SearchBar from '../SearchBar';
import { HiMinusSm } from 'react-icons/hi';
import { Link } from 'react-router-dom';

const topSuggestions = [
    {
        id: 1,
        title: 'Sales Dashboard',
        link: './'
    },
    {
        id: 2,
        title: 'Sales FAQ',
        link: './'
    },
    {
        id: 3,
        title: 'Inventory FAQ',
        link: './'
    },
]

function Feedback({hide}) {
  return (
    <div className='feedback border rounded-3 overflow-hidden'>
        <div className="feedback__1 py-3 px-4  ">
            <h6 className='text-white text-center pb-3'>Feedback</h6>
            <SearchBar placeholder={'How can we help?'} style={' border bg-white'}/>
            <HiMinusSm className='text-white hide-icon' onClick={() => hide(false)}/>
        </div>
        <div className="feedback__2 px-3">
            <strong className='px-3'>Top suggestions</strong>
            <ol>
                {
                    topSuggestions.map((item,idx) => (
                        <li className='py-1'>
                            <Link to={item.link} className='list'>{item.title}</Link>
                        </li>
                    ))
                }
            </ol>
        </div>
        <div className="feedback__3 border-top px-3 py-2">
            <p>zendesk</p>
            <button className='px-3 py-1 rounded'>Leave us a message</button>
        </div>
    </div>
  )
}

export default Feedback