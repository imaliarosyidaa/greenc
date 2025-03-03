<template>
  <div class="bg-white">
    <div class="pt-6">
      <nav aria-label="Breadcrumb">
        <ol
          role="list"
          class="mx-auto flex max-w-2xl items-center space-x-2 px-4 sm:px-6 lg:max-w-7xl lg:px-8"
        >
          <li v-for="breadcrumb in product.breadcrumbs" :key="breadcrumb.id">
            <div class="flex items-center">
              <a :href="breadcrumb.href" class="mr-2 text-sm font-medium text-gray-900">{{
                breadcrumb.name
              }}</a>
              <svg
                width="16"
                height="20"
                viewBox="0 0 16 20"
                fill="currentColor"
                aria-hidden="true"
                class="h-5 w-4 text-gray-300"
              >
                <path d="M5.697 4.34L8.98 16.532h1.327L7.025 4.341H5.697z" />
              </svg>
            </div>
          </li>
          <li class="text-sm">
            <a
              :href="product.href"
              aria-current="page"
              class="font-medium text-gray-500 hover:text-gray-600"
              >{{ product.name }}</a
            >
          </li>
        </ol>
      </nav>

      <!-- Product info -->
      <div
        class="mx-auto max-w-2xl px-4 pt-10 pb-16 sm:px-6 lg:grid lg:max-w-7xl lg:grid-cols-3 lg:grid-rows-[auto_auto_1fr] lg:gap-x-8 lg:px-8 lg:pt-16 lg:pb-24"
      >
        <div class="lg:col-span-2 lg:border-r lg:border-gray-200 lg:pr-8">
          <!-- Image gallery -->
          <div class="relative mx-auto mt-6 max-w-2xl sm:px-6 lg:max-w-7xl pb-12">
            <!-- Slider Container -->
            <div class="overflow-hidden relative">
              <div
                class="flex transition-transform duration-500"
                :style="`transform: translateX(-${currentIndex * 100}%)`"
              >
                <div
                  v-for="(image, index) in product.images"
                  :key="index"
                  class="min-w-full flex justify-center"
                >
                  <img
                    :src="image.src"
                    :alt="image.alt"
                    class="w-54 h-auto rounded-lg object-cover"
                  />
                </div>
              </div>

              <!-- Previous Button -->
              <button
                @click="prevSlide"
                class="absolute left-0 top-1/2 -translate-y-1/2 bg-gray-800/50 text-white p-2 rounded-full"
              >
                &#10094;
              </button>

              <!-- Next Button -->
              <button
                @click="nextSlide"
                class="absolute right-0 top-1/2 -translate-y-1/2 bg-gray-800/50 text-white p-2 rounded-full"
              >
                &#10095;
              </button>
            </div>
          </div>

          <h1 class="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">
            {{ product.name }}
          </h1>
        </div>

        <!-- Options -->
        <div class="mt-4 lg:row-span-3 lg:mt-0">
          <h2 class="sr-only">Product information</h2>
          <p class="text-3xl tracking-tight text-gray-900">{{ product.price }}</p>

          <!-- Reviews -->
          <div class="mt-6">
            <h3 class="sr-only">Reviews</h3>
            <div class="flex items-center">
              <div class="flex items-center">
                <StarIcon
                  v-for="rating in [0, 1, 2, 3, 4]"
                  :key="rating"
                  :class="[
                    reviews.average > rating ? 'text-gray-900' : 'text-gray-200',
                    'size-5 shrink-0',
                  ]"
                  aria-hidden="true"
                />
              </div>
              <p class="sr-only">{{ reviews.average }} out of 5 stars</p>
              <a
                :href="reviews.href"
                class="ml-3 text-sm font-medium text-indigo-600 hover:text-indigo-500"
                >{{ reviews.totalCount }} reviews</a
              >
            </div>
          </div>

          <form class="mt-10">
            <!-- Colors -->
            <div>
              <h3 class="text-sm font-medium text-gray-900">Color</h3>

              <fieldset aria-label="Choose a color" class="mt-4">
                <RadioGroup v-model="selectedColor" class="flex items-center gap-x-3">
                  <RadioGroupOption
                    as="template"
                    v-for="color in product.colors"
                    :key="color.name"
                    :value="color"
                    :aria-label="color.name"
                    v-slot="{ active, checked }"
                  >
                    <div
                      :class="[
                        color.selectedClass,
                        active && checked ? 'ring-3 ring-offset-1' : '',
                        !active && checked ? 'ring-2' : '',
                        'relative -m-0.5 flex cursor-pointer items-center justify-center rounded-full p-0.5 focus:outline-hidden',
                      ]"
                    >
                      <span
                        aria-hidden="true"
                        :class="[color.class, 'size-8 rounded-full border border-black/10']"
                      />
                    </div>
                  </RadioGroupOption>
                </RadioGroup>
              </fieldset>
            </div>

            <!-- Sizes -->
            <div class="mt-10">
              <div class="flex items-center justify-between">
                <h3 class="text-sm font-medium text-gray-900">Size</h3>
                <a href="#" class="text-sm font-medium text-indigo-600 hover:text-indigo-500"
                  >Size guide</a
                >
              </div>

              <fieldset aria-label="Choose a size" class="mt-4">
                <RadioGroup
                  v-model="selectedSize"
                  class="grid grid-cols-4 gap-4 sm:grid-cols-8 lg:grid-cols-4"
                >
                  <RadioGroupOption
                    as="template"
                    v-for="size in product.sizes"
                    :key="size.name"
                    :value="size"
                    :disabled="!size.inStock"
                    v-slot="{ active, checked }"
                  >
                    <div
                      :class="[
                        size.inStock
                          ? 'cursor-pointer bg-white text-gray-900 shadow-xs'
                          : 'cursor-not-allowed bg-gray-50 text-gray-200',
                        active ? 'ring-2 ring-indigo-500' : '',
                        'group relative flex items-center justify-center rounded-md border px-4 py-3 text-sm font-medium uppercase hover:bg-gray-50 focus:outline-hidden sm:flex-1 sm:py-6',
                      ]"
                    >
                      <span>{{ size.name }}</span>
                      <span
                        v-if="size.inStock"
                        :class="[
                          active ? 'border' : 'border-2',
                          checked ? 'border-indigo-500' : 'border-transparent',
                          'pointer-events-none absolute -inset-px rounded-md',
                        ]"
                        aria-hidden="true"
                      />
                      <span
                        v-else
                        aria-hidden="true"
                        class="pointer-events-none absolute -inset-px rounded-md border-2 border-gray-200"
                      >
                        <svg
                          class="absolute inset-0 size-full stroke-2 text-gray-200"
                          viewBox="0 0 100 100"
                          preserveAspectRatio="none"
                          stroke="currentColor"
                        >
                          <line
                            x1="0"
                            y1="100"
                            x2="100"
                            y2="0"
                            vector-effect="non-scaling-stroke"
                          />
                        </svg>
                      </span>
                    </div>
                  </RadioGroupOption>
                </RadioGroup>
              </fieldset>
            </div>

            <button
              type="submit"
              class="mt-10 flex w-full items-center justify-center rounded-md bg-white border-1 border-[#daa520] px-8 py-3 text-base font-medium text-[#daa520] focus:ring-2 focus:ring-[#daa520] focus:ring-offset-2 focus:outline-hidden"
            >
              Add to bag
            </button>
            <RouterLink :to="`/checkout/${product.id}`">
              <button class="mt-4 w-full bg-[#daa520] text-white p-3 rounded-md">Check Out</button>
            </RouterLink>
          </form>
        </div>

        <div
          class="py-10 lg:col-span-2 lg:col-start-1 lg:border-r lg:border-gray-200 lg:pt-6 lg:pr-8 lg:pb-16"
        >
          <!-- Description and details -->
          <div>
            <h3 class="sr-only">Description</h3>

            <div class="space-y-6">
              <p class="text-base text-gray-900">{{ product.description }}</p>
            </div>
          </div>

          <div class="mt-10">
            <h3 class="text-sm font-medium text-gray-900">Highlights</h3>

            <div class="mt-4">
              <ul role="list" class="list-disc space-y-2 pl-4 text-sm">
                <li v-for="highlight in product.highlights" :key="highlight" class="text-gray-400">
                  <span class="text-gray-600">{{ highlight }}</span>
                </li>
              </ul>
            </div>
          </div>

          <div class="mt-10">
            <h2 class="text-sm font-medium text-gray-900">Details</h2>

            <div class="mt-4 space-y-6">
              <p class="text-sm text-gray-600">{{ product.details }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from "vue";
import { StarIcon } from "@heroicons/vue/20/solid";
import { RadioGroup, RadioGroupOption } from "@headlessui/vue";
import chocochipsZamora from "../assets/ProductsImage/ChocochipsZamora.jpg";
import chocochipsZamora2 from "../assets/ProductsImage/ChocochipsZamora-2.jpg";
import chocochipsZamora3 from "../assets/ProductsImage/ChocochipsZamora-3.jpg";
import chocochipsZamora4 from "../assets/ProductsImage/ChocochipsZamora-4.jpg";
import chocochipsZamora5 from "../assets/ProductsImage/ChocochipsZamora-5.jpg";
import chocochipsZamora6 from "../assets/ProductsImage/ChocochipsZamora-6.jpg";
import chocochipsZamora7 from "../assets/ProductsImage/ChocochipsZamora-7.jpg";
import { useRoute } from "vue-router";

const products = ref([
  {
    id: 1,
    name: "Chocochips Zamora Set",
    price: "Rp50.000",
    href: "#",
    breadcrumbs: [
      { id: 1, name: "Men", href: "#" },
      { id: 2, name: "Clothing", href: "#" },
    ],
    images: [
      { src: chocochipsZamora, alt: "Chocochips Zamora Set" },
      { src: chocochipsZamora2, alt: "Chocochips Zamora Set" },
      { src: chocochipsZamora3, alt: "Chocochips Zamora Set" },
      { src: chocochipsZamora4, alt: "Chocochips Zamora Set" },
      { src: chocochipsZamora5, alt: "Chocochips Zamora Set" },
      { src: chocochipsZamora6, alt: "Chocochips Zamora Set" },
      { src: chocochipsZamora7, alt: "Chocochips Zamora Set" },
    ],
    colors: [{ name: "Merah muda", class: "bg-pink-100", selectedClass: "ring-gray-400" }],
    sizes: [
      { name: "XXS", inStock: false },
      { name: "XS", inStock: false },
      { name: "S", inStock: true },
      { name: "M", inStock: false },
      { name: "L", inStock: false },
      { name: "XL", inStock: false },
      { name: "2XL", inStock: false },
      { name: "3XL", inStock: false },
    ],
    description:
      "Chocochips Zamora Set mempunyai desain yang anggun dan elegan cocok digunakan untuk pesta, acara pernikahan, acara formal dan lain-lain. Harga sewa per hari. Hanya tersedia pilihan warna merah muda.",
    highlights: [
      "Rent💰150k / 3 days",
      "Extra day 50k / day",
      "Pre-washed & pre-shrunk",
      "Ultra-soft 100% cotton",
    ],
    details: "Size S Top = Bust 84 cm Length 34 cm. Skirt = Waist 66 cm Hips 94 cm Length 74 cm",
  },
]);
const reviews = { href: "#", average: 4, totalCount: 117 };
const route = useRoute();
const product = computed(
  () => products.value.find((a) => a.id === Number(route.params.id)) || null,
);

// Pastikan tidak mengakses properti jika product null
const selectedColor = ref(product.value?.colors?.[0] || null);
const selectedSize = ref(product.value?.sizes?.find((s) => s.inStock) || null);

const currentIndex = ref(0);

const nextSlide = () => {
  if (product.value?.images) {
    currentIndex.value = (currentIndex.value + 1) % product.value.images.length;
  }
};

const prevSlide = () => {
  if (product.value?.images) {
    currentIndex.value =
      (currentIndex.value - 1 + product.value.images.length) % product.value.images.length;
  }
};
</script>
