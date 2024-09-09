import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
    return (
        <header>
            <nav>
                <Link to="/">Home</Link>
                <Link to="/login">Login</Link>
                <Link to="/register">Register</Link>
                <Link to="/profile">Profile</Link>
                <Link to="/create-group">Create Group</Link>
                <Link to="/join-group">Join Group</Link>
                <Link to="/premium">Premium</Link>
                <Link to="/plan">Plan</Link>
                <Link to="/claim">Claim</Link>
                <Link to="/refund">Refund</Link>
                <Link to="/payment">Payment</Link>
            </nav>
        </header>
    );
}

export default Header;
