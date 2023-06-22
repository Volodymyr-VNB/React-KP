import { Button, Card, Space, Typography } from 'antd'
import './Reviews.scss'

import { useState } from 'react'

type Props = {}
type Review = {
    name: string
    text: string
    email: string
}

const Reviews = (props: Props) => {
    const arrayReviews: Review[] = [
        {
            name: 'Serg',
            text: 'text',
            email: 'Email',
        },
        {
            name: 'Petro',
            text: 'text',
            email: 'Email',
        },
        {
            name: 'Vovk',
            text: 'text',
            email: 'Email',
        },
    ]
    const [reviews, setReviews] = useState(arrayReviews)
    console.log(setReviews)
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
                        {reviews.map(({ name, text }, index) => (
                            <Card bordered={true} style={{ width: 960 }}>
                                <Space direction="vertical">
                                    <Typography>{name}:</Typography>

                                    <div>{text} </div>
                                </Space>
                            </Card>
                        ))}
                    </ol>
                    <h3 id="reply-title" className="comment-reply-title">
                        Leave a Reply <br />
                        <p className="h4">
                            Your email address will not be published. Required
                            fields are marked *
                        </p>
                    </h3>
                </div>
            </div>
        </>
    )
}

export default Reviews
