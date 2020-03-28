<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-light shadow">
    <a class="navbar-brand" href="#">Axios</a>
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>

    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav mr-auto">
        <router-link
          tag="li"
          class="nav-item"
          active-class="active"
          exact
          to="/">
          <a class="nav-link" href="#">Yazı Listesi</a>
        </router-link>
        <router-link
          tag="li"
          class="nav-item"
          active-class="active"
          exact
          to="/new-post">
          <a class="nav-link" href="#">Yeni Ekle</a>
        </router-link>
      </ul>
    </div>
  </nav>
</template>
