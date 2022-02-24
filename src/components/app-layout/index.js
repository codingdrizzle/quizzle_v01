import React from 'react'
import { Layout, Row, Col } from 'antd'
import Blocks from '../../assets/blocks.jpg'
import MyFooter from '../footer'


const { Header, Content } = Layout

const LayoutStyles = {
    height: '100vh',
    background: `url(${Blocks})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center center',
}

export default function AppLayout({children}){
    return(
        <>
            <Layout  style={LayoutStyles}>
                <Header style={{backgroundColor: " rgb(0, 20, 40)",height: 80}}>
                    <Row align={"middle"} justify={"center"} style={{height: 80}}>
                    <Col span={24}>
                        <div align={"center"}>
                            <h3 style={{color: 'whitesmoke', fontSize: 30}}>QUIZZLE</h3>
                        </div>
                    </Col>
                    </Row>
                </Header>
                <Content style={{marginTop: 30}}>
                    {children}
                </Content>
                <MyFooter style={{height: 50, paddingTop: 90 }}/>
            </Layout>        
        </>

    )
}