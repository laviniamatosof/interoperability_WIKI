import React from 'react';
import classNames from 'classnames';
import { SectionTilesProps } from '../../utils/SectionProps';
import SectionHeader from './partials/SectionHeader';
import 'react-tabs/style/react-tabs.css';

const propTypes = {
    ...SectionTilesProps.types
}

const defaultProps = {
    ...SectionTilesProps.defaults
}

const About = ({
    className,
    topOuterDivider,
    bottomOuterDivider,
    topDivider,
    bottomDivider,
    hasBgColor,
    invertColor,
    invertMobile,
    invertDesktop,
    alignTop,
    imageFill,
    ...props
}) => {
    const outerClasses = classNames(
        'about',
        topOuterDivider && 'has-top-divider',
        bottomOuterDivider && 'has-bottom-divider',
        hasBgColor && 'has-bg-color',
        invertColor && 'invert-color',
        className
    );

    const innerClasses = classNames(
        'about-inner section-inner',
        topDivider && 'has-top-divider',
        bottomDivider && 'has-bottom-divider'
    );

    // const splitClasses = classNames(
    //     'split-wrap',
    //     invertMobile && 'invert-mobile',
    //     invertDesktop && 'invert-desktop',
    //     alignTop && 'align-top'
    // );

    const sectionHeader = {
        title: "About"
    };

    return (
        <section
            {...props}
            className={outerClasses}
        >
            <div className="container">
                <SectionHeader data={sectionHeader} className="center-content" />
                <div className={innerClasses}>
                    <p>The central objective of this interoperability guide is to provide at the end of use a test plan that serves as a guideline for testers when
                        evaluating interoperability in Internet of Things(IoT) applications. In this context, the Abstract Test Cases presented are conceived as abstract,
                        and their adaptation according to the specific scenario of the application to be tested is essential. Using this guide offers a fundamental advantage
                        in terms of efficiency, as tester swill not need to conduct extensive literature searches to define testing procedures. Instead,the guide will provide
                        clear and targeted guidance for performing tests, contributing to a more effective and agile approach to the software systems interoperability assessment
                        process. This targeted and structured approach provides a reliable methodology to ensure the robustness and quality of software applications, making it a
                        valuable tool for testing professionals and researchers in the field of Software Engineering. This guide aims to offer assistance in carrying out
                        Interoperability tests on IoT applications.</p>
                </div>
            </div>
        </section>
    );
};

About.propsTypes = propTypes;
About.defaultProps = defaultProps;

export default About;