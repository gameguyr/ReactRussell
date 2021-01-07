import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Header from "./Header";
import reportWebVitals from './reportWebVitals';

class Message extends React.Component {
    render() {
        return (
            <div>
                <h1 id="heading-element"> Hello World!</h1>
                <p>We're glad you are here. {this.props.msg}</p>
                {/*<img src={require('/images/forging.jpeg')} alt="Logo"/>*/}
            </div>
        )
    }
}

ReactDOM.render(
  // <React.StrictMode>
  //   <App />,
  // </React.StrictMode>,
  //   <Message msg="How are you?"/>,
    <Header/>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
