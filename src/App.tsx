import { Toaster } from 'sonner'

import Home from '@/pages/home'

export default function App() {
  return (
    <div className="flex h-screen w-screen flex-col items-center justify-center">
      <Home />
      <Toaster position="top-center" />
    </div>
  )
}
