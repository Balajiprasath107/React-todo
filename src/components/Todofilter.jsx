import React from 'react'

function Todofilter({ filterstatus, setfilterstatus }) {
  return (
    <div className='todofilter'>
      <div className='displaytitle'>My todo</div>

      <div className='status'>
        <label htmlFor="statusfilter">Status Filter : </label>
        <select name="statusfilter" id="statusfilter" className={filterstatus} onChange={(e) => setfilterstatus(e.target.value)}>
          <option value="All">All</option>
          <option value="Completed">Completed</option>
          <option value="Not-Completed">Not Completed</option>
        </select>
      </div>
    </div>
  )
}

export default Todofilter