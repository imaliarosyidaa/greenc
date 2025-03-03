<template>
  <div class="bg-white">
    <div
        class="mx-auto max-w-2xl px-4 pt-10 pb-16 sm:px-6 lg:max-w-7xl lg:grid-cols-3 lg:px-8 lg:pt-16 lg:pb-24"
      >
        <div class="max-w-7xl mx-auto p-6 grid grid-cols-1 md:grid-cols-2 gap-24">
          <div>
            <div class="mt-6">
              <h3 class="text-lg font-semibold text-gray-700">Detail Pemesan</h3>
              <p class="text-gray-600 font-medium">John Doe - (johndoe01@keraton.com)</p>
            </div>

            <div class="mt-4 flex justify-between items-center">
              <p class="text-lg font-semibold">Tadarus di Langgar Alit</p>
              <p class="text-lg font-semibold">Rp. 10.000</p>
            </div>

            <div class="flex items-center mt-4 space-x-4">
              <button class="bg-gray-200 px-3 py-2 rounded">-</button>
              <span>1</span>
              <button class="bg-gray-200 px-3 py-2 rounded">+</button>
            </div>

            <div class="mt-6">
              <h3 class="text-lg font-semibold text-gray-700">Pilih Pembayaran</h3>
              <select class="border p-2 rounded w-full mt-2">
                <option disabled selected>Pilih Metode Pembayaran</option>
                <option v-for="method in paymentmethod" :key="method.name">
                  {{ method.name }}
                </option>
              </select>
            </div>
          </div>

          <div class="bg-white shadow-md rounded-lg p-4 self-start">
            <h3 class="text-lg font-semibold">Ringkasan Booking</h3>
            <div class="flex justify-between mt-2">
              <span>Total Harga (1 Tiket)</span>
              <span>Rp. 10.000</span>
            </div>
            <div class="flex justify-between mt-2">
              <span>Biaya Layanan</span>
              <span>Rp. 2.500</span>
            </div>
            <div class="flex justify-between mt-2">
              <span>Biaya Jasa Aplikasi</span>
              <span>Rp. 1.000</span>
            </div>
            <div class="flex justify-between mt-4 font-bold text-lg">
              <span>Total Tagihan</span>
              <span>Rp. 13.500</span>
            </div>
            <RouterLink :to="`/payment/${$route.params.id}`">
              <button
                class="mt-6 w-full bg-yellow-500 text-white py-3 rounded-lg flex justify-center items-center"
              >
                Bayar →
              </button>
            </RouterLink>
          </div>
        </div>
    </div>
  </div>
</template>

<script setup>
const paymentmethod = [
  { name: "Bank BRI", href: "#" },
  { name: "Bank Seabank", href: "#" },
  { name: "DANA", href: "#" },
  { name: "GOPAY", href: "#" },
  { name: "OVO", href: "#" },
  { name: "Shopeepay", href: "#" },
  { name: "SCAN QRIS (Semua Pembayaran)", href: "#" },
];
</script>

<style scoped>
select {
  appearance: none;
  background-color: white;
  cursor: pointer;
}
</style>
