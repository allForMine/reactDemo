import { MenuFoldOutlined, MenuUnfoldOutlined, MailOutlined } from '@ant-design/icons';
import { Menu, Input, Button, Col, Row } from 'antd';
import { useState } from 'react';

function getItem(label, key, icon, children, type) {
    return { label, key, icon, children, type };
}

const Layout = () => {
    const [collapsed, setCollapsed] = useState(false);
    const [select, setSelect] = useState('子菜单1-1')
    const [key, setKey] = useState('1')
    const [menu1, setmenu1] = useState('子菜单1-1')
    const [menu2, setmenu2] = useState('子菜单1-2')
    const [menu3, setmenu3] = useState('子菜单2-1')
    const [menu4, setmenu4] = useState('子菜单2-2')
    const items = [
        getItem('菜单一', 'sub1', <MailOutlined />, [
            getItem(menu1, '子菜单1-1'),
            getItem(menu2, '子菜单1-2'),
        ]),
        getItem('菜单二', 'sub2', <MailOutlined />, [
            getItem(menu3,'子菜单2-1'),
            getItem(menu4, '子菜单2-2'),
        ]),
    
    ];
    const choose = ({ item, key, keyPath, selectedKeys, domEvent }) => {
        console.log(key,selectedKeys, domEvent);
        setSelect(selectedKeys)
        setKey(key)
    }
    const toggleCollapsed = () => {
        setCollapsed(!collapsed);
    };
    const save = () => {
        if(key=='子菜单1-1'){setmenu1(select)}
        if(key=='子菜单1-2'){setmenu2(select)}
        if(key=='子菜单2-1'){setmenu3(select)}
        if(key=='子菜单2-2'){setmenu4(select)}
    };
    const change1 =(event)=>{
      const word = event.target.value
      setSelect(word)
      }

    return (
        <div>
            <div style={{
                backgroundColor: 'black',
                height: '40px',
                width: '100%',
                color: 'white'
            }}>
                <span style={{
                marginLeft:'80px',
                fontSize:'22px',
                color: 'white'
            }}>react项目</span>
             <span style={{
                float:'right',
                fontSize:'22px',
                marginRight:'100px',
                color: 'white'
            }}>admin</span>
            </div>
            <div style={{ display: 'flex', flexDirection: 'row',width:'1000px' }}>
                <div style={{ width: 256 }}>
                    <div type="primary"
                        onClick={toggleCollapsed}
                        style={{
                            backgroundColor: 'black',
                            textAlign: 'center',
                            color: 'white'
                        }}>
                        {collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
                    </div>
                    <Menu
                        defaultSelectedKeys={['1']}
                        defaultOpenKeys={['sub1']}
                        mode="inline"
                        theme="dark"
                        inlineCollapsed={collapsed}
                        items={items}
                        onSelect={choose}
                    />
                </div>
                <div style={{
                    marginTop: '30px',
                    marginLeft: '30px',
                    width:'600px'
                }}>

                    <Row>
                        <Col span={8}>
                            <Input  value={select} onChange={change1}/>
                        </Col>
                        <Col span={8}>
                            <Button type="primary" onClick={save}>保存</Button>
                        </Col>
                    </Row>

                </div>

            </div>
        </div>
    );
};

export default Layout;