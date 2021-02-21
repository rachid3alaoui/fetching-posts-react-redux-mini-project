import React, { useEffect } from 'react'
import PropTypes from 'prop-types'
import { fetchPosts } from '../actions/postActions'
import { connect } from 'react-redux'

const Posts = ({ fetchPosts, posts, newPost }) => {
  useEffect(() => {
    fetchPosts()
  }, [])
  const postItems = posts.map(post => (
    <div key={post.id} className='post'>
      <h3>{post.title}</h3>
      <p>{post.body}</p>
    </div>
  ))

  return (
    <div>
      <h1>Posts</h1>
      {Object.keys(newPost).length !== 0 ? (
        <div key={newPost.id} className='post'>
          <h3>{newPost.title}</h3>
          <p>{newPost.body}</p>
        </div>
      ) : (
        <div key={newPost.id} className='post'>
          There is no new posts
        </div>
      )}
      {postItems}
    </div>
  )
}

function mapStateToProps(state) {
  return {
    posts: state.posts.items,
    newPost: state.posts.item,
  }
}

Posts.propTypes = {
  fetchPosts: PropTypes.func.isRequired,
  posts: PropTypes.array.isRequired,
  newPost: PropTypes.object.isRequired,
}

export default connect(mapStateToProps, { fetchPosts })(Posts)
