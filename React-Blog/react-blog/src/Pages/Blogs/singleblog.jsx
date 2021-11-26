import React from 'react'
import { useParams, Link } from 'react-router-dom';
import content from "../../content";
import './blogs.css'


export default function Singleblog() {
    const { i } = useParams()
    return (
        <div className="blogBox">
            <p><h1>{content[i].title}</h1></p>
            <img className="img" src={content[i].image} alt="" />
            <p>{content[i].author}</p>
            <p>{content[i].date}</p>
            <p>{content[i].p1}</p>
            <p>{content[i].p2}</p>
            <p>{content[i].p3}</p>
            <p>{content[i].p4}</p>
            <p>{content[i].p5}</p>
        </div>
    )
}
