import React from 'react'

import 'tachyons'

import './index.css'

const Navbar = React.forwardRef((props, ref) => (
    <div ref={ref} style={props.bgcol} {...props} className="navbar-style">
        <p>This is the header</p>
    </div>
));

class ContentBlockComponent extends React.Component {
    render() {
        return <div style={{backgroundColor: this.props.bgcol}} className="content-block"></div>;
    }
}

const ContentBlockContainer = React.forwardRef((props, ref) => (
    <div ref={ref}><ContentBlockComponent bgcol={props.bgcol} /></div>
));

class IndexPage extends React.Component {

    constructor(props) {
        super(props);

        this.handleFocusElement = this.handleFocusElement.bind(this);
        this.navbarRef = React.createRef();
        this.componentMapping = [];

        this.state = { activeComponent: 0, color: '' };

    }

    handleFocusElement(e) {

        if(this.navbarRef.current) {

            const navBounds = this.navbarRef.current.getBoundingClientRect();

            //check if we've moved beyond the currently active element

            if((this.componentMapping[this.state.activeComponent].component.current.getBoundingClientRect().bottom < navBounds.bottom) ||
                (this.componentMapping[this.state.activeComponent].component.current.getBoundingClientRect().top > navBounds.bottom)) {

                    //figure out which component we're now overlapping

                    for(let index = 0; index < this.componentMapping.length; index++) {

                        if((this.componentMapping[index].component.current.getBoundingClientRect().top < navBounds.bottom) &&
                            (this.componentMapping[index].component.current.getBoundingClientRect().bottom > navBounds.bottom)) {
                                this.setState({activeComponent: index});
                                this.setState({color: this.componentMapping[index].bgcol});
                        }

                    }
            }
            this.setState({color: this.componentMapping[this.state.activeComponent].bgcol});
        }

    }

    componentDidMount() {
        window.addEventListener('scroll', this.handleFocusElement);
        this.handleFocusElement();
    }

    componentWillUnmount() {
        window.removeEventListener('scroll', this.handleFocusElement);
    }

    render() {
        var styleVal = {
            backgroundColor: this.state.color
        };

        this.componentMapping[0] = {component: React.createRef(), bgcol: 'near-black'};
        this.componentMapping[1] = {component: React.createRef(), bgcol: 'near-white'};
        this.componentMapping[2] = {component: React.createRef(), bgcol: ''};

        return (
            <div className="main-content ma4">
                <Navbar bgcol={styleVal} ref={this.navbarRef}/>
                <ContentBlockContainer ref={this.componentMapping[0].component} bgcol={this.componentMapping[0].bgcol} />
                <ContentBlockContainer ref={this.componentMapping[1].component} bgcol={this.componentMapping[1].bgcol} />
                <ContentBlockContainer ref={this.componentMapping[2].component} bgcol={this.componentMapping[2].bgcol} />
            </div>
        )
    }
}

export default IndexPage

//
