import React from "react"
import List from "./List"
import Form from "./Form"
import Post from "./Post"

const App = () => (
    <div>
        <h2>Articles</h2>
            <List />
        <div>
            <h2>Add a new Article</h2>
            <Form />
        </div>
        <div>
            <h2>API Post</h2>
            <Post />
        </div>
    </div>
)

export default App