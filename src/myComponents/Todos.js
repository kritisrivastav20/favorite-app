import React, { useEffect } from 'react'
import Todo from './Todo';
import '../App.css';
import { HiOutlineHeart } from "react-icons/hi";
import { HiHeart } from "react-icons/hi";
import { FaRegStar } from "react-icons/fa";
import { IoIosStar } from "react-icons/io";
import { FaStar } from "react-icons/fa6";

export default function Todos(props) {

  return (
    <div className='section'>
      {props.todos.map((item) => {
        return <div key={item.id} className="section1">
          {item.showClients && <div id="client" className='client-container'>
            {item.isStarred && <FaStar onClick={() => props.setClientsStatus(item)} className='star' />}
            {!item.isStarred && <FaRegStar onClick={() => props.setClientsStatus(item)} className='star' />}
            <div className='client'>Clients</div>
          </div>
          }
          <div id='favorite' onClick={() => props.setSelected(item)}>
            <div className={item.selected ? 'favorite-container animate' : 'favorite-container'}>
              <div className='div-heart'>
                <HiOutlineHeart className='heart' />
                <HiHeart className={item.selected ? 'heart-fill animate' : 'd-none'} />
              </div>
              {item.hasClients && <IoIosStar className='has-clients' />}
            </div>
          </div>
        </div>
      })}

    </div>
  )
}
