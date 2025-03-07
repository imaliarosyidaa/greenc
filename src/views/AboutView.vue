<script setup>
import "../assets/main.css";
</script>

<template>
  <div>
    <Header />
    <div>
      <section class="mx-auto pt-12 px-12 md:pt-24 md:px-24 lg:pt-28 lg:px-28">
        <div class="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div class="content w-full max-w-[522px] h-auto flex flex-col justify-start self-start text-black text-base sm:text-lg">
            Greenc pada mulanya berdiri karena keprihatinan mahasiswa di tengah budaya fast fashion pada industri fesyen.
            Fast fashion adalah sebuah koleksi busana murah mengikuti tren merek-merek mentereng yang diproduksi dalam waktu cepat. 
            Hal ini menimbulkan budaya konsumtif di tengah masyarakat dengan melakukan pembelian terus menerus karena tren fesyen dan 
            model nya selalu up to date jauh lebih cepat dibanding produk musiman.
          </div>
          <img src="../assets/woman-choosing-colorful-sari-market.jpg" class="macan-ali" alt="woman-choosing-colorful-sari-market" />
        </div>
      </section>
      <section class="mx-auto pt-12 px-12 md:pt-24 md:px-24 lg:pt-28 lg:px-28">
        <div class="title-sej">
          <span class="title content"> Pada abad XV (-+ 1430) </span>
          <!-- <img src="../assets/bulat.svg" /> -->
        </div>
        <div class="sej-container">
          <!-- <img src="../assets/p-1.png" class="macan-ali" /> -->
          <div class="content border-right">
            Masjid Agung Sang Cipta Rasa kebakaran. Ratu Ayu Pakungwati yang sudah tua itu turut
            memadamkan api. Api dapat dipadamkan, namun Ratu Ayu Pakungwati kemudian wafat. Semenjak
            itu, nama atau sebutan Pakungwati dimuliakan dan diabadikan oleh nasab Sunan Gunung
            Jati.
          </div>
        </div>
      </section>
      <section class="mx-auto pt-12 px-12 md:pt-24 md:px-24 lg:pt-28 lg:px-28">
        <div>
          <!-- <img src="../assets/bulat.svg" /> -->
          <span class="title content"> Pada abad XVI </span>
        </div>
        <div class="sej-container">
          <div class="content border-left">
            Sunan Gunung Jati wafat. Kemudian Pangeran Emas Mochammad Arifin, cicit dari Sunan
            Gunung Jati, bertahta menggantikannya. Kemudian pada tahun Candra Sangkala Tunggal Tata
            Gunaning Wong atau 1451 Saka yaitu tahun 1529 Masehi beliau mendirikan Keraton baru
            sebelah barat daya Dalem Agung Pakungwati. Dan beliaupun bergelar Panembahan Pakungwati
            I.
          </div>
          <!-- <img src="../assets/k-1.png" class="macan-ali" /> -->
        </div>
      </section>
      <section class="mx-auto pt-12 px-12 md:pt-24 md:px-24 lg:pt-28 lg:px-28">
        <div class="title-sej">
          <span class="title content"> Pada -+ 1549 M </span>
          <!-- <img src="../assets/bulat.svg" /> -->
        </div>
        <div class="sej-container">
          <!-- <img src="../assets/m-1.png" class="macan-ali" /> -->
          <div class="content border-right">
            Masjid Agung Sang Cipta Rasa kebakaran. Ratu Ayu Pakungwati yang sudah tua itu turut
            memadamkan api. Api dapat dipadamkan, namun Ratu Ayu Pakungwati kemudian wafat. Semenjak
            itu, nama atau sebutan Pakungwati dimuliakan dan diabadikan oleh nasab Sunan Gunung
            Jati.
          </div>
        </div>
      </section>
      <section class="mx-auto pt-12 px-12 md:pt-24 md:px-24 lg:pt-28 lg:px-28">
        <div>
          <!-- <img src="../assets/bulat.svg" /> -->
          <span class="title content"> Pada -+ 1679 M </span>
        </div>
        <div class="sej-container">
          <div class="content border-left">
            Didirikan Keraton Kanoman oleh Sultan Anom I (Sultan Badridin). Maka semenjak itu,
            Keraton Pakungwati disebut Keraton Kasepuhan hingga sekarang dan sultannya bergelar
            Sultan Sepuh. Kasepuhan artinya tempat sepuh atau tua. Jadi, antara Kasepuhan dan
            Kanoman itu awalnya yang tua dan yang muda (kakak beradik). Lokasi bangunan Keraton
            Kasepuhan membujur dari utara ke Selatan atau menghadap ke utara, karena keraton-keraton
            di Jawa semuanya menghadap ke utara, artinya menghadap magnet dunia, artinya falsafahnya
            sang raja mengharapkan kekuatan.
          </div>
          <!-- <img src="../assets/n-1.png" class="macan-ali" /> -->
        </div>
      </section>
    </div>
    <FooterSection />
  </div>
</template>

<script>
import Header from "../components/Header.vue";
import FooterSection from "./home/Footer.vue";

export default {
  name: "AboutView",
};
</script>

<style>
section {
  display: flex;
  flex-direction: column;
}
.title-sej {
  display: flex;
  justify-content: end;
  text-align: end;
}
.sej-container {
  display: flex;
  flex-direction: row;
}
.sej-container img {
  margin: 40px;
}

.title {
  margin-right: 20px;
  margin-left: 20px;
}
.content {
  height: auto;
  flex-direction: column;
  justify-content: center;
  color: #000;
  font-family: Raleway;
}
.border-left {
  margin-left: 20px;
  border-left: 2px solid #daa520; /* Ganti #000 dengan warna border yang diinginkan */
  padding-left: 30px;
}

.border-right {
  margin-right: 20px;
  border-right: 2px solid #daa520; /* Ganti #000 dengan warna border yang diinginkan */
  padding-right: 30px;
}

.macan-ali {
  width: 445.088px;
  height: 445.088px;
  object-fit: cover;
  flex-shrink: 0;
  border-radius: 10px;
}
</style>
