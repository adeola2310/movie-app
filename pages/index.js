import React from 'react';

const Home = () => {
    return (
        <div className="home">

            <div className="sidebar">
                <ul className="sidebar__contents">
                    <li className="sidebar__contents--list">.Category one</li>
                    <li className="sidebar__contents--list">.Category one</li>
                    <li className="sidebar__contents--list">.Category one</li>
                </ul>
            </div>
            <div className="movies">
                <input type="text"  className="search" placeholder="search movies..."/>
                <div className="movie-grid">

                </div>
            </div>


        </div>
    )
}

export default Home;
