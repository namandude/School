

import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import { FaRegFilePdf } from "react-icons/fa6";
import './NoticesSection.css';
import { FcApproval } from "react-icons/fc";

const AllNotices = () => {
  const [notices, setNotices] = useState([]);
  const [events, setEvents] = useState([]);
  const [newss, setNews] = useState([]); // Changed the state name to 'newss'

  useEffect(() => {
    fetch("http://localhost:3000/all-notice")
      .then(res => res.json())
      .then(data => {
        console.log(data);  // Log the fetched data
        setNotices(data);    // Update the state with the fetched data if needed
      })
      .catch(error => console.error("Error fetching notice data:", error));

    fetch("http://localhost:3000/all-event")
      .then(res => res.json())
      .then(data => {
        console.log(data);  // Log the fetched data
        setEvents(data);    // Update the state with the fetched data if needed
      })
      .catch(error => console.error("Error fetching event data:", error));
      
    fetch("http://localhost:3000/all-news")
    .then(res => res.json())
    .then(data => {
      console.log(data);  // Log the fetched data
      setNews(data);    // Update the state with the fetched data if needed
    })
    .catch(error => console.error("Error fetching news data:", error));
  }, []);

  return (
    <div className='w-full mt-8 flex'>
      <div className='container flex'>
        <div className='w-1/2 flex'>
          <div className='latest-news'>
            <div className='heading-sec'>
              <h3 className='head-title'>Latest News</h3>
            </div>
            <div className='scrolling-container'>
              <ul className='latest-news-ul'>
              {newss.map(news => ( // Changed 'events' to 'newss'
                  <Link to={`/news/${news._id}`} key={news._id}> {/* Updated the route to '/news' */}
                    <li>
                      <div className="latest-details">
                       
                        <div>
                         
                          <p> {news.NewsDescription} <span><FcApproval/></span></p>
                          
                        </div>
                      </div>
                    </li>
                  </Link>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className='w-1/2 flex'>
          <div className='event-list'>
            <div className='heading-sec'>
              <h3 className='head-title'> Events</h3>
            </div>
            <div className='scrolling-container'>
              <ul className='upcoming-event-list'>
                {events.map(event => (
                  <Link to={`/event/${event._id}`} key={event._id}>
                    <li>
                      <div className="event-details">
                        
                        <div>
                       <p><span >{event.EventDate} </span>:{event.EventTitle} :{event.EventDescription}</p>
                        </div>
                      </div>
                    </li>
                  </Link>
                ))}
              </ul>
            </div>
          </div>
        </div>




        <div className='w-1/2 flex'>
          <div className='notice'>
            <div className='heading-sec'>
              <h3 className='head-title'>Notices</h3>
            </div>
            <div className='scroling-container'>
              <ul className='upcoming-notice'>
                {notices.map(notice => (
                  <Link to={`/notice/${notice._id}`} key={notice._id}>
                    <li>
                      <div className="notice-details">
                        
                        <div>
                          
                          <p> <span><FaRegFilePdf className="file-icon" /></span>   {notice.uploadDate} :{notice.noticeTitle}</p>
                       
                        </div>
                      </div>
                    </li>
                  </Link>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AllNotices;
