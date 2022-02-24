import React, { useRef, useState } from 'react'
import { Row, Col, Card, List, Select, Button } from 'antd'
import { createGlobalStyle } from 'styled-components'
import { Routes, Route, Link } from 'react-router-dom'
import { rules } from '../../commons/rules-list'
import { RiCheckDoubleLine } from 'react-icons/ri'
import { GrFormClose } from 'react-icons/gr'
import Quiz from '../real-quiz'

const SelectionStyles = createGlobalStyle`
    .ant-select-selector, .ant-select-selector:hover, .ant-select-selector:active{
        border-color: none !important;
        outline: none !important;
        font-size: 20px !important;
    }
    .select{
        width: 100%;
    }
    .select-title{
        color: #fff;
        font-weight: 800;
        font-size: 25px;
    }
    .submit-btn{
        background: rgb(0, 20, 40);
        color: whitesmoke;
        border-radius: 50px;
        height 50px;
        max-height: 70px;
        padding: 10px 0 !important;
        font-size: 20px;
        font-weight: 700;
        overflow: hidden !important;
    }
    .submit-btn:hover,.submit-btn:active{
        outline: none !important;
        border: none;
        color:  rgb(0, 20, 40);
    }
    @media only screen and (max-width: 550px){
        .select-title{
            font-size: 18px;
        }
    }
`
const RulesStyles = createGlobalStyle`
    .rules-box{
        position: absolute;
        top: 0%;
        bottom: 30%;
        background: #fff;  
        border-radius: 0 0 50px 50px;
    }
    .rules-header{
        text-align: center;
        font-size: 25px;
        font-weight: 600;
        color: rgb(0, 20, 40);
    }
    .rules-footer{
        text-align: center;
        font-size: 15px;
        font-weight: 600;
        color: rgb(0, 20, 40);
    }
    .ant-list-footer{
        padding: 0;
    }
    .close-btn-container{
        display: flex;
        justify-content: flex-end;
        align-items: flex-end;
        margin: 0;
    }
    .close-btn{
        width: 30px !important;
        height: 30px !important;
        padding: 0;
        border: 3px solid #a42834;
        border-radius: 50%;
        display: flex;
        justify-content: center;
        align-items: center;
        background: #f8d7da;
        cursor: pointer;
    }
    .close-btn:hover, .close-btn:active, .close-btn:focus {
        background: #d14b58 !important;
        border-color: #a42834 !important;
        color: #fff !important;
    }
    .close-icon{
        font-size: 1.8rem;
        color: #a42834 !important;
    }
`

const { Option } = Select;
export default function Selections(){
    const numQue = useRef(null)
    const category = useRef(null)
    const diff = useRef(null)
    const queType = useRef(null)
    
    const [numQuestions, setNumQuestions] = useState('10')
    const [categories, setCategories] = useState('')
    const [difficulty, setDifficulty] = useState('')
    const [type, setType] = useState('')
    const [show, setShow] = useState('0')
    const handleChange = () => {
        setNumQuestions(numQue.current.value)
        setCategories(category.current.value)
        setDifficulty(diff.current.value)
        setType(queType.current.value)

        console.log(numQuestions)
        console.log(categories)
        console.log(difficulty)
        console.log(type)
    }
    const showRules = () => {
        setShow('1')
    }
    const hideRules = () => {
        setShow('0')
    }
    const data = ''
    const startQuiz = () => {
        data = {
            numberOfQuestions: numQue.current.value,
            categories: category.current.value,
            difficulty: diff.current.value,
            questionType: queType.current.value
        }
    }
    return(
        <>  
            <Routes>
                <Route path={'/'} exact element={            <>
            
            <SelectionStyles/>
            <Row gutter={[0, 20]} align='middle' justify='center' style={{marginBottom: 60}}>
                <Col xs={20} md={15} lg={13}>
                    <div align='middle' justify='center'>
                        <h2 className='select-title'>Number of Questions</h2>
                        <Select bordered value={numQuestions} placeholder='Choose number of questions' size='large' className='select' onChange={handleChange} ref={numQue}>
                            <Option value='10'>10</Option>
                            <Option value='15'>15</Option>
                            <Option value='25'>25</Option> 
                            <Option value='30'>30</Option>
                        </Select>   
                    </div>              
                </Col>
                <Col xs={20} md={15} lg={13}>
                    <div align='middle' justify='center'>
                        <h2 className='select-title'>Categories</h2>
                        <Select bordered placeholder='Select a category' value={categories} size='large' className='select' onChange={handleChange} ref={category}>
                            <Option value=''>Any Category</Option>
                            <Option value='9'>General Knowledge</Option>
                            <Option value='10'>Entertainment: Books</Option>
                            <Option value='11'>Entertainment: Film</Option>
                            <Option value='12'>Entertainment: Music</Option>
                            <Option value='13'>Entertainment: Musicals and Theatres</Option>
                            <Option value='14'>Entertainment: Television</Option>
                            <Option value='15'>Entertainment: Video Games</Option>
                            <Option value='16'>Entertainment: Board Games</Option>
                            <Option value='17'>Science and Nature</Option>
                            <Option value='18'>Science: Computers</Option>
                            <Option value='19'>Science: Mathematics</Option>
                            <Option value='20'>Mythology</Option>
                            <Option value='21'>Sports</Option>
                            <Option value='22'>Geography</Option>
                            <Option value='23'>History</Option>
                            <Option value='24'>Politics</Option>
                            <Option value='25'>Art</Option>
                            <Option value='26'>Celebrities</Option>
                            <Option value='27'>Animals</Option>
                            <Option value='28'>Vehicles</Option>
                            <Option value='29'>Entertainment: Comics</Option>
                            <Option value='30'>Science: Gadgets</Option>
                            <Option value='31'>Entertainment: Japanese Anime and Manga</Option>
                            <Option value='32'>Entertainment: Cartoon and Animations</Option>
                        </Select>   
                    </div>              
                </Col>
                <Col xs={20} md={15} lg={13}>
                    <div align='middle' justify='center'>
                        <h2 className='select-title'>Difficulty Level</h2>
                        <Select bordered placeholder='Choose how difficult' value={difficulty} size='large' className='select' onChange={handleChange} ref={diff}>
                            <Option value=''>Any Difficulty Level</Option>
                            <Option value='easy'>Easy</Option>
                            <Option value='medium'>Medium</Option> 
                            <Option value='hard'>Hard</Option>
                        </Select>   
                    </div>              
                </Col>
                <Col xs={20} md={15} lg={13}>
                    <div align='middle' justify='center'>
                        <h2 className='select-title'>Questions Type</h2>
                        <Select bordered placeholder='Choose how difficult' value={type} size='large' className='select' onChange={handleChange} ref={queType}>
                            <Option value=''>Any Type</Option>
                            <Option value='multiple'>Multiple Choice</Option>
                            <Option value='boolean'>True / False</Option> 
                            <Option value='hard'>Hard</Option>
                        </Select>   
                    </div>              
                </Col>
            </Row>
            <Row gutter={[0, 0]} align='middle' justify='center'>
                <Col xs={12} md={12} lg={10}> 
                    <div align='middle' justify='center'>
                        <Button className='submit-btn' size='large' block onClick={showRules}>Take Quiz</Button>
                    </div>              
                </Col>
            </Row>
            <RulesStyles />
            <Row gutter={[10,10]} align='middle' justify='center' style={{opacity: show}}>
                <Col xs={20} lg={10} className="rules-box">
                    <Card>
                        <div className="rules_list">
                            <div className="close-btn-container"><Button className='close-btn' onClick={hideRules}><GrFormClose className='close-icon'/></Button></div>
                            <List
                                size="large"
                                header={<div className='rules-header'>Rules of the Quiz</div>}
                                dataSource={rules}
                                renderItem={item => <List.Item ><RiCheckDoubleLine/> {item}</List.Item>}
                                footer={<div className='rules-footer'>GOOD LUCK!</div>}
                            />
                        </div>
                        <Link to={'/quiz'}><Button onClick={startQuiz}>Let Go</Button></Link>   
                    </Card>
                </Col>
            </Row>
            </>}/>
            <Route path='/quiz' exact element={<Quiz data={data}/>}/>
            </Routes>
        </>
    )
}






































// import React, { useRef, useState } from 'react'
// import { Row, Col, Card, List, Button } from 'antd'
// import { createGlobalStyle } from 'styled-components'
// import { Routes, Route, Link } from 'react-router-dom'
// import { rules } from '../../commons/rules-list'
// import { RiCheckDoubleLine } from 'react-icons/ri'
// import { GrFormClose } from 'react-icons/gr'
// import Quiz from '../real-quiz'
// import '../../prototype.css'

// const SelectionStyles = createGlobalStyle`
//     .ant-select-selector, .ant-select-selector:hover, .ant-select-selector:active{
//         border-color: none !important;
//         outline: none !important;
//         font-size: 20px !important;
//     }
//     .select{
//         width: 100%;
//     }
//     .select-title{
//         color: #fff;
//         font-weight: 800;
//         font-size: 25px;
//     }
//     .submit-btn{
//         background: rgb(0, 20, 40);
//         color: whitesmoke;
//         border-radius: 50px;
//         height 50px;
//         max-height: 70px;
//         padding: 10px 0 !important;
//         font-size: 20px;
//         font-weight: 700;
//         overflow: hidden !important;
//     }
//     .submit-btn:hover,.submit-btn:active{
//         outline: none !important;
//         border: none;
//         color:  rgb(0, 20, 40);
//     }
//     @media only screen and (max-width: 550px){
//         .select-title{
//             font-size: 18px;
//         }
//     }
// `
// const RulesStyles = createGlobalStyle`
//     .rules-box{
//         position: absolute;
//         top: 0%;
//         bottom: 30%;
//         background: #fff;  
//         border-radius: 0 0 50px 50px;
//     }
//     .rules-header{
//         text-align: center;
//         font-size: 25px;
//         font-weight: 600;
//         color: rgb(0, 20, 40);
//     }
//     .rules-footer{
//         text-align: center;
//         font-size: 15px;
//         font-weight: 600;
//         color: rgb(0, 20, 40);
//     }
//     .ant-list-footer{
//         padding: 0;
//     }
//     .close-btn-container{
//         display: flex;
//         justify-content: flex-end;
//         align-items: flex-end;
//         margin: 0;
//     }
//     .close-btn{
//         width: 30px !important;
//         height: 30px !important;
//         padding: 0;
//         border: 3px solid #a42834;
//         border-radius: 50%;
//         display: flex;
//         justify-content: center;
//         align-items: center;
//         background: #f8d7da;
//         cursor: pointer;
//     }
//     .close-btn:hover, .close-btn:active, .close-btn:focus {
//         background: #d14b58 !important;
//         border-color: #a42834 !important;
//         color: #fff !important;
//     }
//     .close-icon{
//         font-size: 1.8rem;
//         color: #a42834 !important;
//     }
// `

// // const { option } = select;
// export default function Selections(){
//     const numQue = useRef(null)
//     const category = useRef(null)
//     const diff = useRef(null)
//     const queType = useRef(null)
    
//     const [numQuestions, setNumQuestions] = useState('10')
//     const [categories, setCategories] = useState('')
//     const [difficulty, setDifficulty] = useState('medium')
//     const [type, setType] = useState('multiple')
//     const [show, setShow] = useState('0')
//     const [data, setData] = useState({
//         numberOfQuestions: numQuestions,
//         categories: categories,
//         difficulty: difficulty,
//         questionType: type
//     })
    
//     const handleChange = () => {
//         setNumQuestions(numQue.current.value)
//         setCategories(category.current.value)
//         setDifficulty(diff.current.value)
//         setType(queType.current.value)

//         setData({
//         numberOfQuestions: numQue.current.value,
//         categories: category.current.value,
//         difficulty: diff.current.value,
//         questionType: queType.current.value
//     })
//         console.log(numQuestions)
//         console.log(categories)
//         console.log(difficulty)
//         console.log(type)
//     }
//     const showRules = () => {
//         setShow('1')
//     }
//     const hideRules = () => {
//         setShow('0')
//     }
//     // const startQuiz = () => {
//     //     data = {
//     //         numberOfQuestions: numQue.current.value,
//     //         categories: category.current.value,
//     //         difficulty: diff.current.value,
//     //         questionType: queType.current.value
//     //     }
//     // }
//     return(
//         <>  
//             <Routes>
//                 <Route path={'/'} exact element={            <>
            
//             <SelectionStyles/>
//             <Row gutter={[0, 20]} align='middle' justify='center' style={{marginBottom: 60}}>
//                 <Col xs={20} md={15} lg={13}>
//                     <div align='middle' justify='center'>
//                         <h2 className='select-title'>Number of Questions</h2>
//                         <select className='select' onChange={handleChange} ref={numQue}>
//                             <option value='10'>10</option>
//                             <option value='15'>15</option>
//                             <option value='25'>25</option> 
//                             <option value='30'>30</option>
//                         </select>   
//                     </div>              
//                 </Col>
//                 <Col xs={20} md={15} lg={13}>
//                     <div align='middle' justify='center'>
//                         <h2 className='select-title'>Categories</h2>
//                         <select className='select' onChange={handleChange} ref={category}>
//                             <option value=''>Any Category</option>
//                             <option value='9'>General Knowledge</option>
//                             <option value='10'>Entertainment: Books</option>
//                             <option value='11'>Entertainment: Film</option>
//                             <option value='12'>Entertainment: Music</option>
//                             <option value='13'>Entertainment: Musicals and Theatres</option>
//                             <option value='14'>Entertainment: Television</option>
//                             <option value='15'>Entertainment: Video Games</option>
//                             <option value='16'>Entertainment: Board Games</option>
//                             <option value='17'>Science and Nature</option>
//                             <option value='18'>Science: Computers</option>
//                             <option value='19'>Science: Mathematics</option>
//                             <option value='20'>Mythology</option>
//                             <option value='21'>Sports</option>
//                             <option value='22'>Geography</option>
//                             <option value='23'>History</option>
//                             <option value='24'>Politics</option>
//                             <option value='25'>Art</option>
//                             <option value='26'>Celebrities</option>
//                             <option value='27'>Animals</option>
//                             <option value='28'>Vehicles</option>
//                             <option value='29'>Entertainment: Comics</option>
//                             <option value='30'>Science: Gadgets</option>
//                             <option value='31'>Entertainment: Japanese Anime and Manga</option>
//                             <option value='32'>Entertainment: Cartoon and Animations</option>
//                         </select>   
//                     </div>              
//                 </Col>
//                 <Col xs={20} md={15} lg={13}>
//                     <div align='middle' justify='center'>
//                         <h2 className='select-title'>Difficulty Level</h2>
//                         <select className='select' onChange={handleChange} ref={diff}>
//                             <option value=''>Any Difficulty Level</option>
//                             <option value='easy'>Easy</option>
//                             <option value='medium'>Medium</option> 
//                             <option value='hard'>Hard</option>
//                         </select>   
//                     </div>              
//                 </Col>
//                 <Col xs={20} md={15} lg={13}>
//                     <div align='middle' justify='center'>
//                         <h2 className='select-title'>Questions Type</h2>
//                         <select className='select' onChange={handleChange} ref={queType}>
//                             <option value=''>Any Type</option>
//                             <option value='multiple'>Multiple Choice</option>
//                             <option value='boolean'>True / False</option> 
//                             <option value='hard'>Hard</option>
//                         </select>   
//                     </div>              
//                 </Col>
//             </Row>
//             <Row gutter={[0, 0]} align='middle' justify='center'>
//                 <Col xs={12} md={12} lg={10}> 
//                     <div align='middle' justify='center'>
//                         <Button className='submit-btn' size='large' block onClick={showRules}>Take Quiz</Button>
//                     </div>              
//                 </Col>
//             </Row>
//             <RulesStyles />
//             <Row gutter={[10,10]} align='middle' justify='center' style={{opacity: show}}>
//                 <Col xs={20} lg={10} className="rules-box">
//                     <Card>
//                         <div className="rules_list">
//                             <div className="close-btn-container"><Button className='close-btn' onClick={hideRules}><GrFormClose className='close-icon'/></Button></div>
//                             <List
//                                 size="large"
//                                 header={<div className='rules-header'>Rules of the Quiz</div>}
//                                 dataSource={rules}
//                                 renderItem={item => <List.Item ><RiCheckDoubleLine/> {item}</List.Item>}
//                                 footer={<div className='rules-footer'>GOOD LUCK!</div>}
//                             />
//                         </div>
//                         <Link to={'/quiz'}><Button>Let Go</Button></Link>   
//                     </Card>
//                 </Col>
//             </Row>
//             </>}/>
//             <Route path='/quiz' exact element={<Quiz data={data}/>}/>
//             </Routes>
//         </>
//     )
// }