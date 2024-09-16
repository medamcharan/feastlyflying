import { AppShell, Burger } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import ffImage from './assets/ff.png';
import ddImage from './assets/dd1.jpg';

export function Demo() {
  const [opened, { toggle }] = useDisclosure();

  return (
    <AppShell
      header={{ height: 60 }}
      navbar={{
        width: 300,
        breakpoint: 'sm',
        collapsed: { mobile: !opened },
      }}
      padding="md"
    >
      <AppShell.Header className="bg-custom-id">
        <div className="flex items-center space-x-4">
          <Burger
            opened={opened}
            onClick={toggle}
            hiddenFrom="sm"
            size="sm"
          />
          <img
            className="w-10 h-10 p-1 rounded-full ring-2 ring-gray-300 dark:ring-gray-500 mt-2" 
            src={ffImage}
            alt="FF"
          />
          <h1 className="text-lg font-medium text-gray-900 dark:text-white">
            <span className="italic">══FEASTLY FLYING 🦅</span>
          </h1>
        </div>
      </AppShell.Header>

      <AppShell.Navbar p="md">
        <section className="charan bg-red-200 text-black flex flex-col space-y-8 p-8">
          <button type="button" className="py-2.5 px-5 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-full border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">
            Home
          </button>
          <button type="button" className="py-2.5 px-5 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-full border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">
            BookingForm
          </button>
          <button type="button" className="py-2.5 px-5 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-full border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">
            Couriers
          </button>
          <button type="button" className="py-2.5 px-5 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-full border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">
            Tracking
          </button>
          <button type="button" className="py-2.5 px-5 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-full border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">
            FAQ
          </button>
          <button type="button" className="py-2.5 px-5 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-full border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">
            Reviews
          </button>
          <button type="button" className="py-2.5 px-5 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-full border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">
            Contact Us
          </button>
        </section>
      </AppShell.Navbar>

      <AppShell.Main>
  <section className="relative py-16 text-center">
    {/* Background image */}
    <img
      className="absolute inset-0 w-full h-full object-cover transition-all duration-300 rounded-lg blur-sm hover:blur-none"
      src={ddImage}
      alt="Delivery"
    />

    {/* Overlay */}
    <div ></div>

    {/* Content */}
    <div className="relative z-10">
      <h1 className="text-4xl font-bold mb-7">
        Nationwide Delivery Services with Feastly Flying
      </h1>
      <p className="mt-4 text-lg mb-7">Reliable and Fast Delivery Across All of India</p>
      <div className="container mx-auto text-center mb-7">
        <h2 className="text-3xl font-semibold mb-7">Our Services</h2>
        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-7">
          <div className="service-item mb-7">
            <h3 className="text-xl font-bold mb-7">Same-Day Delivery</h3>
            <p>Fast and efficient delivery within the same day.</p>
          </div>
          <div className="service-item mb-7">
            <h3 className="text-xl font-bold mb-7">Real-Time Tracking</h3>
            <p>Track your package in real-time from pickup to delivery.</p>
          </div>
          <div className="service-item mb-7">
            <h3 className="text-xl font-bold mb-7">24/7 Customer Support</h3>
            <p>Get help and support whenever you need it.</p>
          </div>
          <div className="service-item mb-7">
            <h3 className="text-xl font-bold mb-7">Nationwide Coverage</h3>
            <p>We deliver across all major cities in India.</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</AppShell.Main>


      
    </AppShell>
  );
}
