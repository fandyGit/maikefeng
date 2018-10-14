import React,{Component} from 'react'
import { List, InputItem, Switch, Checkbox, Button,Toast } from 'antd-mobile';
import { createForm } from 'rc-form';
import {connect} from 'react-redux'
import {Redirect} from 'react-router-dom'


import LoginHeader from './login-header/login-header'
import {getLogin} from '../../redux/actions'

const Item = List.Item;
const CheckboxItem = Checkbox.CheckboxItem;

class Login extends Component{
  state = {
    value: 1,
    isChecked:false,
    redirectTo:'',
    msg:''
  }
  componentWillReceiveProps(props) {
    const {msg}=props.user;
    if(msg!==''){
      Toast.loading(msg, 30, () => {
        this.props.form.resetFields();
      });

      setTimeout(() => {
        Toast.hide();
      }, 3000);
    }
  }
  onSubmit = () => {
    this.props.form.validateFields({ force: true }, (error) => {
      if (!error) {
        const data=this.props.form.getFieldsValue();
        const {isChecked,redirectTo}=this.state;

        let users={...data,isChecked,redirectTo}
        console.log(users)
        this.props.getLogin(users);
      } else {
        alert('Validation failed');
      }
    });
  }
  onReset = () => {
    this.props.form.resetFields();
  }
  handleCheck=(value)=>{
    this.setState({
      isChecked:value.target.checked
    })
  }
  validateAccount = (rule, value, callback) => {
    if (value && value.length > 4) {
      callback();
    } else {
      callback(new Error('用户名至少是四个字符'));
    }
  }
  render(){
    const { getFieldProps, getFieldError } = this.props.form;
    const {redirectTo,msg}=this.props.user;
    if(redirectTo){
      return <Redirect to={redirectTo}></Redirect>
    }
    return (
      <div>
        <LoginHeader></LoginHeader>
        <section>
          <form>
            <List
              renderHeader={() => '会员登录'}
              renderFooter={() => getFieldError('username') && getFieldError('username').join(',')}
            >
              <InputItem
                {...getFieldProps('username', {
                  rules: [
                    { required: true, message: '请输入登录用户名！' },
                    { validator: this.validateAccount },
                  ],
                })}
                clear
                error={!!getFieldError('username')}
                onErrorClick={() => {
                  alert(getFieldError('username').join('、'));
                }}
                placeholder="请输入登录用户名！"
              >用户名:</InputItem>
              <InputItem {...getFieldProps('password')} placeholder="请输入密码" type="password">
                密码:
              </InputItem>
              <Item
                extra={<Switch {...getFieldProps('1', { initialValue: true, valuePropName: 'checked' })} />}
              >
                确认信息
              </Item>
              <Item>
                <CheckboxItem onChange={(value) => this.handleCheck(value)}>
                  记住密码
                </CheckboxItem>
              </Item>
              <Item>
                <Button type="primary" size="lg" inline onClick={this.onSubmit}>提交</Button>
                <Button size="lg" inline style={{ marginLeft: '2.5px' }} onClick={this.onReset}>重置</Button>
              </Item>
            </List>
          </form>
        </section>
      </div>
    )
  }
}
Login = createForm()(Login);
export default connect(
  state=>({user:state}),
  {getLogin}
)(Login);