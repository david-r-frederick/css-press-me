import React, { Component } from 'react';
import classes from './FlexBox.module.css';
import Controls from '../../../components/Controls/Controls';
import PlayBox from '../../../components/PlayBox/PlayBox';

export class FlexBox extends Component {
    constructor(props) {
        super(props);
        this.flexContainerRef = React.createRef();
        this.firstBoxRef = React.createRef();
        this.secondBoxRef = React.createRef();
        this.thirdBoxRef = React.createRef();
        this.fourthBoxRef = React.createRef();

        this.flexRowBtnRef = React.createRef();
        this.flexRowReverseBtnRef = React.createRef();
        this.flexColumnBtnRef = React.createRef();
        this.flexColumnReverseBtnRef = React.createRef();
        this.directionControlsRefs = [
            this.flexRowBtnRef,
            this.flexRowReverseBtnRef,
            this.flexColumnBtnRef,
            this.flexColumnReverseBtnRef,
        ];

        this.alignItemsStartRef = React.createRef();
        this.alignItemsCenterRef = React.createRef();
        this.alignItemsEndRef = React.createRef();
        this.alignControlsRefs = [this.alignItemsStartRef, this.alignItemsCenterRef, this.alignItemsEndRef];

        this.justifyContentStartRef = React.createRef();
        this.justifyContentCenterRef = React.createRef();
        this.justifyContentEndRef = React.createRef();
        this.justifyContentAroundRef = React.createRef();
        this.justifyContentBetweenRef = React.createRef();
        this.justifyContentEvenlyRef = React.createRef();
        this.justifyControlsRefs = [
            this.justifyContentStartRef,
            this.justifyContentCenterRef,
            this.justifyContentEndRef,
            this.justifyContentAroundRef,
            this.justifyContentBetweenRef,
            this.justifyContentEvenlyRef,
        ];

        this.state = {
            activeDirectionElement: null,
            activeAlignmentElement: null,
            activeJustifyElement: null,
        };
    }

    handleActiveButtons = (unique, ref) => {
        let setToScan;
        switch (unique) {
            case 'direction':
                this.setState({ activeDirectionElement: ref });
                setToScan = this.directionControlsRefs;
                break;
            case 'alignment':
                this.setState({ activeAlignmentElement: ref });
                setToScan = this.alignControlsRefs;
                break;
            case 'justify':
                this.setState({ activeJustifyElement: ref });
                setToScan = this.justifyControlsRefs;
                break;
            default:
                console.log('This should not be reached.');
                return;
        }
        setToScan.forEach((reference) => {
            reference.current.style['background-color'] = reference === ref ? 'black' : 'purple';
        });
    };

    changeFlexContainerProperty = (key, value) => {
        this.flexContainerRef.current.style[key] = value;
    };

    render() {
        return (
            <div className={classes.flexBoxContainer}>
                <h2 className={classes.controlTitle}>FlexBox</h2>
                <Controls
                    data={[
                        {
                            subtitle: 'Flex-Direction Properties',
                            buttons: [
                                {
                                    title: 'Row',
                                    ref: this.flexRowBtnRef,
                                    onClick: () => {
                                        this.changeFlexContainerProperty('flex-direction', 'row');
                                        this.handleActiveButtons('direction', this.flexRowBtnRef);
                                    },
                                },
                                {
                                    title: 'Row-Reverse',
                                    ref: this.flexRowReverseBtnRef,
                                    onClick: () => {
                                        this.changeFlexContainerProperty('flex-direction', 'row-reverse');
                                        this.handleActiveButtons('direction', this.flexRowReverseBtnRef);
                                    },
                                },
                                {
                                    title: 'Column',
                                    ref: this.flexColumnBtnRef,
                                    onClick: () => {
                                        this.changeFlexContainerProperty('flex-direction', 'column');
                                        this.handleActiveButtons('direction', this.flexColumnBtnRef);
                                    },
                                },
                                {
                                    title: 'Column-Reverse',
                                    ref: this.flexColumnReverseBtnRef,
                                    onClick: () => {
                                        this.changeFlexContainerProperty('flex-direction', 'column-reverse');
                                        this.handleActiveButtons('direction', this.flexColumnReverseBtnRef);
                                    },
                                },
                            ],
                        },
                        {
                            subtitle: 'Align-Items Properties',
                            buttons: [
                                {
                                    title: 'Flex-Start',
                                    ref: this.alignItemsStartRef,
                                    onClick: () => {
                                        this.changeFlexContainerProperty('align-items', 'flex-start');
                                        this.handleActiveButtons('alignment', this.alignItemsStartRef);
                                    },
                                },
                                {
                                    title: 'Center',
                                    ref: this.alignItemsCenterRef,
                                    onClick: () => {
                                        this.changeFlexContainerProperty('align-items', 'center');
                                        this.handleActiveButtons('alignment', this.alignItemsCenterRef);
                                    },
                                },
                                {
                                    title: 'Flex-End',
                                    ref: this.alignItemsEndRef,
                                    onClick: () => {
                                        this.changeFlexContainerProperty('align-items', 'flex-end');
                                        this.handleActiveButtons('alignment', this.alignItemsEndRef);
                                    },
                                },
                            ],
                        },
                        {
                            subtitle: 'Justify-Content Properties',
                            buttons: [
                                {
                                    title: 'Flex-Start',
                                    ref: this.justifyContentStartRef,
                                    onClick: () => {
                                        this.changeFlexContainerProperty('justify-content', 'flex-start');
                                        this.handleActiveButtons('justify', this.justifyContentStartRef);
                                    },
                                },
                                {
                                    title: 'Center',
                                    ref: this.justifyContentCenterRef,
                                    onClick: () => {
                                        this.changeFlexContainerProperty('justify-content', 'center');
                                        this.handleActiveButtons('justify', this.justifyContentCenterRef);
                                    },
                                },
                                {
                                    title: 'Flex-End',
                                    ref: this.justifyContentEndRef,
                                    onClick: () => {
                                        this.changeFlexContainerProperty('justify-content', 'flex-end');
                                        this.handleActiveButtons('justify', this.justifyContentEndRef);
                                    },
                                },
                                {
                                    title: 'Space-Around',
                                    ref: this.justifyContentAroundRef,
                                    onClick: () => {
                                        this.changeFlexContainerProperty('justify-content', 'space-around');
                                        this.handleActiveButtons('justify', this.justifyContentAroundRef);
                                    },
                                },
                                {
                                    title: 'Space-Between',
                                    ref: this.justifyContentBetweenRef,
                                    onClick: () => {
                                        this.changeFlexContainerProperty('justify-content', 'space-between');
                                        this.handleActiveButtons('justify', this.justifyContentBetweenRef);
                                    },
                                },
                                {
                                    title: 'Space-Evenly',
                                    ref: this.justifyContentEvenlyRef,
                                    onClick: () => {
                                        this.changeFlexContainerProperty('justify-content', 'space-evenly');
                                        this.handleActiveButtons('justify', this.justifyContentEvenlyRef);
                                    },
                                },
                            ],
                        },
                    ]}
                />
                <PlayBox 
                  flex={true}
                  reference={this.flexContainerRef}
                >
                    <div ref={this.firstBoxRef} className={classes.block}>
                        1
                    </div>
                    <div ref={this.secondBoxRef} className={classes.block}>
                        2
                    </div>
                    <div ref={this.thirdBoxRef} className={classes.block}>
                        3
                    </div>
                    <div ref={this.fourthBoxRef} className={classes.block}>
                        4
                    </div>
                </PlayBox>
            </div>
        );
    }
}
