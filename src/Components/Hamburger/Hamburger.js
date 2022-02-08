import React from "react";
import "./Hamburger.css";

export default class Hamburger extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      hamWidth: "80px",
      display: 'none'
    };
    this.handleHamburger = this.handleHamburger.bind(this);
    this.handleText = this.handleText.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }
  handleHamburger() {
    if(this.state.hamWidth == '45%'){
      this.setState({ hamWidth: "80px" });
    }else{
      this.setState({ hamWidth: "45%" });
    }
  }
  handleText() {
    if(this.state.display == ''){
      this.setState({ display:'none' })
    }else {
      this.setState({display: ''})
    }
  }
  handleChange() {
    this.handleHamburger();
    this.handleText();
  }
  render() {
    return (
      <div>
        <div
          id="mySidepanel"
          className="sidepanel"
          style={{ width: this.state.hamWidth }}
        >
          {/* <button className="openbtn" onClick={this.openHamburger}>
            ☰
          </button> */}
          <a
            href="javascript:void(0)"
            className="openbtn img"
            onClick={this.handleChange}
            value="☰"
          >
            ☰
          </a>
          <div className="sidebarBtn">
            <a href="#" className="fas fa-home img"></a>
            <a href="#" value="main" style={{ display: this.state.display}} className={this.state.display ? 'none' : ''}>
              Main
            </a>
          </div>
          <div className="sidebarBtn">
            <a href="#" class="fas fa-tasks img"></a>
            <a href="#" value="task" style={{ display: this.state.display}} className={this.state.display ? 'none' : ''}>
              Task
            </a>
          </div>
          <div className="sidebarBtn">
            <a href="#" class="fas fa-calendar img"></a>
            <a href="#" value="calendar" style={{ display: this.state.display}} className={this.state.display ? 'none' : ''}>
              Calendar
            </a>
          </div>

        </div>
      </div>
    );
  }
}
