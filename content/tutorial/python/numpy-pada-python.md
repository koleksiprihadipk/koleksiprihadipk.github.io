---
draft: false
date: 2023-06-02T13:28:10+07:00
title: "Tutorial Python Bagian 6: Numpy Pada Python"
slug: numpy-pada-python

tags:
    - Python

categories:
    - Tutorial Python

authorname: "Krisna Prihadiyanto"
authorlink: "https://koleksiprihadi.github.io/"

authorname: "Krisna Prihadiyanto"
authorlink: "https://koleksiprihadi.github.io/"
authorphoto: "/images/koleksiprihadi.jpeg"

image: /images/Numpy-pada-python.png
thumbnail: /images/Numpy-pada-python.png
description: "numpy pada python, mempelajari penggunaan basic dari library numpy pada python"
---
Numpy merupakan sebuah library pada python yang umum digunakan untuk memproses data array. Numpy sering digunakan untuk melakukan komputasi ilmiah pada python karena numpy menyediakan performa yang tinggi untuk memproses multidimensi array.

### Array Pada Numpy

Array di Numpy adalah tabel elemen (biasanya angka), semuanya bertipe sama, diindeks oleh tupel bilangan bulat positif. Di Numpy, jumlah dimensi array disebut dimensi array. Tupel bilangan bulat yang memberikan ukuran array di sepanjang setiap dimensi dikenal sebagai bentuk array. Kelas array di Numpy disebut sebagai ndarray. Elemen dalam array Numpy diakses dengan menggunakan tanda kurung siku dan dapat diinisialisasi dengan menggunakan Daftar Python bersarang.

### Membuat Array Dengan Numpy

untuk membuat array menggunakan numpy ini kita bisa menggunkan fungsi ```array()```. 

#### Membuat Array 1 Dimensi

baik langsung saja kita coba untuk membuat sebuah array 1 dimensi menggunakan fungsi tersebut

```python
# import library numpy
import numpy as np

arr = np.array([1, 2, 3])
print("Array 1 Dimensi: \n",arr)
```
outputnya
```console
[1, 2, 3]
```
dapat kita lihat pada kode di atas pada baris pertama kita mengimport library numpy dan menginisialisasi menjadi ```np```, yang kemudian kita panggil pada saat kita akan menggunakan fungsi ```array()```.

#### Membuat Array 2 Dimensi

untuk membuat array 2 dimensi, metode yang akan kita gunakan hampir sama dengan membuat array 1 dimensi, hanya saja kita akan memasukan 2 list pada fungsi ```array()```, berikut contohnya

```python
# import library numpy
import numpy as np

arr = np.array([[1, 2, 3],[4, 5, 6]])
print("Array 2 Dimensi: \n",arr)
```
outputnya
```console
Array 2 Dimensi: 
 [[1 2 3]
 [4 5 6]]
```

dapat kita lihat di atas list kedua akan menjadi baris kedua dari array 2 dimensi, begitu juga jika kita ingin membuat array 3 dimensi maka kita cukup menginputkan list ketiga pada fungsi array.

#### Membuat Array Menggunakan Tuple

selain menggunakan list kita juga bisa menggunakan tipe data lain seperti tuple untuk membuat array, untuk sintax yang kita gunakan sama dengan sebelumnya seperti pada contoh di bawah ini

```python
# import library numpy
import numpy as np

arr = np.array((1, 2, 3))
print("Array 1 Dimensi Menggunakan Tuple: \n",arr)
```
outputnya
```console
Array 1 Dimensi Menggunakan Tuple: 
 [1 2 3]
```

### Mengakses Nilai Dari Array Pada Numpy

untuk mengakses nilai dari array pada numpy ada beberapa metode yang dapat kita gunakan dimana metode-metode tersebut akan mempengaruhi seperti apa array tersebut di akses

#### 1. Mengakses keseluruhan array
yang pertama kita akan mempelajari bagaimana mengakses keseluruhan array, untuk melakukan nya kita hanya perlu memasukan nama dari variabel arraynya ke dalam fungsi ```print()``` saja, berikut contohnya

```python
# import library numpy
import numpy as np

arr = np.array([[-5, 2, 0, 4],
                [4, -0.5, 2, 0],
                [3.6, 0, 7, 8],
                [3, -7, 10, 2.0]])
print("Keseluruhan Array: ")
print(arr)
```
outputnya
```console
Keseluruhan Array: 
[[-5.   2.   0.   4. ]
 [ 4.  -0.5  2.   0. ]
 [ 3.6  0.   7.   8. ]
 [ 3.  -7.  10.   2. ]]
```

#### 2. Mengakses array dengan _Slicing_
Pertama kita akan mempelajari bagaimana menampilkan data dengan _Slicing_ pada array 1 dimensi seperti di bawah ini

```python
arr = np.array([1, 4, 2, 5, 3, 7, 6])
```
berikut sintax dari metode _Slicing_ array 1 dimensi

```python
var_array_baru = var_array_yang_ada[start:end:step]
```

dapat kita lihat pada sintax di atas metode _Slicing_ sendiri akan membuat sebuah variabel baru dimana variabel tersebut akan berisi array baru dari hasil _Slicing_ array yang ada, dan untuk memerintahkan program untuk melakukan _Slicing_ pada array kita perlu mendefinisikan notasi atau range dari _Slicing_-nya seperti ini ```[start:end:step]``` dimana start, end dan step merupakan integer. Jika salah satu di antaranya (```[start:end:step]```) tidak ditentukan, maka nilai defaultnya Start = 0, End = panjang array, Step = 1

yuk langsung kita coba dari array ini (```[1, 4, 2, 5, 3, 7, 6]```) dan kita hanya akan menampilkan atau memotong array-nya menjadi seperti ini ```[4, 5]``` maka kode programnya adalah

```python
import numpy as np

arr = np.array([1, 4, 2, 5, 3, 7, 6])
                
sliced_arr = arr[1:5:2]
print(sliced_arr)
```
outputnya
```console
[4 5]
```

pada kode program di atas kita mengatur start dengan 1 dimana artinya kita memulai _Slicing_ dari index 1 (index pada array di mulai dari 0, 1, 2, dst...), dan untuk end kita atur dengan 5 agar _Slicing_ yang kita lakukan berhenti pada index nomor 4 karena nilai pada end adalah nilai batas index yang akan di _Slicing_, dan terakhir kita atur step dengan 2 agar yang ter-_Slicing_ itu setiap 2 langkah, silahkan teman-teman coba rubah rubah nilai dari start, end dan stepnya ya (silahkan menggunakan ide di bawah ini ya...) agar lebih memahami konsepnya.

> Jika salah satu di antaranya (```[start:end:step]```) tidak ditentukan, maka nilai defaultnya Start = 0, End = panjang array, Step = 1.

{{< runidepysc >}}
import numpy as np

arr = np.array([1, 4, 2, 5, 3, 7, 6])
                
sliced_arr = arr[1:5:2]
print(sliced_arr)
{{< /runidepysc >}}

selanjutnya kita akan mempelajari bagaimana menampilkan data dengan _Slicing_ untuk array 2 dimensi, disini kita akan menggunkan array 4x4 ya teman-teman seperti di bawah ini

```python
arr = np.array([[1, 2, 3, 4],
                [5, 6, 7, 8],
                [9, 10, 11, 12],
                [13, 14, 15, 16]])
```

metode yang digunakan untuk _Slicing_ array 2 dimensi ini hampir sama dengan metode _Slicing_ pada array 1 dimensi, hanya pada metode _Slicing_ pada array 2 dimensi ini kita akan mengatur notasi atau range sebanyak 2 kali, fungsinya adalah untuk mengatur range _Slicing_ pada sumbu y (vertikal) dan sumbu x (horizontal)

langsung saja kita coba, dengan studi kasus dari array 4x4 di atas kita akan melakukan _Slicing_ agar menjadi seperti di bawah ini

```console
[[1 2 3]
 [5 6 7]]
```
untuk melakukannya kita perlu mengatur notasi _Slicing_ pada sumbu y (vertikal) start = 0, end = 2 dan step = 1. Dan pada sumbu x (horizontal) start = 0, end = 3 dan step = 1. Maka kode programnya akan menjadi seperti ini

```python
import numpy as np

arr = np.array([[1, 2, 3, 4],
                [5, 6, 7, 8],
                [9, 10, 11, 12],
                [13, 14, 15, 16]])
                
sliced_arr = arr[0:2:1, 0:3:1]
print(sliced_arr)
```
outputnya
```console
[[1 2 3]
 [5 6 7]]
```

dapat kita lihat pada kode program di atas untuk melakukan _Slicing_ pada array 2 dimensi kita akan mengatur 2 notasi dimana dimulai dengan mengatur notasi untuk sumbu y (vertikal) baru stelahnya sumbu x (horizontal) dan kedua notasi tersebut dipisah dengan tanda koma (,).

### Kesimpulan
numpy merupakan sebuah package atau library yang bisa kita gunakan untuk membuat sebuah array dan membantu memproses multidimensi array dengan cepat dan efektif, selanjutnya author akan membuat artikel tentang penggunaan numpy untuk perhitungan matematika (linier algebra).