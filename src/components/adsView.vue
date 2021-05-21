<template>
<aside id="aside1">
  <div class="ad">
    <img src="https://cdn.pixabay.com/photo/2015/06/01/09/00/adwords-793034_1280.jpg" alt="ad1" width="200" height="120">
    <p id="adTitle">Tu jest miejsce na twoją reklamę</p>
  </div>
  <div>
    <img src="https://cdn.pixabay.com/photo/2014/09/23/09/56/display-panel-457381_1280.jpg" alt="ad2" width="200" height="120">
    <p id="adTitle">Wybierz kurs dla siebie, nie czekaj, zyskaj nowe możliwości juz teraz!</p>
  </div>
  <div>
    <img src="https://cdn.pixabay.com/photo/2018/11/05/15/19/instrument-3796293_1280.jpg" alt="ad3" width="200" height="120">
    <p id="adTitle">Instrumenty muzyczne używane w okazyjnych cenach. Rabat do -70% tylko do wyczerpania zapasów! </p>
  </div>
</aside>
</template>
<style>

.ad{
  margin-top: 30px;
  margin-bottom: 30px;
}

#adTitle{
    font-family: 'Segoe UI';
    font-size: 14px;
    margin: 15px;
    display: -webkit-box;
    overflow: hidden;
    text-overflow: ellipsis;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
}
@import url("../main.css");
</style>

