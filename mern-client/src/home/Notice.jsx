import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { FaRegFilePdf } from "react-icons/fa";
import { FcApproval } from "react-icons/fc";
import './NoticesSection.css';

const AllNotices = () => {
  const [notices, setNotices] = useState([]);
  const [events, setEvents] = useState([]);
  const [news, setNews] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/all-notice")
      .then(res => res.json())
      .then(data => setNotices(data))
      .catch(error => console.error("Error fetching notice data:", error));

    fetch("http://localhost:3000/all-event")
      .then(res => res.json())
      .then(data => setEvents(data))
      .catch(error => console.error("Error fetching event data:", error));
      
    fetch("http://localhost:3000/all-news")
      .then(res => res.json())
      .then(data => setNews(data))
      .catch(error => console.error("Error fetching news data:", error));
  }, []);

  return (
    <div className='w-full mt-8'>
      <div className='container flex flex-wrap '>
        {/* Latest News Section */}
        <div className='w-full md:w-1/2 lg:w-1/3 p-2'>
          <div className='latest-news'>
            <div className='heading-sec'>
              <h3 className='head-title'>Latest News</h3>
            </div>
            <div className='scrolling-container'>
              <ul className='latest-news-ul'>
                {news.map(newsItem => (
                  <Link to={`/news/${newsItem._id}`} key={newsItem._id}>
                    <li className="mb-2">
                      <div className="latest-details">
                        <p>{newsItem.NewsDescription} <span><FcApproval /></span></p>
                      </div>
                    </li>
                  </Link>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Events Section */}
        <div className='w-full md:w-1/2 lg:w-1/3 p-2'>
          <div className='event-list'>
            <div className='heading-sec'>
              <h3 className='head-title'>Events</h3>
            </div>
            <div className='scrolling-container'>
              <ul className='upcoming-event-list'>
                {events.map(event => (
                  <Link to={`/event/${event._id}`} key={event._id}>
                    <li className="mb-2">
                      <div className="event-details">
                        <p><span>{event.EventDate}</span>: {event.EventTitle} : {event.EventDescription}</p>
                      </div>
                    </li>
                  </Link>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Notices Section */}
        <div className='w-full md:w-1/2 lg:w-1/3 p-2'>
          <div className='notice'>
            <div className='heading-sec'>
              <h3 className='head-title'>Notices</h3>
            </div>
            <div className='scrolling-container'>
              <ul className='upcoming-notice'>
                {notices.map(notice => (
                  <Link to={`/notice/${notice._id}`} key={notice._id}>
                    <li className="mb-2">
                      <div className="notice-details">
                        <p><span><FaRegFilePdf className="file-icon" /></span> {notice.uploadDate} : {notice.noticeTitle}</p>
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
