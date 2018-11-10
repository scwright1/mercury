import React from 'react'

const BlogSummary = React.forwardRef((props, ref) => (
    <section ref={ref} {...props} id="blog" className="content-panel vh-100 w-100 ma0 relative bg-near-white dt">

        <div className="dtc v-mid tc white gilroy-ultralight pv4 mt3 ph4">

            <div className="mw9 center pv4 mt3 ph4">

                <div className="cf ph2-ns">

                    <div className="fl w-100 w-two-thirds-ns pa2">

                        <div className="outline bg-white pv4 h5">

                            <h3>Here is some headline text</h3>

                        </div>

                    </div>

                    <div className="fl w-100 w-third-ns pa2">

                        <div className="outline bg-white pv4 h5"></div>

                    </div>

                </div>

                <div className="cf ph2-ns">

                    <div className="fl w-100 w-third pa2">

                        <div className="outline bg-white pv4 h5"></div>

                    </div>

                    <div className="fl w-100 w-third pa2">

                        <div className="outline bg-white pv4 h5"></div>

                    </div>

                    <div className="fl w-100 w-third pa2">

                        <div className="outline bg-white pv4 h5"></div>

                    </div>

                </div>

                <div className="cf ph2-ns">

                    <div className="fl w-50 w-10-ns pa2">

                        <div className="outline bg-white pv4"></div>

                    </div>

                    <div className="fl w-0 w-80-ns pa2"></div>

                    <div className="fl w-50 w-10-ns pa2">

                        <div className="outline bg-white pv4"></div>

                    </div>

                </div>

            </div>

        </div>

    </section>
));

export default BlogSummary
