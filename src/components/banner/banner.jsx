import React,{Component} from 'react'
import { Carousel, WingBlank ,WhiteSpace} from 'antd-mobile';

import './banner.sass'
export default class Banner extends Component{
  state = {
    data: ['1', '2', '3'],
    imgHeight: 176,
    bannerData:[]
  }
  componentWillMount(){
    let banners=this.props.banner;
    // console.log(banners)
    if(banners!==undefined){
      banners=banners.item;
      console.log(banners)
    }
    this.setState({
      bannerData:banners
    })
  }
  render(){
    /*let banners=this.props.banner;
    // console.log(banners)
    if(banners!==undefined){
      banners=banners.item;
      console.log(banners)
    }*/
    return (
      <div>
        <WhiteSpace></WhiteSpace>
        <WingBlank>
          <Carousel
            autoplay={true}
            infinite
          >
            {this.state.data.map(val => (
              <a
                key={val}
                href="http://www.alipay.com"
                style={{ display: 'inline-block', width: '100%', height: this.state.imgHeight }}
              >
                <img
                  src={`https://zos.alipayobjects.com/rmsportal/${val}.png`}
                  alt=""
                  style={{ width: '100%', verticalAlign: 'top' }}
                  onLoad={() => {
                    // fire window resize event to change height
                    window.dispatchEvent(new Event('resize'));
                    this.setState({ imgHeight: 'auto' });
                  }}
                />
                <i>{val.data}</i>
              </a>
            ))}
          </Carousel>
        </WingBlank>
      </div>

    )
  }
}