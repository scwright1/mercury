import React from 'react'
import { Link } from 'gatsby'

import { FiXCircle, FiTwitter, FiGithub } from 'react-icons/fi'

import Logo from './logo'

class Navbar extends React.Component {

    constructor(props) {

        super(props);

        this.state = {

            additiveClass: ''

        }

    }

    render() {

        var classNames = require('classnames');

        var linkText = 'white';

        const darkText = 'col-dark';

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

        //"fl w-100 h4 ph6-l ph5-m ph4-ns fixed z-max white"

        return (

            <header ref={this.props.innerRef} className={outerHeaderClass}>

                <div className="mw9 center pv4 mt3 ph4">

                    <Logo />

                    <div id="menu-button" className="hamburger fr dib dn-l" onClick={this.setMenuState}>

                        <div className="bar-inner upper"></div>

                        <div className="bar-inner mid"></div>

                        <div className="bar-inner lower"></div>

                    </div>

                    <div id="desktop-menu" className="f6 lh-solid tracked-mega pv2 fr dn dib-l gilroy-medium">

                        <Link to="#" className={disabledLink}>about</Link>

                        <Link to="#" className={disabledLink}>projects</Link>

                        <Link to="#blog" className={disabledLink}>blog</Link>

                        <a href="mailto:hello@stephencwright.co.uk" className={activeLink}>reach me</a>

                        <a href="https://twitter.com/ste_wr" className={activeIcon}><FiTwitter/></a>

                        <a href="https://github.com/scwright1" className={activeIcon}><FiGithub/></a>

                    </div>

                </div>

            </header>

        )

    }

}

export default React.forwardRef((props, ref) => ( <Navbar innerRef={ref} {...props} />));
