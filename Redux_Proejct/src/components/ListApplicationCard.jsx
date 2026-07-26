import { useDispatch } from 'react-redux'
import defaultCompany from '../assets/default_company.png'
import { Pencil, Trash2 } from 'lucide-react'
import { openDetailView } from '../store/features/uiSlice'
import { formatDate } from '../utils/formatDate'
import { statusBadgeStyles } from '../utils/statusBadgeStyles'
import { useApplicationHandlers } from '../hooks/useApplicationHandlers'


const ListApplicationCard = ({ application }) => {

  const { company, role, status, dateApplied } = application

  const { onEdit, onDelete } = useApplicationHandlers(application)

  const dispatch = useDispatch()

  return (
    <div
      className="flex items-center justify-between rounded-xl border border-gray-200 bg-white p-5 hover:shadow-md transition-shadow"
    >
      {/* Left */}
      <div className="flex items-center gap-4 min-w-0">
        {/* Company Logo */}
        <div className="h-12 w-12 overflow-hidden rounded-lg bg-gray-100 shrink-0">
          <img
            src={defaultCompany}
            alt={`${company} logo`}
            className="h-full w-full object-cover"
          />
        </div>

        {/* Company & Role */}
        <div className="min-w-0">
          <h3 className="truncate text-base font-semibold text-gray-900">
            {company}
          </h3>
          <p className="truncate text-sm text-gray-500">
            {role}
          </p>
        </div>
      </div>

      {/* Right */}
      <div className="flex items-center gap-6">
        {/* Date */}
        <span className="text-sm text-gray-500">{formatDate(dateApplied)}</span>

        {/* Status */}
        <span className={`rounded-full px-3 py-1 text-xs font-medium ${statusBadgeStyles[status]}`}>
          {status.toUpperCase()}
        </span>

        <div className="flex items-center gap-2">
          {/* View Details */}
          <button
            onClick={() => dispatch(openDetailView(application))}
            className="text-xs font-medium text-indigo-600 hover:text-indigo-700 mr-2"
          >
            View Details
          </button>

          {/* Edit */}
          <button
            onClick={onEdit}
            className="rounded-md p-1.5 text-gray-400 transition-colors hover:bg-indigo-50 hover:text-indigo-600"
          >
            <Pencil size={15} />
          </button>

          {/* Delete */}
          <button
            onClick={() => onDelete(application.id)}
            className="p-1.5 rounded-md text-gray-400 hover:text-red-600 hover:bg-red-50 transition-colors"
          >
            <Trash2 size={15} />
          </button>
        </div>

      </div>
    </div>
  )
}

export default ListApplicationCard