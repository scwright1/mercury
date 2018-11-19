import React from 'react'

const Contact = React.forwardRef((props, ref) => (
    <section ref={ref} {...props} id="headline" className="content-panel vh-100 w-100 ma0 relative bg-red dt">

        <div className="dtc v-mid tc white gilroy-ultralight ph3 ph4-l">

            <h1 className="f3 f1-m f-subheadline-l fw6 tc ttu">derp.</h1>

        </div>

    </section>
));

export default Contact
