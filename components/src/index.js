import React from 'react';
import ReactDOM from 'react-dom';
import ApprovalCard from './ApprovalCard';
import CommentDetail from './CommentDetail';
import CommentDetailProps from './CommentDetailProps';
import faker from 'faker';

/* Structure for comments component
    import faker from 'faker';

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
            <div className="text">{faker.lorem.paragraph()}</div>
        </div>
    </div>
*/

const App = () => {
    return (
        <div className="ui container comments">
            <ApprovalCard>
                <div>
                    <h4>Warning!</h4>
                    Are you sure you want to do this?
                </div>
            </ApprovalCard>
            <ApprovalCard>
                <CommentDetailProps 
                    avatar={faker.image.avatar()} 
                    author="Sam" 
                    timeAgo="Today at 04:45:35" 
                    comment="Nice blog post!!"
                />
            </ApprovalCard>
            <CommentDetail/>
            <ApprovalCard>
                <CommentDetailProps 
                    avatar={faker.image.avatar()} 
                    author="Jane" 
                    timeAgo="Today at 08:45:35" 
                    comment="Dislike blog post!! :("
                />
            </ApprovalCard>
            <CommentDetail/>
            <CommentDetail/>
        </div>
    );
};

ReactDOM.render(
    <App />,
    document.querySelector('#root')
);