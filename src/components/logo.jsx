import React from 'react'
import { StaticQuery, graphql, Link } from 'gatsby'

export default () => (
    <StaticQuery
        query={graphql`
            query {
                site {
                    siteMetadata {
                        shortTitle
                    }
                }
            }
        `}
        render={data => (
            <Link
                to="/"
                className="bg-col-dark white f5 lh-solid gilroy-semibold tracked dib pt2 pv2 ph3 link no-underline"
                >
                { data.site.siteMetadata.shortTitle }
            </Link>
        )}
    />
)
