import React from 'react'

import Layout from '../components/layout'

import './index.css'

const Navbar = ({colorAttr}) => (
    <div style={colorAttr} className="navbar-style">
        <p>This is the header</p>
    </div>
)

class ContentBlock extends React.Component {

    constructor(props) {
        super(props);
        this.positionRef = React.createRef();

        this._handleScroll = this._handleScroll.bind(this);

        this.setElementRef = element => {
            this.positionRef = element;
        };
    }

    _handleScroll() {
        console.log(this.positionRef);
    }

/*    componentDidMount() {
        window.addEventListener('scroll', this._handleScroll);
    }

    componentWillUnmount() {
        window.removeEventListener('scroll', this._handleScroll);
    } */

    render() {
        return (
            <div ref={this.setElementRef} style={{backgroundColor: this.props.backCol}} className="content-block"></div>
        )
    }

}

class IndexPage extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            color: "",
            bgColor: "red"
        };
    }

    setNewColor(e) {
        this.setState({
            bgColor: this.state.color
        });
        e.preventDefault();
    }

    render() {
        var styleVal = {
            backgroundColor: this.state.bgColor
        };

        return (
            <Layout>
                <Navbar colorAttr={styleVal} />
                <ContentBlock backCol={'green'} />
                <ContentBlock backCol={'orange'} />
                <ContentBlock backCol={'silver'} />
                <ContentBlock backCol={'blue'} />
                <ContentBlock backCol={'grey'} />
                <ContentBlock backCol={'green'} />
                <ContentBlock backCol={'orange'} />
                <ContentBlock backCol={'silver'} />
                <ContentBlock backCol={'blue'} />
                <ContentBlock backCol={'grey'} />
                <ContentBlock backCol={'green'} />
                <ContentBlock backCol={'orange'} />
                <ContentBlock backCol={'silver'} />
                <ContentBlock backCol={'blue'} />
                <ContentBlock backCol={'grey'} />
            </Layout>
        )
    }
}

export default IndexPage
