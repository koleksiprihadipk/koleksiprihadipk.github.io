---
draft: false
date: 2022-12-23T01:44:12+07:00
title: "Bot Telegram Sederhana Dengan Python"
slug: bot-telegram-sederhana-dengan-python

tags:
    - Python

categories:

authorname: "koleksiprihadi"
authorlink: "https://koleksiprihadi.github.io/"

authorname: "koleksiprihadi"
authorlink: "https://koleksiprihadi.github.io/"
authorphoto: "/images/koleksiprihadi.jpeg"

image: https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgMTKc7_1xpgfGU44ZZ70y1EHBOYyiwC3lCeGovevETVKHIoBXveE4x93ox7h68APgPDsDPNESK3twBeeQB9OLX0gm-Qo7dZtMKkdZ1hunD1W3DstMRw6sdPoOpVx6e7Ea0lH8d1bmGJAagUXd74PbGzxaXUUHTT0hSWrrX0T1YGhB6MKecSykao_QA/s1280/Membuat%20Bot%20Telegram.png
thumbnail: /images/koleksiprihadi.jpeg
description: "Cara pembuatan BOT Telegram menggunakan bahasa pemrograman Python"
---
hallo teman-teman pada artikel ini saya akan memberikan sebuah tutorial implementasi bahasa pemrograman python untuk membuat sebuah telegram bot dimana bot yang akan kita buat disini adalah bot yang akan mengirim kembali pesan dari user bot kita. Tujuan dari artikel ini adalah untuk memberikan gambaran untuk teman-teman bagaimana cara membuat sebuah bot telegram menggunakan python, pada tutorial ini author menggunakan python 3 ya teman-teman. yuk langsung aja.

Persiapan Awal
--------------

sebelum kita bisa membuat bot telegram pertama yang harus kita siapkan terlebih dahulu adalah:

1.  Token Bot Telegram
2.  Modul python-telegram-bot
3.  kodingan botnya

langsung aja yuk kita bahas satu-persatu

  

### Membuat Token Bot Telegram

langkah pertama yang harus teman-teman lakukan untuk membuat bot telegram adalah mendapatkan token bot teman-teman, tenang saja ya teman-teman telegram menyediakan fitur untuk mendapatkan token ini secara mudah dan gratis lo yaa...

*   Oke, pertama teman-teman buka dulu telegram, dan selanjutnya pada bilah pencarian carilah sebuah bot dengan nama "BotFather" seperti dibawah ini  
      
    
    [![](https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiE6dr-YreODGADt26KWUPM3Q1_4YF-uZncUI_tbJKBByD55YY0NUM-J9ZH9bNEjV0wxH3iXMomcNsE71oLUVe8D2JKVspveuRT5XbFIkwiu0ip4W6i2MdgSCAeMs6mT-4edypZRytvyzIJAe5m97nuMFOQZkkgfAKxIA_nsbjwsTUofWLmgbaeH-VT/s320/Membuat%20Bot%20Telegram%201.png)](https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiE6dr-YreODGADt26KWUPM3Q1_4YF-uZncUI_tbJKBByD55YY0NUM-J9ZH9bNEjV0wxH3iXMomcNsE71oLUVe8D2JKVspveuRT5XbFIkwiu0ip4W6i2MdgSCAeMs6mT-4edypZRytvyzIJAe5m97nuMFOQZkkgfAKxIA_nsbjwsTUofWLmgbaeH-VT/s419/Membuat%20Bot%20Telegram%201.png)
    
      
    
*   Setelah teman-teman menemukan "BotFather" yang ada tanda ceklisnya selanjutnya buka bot tersebut dan tekan start dan akan muncul beberapa petunjuk perintah yang dapat dijalankan baik untuk membuat maupun untuk mengelola sebuah bot  
      
      
    
    [![](https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhhnPpgugZ1NRdjalpncjaRbKDnQtOplIBYXtkxnMv25Wgf9UAFKrvO_0y-C2Bj2w5aWUQEh5w1CjxuCgt4hZ8vMrNo0FjW7QONJlSve2YrxZVIxBbyffx-vrJ9uf_dVlPtmVmbnEb9rCbVhcUHTJI8v9jWmQDnGWGNcirr38ZSeGTrwySVnNdt95c3/s320/Membuat%20Bot%20Telegram%202.png)](https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhhnPpgugZ1NRdjalpncjaRbKDnQtOplIBYXtkxnMv25Wgf9UAFKrvO_0y-C2Bj2w5aWUQEh5w1CjxuCgt4hZ8vMrNo0FjW7QONJlSve2YrxZVIxBbyffx-vrJ9uf_dVlPtmVmbnEb9rCbVhcUHTJI8v9jWmQDnGWGNcirr38ZSeGTrwySVnNdt95c3/s947/Membuat%20Bot%20Telegram%202.png)
    
      
    
*   Selanjutnya teman-teman klik saja perintah "/newbot" atau teman-teman bisa mengetik dan mengirimnya, maka selanjutnya bot tersebut meminta kita mengirimkan nama yang akan kita gunakan untuk bot kita, disini author akan mencontohkan dengan nama "Panduan Koding"  
      
    
    [![](https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEibsODvOSXyixQH26fnRqiB4068oa58YPbmC_tDg1NOFiPk0YOHOCIIFZ3gcUNNRt3NGQuVw_Myees0paqVGeeHsYQ6nS63B5ZZ8IBTI5YGOlkzkTfwaLMk8TAJOg1IiFzjEvNa5nrvCDz3fGg04ObChiIMcB_7-Krhu_1xiEUzhJQlcLXTtwnu3qf9/s320/Membuat%20Bot%20Telegram%203.png)](https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEibsODvOSXyixQH26fnRqiB4068oa58YPbmC_tDg1NOFiPk0YOHOCIIFZ3gcUNNRt3NGQuVw_Myees0paqVGeeHsYQ6nS63B5ZZ8IBTI5YGOlkzkTfwaLMk8TAJOg1IiFzjEvNa5nrvCDz3fGg04ObChiIMcB_7-Krhu_1xiEUzhJQlcLXTtwnu3qf9/s945/Membuat%20Bot%20Telegram%203.png)
    
      
    
*   Selanjutnya teman-teman akan diminta untuk mengirimkan username yang akan digunakan untuk bot teman-teman, untuk pemberian username ini teman-teman jangan gunakan spasi ya, jika ingin menggunakan pemisah(spasi) teman-teman bisa menggantinya dengan tanda underscore( \_ ) dan akhiri username teman-dengan bot, misal disini author akan mencontohkan dengan "panduankoding\_bot"  
      
    
    [![](https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgv6w0DFLqV71O6NIRQFJ-vQ-7FqSQt1wORhAZHkZV04yiCierUaYBwWcqxA2CbHpQBDp8cSHJumIJtzVMC8Vl5r8gDbDcwAt4GLT7VheqGH8k9R_M6-xxrX8JZS9I09MQs6FdAC1u6n5eGpqFEimOqeQ5ARwbJ_nHU-SFB-gKA9ZZOchbMUcZ4xQBi/s320/Membuat%20Bot%20Telegram%204.png)](https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgv6w0DFLqV71O6NIRQFJ-vQ-7FqSQt1wORhAZHkZV04yiCierUaYBwWcqxA2CbHpQBDp8cSHJumIJtzVMC8Vl5r8gDbDcwAt4GLT7VheqGH8k9R_M6-xxrX8JZS9I09MQs6FdAC1u6n5eGpqFEimOqeQ5ARwbJ_nHU-SFB-gKA9ZZOchbMUcZ4xQBi/s945/Membuat%20Bot%20Telegram%204.png)
    
      
    
*   Selanjutnya BotFather akan mengirimkan link untuk menuju bot teman-teman dan juga tokennya, oh iya token tersebut simpan lah ditempat aman dan jangan sampai orang lain tahu karena dengan token tersebutlah kita bisa mengontrol bot kita.  
      
    
    [![](https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgMO2dbuLKYyAZ9sfyaOSsxRCaIPQTL-q-ivrWtkYJHeROrbOhIM1cOPZh6_bKpxSBWlXCrmLR3KS60fjs6xE_fkb-RHptjfsbwIQGl0m6qItfZZuAL7H25OWgJOjc6ONjDrvFg_E-6s6jVJ0Qx12mERJfnfvS49p7JyahjkrD11qY9A62nFfkB0r6Y/s320/Membuat%20Bot%20Telegram%205.png)](https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgMO2dbuLKYyAZ9sfyaOSsxRCaIPQTL-q-ivrWtkYJHeROrbOhIM1cOPZh6_bKpxSBWlXCrmLR3KS60fjs6xE_fkb-RHptjfsbwIQGl0m6qItfZZuAL7H25OWgJOjc6ONjDrvFg_E-6s6jVJ0Qx12mERJfnfvS49p7JyahjkrD11qY9A62nFfkB0r6Y/s945/Membuat%20Bot%20Telegram%205.png)
    
      
    

### Install Modul Bot Telegram

Setelah teman-teman sudah mendapatkan token dari bot teman-teman, selanjutnya sebelum kita melakukan koding untuk mengatur bot teman-teman, teman-teman harus menginstall sebuah library python dengan nama "python-telegram-bot" dengan menggunakan pip

```python
pip3 install python-telegram-bot
```

disini author mencontohkan dengan menggunakan python3 ya teman-teman dan juga perintah pip pada python3 juga menggunakan pip3

### Membuat BOT Telegram

setelah teman-teman selesai menginstall library yang diperlukan selanjutnya kita akan melakukan koding untuk bot kita

  

pertama teman-teman buatlah file python dengan nama bebas bisa saja dengan nama bot teman-teman atau bisa juga dengan bot.py saja

[![](https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjQCYUPaPFSGXdYLoQFDrXjeCRb3gx9lDYSgLv1weZ6YdGVR4l7a81BvNXsj3uPGu0wXzJOVuaWwvcW_o2yf6_9W9uyM7FsC7TI4EC53Fsa0hxjEEoo_3iu1mNRmNmd7rED7Admy8NfJYb990ye4DJg-MJZbBqosdi0usY6SAqZfiI8xMCDmtfn00FI/s320/Membuat%20Bot%20Telegram%206.png)](https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjQCYUPaPFSGXdYLoQFDrXjeCRb3gx9lDYSgLv1weZ6YdGVR4l7a81BvNXsj3uPGu0wXzJOVuaWwvcW_o2yf6_9W9uyM7FsC7TI4EC53Fsa0hxjEEoo_3iu1mNRmNmd7rED7Admy8NfJYb990ye4DJg-MJZbBqosdi0usY6SAqZfiI8xMCDmtfn00FI/s539/Membuat%20Bot%20Telegram%206.png)

setelah file python sudah teman-teman buat selanjutnya kita akan mulai kodingnya dengan langkah awal teman-teman harus melakukan import fungsi-fungsi dari library yang kita install sebelumnya

```python
import telegram
from telegram import Update
from telegram.ext import Updater, CommandHandler, CallbackQueryHandler, CallbackContext, MessageHandler, Filters
```

selanjutnya kita akan membuat fungsi untuk mengirim salam kepada pengguna bot teman-teman saat mereka klik start pada bot teman-teman

```python
def start(update: Update, context: CallbackContext) -> None:
    update.message.reply_text("Hallo")
```

selanjutnya kita akan membuat fungsi untuk menjalankannya

```python
def main() -> None:
    """Run the bot."""

    updater = Updater("Token teman-teman disini")

    updater.dispatcher.add_handler(CommandHandler('start', start))   

    updater.start_polling()
    
    updater.idle()


if __name__ == '__main__':
    main()
```

  

silahkan teman-masukan token yang didapatkan pada langkah awal kita sebelumnya pada "Token teman-teman disini" dan jadikan sebagai string ya teman-teman atau gampangnya masukan token teman-teman didalam tanda petik. selanjutnya mari kita test terlebih dahulu bot teman-teman silahkan jalankan program teman-teman dan buka dan jalankan bot teman-teman jika bot teman-teman mengirimkan pesan "hallo" maka bot pertama teman-teman sudah selesai dibuat  
  

[![](https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjmSfA_gEDt9yJJiFE63jKWXYNH2riYb5lq32HK1qpoK4Axy9OsbnIJF3Xb0MgjOHy8ahKfM2alqMfsTa0KEOWaWtV_-tYFMJOVh6dBA2heBAsufwog8WKG2AQ6XW8qzj4K0JdBW71oIClim6jDusK01CPXBl8ezWFVNw0VOGSaB5UwYlCK8bJKyEY2/s320/Membuat%20Bot%20Telegram%207.png)](https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjmSfA_gEDt9yJJiFE63jKWXYNH2riYb5lq32HK1qpoK4Axy9OsbnIJF3Xb0MgjOHy8ahKfM2alqMfsTa0KEOWaWtV_-tYFMJOVh6dBA2heBAsufwog8WKG2AQ6XW8qzj4K0JdBW71oIClim6jDusK01CPXBl8ezWFVNw0VOGSaB5UwYlCK8bJKyEY2/s944/Membuat%20Bot%20Telegram%207.png)

selanjutnya kita akan membuat fungsi dimana setiap pesan yang teman-teman atau pengguna bot teman-teman kirimkan maka bot kita akan mengirimkan pesan yang sama, cara nya cukup gampang loh. pertama teman-teman buatlah fungsi "echo"

```python
def echo(update, context):
    update.message.reply_text(update.message.text)
```

letakan fungsi diatas pada bagian sebelum fungsi main dan setelah fungsi start, jika sudah selanjutnya kita daftarkan fungsi tersebut pada fungsi main dengan cara masukan kode berikut pada fungsi main

```python
updater.dispatcher.add_handler(MessageHandler(Filters.text, echo))
```

letakan kode diatas pada baian sebelum kode "updater.start\_polling()", jika sudah, selanjutnya restart program teman-teman dan test kembali bot teman-teman, jika bot tersebut mengirimkan kembali pesan teman-teman maka teman-teman telah berhasil membuat BOT Telegram Sederhana dengan menggunakan bahasa pemrograman python, berikut kode full dari tutorial ini
```python

import telegram
from telegram import Update
from telegram.ext import Updater, CommandHandler, CallbackQueryHandler, CallbackContext, MessageHandler, Filters

def start(update: Update, context: CallbackContext) -> None:
    update.message.reply_text("Hallo")

def echo(update, context):
    update.message.reply_text(update.message.text)

def main() -> None:
    """Run the bot."""

    updater = Updater("Token teman-teman disini")

    updater.dispatcher.add_handler(CommandHandler('start', start))
    updater.dispatcher.add_handler(MessageHandler(Filters.text, echo))   

    updater.start_polling()
    
    updater.idle()


if __name__ == '__main__':
    main()
```
selanjutnya author juga akan membuat tutorial untuk membuat BOT telegram dengan lebih kompleks lagi jadi pantengin terus ya teman-teman web panduankoding.com ini atau teman-teman bisa mendaftarkan email teman-teman untuk menerima notifikasi artikel terbaru dari web ini pada menu langganan diatas tenang saja ini gratis ya teman-teman

Kesimpulan
----------

untuk membuat sebuah bot telegram kita memerlukan sebuah token yang kita dapatkan dari bot BotFather dimana pada bot tersebut kita mendaftarkan bot kita, dan teman-teman juga memerlukan library python-telegram-bot dan mengimportkan library tersebut pada program teman-teman