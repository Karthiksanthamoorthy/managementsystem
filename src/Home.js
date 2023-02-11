import React from 'react';
import './Home.css';
import { FaCartArrowDown, FaUserAlt, FaSafari, FaTasks } from "react-icons/fa"


function Home(){
    return(
        <div className='d-flex home' >
        <div className='d-flex sidebar flex-column flex-shrink-0 text-white bg-dark'>
            <ul className='nav nav-pills flex-column mb-auto px-0'>
                <li className='nav-item'>
                    <a href="" className='nav-link text-white'>
                        <FaSafari/><span className='ms-2'>Dashboard</span></a>
                </li>
                <li className='nav-item'>
                    <a href="" className='nav-link text-white'>
                    <FaUserAlt/><span className='ms-2'>Student</span></a>
                </li>
                <li className='nav-item'>
                    <a href="" className='nav-link text-white'>
                    <FaUserAlt/> <span className='ms-2'>Teachers</span></a>
                </li>
                <li className='nav-item'>
                    <a href="" className='nav-link text-white'>
                     <FaTasks/> <span className='ms-2'>Report</span></a>
                </li>
            </ul>
        </div>
        <div className='content container nt-3'>
            <div className='row'>
                <div className='col-md-3 text-white col bg-success 
                d-flex justify-content-around px-1 py-3 rounded'>
                    <p>Total School</p>
                </div>
                <div className='col-md-3 text-white col bg-success 
                d-flex justify-content-around px-1 py-3 rounded'>
                    <p>Total Teachers</p>
                </div>
                <div className='col-md-3 text-white col bg-danger \
                d-flex justify-content-around px-1 py-3 rounded'>
                    <p>Report</p>
                </div>
            </div>
            <div className='d-flex justify-content-between'>
                <h2 className='student'>Students</h2>
                <button className='btn btn-success'>+Add</button>
            </div>
            <table class="table w-100">
                <thead>
                    <tr>
                        <th scope='col'>Roll No</th>
                        <th scope='col'>Name</th>
                        <th scope='col'>Present</th>
                        <th scope='col'>Absent</th>
                        <th scope='col'>Percentage</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>1</td>
                        <td>Rohit</td>
                        <td>Yes</td>
                        <td>No</td>
                        <td>70%</td>
                    </tr>
                    <tr>
                        <td>2</td>
                        <td>Sam</td>
                        <td>Yes</td>
                        <td>No</td>
                        <td>60%</td>
                    </tr>
                    <tr>
                        <td>3</td>
                        <td>Damo</td>
                        <td>Yes</td>
                        <td>No</td>
                        <td>80%</td>
                    </tr>
                </tbody>
            </table>
        </div>
        
        </div>
    )
}

export default Home;
