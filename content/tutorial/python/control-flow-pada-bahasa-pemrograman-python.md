---
draft: false
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

image: /images/controlflow-pada-bahasa-pemrograman-python.png
thumbnail: /images/controlflow-pada-bahasa-pemrograman-python.png
description: "Belajar bahasa pemrograman python untuk pemula bagian 4 pengeambil keputusan, percabangan dan perulangan pada bahasa pemrograman python"

---
halo teman-teman setelah kita mempelajari tentang variabel pada bahasa pemrograman python pada artikel [sebelumnya🏹](https://panduankoding.com/tutorial/python/variabel-pada-bahasa-pemrograman-python/), selanjutnya kita akan mempelajari tentang control flow pada bahasa pemrograman python.

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

yang pertama adalah *if statement*, fungsi dari *if statement* ini merupakan fungsi untuk mengambil keputusan pada saat suatu kondisi yang di inginkan terpenuhi, misal kita akan membuat sebuah program untuk mengecek apakah nilai dari sebuah variabel bernilai 5 dan jika iya atau kondisi terpenuhi maka akan menampilkan pesan ```"variabel bernilai 5"```.

berikut kode programnya ya teman-teman

```python
x = 5
if(x == 5):
    print("Variabel berniali 5")
```
{{< terminal id="1" command="python3 aplikasisaya.py" class="terminalSukses" >}}
Variabel bernilai 5
{{< /terminal >}}

{{< btn-python3 "c30f8df90f" "yuk dicoba!" >}}

pada baris pertama kita akan memberikan nilai terhadap sebuah variabel yang kemuadian akan kita cek apakah variabel tersebut bernilai 5 dengan menggunakan fungsi ```if``` dan menggunkan operator sama dengan (```==```) seperti tampak di atas, jika iya maka akan ditampilkan output pada terminal ```Variabel bernilai 5```, silahkan teman-teman mencoba pada lab yang telah author sediakan di atas dengan mengganti ganti nilai pada variabel dan operator sesuai tabel di atas dan amati perbedaannya.

## if else statement
*if else statement* merupakan sebuah fungsi untuk mengambil keputusan pada saat suatu kondisi yang diinginkan terpenuhi dan menjalankan keputusan lain jika kondisi tersebut tidak terpenuhi.

maka kode programnya akan seperti ini
```python
x = 4
if(x == 5):
    print("Variabel berniali 5")
else:
    print("Variabel tidak berniali 5")
```
{{< terminal id="2" command="python3 aplikasisaya.py" class="terminalSukses" >}}
Variabel tidak bernilai 5
{{< /terminal >}}
{{< btn-python3 "9b4bcf8615" "yuk dicoba!" >}}

berbeda bukan dengan program yang menggunakan *if statement* dimana pada program *if statement* jika kondisi tidak terpenuhi maka tidak akan menampilkan apa-apa pada terminal, sedangkan dengan menggunakan *if else statement* ini akan menampilkan pesan lain

## elif statement
jika kita menginginkan lebih dari satu kondisi yang dapat kita cek apakah terpenuhi atau tidak maka kita dapat menggunakan *elif statement* bahkan penggunaan *elif statement* ini juga dapat digunakan untuk bisa sampai tak terhingga pengecekan kondisi yang dilakukan berikut

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
{{< terminal id="3" command="python3 aplikasisaya.py" class="terminalSukses" >}}
Variabel bernilai 4
{{< /terminal >}}
{{< btn-python3 "e24ca70c5f" "yuk dicoba!" >}}

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
{{< terminal id="4" command="python3 aplikasisaya.py" class="terminalSukses" >}}
Variabel tidak berniali 1,2,3,4 atau 5
{{< /terminal >}}
{{< btn-python3 "ad43cff00c" "yuk dicoba!" >}}

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
{{< terminal id="5" command="python3 aplikasisaya.py" class="terminalSukses" >}}
Variabel berniali 'a'
{{< /terminal >}}
{{< btn-python3 "d2285e6630" "yuk dicoba!" >}}

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
{{< terminal id="6" command="python3 aplikasisaya.py" class="terminalSukses" >}}
variabel bernilai 1
{{< /terminal >}}
{{< btn-python3 "21c2279105" "yuk dicoba!" >}}

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
{{< terminal id="7" command="python3 aplikasisaya.py" class="terminalSukses" >}}
Variabel tidak bernilai 1, 2, a ataupun b
{{< /terminal >}}
{{< btn-python3 "dbeaba8cf6" "yuk dicoba!" >}}

seperti yang terlihat diatas kita hanya menambah sebuah case *underscore* ( ```case _:``` ) saja

## for dan statement
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
{{< terminal id="8" command="python3 aplikasisaya.py" class="terminalSukses" >}}
saya membuat program python <br>
saya membuat program python<br>
saya membuat program python<br>
saya membuat program python<br>
saya membuat program python<br>
saya membuat program python<br>
saya membuat program python<br>
saya membuat program python<br>
saya membuat program python<br>
saya membuat program python
{{< /terminal >}}

masih tidak masalah dengan jumlahnya, jika kita ingin menampilkan sebanyak 200 maka kita akan memakan banyak waktu untuk membuat program tersebut, jadi disini kita akan menggunakan *for statement*, berikut kode programnya
```python
for i in range(200):
  print("saya membuat program python")
```
{{< terminal id="9" command="python3 aplikasisaya.py" class="terminalSukses" >}}
saya membuat program python <br>
saya membuat program python<br>
saya membuat program python<br>
saya membuat program python<br>
saya membuat program python<br>
saya membuat program python<br>
saya membuat program python<br>
saya membuat program python<br>
saya membuat program python<br>
saya membuat program python <br>
...
{{< /terminal >}}
{{< btn-python3 "f648f59303" "yuk dicoba!" >}}

dapat kita lihat pada kode program di atas untuk melakukan perulangan perintah menampilkan text ```"saya membuat program python"``` sebanyak 200 kali kita memerlukan sebuah fungsi ```range()```. Fungsi range ini berfungsi untuk menghasilkan list yang berisi deret bilangan cacah yang dimulai dari 0 hingga range yang kita tentukan didalam fungsi ```range()``` yang kemudian akan dilakukan perulangan untuk membaca deret bilangan tadi dan memasukan setiap bilangan per deret kedalam sebuah variabel, dimana pada kode program di atas variabel tersebut kita inisialisasi dengan huruf ```i```, yuk kita lihat nilai dari ```i``` saat kita menggunakan *for statement* ini
 ```python
for i in range(10):
  print(i)
```
{{< terminal id="10" command="python3 aplikasisaya.py" class="terminalSukses" >}}
0<br>
1<br>
2<br>
3<br>
4<br>
5<br>
6<br>
7<br>
8<br>
9
{{< /terminal >}}

{{< btn-python3 "40d7a0c9c1" "yuk dicoba!" >}}

apakah harus ```i```? tentu saja tidak, karena itu hanya sebuah variabel jadi kita bisa mengubahnya sesuai dengan selera kita bisa saja kita gunain huruf lain, kata dan lain-lain sesuai aturan pada penamaan variabel pada bahasa pemrograman python (teman-teman bisa mempelajari aturan nya di artikel ini ya ["Variabel pada bahasa pemrograman python"](https://panduankoding.com/tutorial/python/variabel-pada-bahasa-pemrograman-python/), sebagai contoh silahkan teman-teman coba kode di bawah ini satu satu ya

 ```python
for kata in range(10):
  print(kata)
```
{{< terminal id="11" command="python3 aplikasisaya.py" class="terminalSukses" >}}
0<br>
1<br>
2<br>
3<br>
4<br>
5<br>
6<br>
7<br>
8<br>
9
{{< /terminal >}}

{{< btn-python3 "62b5e05d12" "yuk dicoba!" >}}

 ```python
for kata_kata in range(10):
  print(kata_kata)
```
{{< terminal id="12" command="python3 aplikasisaya.py" class="terminalSukses" >}}
0<br>
1<br>
2<br>
3<br>
4<br>
5<br>
6<br>
7<br>
8<br>
9
{{< /terminal >}}

{{< btn-python3 "521790b733" "yuk dicoba!" >}}

*for statement* juga bisa kita gunakan untuk membaca nilai setiap index dari variabel list, contoh kita mempunyai sebuah list seperti ini ```listkita = ['nilai index pertama (0)','nilai index kedua (1)']```, selanjutnya kita akan menampilkan nilai dari setiap indeks nya, jika secara manual kan menjadi seperti ini
```python
listkita = ['nilai index pertama (0)','nilai index kedua (1)']
print(listkita[0])
print(listkita[1])
```
{{< terminal id="13" command="python3 aplikasisaya.py" class="terminalSukses" >}}
nilai index pertama (0) <br>
nilai index kedua (1)
{{< /terminal >}}

{{< btn-python3 "70a5b8c4c6" "yuk dicoba!" >}}

kelemahannya jika kita menampilkann secara manual🤔, pertama kita harus tahu dulu berapa jumlah dari indeks yang ada pada list, selanjutnya kita harus menuliskan fungsi ```print()``` secara berulang-ulang, sehingga kurang efektif jika nanti list yang akan kita tampilkan bersifat dinamis, contohnya pada saat kita membuat program *TO DO*.

jika menggunakan *for statement* kode programnya kan seperti ini

```python
listkita = ['nilai index pertama (0)','nilai index kedua (1)']
for i in listkita:
  print(i)
```
{{< terminal id="14" command="python3 aplikasisaya.py" class="terminalSukses" >}}
nilai index pertama (0) <br>
nilai index kedua (1)
{{< /terminal >}}

{{< btn-python3 "a7b6dd669b" "yuk dicoba!" >}}

dapat kita lihat pada kode program di atas variabel ```i``` sekarang tidak lagi berisi deret bilangan cacah tapi sekarang berisi nilai dari setiap index pada list **"listkita"**.

## Break dan Continue Statement
selanjutnya adalah *break* dan *continue statement*, kedua *statement* ini akan sering kita gunakan untuk mengatur alur perulangan (loop control flow). 

*break statement* berfungsi jika kita ingin memiliki kondisi dimana kita harus menghentikan perulangan sebelum semua iterasi selesai (dipertengahan proses perulangan), 

sedangkan untuk *continue statement* akan kita gunakan saat kita ingin memiliki kondisi dimana kita harus langsung melewati sebuah iterasi tanpa harus kita proses sebelumnya pada perulangan

contoh kasus penggunaan *break statement* adalah sebagai berikut, kita akan membuat sebuah program untuk menampilkan bilangan deret dimulai dari 0 hingga 10 tetapi program akan berhenti pada saat diangka 7, berikut kode programnya
```python
for i in range(11):
    print(i)
    if(i == 7):
        break
```
{{< terminal id="15" command="python3 aplikasisaya.py" class="terminalSukses" >}}
0<br>
1<br>
2<br>
3<br>
4<br>
5<br>
6<br>
7
{{< /terminal >}}

{{< btn-python3 "7a119059aa" "yuk dicoba!" >}}

dapat kita lihat di atas program akan langsung berhenti setelah terdapat angka 7, contoh lainnya akan seperti dibawah ini
```python
for i in "saya belajar python":
    print(i)
    if(i == 'p'):
        break
```
{{< terminal id="16" command="python3 aplikasisaya.py" class="terminalSukses" >}}
s<br>
a<br>
y<br>
a<br>
 <br>
b<br>
e<br>
l<br>
a<br>
j<br>
a<br>
r<br>
 <br>
p
{{< /terminal >}}

{{< btn-python3 "d5d6fa8668" "yuk dicoba!" >}}

oh iya bagaimana jika kita tidak mau angka atau huruf yang menjadi kondisi pada break tidak ikut di tampilkan? untuk melakukannya teman-teman hanya perlu merubah logika nya saja dengan cara merubah posisi fungsi ```print``` setelah fungsi ```if``` seperti kode di bawah ini
```python
for i in range(11):
    if(i == 7):
        break
    print(i)
```
{{< terminal id="17" command="python3 aplikasisaya.py" class="terminalSukses" >}}
0<br>
1<br>
2<br>
3<br>
4<br>
5<br>
6
{{< /terminal >}}

{{< btn-python3 "40f74158db" "yuk dicoba!" >}}

berikutnya adalah penggunaan *continue satatement* dimana kita ingin melompati sebuah iterasi perulangan pada saat kondisi tertentu, contohnya kita akan membuat sebuah program untuk menampilkan deret angka mulai dari 0-10 tetapi akan melangkaui angka 7, berikut contoh kode programnya
```python
for i in range(11):
    if(i == 7):
        continue
    print(i)
```
{{< terminal id="18" command="python3 aplikasisaya.py" class="terminalSukses" >}}
0<br>
1<br>
2<br>
3<br>
4<br>
5<br>
6<br>
8<br>
9<br>
10
{{< /terminal >}}

{{< btn-python3 "cab9e50395" "yuk dicoba!" >}}

dapat kita lihat pada program di atas pada saat perulangan sudah menemukan angka 7 maka fungsi setelahnya yaitu fungsi ```print()``` akan dilompati dan melanjutkan perulangan pada iterasi berikutnya.


# Kesimpulan
dengan menggunakan *control flow* kita bisa menggunakan logika yang lebih kompleks pada program kita dimana kita bisa menggunakan pengambilan keputusan (*decision*), perulangan (*loop*) dan percabangan (*jump*).