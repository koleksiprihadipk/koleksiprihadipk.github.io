---
draft: false
date: 2022-12-23T00:43:44+07:00
title: "Tutorial Python Bagian 1: Bahasa Pemrograman Python Untuk Pemula"
slug: bahasa-pemrograman-python-untuk-pemula

tags:
    - Python

categories:
    - Tutorial Python

authorname: "krisna prihadiyanto"
authorlink: "https://koleksiprihadi.github.io/"

authorname: "krisna prihadiyanto"
authorlink: "https://koleksiprihadi.github.io/"
authorphoto: "/images/koleksiprihadi.jpeg"

image: https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEge04vam-EFHZ1zfsE2_PQl8Dl6rItws3MExEhAJfPn7hU5rQQp0qQSjOhE8YsQMzdl2duF8A_gFBbpd921sEySMDaCHgL9zrvCSyceAEBRLOwGNouqIrtGfOnf-ZxFPH4HcNioFzvZOcL099t8y6moDL9Piv_0bsJkuKguS2lVm4XkGTC4HqaXUwB5/w320-h180/Bahasa%20Pemrograman%20Python%20Untuk%20Pemula.PNG
thumbnail: /images/koleksiprihadi.jpeg
description: "Belajar bahasa pemrograman python untuk pemula bagian 1 pengenalan"
---

Hallo teman-teman yang sedang mencoba belajar bahasa pemrograman python baik yang sudah lumayan lama berada di dunia perkodingan maupun yang baru mau belajar. Pada web ini author akan membantu teman teman yang ingin belajar bahasa pemrograman python baik bagi teman teman yang sudah terjun kedunia perkodingan maupun yang baru akan terjun. Author akan membahas dari awal mulai dari pengenalan apa itu bahasa pemrograman python, syntaxnya, hingga beberapa contoh penggunaan bahasa pemrograman python untuk membuat beberapa aplikasi sederhana hingga lumayan kompleks, bagi teman teman yang serius ingin belaja mengenai bahasa pemrograman python ini pantengin terus web panduankoding.com ini yaa..., Author akan membagi materi menjadi beberapa artikel supaya teman teman mudah dalam memahami bahasa pemrograman python ini, tenang saja ya teman-teman semua artikel yang ada di web ini akan disediakan secara gratis untuk teman-teman semua tanpa terkecuali, yuk langsung aja kita bahas topik yang pertama.

Apa itu python?
---------------

Python disini merupakan sebuah nama untuk sebuah bahasa pemrograman tingkat tinggi yang bisa digunakan untuk beragam tujuan loh, seperti otomatisasi, machine learning, visualisasi data (data scientist) bahkan hingga pengembangan website loh, bahasa pemrograman ini juga hampir mendekati bahasa manusia loh, jadi teman teman akan mudah memahami syntax dan algoritma yang dibuat dengan bahasa pemrograman ini. 

Bahasa pemrograman python ini juga merupakan bahasa pemrograman yang paling populer didunia loh, disini author tidak mengarang ya, disini author telah melakukan riset terlebih dahulu melalui website [tiobe.com](https://www.tiobe.com/tiobe-index/) dimana disana telah disediakan index bahasa pemrograman yang paling banyak disukai di seluruh dunia, pyhton mendapatkan peringkat 1 sepanjang 2021, bahkan semenjak artikel ini ditulis dan di publish pada tanggal 11 Juni 2021 python masih berada pada rangking 1, tidak hanya itu dari tahun ketahun juga index python mengalami kenaikan (jadi seperti harga emas ya teman-teman). 

> Bahasa pemrograman python ini dibuat oleh [Guido van Rossum](https://id.wikipedia.org/wiki/Guido_van_Rossum) pada tahun 1989

 Perbedaan Python 2 dan Python 3
---------------------------------

Pada saat artikel ini ditulis terdapat dua versi dari python yaitu python 2 dan python 3.

Apa sih perbedaannya?

python 2 merupakan versi python yang pada tanggal 1 januari 2020 telah resmi dihentikan pengembangannya oleh para relawan pengembang dan juga sudah dihentikannya support terkait bug yang mungkin ditemukan pada versi ini (selengkapnya [Sunsetting Python 2](https://www.python.org/doc/sunset-python-2/)).

sedangkan python 3 merupakan versi peningkatan dari versi 2 dimana pada python 3 ini para relawan pengembang melakukan perubahan yang sangat besar terhadap bahasa pemrograman python ini dimana para pengguna python akan merasakan kecepatan baik dalam penulisan kode dan maupun performa. 

perubahan yang terdapat pada python 3 ini terdapat pada syntax eksekusi program yang kita gunkan dimana pada python dua untuk menjalankan program cukup dengan mengetikan 

Sedangkan pada python 3 untuk mengeksekusi program perintahnya sebagai berikut

tidak hanya itu perbedaan yang terlihat jelas juga terdapat pada syntax "print" yang berfungsi untuk menampilkan atau mencetak sesuatu bisa terlihat di bawah ini pada python 2 syntax "print" sendiri merupakan pernyataan dimana sesuatu setelah di deklarasikan print sebelumnya akan dicetak pada terminal (cmd), sedangkan pada python 3 "print" merupakan sebuah fungsi dimana yang dijadikan parameter pada "print" tersebut yang akan dicetak.

Persiapan koding python
-----------------------

sebelum kamu bisa menulis dan menjalankan program python yang harus kamu lakukan adalah

1. Install python
2. Install text editor
3. Membuat Program pertamamu

kita akan membahas satu persatu dari langkah diatas, oh iya teman-teman pada tutorial ini author berfokus pada python 3 ya, kenapa? karena author yakin dalam dunia kerja yang menggunakan bahasa pemrograman python ini sekarang sudah mulai migrasi menggunakan python 3 loh, dan juga pada python 3 ini juga banyak fitur-fitur tambahan dan juga support dari para relawan pengembang.

Install python
--------------

yang pertama yang harus teman-teman lakukan adalah melakukan installasi python itu sendiri pada perangkat kerja teman-teman untuk melakukannya pertama teman-teman harus mendownload program installasinya dulu yaa.. 

> teman-teman bisa mendownloadnya melalui website resminya ([python.org](https://www.python.org/)) bagi teman-teman yang menggunakan linux dan mac os nggak perlu download ya langsung saja ke tutorial installasi dibawah ini

### Install python di windows

Untuk kamu yang menggunakan sistem operasi windows silahkan ikuti tutorial ini ya, jika kamu menggunakan linux atau mac os silahkan lewati dan baca tutorialnya dibawah ya.

* Setelah kamu mendownload file installasi pada website resminya selanjutnya kamu tinggal klik kanan + Run as administrator, Jika muncul popup User account control dengan pesan "Do you want to allow this app to make changes to your device" kamu tekan tombol "yes"
* Selanjutnya kamu centang "install launcher for all users (recommended)" dan "Add Python x.xx to PATH", dan kamu klik "Install Now"

  [![](https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhlx4d6Fb7l8r6wTQyP1KGQLV0yymEbvc18bHPad42Coim3oqsBbF_pdUI9kHuHZoQtwYzhg4AV-XSnS-gfCjgmjRrK8JBHgRjaMUzk8ltZDZUT_iuRLrSqCMVaB0Jpj0CcvSmfsZ3DflLMPSYSTq__Hi8o1SAPW2HfDW8rJdwxld2MoirCD2_OX36z/s320/cara%20install%20python%203%20di%20windows%20langkah%201.PNG)](https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhlx4d6Fb7l8r6wTQyP1KGQLV0yymEbvc18bHPad42Coim3oqsBbF_pdUI9kHuHZoQtwYzhg4AV-XSnS-gfCjgmjRrK8JBHgRjaMUzk8ltZDZUT_iuRLrSqCMVaB0Jpj0CcvSmfsZ3DflLMPSYSTq__Hi8o1SAPW2HfDW8rJdwxld2MoirCD2_OX36z/s666/cara%20install%20python%203%20di%20windows%20langkah%201.PNG)
* Tunggu hingga proses installasinya selesai

  [![](https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgBwn4GfLzDnpDouu4dwpeDYfPjNdV9AWcEy-pUpBGiP0F5HIA3DQdCSK-Qs4eGmpkxA3lcey-3O_RVk3kjF6Qnv6SCpQFjpGavgLyl1B72iHhZZoR7Dc-u8cPnUoZO090nXNP_ctuDcEV2uIGmf7FHUZr_nYY1JocCkMyGRwk-Wp7y8DAB1we-yXgv/s320/cara%20install%20python%203%20di%20windows%20langkah%202.PNG)](https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgBwn4GfLzDnpDouu4dwpeDYfPjNdV9AWcEy-pUpBGiP0F5HIA3DQdCSK-Qs4eGmpkxA3lcey-3O_RVk3kjF6Qnv6SCpQFjpGavgLyl1B72iHhZZoR7Dc-u8cPnUoZO090nXNP_ctuDcEV2uIGmf7FHUZr_nYY1JocCkMyGRwk-Wp7y8DAB1we-yXgv/s667/cara%20install%20python%203%20di%20windows%20langkah%202.PNG)
* Setelah proses installasi selesai maka akan muncul tampilan seperti dibawah ini

  [![](https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiMJA6JnGqVTo5GUnayzb76CX31evdVqIRSmxlvh1IlPnQko0R81o4zHqkZdYXmptHE3NRJcWI88xga0LMSQYgsptGDX0RQTUdNaEab280ylIHP3tdqlPvAgoDgPpEnrud6xtnNThgAb8iDIA8Orjjk52rMm78dwhJInuYJK6yYKhxGKkdJK2d_EXNi/s320/cara%20install%20python%203%20di%20windows%20langkah%203.PNG)](https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiMJA6JnGqVTo5GUnayzb76CX31evdVqIRSmxlvh1IlPnQko0R81o4zHqkZdYXmptHE3NRJcWI88xga0LMSQYgsptGDX0RQTUdNaEab280ylIHP3tdqlPvAgoDgPpEnrud6xtnNThgAb8iDIA8Orjjk52rMm78dwhJInuYJK6yYKhxGKkdJK2d_EXNi/s668/cara%20install%20python%203%20di%20windows%20langkah%203.PNG)
* Setelah itu klik "close" dan kamu buka cmd dengan cara "win + r" ketik cmd, setelah cmdnya muncul kamu ketikan "python" tanpa petik dan klik enter, jika muncul seperti pada gambar dibawah ini maka installasi python3 pada windows sudah berhasil

  [![](https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEj2-UzojzLBYG3YkBC1f9g0tD8ioQJlrcd579dPz8Fg_RhInwQ1Jy76iM6-6V3jvNl1rYOyNI7mRL4RaT5D1Q2OgTmdzLxQqn_myo2gzgmxjES_dAaslMg_rYEQjcX521I3XK-p38P71HYP4TGhzk01J8cB9Wmxi7rC1z2-rbKYqVMclYmyGoxN1kz_/s320/cara%20install%20python%203%20di%20windows%20langkah%204.PNG)](https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEj2-UzojzLBYG3YkBC1f9g0tD8ioQJlrcd579dPz8Fg_RhInwQ1Jy76iM6-6V3jvNl1rYOyNI7mRL4RaT5D1Q2OgTmdzLxQqn_myo2gzgmxjES_dAaslMg_rYEQjcX521I3XK-p38P71HYP4TGhzk01J8cB9Wmxi7rC1z2-rbKYqVMclYmyGoxN1kz_/s977/cara%20install%20python%203%20di%20windows%20langkah%204.PNG)

### Install python di Mac OS

Sebelum kamu dapat menginstall python3 pada mac os, kamu diwajibkan menginstall GCC terlibih dahulu. untuk menginstall GCC teman-teman bisa melakukannya dengan cara menginstall Xcode dari mac APP Store.

* Jika teman teman sudah melakukan installasi Xcode, selanjutnya teman-teman tinggal menambahkan command line tools dengan cara menjalankan printah dibawah ini pada terminal teman-teman
  ```bash
  xcode-select --install
  ```
* Setelah itu teman-teman bisa menginstall Homebrew dengan mengetikkan ini di terminal teman-teman
  ```bash
  /bin/bash -c "$(curl -fsSLhttps://raw.githubusercontent.com/Homebrew/install/master/install.sh)"
  ```
* Jika sudah terinstall maka baru teman-teman bisa menginstall python, dengan cara menjalankan printah di bawah ini pada terminal teman-teman
  ```bash
  brew install python
  ```

berbeda dengan windows teman-teman pengguna mac os untuk menjalankan python3 pada terminal teman-teman dapat menuliskan "python3" jika teman-teman hanya menuliskan "python" saja maka yang terjalankan adalah python versi 2

### Install python di linux (Ubuntu)

untuk teman-teman pengguna sistem operasi linux terutama menggunakan distro ubuntu 16.10 dan keatasnya, yang perlu teman-teman lakukan cukup simpel hanya dengan mengeksekusi printah install python3 saja dan jalankan langkahnya seperti biasa, dan untuk menjalankannya tinggal jalankan perintah "python3" pada terminal teman-teman
```bash
sudo apt-get update

sudo apt-get install python3
```

Install text editor
-------------------

Setelah teman-teman sudah selesai menginstall python pada komputer teman-teman, selanjutnya teman-teman install text editor untuk memudahkan teman-teman dalam pembuatan dan menjalankan program python teman teman, sebenarnya ada banyak sekali text editor yang bisa teman-teman gunakan seperti notepad++, Atom, Sublime text, VScode dan masih banyak lagi. pada langkah kali ini author tidak akan memberikan tutorial bagaimana cara menginstall text editor, karena untuk menginstall text editor itu sebenarnya sangat mudah sehingga author ingin memberikan tantangan kepada teman-teman yang baru terjun didunia perkodingan untuk bisa menginstall sendiri text editor teman-teman.

> Text editor yang author gunakan dalam seri tutorial belajar koding dengan python pada web ini adalah [VScode](https://code.visualstudio.com/)

### Membuat Program Pertama

Yuk kita langsung buat program pertama teman-teman dengan menggunakan bahasa pemrograman python ini. program pertama yang akan kita buat adalah program untuk menampilkan text pada terminal atau cmd teman-teman

* pertama teman-teman buka dulu text editor teman-teman selanjutnya silahkan pilih lokasi direktori untuk teman-teman menulis program disini author menyarankan teman-teman memilih direktori atau membuat direktori dimana teman-teman akan mudah mencarinya, jika teman-teman menggunkan VScode maka caranya adalah dengan cara tekan ctrl+o untuk pengguna windows dan linux, untuk pengguna mac dikarenakan author tidak menggunakan mac maka author tidak bisa memberikan shortcut untuk membuka direktori, tetapi tenang masih ada cara lain kok yang bisa dijalankan di mac, windows dan linux, caranya teman teman klik menu 
  file > Open Folder
* Setelah membuka direktori selanjutnya teman teman buat file dengan cara klik icon exploler pada toolbar sebelah kiri (posisi paling atas icon dokumen) untuk membuka bilah exploler

  [![](https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhZeSxdXSHjEieIOam0Zx0MwdK2AUoHtJlOjNowGceQF4iD-rCmSOp8tgdiqrf5aggEiZ5kJSZ4VzcTNqDlLSyZOMHLfDJxTezOElLoj4XGMCuNXdx0lFHIqyU3GhnLXw9TIWW49jcuiXIlhhf7DrZRzDjg4CFBZKmKLNcFlVDLNcSw9dIOR1cFYJIV/s320/cara%20install%20python%203%20di%20windows%20langkah%205.png)](https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhZeSxdXSHjEieIOam0Zx0MwdK2AUoHtJlOjNowGceQF4iD-rCmSOp8tgdiqrf5aggEiZ5kJSZ4VzcTNqDlLSyZOMHLfDJxTezOElLoj4XGMCuNXdx0lFHIqyU3GhnLXw9TIWW49jcuiXIlhhf7DrZRzDjg4CFBZKmKLNcFlVDLNcSw9dIOR1cFYJIV/s1366/cara%20install%20python%203%20di%20windows%20langkah%205.png)
* selanjutnya teman teman klik new file

  [![](https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhQdwrkzQQD7ghflCb54WSQCLbEETMYJpB6PITsbvQaQF8HC4Fp_dJOQtkYSICgEg-LPxAHyWNKp7HjHQB7rD4JskelfDPNrgEFmXPpDlyXf7I-3NsXpVwqrAL1zuf5tYyPx2PfN6yGgLo3ZiYV4aqfB21KhgkOJRg6a07WgNitPpQbahHVKGSmw2bc/s320/cara%20install%20python%203%20di%20windows%20langkah%206.png)](https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhQdwrkzQQD7ghflCb54WSQCLbEETMYJpB6PITsbvQaQF8HC4Fp_dJOQtkYSICgEg-LPxAHyWNKp7HjHQB7rD4JskelfDPNrgEFmXPpDlyXf7I-3NsXpVwqrAL1zuf5tYyPx2PfN6yGgLo3ZiYV4aqfB21KhgkOJRg6a07WgNitPpQbahHVKGSmw2bc/s1366/cara%20install%20python%203%20di%20windows%20langkah%206.png)
* buatlah file dengan nama programpertama.py

  [![](https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEj6ePiqH0vHY9dqQhJyw54BkqIykTCZ_CQ055fsMA9Vp6hI_-irSqL3eTDtQ39OVdnuTuqT0pCyOOgX2Dxo7vjn6N9sgMI_nE8QGnWGNoeGh_stXEHJO_JGv1IUu-KQulfWaeYMh48p0-1tPGLEs1z-HaVDCmcV6BuB8NHT82bon1Ju6s97y204Fzqz/s320/cara%20install%20python%203%20di%20windows%20langkah%207.png)](https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEj6ePiqH0vHY9dqQhJyw54BkqIykTCZ_CQ055fsMA9Vp6hI_-irSqL3eTDtQ39OVdnuTuqT0pCyOOgX2Dxo7vjn6N9sgMI_nE8QGnWGNoeGh_stXEHJO_JGv1IUu-KQulfWaeYMh48p0-1tPGLEs1z-HaVDCmcV6BuB8NHT82bon1Ju6s97y204Fzqz/s1366/cara%20install%20python%203%20di%20windows%20langkah%207.png)
* Selanjutnya teman-teman tuliskan kode dibawah ini pada file teman-teman
  ```python
  print("Hallo ini program pertama ku dengan python")
  ```
* selanjutnya teman-teman dapat menjalankannya dengan cara menuliskan pada terminal atau cmd teman-teman printah "python3 programpertama.py" atau pada pengguna windows dengan cara "python programpertama.py" tetapi untuk melakukan dengan cara ini pertama teman-teman harus membuka direktori tempat file program teman-teman terlibih dahulu pada cmd atau terminal teman-teman. tenang ada cara mudahnya kok, pada vscode teman teman cukup mengklik icon run (bentuk segitiga) pada bagian atas file teman-teman, selanjutnya akan terbuka terminal pada VScode teman-teman pada bagian bawah

  [![](https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhwj15K1oLg22yHshfKv6NL5L4HV2CgZ6oKoAC_tibU38zT4z6WgyXk45tgx0zbHIxgHRS3128SxQA8tW9cguffTOBaECLMnWP448t99hYaq392gxrAeYAF1xpM_TzROedMfgXtJmc8TIQQ3V0YtII_DalA8MvgwMC27LT0aQyBseVsMl4BSZcLqV4R/s320/cara%20install%20python%203%20di%20windows%20langkah%208.png)](https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhwj15K1oLg22yHshfKv6NL5L4HV2CgZ6oKoAC_tibU38zT4z6WgyXk45tgx0zbHIxgHRS3128SxQA8tW9cguffTOBaECLMnWP448t99hYaq392gxrAeYAF1xpM_TzROedMfgXtJmc8TIQQ3V0YtII_DalA8MvgwMC27LT0aQyBseVsMl4BSZcLqV4R/s1366/cara%20install%20python%203%20di%20windows%20langkah%208.png)
* Berikut tampilan terminal dan program teman-teman

  [![](https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEh-CDcOXO1XPrlQYPvgNhKZxUN7O0UgTTBTY56liR5ayE_EL6ai8xc4JssQqa-O5FX5cBxuHuitKZyWTp_b_T5lgL7KtCuo82LvPdmhEjb6G5tjmyTmQW3gradJ0LOk3hFoPG09q4YAl6mPrWwOyr2x0AQ3xDdYxnUl-hdZOzaHU1SGnY3Htx3d4K8c/s320/cara%20install%20python%203%20di%20windows%20langkah%209.png)](https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEh-CDcOXO1XPrlQYPvgNhKZxUN7O0UgTTBTY56liR5ayE_EL6ai8xc4JssQqa-O5FX5cBxuHuitKZyWTp_b_T5lgL7KtCuo82LvPdmhEjb6G5tjmyTmQW3gradJ0LOk3hFoPG09q4YAl6mPrWwOyr2x0AQ3xDdYxnUl-hdZOzaHU1SGnY3Htx3d4K8c/s1366/cara%20install%20python%203%20di%20windows%20langkah%209.png)
* Selamat teman-teman sudah membuat program pertama teman-teman menggunakan bahasa pemrograman python
