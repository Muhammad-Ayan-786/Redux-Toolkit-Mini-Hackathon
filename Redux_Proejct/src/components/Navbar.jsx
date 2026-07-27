import { LayoutGrid, Search, Plus, LogOut, Sparkles } from 'lucide-react'
import { useDispatch, useSelector } from 'react-redux'
import { logoutUser } from '../store/features/authSlice'
import { toast } from 'react-hot-toast'
import { openAddForm, setSearchQuery } from '../store/features/uiSlice'

const Navbar = () => {
  const user = useSelector((state) => state.authentication.loggedInUser)
  const searchQuery = useSelector((state) => state.ui.searchQuery)
  const displayName = user?.name || 'User'

  const dispatch = useDispatch()

  const logout = () => {
    dispatch(logoutUser())
    toast.success('Logout successful')
  }

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200/70 bg-white/70 px-4 py-3 shadow-[0_20px_45px_-25px_rgba(15,23,42,0.4)] backdrop-blur-2xl supports-backdrop-filter:bg-white/60 sm:px-6">

      <div className="flex items-center justify-between gap-2">

        {/* Logo */}
        <div className="flex items-center gap-3">
          <div className="flex h-11 w-11 items-center justify-center rounded-2xl border border-indigo-100 bg-linear-to-br from-indigo-600 via-violet-600 to-fuchsia-500 shadow-[0_10px_24px_-12px_rgba(129,140,248,0.8)]">
            <Sparkles size={18} className="text-white" />
          </div>
          <div className="leading-tight">
            <div className="flex items-center gap-2">
              <p className="text-lg font-semibold tracking-tight text-slate-900">CareerTrack</p>
            </div>
            <p className="text-[10px] font-medium uppercase tracking-[0.3em] text-slate-400">Application</p>
          </div>
        </div>

        {/* Search - desktop and tablet only, inline */}
        <div className="hidden flex-1 max-w-xl md:block bg-">
          <div className="relative">
            <Search size={16} className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => dispatch(setSearchQuery(e.target.value))}
              placeholder="Search applications by company or role ..."
              className="w-full rounded-2xl border border-slate-200 bg-slate-50 py-2.5 pl-9 pr-3 text-sm text-slate-700 shadow-inner shadow-slate-100 outline-none transition focus:border-indigo-300 focus:bg-white focus:ring-4 focus:ring-indigo-100"
            />
          </div>
        </div>

        {/* Actions */}
        <div className="flex items-center gap-3">
          {/* Add Application */}
          <button
            onClick={() => dispatch(openAddForm())}
            className="flex items-center gap-2 rounded-full bg-linear-to-r from-indigo-600 to-violet-600 px-4 py-2.5 text-sm font-semibold text-white shadow-lg shadow-indigo-500/20 transition hover:-translate-y-0.5 hover:from-indigo-700 hover:to-violet-700"
          >
            <Plus size={16} />
            <span className="hidden lg:inline">Add Application</span>
          </button>

          {/* Profile */}
          <div className="flex items-center gap-2 rounded-full border border-slate-200/80 bg-white/80 px-2 py-1.5 shadow-sm">
            <div className="relative">
              <div className="flex h-9 w-9 items-center justify-center rounded-full bg-linear-to-br from-slate-700 to-slate-900 text-sm font-semibold text-white">
                {displayName.charAt(0).toUpperCase()}
              </div>
              <span className="absolute bottom-0 right-0 h-2.5 w-2.5 rounded-full border-2 border-white bg-emerald-500" />
            </div>
            <div className="hidden text-left lg:block">
              <p className="text-sm font-semibold text-slate-800">{displayName}</p>
              <p className="text-xs text-slate-500">Active</p>
            </div>
            <button
              onClick={logout}
              className="ml-1 rounded-full p-2 text-slate-400 transition hover:bg-white hover:text-red-600"
            >
              <LogOut size={16} />
            </button>
          </div>
        </div>

      </div>

      {/* Search - mobile only, full width, own row */}
      <div className="mt-3 md:hidden">
        <div className="relative">
          <Search size={16} className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => dispatch(setSearchQuery(e.target.value))}
            placeholder="Search applications..."
            className="w-full rounded-2xl border border-slate-200 bg-slate-50 py-2.5 pl-9 pr-3 text-sm text-slate-700 shadow-inner shadow-slate-100 outline-none transition focus:border-indigo-300 focus:bg-white focus:ring-4 focus:ring-indigo-100"
          />
        </div>
      </div>

    </header>
  )
}

export default Navbar