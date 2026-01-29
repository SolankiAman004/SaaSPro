'use client'

import { useState } from 'react'
import { 
  BarChart3, Users, DollarSign, TrendingUp, 
  Calendar, Settings, Bell, Search,
  Download, Filter, MoreVertical
} from 'lucide-react'

const Dashboard = () => {
  const [activeTab, setActiveTab] = useState('overview')

  const stats = [
    { title: 'Total Revenue', value: '$54,231', change: '+12.5%', icon: DollarSign, color: 'text-green-600', bgColor: 'bg-green-100' },
    { title: 'Active Users', value: '2,431', change: '+8.2%', icon: Users, color: 'text-blue-600', bgColor: 'bg-blue-100' },
    { title: 'Conversion Rate', value: '3.2%', change: '+2.1%', icon: TrendingUp, color: 'text-purple-600', bgColor: 'bg-purple-100' },
    { title: 'Avg. Session', value: '4m 32s', change: '-0.5%', icon: BarChart3, color: 'text-orange-600', bgColor: 'bg-orange-100' },
  ]

  const recentActivities = [
    { user: 'John Doe', action: 'Upgraded to Pro plan', time: '10 min ago' },
    { user: 'Sarah Smith', action: 'Added team member', time: '25 min ago' },
    { user: 'Mike Johnson', action: 'Downloaded report', time: '1 hour ago' },
    { user: 'Emma Wilson', action: 'Created new project', time: '2 hours ago' },
  ]

  const projects = [
    { name: 'Website Redesign', progress: 75, status: 'In Progress', team: 5 },
    { name: 'Mobile App', progress: 90, status: 'Almost Done', team: 8 },
    { name: 'Marketing Campaign', progress: 45, status: 'In Progress', team: 3 },
    { name: 'Q4 Analysis', progress: 100, status: 'Completed', team: 4 },
  ]

  return (
    <div className="min-h-screen bg-gray-50 pt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-center justify-between mb-8">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">Dashboard</h1>
            <p className="text-gray-600 mt-2">Welcome back! Here's what's happening with your business today.</p>
          </div>
          
          <div className="flex items-center space-x-4 mt-4 md:mt-0">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
              <input
                type="text"
                placeholder="Search..."
                className="pl-10 pr-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none"
              />
            </div>
            <button className="p-2 hover:bg-gray-100 rounded-lg">
              <Bell className="h-6 w-6 text-gray-600" />
            </button>
            <button className="p-2 hover:bg-gray-100 rounded-lg">
              <Settings className="h-6 w-6 text-gray-600" />
            </button>
          </div>
        </div>

        {/* Tabs */}
        <div className="flex space-x-2 border-b mb-8">
          {['overview', 'analytics', 'reports', 'team'].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-4 py-2 font-medium capitalize ${
                activeTab === tab
                  ? 'text-blue-600 border-b-2 border-blue-600'
                  : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {stats.map((stat, index) => (
            <div key={index} className="bg-white p-6 rounded-xl border shadow-sm">
              <div className="flex items-center justify-between mb-4">
                <div className={`p-3 rounded-lg ${stat.bgColor}`}>
                  <stat.icon className={`h-6 w-6 ${stat.color}`} />
                </div>
                <span className="text-sm font-medium text-green-600">{stat.change}</span>
              </div>
              <h3 className="text-2xl font-bold text-gray-900">{stat.value}</h3>
              <p className="text-gray-600">{stat.title}</p>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Chart Section */}
          <div className="lg:col-span-2">
            <div className="bg-white p-6 rounded-xl border shadow-sm mb-8">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-xl font-bold text-gray-900">Revenue Overview</h2>
                <div className="flex items-center space-x-2">
                  <button className="flex items-center px-3 py-2 border rounded-lg hover:bg-gray-50">
                    <Filter className="h-4 w-4 mr-2" />
                    Filter
                  </button>
                  <button className="flex items-center px-3 py-2 border rounded-lg hover:bg-gray-50">
                    <Download className="h-4 w-4 mr-2" />
                    Export
                  </button>
                </div>
              </div>
              
              {/* Simple Chart - Replace with actual chart library */}
              <div className="h-64 bg-gradient-to-b from-blue-50 to-white rounded-lg p-4">
                <div className="h-full flex items-end space-x-2">
                  {[40, 60, 80, 65, 90, 70, 85].map((height, index) => (
                    <div
                      key={index}
                      className="flex-1 bg-gradient-to-t from-blue-500 to-blue-300 rounded-t-lg"
                      style={{ height: `${height}%` }}
                    />
                  ))}
                </div>
              </div>
            </div>

            {/* Projects */}
            <div className="bg-white p-6 rounded-xl border shadow-sm">
              <h2 className="text-xl font-bold text-gray-900 mb-6">Recent Projects</h2>
              <div className="space-y-4">
                {projects.map((project, index) => (
                  <div key={index} className="border-b pb-4 last:border-0">
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="font-medium text-gray-900">{project.name}</h3>
                      <span className={`px-2 py-1 rounded text-sm ${
                        project.status === 'Completed' ? 'bg-green-100 text-green-800' :
                        project.status === 'Almost Done' ? 'bg-blue-100 text-blue-800' :
                        'bg-yellow-100 text-yellow-800'
                      }`}>
                        {project.status}
                      </span>
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="flex-1 mr-4">
                        <div className="w-full bg-gray-200 rounded-full h-2">
                          <div 
                            className="bg-blue-600 h-2 rounded-full" 
                            style={{ width: `${project.progress}%` }}
                          />
                        </div>
                      </div>
                      <span className="text-sm text-gray-600">{project.progress}%</span>
                    </div>
                    <div className="flex items-center justify-between mt-2">
                      <div className="flex items-center">
                        <Users className="h-4 w-4 text-gray-400 mr-1" />
                        <span className="text-sm text-gray-600">{project.team} members</span>
                      </div>
                      <button className="p-1 hover:bg-gray-100 rounded">
                        <MoreVertical className="h-5 w-5 text-gray-400" />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-8">
            {/* Recent Activity */}
            <div className="bg-white p-6 rounded-xl border shadow-sm">
              <h2 className="text-xl font-bold text-gray-900 mb-6">Recent Activity</h2>
              <div className="space-y-4">
                {recentActivities.map((activity, index) => (
                  <div key={index} className="flex items-start">
                    <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center mr-3">
                      <Users className="h-4 w-4 text-blue-600" />
                    </div>
                    <div className="flex-1">
                      <p className="text-gray-900">
                        <span className="font-medium">{activity.user}</span> {activity.action}
                      </p>
                      <p className="text-sm text-gray-500">{activity.time}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Calendar */}
            <div className="bg-white p-6 rounded-xl border shadow-sm">
              <h2 className="text-xl font-bold text-gray-900 mb-6">Upcoming Events</h2>
              <div className="space-y-4">
                {[
                  { title: 'Team Meeting', time: '10:00 AM', date: 'Today' },
                  { title: 'Client Demo', time: '2:00 PM', date: 'Tomorrow' },
                  { title: 'Product Launch', time: 'All Day', date: 'Dec 15' },
                ].map((event, index) => (
                  <div key={index} className="flex items-center p-3 hover:bg-gray-50 rounded-lg">
                    <div className="w-12 h-12 bg-blue-50 rounded-lg flex flex-col items-center justify-center mr-4">
                      <Calendar className="h-5 w-5 text-blue-600 mb-1" />
                      <span className="text-xs text-gray-600">{event.date}</span>
                    </div>
                    <div>
                      <h3 className="font-medium text-gray-900">{event.title}</h3>
                      <p className="text-sm text-gray-600">{event.time}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Quick Actions */}
            <div className="bg-gradient-to-br from-blue-600 to-purple-600 p-6 rounded-xl text-white">
              <h2 className="text-xl font-bold mb-4">Quick Actions</h2>
              <div className="space-y-3">
                <button className="w-full bg-white/20 hover:bg-white/30 text-white py-3 rounded-lg transition-colors">
                  Create New Project
                </button>
                <button className="w-full bg-white/20 hover:bg-white/30 text-white py-3 rounded-lg transition-colors">
                  Generate Report
                </button>
                <button className="w-full bg-white/20 hover:bg-white/30 text-white py-3 rounded-lg transition-colors">
                  Invite Team Member
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Dashboard