import { useGetCommentsQuery} from "../../store/api/commentsApi";
import {useDispatch} from "react-redux";
import {Header} from "./components/Header";
import {setCommentAuthor} from "../../store/slices/commentsSlice";
import {useState} from "react";

export const Main = () => {
    const [value, setValue] = useState('')
    const dispatch = useDispatch()
    const {data, isLoading, isFetching, isError, error} = useGetCommentsQuery()

    const clickHandler = () => {
        dispatch(setCommentAuthor('hello'))
    }
    if(isLoading) {
        return 'Loading...'
    }
    return <>
        <Header value={value} setValue={setValue}/>
        <h1 onClick={clickHandler}>Main page</h1>
        {!data ? 'Загрузка' : data.map(el => (
            <div key={el.id}>
                <div>{el.body}</div>
            </div>
        ))}
    </>
}