import React from 'react'

interface TopLabelAndInputType {
  label: string,
  type?: string,
  id?: string,
  rest?: Array<string>,
}

const TopLabelAndInput = ({label, type= 'text', id, ...rest}: TopLabelAndInputType) => {
  return (
    <div className="mb-6 pt-3 rounded bg-gray-200" {...rest}>
      <label className="block text-gray-700 text-sm font-bold mb-2 ml-3" htmlFor={id ? type : id}>{label}</label>
      <input type={type} id={id ? type : id} className="bg-gray-200 rounded w-full text-gray-700 focus:outline-none border-b-4 border-gray-300 focus:border-purple-600 transition duration-500 px-3 pb-3" />
    </div>
  )
}

export default TopLabelAndInput