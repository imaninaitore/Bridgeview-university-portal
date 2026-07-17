import React from 'react'
import { useProgrammes } from '@/context/ProgrammeContext'
function Progammes() {
    const { programmes, loading} = useProgrammes();
  return (
    <div>Progammes</div>
  )
}

export default Progammes