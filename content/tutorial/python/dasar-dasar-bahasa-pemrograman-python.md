---
draft: false
date: 2022-12-23T23:46:08+07:00
title: "Tutorial Python Bagian 2: Dasar Dasar Bahasa Pemrograman Python"
slug: dasar-dasar-bahasa-pemrograman-python

tags:
    - Python

categories:
    - Tutorial Python

authorname: "koleksiprihadi"
authorlink: "https://koleksiprihadi.github.io/"

authorname: "koleksiprihadi"
authorlink: "https://koleksiprihadi.github.io/"
authorphoto: "/images/koleksiprihadi.jpeg"

image: https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEg1rw7cm87IfzJ6AygWsZmFfQ1iKV33OApVCvKwM5d7_t-hkk2JpljpIUdEUppQs6TVNGYgxHq8detGBQ_wzmXO0OlwnE7uwFXdpwdIu26eyB5Lk358vyL7PLty9XerLyz8hBrMa9WyvhtG9JUOuQLSj20wGD1FNh_up_uE8TBcCKt7nYEgq25EhXuH/s1280/dasar-dasar%20bahasa%20pemrograman%20python.png
thumbnail: https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEg1rw7cm87IfzJ6AygWsZmFfQ1iKV33OApVCvKwM5d7_t-hkk2JpljpIUdEUppQs6TVNGYgxHq8detGBQ_wzmXO0OlwnE7uwFXdpwdIu26eyB5Lk358vyL7PLty9XerLyz8hBrMa9WyvhtG9JUOuQLSj20wGD1FNh_up_uE8TBcCKt7nYEgq25EhXuH/s1280/dasar-dasar%20bahasa%20pemrograman%20python.png
description: "Belajar bahasa pemrograman python untuk pemula bagian 2 yang harus di ketahui sebelum koding menggunakan bahasa pemrograman python"
---

hallo teman-teman pada artikel kali ini author akan membagikan kepada teman-teman tentang dasar-dasar dari bahasa pemrograman python, artikel ini adalah lanjutan dari seri belajar bahasa pemrograman python. jika sebelumnya kita mempelajari apa itu python, perbedan python 2 dan python 3 dan juga cara menginstall python pada komputer teman-teman. nah pada bagian ini kita akan mempelajari dasar-dasar yang harus teman-teman ketahui tentang bahasa pemrograman python terutama pada python 3.

Bagaimana Cara Menjalankan Program Python?
------------------------------------------

pada artikel sebelumnya yang berjudul [bahasa pemrograman python untuk pemula](https://panduankoding.com/tutorial/python/bahasa-pemrograman-python-untuk-pemula/) author juga telah memberikan contoh bagaimana cara mengeksekusi program python teman-teman tetapi itu hanya sekilas dan tanpa ada penjelasannya, nah pada artikel kali ini author akan menjelaskan lagi secara mendalam bagaimana cara untuk menjalankan program python.

  

Untuk menjalankan program python ada beberapa cara yang dapat dilakukan seperti menjalankan kodingan langsung pada terminal/cmd dimana program akan dieksekusi baris-perbaris maupun dengan menggunakan file dimana program akan dieksekusi setelah teman-teman menuliskan keseluruhan baris kode program teman-teman.

  

> perlu teman-teman ketahui kedua cara diatas sebenarnya sama saja, karena python merupakan bahasa interpreter dimana komputer akan mengeksekusi kode program secara baris-perbaris

###  Menjalankan melalui terminal/cmd

Cara pertama adalah dengan menulis dan menjalankan program python langsung pada terminal/cmd cara ini biasa disebut dengan _interactive mode_ dimana setiap baris kode yang kita ketikan akan langsung dieksekusi dan disimpan di dalam memori sementara, berikut tampilan dari _interactive mode_ pada bahasa pemrograman python

[![cara menggunakan interactive mode pada python 3](https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjN_O7fnxdEzNpDpe1EETzbnEp231L6X0nmHGVzlvEUh575yMMNDAMg39i4V1h2Oyoybk79ZQtmSzu8MDjD4jO1Kz5dXIf8uZae2J8srEp6W6wG_-S_153O_XChZG2zl7HqAUgAg-MDbh8c4a16V2h6hN4Cj0GiKDI4801x3bILkdIoumGoe9vLXKWC/w320-h92/dasar-dasar%20bahasa%20pemrograman%20python%201.png "cara menggunakan interactive mode pada python 3")](https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjN_O7fnxdEzNpDpe1EETzbnEp231L6X0nmHGVzlvEUh575yMMNDAMg39i4V1h2Oyoybk79ZQtmSzu8MDjD4jO1Kz5dXIf8uZae2J8srEp6W6wG_-S_153O_XChZG2zl7HqAUgAg-MDbh8c4a16V2h6hN4Cj0GiKDI4801x3bILkdIoumGoe9vLXKWC/s735/dasar-dasar%20bahasa%20pemrograman%20python%201.png)

untuk masuk ke _interactive mode_ pada bahasa pemrograman python teman-teman cukup dengan membuka terminal/cmd pada komputer teman-teman dan selanjutnya teman-teman dapat menjalankan perintah

```python
# menjalankan pada linux
python3

# Untuk mac ataupun windows (terkadang cukup dengan)
python
```

Jika teman-teman menggunakan linux teman-teman bisa menjalankan _interactive mode_ pada python 3 dengan cara menambahakan nomor versi setelah kata python, sedangkan untuk di mac dan windows terkadang hanya cukup mengeksekusi perintah python saja, kecuali teman-teman dulunya pernah menginstal python 2 terlebih dahulu baru menginstal python 3 maka teman-teman untuk masuk ke _interactive mode_ pada python tiga juga perlu menuliskan nomor versi setelah kata python

  

Teman-teman bisa menuliskan kode program pada baris yang diberi tanda ">>>", sekarang kita coba membuat sebuah program pada _interactive mode_ ini 

```bash
>>> print("saya membuat program pada interactive mode") 
```

pada saat teman-teman menekan enter setelah kode program diatas maka kode program tersebut akan langsung tereksekusi

```bash
>>> print("saya membuat program pada interactive mode")
saya membuat program pada interactive mode
>>>
```

dapat dilihat dari contoh di atas kode program teman-teman akan langsung tereksekusi di bawahnya dan akan memberikan kepada teman-teman sebuah baris baru untuk menetikan kode program lagi (dengan tanda ">>>"), untuk menghentikan _interactive mode_ teman-teman bisa menggunkan fungsi "exit()".

[![penggunaan fungsi exit() pada interactive mode python](https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgjiR5LODEPTsGWoQmQsC60wU2wUvoOlDwKAZ-WvOr1P2POq4EJTIfcXCkJq6Gdq1EryiRKtyV5mZaqYkz45MdCEjKkByWIq3YUFRuD8zlO_6WW2fsn8CSfchaSO9PA_0-NsNEwyPzcq81EYZEzYGYcDu1GHi48UXQdLR-_o_WRskBitOHEh0fxwbh3/w320-h115/dasar-dasar%20bahasa%20pemrograman%20python%202.png "penggunaan fungsi exit() pada interactive mode python")](https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgjiR5LODEPTsGWoQmQsC60wU2wUvoOlDwKAZ-WvOr1P2POq4EJTIfcXCkJq6Gdq1EryiRKtyV5mZaqYkz45MdCEjKkByWIq3YUFRuD8zlO_6WW2fsn8CSfchaSO9PA_0-NsNEwyPzcq81EYZEzYGYcDu1GHi48UXQdLR-_o_WRskBitOHEh0fxwbh3/s742/dasar-dasar%20bahasa%20pemrograman%20python%202.png)

### Menjalankan melalui file

Selanjutnya kita akan menjalankan program python kita dimana program tersebut terlebih dahulu akan kita tulis dalam sebuah file, perlu teman-teman ketahui file program dari python itu berekstensi "py" yuk langsung saja pertama teman-teman buka text editor kesayangan teman-teman dan buka lah direktori dimana teman-teman akan menuliskan program teman-teman dan terakhir buatlah file dengan nama "programpython.py", untuk penamaan file author sarankan keteman-teman untuk tidak menggunakan spasi yaa..

  

oke setelah teman-teman sudah membuat file silahkan untuk menuliskan kode program seperti sebelumnya diatas pada file program python teman-teman.

[![membuat file program python](https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEj0hieHKOpGb1QqEILx-gKtYM_PpczdxKY1qkNtGfEifO1E-Ch1euZAQUs71nZz1gYNcMemVvtA28IgfGCT-M0f6v1QBa9a8jGF842mbJFaIXtS8vKDUSiIg4imp8abcEZGGtWiO4fJAWEVMcMqJaPX2ZRrWr64ZPMhhDOvkreS6kdGl3yshB08GCX0/w320-h129/dasar-dasar%20bahasa%20pemrograman%20python%203.png "membuat file program python")](https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEj0hieHKOpGb1QqEILx-gKtYM_PpczdxKY1qkNtGfEifO1E-Ch1euZAQUs71nZz1gYNcMemVvtA28IgfGCT-M0f6v1QBa9a8jGF842mbJFaIXtS8vKDUSiIg4imp8abcEZGGtWiO4fJAWEVMcMqJaPX2ZRrWr64ZPMhhDOvkreS6kdGl3yshB08GCX0/s1075/dasar-dasar%20bahasa%20pemrograman%20python%203.png)

  

Setelah teman-teman sudah menuliskan kode program seperti pada gambar diatas, selanjutnya teman-teman save dulu dengan cara ctrl+s.

  

selanjutnya teman-teman buka terminal/cmd teman-teman selanjutnya pada terminal/cmd teaman-teman bukalah direktori dimana teman-teman menyimpan file program tadi dengan perintah cd

```bash
cd direktori
```

misal teman-teman yang menggunakan windows menyimpan pada direktori D:/programku atau pada folder "programku" yang tersimpan pada data "D" maka teman-teman bisa menjalankan perintah cd seperti berikut

```bash
cd D:\programku
```

untuk teman-teman pengguna mac/linux dan menyimpan file pada direktori ~/Document/programku atau pada folder "programku" yang tersimpan pada folder "Document" maka perintahnya seperti berikut

```bash
# pada mac
cd ~/Document/programku

# pada linux
cd Document/programku
```

terlihat di atas perbedaan penggunaan cd pada terminal dan cmd untuk cmd (windows) pemisah antara sub folder dan folder utama menggunkan backslash " \\ " sedangkan pada terminal (mac dan linux) menggunakan slash " / ".

  

setelah terminal/cmd teman-teman sudah berada pada direktori dimana teman-teman menyimpan file program teman-teman, selanjutnya teman-teman bisa menjalankan program python teman-teman dengan cara 

```bash
python3 programpython.py
```

atau jika teman-teman menggunakan text editor VScode (visual studio code) teman-teman bisa langsung menjalankan program teman-teman tanpa harus membuka terminal/cmd teman-teman dengan hanya menekan ctrl+f5 atau bisa menekan tombol run seperti pada gambar dibawah (yang dilingkar merah ya teman-teman) dan program teman-teman akan berjalan pada terminal yang akan terbuka pada layout dibawah pada vscode

[![](https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgrCw6CueytVSgcc8dTIC4Y2HU8BkfoNBy98N6o4uUX2SKJoGOaCMkyf0gnFoCNcGkY6RigoKV-10RGWta-mytTOfVIt2UJ1yIyoOp8ORQMakKrg1F0mypO1xypk2ZcYVRzqAJ4PlCRQcT9v9j4gx3-vYQLIgmbUshujGiHNP0fOYRuV9h28W0q5_BP/s320/dasar-dasar%20bahasa%20pemrograman%20python%204.png)](https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgrCw6CueytVSgcc8dTIC4Y2HU8BkfoNBy98N6o4uUX2SKJoGOaCMkyf0gnFoCNcGkY6RigoKV-10RGWta-mytTOfVIt2UJ1yIyoOp8ORQMakKrg1F0mypO1xypk2ZcYVRzqAJ4PlCRQcT9v9j4gx3-vYQLIgmbUshujGiHNP0fOYRuV9h28W0q5_BP/s1366/dasar-dasar%20bahasa%20pemrograman%20python%204.png)

Python Indentation
------------------

_Indentation_ adalah jarak spasi pada awal baris kode, tidak seperti bahasa pemrograman lain yang menggunakan tanda kurung kurawal "{}" untuk kode blok atau kode yang memerlukan beberapa baris untuk mendefinisikannya misal untuk perintah percabangan, pada bahasa pemrograman python ini kita menggunakan _indentation_ atau jarak awal pada baris kode misal

  

pada bahasa php

```php
if(5 > 1){
    echo "ini programku";
}
```

pada python

```python
if(5 > 1):
    print("ini programku")
```

spasi sebelum fungsi print dan echo itulah yang disebut _indentation,_ pada bahasa pemrograman python _indentation_ ini sangat penting tidak seperti bahasa pemrograman lain, misal pada bahasa php seperti kode diatas jika _indentation_ pada sebelum echo di hapus program akan tetap jalan, tetapi pada bahasa python jika _indentation_ dihapus maka program akan mengalami error

  

menghapus _indentation_ pada php

```php
if(5 > 1){
echo "ini programku";
}
```

menghapus _indentation_ pada python

```python
if(5 > 1):
print("ini programku")
```

berikut detail error yang kita dapatkan jika tidak ada _indentation_ pada python (_expected an indented block_)

```bash
  File "/home/koleksiprihadi/WEB/tutor/programpython.py", line 2
    print("ini programku")
    ^
IndentationError: expected an indented block
```

Python Commenting
-----------------

Selanjutnya adalah _commenting_ atau pemberian komen, pemberian komen ini sendiri berguna untuk kita menuliskan penjelasan tentang kode yang kita tuliskan yang berguna untuk teman-teman nanti untuk memahami maksud dari program yang teman-teman tuliskan.

  

pemberian komen ini tidak akan ikut tereksekusi jika teman-teman menjalankan program teman-teman, jadi pemberian komen ini juga bisa untuk jika sewaktu-waktu teman-teman ingin ada beberapa baris kode yang tidak ingin dijalankan dahulu tapi teman-teman tidak ingin menghapus baris kode tersebut

  

pada python pemberian tanda komen menggunakan tanda pagar "#" pada awal baris kode program atau tulisan yang ingin teman-teman jadikan komen. ada dua jenis _commenting_ yang bisa teman-teman gunakan sesuai kebutuhan:

### Single line commenting

Yang pertama adalah _single line commenting_ atau pemberian tanda komen untuk hanya satu baris, seperti dengan namanya metode ini berguna untuk teman-teman jika hanya menggunakan komen pada satu baris saja

```python
# ini adalah komentar (commenting)
```

jika pada kode program akan terlihat seperti ini

```python
# print("saya membuat program pada interactive mode")
```

### Multi line Commenting

Jika teman-teman ingin memberi komen tidak hanya satu baris sebenarnya teman-teman juga bisa menggunakan metode yang pertama hanya saja setiap baris teman-teman harus memberikan tanda pagar "#", 

```python
# if(5 > 1):
#     print("ini programku")
```

sehingga itu tidak efisien jika teman-teman ingin membuat dokumentasi atau hanya agar kode program tidak ikut tereksekusi, untuk melakukannya teman-teman bisa menggunakan tanda 3 petik satu (''') tanpa ada spasi

```python
'''if(5 > 1):
        print("ini programku")'''
```

atau bisa juga seperti ini

```python
'''
if(5 > 1):
    print("ini programku")
'''
```

silahkan teman-teman coba kedua metode _commenting_ diatas

Cara Menginstal Library
-----------------------

Library adalah kumpulan kode program yang bisa teman-teman gunakan untuk meningkatkan fungsionalitas dari kode program teman-teman, misal untuk visualisasi data pada python kita bisa menggunakan library "_matplotlib_" dan mengimportkan library tersebut ke program kita seperti yang terlihat di bawah ini

{{< E-T-P-2 >}}

untuk menginstall library kita bisa menggunakan perintah pip

```bash
pip install nama-library

# contoh menginstal matplotlib

pip install matplotlib
```

dan untuk mencari nama library untuk menginstalnya teman-teman bisa mengunjungi website [pypi.org](http://pypi.org)

Kesimpulan
----------

Dasar-dasar bahasa pemrograman python seperti bagaimana cara untuk menjalankan program python, bagaimana pengaruh _indentation_ berpengaruh pada bahasa pemrograman python, bagaimana membuat dokumentasi atau _commenting_ dan bagaimana cara menginstal library harus teman-teman ketahui terlebih dahulu sebelum belajar koding dengan bahasa pemrograman python ini
