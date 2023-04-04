import React from 'react'

function Categories({filterItems, categories}) {
  return (
    <div className="btn-container">
    {categories.map((category, index) => {
     return (
      <button
      className='filter-btn'
      type="button"
      key={index}
      onClick={() => filterItems(category)}>
      {category}

      </button>
     )
    })}
    </div>
  )
}

export default Categories