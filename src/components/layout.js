import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import { StaticQuery, graphql } from 'gatsby'

import './layout.css'

const Layout = ({ children }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
    <div>
      {children}
    </div>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

class LayoutComponent extends React.Component {

    constructor(props) {
        super(props);
        this.handleScroll = this.handleScroll.bind(this);
    }

    handleScroll() {
        console.log("scrolling");
    }

    render() {
        return (
            <div onScroll={this.handleScroll}>
                <Layout children={this.props.children} />
            </div>
        )
    }

}

export default LayoutComponent
