import React, { Component } from 'react';
import Controls from '../../../components/Controls/Controls';
import PlayBox from '../../../components/PlayBox/PlayBox';
import classes from './Visibility.module.css';

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
          this.tableDisplayRef
        ]

        this.width100Ref = React.createRef();
        this.width75Ref = React.createRef();
        this.width50Ref = React.createRef();
        this.width25Ref = React.createRef();
        this.width0Ref = React.createRef();
        this.widthControlsRefs = [
          this.width100Ref,
          this.width75Ref,
          this.width50Ref,
          this.width25Ref,
          this.width0Ref,
        ]

        this.visibleVisibilityRef = React.createRef();
        this.hiddenVisibilityRef = React.createRef();
        this.collapseVisibilityRef = React.createRef();
        this.visibilityControlsRefs = [
          this.visibleVisibilityRef,
          this.hiddenVisibilityRef,
          this.collapseVisibilityRef,
        ]

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
          this.marginTopOriginalRef
        ]
        this.state = {};
    }

    changeBlockProperty = (property, value) => {
      this.playBlockRef.current.style[property] = value;
    }

    handleActiveButtons = (unique, ref) => {
      let setToScan;
      switch(unique) {
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
          console.log("This should not be reached.");
          return;
      }
      setToScan.forEach(reference => {
        reference.current.style['background-color'] = reference === ref ? 'black' : 'purple';
      })
    }

    render() {
        return (
            <div className={classes.opacityContainer}>
                <h1 className={classes.controlTitle}>VISIBILITY</h1>
                <Controls data= {[
                  {
                    subtitle: 'Opacity',
                    buttons: [
                      {
                        title: "1",
                        ref: this.opacityOneRef,
                        onClick: () => {
                          this.changeBlockProperty('opacity', 1);
                          this.handleActiveButtons('opacity', this.opacityOneRef);
                        }
                      },
                      {
                        title: ".75",
                        ref: this.opacity75Ref,
                        onClick: () => {
                          this.changeBlockProperty('opacity', .75);
                          this.handleActiveButtons('opacity', this.opacity75Ref);
                        }
                      },
                      {
                        title: ".5",
                        ref: this.opacity5Ref,
                        onClick: () => {
                          this.changeBlockProperty('opacity', .5);
                          this.handleActiveButtons('opacity', this.opacity5Ref);
                        }
                      },
                      {
                        title: ".25",
                        ref: this.opacity25Ref,
                        onClick: () => {
                          this.changeBlockProperty('opacity', .25);
                          this.handleActiveButtons('opacity', this.opacity25Ref);
                        }
                      },
                      {
                        title: "0",
                        ref: this.opacity0Ref,
                        onClick: () => {
                          this.changeBlockProperty('opacity', 0);
                          this.handleActiveButtons('opacity', this.opacity0Ref);
                        }
                      },
                    ]
                  },
                  {
                    subtitle: 'Width',
                    buttons: [
                      {
                        title: "100%",
                        ref: this.width100Ref,
                        onClick: () => {
                          this.changeBlockProperty('width', '100%');
                          this.handleActiveButtons('width', this.width100Ref);
                        }
                      },
                      {
                        title: "75%",
                        ref: this.width75Ref,
                        onClick: () => {
                          this.changeBlockProperty('width', '75%');
                          this.handleActiveButtons('width', this.width75Ref);
                        }
                      },
                      {
                        title: "50%",
                        ref: this.width50Ref,
                        onClick: () => {
                          this.changeBlockProperty('width', '50%');
                          this.handleActiveButtons('width', this.width50Ref);
                        }
                      },
                      {
                        title: "25%",
                        ref: this.width25Ref,
                        onClick: () => {
                          this.changeBlockProperty('width', '25%');
                          this.handleActiveButtons('width', this.width25Ref);
                        }
                      },
                      {
                        title: "0",
                        ref: this.width0Ref,
                        onClick: () => {
                          this.changeBlockProperty('width', '0');
                          this.handleActiveButtons('width', this.width0Ref);
                        }
                      },
                    ]
                  },
                  {
                    subtitle: 'Margin-Top',
                    buttons: [
                      {
                        title: "100%",
                        ref: this.marginTop100Ref,
                        onClick: () => {
                          this.changeBlockProperty('margin-top', '100%');
                          this.handleActiveButtons('margin-top', this.marginTop100Ref);
                        }
                      },
                      {
                        title: "75%",
                        ref: this.marginTop75Ref,
                        onClick: () => {
                          this.changeBlockProperty('margin-top', '75%');
                          this.handleActiveButtons('margin-top', this.marginTop75Ref);
                        }
                      },
                      {
                        title: "50%",
                        ref: this.marginTop50Ref,
                        onClick: () => {
                          this.changeBlockProperty('margin-top', '50%');
                          this.handleActiveButtons('margin-top', this.marginTop50Ref);
                        }
                      },
                      {
                        title: "25%",
                        ref: this.marginTop25Ref,
                        onClick: () => {
                          this.changeBlockProperty('margin-top', '25%');
                          this.handleActiveButtons('margin-top', this.marginTop25Ref);
                        }
                      },
                      {
                        title: "0",
                        ref: this.marginTop0Ref,
                        onClick: () => {
                          this.changeBlockProperty('margin-top', '0');
                          this.handleActiveButtons('margin-top', this.marginTop0Ref);
                        }
                      },
                      {
                        title: "Original",
                        ref: this.marginTopOriginalRef,
                        onClick: () => {
                          this.changeBlockProperty('margin-top', '0.5rem');
                          this.handleActiveButtons('margin-top', this.marginTopOriginalRef);
                        }
                      },
                    ]
                  },
                  {
                    subtitle: "Display",
                    buttons: [
                      {
                        title: "Block",
                        ref: this.blockDisplayRef,
                        onClick: () => {
                          this.changeBlockProperty('display', 'block');
                          this.handleActiveButtons('display', this.blockDisplayRef);
                        },
                      },
                      {
                        title: "Inline",
                        ref: this.inlineDisplayRef,
                        onClick: () => {
                          this.changeBlockProperty('display', 'inline');
                          this.handleActiveButtons('display', this.inlineDisplayRef);
                        },
                      },
                      {
                        title: "Inline-Block",
                        ref: this.inlineBlockDisplayRef,
                        onClick: () => {
                          this.changeBlockProperty('display', 'inline-block');
                          this.handleActiveButtons('display', this.inlineBlockDisplayRef);
                        },
                      },
                      {
                        title: "None",
                        ref: this.noneDisplayRef,
                        onClick: () => {
                          this.changeBlockProperty('display', 'none');
                          this.handleActiveButtons('display', this.noneDisplayRef);
                        },
                      },
                      {
                        title: "Table",
                        ref: this.tableDisplayRef,
                        onClick: () => {
                          this.changeBlockProperty('display', 'table');
                          this.handleActiveButtons('display', this.tableDisplayRef);
                        },
                      },
                    ]
                  },
                  {
                    subtitle: "Visibility",
                    buttons: [
                      {
                        title: "Visible",
                        ref: this.visibleVisibilityRef,
                        onClick: () => {
                          this.changeBlockProperty('visibility', 'visible');
                          this.handleActiveButtons('visibility', this.visibleVisibilityRef);
                        },
                      },
                      {
                        title: "Hidden",
                        ref: this.hiddenVisibilityRef,
                        onClick: () => {
                          this.changeBlockProperty('visibility', 'hidden');
                          this.handleActiveButtons('visibility', this.hiddenVisibilityRef);
                        },
                      },
                      {
                        title: "Collapse",
                        ref: this.collapseVisibilityRef,
                        onClick: () => {
                          this.changeBlockProperty('visibility', 'collapse');
                          this.handleActiveButtons('visibility', this.collapseVisibilityRef);
                        },
                      },
                    ]
                  }
                ]}/>
                <PlayBox flex={false} reference={this.playBoxRef}>
                    <div ref={this.playBlockRef} className={classes.block}></div>
                    <div className={classes.block}>Compare</div>
                </PlayBox>
            </div>
        );
    }
}
