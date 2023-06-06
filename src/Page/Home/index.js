import React,{Component} from 'react';
import './index.css';
import { Button, Space } from 'antd';
import { DownloadOutlined,RightCircleFilled } from '@ant-design/icons';
import { useState } from 'react';
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Link,
  } from 'react-router-dom';

const Home = () => {
    const [size, setSize] = useState('large'); // default is 'middle'
    return <div className="all">
        <div className='container'>
            <div className='bannerText'>
                <h1>Web Demo</h1>
                    <small>代辦事項</small>                  
                <h2>資工二甲</h2>
                <p>B1029017 B1029057</p>
                <p>歐靜嬡 林知柔</p>
                <div style={{padding:10, paddingTop:15}}>
                    <Space wrap>
                        <Button type="primary" icon={<RightCircleFilled/>} style={{backgroundColor:'#d4f0f09d'}} size={size}>
                        <Link to ="/Page/Todo/components/Edit">To Do List</Link>
                        </Button>
                    </Space>
                </div>
            </div>
        </div>
    </div>

}

export default Home