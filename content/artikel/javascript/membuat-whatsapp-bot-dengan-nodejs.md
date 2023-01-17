---
draft: false
date: 2023-01-09T21:14:31+07:00
title: "Membuat Whatsapp Bot Dengan Nodejs"
slug: membuat-whatsapp-bot-dengan-nodejs

tags:
    - Javascript
    - Nodejs
    - js

categories:

authorname: "krisna prihadiyanto"
authorlink: "https://koleksiprihadi.github.io/"

authorname: "krisna prihadiyanto"
authorlink: "https://koleksiprihadi.github.io/"
authorphoto: "/images/koleksiprihadi.jpeg"

image: /images/Membuat-whatsapp-bot-sederhana-dengan-nodejs.png
thumbnail: /images/Membuat-whatsapp-bot-sederhana-dengan-nodejs.png
description: "Cara membuat whatsapp bot menggunakan javascript dan nodejs dengan bantuan library whatsapp-web.js"
---
halo teman-teman, pada artikel ini author akan memberikan sebuah tutorial bagaimana cara membuat whatsapp bot, untuk membuat whatsapp bot ini kita akan menggunakan bahasa pemrograman javascript dan menggunakan platform node.js.

> **NOTE:** I can't guarantee you will not be blocked by using this method, although it has worked for me. WhatsApp does not allow bots or unofficial clients on their platform, so this shouldn't be considered totally safe.

> CATATAN: Saya tidak dapat menjamin Anda tidak akan diblokir dengan menggunakan metode ini, meskipun cara ini berhasil untuk saya. WhatsApp tidak mengizinkan bot atau klien tidak resmi di platform mereka, jadi ini tidak boleh dianggap sepenuhnya aman.

yang harus teman-teman siapkan

1. Node.js versi terbaru
2. NPM
3. library whatsapp-web.js
4. library qrcode-terminal

sebelum memulai tutorial, author harap teman-teman sudah mengetahui tentang javascript, node.js dan npm ya, karena pada artikel ini author hanya akan berfokus untuk menjelaskan bagaimana membuat WhatsAPP BOT saja, untuk tutorial javascript, node.js dan npm teman-teman bisa baca di menu tutorial pada web ini ya...

oh iya teman-teman pada tutorial ini author menggunakan sistem operasi [Ubuntu 22.04.1 LTS (Jammy Jellyfish)](https://releases.ubuntu.com/22.04/), teman-teman yang menggunakan windows dan mac os tidak perlu khawatir, karena untuk tutorial pembuatan whatsapp botnya akan sama saja, paling hanya berbeda pada penginstallan node.js dan npm saja, untuk penginstalan library nya akan sama saja nantinya

## Install library yang diperlukan

untuk membuat whatsapp bot pada tutorial ini kita akan memerlukan beberapa library seperti [whatsapp-web.js](https://wwebjs.dev/) dan [qrcode-terminal](https://www.npmjs.com/package/qrcode-terminal), sebenarnya kita juga membutuhkan library puppeter tetapi untuk library puppeter sendiri sudah include pada library whatsapp-web.js untuk menginstal library-libarary tadi kita akan menggunakan npm package manager

pertama teman-teman silahkan buat folder baru berjudul whatsappbot, selanjutnya teman-teman buka terminal/cmd pada folder tersebut, salah satu cara membuka terminal/cmd pada sebuah folder teman-teman bisa mengikuti cara di bawah ini ya

bagi pengguna windows

1. buka cmd dengan menekan **win + r**
2. kemudia ketikan **cmd** dan klik **ok** atau bisa juga langsung menekan enter
3. selanjutnya teman teman buka exploler dan copykan url folder teman-teman seperti pada gambar di bawah ini
4. selanjutnya pada cmd teman-teman ketikan cd, seperti berikut
```bash
C:\Users\User>cd
```
   selanjutnya pastekan url folder tadi setelah cd
```bash
C:\Users\User>cd D:\whatsappbot
```

   url folder diatas tidak harus sama dengan punya teman-teman ya, selanjutnya silahkan tekan enter dan cmd teman teman sekarang sudah berada di folder whatsappbot ditandai dengan berubahnya alamat sebelum tanda lebih besar (```>```)
```bash
D:\whatsappbot>
```

bagi pengguna mac os dan linux silahkan menyesuaikan ya, jika masih bingung silahkan bertanya di kolom komentar yaa teman-teman👍

setelah teman-teman membuka terminal/cmd pada folder whatsappbot selanjutnya teman-teman jalankan perintah ```npm init``` untuk membuat file ```package.json``` yang akan berisi detail dari aplikasi kita nantinya seperti di bawah ini

```json
{
  "name": "whatsapp-bot-pertama-saya",
  "version": "1.0.0",
  "description": "belajar membuat whatsapp bot menggunakan nodejs",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "author": "koleksiprihadi",
  "license": "ISC"
}
```
pada saat teman-teman menjalankan perintah ```npm init``` tadi teman-teman akan disuguhkan beberapa pertanyaan seperti di bawah ini

```bash
package name: (whatsappbot)
version: (1.0.0) 
description: 
entry point: (index.js) 
test command: 
git repository: 
keywords: 
author: 
license: (ISC) 
```
jika teman-teman tidak ingin mengisi maka teman-teman hanya cukup menekan enter saja disetiap pertanyaan, pada setiap pertanyaan yang di ikuti dengan nilai di dalam tanda kurung ```package name: (whatsappbot)``` misalnya maka jika teman-teman biarkan kosong dan langsung menekan enter maka pertanyaan tersebut akan diisi dengan nilai yang berada di dalam tanda kurung tersebut.

pada tutorial ini author akan mengisinya seperti dibawah ini

{{< terminal id="0" command="npm init" class="terminalSukses" >}}
package name: (whatsappbot) whatsapp-bot-pertama-saya <br>
version: (1.0.0) <br>
description: belajar membuat whatsapp bot menggunakan nodejs <br>
entry point: (index.js) <br>
test command: <br>
git repository: <br>
keywords: <br>
author: koleksiprihadi <br>
license: (ISC) <br><br>
{<br>
  "name": "whatsapp-bot-pertama-saya",<br>
  "version": "1.0.0",<br>
  "description": "belajar membuat whatsapp bot menggunakan nodejs",<br>
  "main": "index.js",<br>
  "scripts": {<br>
    "test": "echo \"Error: no test specified\" && exit 1"<br>
  },<br>
  "author": "koleksiprihadi",<br>
  "license": "ISC"<br>
}<br><br><br>


Is this OK? (yes) 
{{< /terminal >}}

setelah itu teman-teman silahkan buat file ```index.js``` setara dengan file ```package.json``` dalm folder project kita tadi

{{< dirtree id="0">}}
<script>
var TreeView = () => {
  return section(
    { className: "container" },
    Folder({ name: "whatsappbot" },
      File({name: "index.js"}),
      File({name: "package.json"})      
    ),
  );
};
</script>
{{< /dirtree >}}

setelah itu kita akan menginstal library-library yang kita perlukan dengan menggunkan npm

pertama kita akan menginstall library ```whatsapp-web.js``` silahkan jalankan kode dibawah ini pada terminal/cmd teman-teman tadi

```bash
npm i whatsapp-web.js
```
setelah selesai, selanjutnya kita install lagi library kedua ```qrcode-terminal```, dengan kode dibawah ini

```bash
npm i qrcode-terminal
```

setelah kita selesai menginstal library maka pada folder project kita akan terdapat sebuah file baru dengan nama ```package-lock.json``` dan sebuah folder bernama ```node_modules```, seperti dibawah ini

{{< dirtree id="1">}}
<script>
var TreeView = () => {
  return section(
    { className: "container" },
    Folder({ name: "whatsappbot" },
      Folder({name: "node_modules"}),
      File({name: "index.js"}),
      File({name: "package-lock.json"}), 
      File({name: "package.json"}),
    ),
  );
};
</script>
{{< /dirtree >}}

setelah itu teman-teman silahkan buka file index.js yang kita buat sebelumnya dan kita importkan library-library tadi seperti kode di bawah ini

```javascript
const qrcode = require('qrcode-terminal');
const { Client, LocalAuth } = require('whatsapp-web.js');
```

dapat kita lihat pada saat kita mengimportkan library ```whatsapp-web.js``` kita juga mengimportkan 2 submodul dari ```whatsapp-web.js``` yaitu ```Client``` dan ```LocalAuth```.

setelah kita importkan, selanjutnya kita akan membuat sebuah fungsi pada bot kita untuk menampilkan semua pesan yang baru masuk. 

untuk melakukannya pertama kita akan membuat fungsi ```auth``` terlebih dahulu dimana nanti pada terminal akan di tampilkan qrcode dan pada saat sudah berhasil login akan ditampilkan pesan "```whatsapp bot siap```. silahkan teman-teman copy kode di bawah ini ya

```javascript
//menginisialisasi fungsi Client dan folder auth
const client = new Client({
  authStrategy: new LocalAuth({dataPath: 'auth'}),
});

//menampilkan qrcode
client.on('qr', qr => {
  qrcode.generate(qr, {small: true});
});

// menampilkan pesan jika whatsapp bot sudah login
client.on('ready', () => {
    console.log('whatsapp bot siap');
});

client.initialize();
```
jika teman-teman jalankan (dengan perintah pada terminal ```node index.js```) dan teman-teman scan qrcode menggunakan whatsapp maka akan seperti ini

{{< terminal id="1" command="node index.js" class="terminalSukses" >}}
▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄<br>
█ ▄▄▄▄▄ █▀██ ▀▄▄█ ▄█▀▄█▀▄ █▄▄      ▄██ ▄█ ▄ ▀██ ▄▄▄▄▄ █<br>
█ █   █ █▄█▄  ▀▄█▄▄▄█▄▄█▀▄▄█  █▄▄▄ █▄▄████▄▀▄▀█ █   █ █<br>
█ █▄▄▄█ █ ▄▄  ██ ▀▀▄█▄██▄ ▄▄▄ ▄ ██▄█▄▄▀▄▀ ▄ ███ █▄▄▄█ █<br>
█▄▄▄▄▄▄▄█ ▀▄▀▄█ ▀ ▀▄█▄▀▄▀ █▄█ ▀ █ █ █ ▀▄▀ ▀ █▄█▄▄▄▄▄▄▄█<br>
█ ▄▀▄▀▀▄ ▀▀▄█  ▄█ █▄██▄ ▄  ▄▄ ▄█ ▀██▄▄▄▄ ▄██▀▄█▄▄ █▄▄██<br>
█ ▄█▀▀▄▄  ▄▀  ▀ █  █▀ ▄▄▀█▄▀ ▀██ ▄▀ ▀▀▄ █▀▀▀ ▄█▄▀█▄▀ ██<br>
█ ▄▄▀ █▄ █▄▄▀   ▄  ▄ █▄▄  ▄▄▀▄██▄▄█▀█ ▀█  █▄▀██▀▄▄██▄ █<br>
█▀ ▀▄▀▀▄▄█▀█▀ ██▄▄▄ ▄▄▀▄ ███▄ ▀▀▄▀ ▄▄ ▀▀█  ▀█▄▀█ ▀▄█▄ █<br>
█    ▀ ▄ ▀█▀ ▄▄  █▀ ▄▀▀▀  ▀▀▀  ▄▄ ▄▄▀▄  ▄▀ ██ █▄█▄ ▄▄▀█<br>
██▄▀ ▄▄▄█▀▀▄█▄    ▄█▄ █▄██▀█ ▄ ▄█▀█▀█▀ ██  █ █▄ ▄  █ ▄█<br>
█▀▀ ▄▀█▄▄▄█▄ ▀ ▀██▄ █▄▄▄▄█ █▀█▄▄ ██▄▄ ▄▄▄▄▄█ ▄▀▄ ▄██▀▀█<br>
█▀▀ █ █▄█ ▀▀▀▄▀█   ▄▄▀▄ ▄██  ▀▄ ▄█▄▀▄▀▄ ▀ ▄█▄    ▀▄▀▄▀█<br>
█ ▀█▀ ▄▄▄ ▄▄▄▀▄██▄ ▄ █    ▄▄▄ ▀█ ▄█▀▄ ▀█ ▄█▄█ ▄▄▄ █▄▄▄█<br>
█  ▄▄ █▄█ ▀▀▄█▀▀█▀ █ █▀▀█ █▄█ ▀██ ▄▄  ▄ █ █▄  █▄█ █▄ ▄█<br>
█ ▄▀▀ ▄▄▄▄▀  ▀▀▄█▄  █  ▀  ▄▄▄▄██▀▄█▄▀▄ ▀██ ▄▀  ▄ ▄▄▄█▀█<br>
█▀▄▀ █▄▄▄ █ █ ▀▄ ▀███ █▄█▀▄▄▄▀ █▀▀▀▀▀▄ █▀▀▀▄ █  ▀█▀█▀▄█<br>
██▀ ▄█ ▄█▄ ▀█ ██ ▄▄ ▄▄  ▄█ ▀▀▀▄▄▀▀█▄█▄▀█▄▄▄▄█▀▄▄ ██▄ ▄█<br>
█ █  ▄▀▄ ▄ ▄  ▀▄ █  ▀▄██▀▀   ▄▄▄  ███▄█▀█▀▀▄ ▄▄█  ▄▀ ▀█<br>
█▄▀▀▄ ▄▄ ▄███▄▀  ▀ ▄▀▄  ▀▀ ▄▄ ▀█▄▄█▀▄  █▄▄▄█▀█ ▄ █▄▀█▄█<br>
███ █▄▀▄▀▄   ▀  ▀ ███▄██▄▄▀▀██▀▀▄▄█▄█ ▄▄█▀ ▄█ █ ▄█▀▄█▄█<br>
█   ▀ ▄▄█▄  ▀█▀▀█▀█▄▄▀▄█▀▀▀▄▀ ▀██▄▄▄▄ █ ▄▀██  ▄▀▄█▀▀█ █<br>
█▄ ▀▄▄▄▄ █▀▀██ ████▄▀▄▀▀█▄  ▄ █▄▄▀▀▀█▄█▄▀  ▀▀ █▄▄█ ██ █<br>
████▄██▄█  ▀█▄█▀▄▄▄ █▄▄▄▄ ▄▄▄ ▄██████ ▄█  ██▀ ▄▄▄  ▄█▀█<br>
█ ▄▄▄▄▄ █▄█▄ █▄ ▄█▄▀ █▀▄▀ █▄█ ▀ ▀█▄▄ ▀██▀▀▀█▄ █▄█ ▄▀▄▀█<br>
█ █   █ █▀▀ ▄▀ ▀   █ ▄  █▄ ▄▄ ██ ▄█ █▄ █▄ █▄▀ ▄ ▄ ▄▀█ █<br>
█ █▄▄▄█ █▀▄ ▄  █ ▄ ██▄▄▄▄  █ █ █▄▀▀▄▀▄▀▀▀ ▀█▀▀ █▄▄█▄ ██<br>
█▄▄▄▄▄▄▄█▄█▄█▄▄▄██▄▄▄▄▄██▄▄█▄█▄▄▄▄▄▄▄▄█▄▄███▄▄▄▄▄▄▄█▄██<br>

whatsapp bot siap
{{< /terminal >}}

selanjutnya kita akan membuat fungsi menampilkan setiap pesan baru di terminal, silahkan teman-teman copy code di bawah ini dan pastekan di atas kode ```client.initialize();```.

```javascript
// menampilkan pesan yang baru masuk
client.on('message', async msg => {
  console.log(msg.body);
});
```
maka pada saat teman-teman jalankan programnya setiap pesan masuk akan ditampilkan pada terminal teman-teman. berikut kode program fullnya ya teman-teman

```javascript
//menginisialisasi fungsi Client dan folder auth
const client = new Client({
  authStrategy: new LocalAuth({dataPath: 'auth'}),
});

//menampilkan qrcode
client.on('qr', qr => {
  qrcode.generate(qr, {small: true});
});

// menampilkan pesan jika whatsapp bot sudah login
client.on('ready', () => {
    console.log('whatsapp bot siap');
});

// menampilkan pesan yang baru masuk
client.on('message', async msg => {
  console.log(msg.body);
});

client.initialize();
```

setelah kita sudah bisa membuat sebuah program whatsapp bot untuk melihat pesan baru masuk, selanjutnya kita akan membuat sebuah program whatsapp bot dimana jika kita mengirimkan sebuah format pesan maka whatsapp bot kita akan mengirimkan sebuah pesan

untuk melakukannya kita akan menggunakan fungsi ```msg.reply``` untuk semua fungsi yang bisa teman-teman gunakan seperti pada tabel dibawah ini teman-teman bisa membaca dokumentasi dari library whatsapp-web.js nya [di sini yaaa👋](https://docs.wwebjs.dev/)

oke kita lanjutkan untuk membuat program dimana setiap kita mengirimkan sebuah format pesan maka akan otomatis dibalas dengan sebuah pesan dari bot kita. berikut kode program fullnya

```javascript
//menginisialisasi fungsi Client dan folder auth
const client = new Client({
  authStrategy: new LocalAuth({dataPath: 'auth'}),
});

//menampilkan qrcode
client.on('qr', qr => {
  qrcode.generate(qr, {small: true});
});

// menampilkan pesan jika whatsapp bot sudah login
client.on('ready', () => {
    console.log('whatsapp bot siap');
});

// menampilkan pesan yang baru masuk
client.on('message', async msg => {
  console.log(msg.body);

  // fungsi untuk mereplay atau membalas pesan
  if (msg.body === 'p') {
    msg.reply('Hai ada yang bisa dibantu');
  }

});

client.initialize();
```

pada kode program diatas kita menambahkan fungsi ```if``` di dalam fungsi ```on``` ketika pesan masuk dibawah kode untuk menampilkan pesan yang masuk tersebut dengan kondisi dimana jika user mengirim kita sebuah pesan ```p``` maka akan di replay/dibalas dengan pesan ```"Hai ada yang bisa dibantu"```.

silahkan dicoba ya teman-teman. begitulah cara menggunakan nodejs untuk membuat sebuah whatsapp bot secara sederhana. teman-teman bisa juga mengeksplore sendiri fungsi-fungsi pada library ```whatsapp-web.js``` dan membuat bot whatsapp versi teman-teman yaaa...😁