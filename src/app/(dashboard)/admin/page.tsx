import React from 'react'

const AdminPage = () => {
  return (
    <div className='p-4 flex gap-4 flex-col md:flex-row'>
      {/* LEFT */}

      <div className='w-full lg:h-2/3'>Left </div>

      {/* RIGHT */}
      <div className=' w-full lg:h-1/3'>Right</div>
    </div>
  )
}

export default AdminPage
