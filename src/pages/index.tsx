import { useState } from 'react'
import clsx from 'clsx'

import { CreateTodoForm } from '@/client/components/CreateTodoForm'
import { TodoList } from '@/client/components/TodoList'

/**
 * QUESTION 6:
 * -----------
 * Implement quick filter/tab feature so that we can quickly find todos with
 * different statuses ("pending", "completed", or both). The UI should look like
 * the design on Figma.
 *
 * NOTE:
 *  - For this question, you must use RadixUI Tabs component. Its Documentation
 *  is linked below.
 *
 * Documentation references:
 *  - https://www.radix-ui.com/docs/primitives/components/tabs
 */

const FILTER_STATUSES = ['All', 'Pending', 'Completed']
const Index = () => {
  const [filterStatus, setFilterStatus] = useState('All')
  return (
    <main className="mx-auto w-[480px] pt-12">
      <div className="rounded-12 bg-white p-8 shadow-sm">
        <h1 className="text-center text-4xl font-extrabold text-gray-900">
          Todo App
        </h1>
        <div className="pt-10">
          {FILTER_STATUSES.map((status) => {
            return (
              <button
                key={status}
                className={clsx(
                  'mx-[8px] rounded-full border-[1px] border-gray-200 px-6 py-3',
                  {
                    'bg-gray-700 px-6 py-3 text-white': filterStatus === status,
                  }
                )}
                onClick={() => setFilterStatus(status)}
              >
                {status}
              </button>
            )
          })}
        </div>
        <div className="pt-10">
          <TodoList filterStatus={filterStatus} />
        </div>

        <div className="pt-10">
          <CreateTodoForm />
        </div>
      </div>
    </main>
  )
}

export default Index
