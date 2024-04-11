import { Form, redirect } from 'react-router-dom'
const Forms = () => {
    return (

        <>
            <Form method="POST" action="">
                <div className="mb-3">
                    <label htmlFor="name" className="form-label">YourName</label>
                    <input name="userId" type="number" className="form-control" id="name" aria-describedby="emailHelp" required /></div>
                <div className="mb-3 ">
                    <label htmlFor="comment" className="form-label">Write Something</label>
                    <textarea name="body" row="5" type="text" className="form-control commentinput" id="comment" required />
                </div>

                <div className="mb-3">
                    <label htmlFor="tags" className="form-label">#tags</label>
                    <input name="tags" type="text" className="form-control" id="tags" aria-describedby="emailHelp" />
                </div>

                <button type="submit" className="btn btn-primary">Submit</button>
            </Form>
        </>
    )

}

export default Forms;

export async function ram(data) {
    console.log('data called')
    const formData = await data.request.formData()
    const postData = Object.fromEntries(formData)
    postData.tags = postData.tags.split(" ")


    fetch('https://dummyjson.com/posts/add', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(postData)
    })
        .then(res => res.json())
        .then(data => console.log(data))
    addPost(data);


    return redirect('/')

}
