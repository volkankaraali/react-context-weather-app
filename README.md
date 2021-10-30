# [visit to page](https://react-weather-app-context.netlify.app)

* datalar openweather apisi ile alınmaktadır.

* api, sehirlerin lat ve lon'una göre haftalık hava durumunu paylaşmakta. şehir ismine göre önce bir sorgu atıp o şehrin lat ve lon bilgisini aldıktan sonra
* 7 gunluk havadurumu bilgisi için baska bir sorgu atmakta.dönen data cityData olarak diğer componentlere citycontext ile provide edilmekte.

* cityData içerisinde 8 eleman bulunmakta. ilk eleman o günün hava durumu bilgisi. bu nedenle haftalık gösterimde, slice metodu ile ilk elemanı gösterilmeden görüntülenmekte.

 * currentWeather içerisinde cityData'nın ilk elemanı bilgileri alınarak o günün hava durumu bilgileri gösterilmekte.

