import logo from './logo.svg';
import './App.css';
import Header from './myComponents/Header';
import Footer from './myComponents/Footer';
import { useState, useEffect, useMemo, useCallback } from 'react';
import { HiOutlineHeart } from "react-icons/hi";
import { HiHeart } from "react-icons/hi";
import { FaRegStar } from "react-icons/fa";
import { IoIosStar } from "react-icons/io";
import { FaStar } from "react-icons/fa6";

function App() {
  const [todos, setTodos] = useState([
    {
      id: 1,
      selected: false,
      hasClients: false,
      showClients: false
    },
    {
      id: 2,
      selected: false,
      hasClients: false,
      showClients: false
    },
    {
      id: 3,
      selected: false,
      hasClients: false,
      showClients: false
    },
    {
      id: 4,
      selected: false,
      hasClients: false,
      showClients: false
    },
    {
      id: 5,
      selected: false,
      hasClients: false,
      showClients: false
    },
    {
      id: 6,
      selected: false,
      hasClients: false,
      showClients: false
    }
  ]);
  let [isAnimate, setAnimate] = useState(false);

  const setFavoriteSelection = (todo) => {
    console.log('On favorite', todo);
    let updatedTodos = todos.map((item) => {
      return {
        ...item,
        selected: (item.id === todo.id) ? !item.selected : item.selected,
        showClients: (item.id === todo.id) ? !item.showClients : item.showClients
      };
    });
    setTodos(updatedTodos);
  };
  const animateHeart = useCallback((id) => {
    isAnimate = true;
    if (isAnimate) {
      let el = document.getElementById('favorite-' + id);
      if (el) {
        el.classList.remove("animate");
        void el.offsetWidth;
        el.classList.add("animate");
      }
    }
  }, [isAnimate])

  const hideClientContainer = useCallback((id) => {
    setTimeout(() => {
      const clientEl = document.getElementById(`client-${id}`);
      const favEl = document.getElementById(`favorite-${id}`);

      if (!clientEl || !favEl) return;
      favEl.classList.remove("animate", "bounce-in");
      clientEl.classList.remove("bounce-out");
      clientEl.classList.add("bounce-out");

      clientEl.addEventListener(
        "animationend",
        () => {
          clientEl.style.opacity = "0";
          setTimeout(() => {
            clientEl.style.display = "none";
            favEl.classList.add("animate");
            setTimeout(() => {
              clientEl.style.opacity = "0";
            }, 300);
          }, 50);
        },
        { once: true }
      );
    }, 3000)
  }, []);


  const updateState = (isClientSelected, todo) => {
    let updatedTodos;
    setTimeout(() => {
      if (isClientSelected) {
        updatedTodos = todos.map((item) => {
          return {
            ...item,
            hasClients: (item.id === todo.id) ? !item.hasClients : item.hasClients,
            showClients: false
          };
        });
      } else {
        updatedTodos = todos.map((item) => {
          return {
            ...item,
            selected: (item.id === todo.id) ? !item.selected : item.selected,
            showClients: false
          };
        });
      }
      setTodos(updatedTodos);
    }, 2500);
  }

  const setClientSelection = (todo) => {
    console.log('On client', todo);
    let updatedTodos = todos.map((item) => {
      return {
        ...item,
        isStarred: (item.id === todo.id) ? true : false
      };
    });
    updateState(true, todo);
    setTodos(updatedTodos);
  };

  return (
    <>
      <Header title="Favorites" searchBar={true}></Header>
      <div className='section'>
        {todos.map((item) => {
          return <div key={item.id} className="section1">
            {item.showClients && <div onAnimationStart={() => hideClientContainer(item.id)} id={"client-" + item.id} className='client-container bounce-in'>
              {item.isStarred && <FaStar onClick={() => setClientSelection(item)} className='star' />}
              {!item.isStarred && <FaRegStar onClick={() => setClientSelection(item)} className='star' />}
              <div className='client'>Clients</div>
            </div>
            }
            <div id={'favorite-' + item.id} onClick={() => setFavoriteSelection(item)}>
              <div onClick={() => animateHeart(item.id)} className={item.selected ? 'favorite-container animate' : 'favorite-container'}>
                <div className='div-heart'>
                  <HiOutlineHeart className='heart' />
                  <HiHeart className={item.selected ? 'heart-fill' : 'd-none'} />
                </div>
                {item.hasClients && <IoIosStar className='has-clients' />}
              </div>
            </div>
          </div>
        })}

      </div>
      <Footer></Footer>
    </>
  );
}

export default App;
