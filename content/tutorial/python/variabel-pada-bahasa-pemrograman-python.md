---
draft: false
date: 2022-12-28T10:56:58+07:00
title: "Tutorial Python Bagian 3: Variabel Pada Bahasa Pemrograman Python"
slug: variabel-pada-bahasa-pemrograman-python

tags:
    - Python

categories:
    - Tutorial Python

authorname: "koleksiprihadi"
authorlink: "https://koleksiprihadi.github.io/"

authorname: "koleksiprihadi"
authorlink: "https://koleksiprihadi.github.io/"
authorphoto: "/images/koleksiprihadi.jpeg"

image: https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEh9GkgzIRxPLbB0LN4Og7R8PQprj-F8LxIJnMagkVtYm6DNJg7FiE0gAYMIHdsPZFEC74Aov1z7ti9KSsMLWzj0CoA_SraaRXiuQk3Jfjy5n-ymGez3hKUrJPY5-ITg7vZ-axn9P1zd8m_6TdBCCF4Ovdur0pouie26fynapTLQigFfMg4Z7qGkR1aD/s1280/Variabel%20Pada%20Bahasa%20Pemrograman%20Python.png
thumbnail: https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEh9GkgzIRxPLbB0LN4Og7R8PQprj-F8LxIJnMagkVtYm6DNJg7FiE0gAYMIHdsPZFEC74Aov1z7ti9KSsMLWzj0CoA_SraaRXiuQk3Jfjy5n-ymGez3hKUrJPY5-ITg7vZ-axn9P1zd8m_6TdBCCF4Ovdur0pouie26fynapTLQigFfMg4Z7qGkR1aD/s1280/Variabel%20Pada%20Bahasa%20Pemrograman%20Python.png
description: "Belajar bahasa pemrograman python untuk pemula bagian 3 variabel dan tipe data pada bahasa pemrograman python"
---
hallo teman-teman mari kita lanjutkan seri belajar bahasa pemrograman python, dimana pada artikel [sebelumnya🏹](https://www.panduankoding.com/2022/06/dasar-dasar-bahasa-pemrograman-python.html) author telah memberikan penjelasan tentang bagaimana cara menjalankan program python, apa itu python indentation, python commenting dan bagaimana cara menginstal dan mencari library python. Pada artikel ini author akan menjelaskan tentang variabel pada bahasa pemrograman python, yuk langsung saja kita masuk ke materinya

Apa Itu Variabel?
-----------------

variabel adalah suatu lokasi penyimpanan pada memori yang memiliki nama simbolis dimana penyimpanan ini akan menyimpan sebuah informasi (nilai) yang akan digunakan oleh program kita dan juga bisa diisi oleh program kita, penamaan dari penyimpanan tersebut pada bahasa pemrograman python memiliki beberapa aturan yang harus teman-teman ikuti, jika tidak maka program teman-teman akan mengalami error, aturan-aturan tersebut adalah seperti berikut ini:

1. Pada bahasa pemrograman python kita tidak perlu mendeklarasikan tipedata pada variabel tersebut, maksudnya kita bisa langsung memasukan nilai pada variabel tersebut.
2. Nama variabel bisa dimulai dengan huruf ataupun garis bawah (underscore "\_").
   contohnya:

```python
inivariabel = 1
```

3. Penamaan variabel tidak bisa dimulai dengan angka.
   contohnya:

```python
1inivariabel = 1
```

4. Jika nama variabel memiliki 2 atau lebih dari 1 kata maka harus digabung tidak boleh dipisahkan dengan spasi maupun tanda strip.

```python
ini variabel = 1

ini-variabel = 1

# Jika teman-teman ingin memisahkan kata bisa dengan underscore
ini_variabel = 1
```

1. Karakter pada penamaan variabel bersifat sensitif, artinya huruf kecil dan huruf kapital memiliki arti yang berbeda.
   contohnya:

```python
inivariabel = 1

# variabel diatas tidak sama dengan variabel di bawah ini

Inivariabel = 1
```

Pengenalan Tipe Data
--------------------

pada bahasa pemrograman python tipe data akan langsung ditentukan pada saat kita menginputkan nilai pada variabel tersebut. berikut beberapa tipe data dan bentuk nilainya yang harus teman-teman ketahui:


| Bentuk Nilai                          | Tipe Data |
| --------------------------------------- | ----------- |
| x = "hello world"                     | str       |
| x = 1                                 | int       |
| x = 1.5                               | float     |
| x = 1 + 1j                            | complex   |
| x =\["satu", "dua","tiga"\]           | list      |
| x = ("satu", "dua","tiga")            | tuple     |
| x = range(5)                          | range     |
| x = {"satu", "dua","tiga"}            | set       |
| x = {"nama" : "jhon", "umur" : 21}    | dict      |
| x = frozenset({"satu", "dua","tiga"}) | frozenset |
| x = True<br /> x = False              | bool      |
| x = b"hello world"                    | bytes     |
| x = None                              | nonetype  |

Penggunaan Variabel
-------------------

Baik teman-teman kita coba langsung praktek saja dalam penggunaan variabel ini, disini author akan menyiapkan sebuah interpreter sehingga teman-teman bisa langung menjalankan contoh programnya

### Cara menginisialisasi nilai pada variabel

Pertama adalah bagaimana cara memasukan nilai pada sebuah variabel, disini author akan memberikan contoh bagaimana cara memasukan atau menginisialisasi nilai pada variabel
{{< trinket "https://trinket.io/embed/python3/b5d216e6d6" >}}

silahkan teman-teman jalankan program di atas dengan menekan tombol **run (segitiga)** dan jika teman-teman menggunakan mobile view (menggunakan hp atau tab) dan teman-teman ingin melihat kode program silahkan klik tombol **pensil**. dapat kita lihat di atas untuk memasukan sebuah nilai pada variabel dengan cara menuliskan nilainya setelah tanda samadengan setelah nama variabelnya, jika kita ingin memasukan 2 nilai pada 2 variabel dengan hanya 1 baris saja kita bisa langsung memisahkan variabel pertama dan kedua dengan tanda koma, begitu juga dengan nilai yang akan kita masukan, urutan nilai yang kita masukan harus sama dengan urutan variabel yang kita inisialisasi.

### Inisialisasi tipe data variabel

pertama kita akan membuat 2 buah variabel yang akan kita isi masing masing dengan data yang berbeda, dimana pada variabel pertama (x) akan kita isi dengan sebuah nilai integer dan pada variabel kedua (y) akan kita isi dengan sebuah nilai string
{{< trinket "https://trinket.io/embed/python3/82c7487968" >}}

pada program di atas dapat kita lihat bahwa dalam pembuatan sebuah variabel dalam bahasa pemrograman python kita tidak perlu mendeklarasikan jenis tipe data dari variabel tersebut. Dapat kita lihat lagi pada output, python akan langsung mengetahui jenis tipe data dari sebuah variabel dimana variabel x merupakan tipe data integer (int) dan variabel y merupakan tipe data string (str).

### Penamaan variabel

selanjutnya kita akan mencoba kembali dengan cara kita akan membuat 2 buah variabel yang masing-masing akan kita beri nilai untuk membuktikan bahwa penggunaan karakter pada nama variabel sangat sensitif
{{< trinket "https://trinket.io/embed/python3/e0bca9fe36" >}}

dapat kita lihat pada output program di atas pada variabel x output yang kita dapatkan adalah "saya adalah x" atau data pada inputan x yang kedua, sedangkan pada variabel y output yang kita dapatkan adalah "ini isi var y" atau data pada inputan y yang pertama.

ini membuktikan bahwa penamaan variabel pada bahasa pemrograman python ini sangat sensitif, meskipun bernama sama tetapi huruf besar dan kecilnya berbeda maka variabel tersebut juga dianggap berbeda, jadi hati hati ya teman-teman dalam pemberian nama variabel, bisa bisa program teman-teman mengalami error karena variabel yang teman-teman inisialisasi berbeda dengan variabel yang teman-teman panggil.

### Informasi Penggunaan fungsi print()

setelah teman-teman mempelajari penggunaan variabel pada bahasa pemrogramaan python, selanjutnya author ingin berbagi sedikit tentang penggunaan fungsi print, seperti yang teman-teman ketahui fungsi print ini sangat sering kita gunakan dan teman-teman juga pasti sudah paham tentang apa itu fungsi print ini, meskipun begitu autor tetap akan menjelaskan tentang fungsi print ini, fungsi print() ini digunakan untuk menampilkan sebuah output pada console, nah ada beberapa cara yang bisa kita gunakan pada fungsi print ini

pertama teman-teman bisa menampilkan 2 output menggunakan 1 fungsi print() dengan cara menggabungkan 2 output tersebut menggunakan tanda tambah "+" ataupun tanda koma ",".
{{< trinket "https://trinket.io/embed/python3/5359fa7168" >}}


apa sih beda nya penggunaan tanda tambah dan koma ini, perbedaan pertama dapat kita lihat langsung pada output di atas dimana jika kita menggunakan tanda tambah maka isi dari variabel x dan y akan langsung digabung atau dalam artian kedua output tersebut akan menjadi 1 output, itu di buktikan dengan bergabungnya isi x dan y tanpa adanya spasi,

sedangkan jika menggunakan tanda koma maka output yang kita dapatkan juga adalah 2 output dalam artian nilai x dan nilai y menjadi output yang berbeda meskipun masih dalam 1 baris.
{{< trinket "https://trinket.io/embed/python3/d338383058" >}}

perbedaan selanjutnya penggunaan tanda tambah "+" dan koma "," terletak pada tipe data yang bisa digabung dalam 1 fungsi print, jika menggunakan tanda tambah maka tipe data pada ke-2 variabel harus sama, misal pada variabel 1 merupakan string maka variabel ke-2 juga harus merupakan string, jika berbeda maka program tersebut akan mengalami error seperti di bawah ini
{{< trinket "https://trinket.io/embed/python3/5957ed3b80" >}}


berbeda dengan penggunaan tanda koma, untuk penggunaan tanda koma sendiri tipe data dari kedua variabel tidak harus sama bisa kita lihat pada contoh di bawah ini
{{< trinket "https://trinket.io/embed/python3/ab03ed4d03" >}}


Kesimpulan
----------

dapat kita simpulkan bahwa penggunaan variabel pada bahasa pemrogramaan python ini memiliki beberapa aturan penamaan dan penggunaan nya, dari sisi penamaan pada variabel python tidak boleh diawali dengan angka tetapi bisa dimulai dengan huruf atau tanda garis bawah (uderscore "\_") dan tidak boleh dipisah dengan spasi. Sedangkan dari sisi penggunaan kita tidak perlu menginisialisasi tipe data pada bahasa pemrogramaan python.
