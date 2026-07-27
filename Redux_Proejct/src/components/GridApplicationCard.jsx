import { Pencil, Trash2 } from 'lucide-react'
import { useDispatch } from 'react-redux'
import defaultCompany from '../assets/default_company.png'
import { openDetailView } from '../store/features/uiSlice'
import { statusBadgeStyles } from '../utils/statusBadgeStyles'
import { useApplicationHandlers } from '../hooks/useApplicationHandlers'

const GridApplicationCard = ({ application }) => {

  const { company, role, status } = application

  const { onEdit, onDelete } = useApplicationHandlers(application)

  const dispatch = useDispatch()

  return (
    <div className="bg-white rounded-xl border border-gray-200 p-5 flex flex-col justify-between hover:shadow-md transition-shadow">

      {/* Short Description */}
      <div>
        {/* Company Logo & Status */}
        <div className="flex items-start justify-between mb-3">
          {/* Company Logo */}
          <div className="w-10 h-10 rounded-lg bg-gray-100 overflow-hidden">
            <img src={defaultCompany} alt={`${company} logo`} className="w-full h-full object-cover rounded-lg" />
          </div>

          {/* Status */}
          <span className={`text-xs font-medium px-2.5 py-1 rounded-full ${statusBadgeStyles[status]}`}>
            {status.toUpperCase()}
          </span>
        </div>

        {/* Company & Role */}
        <h3 className="text-base font-semibold text-gray-900">{company}</h3>
        <p className="text-sm text-gray-500">{role}</p>
      </div>


      {/* Details & Actions */}
      <div className="mt-4 pt-3 border-t border-gray-100 flex items-center justify-between">

        {/* View Details */}
        <button
          onClick={() => dispatch(openDetailView(application))}
          className="text-xs font-medium text-indigo-600 hover:text-indigo-700"
        >
          View Details
        </button>

        {/* Edit & Delete */}
        <div className="flex items-center gap-2">
          {/* Edit */}
          <button
            onClick={onEdit}
            className="p-1.5 rounded-md text-gray-400 hover:text-indigo-600 hover:bg-indigo-50 transition-colors"
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

export default GridApplicationCard