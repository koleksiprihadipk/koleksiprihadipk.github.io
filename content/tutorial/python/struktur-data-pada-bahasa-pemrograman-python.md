---
draft: false
date: 2023-01-13T10:07:36+07:00
title: "Tutorial Python Bagian 5: Struktur Data Pada Bahasa Pemrograman Python"
slug: struktur-data-pada-bahasa-pemrograman-python

tags:
    - Python

categories:
    - Tutorial Python

authorname: "krisna prihadiyanto"
authorlink: "https://koleksiprihadi.github.io/"

authorname: "krisna prihadiyanto"
authorlink: "https://koleksiprihadi.github.io/"
authorphoto: "/images/koleksiprihadi.jpeg"

image: /images/struktur-data-pada-bahasa-pemrograman-python.png
thumbnail: /images/struktur-data-pada-bahasa-pemrograman-python.png
description: "bagaimana cara penggunaan struktur data seperti list, set, tuple dan dictionary pada bahasa pemrograman python"
---
halo teman-teman pada artikel ini author akan membagikan tentang struktur data pada bahasa pemrograman python

struktur data itu sendiri merupakan struktur/variabel yang bisa menyimpan lebih dari satu value, pada bahasa pemrograman python ini terdapat beberapa jenis struktur data yang bisa menyimpan lebih dari 1 value seperti list, tuple, set dan dictionary.

pada artikel ini kita akan membahas satu-persatu struktur data untuk struktur data ini. baik langsung saja kita bahas ya teman-teman.

## 1. List

list merupakan sebuah struktur data yang bisa menyimpan lebih dari satu value didalamnya, dimana tipe data dari setiap value yang di masukan di dalam struktur data list ini bisa bermacam-macam bahkan bisa juga kita memasukan sebuah struktur data baru seperti contoh di bawah ini.

```python
listsaya = ['nilai 1', ['nilai 2.1', 'nilai 2.2'], 'nilai 3']
print(listsaya)
```

{{< terminal id="0" command="python3 strukturdata.py" class="terminalSukses" >}}
['nilai 1', ['nilai 2.1', 'nilai 2.2'], 'nilai 3']
{{< /terminal >}}

nilai-nilai didalam list tersebut kita sebut dengan elemen dimana setiap elemen disusun secara berurutan.

**Bagaimana mengakses setiap elemen didalam list?** elemen di dalam list sendiri memiliki nomor urutan (atau yang bisa kita sebut dengan index) yang dimulai dari 0, maka pada contoh list di atas elemen dengan index 0 adalah ```'nilai 1'``` dan index 1 adalah ```['nilai 2.1', 'nilai 2.2']``` dan index 2 adalah ```'nilai 3'```, 


| Elemen | : | nilai 1 | ['nilai 2.1', 'nilai 2.2'] | nilai 3 |
| -------- | --- | --------- | ---------------------------- | :-------- |
| Index  | : | 0       | 1                          | 2       |

untuk mencobanya silahkan teman-teman coba program di bawah ini ya

```python
listsaya = ['nilai 1', ['nilai 2.1', 'nilai 2.2'], 'nilai 3']
print(listsaya[0])
print(listsaya[1])
print(listsaya[2])
```

{{< terminal id="1" command="python3 strukturdata.py" class="terminalSukses" >}}
nilai 1 <br>
['nilai 2.1', 'nilai 2.2']<br>
nilai 3<br>
{{< /terminal >}}

dan untuk mengakses setiap elemen yang berada di dalam list pada elemen dengan index 1 di atas teman-teman bisa menggunakan cara ini ya

```python
listsaya = ['nilai 1', ['nilai 2.1', 'nilai 2.2'], 'nilai 3']
print(listsaya[1][0])
print(listsaya[1][1])
```

{{< terminal id="2" command="python3 strukturdata.py" class="terminalSukses" >}}
nilai 2.1 <br>
nilai 2.2
{{< /terminal >}}

dapat kita lihat di atas pada kurung siku pertama merupakan index dimana list itu berada di dalam listsaya, sedangkan untuk kurung siku kedua merupakan index dari nilai yang berada didalam list tersebut, sebagai contoh kita akan memindahkan list yang berada di dalam list saya ke index 0, seperti di bawah ini

```python
listsaya = [['nilai 2.1', 'nilai 2.2'], 'nilai 1', 'nilai 3']
```

maka untuk mengaksesnya kita hanya cukup merubah nilai index pada kurung siku pertama, seperti di bawah ini

```python
listsaya = [['nilai 2.1', 'nilai 2.2'], 'nilai 1', 'nilai 3']
print(listsaya[0][0])
print(listsaya[0][1])
```

{{< terminal id="3" command="python3 strukturdata.py" class="terminalSukses" >}}
nilai 2.1 <br>
nilai 2.2
{{< /terminal >}}

untuk menghitung jumlah elemen yang terdapat didalam list kita bisa menggunkan fungsi ```len()``` seperti dibawah ini

```python
listsaya = [['nilai 2.1', 'nilai 2.2'], 'nilai 1', 'nilai 3']
len(listsaya)
```

{{< terminal id="4" command="python3 strukturdata.py" class="terminalSukses" >}}
3
{{< /terminal >}}

> teman-teman juga bisa mengakses setiap elemen di dalam list menggunakan perulangan (fngsi for) yang telah dijelaskan pada artikel sebelumnya [disini yaa...😁](https://panduankoding.com/tutorial/python/control-flow-pada-bahasa-pemrograman-python/)

oh iya teman-teman list sendiri itu bersifat ```Mutable (Manipulasi)``` artinya setiap elemen didalam list bisa kita manipulasi seperti kita ditambah maupun dikurangi.

bahkan kita bisa merubah nilai elemen di dalam list loh..😁, caranya kita hanya perlu tahu nomor index keberapa dari nilai yang akan kita rubah, misal disini kita akan merubah ```nilai 1``` pada list di bawah ini menjadi ```"1"``` tetapi dengan tipe data integer, loh apakah bisa merubah nilai yang awalnya bertipe data string menjadi integer🤔? tentu saja bisa loh yuk langsung kita coba

```python
listsaya = [['nilai 2.1', 'nilai 2.2'], 'nilai 1', 'nilai 3']
print("sebelum kita rubah nilai dari listsaya adalah")
print(listsaya)
# kita rubah nilai dari index 1
listsaya[1] = 1
print("setelah kita rubah nilai dari listsaya adalah")
print(listsaya)
```

{{< terminal id="04" command="python3 strukturdata.py" class="terminalSukses" >}}
sebelum kita rubah nilai dari listsaya adalah <br>
[['nilai 2.1', 'nilai 2.2'], 'nilai 1', 'nilai 3']<br>
setelah kita rubah nilai dari listsaya adalah<br>
[['nilai 2.1', 'nilai 2.2'], 1, 'nilai 3']
{{< /terminal >}}

mudah bukan kita hanya perlu menginisialisai ulang saja nilai dari list pada index yang kita inginkan.

**Bagaimana cara menambah elemen ke dalam list?** untuk menambah elemen di dalam list pada bahasa pemrograman python memiliki 3 metode yaitu ```append```, ```insert``` dan ```extend```. akan kita bahas satu persatu dari setiap metode tersebut

#### 1.1. append

metode yang pertama adalah ```append``` dimana data yang akan kita tambahkan ke dalam lis akan di masukan menjadi index yang paling besar/terakhir, sebagai contoh kita memiliki sebuah list seperti di bawah ini

```python
list = ['merah', 'biru', 'kuning']
```

selanjutnya kita akan memasukan warna ```hitam``` ke dalam list tersebut dengan metode ```append``` seperti di bawah ini

```python
list = ['merah', 'biru', 'kuning']
list.append("hitam")
print(list)
```

{{< terminal id="5" command="python3 strukturdata.py" class="terminalSukses" >}}
['merah', 'biru', 'kuning', 'hitam']
{{< /terminal >}}

dapat kita lihat diatas posisi nilai ```hitam``` berada di sebelah kanan paling ujung (nomor index terbesar)

#### 1.2. insert

metode yang selanjutnya adalah metode insert dimana nilai yang dimasukan akan berada pada index yang akan kita tentukan, dan elemen-elemen yang sudah ada dengan index lebih besar akan bergeser 1 index, contohnya kita akan memasukan ```hitam``` kedalam index 1

```python
list = ['merah', 'biru', 'kuning']
list.insert(1,'hitam')
print(list)
```

{{< terminal id="6" command="python3 strukturdata.py" class="terminalSukses" >}}
['merah', 'hitam', 'biru', 'kuning']
{{< /terminal >}}

dapat kita lihat diatas warna hitam akan berada di sebelah warna merah, dan warna biru dan kuning bergeser 1 index ke kanan (bertambah 1 index).

pada syntax di atas pada fungsi insert memiliki 2 parameter dimana pada parameter pertama merupakan nilai dari index tujuan sedangkan parameter kedua merupakan nilai yang akan di masukan.

#### 1.3. extend

selanjutnya adalah metode extend, metode ini berguna jika kita ingin menggabungkan 2 list menjadi 1, sebagai contoh kita memiliki list seperti dibawah ini

```python
# list pertama
list1 = ['merah', 'biru', 'kuning']
#list kedua
list2 = ['putih', 'hitam', 'hijau']
#kita ingin menggabungkan kedua list di atas menjadi seperti dibawah ini

list1 = ['merah', 'biru', 'kuning', 'putih', 'hitam', 'hijau']
```

maka kode programnya akan seperti dibawah ini

```python
# list pertama
list1 = ['merah', 'biru', 'kuning']
#list kedua
list2 = ['putih', 'hitam', 'hijau']

list1.extend(list2)
print(list1)
```

{{< terminal id="7" command="python3 strukturdata.py" class="terminalSukses" >}}
['merah', 'biru', 'kuning', 'putih', 'hitam', 'hijau']
{{< /terminal >}}

Selanajutnya adalah **bagaimana cara mengurangi elemen dari dalam list?** untuk mengurangi elemen dari dalam list ada beberapa metode yang dapat kita gunakan untuk menghapus elemen dari dalam list, seperti ```remove()```, ```pop()```, ```del``` dan ```clear()```, yuk kita bahas satu-satu ya.

#### 1.4. remove

metode yang pertama untuk menghapus elemen dari dalam list adalah remove, metode ini bisa kita gunakan untuk menghapus elemen dimana kita akan menghapus elemen dengan ketentuan nilai yang spesifik dengan yang kita tentukan di dalam parameter fungsi remove, misal kita akan menghapus nilai ```hitam``` pada list di bawah ini

```python
listsaya = ['merah', 'biru', 'kuning', 'putih', 'hitam', 'hijau']
```

maka kita akan menghapusnya seperti kode di bawah ini

```python
listsaya = ['merah', 'biru', 'kuning', 'putih', 'hitam', 'hijau']
listsaya.remove('hitam')
print(listsaya)
```

{{< terminal id="8" command="python3 strukturdata.py" class="terminalSukses" >}}
['merah', 'biru', 'kuning', 'putih', 'hijau']
{{< /terminal >}}

**apa yang terjadi jika kita salah menulisakan nilai didalam parameter remove tersebut?** tentu saja program akan mengalami error dimana nilai tersebut tidak di temukan didalam list hal ini terjadi karena dalam pengisian nilai yang akan dihapus harus spesifik, jika tidak maka nilai tersebut dianggap tidak ada.

```python
listsaya = ['merah', 'biru', 'kuning', 'putih', 'hitam', 'hijau']
listsaya.remove('hitamn')
print(listsaya)
```

{{< terminal id="9" command="python3 strukturdata.py" class="terminalErorr" >}}
File "< stdin >", line 1, in < module > <br>
ValueError: list.remove(x): x not in list
{{< /terminal >}}

#### 1.5. pop

metode selanjutnya adalah menggunakan metode ```pop()```, metode ini akan menghapus elemen berdasarkan alamat indexnya. seperti dibawah ini

```python
listsaya = ['merah', 'biru', 'kuning', 'putih', 'hitam', 'hijau']
listsaya.pop(1)
print(listsaya)
```

{{< terminal id="10" command="python3 strukturdata.py" class="terminalSukses" >}}
['merah', 'kuning', 'putih', 'hitam', 'hijau']
{{< /terminal >}}

dapat dilihat hasil di atas saat program dijalankan elemen dengan index nomor 1 (elemen bernilai biru) telah terhapus dari dalam listsaya, meskipun sudah terhapus index nomor 1 sekarang sudah diisi kembali dengan nilai dari index yang lebih tinggi, dimana pada kasus di atas index nomor 1 sekarang berisi dengan nilai kuning dari index nomor 3 sebelumnya begitu juga dengan index selanjutnya akan diisi dengan index selanjutnya juga.

```python
listsaya = ['merah', 'biru', 'kuning', 'putih', 'hitam', 'hijau']
print("Sebelum dihapus : ",listsaya[1])
listsaya.pop(1)
print("Sesudah dihapus : ",listsaya[1])
```

{{< terminal id="11" command="python3 strukturdata.py" class="terminalSukses" >}}
Sebelum dihapus :  biru <br>
Sesudah dihapus :  kuning
{{< /terminal >}}

oh iya teman-teman untuk metode pop ini sendiri kita bisa juga loh tidak menentukan index yang akan di hapus didalam parameter fungsi popnya, dimana jika tidak kita tentukan maka elemen dengan index tertinggi atau yang pada urutan terakhir yang akan dihapus, yuk langsung kita coba

```python
listsaya = ['merah', 'biru', 'kuning', 'putih', 'hitam', 'hijau']
listsaya.pop()
print(listsaya)
```

{{< terminal id="12" command="python3 strukturdata.py" class="terminalSukses" >}}
['merah', 'biru', 'kuning', 'putih', 'hitam']
{{< /terminal >}}

#### 1.6. clear

selanjutnya adalah metode ```clear()``` dimana dengan menggunakan metode ini kita akan menghapus semua elemen yang ada pada list, yuk langsung saja kita coba

```python
listsaya = ['merah', 'biru', 'kuning', 'putih', 'hitam', 'hijau']
listsaya.clear()
print(listsaya)
```

{{< terminal id="13" command="python3 strukturdata.py" class="terminalSukses" >}}
[]
{{< /terminal >}}


selain untuk mengedit, menambah dan mengurangi elemen pada list, kita juga bisa melakukan sort atau mengurutkan nilai-nilai didalam list. Conto kita memiliki list yang berisi daftar nama seperti di bawah ini

```python
['Delia', 'Ali Alimsyah', 'Hartono', 'Notowidigdo']
```

selanjutnya kita akan mengurutkan nama-nama di atas dimulai dari A-Z atau bisa juga di sebut dengan _ascending_, untuk melakukannya kita akan menggunakan fungsi ```sort()```, fungsi ```sort()``` sendiri secara default akan melakukan pengurutan secara _ascending_, berikut penggunaan dari fungsi sort sendiri

```python
listsaya = ['Delia', 'Ali Alimsyah', 'Hartono', 'Notowidigdo']
print('sebelum dilakukan pengurutan secara ascending')
print(listsaya)

# melakukan pengurutan
listsaya.sort()

print('setelah dilakukan pengurutan secara ascending')
print(listsaya)
```

{{< terminal id="14" command="python3 strukturdata.py" class="terminalSukses" >}}
sebelum dilakukan pengurutan secara ascending<br>
['Delia', 'Ali Alimsyah', 'Hartono', 'Notowidigdo']<br>
setelah dilakukan pengurutan secara ascending<br>
['Ali Alimsyah', 'Delia', 'Hartono', 'Notowidigdo']<br>
{{< /terminal >}}

dapat kita lihat diatas sekarang nama pada list sudah terurut mulai dari A-Z, **terus bagaimana jika kita ingin mengurutkan dari Z-A atau _descending_?** untuk melakukannya kita tetap menggunakan fungsi ```sort()``` tetapi kita akan menggunakan parameter ```reverse``` yang akan kita atur nilainya menjadi ```true```, baik langsung saja kita coba ya teman-teman

```python
listsaya = ['Delia', 'Ali Alimsyah', 'Hartono', 'Notowidigdo']
print('sebelum dilakukan pengurutan secara descending')
print(listsaya)

# melakukan pengurutan
listsaya.sort(reverse = True)

print('setelah dilakukan pengurutan secara descending')
print(listsaya)
```

{{< terminal id="15" command="python3 strukturdata.py" class="terminalSukses" >}}
sebelum dilakukan pengurutan secara descending<br>
['Delia', 'Ali Alimsyah', 'Hartono', 'Notowidigdo']<br>
setelah dilakukan pengurutan secara descending<br>
['Notowidigdo', 'Hartono', 'Delia', 'Ali Alimsyah']<br>
{{< /terminal >}}

dapat kita lihat sekarang pengurutan dilakukan secara descending atau dari Z-A.

## 2. Tuple

setelah mempelajari tentang ```list``` selanjutnya pada struktur data juga memiliki data ```Tuple``` dimana untuk data tuple ini penulisannya hampir mirip dengan list hanya saja jika pada list kita akan menggunakan kurung siku untuk membungkus setiap elemen ```[]```, pada tuple kita akan menggunakan kurung biasa saja untuk membungkus setiap elemen ```()```. **terus perbedaannya apa dong dengan list?** perbedaan list dan tuple sendiri terletak pada sifatnya, dimana list bersifat ```Mutable (Manipulasi)``` atau bisa kita manipulsai (edit, tambah dan kurangi) sedangkan pada tuple kita hanya bisa mengakses elemen saja tidak bisa kita edit, kurangi ataupun kita hapus sebuah elemen didalamnya.

mirip seperti list, cara pengaksesan elemen dari dalam tuple bisa kita lakukan dengan cara seperi di bawah ini

```python
tuplesaya = ('merah', 'biru', 'kuning', 'putih', 'hitam', 'hijau')
print(tuplesaya[1])
```

{{< terminal id="16" command="python3 strukturdata.py" class="terminalSukses" >}}
biru
{{< /terminal >}}

dapat kita lihat di atas, dimana kita akan menampilkan elemen pada index nomor 1 maka kita dapat menginisialisasi alamat indexnya di dalam tanda kurungsiku setelah nama variabel tuplenya, kita juga bisa menggunakan perulangan seperti pada artikel sebelumnya [disini](https://panduankoding.com/tutorial/python/control-flow-pada-bahasa-pemrograman-python/)

meskipun tuple bersifat tidak bisa di edit, ada sebuah cara agar kita dapat mengedit elemen didalam nya dengan cara sebelum kita edit tuple tersebut kita convert kedalam list terlebihdahulu seperti di bawah ini

```python
tuplesaya = ('merah', 'biru', 'kuning', 'putih', 'hitam', 'hijau')
print('tuple sebelum di edit)
print(tuplesaya)

# convert tuplesaya ke list
temp = list(tuplesaya)

temp[1] = 'pink'

# menjadikan list pada variabel temp menjadi tuple kembali 
tuplesaya = tuple(temp)

print('tuple setelah di edit')
print(tuplesaya)
```

{{< terminal id="17" command="python3 strukturdata.py" class="terminalSukses" >}}
tuple sebelum di edit<br>
('merah', 'biru', 'kuning', 'putih', 'hitam', 'hijau')<br>
tuple setelah di edit<br>
('merah', 'pink', 'kuning', 'putih', 'hitam', 'hijau')<br>
{{< /terminal >}}

untuk melakukan edit elemen pada tuple kita memerlukan sebuah variabel sementara dimana pada contoh diatas kita berinama dengan ```temp``` untuk penamaannya sendiri ini bebas ya teman-teman, variabel sementara tadi akan kita isi dengan sebuah list yang didapat dari mengconvert tuple kedalam list, silahkan teman-teman coba kode program di bawah ini ya untuk melihat isi dari variabel sementara tadi

```python
tuplesaya = ('merah', 'biru', 'kuning', 'putih', 'hitam', 'hijau')
temp = list(tuplesaya)
print('isi dari variabel temp')
print(temp)
```

{{< terminal id="18" command="python3 strukturdata.py" class="terminalSukses" >}}
tuple sebelum di edit<br>
isi dari variabel temp<br>
['merah', 'biru', 'kuning', 'putih', 'hitam', 'hijau']
{{< /terminal >}}

dapat kita lihat diatas isi dari variabel sementara tadi akan berubah menjadi list yang ditandai dengan berubahnya tanda kurung biasa menjadi tanda kurung siku, dengan cara seperti ini kita bisa melakukan semua metode manipulasi list pada tuple.

## 3. Set
selanjutnya adalah set, set sendiri merupakan sebuah variabel seperti list dan tuple yang bisa menyimpan banyak nilai didalamnya pada set, setiap elemen akan dibungkus menggunakan tanda kurung kurawal ```{}``` seperti dibawah ini

```python
{'merah', 'biru', 'kuning', 'putih', 'hitam', 'hijau'}
```

perbedaan kedua setelah itu untuk mengakses setiap elemen yang terdapat didalam set kita tidak bisa menggunakan metode seperti pada list dan tuple dengan menggunakan nomor index, karena pada set tidak terdapat index, **terus bagaimana cara mengakses setiap elemen yang terdapat pada set?** untuk melakukannya kita bisa menggunakan fungsi for seperti di bawah ini

```python
setsaya = {'merah', 'biru', 'kuning', 'putih', 'hitam', 'hijau'}

for x in setsaya:
  print(x)
```

{{< terminal id="19" command="python3 strukturdata.py" class="terminalSukses" >}}
kuning<br>
merah<br>
putih<br>
hitam<br>
biru<br>
hijau<br>
{{< /terminal >}}

perbedaan selanjutnya set dengan list dan tuple adalah pada set elemen didalamnya tidak boleh ada yang duplikat, jika terdapat elemen yang duplikat maka nilai tersebut akan dianggap hanya ada 1 saja. contoh pada set dibawah ini kita memiliki 2 elemen dengan nilai ```merah``` seperti dibawah ini, 

```python
setsaya = {'merah', 'biru', 'kuning', 'putih', 'hitam', 'merah', 'hijau'}

for x in setsaya:
  print(x)
```

{{< terminal id="20" command="python3 strukturdata.py" class="terminalSukses" >}}
kuning<br>
merah<br>
putih<br>
hitam<br>
biru<br>
hijau <br>
{{< /terminal >}}

dapat kita lihat di atas pada saat kita menampilkan atau mengakses setiap elemen yang ada pada set menggunakan for loop maka hanya akan ditampilkan 1 kali saja data yang duplikatnya.

pada set kita juga bisa menambah elemen baru kedalamnya, ada beberapa metode yang dapat kita gunakan untuk menambah elemen didalam set ini seperti ```add()```, ```update()``` dan ```union()```, yuk langsung kita bahas satu-persatu metodenya

#### 3.1. add
metode yang pertama adalah ```add()``` metode ini bisa kita gunakan pada saat kita ingin menambahkan satu elemen didalam set, sebagai contoh kita memiliki set seperti dibawah ini

```python
setsaya = {'biru', 'merah', 'kuning'}
```
kita akan menambahkan sebuah elemen baru dengan nilai "```putih```" kedalamnya, maka sintaksnya akan seperti ini 

```python
setsaya = {'biru', 'merah', 'kuning'}

setsaya.add("putih")

print(setsaya)
```

{{< terminal id="21" command="python3 strukturdata.py" class="terminalSukses" >}}
{'merah', 'putih', 'biru', 'kuning'}
{{< /terminal >}}

dapat kita lihat diatas kita memasukan nilai yang akan kita jadikan elemen baru didalam set pada parameter add, mudah bukan teman-teman? kita juga bisa menggunakan variabel juga loh untuk memasukan nilai yang ada pada variabel tersebut ke dalam set kita

```python
setsaya = {'biru', 'merah', 'kuning'}

# variabel yang nilainya akan kita masukan kedalam set
varcontoh = "putih"

setsaya.add(varcontoh)

print(setsaya)
```

{{< terminal id="22" command="python3 strukturdata.py" class="terminalSukses" >}}
{'merah', 'putih', 'biru', 'kuning'}
{{< /terminal >}}

pada saat kita ingin memasukan nilai dari sebuah variabel ke dalam set kita hanya perlu memasukan variabel tersebut kedalam parameter add, tanpa ada tanda petik, jika kita menggunakan tanda petik maka yang akan dimasukan kedalam set bukanlah nilai dari variabel tersebut tapi nama dari variabelnya, karena itu akan dianggap sebagai sebuah nilai bukan variabel

```python
setsaya = {'biru', 'merah', 'kuning'}

# variabel yang nilainya akan kita masukan kedalam set
varcontoh = "putih"

setsaya.add("varcontoh")

print(setsaya)
```

{{< terminal id="23" command="python3 strukturdata.py" class="terminalSukses" >}}
{'varcontoh', 'kuning', 'biru', 'merah'}
{{< /terminal >}}

#### 3.2. update
selanjutnya adalah metode update, metode ini kita gunakan pada saat kita akan memasukan elemen-elemen dari list, tuple, set dan bahkan dictionaries (yang akan kita pelajari selanjutnya) sebagai contoh pertama kita akan memasukan sebuah list dibawah ini kedalam set

```python
# list yang akan kita masukan ke set
listsaya = ['kuning', 'hijau']

# set 
setsaya = {'biru', 'merah'}
```

maka sintaksnya akan seperti ini

```python
# list yang akan kita masukan ke set
listsaya = ['kuning', 'hijau']

# set 
setsaya = {'biru', 'merah'}

# sintaks update
setsaya.update(listsaya)

print(setsaya)
```

{{< terminal id="24" command="python3 strukturdata.py" class="terminalSukses" >}}
{'hijau', 'merah', 'kuning', 'biru'}
{{< /terminal >}}

begitu juga pada saat kita ingin memasukan elemen dari tuple akan seperti dibawah ini

```python
# tuple yang akan kita masukan ke set
tuplesaya = ('kuning', 'hijau')

# set 
setsaya = {'biru', 'merah'}

# sintaks update
setsaya.update(tuplesaya)

print(setsaya)
```

{{< terminal id="25" command="python3 strukturdata.py" class="terminalSukses" >}}
{'biru', 'kuning', 'hijau', 'merah'}
{{< /terminal >}}

#### 3.3. union
metode selanjutnya adalah metode union, metode ini berguna untuk menggabungkan dua set menjadi satu set baru tanpa harus merubah kedua set lama, yuk langsung saja kita coba

```python
set1 = {"a", "b" , "c"}
set2 = {1, 2, 3}

set3 = set1.union(set2)
print(set3)
```

{{< terminal id="26" command="python3 strukturdata.py" class="terminalSukses" >}}
{'b', 1, 2, 3, 'c', 'a'}
{{< /terminal >}}


selanjutnya kita akan mempelajari metode-metode untuk menghapus elemen pada set, dimana ada dua metode yang bisa ita gunakan yaitu ```remove()``` dan ```discard()```

#### 3.4. remove
metode pertama untuk menghapus elemen dari dalam set adalah remove, berikut sintaks penggunaannya

```python
setsaya = {"apple", "banana", "cherry"}

setsaya.remove("banana")

print(setsaya)
```

{{< terminal id="27" command="python3 strukturdata.py" class="terminalSukses" >}}
{'apple', 'cherry'}
{{< /terminal >}}

#### 3.5. discard
metode kedua untuk menghapus elemen dari dalam set adalah discard, berikut sintaks penggunaannya

```python
setsaya = {"apple", "banana", "cherry"}

setsaya.discard("banana")

print(setsaya)
```

{{< terminal id="28" command="python3 strukturdata.py" class="terminalSukses" >}}
{'apple', 'cherry'}
{{< /terminal >}}

> bisa kita lihat pada dua metode untuk menghapus elemen diatas penggunaannya sama bukan, untuk perbedaannya sendiri jika pada **metode remove jika nilai yang kita tentukan untuk di hapus ternyata tidak ada didalam set maka program akan mengalami error**, berbeda dengan **metode discard jika menggunakan metode discard program tidak akan mengalami error**.

## 4. dictionaries
selanjutnya adalah ```dictionaries```, struktur data dictionaries ini mirip dengan set tetapi pada struktur data dictionaries ini elemennya terdiri dari ```key``` dan ```value``` yang dipisahkan dengan tanda titik dua (```:```), dimana untuk mengakses valuenya kita memerlukan keynya sebagai index seperti kita mengakses elemen pada ```list```, berikut contoh ```dictionaries```

```python
dict = {
  "nama": "udin",
  "umur": 20,
  "hobi": ["mancing", "bersepeda"]
}
```

bisa kita lihat pada contoh ```dictionaries``` di atas text sebelum tanda titik dua merupakan key dimana untuk penaman key ini bebas ya teman-teman, sedangkan setelah titik dua merupakan value dimana untuk setiap value bisa kita masukan deengan tipe data yang berbeda-beda seperti pada contoh di atas untuk key nama valuenya bertipe data ```char```, untuk key umur valuenya bertipe data ```int``` dan terakhir pada key hobi valuenya merupakan ```list```.


key pada ```dictionaries``` ini tidak boleh duplikat ya teman-teman, jika terdapat key yang duplikat jika kita mengakses value dari key tersebut maka value dari key duplikat yang terakhir yang akan terakses

```python
dict = {
  "nama": "udin",
  "umur": 20,
  "hobi": ["mancing", "bersepeda"],
  "umur": "dua puluh"
}

print(dict["umur"])
```

{{< terminal id="29" command="python3 strukturdata.py" class="terminalSukses" >}}
dua puluh
{{< /terminal >}}

dapat kita lihat di atas pada saat kita mengakses key umur maka yang akan tampil adalah value dari key umur yang terakhir, baik teman-teman kita akan melanjutkan bagaimana sih cara mengakses elemen-elemen pada ```dictionaries``` ini.

untuk mengakses elemen yang ada pada ```dictionaries``` ini terdapat beberapa metode yang bisa kita gunakan, seperti mengakses elemen seperti list dengan menjadikan key sebagai index seperti pada contoh diatas, menggunakan fungsi get, fungsi keys, fungsi values dan fungsi items. Yuk langsung kita bahas satu-persatu dari setiap metodenya

#### 4.1. Mengakses langsung menggunakan key
yang pertama ini untuk sintaksnya mirip dengan cara mengakses elemen pada list hanya saja pada bagian index didalam kurung sikunya diganti dengan nama keynya, berikut sintaksnya

```python
dict = {
  "nama": "udin",
  "umur": 20,
  "hobi": ["mancing", "bersepeda"]
}

print(dict["nama"])
```

{{< terminal id="30" command="python3 strukturdata.py" class="terminalSukses" >}}
udin
{{< /terminal >}}

#### 4.2. get
selanjutnya kita juga bisa menggunakan fungsi get untuk mengakses elemen dari sebuah ```dictionaries```, sama seperti metode pertama pada metode menggunakan fungsi get ini kita akan mengakses elemen dengan mendefinisikan keynya pada parameter dari get

```python
dict = {
  "nama": "udin",
  "umur": 20,
  "hobi": ["mancing", "bersepeda"]
}

print(dict.get("nama"))
```

{{< terminal id="31" command="python3 strukturdata.py" class="terminalSukses" >}}
udin
{{< /terminal >}}

dapat kita lihat pada contoh di atas key dari elemen yang akan kita tampilkan/akses kita masukan ke parameter dari fungsi get.

#### 4.3. keys
seperti namanya fungsi keys ini berfungsi untuk mengakses setiap key saja yang ada pada ```dictionaries```, maksudnya fungsi keys ini akan mengembalikan nilai key saja dari ```dictionaries``` sebagai contoh pada kode program di bawah ini

```python
dict = {
  "nama": "udin",
  "umur": 20,
  "hobi": ["mancing", "bersepeda"]
}

print(dict.keys())
```

{{< terminal id="32" command="python3 strukturdata.py" class="terminalSukses" >}}
dict_keys(['nama', 'umur', 'hobi'])
{{< /terminal >}}

dapat kita lihat di atas hasil dari kode programnya hanya menghasilkan nama-nama dari key pada ```dictionaries```.

fungsi keys ini bisa kita gunaan juga untuk menampilkan semua nilai pada ```dictionaries``` menggunakan loop loh, berikut kode programnya

```python
dict = {
  "nama": "udin",
  "umur": 20,
  "hobi": ["mancing", "bersepeda"]
}

for x in dict.keys():
  print(dict[x])
```

{{< terminal id="33" command="python3 strukturdata.py" class="terminalSukses" >}}
udin <br>
20<br>
['mancing', 'bersepeda']<br>
{{< /terminal >}}

dapat kita lihat di atas dimana x berisi nama-nama dari key pada dictionaries sehingga bisa kita gunakan untuk menampilkan nilai menggunakan metode pertama (4.1. Mengakses langsung menggunakan key).

#### 4.4. values
selanjutnya adalah fungsi ```values()``` fungsi ini akan mengembalikan nilai pada ```dictionaries```, yuk langsung aja kita coba berikut kode programnya ya teman-teman 

```python
dict = {
  "nama": "udin",
  "umur": 20,
  "hobi": ["mancing", "bersepeda"]
}

print(dict.values())
```

{{< terminal id="34" command="python3 strukturdata.py" class="terminalSukses" >}}
dict_values(['udin', 20, ['mancing', 'bersepeda']])
{{< /terminal >}}

jika kita ingin menampilkan menggunakan fungsi for loop juga bisa loh

```python
dict = {
  "nama": "udin",
  "umur": 20,
  "hobi": ["mancing", "bersepeda"]
}

for x in dict.values():
  print(x)
```

{{< terminal id="35" command="python3 strukturdata.py" class="terminalSukses" >}}
udin <br>
20<br>
['mancing', 'bersepeda']<br>
{{< /terminal >}}

dapat kita lihat pada kode program di atas sekarang nilai x berisi nilai-nilai dari ```dictionaries``` kita, jadi kita hanya tinggal memasukan variabel ```x``` kedalam fungsi ```print()``` saja.

#### 4.5. items
selanjutnya adalah metode menggunakan fungsi items, dimana fungsi ini akan mengembalikan key dan value didalam tuple yang akan dimasukan kedalam list, baik sebagai contoh pada kode program di bawah ini

```python
dict = {
  "nama": "udin",
  "umur": 20,
  "hobi": ["mancing", "bersepeda"]
}

print(dict.items())
```

{{< terminal id="36" command="python3 strukturdata.py" class="terminalSukses" >}}
dict_items([('nama', 'udin'), ('umur', 20), ('hobi', ['mancing', 'bersepeda'])])
{{< /terminal >}}

dapat kita lihat di atas key dan value sekarang menjadi berada di dalam format tuple, dan kumpulan tuple-tuple tadi dimasukan kedalam sebuah list.

cara menggunakan for loop untuk menampilkan setiap elemen menggunakan fungsi items ini, teman-teman bisa menggunakan cara di bawah ini ya

```python
dict = {
  "nama": "udin",
  "umur": 20,
  "hobi": ["mancing", "bersepeda"]
}

for x, y in dict.items():
  print(x, " : ", y)
```

{{< terminal id="37" command="python3 strukturdata.py" class="terminalSukses" >}}
nama  :  udin <br>
umur  :  20 <br>
hobi  :  ['mancing', 'bersepeda'] <br>
{{< /terminal >}}

dapat kita lihat di atas pada for loop di atas kita memberikan 2 variabel ```x``` dan ```y``` dimana variabel x akan diisi dengan key dan variabel y akan diisi dengan value dari setiap elemen yang ada pada ```dictionaries```.

setelah kita mengetahui beberapa metode dalam mengakses nilai dari ```dictionaries```, selanjutnya kita akan mempelajari tentang bagaimana cara mengedit menambah dan menghapus sebuah elemen pada ```dictionaries```

### edit elemen ```dictionaries```
pertama kita akan membahas metode-metode dalam mengedit elemen pada ```dictionaries```

#### 4.6. mengedit secara langsung
metode pertama yang bisa kita gunaan untuk mengedit sebuah elemen di dalam ```dictionaries``` kita bisa mengedit langsung sebuah elemen dengan hanya mereferensikan nama dari keynya, contoh pada ```dictionaries``` di bawah kita akan mengedit nilai dari umur yang semula adlah 20 akan kita edit menjadi 30

```python
dict = {
  "nama": "udin",
  "umur": 20,
  "hobi": ["mancing", "bersepeda"]
}

# sintaks mengedit elemen secara langsung
dict["umur"] = 30

print(dict["umur"])
```

{{< terminal id="38" command="python3 strukturdata.py" class="terminalSukses" >}}
30
{{< /terminal >}}

#### 4.7. menggunakan fungsi update
metode kedua kita bisa menggunakan metode yang menggunakan fungsi update, pada metode ini kita akan memasukan sebuah ```dictionaries``` yang berisi key yang sama dengan key dari ```dictionaries``` yang akan kita edit dan sebuah nilai yang akan menggantikannya

```python
dict = {
  "nama": "udin",
  "umur": 20,
  "hobi": ["mancing", "bersepeda"]
}

# sintaks mengedit elemen menggunakan fungsi update
dict.update({"umur": 30})

print(dict["umur"])
```

{{< terminal id="39" command="python3 strukturdata.py" class="terminalSukses" >}}
30
{{< /terminal >}}

memang terlihat lebih rumit bukan metode yang satu ini, tetapi metode ini akan sangat berguna jika kita akan membuat program yang lebih kompleks karena ini akan memudahkan kita atau orang lain dalam memahami kode program kita jika kita atau orang akan mereview kode program kita. dan **jika menggunakan metode ini juga kita akan lebih efisien dalam mengetik sebuah kode program**.

### menambah elemen ```dictionaries```
untuk menambah elemen baru di dalam ```dictionaries``` metode yang digunakan sama dengan metode pada saat kita mengedit ```dictionaries``` tersebut hanya pada key yang kita tentukan nantinya pada kedua metode tadi dipastikan bukan key yang duplikat atau yang sudah ada pada ```dictionaries```.

#### 4.8. menambah secara langsung
metode pertama ini sintaksnya sama dengan metode pertama untuk mengedit elemen pada ```dictionaries```, hanya bedanya untuk key yang kita referensikan haruslah unik atau belum ada di dalam ```dictionaries```.

```python
dict = {
  "nama": "udin",
  "umur": 20,
  "hobi": ["mancing", "bersepeda"]
}
print("dict sebelum menambah elemen")
print(dict)

# sintaks menambah elemen secara langsung
dict["bio"] = "seorang yang ingin berbagi ilmu"

print("dict setelah menambah elemen")
print(dict)
```

{{< terminal id="40" command="python3 strukturdata.py" class="terminalSukses" >}}
dict sebelum menambah elemen <br>
{'nama': 'udin', 'umur': 20, 'hobi': ['mancing', 'bersepeda']} <br>
dict setelah menambah elemen<br>
{'nama': 'udin', 'umur': 20, 'hobi': ['mancing', 'bersepeda'], 'bio': 'seorang yang ingin berbagi ilmu'}
{{< /terminal >}}

#### 4.9. menggunakan fungsi update
sama seperti metode sebelumnya pada metode menggunakan fungsi ```update()``` ini juga key yang harus kita referensikan haruslah belum ada pada ```dictionaries```.

```python
dict = {
  "nama": "udin",
  "umur": 20,
  "hobi": ["mancing", "bersepeda"]
}
print("dict sebelum menambah elemen")
print(dict)

# sintaks menambah elemen secara langsung
dict.update({
  "bio": "seorang yang ingin berbagi ilmu"
})

print("dict setelah menambah elemen")
print(dict)
```

{{< terminal id="41" command="python3 strukturdata.py" class="terminalSukses" >}}
dict sebelum menambah elemen <br>
{'nama': 'udin', 'umur': 20, 'hobi': ['mancing', 'bersepeda']} <br>
dict setelah menambah elemen<br>
{'nama': 'udin', 'umur': 20, 'hobi': ['mancing', 'bersepeda'], 'bio': 'seorang yang ingin berbagi ilmu'}
{{< /terminal >}}

### menghapus elemen ```dictionaries```
untuk menghapus elemen pada ```dictionaries```, ada beberapa metode yang bisa kita gunakan seperti menggunakan fungsi ```pop()```, menggunakan fungsi ```popitem()```, ```del``` dan menggunakan fungsi ```clear()```, langsung saja kita bahas satu-persatu metodenya

#### 4.10. menggunakan fungsi pop
metode pertama untuk menghapus elemen pada ```dictionaries``` adalah menggunakan fungsi pop, dimana untuk menggunakan fungsi ini kita bisa menghapus sebuah elemen dengan mereferensikan key dari elemen yang akan kita hapus kedalam parameter fungsi ```pop()```, yuk silahkan teman-teman coba kode program di bawah ini dimana kita akan coba menghapus elemen dengan key "hobi"

```python
dict = {
  "nama": "udin",
  "umur": 20,
  "hobi": ["mancing", "bersepeda"]
}
print("dict sebelum menghapus sebuah elemen")
print(dict)

# sintaks menghapus elemen menggunakan fungsi pop
dict.pop("hobi")


print("dict setelah menghapus sebuah elemen")
print(dict)
```

{{< terminal id="42" command="python3 strukturdata.py" class="terminalSukses" >}}
dict sebelum menghapus sebuah elemen <br>
{'nama': 'udin', 'umur': 20, 'hobi': ['mancing', 'bersepeda']}<br>
dict setelah menghapus sebuah elemen<br>
{'nama': 'udin', 'umur': 20}<br>
{{< /terminal >}}

#### 4.11. menggunakan fungsi popitem
selanjutnya merupakan metode yang akan menggunakan fungsi popitem dimana pada metode ini kita tidak perlu mereferensikan key yang akan dihapus, karena fungsi popitem ini adalah untuk **menghapus elemen dengan urutan terakhir**, yuk langsung saja kita coba di bawah ini

```python
dict = {
  "nama": "udin",
  "umur": 20,
  "hobi": ["mancing", "bersepeda"]
}
print(dict)
dict.popitem()
print(dict)
dict.popitem()
print(dict)
dict.popitem()
print(dict)
```

{{< terminal id="43" command="python3 strukturdata.py" class="terminalSukses" >}}
{'nama': 'udin', 'umur': 20, 'hobi': ['mancing', 'bersepeda']} <br>
{'nama': 'udin', 'umur': 20}<br>
{'nama': 'udin'}<br>
{}<br>
{{< /terminal >}}

dapat kita lihat pada hasil dari program di atas setiap kita menjalankan perintah popitem maka elemen yang terakhir dari urutan yang kita definisikan di atas akan terhapus.

#### 4.12. menggunakan keyword del
metode selanjutnya adalah dengan menggunakan keyword del, dimana pada metode ini kita bisa menghapus salah satu elemen atau bahkan menghapus ```dictionaries```-nya

pertama untuk menghapus sebuah elemen kita cukup mereferensikan key dari elemen yang akan kita hapus seperti di bawah ini dimana kita akan menghapus elemen dengan key "umur"

```python
dict = {
  "nama": "udin",
  "umur": 20,
  "hobi": ["mancing", "bersepeda"]
}
print("dict sebelum menghapus sebuah elemen")
print(dict)

# sintaks menghapus elemen menggunakan del
del dict["umur"]


print("dict setelah menghapus sebuah elemen")
print(dict)
```

{{< terminal id="44" command="python3 strukturdata.py" class="terminalSukses" >}}
dict sebelum menghapus sebuah elemen <br>
{'nama': 'udin', 'umur': 20, 'hobi': ['mancing', 'bersepeda']} <br>
dict setelah menghapus sebuah elemen <br>
{'nama': 'udin', 'hobi': ['mancing', 'bersepeda']} <br>
{{< /terminal >}}

selanjutnya untuk menghapus ```dictionaries``` menggunakan keyword del ini maksudnya adalah benar-benar menghapus variabel ```dictionaries```-nya sehingga jika kita gunakan fungsi print maka program yang akan kita buat akan error, yuk langsung saja kita coba

```python
dictkita = {
  "nama": "udin",
  "umur": 20,
  "hobi": ["mancing", "bersepeda"]
}

# sintaks menghapus elemen menggunakan del
del dictkita
print(dictkita)
```

{{< terminal id="45" command="python3 strukturdata.py" class="terminalErorr" >}}
Traceback (most recent call last): <br>
  File "./strukturdata.py", line 9, in < module ><br>
NameError: name 'dictkita' is not defined<br>
{{< /terminal >}}

dapat kita lihat di atas saat program di jalankan maka akan terdapat error ***is not defined*** atau variabel ```dictionaries``` tidak ditemukan karena tidak didefinisikan di awal (karena sudah di hapus dengan keyword ```del```).

#### 4.13. menggunakan fungsi clear
terakhir adalah metode yang menggunakan fungsi clear, dimana hasil yang kita dapatkan setelah menggunakan metode ini adalah variabel ```dictionaries``` yang kita definisikan akan kosong atau tidak ada lagi elemen di dalamnya, berbeda dengan metode yang menggunakan keyword ```del``` yang akan menghapus variabelnya.

yuk langsung kita coba kode program di bawah ini ya teman-teman

```python
dictkita = {
  "nama": "udin",
  "umur": 20,
  "hobi": ["mancing", "bersepeda"]
}
# menampilkan dict sebelum di hapus
print(dictkita)


# sintaks menghapus elemen menggunakan del
dictkita.clear()


# menampilkan dict setelah di hapus
print(dictkita)
```

{{< terminal id="46" command="python3 strukturdata.py" class="terminalErorr" >}}
{'nama': 'udin', 'umur': 20, 'hobi': ['mancing', 'bersepeda']} <br>
{}
{{< /terminal >}}

dapat kita lihat di atas pada hasil baris kedua fungsi print hanya menampilkan tanda kurung kurawal saja.

begitulah teman-teman materi tentang struktur data menggunakan bahasa pemrograman python, dimana dengan menggunakan struktur data ini kita bisa membuat sebuah program yang kompleks untuk mengolah kumpulan data.