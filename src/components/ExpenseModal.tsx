import { Fragment } from 'react'
import { PlusCircleIcon } from '@heroicons/react/24/solid'
import { Dialog, Transition } from '@headlessui/react'
import { useBudget } from '../hooks/useBudget'
import ExpenseForm from './ExpenseForm'

export default function ExpenseModal() {
  const { state, dispatch } = useBudget();

  return (
    <>
      <div className="fixed right-5 bottom-5 flex items-center justify-center">
        <button
          type="button"
          onClick={() => dispatch({ type: 'SHOW_MODAL' })}
          className="group"
        >
          <PlusCircleIcon
            className="
            w-16 h-16 text-yellow-400 bg-gradient-to-r from-slate-800 to-gray-800
            rounded-full shadow-2xl border-2 border-yellow-400/30
            hover:shadow-yellow-400/50 hover:shadow-2xl hover:scale-110 hover:border-yellow-400/60
            group-hover:text-yellow-300
            transform transition-all duration-300 
            cursor-pointer
        " 
        />
        </button>
      </div>

      <Transition appear show={state.showModal} as={Fragment}>
        <Dialog as="div" className="relative z-50" onClose={() => dispatch({ type: 'CLOSE_MODAL' })}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-slate-900/50 backdrop-blur-xs" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="w-full max-w-4xl transform overflow-hidden rounded-3xl bg-gradient-to-br from-slate-900 to-gray-800 backdrop-blur-2xl border border-white/20 p-8 text-left align-middle shadow-2xl transition-all">

                    <ExpenseForm />

                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  )
}