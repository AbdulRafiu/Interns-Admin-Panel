import React, {Component } from 'react';
import './Student.css';

class Student extends Component {
    constructor() {
        super();
        this.state = {
            score: 0,
            pass: false,
            fail: false
        }
    }

    componentDidMount() {
        this.setState({
            score: this.props.score,
        })
    }

    incrScore() {
        this.setState({
            score: this.state.score + 1
        }, () => {
            if (this.state.score >= 350) {
                this.setState({pass: true})
            }
            else if (this.state.score <= 340) {
                this.setState({fail: true})
            }
            else {
                this.setState({
                    pass: false,
                    fail: false
                })
            }
        })
    }

    decrScore() {
        this.setState({
            score: this.state.score - 1
        }, () => {
            if (this.state.score >= 350) {
                this.setState({pass: true})
            }
            else if (this.state.score <= 340) {
                this.setState({fail: true})
            }
            else {
                this.setState({
                    pass: false,
                    fail: false
                })
            }
        })
    }


    render () {
        let message;
        const isPass = this.state.pass;
        const isFail = this.state.fail;
        if (isPass) {
            message = <span style={{backgroundColor: 'green', color: 'white'}}>Pass!</span>
        }
        else if (isFail) {
            message = <span style={{backgroundColor: 'red', color: 'white'}}>Fail!</span>
        }
        else {
            message = " "
        }
        return (
            <div className="student">
                <div className="right">
                    <h2 className="studentName">
                        {this.props.name} 
                        <button onClick={ () => this.incrScore() }>+</button>
                        <button onClick={ () => this.decrScore() }>-</button>                
                    </h2>
                    <p className="universityName">
                        {this.props.university}  { message }
                    </p>
                </div>
                <div className="left">
                    <p className="score">
                        {this.state.score}
                    </p>
                </div>
            </div>
        )
    }
}

export default Student;