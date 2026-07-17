import React from 'react'
import { useParams } from 'react-router'
import { useProgrammes } from '@/context/ProgrammeContext'

function FacultyProgrammes() {
  const { faculty } = useParams();
  const { programmes, loading } = useProgrammes()

  if(loading){
    return(
        <div className='text-center py-20'>
            Loading Programmes....
        </div>
    );
  }

  
  return (
    <div>

    </div>
  )
}

export default FacultyProgrammes