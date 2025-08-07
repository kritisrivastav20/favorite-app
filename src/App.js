import logo from './logo.svg';
import './App.css';
import Header from './myComponents/Header';
import Footer from './myComponents/Footer';
import Todos from './myComponents/Todos';
import { useState, useEffect } from 'react';

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

  useEffect(() => {
    const div = document.getElementById('favorite');
    const handleClick = () => {
      const el = document.getElementById('client');
      setTimeout(() => {
        el?.classList?.add('bounce-out')
      }, 3000)
    };

    div?.addEventListener('mouseleave', handleClick);

    return () => {
      div?.removeEventListener('mouseleave', handleClick);
    };
  }, [todos]);

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
      <Todos todos={todos} setSelected={(ev) => setFavoriteSelection(ev)} setClientsStatus={(ev) => {
        setClientSelection(ev)
      }}></Todos>
      <Footer></Footer>
    </>
  );
}

export default App;
