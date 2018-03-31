// src/pages/index.js
import React from 'react';
import Link from 'gatsby-link';
import styled from 'styled-components';
const CardContainer = styled.div`
    display: flex;
    margin: 32px 0;
    justify-content: space-around;
`;
const Card = styled(Link)`
    display: inline-block;
    border-radius: 4px;
    padding: 20px 40px;
    width: 250px;
    background-color: #aaa;
    color: #fff !important;
    text-align: center;
`;
const IndexPage = () => (
    <div>
        <h1>Matthewbuttler.work</h1>
        <p>Click a link below to go somewhere else</p>
        <CardContainer>
            <Card to="/getting-started">Getting started</Card>
            <Card to="/about">About us</Card>
        </CardContainer>
    </div>
);
export default IndexPage;
