const guideContent = [
    {
        id: "data_semantics",
        name: "Data Semantics",
        description: "According to ISO 21823-4:2019 data semantics refers to the meaning and context of data. It is the ability to interpret and understand the meaning of data, allowing different systems and devices to share and use data in a consistent and efficient way.",
        type: "subcharacteristics",
        selected: false,
        impacted: false,
        properties: [
            {
                selected: false,
                impacted: false,
                type: "properties",
                id: "P1",
                title: "Common Interpretation",
                characteristics: "data_semantics",
                description: "The ability to ensure that different systems can correctly understand and interpret the data that is shared between them. Examples of using the Common Interpretation property in IoT applications: Payment Application Interoperability, Mobile payment applications such as Apple Pay and Google Play use communication protocols that allow mobile devices to communicate with compatible payment terminals to ensure correct interpretation of transaction data (GUINARD, 2016).",
                dependents: [],
                impacts: ['P16', 'P17', 'P10', 'P21']
            },
            {
                selected: false,
                impacted: false,
                type: "properties",
                id: "P2",
                title: "Harmonization of Terminologies",
                characteristics: "data_semantics",
                description: "The ability to ensure that terms and concepts used to describe data are consistent across different systems, avoiding ambiguities and errors. For example, ensuring that different sensors use the same terminology to refer to location, temperature or humidity values (BANZI, 2015).",
                dependents: [],
                impacts: ['P10', 'P21']
            },
            {
                selected: false,
                impacted: false,
                type: "properties",
                id: "P3",
                title: "Data Mapping",
                characteristics: "data_semantics",
                description: "The ability to transform data from one format to another, allowing  different systems to share information even if they use different standards or data structures. For example, converting temperature data in Fahrenheit to Celsius and km data to latitude and longitude (SIVASHANMUGAM, 2014).",
                dependents: [],
                impacts: ['P16', 'P23']
            },
            {
                selected: false,
                impacted: false,
                type: "properties",
                id: "P4",
                title: "Semantic Compatibility",
                characteristics: "data_semantics",
                description: "The ability to ensure that data shared between different systems can be easily combined and used together, even if it originates from different sources. For example, ensuring that different sensors understand that a temperature reading of 20 degrees Celsius means the same thing on different systems (Suryadevara et al. 2018).",
                dependents: [],
                impacts: ['P18', 'P12']
            },
            {
                selected: false,
                impacted: false,
                type: "properties",
                id: "P5",
                title: "Consistency",
                characteristics: "data_semantics",
                description: "Concerns the uniformity of data over time and across different systems. Consistent data ensures that information is not contradictory and can be used reliably (Redman, 1998).",
                dependents: [],
                impacts: ['P23']
            },
            {
                selected: false,
                impacted: false,
                type: "properties",
                id: "P6",
                title: "Accuracy",
                characteristics: "data_semantics",
                description: "Refers to the ability of data to accurately represent the concept it is intended to describe. In other words, accurate data is free from errors and ambiguities, ensuring a faithful representation of information (Welty and McGuinness,2004).",
                dependents: [],
                impacts: ['P24', 'P15', 'P8']
            },
            {
                selected: false,
                impacted: false,
                type: "properties",
                id: "P7",
                title: "Vocabulary Comprehension",
                characteristics: "data_semantics",
                description: "The need for systems to share a common vocabulary or ontology to ensure mutual understanding of terms used in communication (Smith et al., 2004).",
                dependents: [],
                impacts: ['P1', 'P9']
            },
            {
                selected: false,
                impacted: false,
                type: "properties",
                id: "P8",
                title: "Semantic Coherence",
                characteristics: "data_semantics",
                description: "The need for data to maintain semantic consistency across different contexts and over time. This ensures that the data is understood uniformly, regardless of variations in context or evolutions in the system (Smith et al., 2004).",
                dependents: [],
                impacts: ['P17', 'P9']
            }
        ],
        testCases: [
            {
                selected: false,
                impacted: false,
                type: "testCases",
                timeSpentDefault: 2.0,
                id: "TC01",
                idLong: "Test Case 01",
                title: "Data reading",
                characteristics: "data_semantics",
                testEnvironment: "A network of heterogeneous IoT devices.",
                preConditions: "Devices connected to the same Wi-Fi network",
                steps: [
                    "Launch the mobile app",
                    "Select data reading",
                    "Check the data displayed on the screen"
                ],
                postConditions: "The data displayed on the mobile device screen must correspond to the same data requested by the actuator"
            },
            {
                selected: false,
                impacted: false,
                type: "testCases",
                timeSpentDefault: 2.0,
                id: "TC02",
                idLong: "Test Case 02",
                title: "Traffic Monitoring by Latitude and Longitude",
                characteristics: "data_semantics",
                testEnvironment: "Traffic monitoring system with latitude and longitude information",
                preConditions: "Traffic monitoring system is in operation and collecting latitude and longitude data",
                steps: [
                    "Access the traffic monitoring system control panel.",
                    "Select the option \"View current traffic by Latitude and Longitude\".",
                    "Verify that the traffic data displayed on the dashboard matches the location specified by latitude and longitude coordinates."
                ],
                postConditions: "The traffic data displayed on the dashboard must correspond to the area specified by the given latitude and longitude coordinates."
            },
            {
                selected: false,
                impacted: false,
                type: "testCases",
                timeSpentDefault: 3.0,
                id: "TC03",
                idLong: "Test Case 03",
                title: "Common semantic models for data interpretation.",
                characteristics: "data_semantics",
                testEnvironment: "A network of heterogeneous IoT devices.",
                preConditions: "IoT devices are configured and operational.",
                steps: [
                    "Start the interoperability testing platform.",
                    "Connect IoT devices to the test network.",
                    "Send test data generated by different IoT devices to the central server.",
                    "Check whether the data is correctly interpreted by common semantic models.",
                    "Perform read and write operations on IoT devices through the central server.",
                    "Check that operations are performed correctly and that devices respond appropriately.",
                    "Introduce variations in data formats or terminologies used by IoT devices.",
                    "Confirm that semantic models are capable of interpreting data even with variations."
                ],
                postConditions: "The oven temperature must be changed according to the value selected on the control panel."
            },
            {
                selected: false,
                impacted: false,
                type: "testCases",
                timeSpentDefault: 3.0,
                id: "TC04",
                idLong: "Test Case 04",
                title: "Lighting control",
                characteristics: "data_semantics",
                testEnvironment: "Location with intelligent lighting system",
                preConditions: "Lighting system connected and working",
                steps: [
                    "Launch the mobile app",
                    "Select the \"Lighting\" option",
                    "Select a specific room",
                    "Change light intensity"
                ],
                postConditions: "The light intensity must be changed in the selected room according to the value selected in the mobile application."
            },
            {
                selected: false,
                impacted: false,
                type: "testCases",
                timeSpentDefault: 2.0,
                id: "TC05",
                idLong: "Test Case 05",
                title: "Temperature and humidity monitoring",
                characteristics: "data_semantics",
                testEnvironment: "Location with intelligent temperature and humidity sensor",
                preConditions: "Temperature and humidity sensors connected and working",
                steps: [
                    "Access the temperature and humidity monitoring system control panel",
                    "Select the option \"View current temperature and humidity\"",
                    "Check the temperature and humidity data displayed on the dashboard"
                ],
                postConditions: "The temperature and humidity data displayed on the dashboard must match the data collected by the sensors."
            },
            {
                selected: false,
                impacted: false,
                type: "testCases",
                timeSpentDefault: 1.0,
                id: "TC06",
                idLong: "Test Case 06",
                title: "Data Interpretation",
                characteristics: "data_semantics",
                testEnvironment: "Devices from different manufacturers and communication protocols.",
                preConditions: "IoT devices are physically installed and configured in the environment",
                steps: [
                    "Send a message containing temperature data in JSON format from device A.",
                    "Ensure that device B correctly interprets received data.",
                    "Verify that device B has driven an actuator based on correct interpretation of the data."                ],
                postConditions: "Devices from different manufacturers and communication protocols were able to interpret and process data correctly, demonstrating interoperability in terms of data semantics."
            },
        ],
        metrics: [
            {
                selected: false,
                impacted: false,
                type: "metrics",
                timeSpentDefault: 3.0,
                id: "M01",
                title: "Device Capacity",
                characteristics: "data_semantics",
                purpose: "Assess the ability of different IoT devices to interact with each other effectively.",
                method: "Conduct interoperability tests with different combinations of IoT devices and measure the success rate of interactions.",
                measure: [
                    "Calculates the success rate as percentage (\\%), where the number of successful interactions is divided by the total number of interactions and multiplied by 100 to obtain the \\% representation",
                ],
                dependents: ['TC01', 'TC02', 'TC03', 'TC06', 'TC08', 'TC10', 'TC11', 'TC12', 'TC16', 'TC17', 'TC18', 'eclipse', 'wireshark', 'home_assistant']
            },
            {
                selected: false,
                impacted: false,
                type: "metrics",
                timeSpentDefault: 5.0,
                id: "M02",
                title: "Protocol Compliance",
                characteristics: "data_semantics",
                purpose: "Evaluate the ability of IoT devices to interact with each other according to established protocols.",
                method: "Verify that IoT devices follow established protocols for interacting with each other, through compatibility and compliance tests.",
                measure: [
                    "Number of supported protocols:number of protocols the device supports",
                    "Interaction success rate:percentage of interaction attempts that were successful",
                    "MEASURE =(Number of Supported Protocols / Total Number of Protocols) * 100",
                ],
                dependents: ['TC02', 'TC05', 'TC17', 'TC24', 'home_assistant']
            },
            {
                selected: false,
                impacted: false,
                type: "metrics",
                timeSpentDefault: 2.0,
                id: "M03",
                title: "Platform compatibility",
                characteristics: "data_semantics",
                purpose: "Evaluate the ability of IoT devices to interact with different platforms.",
                method: "Verify that IoT devices are capable of interacting with different IoT platforms through compatibility and compliance testing.",
                measure: [
                    "Number of supported platforms:number of platforms the device is compatible with",
                    "Interaction success rate:percentage of interaction attempts that were successful",
                    "Success Rate (%) =(Number of Successful Interactions / Total Number of Attempts) x 100"
                ],
                dependents: ['TC03', 'TC04', 'TC05', 'TC06', 'TC07', 'TC08', 'TC11', 'TC12', 'TC13', 'TC14', 'TC15', 'TC16', 'TC17', 'TC18', 'TC19', 'TC20',
                    'TC23', 'TC24', 'TC25', 'wireshark', 'home_assistant']
            },
            {
                selected: false,
                impacted: false,
                type: "metrics",
                timeSpentDefault: 3.0,
                id: "M04",
                title: "Data integration",
                characteristics: "data_semantics",
                purpose: "Assess the ability of IoT devices to integrate and share data.",
                method: "Verify that IoT devices are capable of integrating and sharing data with other devices and systems, through compatibility and compliance testing.",
                measure: [
                    "X = Qty of data types / Data integration success rate"
                ],
                dependents: ['TC01', 'TC02', 'TC03', 'TC04', 'TC05', 'TC06', 'TC07', 'TC08', 'TC09', 'TC10', 'TC11', 'TC12', 'TC13', 'TC14', 'TC15',
                    'TC16', 'TC17', 'TC18', 'TC19', 'TC20', 'TC21', 'TC22', 'TC23', 'TC24', 'TC25', 'wireshark', 'home_assistant']
            }
        ]
    },
    {
        id: "communication_protocol",
        name: "Communication Protocol",
        description: "Communication protocol refers to a set of technical specifications that define communication rules and standards to enable interoperability between devices in an IoT environment. These standards help ensure that different devices and systems can communicate and exchange information efficiently and reliably.",
        type: "subcharacteristics",
        selected: false,
        impacted: false,
        properties: [
            {
                selected: false,
                impacted: false,
                type: "properties",
                id: "P9",
                title: "Compatibility",
                characteristics: "communication_protocol",
                description: "Communication standards must be compatible with a wide variety of devices and systems (SCHMIDT, 2015).",
                dependents: [],
                impacts: ['P1', 'P8', 'P22', 'P16', 'P17']
            },
            {
                selected: false,
                impacted: false,
                type: "properties",
                id: "P10",
                title: "Consistency",
                characteristics: "communication_protocol",
                description: "Technical specifications must be clear and consistent to ensure that all devices and systems involved can communicate effectively (YAO et al., 2020).",
                dependents: [],
                impacts: ['P4', 'P18', 'P24']
            },
            {
                selected: false,
                impacted: false,
                type: "properties",
                id: "P11",
                title: "Security",
                characteristics: "communication_protocol",
                description: "Communication standards must include robust security protocols to  protect information transmitted between devices (DE SILVA et al., 2017).",
                dependents: [],
                impacts: ['P4', 'P6', 'P23', 'P18', 'P17']
            },
            {
                selected: false,
                impacted: false,
                type: "properties",
                id: "P12",
                title: "Scalability",
                characteristics: "communication_protocol",
                description: "Protocols such as MQTT are scalable and allow IoT devices to be easily added or removed from a network without compromising the quality of communication (AL-FUQAHA et al., 2015).",
                dependents: [],
                impacts: ['P7', 'P21', 'P20']
            },
            {
                selected: false,
                impacted: false,
                type: "properties",
                id: "P13",
                title: "Flexibility",
                characteristics: "communication_protocol",
                description: "Communication standards must be flexible to allow different types of devices and systems to be integrated into the network and to allow new technologies to be added to the network in the future (PETROLO et al., 2018).",
                dependents: [],
                impacts: ['P22', 'P20', 'P1']
            },
            {
                selected: false,
                impacted: false,
                type: "properties",
                id: "P14",
                title: "Cross-platform Interoperability",
                characteristics: "communication_protocol",
                description: "Communication standards must allow different platforms, such as operating systems, to communicate effectively, ensuring that information is shared reliably between devices and systems that use different platforms (CHENG et al., 2019).",
                dependents: [],
                impacts: ['P18', 'P19', 'P6']
            },
            {
                selected: false,
                impacted: false,
                type: "properties",
                id: "P15",
                title: "Transmission Error Rate",
                characteristics: "communication_protocol",
                description: "Measures accuracy in message transmission, identifying the rate of errors that can affect interoperability (Suryadevara et al. 2018).",
                dependents: [],
                impacts: ['P6', 'P25', 'P17']
            }
        ],
        testCases: [
            {
                selected: false,
                impacted: false,
                type: "testCases",
                timeSpentDefault: 2.0,
                id: "TC07",
                idLong: "Test Case 07",
                title: "Testing Communication Patterns in IoT Devices",
                characteristics: "communication_protocol",
                testEnvironment: "Two IoT devices from different manufacturers (Device A and Device B).",
                preConditions: "Device A and Device B are connected to the IoT communication platform.",
                steps: [
                    "Initiate communication between Device A and Device B through the IoT platform.",
                    "Send a test dataset containing data readings from Device A to Device B.",
                    "Verify that Device B correctly interprets the data and understands the meaning of the readings.",
                    "Repeat the process, but this time, send the test data from Device B to Device A.",
                    "Check that Device A correctly interprets data received from Device B."
                ],
                postConditions: "Both devices (A and B) were able to correctly interpret and understand the data sent by the other. Confirmation that data semantics are being maintained in communication between devices from different manufacturers, ensuring effective interoperability in an IoT environment."
            },
            {
                selected: false,
                impacted: false,
                type: "testCases",
                timeSpentDefault: 2.0,
                id: "TC08",
                idLong: "Test Case 08",
                title: "Communication Protocol Compatibility Test",
                characteristics: "communication_protocol",
                testEnvironment: "Network environment with IoT devices using different communication  protocols",
                preConditions: "IoT devices are configured to communicate with each other, but they use different protocols.",
                steps: [
                    "IoT devices are activated and connected to the network.",
                    "Devices initiate communication with each other using their respective communication protocols.",
                    "Communication results are recorded and analyzed."
                ],
                postConditions: "It is checked whether the IoT devices were able to communicate with each other successfully using their different communication protocols."
            },
            {
                selected: false,
                impacted: false,
                type: "testCases",
                timeSpentDefault: 3.0,
                id: "TC09",
                idLong: "Test Case 09",
                title: "Device connection test with gateway",
                characteristics: "communication_protocol",
                testEnvironment: "IoT Network with Gateway Device",
                preConditions: "The device and gateway are connected to the same IoT network.",
                steps: [
                    "The device sends a connection message to the gateway.",
                    "The gateway receives the message and sends a connection response to the device.",
                    "The device receives the response and confirms the connection to the gateway."
                ],
                postConditions: "The device is connected to the gateway and ready to send and receive data on  the IoT network"
            },
            {
                selected: false,
                impacted: false,
                type: "testCases",
                timeSpentDefault: 3.0,
                id: "TC10",
                idLong: "Test Case 10",
                title: "Testing communication between devices",
                characteristics: "communication_protocol",
                testEnvironment: "IoT network with two connected devices",
                preConditions: "Devices are connected to the same IoT network",
                steps: [
                    "Device 1 sends a message to device 2.",
                    "Device 2 receives the message and sends a response to device 1.",
                    "Device 1 receives the response and confirms communication between the devices."
                ],
                postConditions: "Devices are communicating correctly on the IoT network."
            },
            {
                selected: false,
                impacted: false,
                type: "testCases",
                timeSpentDefault: 2.0,
                id: "TC11",
                idLong: "Test Case 11",
                title: "Integration testing with external API",
                characteristics: "communication_protocol",
                testEnvironment: "IoT network with device connected to an external API",
                preConditions: "The device is connected to the external API and has the necessary credentials to access it.",
                steps: [
                    "The device sends a request to the external API.",
                    "The external API receives the request and sends a response to the device.",
                    "The device receives the response and confirms that the external API data was integrated correctly."
                ],
                postConditions: "The data from the external API has been successfully integrated into the IoT network device.s"
            },
            {
                selected: false,
                impacted: false,
                type: "testCases",
                timeSpentDefault: 1.0,
                id: "TC12",
                idLong: "Test Case 12",
                title: "Authentication and security testing",
                characteristics: "communication_protocol",
                testEnvironment: "IoT network with authentication device and server",
                preConditions: "The device is configured to authenticate with the authentication  server.",
                steps: [
                    "The device sends the authentication credentials to the server.",
                    "The server receives the credentials and authenticates the device.",
                    "The device receives authentication confirmation from the server and can access the IoT network"                ],
                postConditions: "The device is authenticated and has secure access to the IoT network."
            },
            {
                selected: false,
                impacted: false,
                type: "testCases",
                timeSpentDefault: 1.0,
                id: "TC13",
                idLong: "Test Case 13",
                title: "Security Testing of Communication Protocols on IoT Devices",
                characteristics: "communication_protocol",
                testEnvironment: "IoT Testing Lab",
                preConditions: "IoT devices must be connected to the network and configured to communicate using the specified communication protocol.",
                steps: [
                    "Attempt to intercept and decode communication between device A and device B.",
                    "Check whether it is possible to obtain unauthorized access to transmitted data.",
                    "Attempt to perform a denial of service (DoS) attack on devices A and B.",
                    "Verify that devices are able to handle the attack and continue to communicate.",
                    "Repeat steps 1 to 4 for different types of attacks and communication protocols."
                ],
                postConditions: "IoT devices must be able to communicate securely using the specified communication protocol and resist different types of attacks."
            },
        ],
        metrics: [
            {
                selected: false,
                impacted: false,
                type: "metrics",
                timeSpentDefault: 3.0,
                id: "M05",
                title: "Data Transfer Rate",
                characteristics: "communication_protocol",
                purpose: "Evaluate the communication capacity between devices in an IoT  network.",
                method: "Sending a defined amount of data from one device to another and  measuring the time required for the complete transfer.",
                measure: [
                    "Measurement: X = D / T",
                    "X = data transfer rate",
                    "D = amount of data transferred",
                    "T = time required for complete transfer"
                ],
                dependents: ['TC01', 'TC02', 'TC03', 'TC04', 'TC05', 'TC08', 'TC09', 'TC10', 'TC11', 'TC12', 'TC13', 'TC14', 'TC15', 'TC16', 'TC17',
                    'TC18', 'TC19', 'TC20', 'TC21', 'TC22', 'TC23', 'TC24', 'TC25', 'wireshark', 'home_assistant']
            },
            {
                selected: false,
                impacted: false,
                type: "metrics",
                timeSpentDefault: 5.0,
                id: "M06",
                title: "Number of Communication Failures",
                characteristics: "communication_protocol",
                purpose: "Evaluate the reliability of communication between devices in an IoT network.",
                method: "Perform a set of data transfers between devices in an IoT network and  count the number of communication failures that occur.",
                measure: [
                    "R = (N / (T * G))",
                    "N is the total number of communication failures.",
                    "T is the total observation time (e.g. in hours).",
                    "G is a measure of failure severity (e.g., a scale of 1 to 10, where 1 represents minor failures and 10 represents severe failures)."
                ],
                dependents: ['TC01', 'TC06', 'TC10', 'TC19', 'TC20', 'TC21', 'TC22', 'TC23', 'TC24', 'TC25', 'eclipse', 'wireshark', 'home_assistant']
            },
            {
                selected: false,
                impacted: false,
                type: "metrics",
                timeSpentDefault: 2.0,
                id: "M07",
                title: "Network Latency",
                characteristics: "communication_protocol",
                purpose: "Evaluate IoT network response time.",
                method: "Send a message from one device to another and measure the time  required to receive the message.",
                measure: [
                    "X = t2 - t1",
                    "X = network latency",
                    "t1 = message sending time",
                    "t2 = message reception time"
                ],
                dependents: ['TC01', 'TC02', 'TC03', 'TC04', 'TC05', 'TC06', 'TC07']
            },
            {
                selected: false,
                impacted: false,
                type: "metrics",
                timeSpentDefault: 3.0,
                id: "M08",
                title: "Connection Success Rate",
                characteristics: "communication_protocol",
                purpose: "Evaluate the effectiveness of communication standards in establishing  connections between devices in an IoT network.",
                method: "Attempt to establish a connection between devices in an IoT network  and count the number of successful connections.",
                measure: [
                    "X = number of successful connections / total number of connection  attempts"
                ],
                dependents: ['TC01', 'TC08', 'TC15', 'TC18', 'coapthon']
            },
            {
                selected: false,
                impacted: false,
                type: "metrics",
                timeSpentDefault: 3.0,
                id: "M09",
                title: "Network Latency Variation",
                characteristics: "communication_protocol",
                purpose: "Evaluate the stability of the IoT network in relation to response time.",
                method: "Send a message from one device to another at regular intervals and  measure the variation in network latency over time.",
                measure: [
                    "X = (n/N) * 100, X is the percentage of data received  correctly",
                    "nis the number of data received correctly",
                    "Nis the total number of data sent."
                ],
                dependents: ['TC03', 'TC09']
            },
        ]
    },
    {
        id: "system_integration",
        name: "System Integration",
        description: "The ISO 30141:2018 standard establishes system integration as the ability of systems toestablish connections, carry out communications and interactions with other systems andservices, with the purpose of providing value-added information and services. This capabilityplays a crucial role in achieving Interoperability in the Internet of Things, which is the abilityof devices and systems from different vendors to communicate and interact transparently witheach other.This standard recognizes the importance of establishing a harmonious interconnectionbetween systems and services, allowing the exchange of information and the provision ofhigher quality services. Furthermore, by promoting Interoperability, the ISO 30141:2018standard seeks to facilitate the integration of heterogeneous devices and systems, ensuringfluid communication and efficient interaction between them.",
        type: "subcharacteristics",
        selected: false,
        impacted: false,
        properties: [
            {
                selected: false,
                impacted: false,
                type: "properties",
                id: "P16",
                title: "Protocol Compatibility",
                characteristics: "system_integration",
                description: "Different devices and systems must be able to communicate with each other, regardless of the protocol used.",
                dependents: [],
                impacts: ['P1', 'P4', 'P7', 'P10', 'P9']
            },
            {
                selected: false,
                impacted: false,
                type: "properties",
                id: "P17",
                title: "Data Compatibility",
                characteristics: "system_integration",
                description: "Different systems must be able to interpret and use data generated by other systems.",
                dependents: [],
                impacts: ['P1', 'P2', 'P8', 'P23', 'P13']
            },
            {
                selected: false,
                impacted: false,
                type: "properties",
                id: "P18",
                title: "Reliability",
                characteristics: "system_integration",
                description: "Integrated systems must be able to function reliably despite network or device failures or outages.",
                dependents: [],
                impacts: ['P12', 'P13', 'P6']
            },
            {
                selected: false,
                impacted: false,
                type: "properties",
                id: "P19",
                title: "Scalability",
                characteristics: "system_integration",
                description: "Embedded systems must be able to handle a large number of devices and users.",
                dependents: [],
                impacts: ['P9', 'P3', 'P5', 'P22']
            },
            {
                selected: false,
                impacted: false,
                type: "properties",
                id: "P20",
                title: "Flexibility",
                characteristics: "system_integration",
                description: "Integrated systems must be able to adapt to changes in environmental conditions or user needs.",
                dependents: [],
                impacts: []
            }
        ],
        testCases: [
            {
                selected: false,
                impacted: false,
                type: "testCases",
                timeSpentDefault: 2.0,
                id: "TC14",
                idLong: "Test Case 14",
                title: "Interoperability Testing Between Devices",
                characteristics: "system_integration",
                testEnvironment: "IoT device network",
                preConditions: "All devices on the network are properly configured and connected.",
                steps: [
                    "Start the automation system",
                    "Send a test dataset containing data readings from Device A to Device B.",
                    "Send a wake command to device A using the X protocol.",
                    "Verify that device A responds correctly and performs the expected action.",
                    "Send a wake command to device B using protocol Y.",
                    "Verify that Device B responds correctly and performs the expected action.",
                    "Make sure there are no conflicts or communication problems between devices using different protocols."
                ],
                postConditions: "Devices must be able to communicate and exchange information in an interoperable way."
            },
            {
                selected: false,
                impacted: false,
                type: "testCases",
                timeSpentDefault: 2.0,
                id: "TC15",
                idLong: "Test Case 15",
                title: "Test of Reliability in an Industrial Environment",
                characteristics: "system_integration",
                testEnvironment: "Industrial automation system",
                preConditions: "Various devices and automation systems from different suppliers are  integrated to control the manufacturing process.",
                steps: [
                    "Simulate an outage in the network that connects devices and systems.",
                    "Observe how devices and systems respond to interruption, whether they continue to function or enter a failed state.",
                    "Restore the network connection and verify that devices and systems recover and function normally again.",
                    "Repeat the process, but this time, simulate a failure in one of the devices.",
                    "Record how the integration reacts to device failure and whether redundancy or backup systems come into play."
                ],
                postConditions: "Assess the reliability of the industrial automation system in dealing with network interruptions and device failures, identifying areas for improvement in ensuring operational continuity."
            },
            {
                selected: false,
                impacted: false,
                type: "testCases",
                timeSpentDefault: 3.0,
                id: "TC16",
                idLong: "Test Case 16",
                title: "Scalability Testing in a Retail Environment",
                characteristics: "system_integration",
                testEnvironment: "Inventory management system in a chain of retail stores.",
                preConditions: "The inventory management system is used in multiple stores and needs to handle a large number of products and transactions.",
                steps: [
                    "Gradually increase the number of stores using the inventory management system.",
                    "Carry out product entry and exit operations in all stores simultaneously.",
                    "Monitor system performance, including response time and processing capacity.",
                    "Further increase the number of stores and repeat operations.",
                    "Record at what point the system begins to show signs of overload or reduced performance."
                ],
                postConditions: "Evaluate the scalability of the inventory management system in dealing with a large number of stores and transactions, identifying  the limits of its capacity and scaling needs."
            },
            {
                selected: false,
                impacted: false,
                type: "testCases",
                timeSpentDefault: 3.0,
                id: "TC17",
                idLong: "Test Case 17",
                title: "Protocol Compatibility Test",
                characteristics: "system_integration",
                testEnvironment: "Smart city environment with multiple devices from different vendors, including traffic sensors, street lighting systems, and environmental monitoring systems.",
                preConditions: "All devices are working properly and are connected to a network.",
                steps: [
                    "Select two devices from different vendors that use different  communication protocols.",
                    "Set up a scenario where these devices need to communicate to coordinate traffic management in an area of the city.",
                    "Start communication between devices and check if they are capable of exchanging information and coordinating their actions.",
                    "Check that there is no data loss or communication errors during the interaction.",
                    "Repeat testing with different devices and protocols to assess overall protocol compatibility capability."
                ],
                postConditions: "Devices from different vendors are able to communicate effectively and coordinate their actions, demonstrating that protocol compatibility is being met."
            },
            {
                selected: false,
                impacted: false,
                type: "testCases",
                timeSpentDefault: 2.0,
                id: "TC18",
                idLong: "Test Case 18",
                title: "Scalability and Flexibility Test",
                characteristics: "system_integration",
                testEnvironment: "A network of traffic monitoring devices in a metropolitan area with a large number of devices and variations in traffic conditions.",
                preConditions: "The network is operating with a moderate number of devices and  normal traffic conditions.",
                steps: [
                    "Gradually increase the number of devices on the network to  see how it handles scalability.",
                    "Introduce variations in traffic conditions, such as sudden congestion or accidents, to test the network's flexibility.",
                    "Evaluate network performance as the number of devices and complexity of traffic conditions increase.",
                    "Check whether the network is capable of adapting to changes in traffic environment conditions.",
                    "Repeat the test at different scales and with different traffic scenarios."
                ],
                postConditions: "The network of traffic monitoring devices demonstrates scalability and flexibility, meeting established requirements."
            }
        ],
        metrics: [
            {
                selected: false,
                impacted: false,
                type: "metrics",
                timeSpentDefault: 3.0,
                id: "M10",
                title: "System Integration Success Rate",
                characteristics: "system_integration",
                purpose: "Evaluate the effectiveness of service interoperability in an IoT environment.",
                method: "Record the number of service interoperability attempts and the number of successful attempts during a specific period of time.",
                measure: [
                    "X = (n1 / n2) x 100%",
                    "X = success rate in systems integration",
                    "n1 = number of successful service interoperability attempts during the evaluated period",
                    "n2 = total number of service interoperability attempts during the evaluated period"
                ],
                dependents: ['TC01', 'TC02', 'TC03', 'TC04', 'TC05', 'TC06', 'TC07', 'TC08', 'TC09', 'TC10', 'TC11', 'TC12', 'TC13', 'TC14', 'TC15',
                    'TC16', 'TC17', 'TC18', 'TC19', 'TC20', 'TC21', 'TC22', 'TC23', 'TC24', 'TC25', 'coapthon']
            },
            {
                selected: false,
                impacted: false,
                type: "metrics",
                timeSpentDefault: 5.0,
                id: "M11",
                title: "Average System Integration Time",
                characteristics: "system_integration",
                purpose: "Evaluate the average time required to integrate systems in an IoT  environment.",
                method: "Record the time elapsed from the start of service interoperability to its  successful completion.",
                measure: [
                    "X = (Σ t) / n",
                    "x = average systems integration time",
                    "t = time required for successful service interoperability",
                    "n = total number of service interoperability attempts during the evaluated period"
                ],
                dependents: ['TC07', 'TC11']
            },
            {
                selected: false,
                impacted: false,
                type: "metrics",
                timeSpentDefault: 2.0,
                id: "M12",
                title: "Integration Interface Standardization Level",
                characteristics: "system_integration",
                purpose: "Assess the degree of standardization of service interoperability  interfaces in an IoT environment.",
                method: "Verify that service interoperability interfaces comply with standards  defined for the IoT environment.",
                measure: [
                    "X = level of standardization of integration interfaces",
                    "n1 = number of service interoperability interfaces that comply with defined standards",
                    "n2 = total number of service interoperability interfaces evaluatedX = (n1 / n2) x 100%"
                ],
                dependents: ['TC01', 'TC07', 'TC12', 'TC17', 'TC18', 'TC23', 'TC24', 'TC25', 'eclipse', 'coapthon']
            },
            {
                selected: false,
                impacted: false,
                type: "metrics",
                timeSpentDefault: 3.0,
                id: "M13",
                title: "Data Transfer Rate",
                characteristics: "system_integration",
                purpose: "Evaluate the communication capacity between interconnected systems in IoT.",
                method: "Measure the amount of data transmitted between systems in a given period  of time.",
                measure: [
                    "X = (T2 - T1) / S",
                    "X = data transfer rate",
                    "T1 = initial data transfer time",
                    "T2 = end time of data transfer",
                    "S = amount of data transmitted"
                ],
                dependents: ['TC01', 'TC13', 'TC20']
            },
            {
                selected: false,
                impacted: false,
                type: "metrics",
                timeSpentDefault: 3.0,
                id: "M14",
                title: "Integration Time",
                characteristics: "system_integration",
                purpose: "Evaluate the time required for the integration of different IoT systems.",
                method: "Account for the beginning of the integration process and compare it with  the time when the integration is completed.",
                measure: [
                    "X = t2 - t1, where X is the integration time, t1 is the start time of the integration process and t2 is the time at which the integration is completed."
                ],
                dependents: ['TC01', 'TC04', 'TC09', 'TC14']
            },
        ]
    },
    {
        id: "network_protocol",
        name: "Network Protocol",
        description: "ISO 30141:2018 defines Network protocol as an essential element of Interoperability in IoT systems, which allows communication between devices, services and applications on a network. A network protocol defines rules and standards for data exchange, synchronization and coordination of operations between devices, allowing Interoperability and integration of heterogeneous systems.",
        type: "subcharacteristics",
        selected: false,
        impacted: false,
        properties: [
            {
                selected: false,
                impacted: false,
                type: "properties",
                id: "P21",
                title: "Compatibility",
                characteristics: "network_protocol",
                description: "Protocols must be compatible with the hardware and software specifications of the connected devices.",
                dependents: [],
                impacts: ['P16', 'Ṕ17', 'P9', 'P12', 'P1']
            },
            {
                selected: false,
                impacted: false,
                type: "properties",
                id: "P22",
                title: "Scalability",
                characteristics: "network_protocol",
                description: "Protocols must allow expansion of the IoT system to support a large number of devices and users.",
                dependents: [],
                impacts: ['P4', 'P7', 'P12', 'P19']
            },
            {
                selected: false,
                impacted: false,
                type: "properties",
                id: "P23",
                title: "Security",
                characteristics: "network_protocol",
                description: "Protocols must ensure the security of communication between devices, including authentication, authorization and data encryption.",
                dependents: [],
                impacts: ['P6', 'P8', 'P11', 'P18']
            },
            {
                selected: false,
                impacted: false,
                type: "properties",
                id: "P24",
                title: "Energy Efficiency",
                characteristics: "network_protocol",
                description: "Protocols must be optimized to reduce power consumption of connected devices while maximizing battery life.",
                dependents: [],
                impacts: ['P3', 'P6', 'P15']
            },
            {
                selected: false,
                impacted: false,
                type: "properties",
                id: "P25",
                title: "Latency",
                characteristics: "network_protocol",
                description: "Protocols must ensure response times fast enough to enable real-time  control of devices.",
                dependents: [],
                impacts: ['P8', 'P15', 'P14', 'P17']
            }
        ],
        testCases: [
            {
                selected: false,
                impacted: false,
                type: "testCases",
                timeSpentDefault: 2.0,
                id: "TC19",
                idLong: "Test Case 19",
                title: "Network Protocol Compatibility Test",
                characteristics: "network_protocol",
                testEnvironment: "IoT system with devices from different suppliers connected through  different Network protocol.",
                preConditions: "Devices are configured correctly and connected to the network",
                steps: [
                    "Check that all devices are connected and working properly.",
                    "Send data from one device to another via network protocol.",
                    "Verify that the data was received correctly by the target device.",
                ],
                postConditions: "The data was successfully transmitted and the devices were able to interoperate using the corresponding Network protocol."
            },
            {
                selected: false,
                impacted: false,
                type: "testCases",
                timeSpentDefault: 2.0,
                id: "TC20",
                idLong: "Test Case 20",
                title: "Network Protocol Scalability Test",
                characteristics: "network_protocol",
                testEnvironment: "IoT system with a large number of devices connected via a specific  network protocol.",
                preConditions: "The system is configured correctly and the network protocol supports  the number of connected devices",
                steps: [
                    "Gradually add devices to the network until you reach the limit supported by the network protocol.",
                    "Send data between connected devices to verify communication integrity.",
                    "Verify that the data was received correctly by the target devices."
                ],
                postConditions: "The network protocol supported the number of connected devices and the data was transmitted successfully"
            },
            {
                selected: false,
                impacted: false,
                type: "testCases",
                timeSpentDefault: 3.0,
                id: "TC21",
                idLong: "Test Case 21",
                title: "Network Protocol Security Test",
                characteristics: "network_protocol",
                testEnvironment: "IoT system with devices connected through Network protocol that  support security characterístics.",
                preConditions: "The security characterístics of the Network protocol are configured  correctly.",
                steps: [
                    "Send data between connected devices via network protocol.",
                    "Verify that data was transmitted securely using encryption, authentication, and data authorization.",
                    "Attempt to break into the IoT system through known security vulnerabilities."
                ],
                postConditions: "Data was transmitted securely and no security vulnerabilities were successfully exploited."
            },
            {
                selected: false,
                impacted: false,
                type: "testCases",
                timeSpentDefault: 3.0,
                id: "TC22",
                idLong: "Test Case 22",
                title: "Network Protocol Energy Efficiency Test",
                characteristics: "network_protocol",
                testEnvironment: "IoT system with devices connected via Network protocol that support  energy efficiency characterístics",
                preConditions: "The energy efficiency characterístics of the Network protocol are  configured correctly.",
                steps: [
                    "Monitor power consumption of connected devices.",
                    "Send data between connected devices via network protocol.",
                    "Check whether the devices' power consumption has been optimized by the network protocol."
                ],
                postConditions: "The power consumption of devices has been optimized and data has been successfully transmitted over the network protocol."
            },
            {
                selected: false,
                impacted: false,
                type: "testCases",
                timeSpentDefault: 2.0,
                id: "TC23",
                idLong: "Test Case 23",
                title: "Protocol Compatibility Test",
                characteristics: "network_protocol",
                testEnvironment: "A network of IoT devices in a smart city with different devices from  different manufacturers.",
                preConditions: "All devices are properly configured and operational on the network.",
                steps: [
                    "Select two IoT devices from different vendors, each using a different  network protocol.",
                    "Configure a scenario in which these devices need to communicate and exchange information to coordinate a specific action in the smart city.",
                    "Start communication between devices and check if they are capable of exchanging information and coordinating their actions.",
                    "Ensure there is no data loss or communication errors during the interaction.",
                    "Repeat testing with different devices and protocols to assess the overall protocol compatibility capability of the IoT network."
                ],
                postConditions: "IoT devices from different vendors are able to communicate effectively and coordinate their actions, demonstrating that protocol compatibility is being met in the IoT network"
            },
            {
                selected: false,
                impacted: false,
                type: "testCases",
                timeSpentDefault: 2.0,
                id: "TC24",
                idLong: "Test Case 24",
                title: "Protocol Compatibility Testing for IoT Asset Tracking",
                characteristics: "network_protocol",
                testEnvironment: "IoT asset tracking environment, with tracking devices from different manufacturers and technologies, all sending latitude and longitude data.",
                preConditions: "Tracking devices are operating correctly and sending latitude and  longitude data over different protocols",
                steps: [
                    "Select two tracking devices from different vendors that use  different communication protocols.",
                    "Configure a scenario where these devices need to share latitude and longitude data for real-time asset tracking.",
                    "Start communication between devices and verify that they are  capable of exchanging latitude and longitude information without data loss.",
                    "Check whether the data is interpreted correctly by receiving devices.",
                    "Test the real-time responsiveness of devices by measuring latency in transmitting and receiving location data.",
                    "Repeat testing with different devices and protocols to assess overall protocol compatibility for IoT asset tracking."
                ],
                postConditions: "IoT asset tracking devices from different vendors are able to exchange latitude and longitude information effectively and in real-time, demonstrating the compatibility of protocols for IoT asset tracking."
            },
            {
                selected: false,
                impacted: false,
                type: "testCases",
                timeSpentDefault: 2.0,
                id: "TC25",
                idLong: "Test Case 25",
                title: "Security Testing Using HTTPS",
                characteristics: "network_protocol",
                testEnvironment: "IoT network with two or more HTTPS-capable devices",
                preConditions: "The devices must be connected to the same IoT network and configured to use the HTTPS protocol. Each device must be capable of sending and receiving HTTPS requests and must have valid SSL/TLS certificates installed.",
                steps: [
                    "Send an HTTPS request to a selected device and check whether communication is established successfully.",
                    "Send an HTTPS request to a device using an invalid SSL/TLS certificate and check whether communication is blocked.",
                    "Try intercepting and deciphering HTTPS traffic using a packet interception tool and checking whether communication is blocked or data is unreadable.",
                    "Attempt to send false or malicious requests to devices and verify that authentication and authorization measures are applied correctly."
                ],
                postConditions: "All devices must be capable of establishing secure HTTPS communication, with authentication and authorization applied correctly, ensuring network security."
            }
        ],
        metrics: [
            {
                selected: false,
                impacted: false,
                type: "metrics",
                timeSpentDefault: 3.0,
                id: "M15",
                title: "Network Latency",
                characteristics: "network_protocol",
                purpose: "Evaluate network response time during communication between  devices.",
                method: "Send a data packet from device A to device B and measure the time it takes for device B to receive the packet and send a response to device A.",
                measure: [
                    "X = t2 - t1",
                    "X = is the network latency, which is the time taken for a data packet to be sent from device A to device B and for the response to be sent back from device B to device A.",
                    "t1 is the time when device A sent the data packet.",
                    "t2 is the time when device B sent the response."
                ],
                dependents: ['TC07', 'TC15', 'TC19', 'TC21', 'TC23']
            },
            {
                selected: false,
                impacted: false,
                type: "metrics",
                timeSpentDefault: 5.0,
                id: "M16",
                title: "Network Throughput",
                characteristics: "network_protocol",
                purpose: "Assess the amount of data that can be transmitted between devices in a  given period of time.",
                method: "Send a set of data of known size from device A to device B and measure  the time required for complete transmission.",
                measure: [
                    "X = S/t, where X is the network throughput, S is the size of the data sent, and t is the time required for complete transmission."
                ],
                dependents: ['TC05', 'TC08', 'TC09', 'TC10', 'TC11', 'TC16']
            },
            {
                selected: false,
                impacted: false,
                type: "metrics",
                timeSpentDefault: 2.0,
                id: "M17",
                title: "Data Transmission Rate",
                characteristics: "network_protocol",
                purpose: "Assess the ability of the network protocol to transmit data at a given  speed.",
                method: "Send a data set of known size from device A to device B and measure the  data transmission speed.",
                measure: [
                    "X = S / t, where X is the data transmission rate, S is the size of the data sent, and t is the time required for complete transmission."
                ],
                dependents: ['TC05', 'TC17']
            },
            {
                selected: false,
                impacted: false,
                type: "metrics",
                timeSpentDefault: 3.0,
                id: "M18",
                title: "Connection Reliability",
                characteristics: "network_protocol",
                purpose: "Assess the ability of the network protocol to maintain a stable and reliable  connection between devices.",
                method: "Send a set of data from device A to device B over an unstable network  connection and verify that all data was received correctly.",
                measure: [
                    "X = (n/N) * 100X is the percentage of data received  correctly.",
                    "n is the number of data received correctly.",
                    "N is the total number of data sent."
                ],
                dependents: ['TC01', 'TC07', 'TC12', 'TC15', 'TC18']
            },
            {
                selected: false,
                impacted: false,
                type: "metrics",
                timeSpentDefault: 3.0,
                id: "M19",
                title: "System Scalability",
                characteristics: "network_protocol",
                purpose: "Assess the ability of the network protocol to support a large number of  simultaneously connected devices.",
                method: "Add a large number of devices to the system and verify that the network protocol is capable of supporting the data traffic generated by all the devices.",
                measure: [
                    "X = N, where X is the system scalability and N is the maximum number of simultaneously connected devices that the network protocol can support."
                ],
                dependents: ['TC01', 'TC19', 'TC20', 'TC21', 'TC22', 'TC23', 'TC24', 'TC25', 'tasmota', 'wireshark']
            },
        ]
    }
];

const characteristics = [
    {
        id: "interoperability",
        name: "Interoperability",
        type: "characteristics",
        definitions: [
            {
                id: "legner",
                name: "Legner e Wander (2006)",
                description: "Interoperability is the ability of two or more systems or components to exchange information and use the information that has been exchanged.",
                type: "definitions",
                selected: false,
                impacted: false,
            },
            {
                id: "gulla",
                name: "Gulla et al., (2006)",
                description: "Interoperability can be defined as a state in which two applications can accept and understand each other's data and perform a given task satisfactorily without human intervention.",
                type: "definitions",
                selected: false,
                impacted: false,
            },
            {
                id: "ferreira",
                name: "Ferreira (2014)",
                description: "The ability for different systems, devices or applications to communicate and interact efficiently and smoothly.",
                type: "definitions",
                selected: false,
                impacted: false,
            },
            {
                id: "iso2019",
                name: "ISO/IEC 15926:2019",
                description: "The ability of a system to exchange data and information with other systems without loss or corruption of information.",
                type: "definitions",
                selected: false,
                impacted: false,
            },
            {
                id: "iso2018",
                name: "ISO/IEC 30141:2018",
                description: "The ability of different systems and organizations to work together (exchange information and actions) effectively and efficiently.",
                type: "definitions",
                selected: false,
                impacted: false,
            },
            {
                id: "iso2022",
                name: "ISO/IEC 21823:2022",
                description: "Interoperability in IoT refers to the ability of connected devices (such as sensors, smart devices, gateways, etc.) to communicate and interact efficiently and transparently, regardless of their origin, manufacturer or communication protocol.",
                type: "definitions",
                selected: false,
                impacted: false,
            }
        ]
    }
]

const iotCharacteristics = [
    {
        selected: false,
        impacted: false,
        id: "availability",
        name: "Availability",
        type: "characteristics",
        definition: "refers to the ability of the system to be operational and accessible when necessary, minimizing interruptions or failures."
    },
    {
        selected: false,
        impacted: false,
        id: "instability",
        name: "Instability",
        type: "characteristics",
        definition: "relates to the system's tendency to suffer unexpected failures or outages, resulting in inconsistent functioning."
    },
    {
        selected: false,
        impacted: false,
        id: "performance",
        name: "Performance",
        type: "characteristics",
        definition: "concerns the system's ability to respond effectively to requests and operate within established limits, ensuring acceptable response times."
    },
    {
        selected: false,
        impacted: false,
        id: "portability",
        name: "Portability",
        type: "characteristics",
        definition: "refers to the ease with which a system can be transferred or adapted to different environments or platforms without significant loss of functionality."
    },
    {
        selected: false,
        impacted: false,
        id: "reliability",
        name: "Reliability",
        type: "characteristics",
        definition: "is related to the system's ability to perform its functions consistently and error-free over time."
    },
    {
        selected: false,
        impacted: false,
        id: "robustness",
        name: "Robustness",
        type: "characteristics",
        definition: "focuses on the system's ability to handle adverse conditions, such as unexpected inputs or failure situations, while maintaining its functionality."
    },
    {
        selected: false,
        impacted: false,
        id: "precision",
        name: "Precision",
        type: "characteristics",
        definition: "in this context, it refers to the system's ability to avoid or minimize risks, ensuring the protection of users and data."
    },
    {
        selected: false,
        impacted: false,
        id: "security",
        name: "Security",
        type: "characteristics",
        definition: "is related to the protection of information and system resources against unauthorized access, cyber attacks and threats."
    },
    {
        selected: false,
        impacted: false,
        id: "maintainability",
        name: "Maintainability",
        type: "characteristics",
        definition: "concerns the ease of making changes, corrections or improvements to the system efficiently and with low impact."
    },
    {
        selected: false,
        impacted: false,
        id: "usability",
        name: "Usability",
        type: "characteristics",
        definition: "addresses the ease of use of the system, making it intuitive and efficient for users."
    },
    {
        selected: false,
        impacted: false,
        id: "reusability",
        name: "Reusability",
        type: "characteristics",
        definition: "refers to the ability of system components or modules to be reused in different parts of the software or in other projects."
    },
    {
        selected: false,
        impacted: false,
        id: "testability",
        name: "Testability",
        type: "characteristics",
        definition: "is related to the ease of carrying out effective tests on the system to verify its quality and functionality."
    },
    {
        selected: false,
        impacted: false,
        id: "modifiability",
        name: "Modifiability",
        type: "characteristics",
        definition: "addresses the ease of making changes to the system to meet new requirements or correct problems without causing unwanted impacts."
    },
    {
        selected: false,
        impacted: false,
        id: "efficiency",
        name: "Efficiency",
        type: "characteristics",
        definition: "concerns the optimized use of resources such as CPU, memory and bandwidth to ensure adequate system performance."
    }
]

const tools = [
    {
        selected: false,
        impacted: false,
        id: "eclipse",
        title: "Eclipse IoT",
        type: "tools",
        description: "Toolkit for developing and testing IoT applications",
        license: "Open-Source",
        link: "https://iot.eclipse.org/testware/"
    },
    {
        selected: false,
        impacted: false,
        id: "wireshark",
        title: "Wireshark",
        type: "tools",
        description: "Network protocol analyzer for monitoring and debugging IoT traffic",
        license: "Open-Source",
        link: "https://www.wireshark.org/"
    },
    {
        selected: false,
        impacted: false,
        id: "Coapthon",
        title: "CoAPthon",
        type: "tools",
        description: "Library for developing and testing IoT applications based on the CoAP protocol",
        license: "Open-Source",
        link: "https://github.com/Tanganelli/CoAPthon3"
    },
    {
        selected: false,
        impacted: false,
        id: "iotify",
        title: "IoTIFY",
        type: "tools",
        description: "IoT device simulator for interoperability testing",
        license: "Closed",
        link: "https://iotify.io/"
    },
    {
        selected: false,
        impacted: false,
        id: "freertos",
        title: "FreeRTOS",
        type: "tools",
        description: "Real-time operating system for IoT devices",
        license: "Open-Source",
        link: "https://www.freertos.org/"
    },
    {
        selected: false,
        impacted: false,
        id: "tasmota",
        title: "Tasmota",
        type: "tools",
        description: "Open source firmware for ESP8266 and ESP32 based IoT devices",
        license: "Open-Source",
        link: "https://tasmota.github.io/docs/"
    },
    {
        selected: false,
        impacted: false,
        id: "openiot",
        title: "OpenIoT",
        type: "tools",
        description: "Interoperability and integration platform for IoT. It has a set of tools for testing interoperability between IoT devices and their application programming interfaces (APIs).",
        license: "Open-Source",
        link: "https://github.com/OpenIotOrg/openiot"
    },
    {
        selected: false,
        impacted: false,
        id: "home_assistant",
        title: "Home Assistant",
        type: "tools",
        description: "Open source home automation software supporting a wide range of IoT devices. It has an integration testing tool that checks the compatibility of specific devices with the platform.",
        license: "Open-Source",
        link: "https://www.home-assistant.io/integrations/pytest_homeassistant/"
    }
];

export { guideContent, tools, characteristics, iotCharacteristics };
