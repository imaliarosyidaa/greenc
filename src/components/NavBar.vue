<template>
  <header
    v-if="!isAuthPage"
    class="fixed top-0 left-0 w-full flex items-center justify-between px-8 py-4"
    :class="{
      'shadow-lg bg-[#DAA520]/90 z-50': isScrolled,
      'bg-transparent': !isScrolled,
      'bg-white border-b border-gray-300': !isHome,
      'z-50': isHome,
    }"
  >
    <div class="flex items-center gap-4">
      <!-- Logo untuk Desktop -->
      <RouterLink to="/" v-if="isScrolled === true && isHome">
        <img src="../assets/Greenc-white.png" alt="Logo" width="150" class="hidden md:block" />
      </RouterLink>
      <RouterLink to="/" v-else>
        <img src="../assets/Greenc.png" alt="Logo" width="150" class="hidden md:block" />
      </RouterLink>
      <!-- Logo untuk Mobile -->
      <RouterLink to="/">
        <img src="../assets/Greenc.png" alt="Logo" width="120" class="block md:hidden" />
      </RouterLink>

      <!-- Button Menu Mobile -->
      <button class="absolute right-0 pr-8 md:hidden" @click="toggleMenu">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          fill="none"
          stroke="white"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        >
          <line x1="3" x2="21" y1="6" y2="6" />
          <line x1="3" x2="21" y1="12" y2="12" />
          <line x1="3" x2="21" y1="18" y2="18" />
        </svg>
      </button>
    </div>

    <!-- Menu Samping untuk Mobile -->
    <div
      v-if="isMenuOpen"
      class="fixed top-0 right-0 w-64 h-full bg-[#2185D5] shadow-lg transition-transform transform translate-x-0 md:hidden"
    >
      <div class="flex justify-end p-4">
        <button @click="toggleMenu">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            fill="none"
            stroke="white"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <path d="M18 6 6 18" />
            <path d="m6 6 12 12" />
          </svg>
        </button>
      </div>

      <ul class="flex flex-col p-6 space-y-4">
        <li>
          <RouterLink to="/article" class="text-md no-underline hover:text-gray-300"
            >Artikel</RouterLink
          >
        </li>
        <li>
          <RouterLink
            :to="{ path: '/products', query: { for: 'dijual' } }"
            class="text-md no-underline hover:text-gray-300"
            >Beli Pakaian Secondhand</RouterLink
          >
        </li>
        <li>
          <RouterLink :to="{ path: '/products', query: { for: 'tukar' } }" class="text-md no-underline hover:text-gray-300"
            >Tukar Pakaian</RouterLink
          >
        </li>
        <li>
          <RouterLink :to="{ path: '/products', query: { for: 'sewa' } }" class="text-md no-underline hover:text-gray-300"
            >Sewa Pakaian</RouterLink
          >
        </li>
      </ul>
    </div>

    <!-- Navbar untuk Desktop -->
    <nav class="md:flex items-center">
      <ul
        class="md:flex gap-6 hidden pr-8"
        :class="{ 'text-white': isHome, 'text-black': !isHome }"
      >
        <li>
          <RouterLink to="/article" class="text-md no-underline hover:text-gray-300"
            >Artikel</RouterLink
          >
        </li>
        <li>
          <RouterLink
            :to="{ path: '/products', query: { for: 'dijual' } }"
            class="text-md no-underline hover:text-gray-300"
            >Beli Pakaian Secondhand</RouterLink
          >
        </li>
        <li>
          <RouterLink :to="{ path: '/products', query: { for: 'tukar' } }" class="text-md no-underline hover:text-gray-300"
            >Tukar Pakaian</RouterLink
          >
        </li>
        <li>
          <RouterLink :to="{ path: '/products', query: { for: 'sewa' } }" class="text-md no-underline hover:text-gray-300"
            >Sewa Pakaian</RouterLink
          >
        </li>
      </ul>

      <!-- Tombol Masuk -->
      <RouterLink to="/signin">
        <button
          class="md:flex items-center px-4 py-1 cursor-pointer font-semibold rounded-md border-none hidden"
          :class="{
            'shadow-lg bg-white text-black': isScrolled && isHome,
            'shadow-lg bg-[#DAA520] text-black': isHome,
            'bg-[#DAA520] text-white': !isHome,
          }"
        >
          Masuk
        </button>
      </RouterLink>
    </nav>
  </header>
</template>

<script>
export default {
  data() {
    return {
      isScrolled: false,
      isMenuOpen: false,
    };
  },
  computed: {
    isHome() {
      return this.$route.path === "/";
    },
    isAuthPage() {
      return this.$route.name === "signin" || this.$route.name === "signup";
    },
  },
  mounted() {
    window.addEventListener("scroll", this.handleScroll);
  },
  beforeUnmount() {
    window.removeEventListener("scroll", this.handleScroll);
  },
  methods: {
    handleScroll() {
      this.isScrolled = window.scrollY > 0;
    },
    toggleMenu() {
      this.isMenuOpen = !this.isMenuOpen;
    },
  },
};
</script>
