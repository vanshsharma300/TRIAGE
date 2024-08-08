import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import ManualQues from './ManualQues';

const NewQuestionnaires = () => {


  const[isManual, setIsManual]=useState(false);
  return (
    <>
    
     <div className=''>
    
       <div className='flex justify-between py-4 px-4 shadow-lg'>
        <h1 className='text-xl font-semibold italic text-cyan-500'>Create new Questionnaire</h1>
        <Link to ="/ListofQuestionnaires" className='text-violet-600 hover:underline text-xl font-medium'> List of Questionnaires</Link>
       </div>
       <div className='mt-4 flex flex-col gap-5'>
        <p className='text-center text-xl '>Choose a mode to create a new Questionnaire</p>
        <div className='flex justify-center gap-6'>
        <button onClick={()=>setIsManual(!isManual)} className='border-2 w-24 bg-gray-400 py-2 border-black rounded-lg text-center '>Manual</button>
        <Link className='border-2 w-24 bg-gray-400 py-2 border-black rounded-lg text-center '>Auto</Link>
        </div>
      
       </div>
       <div className='mt-4'>
     {isManual &&  <ManualQues />}
       </div>
     </div>
    </>
   
  )
}

export default NewQuestionnaires;
