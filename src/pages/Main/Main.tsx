import { useGetCommentsQuery} from "../../store/api/commentsApi";
import {useDispatch} from "react-redux";
import {Header} from "./components/Header";
import {setCommentAuthor} from "../../store/slices/commentsSlice";
import {useState} from "react";

export const Main = () => {
    const [value, setValue] = useState('')
    const dispatch = useDispatch()
    const {data, isLoading} = useGetCommentsQuery()

    const clickHandler = () => {
        dispatch(setCommentAuthor('hello'))
    }

    const handlerPopup = () => {
        alert('popup')
    }
    return <>
        <Header value={value} setValue={setValue}/>
        <h1 onClick={clickHandler}>Main page</h1>
        {isLoading ? 'Загрузка' : data?.map(el => (
            <div onClick={handlerPopup} key={el.id}>
                <div>{el.body}</div>
            </div>
        ))}
    </>
}