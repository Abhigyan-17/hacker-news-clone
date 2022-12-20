import axios from 'axios';
import React, { useState, useEffect } from 'react';
import NewsCard from "../../components/NewsCard/NewsCard";
import ReactPaginate, { bootstrap5PaginationPreset } from 'react-responsive-pagination'; 
import useGetData from '../../useGetData';
import '../../App.css';
import Header from '../../components/Header'
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Offcanvas from 'react-bootstrap/Offcanvas';
 
const HomePage=()=>{
    
    // const [stories, setStories] = useState([])
    // const [isLoading, setIsLoading]=useState(0);
    // const [totalPages, setTotalPages]=useState(0);
    const [currentPage,setCurrentPage]=useState(0);
    const [sort_by, setValue] = useState('popularity');
    const [time, setTime] = useState('');
    const [tag, setTag] = useState('story');
    const [query,setQuery]=useState('');

    const {totalPages, data, isLoading}=useGetData({sort_by,time,tag,query,currentPage});
    console.log(data)
 
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
            <div key='inline-radio' className="mb-1">
                
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
            <div key='inline-radio' className="mb-2">
            
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

          {/* <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: '100px'}}
              navbarScroll>
              <NavDropdown title="Dropdown" id={`offcanvasNavbarDropdown-expand-md`}>
                  <NavDropdown.Item onClick={() => setValue('date')}>Date</NavDropdown.Item>
                  <NavDropdown.Item onClick={() => setValue('Popularity')}>Popularity</NavDropdown.Item>
              </NavDropdown>
          </Nav> */}

          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
              onChange={inputHandler}
            />
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
      <div className='container' >

        <div className='news-container'>
            {
                isLoading? <p>Loading.....</p>:data.map(story=>(
                    <NewsCard story={story} key={story.objectID}/>
                ))
            }
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
