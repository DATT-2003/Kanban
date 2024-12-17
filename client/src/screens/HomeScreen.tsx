import { Button } from 'antd'
import React from 'react'
import { useDispatch } from 'react-redux'

const HomeScreen = () => {
    const dispatch = useDispatch();
    const handleLogout = () => { };
    return (
        <div>
            <Button onClick={handleLogout}>Logout</Button>
        </div>
    )
}

export default HomeScreen
