import { useContext, useRef } from 'react'
import { DataStore } from '../store/DataStore'

const Card = ({ post }) => {
    const { deletePost } = useContext(DataStore)
    let uID = useRef(1)
    return (
        <>
            <div className=" card cardedit" style={{ width: "18rem" }}>
                <span><img className="profilepic" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTyZdRUcw2bAp1YbSK1VNSNt015HTTodO7YSNj-k7e73g&s" alt="PFP" /></span>
                <div className="card-body">
                    <h5 className="card-title">{post.id}</h5>
                    <span onClick={() => deletePost(post.id)} className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger cursor">
                        DEL</span>
                    <p className="cardtext">{post.body}</p>
                    {post.tags.map((tag) => {
                        uID.current = +1;
                        < span key={uID} className="badge text-bg-warning spanedit">{tag}</span>
                    })}
                </div>
            </div>

        </>
    )
}
export default Card;