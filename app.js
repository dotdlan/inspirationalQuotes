console.log('hello')


class App extends React.Component {
    state = {
        posts:[]
    }

    componentDidMount = () => {
        axios.get('/posts').then(
            (response) => {
                this.setState({
                    posts:response.data
                })
            }
        )
    }

    createPost = (event) => {
        event.preventDefault()
        console.log(this.state)
        axios.post(
            '/posts',
            {
                name:this.state.newPostName,
                image:this.state.newPostImage,
                body:this.state.newPostPost,
            }
        ).then(
            (response) => {
                console.log(response);

                this.setState({
                    posts:response.data
                })
                console.log(this.state.posts)
            }
        )
    }

    changeNewPostImage = (event) => {
        this.setState({
            newPostImage:event.target.value
        })
        console.log(this)
    }

    changeNewPostName = (event) => {
        this.setState({
            newPostName:event.target.value
        })
    }

    changeNewPostPost = (event) => {
        this.setState({
            newPostPost:event.target.value
        })
    }

    render = () => {
        return <div>
        <h1 className="mt-5">Inspirational Quote Generator</h1>
        <div className="card mt-4">
        <h2 className= "ml-4 mr-4 mt-4 mb-4" >Create a quote</h2>
        <form onSubmit={this.createPost}>
          <div className="form-group ml-4 mr-4">
            <input className="form-control" onKeyUp={this.changeNewPostName} type="text" placeholder="name" /><br/>
            <input className="form-control" onKeyUp={this.changeNewPostPost} type="text" placeholder="text.." /><br/>
            <input className="form-control" onKeyUp={this.changeNewPostImage} type="url" placeholder="http://" /><br/>
            <input type="submit" value="Create post" />
            </div>
            </form>
            </div>
            <h2 className="mt-4"> Quotes: </h2>
        <ul>
        {
            this.state.posts.map(
                (person) => {
                    return <div class="col mb-4 ">
                        <div class="card text-white bg-dark text-center h-100">
                            <img class="card-img-top h-50" src={person.image} />
                            <div class="card-body">
                            <h5 class="card-title">{person.name}</h5>
                            <p class="card-text">{person.body}</p>
                            <a href="#">
                                <button type="button" name="button" class="btn btn-primary mb-4 mt-5 bg-info">Edit</button>
                            </a>

                            <form action="#" method="POST">
                                <input class="btn btn-primary bg-info" type="submit" value="DELETE"/>
                            </form>

                        </div>
                    </div>

                </div>
                }
            )
        }
        </ul>
        </div>
    }
}

ReactDOM.render(
<App></App>,
document.getElementById('main-body')
)
