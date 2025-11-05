import { Sparkle } from 'lucide-react'
import React from 'react'

const ProfessionalSummaryForm = ({data, onChange, setResumeData}) => {
  return (
    <div className='space-y-4'>
         <div className=' flex items-center justify-between'> 
            <div> 
                <h3 className='flex items-center gap-2 text-lg font-semibold text-gray-900'>Professional Summary</h3>
                <p className='text-sm text-gray-500'>Add summary for your professional experience</p>
            </div>
            <button className='flex items-center gap-2 px-3 py-1 text-sm bg-orange-100 text-orange-700 rounded hover:bg-orange-200 transition-colors disabled:opacity-50'>
                <Sparkle className=' size-5 text-orange-500'/>AI Enchance
            </button>
         </div>


         <div className=' mt-6'>
            <textarea rows={7} value={data || ""} onChange={(e)=>onChange(e.target.value)} className='w-full p-3 px-4 mt-2 border text-sm border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 outline-none transition-colors resize-none'  placeholder='Write a Compelling Professional Summary that highlights your key strenghts & career objective...'/>
                <p className=' text-xs text-gray-500 mx-auto max-w-4/5 text-center'>Tip: Keep it concise and focused on your most relevant skills and achievements.</p>
         </div>
         </div>
  )
}

export default ProfessionalSummaryForm