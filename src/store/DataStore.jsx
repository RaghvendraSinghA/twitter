import { createContext, useReducer, useState, useEffect } from 'react'

export const DataStore = createContext({
    loading: false,
    postList: [],
    addPost: () => { },
    deletePost: () => { },
    setArr: () => { },
    arr: []
})



const reducerfn = (postList, action) => {
    let newList = postList
    if (action.type === 'ADD') {
        newList = [action.payload, ...newList]
    }
    else if (action.type === 'DEL') {
        newList = newList.filter((post) => post.id !== action.payload.id)
    }
    else if (action.type === 'ADD_POST') {
        newList = action.payload
    }

    return newList
}


const DataStoreProvider = ({ children }) => {
    const [postList, dispatchpostList] = useReducer(reducerfn, [])
    const [arr, setArr] = useState([]);

    const addPost = (post) => {
        dispatchpostList({
            type: 'ADD', payload: post
        })
    }
    const deletePost = (id) => {
        dispatchpostList({ type: 'DEL', payload: { id } })

    }

    const addPosts = (post) => {
        const a = {
            type: 'ADD_POST',
            payload: post

        }
        dispatchpostList(a)

    }

    const [loading, setLoading] = useState(false);

    useEffect(() => {
        const controller = new AbortController()
        const signal = controller.signal
        setLoading(true);
        fetch('https://dummyjson.com/posts', { signal })
            .then(res => res.json())
            .then((data) => {
                addPosts(data.posts);
                setLoading(false);
            })

        return () => {
            controller.abort()
        }
    }, [])

    return (
        <DataStore.Provider value={{
            loading,
            postList,
            addPost,
            deletePost,
            setArr,
            arr
        }}>
            {children}

        </DataStore.Provider>
    )

}
export default DataStoreProvider