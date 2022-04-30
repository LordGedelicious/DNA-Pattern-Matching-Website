## DNA-Pattern-Matching-Website
Website ini merupakan tugas besar 3 mata kuliah IF2211 Strategi Algoritma. Program ini mengimplementasi algoritma boyer moor dan knuth-morris-pratt(KMP) yaitu algoritma String Matching dan Regular Expression untuk mendeteksi seorang pasien jika penyakit genetik tertentu. Yang kemudian akan disimpan pada basis data yang kemudian akan ditampilakn berdasarkan query pencarian.


## How to Use
inside the directoy DNA-Pattern-Matching-Website
```bash
npm install next react react-dom
npm install
```
to run
```bash
npm run dev
```

## Backend dan Frontend
**Frontend**
Web dibagi menjadi 2 bagian, yaitu front end dan back end. Framework yang digunakan untuk frontend adalah nextjs dan menggunakan sebagian library dari react dan next. Situs dibangun menjadi 4 page, yaitu homepage, form input dna, form search dna, dan result pencocokan dna. Untuk membangun sebuah page digunakan komponen. Terdapat beberapa komponen, yaitu komponen untuk homepage, komponen untuk menampung satu informasi hasil pencocokan, komponen untuk menampung beberapa hasil pencocokan, komponen form menerima masukkan file penyakit, dan komponen form untuk menerima masukkan pencocokkan penyakit. CSS dibagi menjadi 2, yaitu untuk form dan list.

**Backend**
Backend dari web pattern matching dibangun menggunakan bahasa javascript dan menggunakan database Mongodb. Database terdiri dari atribut objek, nama penyakit, dan sequence dnanya. Buat query testing orang memiliki databasenya tersendiri, dan search query berdasarkan tanggal dan penyakit akan diambil melalui database test.


## Anggota Kelompok
* Gede Prasidha Bhawarnawa 13520004
* Angelica Winasta Sinisuka 13520097
* Rizky Akbar Asmaran 13520111
