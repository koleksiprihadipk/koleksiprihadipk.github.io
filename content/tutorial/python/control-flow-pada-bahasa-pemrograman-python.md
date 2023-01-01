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

yang pertama adalah *if statement*, fungsi dari *if statement* ini merupakan fungsi untuk mengambil keputusan pada saat suatu kondisi yang di inginkan terpenuhi, misal kita akan membuat sebuah program untuk mengecek apakah nilai dari sebuah variabel bernilai 5 dan jika iya maka akan menampilkan pesan ```"variabel bernilai 5"``` seperti pada gambar diagram dibawah ini.

(img)

berikut kode programnya ya teman-teman

```python
x = 5
if(x == 5):
    print("Variabel berniali 5")
```
{{< btn python3 "id triket" "yuk dicoba!" >}}

pada baris pertama kita akan memberikan nilai terhadap sebuah variabel yang kemuadian akan kita cek apakah variabel tersebut bernilai 5 dengan menggunakan fungsi ```if``` dan menggunkan operator sama dengan (```==```) seperti tampak di atas, jika iya maka akan ditampilkan output pada terminal ```Variabel bernilai 5```, silahkan teman-teman mencoba pada lab yang telah author sediakan di atas dengan mengganti ganti nilai pada variabel dan operator sesuai tabel di atas dan amati perbedaannya.

## if else statement
*if else statement* merupakan sebuah fungsi untuk mengambil keputusan pada saat suatu kondisi yang diinginkan terpenuhi dan menjalankan keputusan lain jika kondisi tersebut tidak terpenuhi, contohnya seperti berikut

(img)

maka kode programnya akan seperti ini
```python
x = 4
if(x == 5):
    print("Variabel berniali 5")
else:
    print("Variabel tidak berniali 5")
```
{{< btn python3 "id triket" "yuk dicoba!" >}}

berbeda bukan dengan program yang menggunakan *if statement* dimana pada program *if statement* jika kondisi tidak terpenuhi maka tidak akan menampilkan apa-apa pada terminal, sedangkan dengan menggunakan *if else statement* ini akan menampilkan pesan lain

## elif statement
jika kita menginginkan lebih dari satu kondisi yang dapat kita cek apakah terpenuhi atau tidak maka kita dapat menggunakan *elif statement* bahkan penggunaan *elif statement* ini juga dapat digunakan untuk bisa sampai tak terhingga pengecekan kondisi yang dilakukan berikut 

(img)

maka kode programnya akan seperti ini
```python
x = 4
if(x == 5):
    print("Variabel berniali 5")
elif(x == 4):
    print("Variabel berniali 4")
elif(x == 3):
    print("Variabel berniali 3")
elif(x == 2):
    print("Variabel berniali 2")
elif(x == 1):
    print("Variabel berniali 1")
```
{{< btn python3 "id triket" "yuk dicoba!" >}}

atau bisa juga jika ingin menambahkan ```else``` seperti dibawah ini
```python
x = 0
if(x == 5):
    print("Variabel berniali 5")
elif(x == 4):
    print("Variabel berniali 4")
elif(x == 3):
    print("Variabel berniali 3")
elif(x == 2):
    print("Variabel berniali 2")
elif(x == 1):
    print("Variabel berniali 1")
else:
    print("Variabel tidak berniali 1,2,3,4 atau 5")
```
{{< btn python3 "id triket" "yuk dicoba!" >}}

penggunaan dari *elif statement* ini juga bisa digunakan dengan kondisi yang berbeda tipe data contohnya
```python
x = 'a'
if(x == 5):
    print("Variabel berniali 5")
elif(x == 4.5):
    print("Variabel berniali 4.5")
elif(x == 'a'):
    print("Variabel berniali 'a'")
else:
    print("Variabel tidak berniali 'a',4.5 atau 5")
```
{{< btn python3 "id triket" "yuk dicoba!" >}}

## match statement
selanjutnya adalah *match statement* merupakan sebuah pencocokan pola struktural, *match statement* ini hanya ada pada python verisi 3.10 keatas.
fungsi dari *match statement* ini hampir sama dengan *statement* percabangan *elif* di atas, tetapi jenis kondisi yang dapat digunakan sedikit terbatas karena tidak bisa menggunakan operator karena penggunaan *match statement* ini hanya untuk mengecek apakah nilai dari sebuah variabel sesuai dengan case yang kita berikan

langsung saja kita coba dengan kode program di bawah ini
```python
x = 1
match x:
    case 1:
        print ("variabel bernilai 1")
    case 2:
        print ("variabel bernilai 2")
    case 'a':
        print ("variabel bernilai a")
    case 'b':
        print ("variabel bernilai b")
```
{{< btn python3 "id triket" "yuk dicoba!" >}}

seperti yang kita lihat diatas fungsinya mirip dengan *elif statement* yang berbeda hanya sintaks nya saja, bahkan untuk jika kita ingin menampilkan pesan jika nilai sebuah variabel tidak ada yang cocok maka kita bisa menggunakan sintaks seperti ```else```, berikut sintaksnya pada *match statement*

```python
x = "nilai"
match x:
    case 1:
        print ("variabel bernilai 1")
    case 2:
        print ("variabel bernilai 2")
    case 'a':
        print ("variabel bernilai a")
    case 'b':
        print ("variabel bernilai b")
    case _:
        print("Variabel tidak bernilai 1, 2, a ataupun b")
```
{{< btn python3 "id triket" "yuk dicoba!" >}}

seperti yang terlihat diatas kita hanya menambah sebuah case *underscore* ( ```case _:``` ) saja

## for statement
*for statement* merupakan fungsi untuk melakukan perintah secara berulang-ulang, sebagai contoh kita akan membuat sebuah program untuk menampilkan kata "saya membuat program python" sebanyak 10 kali, jika kita tidak menggunakan *for statement* maka code programnya akan seperti berikut ini
```python
print("saya membuat program python")
print("saya membuat program python")
print("saya membuat program python")
print("saya membuat program python")
print("saya membuat program python")
print("saya membuat program python")
print("saya membuat program python")
print("saya membuat program python")
print("saya membuat program python")
print("saya membuat program python")
```
masih tidak masalah dengan jumlahnya, jika kita ingin menampilkan sebanyak 200 maka kita akan memakan banyak waktu untuk membuat program tersebut, jadi disini kita akan menggunakan *for statement*, berikut kode programnya
```python
for i in range(200):
  print("saya membuat program python")
```
{{< btn python3 "id triket" "yuk dicoba!" >}}

```i``` pada program diatas merupakan sebuah variabel yang akan menampung indeks dimana indeks tersebut merupakan bilangan cacah yang dimulai dari 0 hingga range yang kita tentukan didalam fungsi ```range()```, yuk kita lihat nilai dari ```i``` saat kita menggunakan *for statement* ini
 ```python
for i in range(10):
  print(i)
```
{{< btn python3 "id triket" "yuk dicoba!" >}}

apakah harus ```i```? tentu saja tidak, karena itu hanya sebuah variabel jadi kita bisa mengubahnya sesuai dengan selera kita bisa saja kita gunain huruf lain, kata dan lain-lain sesuai aturan pada penamaan variabel pada bahasa pemrograman python (teman-teman bisa mempelajari aturan nya di artikel ini ya ["Variabel pada bahasa pemrograman python"](https://panduankoding.com/tutorial/python/variabel-pada-bahasa-pemrograman-python/)), sebagai contoh silahkan teman-teman coba kode di bawah ini satu satu ya
 ```python
for a in range(10):
  print(a)
```
{{< btn python3 "id triket" "yuk dicoba!" >}}

 ```python
for kata in range(10):
  print(kata)
```
{{< btn python3 "id triket" "yuk dicoba!" >}}

 ```python
for kata-kata in range(10):
  print(kata-kata)
```
{{< btn python3 "id triket" "yuk dicoba!" >}}

 ```python
for kata_kata in range(10):
  print(kata_kata)
```
{{< btn python3 "id triket" "yuk dicoba!" >}}

// buat penjelasan tentang range

*for statement* juga bisa kita gunakan untuk membaca nilai setiap index dari variabel list, contoh kita mempunya sebuah list

```python
listkita = ['nilai index pertama (0)','nilai index kedua (1)']

for i in listkita:
  print(i)
```
{{< btn python3 "id triket" "yuk dicoba!" >}}

dapat kita lihat pada kode program di atas variabel ```i``` sekarang tidak lagi berisi 


