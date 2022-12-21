import React, { useState } from 'react';
import NewsCard from "../components/Cards/NewsCard";
import CommentCard from '../components/Cards/CommentCard';
import ReactPaginate, { bootstrap5PaginationPreset } from 'react-responsive-pagination'; 
import useGetData from '../useGetData';
import '../App.css';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Navbar from 'react-bootstrap/Navbar';
 
const HomePage=()=>{
    
    const [currentPage,setCurrentPage]=useState(0);
    const [sort_by, setValue] = useState('popularity');
    const [tag, setTag] = useState('story');
    const [query,setQuery]=useState('');
    const {totalPages, data, isLoading}=useGetData({sort_by,tag,query,currentPage});
    
    const handlePageChange = (event)=>{
        setCurrentPage(event-1);
    }

    const inputHandler=(e)=>{
        console.log(e.target.value);
        setQuery(e.target.value);
    };

    const onValueChange = (event) => {
        console.log(event.target.value);
        setValue(event.target.value);
    };

    const onTagChange = (event) => {
        console.log(event.target.value);
        setTag(event.target.value);
    }
 
    return (
        <div> 
            <Navbar bg="light" expand="lg" className='navbar'>
                <Container fluid>
                    <Navbar.Toggle aria-controls="navbarScroll" />
                    <Navbar.Collapse id="navbarScroll">
                        <Form className='form-button'>
                            <div key='inline-radio'>
                                <Navbar.Text>Sort By:</Navbar.Text>
                                <Form.Check
                                    inline
                                    label="Date"
                                    name="group1"
                                    type="radio"
                                    id="inline-radio-1"
                                    value="date"
                                    onChange={onValueChange}
                                />
                                <Form.Check
                                    inline
                                    label="Popularity"
                                    name="group1"
                                    type="radio"
                                    id="inline-radio-2"
                                    value="popularity"
                                    onChange={onValueChange}
                                />
                            </div>
                        </Form>

                        <Form className='form-button'>
                            <div key='inline-radio'>
            
                                <Navbar.Text>Show only:</Navbar.Text>
            
                                <Form.Check
                                    inline
                                    label="Stories"
                                    name="group2"
                                    type="radio"
                                    id="inline-radio-1"
                                    value="story"
                                    onChange={onTagChange}
                                />
                                <Form.Check
                                    inline
                                    label="Comments"
                                    name="group2"
                                    type="radio"
                                    id="inline-radio-2"
                                    value="comment"
                                    onChange={onTagChange}
                                />
                            </div>
                        </Form>

                        <Form>
                            <Form.Control
                                type="search"
                                placeholder="Search a keyword/phrase"
                                onChange={inputHandler}
                            />
                        </Form>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
            <div className='container' >
                <div className='news-container'>
                    {isLoading? 
                        <p>Fetching Data... Please hold on a little!</p>:
                        (
                            tag==='story'?
                            data.map(story=>(<NewsCard story={story} key={story.objectID}/>)):
                            data.map(comment=>(<CommentCard comment={comment} key={comment.objectID}/>
                    )))}
                </div>
                <ReactPaginate
                    {...bootstrap5PaginationPreset}
                    current={currentPage+1}
                    total={totalPages}
                    onPageChange={handlePageChange}
                />
            </div>
        </div>
    )
};
 
export default HomePage;
