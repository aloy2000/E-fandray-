import React from 'react'
import Contact from './ContactComponent'

const Search = () => {
    return (
        <div className="col-xl-4 col-lg-4 col-md-4 col-sm-3 col-3">
            <div className="users-container">
                <div className="chat-search-box">
                    <div className="input-group">
                        <input className="form-control" placeholder="Search" />
                        <div className="input-group-btn">
                            <button type="button" className="btn btn-info">
                                <i className="fa fa-search"></i>
                            </button>
                        </div>
                    </div>
                </div>
                <ul className="users">
                    <li className="person" data-chat="person1">
                        <div className="user">
                            <img src="https://www.bootdey.com/img/Content/avatar/avatar3.png" alt="Retail Admin" />
                            <span className="status busy"></span>
                        </div>
                        <p className="name-time">
                            <span className="name">Steve Bangalter</span>
                            <span className="time">15/02/2019</span>
                        </p>
                    </li>
                    <li className="person" data-chat="person1">
                        <div className="user">
                            <img src="https://www.bootdey.com/img/Content/avatar/avatar1.png" alt="Retail Admin" />
                            <span className="status offline"></span>
                        </div>
                        <p className="name-time">
                            <span className="name">Steve Bangalter</span>
                            <span className="time">15/02/2019</span>
                        </p>
                    </li>
                    <li className="person active-user" data-chat="person2">
                        <div className="user">
                            <img src="https://www.bootdey.com/img/Content/avatar/avatar2.png" alt="Retail Admin" />
                            <span className="status away"></span>
                        </div>
                        <p className="name-time">
                            <span className="name">Peter Gregor</span>
                            <span className="time">12/02/2019</span>
                        </p>
                    </li>
                    <li className="person" data-chat="person3">
                        <div className="user">
                            <img src="https://www.bootdey.com/img/Content/avatar/avatar3.png" alt="Retail Admin" />
                            <span className="status busy"></span>
                        </div>
                        <p className="name-time">
                            <span className="name">Jessica Larson</span>
                            <span className="time">11/02/2019</span>
                        </p>
                    </li>
                    <li className="person" data-chat="person4">
                        <div className="user">
                            <img src="https://www.bootdey.com/img/Content/avatar/avatar4.png" alt="Retail Admin" />
                            <span className="status offline"></span>
                        </div>
                        <p className="name-time">
                            <span className="name">Lisa Guerrero</span>
                            <span className="time">08/02/2019</span>
                        </p>
                    </li>
                    <li className="person" data-chat="person5">
                        <div className="user">
                            <img src="https://www.bootdey.com/img/Content/avatar/avatar5.png" alt="Retail Admin" />
                            <span className="status away"></span>
                        </div>
                        <p className="name-time">
                            <span className="name">Michael Jordan</span>
                            <span className="time">05/02/2019</span>
                        </p>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Search
