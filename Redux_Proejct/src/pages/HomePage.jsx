import { useState } from 'react'
import { GridIcon, Plus } from 'lucide-react'
import { useDispatch, useSelector } from 'react-redux'
import StatsSummary from '../components/StatsSummary'
import ApplicationForm from '../components/ApplicationForm'
import { openAddForm } from '../store/features/uiSlice'
import ApplicationDetail from '../components/ApplicationDetail'
import GridApplicationCard from '../components/GridApplicationCard'
import ListApplicationCard from '../components/ListApplicationCard'

const HomePage = () => {

  const [view, setView] = useState('grid')

  const dispatch = useDispatch()
  const applicationsArr = useSelector(state => state.applications.applicationsArr)
  const { isFormOpen, isEditing, isViewingApp, searchQuery } = useSelector(state => state.ui)

  const filteredApplications = applicationsArr.filter(app => (
    app.company.toLowerCase().includes(searchQuery.toLowerCase()) ||
    app.role.toLowerCase().includes(searchQuery.toLowerCase()) ||
    app.status.toLowerCase().includes(searchQuery.toLowerCase())
  ))

  return (
    <main className="min-h-screen bg-slate-50 px-4 py-6 sm:px-6 lg:px-8">

      {/* Application Form Toggle */}
      {(isFormOpen || isEditing) && <ApplicationForm />}
      {isViewingApp && <ApplicationDetail />}


      <div className="mx-auto max-w-7xl space-y-6">

        {/* Application Dashboard */}
        <section className="rounded-4xl border border-slate-200/80 bg-white/85 p-6 shadow-[0_18px_45px_-32px_rgba(15,23,42,0.35)] backdrop-blur-xl">
          <div className="flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between">

            {/* Heading */}
            <div className="space-y-3">
              <h1 className="text-3xl font-semibold tracking-tight text-slate-900">
                Application Dashboard
              </h1>
              <p className="max-w-2xl text-sm leading-6 text-slate-600">
                Welcome back. You have <span className="font-semibold text-slate-900">{applicationsArr.length}</span> action job pursuits.
              </p>
            </div>

            {/* View Toggle */}
            <div className="inline-flex flex-wrap gap-3 rounded-3xl bg-slate-100 p-2.5 shadow-sm">
              <button
                onClick={() => setView('grid')}
                className={`rounded-full px-4 py-2 text-sm font-semibold transition ${view === 'grid'
                  ? 'bg-white text-sky-700 shadow-sm'
                  : 'text-slate-700 hover:bg-slate-50'
                  }`}
              >
                Grid View
              </button>

              <button
                onClick={() => setView('list')}
                className={`rounded-full px-4 py-2 text-sm font-semibold transition ${view === 'list'
                  ? 'bg-white text-sky-700 shadow-sm'
                  : 'text-slate-700 hover:bg-slate-50'
                  }`}
              >
                List View
              </button>
            </div>
          </div>
        </section>


        {/* Stats Summary */}
        <StatsSummary applications={applicationsArr} />


        {/* Applications Cards */}
        <section className={view === 'grid'
          ? 'grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'
          : 'flex flex-col gap-4'
        }>

          {
            filteredApplications.length === 0 ? (
              // Empty State
              <div className="rounded-3xl border border-dashed border-slate-300 bg-white/70 p-10 text-center shadow-sm">
                <h2 className="text-xl font-semibold text-slate-900">No applications yet</h2>
                <p className="mt-2 text-sm text-slate-500">Add your first application to track interviews, offers, and next steps.</p>
              </div>
            ) : (
              // Filtered Applications
              filteredApplications.map((app) => (
                view === 'grid' ? (
                  <GridApplicationCard
                    key={app.id}
                    application={app}
                    view={view}
                  />
                ) : (
                  <ListApplicationCard
                    key={app.id}
                    application={app}
                    view={view}
                  />
                )
              ))
            )
          }

          {/* Add Application */}
          <div
            onClick={() => dispatch(openAddForm())}
            className="group cursor-pointer rounded-3xl border-2 border-dashed border-slate-300 bg-slate-50 p-6 text-center transition hover:border-sky-400 hover:shadow-xl hover:shadow-sky-400/30 hover:text-sky-600"
          >
            <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-3xl bg-slate-100 text-slate-700 transition group-hover:bg-sky-600 group-hover:text-white">
              <Plus size={24} />
            </div>
            <p className="mt-4 text-sm font-semibold">Add Application</p>
            <p className="mt-1 text-xs text-slate-500">Track a new opportunity and stay organized.</p>
          </div>

        </section>

      </div>
    </main>
  )
}

export default HomePage