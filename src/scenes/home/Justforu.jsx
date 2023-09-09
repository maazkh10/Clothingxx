import React from 'react';
import Slider from 'react-slick';
import './YourComponentName.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Procuct2 from '../../images/product2.jpg'
import Procuct3 from '../../images/product3.jpg'
import Procuct4 from '../../images/product4.jpg'
function Justforu() {
  const settings = {
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    swipeToSlide: true,
  };

  return (
    <div style={{ textAlign: 'center' }}>
      <h1 style={{ /* Your h1 styles */ }}>
        Just for You 
      </h1>
      <p>Swipe to see</p>
      <svg xmlns="http://www.w3.org/2000/svg" width="125" height="10" viewBox="0 0 125 10" fill="none" style={{ display: 'inline-block' }}>
        <path d="M62.5775 9.25429L67.1271 4.70469H124.979V4.4979H67.1271L62.5775 0L58.0797 4.4979H0.0205994V4.70469H58.0797L62.5775 9.25429ZM62.5775 0.3102L66.9203 4.60129L62.5775 8.94409L58.2348 4.60129L62.5775 0.3102Z" fill="#555555"/>
      </svg>
      <div className="container page-wrapper">
        <Slider {...settings}>
          {/* Card 1 */}
          <div className="el-wrapper">
            <div className="box-up">
              <img className="img" src="http://code.slicecrowd.com/labs/4/images/t-shirt.png" alt="" />
              <div className="img-info">
                <div className="info-inner">
                  <span className="p-name">I feel like Pablo</span>
                  <span className="p-company">Yeezy</span>
                </div>
                <div className="a-size">Available sizes : <span className="size">S , M , L , XL</span></div>
              </div>
            </div>

            <div className="box-down">
              <div className="h-bg">
                <div className="h-bg-inner"></div>
              </div>

              <a className="cart" href="#">
                <span className="price">$120</span>
                <span className="add-to-cart">
                  <span className="txt">Add in cart</span>
                </span>
              </a>
            </div>
          </div>

          {/* Card 2 */}
          <div className="el-wrapper">
            <div className="box-up">
              <img className="img" src="http://code.slicecrowd.com/labs/4/images/t-shirt.png" alt="" />
              <div className="img-info">
                <div className="info-inner">
                  <span className="p-name">I feel like Pablo</span>
                  <span className="p-company">Yeezy</span>
                </div>
                <div className="a-size">Available sizes : <span className="size">S , M , L , XL</span></div>
              </div>
            </div>

            <div className="box-down">
              <div className="h-bg">
                <div className="h-bg-inner"></div>
              </div>

              <a className="cart" href="#">
                <span className="price">$120</span>
                <span className="add-to-cart">
                  <span className="txt">Add in cart</span>
                </span>
              </a>
            </div>
          </div>

          {/* Card 3 */}
          <div className="el-wrapper">
            {/* Add Card 3 Content Here */}
            <div className="box-up">
              <img className="img" src={Procuct2} alt="" />
              <div className="img-info">
                <div className="info-inner">
                  <span className="p-name">I feel like Pablo</span>
                  <span className="p-company">Yeezy</span>
                </div>
                <div className="a-size">Available sizes : <span className="size">S , M , L , XL</span></div>
              </div>
            </div>

            <div className="box-down">
              <div className="h-bg">
                <div className="h-bg-inner"></div>
              </div>

              <a className="cart" href="#">
                <span className="price">$120</span>
                <span className="add-to-cart">
                  <span className="txt">Add in cart</span>
                </span>
              </a>
            </div>
          </div>

          {/* Card 4 */}
          <div className="el-wrapper">
            {/* Add Card 4 Content Here */}
            <div className="box-up">
              <img className="img" src={Procuct4} alt="" />
              <div className="img-info">
                <div className="info-inner">
                  <span className="p-name">I feel like Pablo</span>
                  <span className="p-company">Yeezy</span>
                </div>
                <div className="a-size">Available sizes : <span className="size">S , M , L , XL</span></div>
              </div>
            </div>

            <div className="box-down">
              <div className="h-bg">
                <div className="h-bg-inner"></div>
              </div>

              <a className="cart" href="#">
                <span className="price">$10</span>
                <span className="add-to-cart">
                  <span className="txt">Add in cart</span>
                </span>
              </a>
            </div>
          </div>
        </Slider>
      </div>
    </div>
  );
}

export default Justforu;
