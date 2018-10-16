import React from 'react'

const Headline = React.forwardRef((props, ref) => (
    <section ref={ref} {...props} id="headline" className="content-panel vh-100 w-100 ma0 relative bg-gradient dt">

        <div className="dtc v-mid tc white gilroy-ultralight ph3 ph4-l">

            <h1 className="f6 f2-m f-subheadline-l fw6 tc ttu">technical&nbsp;producer</h1>

        </div>

    </section>
));

export default Headline
