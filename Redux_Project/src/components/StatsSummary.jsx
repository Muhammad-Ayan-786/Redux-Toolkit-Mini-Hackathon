import { Briefcase, User, Award, XCircle } from 'lucide-react'

const StatsSummary = ({ applications }) => {
  const counts = {
    Applied: applications.filter((a) => a.status === 'Applied').length,
    Interview: applications.filter((a) => a.status === 'Interview').length,
    Offer: applications.filter((a) => a.status === 'Offer').length,
    Rejected: applications.filter((a) => a.status === 'Rejected').length
  }

  const stats = [
    { label: 'Applied', value: counts.Applied, color: 'text-indigo-600', bg: 'bg-indigo-600', Icon: Briefcase },
    { label: 'Interviews', value: counts.Interview, color: 'text-amber-600', bg: 'bg-amber-500', Icon: User },
    { label: 'Offers', value: counts.Offer, color: 'text-emerald-600', bg: 'bg-emerald-600', Icon: Award },
    { label: 'Rejected', value: counts.Rejected, color: 'text-red-600', bg: 'bg-red-600', Icon: XCircle },
  ]

  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
      {stats.map((stat) => (
        <div key={stat.label} className="bg-white/80 backdrop-blur-sm rounded-xl border border-white/20 p-4 flex items-center gap-4">
          <div className={`p-3 rounded-lg text-white ${stat.bg} shadow-sm`}>
            <stat.Icon size={18} />
          </div>
          <div>
            <p className={`text-2xl font-bold ${stat.color}`}>{stat.value}</p>
            <p className="text-xs font-medium text-slate-500 uppercase tracking-wide mt-1">{stat.label}</p>
          </div>
        </div>
      ))}
    </div>
  )
}

export default StatsSummary