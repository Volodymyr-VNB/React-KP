import { Button, Card, Space, Typography } from 'antd'
import './Reviews.scss'

import React, { useState } from 'react'
import { Input } from 'antd'

const { TextArea } = Input

const { Title } = Typography

type Props = {}
type Review = {
    name: string
    text: string
    email: string
}

const Reviews = (props: Props) => {
    const arrReviews: Review[] = [
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
    const [review, setReview] = useState(arrReviews)
    const [newReview, setNewReview] = useState<Review>({
        name: '',
        text: '',
        email: '',
    })

    const showComents = () => {
        let comentsArea = document.querySelector('.comments-area')!
        comentsArea.classList.toggle('display-none')

        if (
            document.getElementById('btnComents')!.textContent ===
            'Show Comments'
        ) {
            document.getElementById('btnComents')!.textContent = 'Hide Comments'
        } else {
            document.getElementById('btnComents')!.textContent = 'Show Comments'
        }
    }
    const changeName = (e: React.ChangeEvent<HTMLInputElement>) => {
        setNewReview((prevState) => ({
            ...prevState,
            name: e.target.value,
        }))
    }
    const changeEmail = (e: React.ChangeEvent<HTMLInputElement>) => {
        setNewReview((prevState) => ({
            ...prevState,
            email: e.target.value,
        }))
    }
    const changeText = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        setNewReview((prevState) => ({
            ...prevState,
            text: e.target.value,
        }))
    }
    const onSend = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        if (
            newReview.email === '' ||
            newReview.name === '' ||
            newReview.text === ''
        ) {
            alert('All fields are required')
        } else {
            setReview((prevState) => {
                return [...prevState, newReview]
            })
            setNewReview({
                name: '',
                text: '',
                email: '',
            })
        }
    }

    return (
        <>
            <div className="comments-container">
                <div className="comments-btn-box row">
                    <Button
                        size="large"
                        shape="round"
                        id="btnComents"
                        className="comentBtn comentHide"
                        onClick={showComents}
                    >
                        Show Comments
                    </Button>
                </div>
                <div className="comments-area row display-none">
                    <h3 className="comments-title">
                        No Comment! Be the first one.
                    </h3>

                    {review.map(({ name, text }, index) => (
                        <Card
                            bordered={true}
                            style={{ width: 960 }}
                            key={index}
                        >
                            <Space direction="vertical">
                                <Title level={3} mark>
                                    {name}:
                                </Title>
                                <Title level={4}>{text}</Title>
                            </Space>
                        </Card>
                    ))}

                    <h3 id="reply-title" className="comment-reply-title">
                        Leave a Reply <br />
                    </h3>
                    {/* <Form method="post" className="comment-form"></Form> */}
                    <form className="comment-form" onSubmit={onSend}>
                        <p className="h4">
                            Your email address will not be published. Required
                            fields are marked *
                        </p>
                        <TextArea
                            rows={4}
                            placeholder="Comment maxLength is 250"
                            name="comment"
                            maxLength={250}
                            value={newReview.text}
                            onChange={changeText}
                        />
                        <br />
                        <br />
                        <div className="row gap">
                            <Input
                                showCount
                                maxLength={20}
                                placeholder="Name"
                                value={newReview.name}
                                onChange={changeName}
                            />

                            <Input
                                showCount
                                maxLength={40}
                                placeholder="email@gmail.com"
                                value={newReview.email}
                                onChange={changeEmail}
                            />
                        </div>
                        <br />
                        <br />
                        <Button
                            size="large"
                            shape="round"
                            className="comentBtn "
                            htmlType="submit"
                        >
                            Post Comment
                        </Button>
                    </form>
                </div>
            </div>
        </>
    )
}

export default Reviews
