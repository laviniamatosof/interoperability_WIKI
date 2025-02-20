import React from 'react';
import classNames from 'classnames';
import { SectionTilesProps } from '../../utils/SectionProps';
import SectionHeader from './partials/SectionHeader';
import Image from '../elements/Image';
import 'react-tabs/style/react-tabs.css';

const propTypes = {
    ...SectionTilesProps.types
}

const defaultProps = {
    ...SectionTilesProps.defaults
}

const Environment = ({
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
        'environment',
        topOuterDivider && 'has-top-divider',
        bottomOuterDivider && 'has-bottom-divider',
        hasBgColor && 'has-bg-color',
        invertColor && 'invert-color',
        className
    );

    const innerClasses = classNames(
        'environment-inner section-inner',
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
        title: "Configuration of the test environment"
    };

    return (
        <section
            {...props}
            className={outerClasses}
        >
            <div className="container">
                <SectionHeader data={sectionHeader} className="center-content" />
                <div className={innerClasses}>
                    <p>The Interoperability Testing Guide for IoT Applications is built to evaluate IoT applications
following the context where there are sensors and actuators and an application that performs
the management of these smart objects through the network. The figure belows shows the IoT
environment explored by this guide: the sensor detects the environment, the data is sent to
the application over the network, where the decision is made and sent generating an action
for actuators.</p>
                    <div className="image-block">
                        <Image alt="Archteture flow" src={require('../../assets/images/eventos-iot-en.png')}></Image>
                    </div>
                    <p><b>Sensors and Actuators</b> are characterized as connected objects, smart objects, to the network.<br />
                    In the <b>Network</b>, several data are generated by the sensors and through this layer occurs the transport of these data.<br />
                    In the <b>Application</b> layer, all transported data is processed; this is the data that reaches the users.</p>

                    <p>
                        For the execution of this guide, the following environment configuration is recommended:
                        <ul>
                            <li>One or more IoT devices</li>
                            <li>Network infrastructure</li>
                            <li>One or more actuators</li>
                            <li>Application that will make decisions and send commands</li>
                        </ul>
                    </p>
                </div>
            </div>
        </section>
    );
};

Environment.propsTypes = propTypes;
Environment.defaultProps = defaultProps;

export default Environment;