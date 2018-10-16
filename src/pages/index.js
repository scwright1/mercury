import React from 'react'

import BasicLayout from '../components/basic-layout'

import Navbar from '../components/navbar'

import HeadlinePanel from '../components/headline'

import BlogSummary from '../components/blog-summary'

import 'tachyons'

import '../components/base.scss'

import '../components/colors.scss'

import '../components/fonts.scss'

class IndexPage extends React.Component {

    constructor(props) {

        super(props);

        this.state = {activeComponent: 0, additiveClass: '', additiveBg: ''};

        this.panelMap = [
            {component: React.createRef(), additiveClass: 'white', additiveBg: 'bg-clear'},
            {component: React.createRef(), additiveClass: 'col-dark', additiveBg: 'bg-near-white'}
        ];

        this.navbarDOM = React.createRef();

        this.handleFocusPanel = this.handleFocusPanel.bind(this);

    }

    handleFocusPanel() {

        if(this.navbarDOM.current) {

            const navBounds = this.navbarDOM.current.getBoundingClientRect();

            const currentFocusPanel = this.panelMap[this.state.activeComponent].component.current.getBoundingClientRect();

            if ((currentFocusPanel.bottom < navBounds.bottom) || (currentFocusPanel.top > navBounds.bottom)) {

                for (let i = 0; i < this.panelMap.length; i++) {

                    const newFocusPanel = this.panelMap[i].component.current.getBoundingClientRect();

                    if ((newFocusPanel.top < navBounds.bottom) && (newFocusPanel.bottom > navBounds.bottom)) {

                        this.setState({activeComponent: i});

                        this.setState({additiveClass: this.panelMap[i].additiveClass});

                        this.setState({additiveBg: this.panelMap[i].additiveBg});

                    }

                }

            }

            this.setState({additiveBg: this.panelMap[this.state.activeComponent].additiveBg});

        }

    }

    componentDidMount() {

        window.addEventListener('scroll', this.handleFocusPanel);

        this.handleFocusPanel();

    }

    componentWillUnmount() {

        window.removeEventListener('scroll', this.handleFocusPanel);

    }

    render() {

        return (

            <BasicLayout>

                <Navbar ref={this.navbarDOM} additiveClass={this.state.additiveClass} additiveBg={this.state.additiveBg} />

                <HeadlinePanel ref={this.panelMap[0].component} />

                <BlogSummary ref={this.panelMap[1].component} />

            </BasicLayout>

        )

    }

}

export default IndexPage
