import React, { Component } from 'react';
import classes from './InputButton.module.css';

class InputButton extends Component {
    state = {
        inputValue: '',
    };

    render() {
        const { index, cssKey, selected, onSelect } = this.props;
        return (
            <div className={classes.inputButtonContainer}>
                <button
                    className={classes.button}
                    onClick={onSelect}
                    onKeyPress={(ev) => {
                        if (ev.key === 'Enter') {
                            let submitValue = 0;
                            if (this.state.inputValue) {
                                submitValue = this.state.inputValue;
                            }
                            this.props.onSubmit(submitValue);
                        }
                    }}
                    style={{ animationDelay: `${index * 50 + 100}ms` }}
                >
                    {cssKey}
                    {selected ? (
                        <input
                            type="number"
                            value={this.state.inputValue}
                            onChange={(ev) => this.setState({ inputValue: ev.target.value })}
                            className={classes.input}
                        />
                    ) : null}
                </button>
            </div>
        );
    }
}

export default InputButton;
