import { Button, Card, Form, Input, message, Space, Typography } from 'antd'
import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import SocialLogin from './components/SocialLogin'
import handleAPI from '../../apis/handleAPI'
import { addAuth } from '../../redux/reducers/authReducer'
import { useDispatch } from 'react-redux'
import { LocalDataNames } from '../../constants/appinfor'

const { Title, Paragraph, Text } = Typography
const SignUp = () => {
    const [isLoading, setIsLoading] = useState(false);
    const dispatch = useDispatch()
    const [from] = Form.useForm()
    const handleSignUp = async (values: { email: string; password: string }) => {

        const api = `/auth/register`
        setIsLoading(true)
        try {
            const res = await handleAPI(api, values, 'post')
            if (res.data) {
                message.success(res.data.message)
                dispatch(addAuth(res.data.data))
            }
        } catch (error: any) {
            message.error(error.message)
            console.log(error)
        } finally {
            setIsLoading(false)
        }
    };
    return (
        <>
            <Card style={{ width: '50%' }}>
                <div className="text-center">
                    <img className='mb-3'
                        src={'https://firebasestorage.googleapis.com/v0/b/kanban-c0323.appspot.com/o/kanban-logo.png?alt=media&token=a3e8c386-57da-49a3-b9a2-94b8fd93ff83'} alt="" style={{
                            width: 48,
                            height: 48,
                        }} />
                    <Title level={2}>Create an account</Title>
                    <Paragraph type='secondary'>
                        Start your 30-day free trial.
                    </Paragraph>
                </div>
                <Form layout='vertical' form={from} onFinish={handleSignUp} disabled={isLoading} size='large'>
                    <Form.Item name={'name'} label='Name'
                        rules={[
                            {
                                required: true,
                                message: 'Please enter your Name!!'
                            }
                        ]}>
                        <Input placeholder='Enter your Name!' allowClear />
                    </Form.Item>
                    <Form.Item name={'email'} label='Email'
                        rules={[
                            {
                                required: true,
                                message: 'Please enter your Email!!'
                            }
                        ]}>
                        <Input placeholder='Enter your Email!' allowClear maxLength={100} type='email' />
                    </Form.Item>
                    <Form.Item name={'password'} label='Password'
                        rules={[
                            {
                                required: true,
                                message: 'Please enter your Password!!'
                            },
                            () => ({
                                validator: (_, value) => {
                                    if (value.length < 6) {
                                        return Promise.reject(new Error('Mật khẩu phải có ít nhất 6 ký tự !'))
                                    }
                                    else {
                                        return Promise.resolve();
                                    }
                                }
                            })
                        ]}>
                        <Input.Password placeholder='Create a password' maxLength={100} type='password' />
                    </Form.Item>
                </Form>
                <div className="mt-5 mb-3">
                    <Button loading={isLoading} onClick={() => from.submit()}
                        type='primary'
                        style={{
                            width: '100%',
                        }}
                        size='large'>
                        Sign Up
                    </Button>
                </div>
                <SocialLogin />
                <div className="mt-3 text-center">
                    <Space>
                        <Text type='secondary'>Already have an account? </Text>
                        <Link to={'/login'}>Login</Link>
                    </Space>
                </div>
            </Card >
        </ >
    )
}

export default SignUp
