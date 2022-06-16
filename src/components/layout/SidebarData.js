import React from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import * as IoIcons from 'react-icons/io';
import * as RiIcons from 'react-icons/ri';

export const SidebarData = [
    {
        title: 'Profile',
        // path: '/pages-profile',
        path: '/emp',
        icon: <IoIcons.IoMdHelpCircle />
      },

    {
    title: 'Team',
    // path: '/overview',
    path: '/emp',
    // icon: <AiIcons.AiFillHome />,
    icon: <IoIcons.IoMdPeople />,

    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,
    

    subNav: [
      {
        title: 'Add Employee',
        // path: '/AddEmp',
        path: '/emp',
        icon: <IoIcons.IoIosPaper />
      },
      {
        title: 'Employee List',
        // path: '/emplist',
        path: '/emp',
        icon: <IoIcons.IoIosPaper />
      },
    ]
  },
  {
    title: 'Manage Leave',
    // path: '/reports',
    path: '/emp',
    icon: <IoIcons.IoIosPaper />,
    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,

    subNav: [
      {
        title: 'Leave List',
        // path: '/LeaveList',
        path: '/emp',
        icon: <IoIcons.IoIosPaper />,
        cName: 'sub-nav'
      },
      {
        title: 'Add Leave',
        // path: '/AddLeave',
        path: '/emp',
        icon: <IoIcons.IoIosPaper />,
        cName: 'sub-nav'
      },
      {
        title: 'Leave Detail',
        // path: '/reports/reports3',
        path: '/emp',
        icon: <IoIcons.IoIosPaper />
      }
    ]
  },

  {
    title: 'Monthy Report',
    // path: '/messages',
    path: '/emp',
    icon: <FaIcons.FaEnvelopeOpenText />,

    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,

    subNav: [
      {
        title: 'Report List',
        // path: '/reportlist',
        path: '/emp',
        icon: <IoIcons.IoIosPaper />
      },
    
    ]
  },
  {
    title: 'Register',
    // path: '/pages-register',
    path: '/emp',
    icon: <IoIcons.IoMdHelpCircle />
  },
  {
    title: 'Contact',
    // path: '/pages-contact',
    path: '/a',
    icon: <IoIcons.IoMdHelpCircle />
  },
  {
    title: 'Error 404',
    // path: '/pages-error',
    path: '/emp',
    icon: <IoIcons.IoMdHelpCircle />
  }
];