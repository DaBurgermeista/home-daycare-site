import "./index.css";

document.querySelector("#app").innerHTML = `
  <header class="bg-teal-600 text-white rounded-b-2xl shadow-md">
  <div class="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
    <!-- Logo + Title -->
    <a href="./" class="flex items-center space-x-3">
      <img src="./little-sprouts.png" alt="Little Sprouts Logo" class="h-10 w-10 rounded-full shadow-md" />
      <span class="text-2xl font-bold tracking-wide hover:text-yellow-100 transition">Little Sprouts Daycare</span>
    </a>

    <!-- Navigation Links -->
    <nav class="flex space-x-6 text-lg font-medium">
      <a href="./" class="hover:text-yellow-200 transition">Home</a>
      <a href="./about.html" class="hover:text-yellow-200 transition">About</a>
      <a href="./contact.html" class="hover:text-yellow-200 transition">Contact</a>
    </nav>
  </div>
</header>


  <main class="max-w-4xl mx-auto p-6">
    <section class="text-center">
      <h2 class="text-3xl font-semibold text-teal-700 mb-4">Welcome to Little Sprouts!</h2>
      <p class="text-lg mb-4">
        We offer a safe, nurturing, and playful learning environment for children 6 months to 5 years old.
      </p>
      <p class="text-md text-gray-600">
        Located in Chesapeake, VA • Open Monday–Friday • 7:30 AM – 5:30 PM
      </p>
    </section>

    <section class="mt-10 grid md:grid-cols-2 gap-6">
      <a href="./about.html#philosophy" class="block">
        <div class="bg-white shadow rounded-lg p-6 hover:shadow-lg transition">
          <h3 class="text-xl font-bold mb-2 text-teal-700">Our Philosophy</h3>
          <p class="text-gray-700">
            We believe children learn best through play, hands-on exploration, and personalized attention.
          </p>
        </div>
      </a>

      <a href="./about.html#routine" class="block">
      <div class="bg-white shadow rounded-lg p-6 hover:shadow-lg transition">
        <h3 class="text-xl font-bold mb-2 text-teal-700">Daily Routine</h3>
        <ul class="list-disc ml-5 text-gray-700">
          <li>Morning Circle & Story Time</li>
          <li>Outdoor Play</li>
          <li>Arts & Crafts</li>
          <li>Lunch & Nap Time</li>
        </ul>
      </div>
      </a>
      </section>

    <section class="mt-10 bg-teal-100 rounded-lg p-6 text-center">
      <h3 class="text-2xl font-bold mb-2 text-teal-800">Now Enrolling for Fall!</h3>
      <p class="mb-4 text-gray-700">Limited spots available. Contact us today to schedule a tour!</p>
      <a href="./contact.html" class="inline-block bg-teal-600 text-white px-6 py-2 rounded shadow hover:bg-teal-700 transition">
        Contact Us
      </a>
    </section>
  </main>

  <footer class="bg-gray-100 text-center text-sm p-4 mt-12">
    &copy; 2025 Little Sprouts Home Daycare • Chesapeake, VA
  </footer>
`;
