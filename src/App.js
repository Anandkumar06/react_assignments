// import logo from './logo.svg';
import { useEffect, useState } from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Nav from './components/Routing/Nav';

import FakeStoreApi from './components/FakeStoreApi';
import MoviesApi from './components/Routing/MoviesApi';
import Home from './components/Routing/Home';
import Image from './components/Routing/Image';
import Img1 from './components/Routing/Img1';
import Img2 from './components/Routing/Img2';
import Img3 from './components/Routing/Img3';
import Img4 from './components/Routing/Img4';
// import DropdownDeatails from './components/DropdownDeatails';
// import CounterOne from './components/CounterOne';
// import CounterTwo from './components/CounterTwo';
// import Parent from './components/Parent';
// import Student from './components/Student';
// import Count from './components/Count';
// import HideAndShow from './components/HideAndShow';
// import StateWithObject from './components/StateWithObject'
// import SetStateAsynchronous from './components/SetStateAsynchronous';
// import StateWithArray from './components/StateWithArray';
// import TodoApp from './components/TodoApp'
// import Greeting from './components/Greeting'
// import GitHubUser from './components/GitHubUser'
// import FakeStoreApi from './components/FakeStoreApi'
// import { useCounter } from './components/useCounter';
// import { useOnlineStatus } from './components/useOnlineStatus';
// import CustomFormValidation from "./components/CustomFormValidation"
// import ImageSlider from './components/ImageSlider'
// import ReactHookForm from './components/ReactHookForm'
// import SearchUsers from './components/SearchUsers'
// import UseReducerHook from "./components/UseReducerHook"
// import TodoReducerHook from "./components/TodoReducerHook"
// import DropdownDeatails from './components/DropdownDeatails';
// custom hooks below
// import CounterOne from './components/custom hook/CounterOne';
// import Toggle from './components/custom hook/Toggle';
// import Timeout from './components/custom hook/Timeout';
// import Debounce from './components/custom hook/Debounce';
// import UpdateEffect from './components/custom hook/UpdateEffect';


// function StatusBar() {
//   const isOnline = useOnlineStatus();
//   return <h1>{isOnline ? '✅ Online' : '❌ Disconnected'}</h1>;
// }

// function SaveButton() {
//   const isOnline = useOnlineStatus();

//   function handleSaveClick() {
//     console.log('✅ Progress saved');
//   }

//   return (
//     <button disabled={!isOnline} onClick={handleSaveClick}>
//       {isOnline ? 'Save progress' : 'Reconnecting...'}
//     </button>
//   );
// }

// Form

// const [users, setUsers]=useState([]);
//     useEffect(()=>
//     {
//         const storedUserData=JSON.parse(localStorage.getItem("users"))
//         setUsers(storedUserData)
//     },[]);


function App({name,image}) {
  return (
    <BrowserRouter>
    {/* <div className="App"> */}
   {/* <Student name={name} image={image}/> */}
   {/* <Parent/> */}
    {/* <Count/> */}
    {/* <HideAndShow/> */}
    {/* <StateWithObject/> */}
    {/* <SetStateAsynchronous/> */}
    {/* <StateWithArray/> */}
    {/* <TodoApp/> */}
    {/* <Greeting/> */}
    {/* <GitHubUser/> */}
    {/* <FakeStoreApi/> */}
    {/* <CounterOne/> */}
    {/* <hr/> */}
    {/* <CounterTwo/> */}
    {/* <hr/> */}
    {/* <SaveButton/> */}
    {/* <StatusBar/> */}
    {/* <CustomFormValidation/> */}
    {/* <ImageSlider/> */}
    {/* <ReactHookForm/> */}
    {/* <SearchUsers users={users}/> */}
    {/* <UseReducerHook/> */}
    {/* <TodoReducerHook/> */}
    {/* <DropdownDeatails/> */}
    {/* <CounterOne /> */}
    {/* <Toggle /> */}
    {/* <Timeout /> */}
    {/* <Debounce /> */}
    {/* <UpdateEffect /> */}
   {/* </div> */}
   {/* Routing */}
   <Nav />
   <Routes>
    <Route path='/' element={<Home/>} />
    <Route path='/FakeStoreApi' element={<FakeStoreApi/>} />
    <Route path='/MovieApi' element={<MoviesApi />} />
    <Route path="/Image" element={<Image/>}>
        <Route index element={<Img1/>}/>
        <Route path='img1' element={<Img1/>}/>
        <Route path='Img2' element={<Img2/>}/>
        <Route path='Img3' element={<Img3/>}/>
        <Route path='Img4' element={<Img4/>}/>
      </Route>
   </Routes>
   </BrowserRouter>
  );
}

export default App;
