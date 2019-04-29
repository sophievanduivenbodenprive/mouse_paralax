import React from 'react';
import './Parallax.scss';

class Parallax extends React.Component {
  state = {
    containerHeight: 800,
    containerWidth: 0,
    x: 0,
    y: 0
  };

  onMouseMove = (e) => {
    // console.log(position, e.nativeEvent.offsetX, e.screenX);
    let calculateMiddleY = ((this.state.containerHeight/2) - e.pageY)*-1;
    let calculateMiddleX = ((this.state.containerWidth/2) - e.pageX)*-1;


    this.setState({ x: calculateMiddleX, y: calculateMiddleY });

  }

  componentDidMount = () => {
    window.addEventListener('mousemove', this.onMouseMove);
    this.updateWindowDimensions();
    window.addEventListener('resize', this.updateWindowDimensions);
  }
  
  componentWillUnmount = () => {
    window.removeEventListener('resize', this.updateWindowDimensions);
  }
  
  updateWindowDimensions = () => {
    this.setState({ containerWidth: window.innerWidth });
  }

  render(){
    const { x, y } = this.state;

    return (
      <div className="Creatives" style={{
        width: this.state.containerWidth,
        height: this.state.containerHeight,
      }}>
      <h1>Mouse coordinates: { x } { y }</h1>
        <div className="container">
          <div className="block_container">
            <div className="block third">
              <div className="parallax_block_third"></div>
            </div>
            <div className="block second">
              <div className="parallax_block_second"></div>
            </div>
            <div className="block first">
            <div className="parallax_block_first"></div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Parallax;
