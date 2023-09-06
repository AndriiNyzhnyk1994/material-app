import React from 'react'


const renders = {
  count1: 0,
  count2: 0,
}

export default React.memo(function Count({ id, value }) {
  console.warn(`Count${id} render: ${++renders[`count${id}`]}`)

  return (
    <div>
      <h1>{value}</h1>
    </div>
  )
})
