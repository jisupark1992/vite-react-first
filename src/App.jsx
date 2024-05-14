import Profile from './components/Profile'
import './App.css'
import PackingList from './components/PackingList'
import BasicButton from "./components/BasicButton.jsx";
import UseRefHookDemo from "./components/UseRefHookDemo.jsx";

export default function App() {
    const buttonClicked = () => {
        alert("hi");
    };

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
      </>
  )
}