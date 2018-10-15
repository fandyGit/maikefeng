import React,{Component} from 'react'
import CartHeader from '../../components/cart-header/cart-header'
import './cart.sass'

export default class Cart extends Component{
  render(){
    return (
      <div>
        <CartHeader></CartHeader>
        <section className='center'>
          <img src="./cart-selected.png" alt=""/>
        </section>
      </div>
    )
  }
}