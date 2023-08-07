import { useState } from 'react'
import './App.scss'
import Navbar from './components/navbar/Navbar'
import { Outlet, createBrowserRouter,RouterProvider } from 'react-router-dom'
import Footer from './components/footer/Footer'
import Login from './pages/login/Login'
import Signup from './pages/signup/Signup'
import Home from './pages/home/Home'
import Menu from './components/menuItems/Menu'
import Sales from './pages/sales/dashboard/Sales'
import Reports from './pages/reports/Reports'
import Apps from './pages/apps/Apps'
import Costumer from './pages/sales/costumer/Costumer'
import Quotes from './pages/sales/quotes/Quotes'
import Invoive from './pages/sales/invoice/Invoice'
import AddCustomer from './components/addCustomer/AddCustomer'
import AddQuotes from './components/addQuotes/AddQuotes'
import UserProfile from './components/userprofile/UserProfile'
import Suppliers from './pages/suppliers/dashboard/Suppliers'
import Expenses from './pages/suppliers/expenses/Expenses'
import ProfitAndLoss from './pages/reports/profitAndLoss/ProfitAndLoss'
import BalanceSheet from './pages/reports/balanceSheet/BalanceSheet'
import GeneralLedger from './pages/reports/generalLedger/GeneralLedger'
import TrailBalance from './pages/reports/trialBalance/TrailBalance'
import VatReport from './pages/reports/vatReport/VatReport'
import CustomerInvoice from './pages/sales/customerInvoice/CustomerInvoice'
import NewInvoice from './components/newInvoice/NewInvoice'

function App() {
  const Layout = () => {
    return (
      <div className="app">
        <Navbar />
          <Menu />
        <div className="main__body d-flex position-relative">
          <Outlet />
        </div>
        {/* <Footer /> */}
      </div>
    )
  };

  const router = createBrowserRouter([
    {
      path : '/',
      element: <Layout />,
      children: [
        {
          path: '/',
          element: <Home />
        },
        {
          path: '/#home',
          element: <Home />
        },
        {
          path: '/home',
          element: <Home />
        },
        {
          path: '/sales',
          element: <Sales />
        },
        {
          path: '/sales/costumer',
          element: <Costumer />
        },
        {
          path: '/sales/quotes',
          element: <Quotes />
        },
        {
          path: '/sales/invoice',
          element: <Invoive />
        },
        
        {
          path: '/apps',
          element: <Apps />
        },
        
        {
          path: '/purchasing',
          element: <Suppliers />
        },
        {
          path: '/expenses',
          element: <Expenses />
        },
        {
          path: '/user_settings',
          element: <UserProfile />
        },
        
        {
          path: '/reports' || '/#reports',
          element: <Reports />
        },
        {
          path: "*",
          element: <Error />,
        },
      ]
    },
    {
      path: '/login',
      element: <Login />
    },
    {
      path: '/signup',
      element: <Signup />
    },
    {
      path: '/sales/new/costumer',
      element: <AddCustomer />
    },
    {
      path: '/sales/new/invoice',
      element: <NewInvoice />
    },
    {
      path: '/sales/new/quotes',
      element: <AddQuotes />
    },
    {
      path: '/profit_loss',
      element: <ProfitAndLoss />
    },
    {
      path: '/balance_sheet',
      element: <BalanceSheet />
    },
    {
      path: '/general_ledger',
      element: <GeneralLedger />
    },
    {
      path: '/trail_balance',
      element: <TrailBalance />
    },
    {
      path: '/vat_report',
      element: <VatReport />
    },
    {
      path: '/customer_invoice',
      element: <CustomerInvoice />
    },
    {
      path: "*",
      element: <Error />,
    },
  ])
  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App
