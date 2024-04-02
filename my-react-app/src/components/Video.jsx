import React from "react";
import { Container } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';

function Video(props){
    return (   
        <div style={{ position: 'relative', left: "15%",marginTop:"5%", width: "70%", height: 'auto'}}>
        <Container>
        <div className='ratio ratio-16x9'>
        <iframe src={props.url} title={props.title} allowFullScreen></iframe>
        </div>
        </Container>
        </div>
    );
}


export default Video;