import React from 'react'
import { Link } from 'gatsby'

import { FiTwitter, FiGithub } from 'react-icons/fi'

import Logo from './logo'

import './navbar.scss'

import ResponsiveMenu from './responsive-menu'

class Navbar extends React.Component {

    constructor(props) {

        super(props);

        this.state = {menuOpen: false}

        this.setMenuState = this.setMenuState.bind(this);

        this.toggleMenu = this.toggleMenu.bind(this);

    }

    setMenuState = () => {

        if(this.state.menuOpen) {

            this.setState({menuOpen: false});

        } else {

            this.setState({menuOpen: true});

        }

    }

    toggleMenu = (menuState) => {

        this.setState({menuOpen: menuState});

    }

    render() {

        var classNames = require('classnames');

        var linkText = 'white';

        var outerBg = '';

        if(this.props.additiveClass) {

            linkText = this.props.additiveClass;

        }

        if(this.props.additiveBg) {

            outerBg = this.props.additiveBg;

        }

        var outerHeaderClass = classNames('fl', 'w-100', 'h4', 'ph6-l', 'ph5-m', 'ph4-ns', 'fixed', 'z-max', outerBg);

        var disabledLink = classNames('link', 'strike', linkText, 'ttu', 'mv4', 'mh3', 'disabled-link');

        var activeLink = classNames('link', linkText, 'ttu', 'mv4', 'ml3', 'dim', 'no-underline');

        var activeIcon = classNames('link', linkText, 'ttu', 'mv4', 'ml2', 'dim', 'no-underline');

        return (

            <header
                ref={this.props.innerRef}
                className={outerHeaderClass}>

                <div className="navbar-anchor mw9 center pv4 mt3 ph4">

                    <Logo />

                    <div
                        id="menu-button"
                        className="hamburger fr dib dn-l"
                        onClick={this.setMenuState}>

                        <div className="bar-inner fr w-50">
                        </div>

                        <div className="bar-inner fr mid">
                        </div>

                        <div className="bar-inner fr w-80">
                        </div>

                    </div>

                    <div
                        id="desktop-menu"
                        className="f6 lh-solid tracked-mega pv2 fr dn dib-l gilroy-medium">

                        <Link to="#" className={disabledLink}>about</Link>

                        <Link to="#" className={disabledLink}>projects</Link>

                        <Link to="#blog" className={disabledLink}>blog</Link>

                        <a
                            href="mailto:hello@stephencwright.co.uk"
                            className={activeLink}>
                            reach me
                        </a>

                        <a
                            href="https://twitter.com/ste_wr"
                            className={activeIcon}>
                            <FiTwitter/>
                        </a>

                        <a
                            href="https://github.com/scwright1"
                            className={activeIcon}>
                            <FiGithub/>
                        </a>

                    </div>

                </div>

                <ResponsiveMenu active={this.state.menuOpen} onMenuChange={this.toggleMenu}/>

            </header>

        )

    }

}

export default React.forwardRef((props, ref) => (
    <Navbar innerRef={ref} {...props} />
));
