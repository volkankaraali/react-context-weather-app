# [live demo](https://react-weather-app-context.netlify.app)

* datalar openweather apisi ile alınmaktadır.

* api, sehirlerin lat ve lon'una göre hava durumunu datasini paylaşmakta bu nedenle input ile alinan sehir adiyla önce o sehrin lat ve lon'unu ögrenmek icin sorgu atilir.
* sorgudan alinan lat ve lon bilgisi ile haftalik hava durumu verisi icin tekrar sorgu atılır.dönen data(8 item) cityWeatherData olarak set edilip diğer componentlere citycontext ile provide edilir.
* cityWeatherData içerisinde 8 eleman bulunmakta. ilk eleman o günün hava durumu bilgisi. bu nedenle haftalık gösterimde, slice metodu ile ilk elemanı silinerek görüntülenmekte.
* apide eslesmeyen bir sehir adi gelirse hata ekrani gösterir.
* sehrin ulkesine gore react-country-flag ile ulkenin bayragi gösterilir.

#
* tailwindcss
* axios
* react-country-flag

