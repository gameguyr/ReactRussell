import React from 'react'
import ReactDOM from 'react-dom'


var russStyle = {
    backgroundColor: 'blue',
    color: 'White',
    fontFamily: 'Arial'
}

class Message extends React.Component {
    render() {
        return (
            <div>
                <h1>{this.props.msg}</h1>
            </div>
        )
    }
}

const title = React.createElement(
    'h1',
    {id:'title', className: 'header', style: russStyle},
    'Hello World'
)

// ReactDOM.render(
//     title,
//     document.getElementById('root')
// )

ReactDOM.render(
    <Message msg="How the hell are you?"/>,
    document.getElementById('root')
)