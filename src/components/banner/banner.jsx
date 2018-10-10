import React,{Component} from 'react'
import { Carousel, WingBlank ,WhiteSpace} from 'antd-mobile';

import './banner.sass'
export default class Banner extends Component{
  state = {
    data: ['1', '2', '3'],
    imgHeight: 176,
  }

  render(){
    return (
      <div>
        <Carousel autoplay={true}
                  infinite
                  autoplayInterval={1000}
        >
          {
            this.props.banners.map((val,index)=>(
              <a
                key={index}
                href={val.data}
                style={{ display: 'inline-block', width: '100%', height: this.state.imgHeight }}
              >
                <img
                  src={val.image}
                  alt=""
                  style={{ width: '100%', verticalAlign: 'top' }}
                  onLoad={() => {
                    window.dispatchEvent(new Event('resize'));
                    this.setState({ imgHeight: 'auto' });
                  }}
                />
              </a>
            ))
          }
        </Carousel>
      </div>
    )
  }
}