import React, { useState } from 'react' // Import React and useState
import { Check, Layout } from 'lucide-react' // Import the necessary icons

const TemplateSelector = ({ selectTemplate, onChange }) => {
    const [isOpen, setIsOpen] = useState(false)

    const templates = [
        { id: 'classic', name: 'Classic', preview:'A clean, traditional resume format with clear sections and a professional layout.' },
        { id: 'modern', name: 'Modern', preview:'A sleek, contemporary resume design with bold typography and a clean layout.' },
        { id: 'minimal', name: 'Minimal', preview:'A simple and elegant resume format with a focus on content and whitespace.' },
        { id: 'minimal-image', name: 'Minimal with Image', preview:'A modern resume design that includes a profile picture for a personal touch.' },
    ]
  return (
    <div className=' relative'>
        <button onClick={()=>setIsOpen(!isOpen)} className=' flex items-center gap-1 text-sm text-blue-600 bg-gradient-to-br from-blue-50 to-blue-100 ring-blue-300 hover:ring transition-all px-3 py-2 rounded-lg '>
            <Layout size={14}/> <span className=' max-sm:hidden'>Template</span>
        </button>
        {isOpen &&(
            <div className=' absolute z-10 mt-2 top-full space-y-3 p-3  w-xs rounded-md border border-gray-200 bg-white shadow-sm'>
                {templates.map((template) => (
                    <div key={template.id} onClick={()=>{onChange(template.id);setIsOpen(false)}} className={` relative p-3 border rounded-md cursor-pointer transition-all ${selectTemplate === template.id ? "border-blue-400 bg-blue-100"
                        : "border-gray-300 hover:border-gray-400 hover:bg-gray-100"
                     }`} > 
                    {
                        selectTemplate === template.id && (
                            <div className=' absolute top-2 right-2'>
                                <div className=' size-5 bg-blue-400 rounded-full flex items-center justify-center '>
                                    <Check className=' w-3 h-3 text-white' />
                                </div>
                            </div>
                        )
                    }
                    <div className=' space-y-1 '>
                        <h4 className=' font-medium text-gray-800'>{template.name}</h4>
                        <div className=' text-xs text-gray-500 mt-2 p-2 bg-blue-50 rounded italic'>{template.preview}</div>
                    </div>
                    </div>
                ))}
            </div>
        )}
    </div>
  )
}

export default TemplateSelector