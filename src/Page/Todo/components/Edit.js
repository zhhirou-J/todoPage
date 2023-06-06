import { useState } from 'react'
import '../index.css'
import Swal from 'sweetalert2'
import { UserOutlined ,AppstoreAddOutlined , CalendarOutlined} from '@ant-design/icons';
import { Input } from 'antd';
import { v4 as uuidv4 } from 'uuid';


const Edit = ({}) => {
    const handleClick = () => {
        console.log("Button clicked!");
        if(task == ""){
            Swal.fire({
                title: 'ERROR',
                text: 'PLEASE ENTER TASK',
                icon: 'error',
                showCancelButton: false,
                confirmButtonColor: '#000', 
                confirmButtonText: 'OK',

            })
        }
        else{
        Swal.fire({
            title: 'Confirmation',
            text: 'ADDED SUCCESSFULLY!',
            icon: 'success',
            showCancelButton: false,
            confirmButtonColor: '#000', 
            confirmButtonText: 'Add',
          })
        }

        const newData = {
            key: uuidv4(),
            task,
            category,
            date,
          };
    
          // 從 localStorage 中獲取現有數據
          const existingData = localStorage.getItem('data');
          let data = [];
    
          if (existingData) {
            // 如果已經存在數據，解析並添加新數據
            data = JSON.parse(existingData);
            data.push(newData);
          } else {
            // 如果還沒有數據，創建新數據陣列
            data = [newData];
          }
    
          localStorage.setItem('data', JSON.stringify(data));
    
          setTask('');
          setCatalog('');
          setDate('');
      }
    
    const [task, setTask] = useState("")
    function taskChange(e){
        setTask(e.target.value)
    }

    const [category, setCatalog] = useState("")
    function catalogChange(e){
        setCatalog(e.target.value)
    }

    const [date, setDate] = useState("")
    function dateChange(e){
        setDate(e.target.value)
    }

    return <div className='all'> 
        <div className='container'>
            <form>
                <fieldset>
                    <legend>輸入 To Do List</legend>
                        <br />
                    <lable>TASK</lable>
                        <Input size='large' className="blank" type="text" value={task} onChange={taskChange} prefix={<UserOutlined />}></Input><br />
                    <lable>CATEGORY</lable>
                        <Input size='large' className="blank" type="text" value={category} onChange={catalogChange} prefix={<AppstoreAddOutlined />}></Input><br />
                    <lable>DATE</lable>
                        <Input size='large' className="blank" type="DATE" value={date} onChange={dateChange} prefix={<CalendarOutlined />}></Input><br /><br />
                    <button className="btn"onClick={handleClick}>ADD</button>
                    <img src="https://cdn.dribbble.com/users/485324/screenshots/2569130/media/e8c61b13396820282756070c4e69e443.png?compress=1&resize=800x600&vertical=top"/>
                </fieldset> 
            </form>
        </div>
    </div>
}

export default Edit;