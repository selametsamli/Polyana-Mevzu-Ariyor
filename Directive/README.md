# directive-kullanimi



* bind(el,binding,vnode) --> Biz elemente bir directive tanımı yaptığımızda ilk olarak çalışacak fonksiyonudur.
    * el --> directive in kullanıldığı elementi verir.
    * binding --> Hangi argümanı aldığı, ne tür verilerin gönderildiğini verir.
    * vnode --> Virtual dom üzerindeki nodu bize verir
* inserted(el,binding,vnode) --> element doma eklenir eklenmez çalışan hookdur
* update(el,binding,vnode,oldVnode) --> directivin binde olduğu component update olduğunda çalışır
    * oldVnode --> update olammış nodu verir.
* componentUpdated(el,binding,vnode,oldVnode) --> update ile benzer çalışır. yalnız child componentler olduğunda da çalışır.
* unbind(el,binding,vnode) --> directive unbind olduğunda çalışır.
