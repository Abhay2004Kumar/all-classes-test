import { title } from 'process';
import React from 'react';
import { Helmet } from 'react-helmet-async';

export default function Head() {
  return (
    <Helmet>
      <title>All THE Classes - Specializing in JEE, NEET, & CBSE (11th & 12th)</title>
      <meta name="description" content="Experience exclusive coaching with home tuition and small batches of only 8 students per batch for JEE, NEET, and CBSE courses. Choose from morning or evening batches across Delhi, Noida, Gurgaon, etc. View faculty profiles, batch schedules, fees, and subjects, and book your seat now!" />
      <meta name="keywords" content="JEE coaching, NEET coaching, CBSE courses, Home tuition, Small batch size, 8 students per batch, Personalized learning, Batch booking, Classes for 11th, Classes for 12th, Dropper courses, Morning batches, Evening batches, Physics, Chemistry, Math, Mathematics, Biology, Expert faculty, Delhi coaching, Noida coaching, Gurgaon coaching, Ghaziabad coaching" />
      <meta name="author" content="All The Classes" />

    
      <meta property="og:title" content="JEE, NEET & CBSE Coaching | Small Batches & Home Tuition" />
      <meta property="og:description" content="Experience exclusive coaching with home tuition and small batches of only 8 students per batch for JEE, NEET, and CBSE courses. Choose from morning or evening batches across Delhi, Noida, Gurgaon, etc. View faculty profiles, batch schedules, fees, and subjects, and book your seat now!" />
      <meta property="og:image" content="/assets/side_logo_1.png" />
      <meta property="og:url" content="https://www.alltheclasses.com/" />
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content="All The Classes" />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content="JEE, NEET & CBSE Coaching | Small Batches & Home Tuition" />
      <meta name="twitter:description" content="Exclusive coaching with home tuition and small batches of only 8 students per batch for JEE, NEET, and CBSE courses. Choose from morning or evening batches across Delhi, Noida, Gurgaon, etc." />
      <meta name="twitter:image" content="https://alltheclasses.com/images/twitter-image.jpg" />

     
      <link rel="icon" type="image/png" href="/assets/side_logo_1.png" />
      <link rel="apple-touch-icon" href="/assets/side_logo_1.png" />
    </Helmet>
  );
}
