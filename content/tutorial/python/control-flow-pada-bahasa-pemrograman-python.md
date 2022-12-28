---
draft: true
date: 2022-12-27T21:17:05+07:00
title: "Tutorial Python Bagian 4: Control Flow Pada Bahasa Pemrograman Python"
slug: control-flow-pada-bahasa-pemrograman-python

tags:
    - Python

categories:
    - Tutorial Python

authorname: "koleksiprihadi"
authorlink: "https://koleksiprihadi.github.io/"

authorname: "koleksiprihadi"
authorlink: "https://koleksiprihadi.github.io/"
authorphoto: "/images/koleksiprihadi.jpeg"

image: /images/koleksiprihadi.jpeg
thumbnail: /images/koleksiprihadi.jpeg
description: "test"

---
halo teman-teman setelah kita mempelajari tentang variabel pada bahasa pemrograman python pada artikel [sebelumnya🏹](https://panduankoding.com/post/link), selanjutnya kita akan mempelajari tentang control flow pada bahasa pemrograman python.

# Apa itu *control flow*?

sebelum kita bahas lebih jauh tentang control flow, author akan menjelaskan kepada teman-teman tentang apa itu *control flow*, karena jika tidak kenal maka ~~tak sayang~~ akan susah memahami maksud dan tujuan dari penggunaan *control flow* ini😁.
*control flow* merupakan aliran kontrol logika atau bisa juga disebut urutan instruksi atau pemanggilan fungsi yang harus dieksekusi ataupun dievaluasi. maksudnya jika biasanya program python kode programnya di eksekusi secara berurutan dari atas kebawah dengan bantuan *control flow* ini teman-teman bisa membuat aliran eksekusi baik pengambilan keputusan (*decision*), perulangan (*loop*) dan percabangan (*jump*), jadi dengan menggunakan *control flow* teman-teman akan mudah memberikan logika kodisional pada program yang akan dibuat. oh iya sebelum teman-teman lanjut untuk mempelajari *control flow* ini author akan memberikan tabel penjelasan tentang operator perbandingan pada bahasa pemrograman python yang akan sering kita gunakan pada *control flow* ini


| Penyebutan              | Operator | Syntax       | Penjelasan                                                                                                                          |
| ------------------------- | ---------- | -------------- | ------------------------------------------------------------------------------------------------------------------------------------- |
| Sama dengan             | ```==``` | ```2 == 2``` | akan mengembalikan nilai true jika masing-masing operan bernilai sama                                                               |
| Tidak sama dengan       | ```!=``` | ```2 != 3``` | akan mengembalikan nilai true jika masing-masing operan memiliki nilai yang berbeda                                                 |
| Lebih besar dari        | ```>```  | ```3 > 2```  | akan mengembalikan nilai true jika operan sebelah kiri atau yang pertama nilainya lebih besar dari operan kedua (sebelah kanan)     |
| Lebih besar sama dengan | ```>=``` | ```3 >= 3``` | akan mengembalikan nilai true jika operan pertama bernilai sama atau bisa juga lebih besar dari operan kedua                        |
| Lebih kecil dari        | ```<```  | ```2 < 3```  | akan mengembalikan nilai true jika operan sebelah kiri atau yang pertama nilainya lebih kecil dari operan kedua (sebelah kanan)akan |
| Lebih kecil sama dengan | ```<=``` | ```2 <= 2``` | akan mengembalikan nilai true jika operan pertama bernilai sama atau bisa juga lebih kecil dari operan kedua                        |

### Control flow statements

baik langsung saja author akan menjelaskan tentang sintaks dan penggunaan dari *control flow statement* pada bahasa pemrograman python, oh iya teman-teman sama seperti artike-artikel sebelumnya disini author menggunakan python versi 3 ya.

## if Statement

yang pertama adalah *if statement*, fungsi dari *if statement* ini merupakan fungsi untuk mengambil keputusan pada saat suatu kondisi yang di inginkan terpenuhi, misal kita akan membuat sebuah program untuk mengecek apakah nilai dari sebuah variabel bernilai 5 dan jika iya maka akan menampilkan pesan ```"variabel bernilai 5"``` seperti pada gambar diagram dibawah ini

{{% flowchart %}}
st=>start
e=>end
op1=>operation: i=0
op2=>operation: print('a')
op3=>operation: i = i+1
cond=>condition: apakah i sudah = 2?

st->op1->op2->op3->cond
cond(yes)->e
cond(no)->op2
{{% /flowchart %}}
