import Card from './Card.jsx'
import { useContext, useState, useEffect } from 'react'
import { DataStore } from '../store/DataStore.jsx'
import Message from './Message.jsx'
import Loading from './Loading.jsx'

const Cardlist = () => {
    const { postList, loading } = useContext(DataStore);

    return (
        <>
            {loading && <Loading></Loading>}
            {!loading && postList.length === 0 && <Message></Message>}
            {!loading && postList.map((post) => <Card key={post.id} post={post}></Card>)}
        </>
    )
}
export default Cardlist;