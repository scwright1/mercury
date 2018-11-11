import React from 'react'

import { FiTwitter } from 'react-icons/fi'

import './blog-summary.scss'

const BlogSummary = React.forwardRef((props, ref) => (
    <section ref={ref} {...props} id="blog" className="content-panel vh-100 w-100 ma0 relative bg-near-white dt">

        <div className="pt6 vh-100 flex flex-column justify-center mw9 center mt3 ph4">

            <div className="post-entry h4 dt">
                <div className="dtc v-mid">
                    <img className="tweet-photo-inline mv2 mh2" width="48px" height="48px" src="/img/dummy-pic.jpg" alt="image from tweet"/>
                    <div className="gilroy-semibold f6 mv2">"First attempt at airbrushing had mixed success and only resulted in approximately half of the paint..."</div>
                    <div className="source-code-pro f7 mv2">20 hours ago - <span>via <FiTwitter/></span></div>
                </div>
            </div>

            <div className="post-entry h4 dt">
                <div className="dtc v-mid">
                    <div className="gilroy-semibold f5 mv2">Crafting an effective 1000pt Seraphon Army</div>
                    <div className="source-code-pro f7 mv2">10 hours ago</div>
                </div>
            </div>

            <div className="post-entry h4 dt">
                <div className="dtc v-mid">
                    <div className="gilroy-semibold f5 mv2">Bananas are an excellent source of Potassium...</div>
                    <div className="source-code-pro f7 mv2">08/11/2018</div>
                </div>
            </div>

            <div className="post-entry h4 dt">
                <div className="dtc v-mid">
                    <div className="gilroy-semibold f5 mv2">Building a Portfolio and Blog in GatsbyJS 2.0</div>
                    <div className="source-code-pro f7 mv2">30/10/2018</div>
                </div>
            </div>

        </div>

    </section>
));

export default BlogSummary
