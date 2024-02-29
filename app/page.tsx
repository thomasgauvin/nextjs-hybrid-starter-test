import { unstable_noStore as noStore } from 'next/cache';
import { CurrentTimeFromAPI } from './components/CurrentTimeFromAPI';
import { headers } from 'next/headers'

export default function Home() {
  noStore();
  const headersList = headers();
  const clientPrincipal = atob(headersList.get('x-ms-client-principal') || '');

  const timeOnServer = new Date().toLocaleTimeString('en-US');
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div>
          This is a Next.js application hosted on Azure Static Web Apps with 
          hybrid rendering. The time on the server is <strong>{timeOnServer}</strong>.
      </div>
      <CurrentTimeFromAPI />
      {clientPrincipal}
  </main>
  );
}
