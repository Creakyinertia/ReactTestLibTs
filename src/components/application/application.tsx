import React from 'react'

export const Application = () => {
  return (
    <>
        <div>
            <label htmlFor='name'>Name</label>
            <input id='name' type='text' placeholder='name' />
        </div>
        <p>All fields are mandatory</p>
        <div>
            <label htmlFor='desc'>description</label>
            <textarea id='desc'/>
        </div>
        <div data-testId='custom'>hello</div>
        <div>
            <label htmlFor='job-location'>job-location</label>
            <select id='job-location'>
                <option value='New York'>New York</option>
                <option value='Los Angeles'>Los Angeles</option>
                <option value='Chicago'>Chicago</option>
            </select>
        </div>
        <div>
            <input type='checkbox' id='terms'/>Accept the terms and conditions
        </div>
        <button type='submit'>Submit</button>
    </>
  )
}
