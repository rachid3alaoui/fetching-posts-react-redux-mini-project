import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'

import Posts from './components/Posts'
import PostForm from './components/PostForm'
import { Provider } from 'react-redux'
import { store } from './store'

const App = () => {
  return (
    <Provider store={store}>
      <div className='App'>
        <PostForm />
        <hr />
        <Posts />
      </div>
    </Provider>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))
