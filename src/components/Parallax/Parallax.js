import React from 'react';
import './Parallax.scss';

class Parallax extends React.Component {
  state = {
    containerHeight: window.innerHeight,
    containerWidth: 0,
    x: 0,
    y: 0
  };

  onMouseMove = (e) => {
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
            <div className="block fifth">
              <div className="parallax_block_fifth" style={{
                left: (x*0.05),
                top: (y*0.05),
              }}></div>
            </div>
            <div className="block fourth">
              <div className="parallax_block_fourth" style={{
                left: (x*0.2),
                top: (y*0.2),
              }}></div>
            </div>
            <div className="block third">
              <div className="parallax_block_third" style={{
                left: (x*0.35),
                top: (y*0.35),
              }}></div>
            </div>
            <div className="block second">
              <div className="parallax_block_second" style={{
                left: (x*0.5),
                top: (y*0.5),
              }}></div>
            </div>
            <div className="block first">
              <div className="parallax_block_first" style={{
                left: (x*0.65),
                top: (y*0.65),
              }}></div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Parallax;
