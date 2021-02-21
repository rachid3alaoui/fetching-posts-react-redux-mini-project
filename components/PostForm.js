import React, { useState } from 'react'
import { createPost } from '../actions/postActions'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

const PostForm = ({ createPost }) => {
  const [formData, setFormData] = useState({ title: '', body: '' })

  const handleChange = event => {
    setFormData({ ...formData, [event.target.name]: event.target.value })
  }

  const handleSubmit = event => {
    event.preventDefault()
    const { title, body } = formData
    const postData = { title, body }
    createPost(postData)
  }

  return (
    <>
      <h1>Add Post</h1>
      <form className='form' onSubmit={event => handleSubmit(event)}>
        <div>
          <label>Title : </label>
          <br />
          <input
            type='text'
            name='title'
            value={formData.title}
            onChange={e => handleChange(e)}
          />
        </div>
        <div>
          <label>Body : </label>
          <br />
          <textarea
            type='text'
            name='body'
            value={formData.body}
            onChange={e => handleChange(e)}
          />
        </div>
        <button type='submit'>Submit</button>
      </form>
    </>
  )
}

PostForm.propTypes = {
  createPost: PropTypes.func.isRequired,
}

export default connect(null, { createPost })(PostForm)
