import React, { Component } from 'react'
import './Home.css'
import HomeCarousel from './HomeCarousel'
import NavBar from './NavBar'
import { Typography, Form, Input, Button, Modal, Icon } from 'antd'
import gql from 'graphql-tag'
import { withApollo } from 'react-apollo'
import jsonwebtoken from 'jsonwebtoken'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'

const { Title } = Typography

export const GET_FEATURED = gql`
{
  getFeatured {
  	id
    url
	}
}
`
export const loginMutation = gql`
  mutation login($credentials: LoginInput!) {
    login(credentials: $credentials)
  }
`

class Home extends Component {
  constructor (props) {
    super(props)

    this.state = {
      ModalText: 'Enter your email and you team\'s coupon code to view team photos',
      visible: false,
      confirmLoading: false,
      email: '',
      coupon: ''
    }

    this.showModal = this.showModal.bind(this)
    this.handleOk = this.handleOk.bind(this)
    this.handleCancel = this.handleCancel.bind(this)
    this.handleFieldChange = this.handleFieldChange.bind(this)
  }

  showModal () {
    this.setState({
      visible: true
    })
  }

  handleFieldChange (field, value) {
    this.setState({ [field]: value })
  }

  loginUser () {
    const { email, coupon } = this.state
    const credentials = { 'email': email, 'coupon': coupon }
    return this.props.client.mutate({
      mutation: loginMutation,
      variables: { credentials }
    })
  }

  handleOk () {
    this.setState({
      ModalText: 'Verifying...',
      confirmLoading: true
    })
    this.loginUser().then((res) => {
      const { email } = jsonwebtoken.decode(res.data.login)
      const token = res.data.login
      localStorage.setItem('token', token)
      this.setState({
        visible: false,
        confirmLoading: false
      })
      this.props.history.push('/teams')
    })
      .catch((err) => {
        this.setState({
          ModalText: 'There was an error logging in. Incorrect coupon code.',
          confirmLoading: false
        })
      })
  }

  handleCancel () {
    this.setState({
      visible: false
    })
  }

  render () {
    const { visible, confirmLoading, ModalText } = this.state
    return (
      <div className='App'>
        <HomeCarousel />
        <Button
          className='carousel-button' onClick={this.showModal}
          type='primary' size='large'
          style={{ position: 'absolute',
            top: '70%',
            left: '50%',
            transform: 'translate(-50%, -50%)'
          }}>
            Find your team
        </Button>
        <Modal
          title='Sign in'
          visible={visible}
          onOk={this.handleOk}
          confirmLoading={confirmLoading}
          onCancel={this.handleCancel}
        >
          <p>{ModalText}</p>
          <WrappedLoginForm onChange={this.handleFieldChange} />
        </Modal>
      </div>
    )
  }
}

class LoginForm extends React.Component {
  constructor (props) {
    super(props)
    this.handleChange = this.handleChange.bind(this)
  }

  handleChange (event, inputType) {
    const text = event.target.value
    this.props.onChange(inputType, text)
  }

  render () {
    const { getFieldDecorator } = this.props.form

    return (
      <Form layout='inline'>
        <Form.Item>
          {getFieldDecorator('email', {
            rules: [{ type: 'email', message: 'The input is not valid E-mail!' }]
          })(
            <Input onChange={e => this.handleChange(e, 'email')} prefix={<Icon type='user' style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder='Email' />
          )}
        </Form.Item>
        <Form.Item
        >
          {getFieldDecorator('coupon', {
          })(
            <Input onChange={e => this.handleChange(e, 'coupon')} prefix={<Icon type='lock' style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder='Coupon' />
          )}
        </Form.Item>
      </Form>
    )
  }
}

const WrappedLoginForm = Form.create({ name: 'horizontal_login' })(LoginForm)

export default withApollo(Home)
