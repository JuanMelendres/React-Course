import React from 'react';
import faker from 'faker';

const CommentDetail = () => {
    return (
        <div className="comment">
            <a href="/" className="avatar">
                <img alt="avatar" src={ faker.image.avatar() }/>
            </a>
            <div className="content">
                <a href="/" className="author">
                    { faker.internet.userName() }
                </a>
                <div className="metadata">
                    <span className="date">Today at { faker.date.recent().toLocaleTimeString() }</span>
                </div>
                <div className="text">{ faker.lorem.paragraph() }</div>
            </div>
        </div>
    );
};

export default CommentDetail;