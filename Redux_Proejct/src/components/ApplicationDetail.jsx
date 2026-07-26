import { useSelector, useDispatch } from 'react-redux'
import { closeDetailView } from '../store/features/uiSlice'
import { X, Link as LinkIcon, Calendar, StickyNote } from 'lucide-react'
import { formatDate } from '../utils/formatDate'

const statusStyles = {
  Applied: 'bg-indigo-100 text-indigo-700',
  Interview: 'bg-amber-100 text-amber-700',
  Offer: 'bg-emerald-100 text-emerald-700',
  Rejected: 'bg-red-100 text-red-700',
}

const ApplicationDetail = () => {

  const isViewingApp = useSelector((state) => state.ui.isViewingApp)
  const dispatch = useDispatch()

  const { company, role, status, dateApplied, link, notes } = isViewingApp

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/40 px-4 py-8"
      onClick={() => dispatch(closeDetailView())}
    >
      <div
        className="w-full max-w-2xl max-h-[90vh] overflow-y-auto rounded-4xl border border-slate-200/10 bg-slate-50/95 shadow-2xl shadow-slate-900/10"
        style={{ scrollbarWidth: 'none' }}
        onClick={(e) => e.stopPropagation()}
      >

        {/* Header */}
        <div className="border-b border-slate-200/70 bg-white/90 px-6 py-6">
          <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
            {/* Company and Role */}
            <div className="flex items-center gap-4">
              <div className="flex h-14 w-14 items-center justify-center rounded-3xl bg-slate-100 text-slate-700 shadow-sm">
                <Calendar size={24} />
              </div>

              <div>
                <h2 className="text-2xl font-semibold tracking-tight text-slate-900">
                  {company}
                </h2>
                <p className="mt-1 text-sm text-slate-500">{role}</p>
              </div>
            </div>

            {/* Close Button */}
            <button
              onClick={() => dispatch(closeDetailView())}
              aria-label="Close"
              className="inline-flex h-11 w-11 items-center justify-center rounded-2xl border border-slate-200 bg-white text-slate-700 transition cursor-pointer hover:bg-slate-100"
            >
              <X size={20} />
            </button>
          </div>
        </div>

        {/* Content */}
        <div className="grid gap-5 px-6 py-6 sm:grid-cols-3">

          {/* Application Details */}
          <div className="rounded-3xl border border-slate-200 bg-white p-5 shadow-sm sm:col-span-2">
            <div className="flex items-center gap-3 text-slate-600">
              <Calendar size={18} className="text-slate-400" />

              <div>
                <p className="text-xs uppercase tracking-[0.24em] text-slate-500">
                  Applied
                </p>

                <p className="mt-1 text-sm font-semibold text-slate-900">
                  {formatDate(dateApplied)}
                </p>
              </div>
            </div>
          </div>

          {/* Status */}
          <div className="rounded-3xl border border-slate-200 bg-white p-5 shadow-sm sm:col-span-1">
            <p className="text-xs uppercase tracking-[0.24em] text-slate-500">
              Status
            </p>

            <div
              className={`mt-3 inline-flex items-center justify-center rounded-full px-3 py-2 text-xs font-semibold ${statusStyles[status]}`}
            >
              {status?.toUpperCase()}
            </div>
          </div>

          {/* Application Link */}
          <div className="rounded-3xl border border-slate-200 bg-white p-5 shadow-sm sm:col-span-3">
            <div className="flex items-center gap-3 text-slate-600">
              <LinkIcon size={18} className="text-slate-400" />

              <div className="min-w-0 flex-1">
                <p className="text-xs uppercase tracking-[0.24em] text-slate-500">
                  Application Link
                </p>

                {link ? (
                  <a
                    href={link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-1 block truncate text-sm font-semibold text-sky-700 hover:text-sky-800"
                  >
                    {link}
                  </a>
                ) : (
                  <p className="mt-1 text-sm text-slate-500">
                    No link provided
                  </p>
                )}
              </div>
            </div>
          </div>

          {/* Notes */}
          <div className="rounded-3xl border border-slate-200 bg-white p-5 shadow-sm sm:col-span-3">
            <div className="mb-3 flex items-center gap-3 text-slate-600">
              <StickyNote size={18} className="text-slate-400" />

              <p className="text-xs uppercase tracking-[0.24em] text-slate-500">
                Notes
              </p>
            </div>

            <p className="min-h-30 rounded-2xl bg-slate-50 px-4 py-4 text-sm leading-6 whitespace-pre-wrap text-slate-700">
              {notes || 'No notes available for this application.'}
            </p>
          </div>

        </div>

        {/* Close Button */}
        <div className="flex items-center justify-end gap-3 border-t border-slate-200/70 bg-slate-50 px-6 py-4">
          <button
            onClick={() => dispatch(closeDetailView())}
            className="cursor-pointer rounded-2xl bg-slate-800 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-slate-700"
          >
            Close
          </button>
        </div>

      </div>
    </div>
  )
}

export default ApplicationDetail