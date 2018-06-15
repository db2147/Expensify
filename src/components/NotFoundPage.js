import React from 'react';
import { Link } from 'react-router-dom';

const NotFoundPage = () => (// our error page; we use link which enables us to click without a full page refresh 
    <div>
      404! - <Link to="/">Go home</Link> 
    </div>
);

export default NotFoundPage;