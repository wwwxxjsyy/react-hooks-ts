import React, { useState } from 'react'
import { useHistory } from 'react-router-dom';
import { Menu } from 'antd';
import { children } from '../../router/index'

const Head = () => {
    let history = useHistory();

    const [current, setCurrent] = useState<string>("/home");
    const handleClick = (e: any) => {
        setCurrent(e.key)
        history.push(`${e.key}`)
    };
    let items = children.map((item: { path: string, meta: { title: string, iocn: any } }) => {
        return { label: item.meta.title, icon: item.meta.iocn, key: item.path };
    })
    return (
        <Menu onClick={handleClick} selectedKeys={[current]} mode="horizontal" items={items}>
        </Menu>
    );
}

export default Head