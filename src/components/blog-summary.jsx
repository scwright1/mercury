import React from 'react'

import { FiTwitter } from 'react-icons/fi'

import './blog-summary.scss'

const BlogSummary = React.forwardRef((props, ref) => (
    <section ref={ref} {...props} id="blog" className="content-panel vh-100 w-100 ma0 relative bg-near-white dt">

        <div className="dtc v-mid tc col-dark gilroy-medium">

            <div class="mw9 center">

            </div>

        </div>

    </section>
));

export default BlogSummary
