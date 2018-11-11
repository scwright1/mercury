import React from 'react'
import classNames from 'classnames'
import { Link } from 'gatsby'

import { FiXCircle, FiTwitter, FiGithub } from 'react-icons/fi'

import './responsive-menu.scss'

class ResponsiveMenu extends React.Component {

    constructor(props) {

        super(props);

        this.toggleMenu = this.toggleMenu.bind(this);

    }

    toggleMenu = () => {

        var newState = false

        if(!this.props.active) {

            newState = true;

        }

        this.props.onMenuChange(newState);

    }

    render = () => {

        let propClass = classNames('bg-col-dark fixed top-0 left-0 w-100 vh-100', {'show': this.props.active})

        return(

            <div id="responsive-menu" className={propClass}>

                <div className="w-100 h4 ph6-l ph5-m ph4-ns">

                    <div className="mw9 center pv4 mt3 ph4">

                        <div className="hamburger fr white dib f2 dim positioning-fix" onClick={this.toggleMenu}><FiXCircle/></div>

                    </div>

                </div>

                <div className="responsive-menu-backer fixed left-0 nt5 h4 col-near-dark gilroy-extrabold tc f-5 w-100 z-1">M E N U</div>

                <div className="responsive-menu-options fixed left-0 w-100 z-2 ttu tc gilroy-medium white">

                    <div className="h3">

                        <Link
                            to="#"
                            className="link white f5 strike disabled-link"
                            onClick={this.toggleMenu}>
                            a b o u t
                        </Link>

                    </div>

                    <div className="h3">

                        <Link
                            to="#"
                            className="link white f5 strike disabled-link"
                            onClick={this.toggleMenu}>
                            p r o j e c t s
                        </Link>

                    </div>

                    <div className="h3">

                        <Link
                            to="#blog"
                            className="link white f5 no-underline dim"
                            onClick={this.toggleMenu}>
                            b l o g
                        </Link>

                    </div>

                    <div className="h3">

                        <Link
                            to="mailto:hello@stephencwright.co.uk"
                            className="link white f5 no-underline dim"
                            onClick={this.toggleMenu}>
                            r e a c h&nbsp;&nbsp;m e
                        </Link>

                    </div>

                    <div className="h3">

                        <a href="https://twitter.com/ste_wr" className="di link no-underline white ph2 dim" target="_blank" rel="noopener noreferrer" onClick={this.toggleMenu}><FiTwitter/></a>

                        <a href="https://github.com/scwright1" className="di link no-underline white ph2 dim" target="_blank" rel="noopener noreferrer" onClick={this.toggleMenu}><FiGithub/></a>

                    </div>

                </div>

            </div>

        )

    }

}

export default ResponsiveMenu
