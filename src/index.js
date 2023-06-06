import React from 'react';
// import * as ReactDOM from 'react-router-dom';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
} from 'react-router-dom';
import './index.css';
import Home from './Page/Home'
import Todo from './Page/Todo'
import Attendence from './Page/Attendance/index'
import Donation from './Page/Donation/index';
import ReactDOM from 'react-dom'
import Edit from './Page/Todo/components/Edit.js'
import List from './Page/Todo/components/List';
import Item from './Page/Todo/components/Item';


window.onload=initForm;
function initForm(){
  var osel=document.getElementById("sel");
  osel.selectedIndex=0;
  osel.onchange=jumpPage;
}
function jumpPage(){
  var osel=document.getElementById("sel");
  var newURL=osel.options [osel.selectedIndex].value;
  if(newURL!==""){
    window.location.href=newURL;
  }
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Router>
        <div className='header'>
            <Link to ="/Home" className='link'><h1 className='link-text'>Home</h1></Link>
            {/* <Link to ="/Todo" className='link'><h1>Todo</h1></Link> */}
            <select id="sel" className='link' style={{fontSize:'large'}}>
                <option className='link-text' defaultValue>Todo</option>
                <option value="/Page/Todo/components/Edit" className='link-text'>Add Task</option>
                <option value="/Page/Todo/List" className='link-text'>List</option>
                {/* <option value="/Page/Todo/Item" className='link-text'>Item</option> */}
            </select>
            <Link to ="/Attendance" className='link'><h1 className='link-text'>Attendance</h1></Link>
            <Link to ="/Donation" className='link'><h1 className='link-text'>Contact us</h1></Link>
        </div>
      <Routes> {/*必須先定義Route後，才能Link到相關url path，而在Route定義時需要把components放進他的element才能render出component裡面的html*/}
         <Route path ="/" element={<Home/>} />
          <Route path ="/Home" element={<Home/>} />
          <Route path ="/Todo" element={<Todo/>} />
          <Route path='/Page/Todo/components/Edit' element={<Edit/>}/>
          <Route path='/Page/Todo/List' element={<List/>}/>
          <Route path='/Page/Todo/Item' element={<Item/>}/>
          <Route path='/Attendance' element={<Attendence/>}/>
          <Route path='/Donation' element={<Donation/>}/>
    </Routes>
  </Router>
);



