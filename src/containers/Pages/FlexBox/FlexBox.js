import React, { Component } from 'react';
import classes from './FlexBox.module.css';
import Controls from '../../../components/Controls/Controls';
import PlayBox from '../../../components/PlayBox/PlayBox';
import { generateControl } from '../../../ctrlFactory';

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
                <div>
                    <h2 className={classes.controlTitle}>FlexBox</h2>
                    <Controls
                        data={[
                            {
                                subtitle: 'Flex-Direction Properties',
                                buttons: [
                                    generateControl('Row', this.flexRowBtnRef, () => {
                                        this.changeFlexContainerProperty('flex-direction', 'row');
                                        this.handleActiveButtons('direction', this.flexRowBtnRef);
                                    }),
                                    generateControl('Row-Reverse', this.flexRowReverseBtnRef, () => {
                                        this.changeFlexContainerProperty('flex-direction', 'row-reverse');
                                        this.handleActiveButtons('direction', this.flexRowReverseBtnRef);
                                    }),
                                    generateControl('Column', this.flexColumnBtnRef, () => {
                                        this.changeFlexContainerProperty('flex-direction', 'column');
                                        this.handleActiveButtons('direction', this.flexColumnBtnRef);
                                    }),
                                    generateControl('Column-Reverse', this.flexColumnReverseBtnRef, () => {
                                        this.changeFlexContainerProperty('flex-direction', 'column-reverse');
                                        this.handleActiveButtons('direction', this.flexColumnReverseBtnRef);
                                    }),
                                ],
                            },
                            {
                                subtitle: 'Align-Items Properties',
                                buttons: [
                                    generateControl('Flex-Start', this.alignItemsStartRef, () => {
                                        this.changeFlexContainerProperty('align-items', 'flex-start');
                                        this.handleActiveButtons('alignment', this.alignItemsStartRef);
                                    }),
                                    generateControl('Center', this.alignItemsCenterRef, () => {
                                        this.changeFlexContainerProperty('align-items', 'center');
                                        this.handleActiveButtons('alignment', this.alignItemsCenterRef);
                                    }),
                                    generateControl('Flex-End', this.alignItemsEndRef, () => {
                                        this.changeFlexContainerProperty('align-items', 'flex-end');
                                        this.handleActiveButtons('alignment', this.alignItemsEndRef);
                                    }),
                                ],
                            },
                            {
                                subtitle: 'Justify-Content Properties',
                                buttons: [
                                    generateControl('Flex-Start', this.justifyContentStartRef, () => {
                                        this.changeFlexContainerProperty('justify-content', 'flex-start');
                                        this.handleActiveButtons('justify', this.justifyContentStartRef);
                                    }),
                                    generateControl('Center', this.justifyContentCenterRef, () => {
                                        this.changeFlexContainerProperty('justify-content', 'center');
                                        this.handleActiveButtons('justify', this.justifyContentCenterRef);
                                    }),
                                    generateControl('Flex-End', this.justifyContentEndRef, () => {
                                        this.changeFlexContainerProperty('justify-content', 'flex-end');
                                        this.handleActiveButtons('justify', this.justifyContentEndRef);
                                    }),
                                    generateControl('Space-Around', this.justifyContentAroundRef, () => {
                                        this.changeFlexContainerProperty('justify-content', 'space-around');
                                        this.handleActiveButtons('justify', this.justifyContentAroundRef);
                                    }),
                                    generateControl('Space-Between', this.justifyContentBetweenRef, () => {
                                        this.changeFlexContainerProperty('justify-content', 'space-between');
                                        this.handleActiveButtons('justify', this.justifyContentBetweenRef);
                                    }),
                                    generateControl('Space-Evenly', this.justifyContentEvenlyRef, () => {
                                        this.changeFlexContainerProperty('justify-content', 'space-evenly');
                                        this.handleActiveButtons('justify', this.justifyContentEvenlyRef);
                                    }),
                                ],
                            },
                        ]}
                    />
                </div>
                <PlayBox flex={true} reference={this.flexContainerRef}>
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
