import { clearHistory } from '@/actions'
import React from 'react'
import { useDispatch } from 'react-redux'
import { Button } from './components'

export const ClearHistoryButton = () => {
  const dispatch = useDispatch()
  return (
    <Button onClick={() => dispatch(clearHistory())}>Clear All History</Button>
  )
}