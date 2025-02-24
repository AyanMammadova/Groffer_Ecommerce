import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import DataContext from './context/DataContext.jsx'
import BasketContext from './context/BasketContext.jsx'
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";

const stripePromise = loadStripe("pk_test_51QpV3YEF0ekL8IavNeEklhMO3ADIE7N4Sdv0Dwm3USfUMtQSyGrOZbhGXylweVcmGlcvdPEQBPAnwdeJrfaynjBk00ISOMMs5k");
createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Elements stripe={stripePromise}>
      <DataContext>
        <BasketContext>
          <App />
        </BasketContext>
      </DataContext>
    </Elements>
  </BrowserRouter>
)
