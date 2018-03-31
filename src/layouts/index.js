import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';

import Chrome from '../components/Chrome';
import Header from '../components/Header';
import './index.css';

const TemplateWrapper = ({ children }) => (
    <div>
        <Chrome header={<Header />}>
            <Helmet
                title="help.signiant.com"
                meta={[
                    { name: 'description', content: 'Sample' },
                    { name: 'keywords', content: 'sample, something' },
                ]}
            />

            <div
                style={{
                    margin: '0 auto',
                    maxWidth: 960,
                    padding: '0px 1.0875rem 1.45rem',
                    paddingTop: 0,
                }}
            >
                {children()}
            </div>
        </Chrome>
    </div>
);

TemplateWrapper.propTypes = {
    children: PropTypes.func,
};

export default TemplateWrapper;
