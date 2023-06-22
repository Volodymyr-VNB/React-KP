import { Button, Card, Space, Typography } from 'antd'
import './Reviews.scss'

import { useState } from 'react'


type Props = {}
type Reviews ={
    name: string
    text: string
    email : string
}

const Reviews = (props: Props) => {
    
    const arrayReviews:Reviews[] =[
        {
            name: "Serg",
            text: "text",
            email: "Email"
        },
        {
            name: "Petro",
            text: "text",
            email: "Email"
        },
        {
            name: "Vovk",
            text: "text",
            email: "Email"
        },
    ]
    const [reviews, setReviews]=useState(arrayReviews)

    return (
        <>
            <div className="comments-container">
                <div className="comments-btn-box row">
                    <Button
                        className="comentBtn"
                        shape="round"
                        size="large"
                        data-show="Show Comments"
                        data-hide="Hide Comments"
                    >
                        Show Comments
                    </Button>
                </div>
                <div className="comments-area row">
                    <h3 className="comments-title">
                        No Comment! Be the first one.
                    </h3>
                    
                    <ol className="comment-list">
                        {reviews.map(({name,text},index)=>(
                            <Card  bordered={true} style={{ width: 960 }} >
                                 <Space direction="vertical" >
                                <Typography  >{name}:</Typography>
                                
                                <div>{text} </div>
                                </Space>
                            </Card>
                        ))}
                    </ol>
                    <h3 id="reply-title" className="comment-reply-title">
                        Leave a Reply <br />
                        <p className='h4' >Your email address will not be published. Required fields are marked *</p>
                        
                    </h3>
                    
                </div>
            </div>

            {/* <div className="comments-container">
                <div className="comments-list-collapse-btn-box">
<button className="comments-list-collapse-btn" data-show="Show Comments" data-hide="Hide Comments" >Show Comments</button>
</div>
<div id="comments" className="comments-area collapsed" style="display: none;">
    <h4 className="comments-title">
No Comment! Be the first one.
</h4>
<ol className="comment-list">
    </ol>
    <div id="respond" className="comment-respond">
        <h3 id="reply-title" className="comment-reply-title">
            Leave a Reply 
            <small>
                <a rel="nofollow" id="cancel-comment-reply-link" href="/fonix/main/top-5-new-tech-gadgets-you-must-have-in-2023/#respond" 
                style="display:none;">
                    Cancel reply
                    </a></small>
                    </h3>
                    <form action="https://demo.rivaxstudio.com/fonix/main/wp-comments-post.php" method="post" id="commentform" className="comment-form" novalidate="">
                        <p className="comment-notes">
                            <span id="email-notes">Your email address will not be published.
                            </span> 
                            <span className="required-field-message">
                                Required fields are marked 
                                <span className="required">
                                    *
                                    </span>
                                    </span>
                                    </p>
                                    <textarea id="comment" name="comment" rows="8" className="form-textarea" placeholder="Comment" required="">
                                        </textarea>
                                        <input className="form-author" id="author" name="author" type="text" size="30" maxlength="245" placeholder="Name *" value="" required="" fdprocessedid="xg1mmd">
<input className="form-email" id="email" name="email" type="email" size="30" maxlength="200" placeholder="Email *" value="" >
<input className="form-website" id="url" name="url" type="url" size="30" maxlength="200" placeholder="Website" value=""><p className="comment-form-cookies-consent"><input id="wp-comment-cookies-consent" name="wp-comment-cookies-consent" type="checkbox" value="yes"> <label for="wp-comment-cookies-consent">Save my name, email, and website in this browser for the next time I comment.</label></p><p className="form-submit"><input name="submit" type="submit" id="submit" className="submit" value="Post Comment" fdprocessedid="fvczw0m"> <input type="hidden" name="comment_post_ID" value="1707" id="comment_post_ID">
<input type="hidden" name="comment_parent" id="comment_parent" value="0">
    </p>
    </form>
    </div>
    </div>
    </div> */}
        </>
    )
}

export default Reviews
