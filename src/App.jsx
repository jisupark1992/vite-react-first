import Profile from './components/Profile'
import './App.css'
import PackingList from './components/PackingList'
import BasicButton from "./components/BasicButton.jsx";
import UseRefHookDemo from "./components/UseRefHookDemo.jsx";
import {useEffect, useState} from "react";

export default function App() {
    const buttonClicked = () => {
        alert("hi");
    };

    const [count, setCount] = useState(0);
    const [text, setText] = useState('');
    const [todos, setTodos] = useState([
        {title: '고객에게 메일보내기', completed: false},
        {title: '저녁 미팅', completed: false},
        {title: '집 청소하기', completed: true},
    ]);

    const [city, setCity] = useState('');
    const [weather, setWeather] = useState();

    useEffect(() => {
        fetchWeatherFromServer();
        console.log(weather);
    }, []);

    async function fetchWeatherFromServer() {
        const res = await fetch('https://api.openweathermap.org/data/2.5/weather?q=London&appid=83b91fc02bac19e6ab422e894bce7c99');
        const json = await res.json();
        setWeather(json);
    }

    const selectWeather = async () => {
        const res = await fetch('https://api.openweathermap.org/data/2.5/weather?q='+ city + '&appid=83b91fc02bac19e6ab422e894bce7c99');
        const json = await res.json();
        setWeather(json);
        console.log(weather);
    };
    const onCity = e => {
        setCity(e.target.value);
    };

    const onTodoType = e => {
        setText(e.target.value);
    };

    const onAddTodo = () => {
        // array 에 아이텝을 추가하기 위해서 immutable 한 방식을 사용한다.
        setTodos([
            ...todos,
            {title: text, completed: false}
        ]);
    };

    const increase = () => {
        setCount(count + 1);
    }
    const decrease = () => {
        setCount(count - 1);
    }

  return (
      <>
          <Profile/>
          <hr/>
          <PackingList/>
          <BasicButton onClick={buttonClicked}>클릭해주세요</BasicButton>
          <hr/>
          <div className="Toolbar" onClick={() => alert('you clicked on the toolbar')}>
              <BasicButton onClick={() =>
                  alert('Playing!')
              }>Play Movie</BasicButton>
              <BasicButton onClick={() =>
                  alert('Uploading!')
              }>Upload Image</BasicButton>
          </div>
          <hr/>
          <UseRefHookDemo></UseRefHookDemo>
          <hr/>
          <button onClick={decrease}>-</button> {count} <button onClick={increase}>+</button>
          <hr/>
          <h3>할일 목록</h3>
          <input type="text" value={text} onChange={onTodoType}/>
          <button onClick={onAddTodo}>할일추가</button>
          <ul>
              {
                  todos.map(todo => <li>{todo.title} - {todo.completed ? '완료' : '진행중'}</li>)
              }
          </ul>
          <hr/>
          <h3>날씨 버튼</h3>
          <input type="text" value={city} onChange={onCity}/>
          <button onClick={selectWeather}>날씨 콘솔 출력</button>
      </>
  )
}