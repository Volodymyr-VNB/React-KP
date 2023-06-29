import { HeartTwoTone } from '@ant-design/icons'
import { Button } from 'antd'
import { useAppDispatch, useAppSelector } from 'redux/hoor'

type Props = {
    keyKey: number
}
const LikedsBox = ({ keyKey }: Props) => {
    const artId = keyKey || 0
    const isLiked = useAppSelector((state) => state.articleLikeState[artId])
    const dispatch = useAppDispatch()

    return (
        <Button
            type="text"
            onClick={() =>
                dispatch({
                    type: 'TOGGLE_LIKE',
                    id: keyKey,
                })
            }
            size="large"
            icon={
                isLiked ? (
                    <HeartTwoTone
                        twoToneColor="#eb2f96"
                        className="heartTwoToneClick"
                    />
                ) : (
                    <HeartTwoTone
                        twoToneColor="#eb2f96"
                        className="heartTwoTone"
                    />
                )
            }
        ></Button>
    )
}
export default LikedsBox
