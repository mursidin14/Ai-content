import AppLayout from '@/Layouts/AppLayout'
import React from 'react'

export default function Dashboard() {
  return (
    <div>this is Dashboard admin</div>
  )
}

Dashboard.layout = (page) => <AppLayout children={page} title={page.props.page_settings.title} />
