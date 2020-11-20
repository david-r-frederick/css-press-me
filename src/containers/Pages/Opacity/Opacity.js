import React, { Component } from 'react';
import Controls from '../../../components/Controls/Controls';
import PlayBox from '../../../components/PlayBox/PlayBox';
import classes from './Opacity.module.css';

export class Opacity extends Component {
    constructor(props) {
        super(props);
        this.playBoxRef = React.createRef();
        this.opacityOneRef = React.createRef();
        this.playBlockRef = React.createRef();
        this.opacity75Ref = React.createRef();
        this.opacity5Ref = React.createRef();
        this.opacity25Ref = React.createRef();
        this.opacityControlsRefs = [
          this.opacityOneRef,
          this.opacity75Ref,
          this.opacity5Ref,
          this.opacity25Ref
        ];
        this.state = {};
    }

    changeOpacity = (n) => {
      this.playBlockRef.current.style.opacity = n;
    }

    handleActiveButtons = (unique, ref) => {
      let setToScan;
      switch(unique) {
        case 'opacity':
          setToScan = this.opacityControlsRefs;
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
            <div className={classes.OpacityContainer}>
                <h1>OPACITY</h1>
                <Controls data= {[
                  {
                    subtitle: 'Opacity',
                    buttons: [
                      {
                        title: "1",
                        ref: this.opacityOneRef,
                        onClick: () => {
                          this.changeOpacity(1);
                          this.handleActiveButtons('opacity', this.opacityOneRef);
                        }
                      },
                      {
                        title: ".75",
                        ref: this.opacity75Ref,
                        onClick: () => {
                          this.changeOpacity(.75);
                          this.handleActiveButtons('opacity', this.opacity75Ref);
                        }
                      },
                      {
                        title: ".5",
                        ref: this.opacity5Ref,
                        onClick: () => {
                          this.changeOpacity(.5);
                          this.handleActiveButtons('opacity', this.opacity5Ref);
                        }
                      },
                      {
                        title: ".25",
                        ref: this.opacity25Ref,
                        onClick: () => {
                          this.changeOpacity(.25);
                          this.handleActiveButtons('opacity', this.opacity25Ref);
                        }
                      },
                    ]
                  }
                ]}/>
                <PlayBox flex={true} reference={this.playBoxRef}>
                    <div ref={this.playBlockRef} className={classes.block}></div>
                </PlayBox>
            </div>
        );
    }
}
