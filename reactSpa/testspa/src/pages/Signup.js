import React, {Component} from 'react';
import queryString from 'query-string';

const Signup = ({match, location}) => {


    const query = queryString.parse(location.search);
    console.log(query);
    
    return (
    <div>
        <h2>thisissignup</h2>This is signup page {match.params.name} {match.params.number}
    </div>
    );
}

export default Signup;