import React from 'react';
import Link from "next/link";

const Nav = () => {
    return (
        <div className="navbar">
            <div className="navbar__details">
                <h2>Movie App</h2>
                <div className="navbar__details--list">
                    <Link href="/">
                        <a>Home</a>
                    </Link>
                    <Link href="/about">
                        <a>About</a>
                    </Link>

                </div>
            </div>
        </div>
    )
}

export default Nav;