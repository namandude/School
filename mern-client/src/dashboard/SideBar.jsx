
import { Sidebar } from 'flowbite-react';
import { BiBuoy } from 'react-icons/bi';
import { HiArrowSmRight, HiChartPie, HiInbox, HiOutlineCloudUpload, HiTable, HiViewBoards } from 'react-icons/hi';
import { GiTeacher } from "react-icons/gi";
import { MdEvent } from "react-icons/md";
import { FaRegNewspaper } from "react-icons/fa6";
import { FaBlog } from "react-icons/fa";
import Propic from '../assets/profile.jpg'
import { useContext } from 'react';
import { AuthContext } from '../contacts/AuthProviders';


const SideBar = () => {
  const {user} = useContext(AuthContext)
    return (
        <Sidebar aria-label="Sidebar with content separator example">
            <Sidebar.Logo href="/" img={user?.photoURL} imgAlt="Flowbite logo" >
        <p>
          {
            user?.displayName || "Demo User"
          }
        </p>
      </Sidebar.Logo>
          <Sidebar.Items>
            <Sidebar.ItemGroup>
             
              <Sidebar.Item href="/admin/dashboard/upload" icon={HiOutlineCloudUpload}>
                Upload Notice
              </Sidebar.Item>
              <Sidebar.Item href="/admin/dashboard/faculty" icon={GiTeacher}>
                Add Faculty
              </Sidebar.Item>
              <Sidebar.Item href="/admin/dashboard/event" icon={MdEvent}>
                Upload Event
              </Sidebar.Item>
              <Sidebar.Item href="/admin/dashboard/news" icon={FaRegNewspaper}>
                Upload News
              </Sidebar.Item>
              <Sidebar.Item href="/admin/dashboard/blog" icon={FaBlog}>
              Upload Blog
              </Sidebar.Item>
              <Sidebar.Item href="/admin/dashboard/manage-notice" icon={HiOutlineCloudUpload}>
                Manage Notice
              </Sidebar.Item>
              <Sidebar.Item href="/admin/dashboard/manage-event" icon={HiInbox}>
                Manage Events
              </Sidebar.Item>
              <Sidebar.Item href="/admin/dashboard/manage-news" icon={FaRegNewspaper}>
                Manage News
              </Sidebar.Item>
              <Sidebar.Item href="/admin/dashboard/manage-faculty" icon={GiTeacher}>
                Manage Faculty
              </Sidebar.Item>
              <Sidebar.Item href="/admin/dashboard/manage-blog" icon={FaBlog}>
              Manage Blog
              </Sidebar.Item>
            
              <Sidebar.Item href="/login" icon={HiArrowSmRight}>
                Sign In
              </Sidebar.Item>
              <Sidebar.Item href="/logout" icon={HiTable}>
                Log Out
              </Sidebar.Item>
            </Sidebar.ItemGroup>
          
          </Sidebar.Items>
        </Sidebar>
      );
}

export default SideBar
