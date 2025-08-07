import React from 'react'
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
        return <>
          <div key={item.id} className="section1">

            {item.showClients && <div className='client-container'>
              {item.isStarred && <FaStar onClick={() => props.setClientsStatus(item)} className='star' />}
              {!item.isStarred && <FaRegStar onClick={() => props.setClientsStatus(item)} className='star' />}
              <div className='client'>Clients</div>
            </div>
            }
            <div onClick={() => props.setSelected(item)}>
              {item.selected ?
                <div className={item.selected || item.showClients || item.isStarred ? 'favorite-container animate' : 'favorite-container'}>
                  <div className='div-heart'>
                    <HiOutlineHeart className='heart' />
                    <HiHeart className='heart-fill' />
                  </div>
                  {item.hasClients && <IoIosStar className='has-clients' />}
                </div>

                :

                <div className={item.selected || item.showClients || item.isStarred ? 'favorite-container animate' : 'favorite-container'}>
                  <div className='div-heart'>
                    <HiOutlineHeart className='heart' />
                  </div>
                </div>
              }
            </div>
          </div>
        </>
      })}

    </div>
  )
}
