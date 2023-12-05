import React, { useState } from 'react';
import { Link } from 'react-router-dom'

import { Helmet } from 'react-helmet'

import './account-nurses.css'

const AccountNurses = (props) => {

  const [isUploadModalOpen, setUploadModalOpen] = useState(false);

  const openUploadModal = () => {
    setUploadModalOpen(true);
  };

  const closeUploadModal = () => {
    setUploadModalOpen(false);
  };

  const handleFileChange = (event) => {
    // Handle file change logic here
    const selectedFile = event.target.files[0];
    console.log('Selected file:', selectedFile);
  };

  const handleUpload = () => {
    // Add your upload logic here
    // You can use a library like axios to send the file to your server
    // For now, let's just log a message
    console.log('File uploaded!');
    // Close the modal after uploading
    closeUploadModal();
  };

  return (
    <div className="account-nurses-container">
      <Helmet>
        <title>AccountNurses - Lampara</title>
        <meta property="og:title" content="Account - Lampara" />
      </Helmet>
      <div className="account-nurses-container1">
        <h1 className="account-nurses-text">Account Settings</h1>
        <div className="account-nurses-container2">
          <h1 className="account-nurses-text01">Your Name</h1>
          <button type="button" className="account-nurses-button button">
            Jabez Joshua Vestidas
          </button>
          <button type="button" className="account-nurses-button1 button">
            Oroquieta City, Misamis Occidental
          </button>
          <button type="button" className="account-nurses-button2 button">
            kookiejabez@gmail.com
          </button>
          <button type="button" className="account-nurses-button3 button">
            09465033802
          </button>
          <button type="button" className="account-nurses-button4 button">
            2021xxxxxxx
          </button>
          <h1 className="account-nurses-text02">Email</h1>
          <h1 className="account-nurses-text03">Contact Number</h1>
          <h1 className="account-nurses-text04">Address</h1>
          <h1 className="account-nurses-text05">Nurse ID</h1>
        </div>
        <div className="account-nurses-container3">
          <h1 className="account-nurses-text06">Current Password</h1>
          <button type="button" className="account-nurses-button5 button">
            *****************
          </button>
          <button type="button" className="account-nurses-button6 button">
            *****************
          </button>
          <button type="button" className="account-nurses-button7 button">
            *****************
          </button>
          <h1 className="account-nurses-text07">New Password</h1>
          <h1 className="account-nurses-text08">Confirm Password</h1>
        </div>
        <h1 className="account-nurses-text09">Edit Profile</h1>
        <h1 className="account-nurses-text10">Change Password</h1>
        <h1 className="account-nurses-text11" onClick={openUploadModal}>
         Upload a photo
        </h1>
        {/* Upload Modal */}
        
        {isUploadModalOpen && (
  <>
    <div className="upload-overlay" onClick={closeUploadModal}></div>
    <div className="upload-modal">
      <button className="close-button" onClick={closeUploadModal}>
        <svg viewBox="0 0 24 24" className="close-icon">
          <path
            fill="currentColor"
            d="M18.364 5.636a2 2 0 0 0-2.828 0L12 9.172 8.464 5.636a2 2 0 1 0-2.828 2.828L9.172 12l-3.536 3.536a2 2 0 1 0 2.828 2.828L12 14.828l3.536 3.536a2 2 0 1 0 2.828-2.828L14.828 12l3.536-3.536a2 2 0 0 0 0-2.828z"
          ></path>
        </svg>
      </button>
      <input type="file" className="upload-input" onChange={handleFileChange} />
          {/** Added Upload Button */}
          <div className="upload-button-container">
          <button className="upload-button" onClick={handleUpload}>
            Upload
          </button>
          </div>
    </div>
  </>
)}
        <h1 className="account-nurses-text12">Save</h1>
        <img
          alt="image"
          src="/LAMPARA/338316809_1456186771578578_5155093782169563773_n-200h.jpg"
          className="account-nurses-image"
        />
        <button type="button" className="account-nurses-button8 button">
          <svg viewBox="0 0 1024 1024" className="account-nurses-icon">
            <path d="M512 662q62 0 106-44t44-106-44-106-106-44-106 44-44 106 44 106 106 44zM830 554l90 70q14 10 4 28l-86 148q-8 14-26 8l-106-42q-42 30-72 42l-16 112q-4 18-20 18h-172q-16 0-20-18l-16-112q-38-16-72-42l-106 42q-18 6-26-8l-86-148q-10-18 4-28l90-70q-2-14-2-42t2-42l-90-70q-14-10-4-28l86-148q8-14 26-8l106 42q42-30 72-42l16-112q4-18 20-18h172q16 0 20 18l16 112q38 16 72 42l106-42q18-6 26 8l86 148q10 18-4 28l-90 70q2 14 2 42t-2 42z"></path>
          </svg>
        </button>
      </div>
      <div className="account-nurses-container4">
        <div className="account-nurses-container5">
          <h1 className="account-nurses-text13">Nurse</h1>
          <svg viewBox="0 0 1024 1024" className="account-nurses-icon02">
            <path d="M1024 590.444l-512-397.426-512 397.428v-162.038l512-397.426 512 397.428zM896 576v384h-256v-256h-256v256h-256v-384l384-288z"></path>
          </svg>
          <svg viewBox="0 0 1024 1024" className="account-nurses-icon04">
            <path d="M917.806 229.076c-22.212-30.292-53.174-65.7-87.178-99.704s-69.412-64.964-99.704-87.178c-51.574-37.82-76.592-42.194-90.924-42.194h-496c-44.112 0-80 35.888-80 80v864c0 44.112 35.888 80 80 80h736c44.112 0 80-35.888 80-80v-624c0-14.332-4.372-39.35-42.194-90.924zM785.374 174.626c30.7 30.7 54.8 58.398 72.58 81.374h-153.954v-153.946c22.984 17.78 50.678 41.878 81.374 72.572zM896 944c0 8.672-7.328 16-16 16h-736c-8.672 0-16-7.328-16-16v-864c0-8.672 7.328-16 16-16 0 0 495.956-0.002 496 0v224c0 17.672 14.326 32 32 32h224v624z"></path>
            <path d="M736 832h-448c-17.672 0-32-14.326-32-32s14.328-32 32-32h448c17.674 0 32 14.326 32 32s-14.326 32-32 32z"></path>
            <path d="M736 704h-448c-17.672 0-32-14.326-32-32s14.328-32 32-32h448c17.674 0 32 14.326 32 32s-14.326 32-32 32z"></path>
            <path d="M736 576h-448c-17.672 0-32-14.326-32-32s14.328-32 32-32h448c17.674 0 32 14.326 32 32s-14.326 32-32 32z"></path>
          </svg>
          <svg viewBox="0 0 1024 1024" className="account-nurses-icon09">
            <path d="M512 598q108 0 225 47t117 123v86h-684v-86q0-76 117-123t225-47zM512 512q-70 0-120-50t-50-120 50-121 120-51 120 51 50 121-50 120-120 50z"></path>
          </svg>
          <svg viewBox="0 0 1024 1024" className="account-nurses-icon13">
            <path d="M512 662q62 0 106-44t44-106-44-106-106-44-106 44-44 106 44 106 106 44zM830 554l90 70q14 10 4 28l-86 148q-8 14-26 8l-106-42q-42 30-72 42l-16 112q-4 18-20 18h-172q-16 0-20-18l-16-112q-38-16-72-42l-106 42q-18 6-26-8l-86-148q-10-18 4-28l90-70q-2-14-2-42t2-42l-90-70q-14-10-4-28l86-148q8-14 26-8l106 42q42-30 72-42l16-112q4-18 20-18h172q16 0 20 18l16 112q38 16 72 42l106-42q18-6 26 8l86 148q10 18-4 28l-90 70q2 14 2 42t-2 42z"></path>
          </svg>
          <Link to="/dashboard" className="account-nurses-navlink">
            <img
              alt="image"
              src="/LAMPARA/logo1-200h.png"
              className="account-nurses-image1"
            />
          </Link>
          <Link to="/dashboard-nurses" className="account-nurses-navlink1">
            <h1 className="account-nurses-text14">LAMPARA</h1>
          </Link>
          <Link to="/dashboard-nurses" className="account-nurses-navlink2 button">
            Scheduler
          </Link>
          <Link to="/dashboard-nurses" className="account-nurses-navlink3 button">
            Dashboard
          </Link>
          <Link to="/messages-nurses" className="account-nurses-navlink4 button">
            Messages
          </Link>
          <Link to="/schedule-nurses" className="account-nurses-navlink6 button">
            Schedule
          </Link>
          <Link to="/" className="account-nurses-navlink7 button">
            Log Out
          </Link>
          <svg viewBox="0 0 1024 1024" className="account-nurses-icon15">
            <path d="M768 640v-128h-320v-128h320v-128l192 192zM704 576v256h-320v192l-384-192v-832h704v320h-64v-256h-512l256 128v576h256v-192z"></path>
          </svg>
          <Link to="/account-nurses" className="account-nurses-navlink8 button">
            Account Settings
          </Link>
        </div>
      </div>
    </div>
  )
}

export default AccountNurses