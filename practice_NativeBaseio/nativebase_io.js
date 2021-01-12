import React, { Component } from 'react';
import { Container, Header, Content, Footer, Text, Left, Button, Icon, Body, Title, Right, FooterTab, Subtitle, View, Badge } from 'native-base';

import Profile from './Profile.js';
import Education from './Education.js';
import Work from './Work.js';
import Life from './Life.js';
//import Project from './Project.js';

export default class nativeBase extends Component {
    constructor(props) {
        super(props);
        this.state = {
            tab1: false,
            tab2: false,
            tab3: false,
            tab4: false,
            // tab5: false,
            activeIndex: 1
        }
    }

    changeActiveTab(index) {
        // console.warn(string(index))
        if (1 == index) {
            this.setState({
                tab1: true,
                tab2: false,
                tab3: false,
                tab4: false,
                tab5: false,
                activeIndex: 1
            });
        } else if (2 == index) {
            this.setState({
                tab1: false,
                tab2: true,
                tab3: false,
                tab4: false,
                tab5: false,
                activeIndex: 2
            });
        } else if (3 == index) {
            this.setState({
                tab1: false,
                tab2: false,
                tab3: true,
                tab4: false,
                tab5: false,
                activeIndex: 3
            });
        } else if (4 == index) {
            this.setState({
                tab1: false,
                tab2: false,
                tab3: false,
                tab4: true,
                tab5: false,
                activeIndex: 4
            });
            // } else if( 5 == index ){
            //    this.setState({
            //        tab1:false,
            //        tab2:false,
            //        tab3:false,
            //        tab4:false,
            //        tab5:true,
            //        activeIndex:5
            //    });
        }
    }

    changeNextActiveTab() {
        if (4 == this.state.activeIndex) {
            this.setState({
                tab1: true,
                tab2: false,
                tab3: false,
                tab4: false,
                tab5: false,
                activeIndex: 1
            });
        } else if (1 == this.state.activeIndex) {
            this.setState({
                tab1: false,
                tab2: true,
                tab3: false,
                tab4: false,
                tab5: false,
                activeIndex: 2
            });
        } else if (2 == this.state.activeIndex) {
            this.setState({
                tab1: false,
                tab2: false,
                tab3: true,
                tab4: false,
                tab5: false,
                activeIndex: 3
            });
        } else if (3 == this.state.activeIndex) {
            this.setState({
                tab1: false,
                tab2: false,
                tab3: false,
                tab4: true,
                tab5: false,
                activeIndex: 4
            });
            // } else if( 5 == index ){
            //    this.setState({
            //        tab1:false,
            //        tab2:false,
            //        tab3:false,
            //        tab4:false,
            //        tab5:true,
            //        activeIndex:5
            //    });
        }
    }

    changeContent() {
        if (1 == this.state.activeIndex) {
            return (
                <Profile />
            )
        } else if (2 == this.state.activeIndex) {
            return (
                <Education />
            )
        } else if (3 == this.state.activeIndex) {
            return (
                <Work />
            )
        } else if (4 == this.state.activeIndex) {
            return (
                <Life />
            )
            // } else if( 5 == this.state.activeIndex ){
            //     return (
            //         <Project />
            //     )
        }
    }

    render() {

        return (
            <Container>
                <Header>
                    <Left style={{ flex: 1 }}>
                        <Button transparent>
                            <Icon name='chevron-with-circle-left' type='Entypo' />
                            <Text>
                                Previous
                            </Text>
                        </Button>
                    </Left>
                    <Body style={{ flex: 1 }}>
                        <Title> 個人簡歷</Title>
                        <Subtitle> Resume</Subtitle>
                    </Body>
                    <Right style={{ flex: 1 }}>
                        <Button
                            transparent
                            onPress={() => this.changeNextActiveTab()}
                        >
                            <Text>
                                Next
                            </Text>
                            <Icon name='chevron-with-circle-right' type='Entypo' />

                        </Button>
                        {/* <Button transparent>
                            <Icon name='heart' type='Entypo' />
                        </Button>
                        <Button transparent>
                            <Icon name='magnifying-glass' type='Entypo' />
                        </Button> */}
                    </Right>
                </Header>
                <Content>
                    <Text>
                        {this.changeContent()}
                    </Text>
                </Content>
                {/* <View>
                    <Text>
                        This is string in Veiw.
                    </Text>
                </View>
                <View>
                    <Text>
                        This is string 2 in View
                    </Text>
                </View> */}
                <Footer>
                    <FooterTab>
                        <Button
                            active={this.state.tab1}
                            onPress={() => this.changeActiveTab(1)}
                        >
                            <Icon name='user' type='Entypo' />
                            <Text style={{ fontWeight: 'bold' }}>
                                自介
                            </Text>
                        </Button>
                        <Button
                            active={this.state.tab2}
                            onPress={() => this.changeActiveTab(2)}
                        >
                            <Icon name='tree' type='Entypo' />
                            <Text style={{ fontWeight: 'bold' }}>
                                學歷
                            </Text>
                        </Button>
                        <Button
                            active={this.state.tab3}
                            onPress={() => this.changeActiveTab(3)}
                        >
                            <Icon name='suitcase' type='Entypo' />
                            <Text style={{ fontWeight: 'bold' }}>
                                經歷
                            </Text>
                        </Button>
                        <Button
                            active={this.state.tab4}
                            onPress={() => this.changeActiveTab(4)}
                        >
                            <Icon name='text-document' type='Entypo' />
                            <Text style={{ fontWeight: 'bold' }}>
                                自傳
                            </Text>
                        </Button>
                        {/* <Button
                            active={this.state.tab5}
                            onPress={() => this.changeActiveTab(5)}
                            badge vertical 
                        >
                            <Badge><Text>5</Text></Badge>

                            <Icon name='text-document' type='Entypo' />
                            <Text style={{ fontWeight: 'bold' }}>
                                專案
                            </Text>
                        </Button> */}
                    </FooterTab>
                </Footer>
            </Container>
        )
    }
}