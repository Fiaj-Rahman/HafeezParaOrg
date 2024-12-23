import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import { router } from './Components/Routes/Routes'
import { Toaster } from 'react-hot-toast'
import 'react-date-range/dist/styles.css'
import 'react-date-range/dist/theme/default.css'
import { HelmetProvider } from 'react-helmet-async'


import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { ThemeProvider } from './Components/ThemeProvider/ThemeProvider'
import AuthProvider from './Components/providers/AuthProvider'

const queryClient = new QueryClient()

ReactDOM.createRoot(document.getElementById('root')).render(
<div className='max-w-screen-3xl mx-auto '>
<HelmetProvider>
   <ThemeProvider>
   <QueryClientProvider client={queryClient}>
      <AuthProvider>
        <RouterProvider router={router} />
        <Toaster />
      </AuthProvider>
    </QueryClientProvider>
   </ThemeProvider>
  </HelmetProvider>
</div>
)