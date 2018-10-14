import React,{Component} from 'react'
import LoginHeader from './login-header/login-header'
import { List, InputItem, Switch, Checkbox, Button } from 'antd-mobile';
import { createForm } from 'rc-form';
const Item = List.Item;
const CheckboxItem = Checkbox.CheckboxItem;
const AgreeItem = Checkbox.AgreeItem;

class Login extends Component{
  state = {
    value: 1,
    isChecked:false
  }
  onSubmit = () => {
    this.props.form.validateFields({ force: true }, (error) => {
      if (!error) {
        //console.log(this.props.form.getFieldsValue());
        const data=this.props.form.getFieldsValue();
        const isChecked=this.state.isChecked;
        let loginData={...data,isChecked}
        console.log(loginData)
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
export default Login;