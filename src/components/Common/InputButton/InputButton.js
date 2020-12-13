import React, { Component } from 'react';
import classes from './InputButton.module.css';

class InputButton extends Component {
    constructor(props) {
        super(props);
        this.inputRef = React.createRef();
        this.state = {
            inputValue: '',
        };
    }

    render() {
        const { index, cssKey } = this.props;
        return (
            <div className={classes.inputButtonContainer}>
                <button
                    className={classes.button}
                    onClick={() => {
                        const { current } = this.inputRef;
                        current.style.display = 'inline-block';
                        current.focus();
                    }}
                    onKeyPress={(ev) => {
                        if (ev.key === 'Enter') {
                            let submitValue = 0;
                            if (this.state.inputValue) {
                                submitValue = this.state.inputValue;
                            }
                            this.props.onSubmit(submitValue);
                            this.inputRef.current.style.display = "none";
                        }
                    }}
                    style={{ animationDelay: `${index * 50 + 100}ms` }}
                >
                    {cssKey}
                    <input
                        ref={this.inputRef}
                        type="number"
                        value={this.state.inputValue}
                        onChange={(ev) => this.setState({ inputValue: ev.target.value })}
                        onBlur={() => this.inputRef.current.style.display = 'none'}
                        className={classes.input}
                    />
                </button>
            </div>
        );
    }
}

export default InputButton;
