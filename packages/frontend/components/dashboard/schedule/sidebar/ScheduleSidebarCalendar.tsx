'use client'

import { Calendar } from '@/components/ui/calendar'
import { useState } from 'react'

export default function ScheduleSidebarCalendar() {
  const [date, setDate] = useState<Date>()
  return <Calendar mode="single" selected={date} onSelect={setDate} />
}
