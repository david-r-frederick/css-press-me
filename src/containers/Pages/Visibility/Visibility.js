import React, { Component } from 'react';
import Controls from '../../../components/Controls/Controls';
import PlayBox from '../../../components/PlayBox/PlayBox';
import classes from './Visibility.module.css';
import { generateControl } from '../../../ctrlFactory';

export class Visibility extends Component {
    constructor(props) {
        super(props);
        this.playBoxRef = React.createRef();
        this.opacityOneRef = React.createRef();
        this.playBlockRef = React.createRef();
        this.opacity75Ref = React.createRef();
        this.opacity5Ref = React.createRef();
        this.opacity25Ref = React.createRef();
        this.opacity0Ref = React.createRef();
        this.opacityControlsRefs = [
            this.opacityOneRef,
            this.opacity75Ref,
            this.opacity5Ref,
            this.opacity25Ref,
            this.opacity0Ref,
        ];

        this.blockDisplayRef = React.createRef();
        this.inlineDisplayRef = React.createRef();
        this.inlineBlockDisplayRef = React.createRef();
        this.noneDisplayRef = React.createRef();
        this.tableDisplayRef = React.createRef();
        this.displayControlsRefs = [
            this.blockDisplayRef,
            this.inlineDisplayRef,
            this.inlineBlockDisplayRef,
            this.noneDisplayRef,
            this.tableDisplayRef,
        ];

        this.width100Ref = React.createRef();
        this.width75Ref = React.createRef();
        this.width50Ref = React.createRef();
        this.width25Ref = React.createRef();
        this.width0Ref = React.createRef();
        this.widthControlsRefs = [this.width100Ref, this.width75Ref, this.width50Ref, this.width25Ref, this.width0Ref];

        this.visibleVisibilityRef = React.createRef();
        this.hiddenVisibilityRef = React.createRef();
        this.collapseVisibilityRef = React.createRef();
        this.visibilityControlsRefs = [this.visibleVisibilityRef, this.hiddenVisibilityRef, this.collapseVisibilityRef];

        this.marginTop100Ref = React.createRef();
        this.marginTop75Ref = React.createRef();
        this.marginTop50Ref = React.createRef();
        this.marginTop25Ref = React.createRef();
        this.marginTop0Ref = React.createRef();
        this.marginTopOriginalRef = React.createRef();
        this.marginTopControlsRefs = [
            this.marginTop100Ref,
            this.marginTop75Ref,
            this.marginTop50Ref,
            this.marginTop25Ref,
            this.marginTop0Ref,
            this.marginTopOriginalRef,
        ];
        this.state = {};
    }

    changeBlockProperty = (property, value) => {
        this.playBlockRef.current.style[property] = value;
    };

    handleActiveButtons = (unique, ref) => {
        let setToScan;
        switch (unique) {
            case 'opacity':
                setToScan = this.opacityControlsRefs;
                break;
            case 'width':
                setToScan = this.widthControlsRefs;
                break;
            case 'display':
                setToScan = this.displayControlsRefs;
                break;
            case 'visibility':
                setToScan = this.visibilityControlsRefs;
                break;
            case 'margin-top':
                setToScan = this.marginTopControlsRefs;
                break;
            default:
                console.log('This should not be reached.');
                return;
        }
        setToScan.forEach((reference) => {
            reference.current.style['background-color'] = reference === ref ? 'black' : 'purple';
        });
    };

    render() {
        return (
            <div className={classes.opacityContainer}>
                <div>
                    <h1 className={classes.controlTitle}>VISIBILITY</h1>
                    <Controls
                        data={[
                            {
                                subtitle: 'Opacity',
                                buttons: [
                                    generateControl('1', this.opacityOneRef, () => {
                                        this.changeBlockProperty('opacity', 1);
                                        this.handleActiveButtons('opacity', this.opacityOneRef);
                                    }),
                                    generateControl('.75', this.opacity75Ref, () => {
                                        this.changeBlockProperty('opacity', 0.75);
                                        this.handleActiveButtons('opacity', this.opacity75Ref);
                                    }),
                                    generateControl('.5', this.opacity5Ref, () => {
                                        this.changeBlockProperty('opacity', 0.5);
                                        this.handleActiveButtons('opacity', this.opacity5Ref);
                                    }),
                                    generateControl('.25', this.opacity25Ref, () => {
                                        this.changeBlockProperty('opacity', 0.25);
                                        this.handleActiveButtons('opacity', this.opacity25Ref);
                                    }),
                                    generateControl('0', this.opacity0Ref, () => {
                                        this.changeBlockProperty('opacity', 0);
                                        this.handleActiveButtons('opacity', this.opacity0Ref);
                                    }),
                                ],
                            },
                            {
                                subtitle: 'Width',
                                buttons: [
                                    generateControl('100%', this.width100Ref, () => {
                                        this.changeBlockProperty('width', '100%');
                                        this.handleActiveButtons('width', this.width100Ref);
                                    }),
                                    generateControl('75%', this.width75Ref, () => {
                                        this.changeBlockProperty('width', '75%');
                                        this.handleActiveButtons('width', this.width75Ref);
                                    }),
                                    generateControl('50%', this.width50Ref, () => {
                                        this.changeBlockProperty('width', '50%');
                                        this.handleActiveButtons('width', this.width50Ref);
                                    }),
                                    generateControl('25%', this.width25Ref, () => {
                                        this.changeBlockProperty('width', '25%');
                                        this.handleActiveButtons('width', this.width25Ref);
                                    }),
                                    generateControl('0', this.width0Ref, () => {
                                        this.changeBlockProperty('width', '0px');
                                        this.handleActiveButtons('width', this.width0Ref);
                                    }),
                                ],
                            },
                            {
                                subtitle: 'Margin-Top',
                                buttons: [
                                    generateControl('100%', this.marginTop100Ref, () => {
                                        this.changeBlockProperty('margin-top', '100%');
                                        this.handleActiveButtons('margin-top', this.marginTop100Ref);
                                    }),
                                    generateControl('75%', this.marginTop75Ref, () => {
                                        this.changeBlockProperty('margin-top', '75%');
                                        this.handleActiveButtons('margin-top', this.marginTop75Ref);
                                    }),
                                    generateControl('50%', this.marginTop50Ref, () => {
                                        this.changeBlockProperty('margin-top', '50%');
                                        this.handleActiveButtons('margin-top', this.marginTop50Ref);
                                    }),
                                    generateControl('25%', this.marginTop25Ref, () => {
                                        this.changeBlockProperty('margin-top', '25%');
                                        this.handleActiveButtons('margin-top', this.marginTop25Ref);
                                    }),
                                    generateControl('0', this.marginTop0Ref, () => {
                                        this.changeBlockProperty('margin-top', '0');
                                        this.handleActiveButtons('margin-top', this.marginTop0Ref);
                                    }),
                                    generateControl('Original', this.marginTopOriginalRef, () => {
                                        this.changeBlockProperty('margin-top', '0.5rem');
                                        this.handleActiveButtons('margin-top', this.marginTopOriginalRef);
                                    }),
                                ],
                            },
                            {
                                subtitle: 'Display',
                                buttons: [
                                    generateControl('Block', this.blockDisplayRef, () => {
                                        this.changeBlockProperty('display', 'block');
                                        this.handleActiveButtons('display', this.blockDisplayRef);
                                    }),
                                    generateControl('Inline', this.inlineDisplayRef, () => {
                                        this.changeBlockProperty('display', 'inline');
                                        this.handleActiveButtons('display', this.inlineDisplayRef);
                                    }),
                                    generateControl('Inline-Block', this.inlineBlockDisplayRef, () => {
                                        this.changeBlockProperty('display', 'inline-block');
                                        this.handleActiveButtons('display', this.inlineBlockDisplayRef);
                                    }),
                                    generateControl('None', this.noneDisplayRef, () => {
                                        this.changeBlockProperty('display', 'none');
                                        this.handleActiveButtons('display', this.noneDisplayRef);
                                    }),
                                    generateControl('Table', this.tableDisplayRef, () => {
                                        this.changeBlockProperty('display', 'table');
                                        this.handleActiveButtons('display', this.tableDisplayRef);
                                    }),
                                ],
                            },
                            {
                                subtitle: 'Visibility',
                                buttons: [
                                    generateControl('Visible', this.visibleVisibilityRef, () => {
                                        this.changeBlockProperty('visibility', 'visible');
                                        this.handleActiveButtons('visibility', this.visibleVisibilityRef);
                                    }),
                                    generateControl('Hidden', this.hiddenVisibilityRef, () => {
                                        this.changeBlockProperty('visibility', 'hidden');
                                        this.handleActiveButtons('visibility', this.hiddenVisibilityRef);
                                    }),
                                    generateControl('Collapse', this.collapseVisibilityRef, () => {
                                        this.changeBlockProperty('visibility', 'collapse');
                                        this.handleActiveButtons('visibility', this.collapseVisibilityRef);
                                    }),
                                ],
                            },
                        ]}
                    />
                </div>
                <PlayBox flex={false} reference={this.playBoxRef}>
                    <div ref={this.playBlockRef} className={classes.block}></div>
                    <div className={classes.compareBlock}>Compare</div>
                </PlayBox>
            </div>
        );
    }
}
