import React from 'react'
import { SingleComments } from './SingleComments'

export const Comments = ({props}) => {
  return (
    <div>
        {
           props.length>0? props.map(el=><SingleComments {...el} /> ) : "check comments"
        }
       
    </div>
  )
}
