<template>
  <collection>
    <collection-item>
      <div class="row">
        <div class="col s6">
          Vue
        </div>
        <div class="col s4">
          angularjs
        </div>
        <div class=" secondary-content">
          <button type="button" name="button"></button>
          <button type="button" name="button"></button>
          react
        </div>
      </div>
    </collection-item>
      <collection-item avatar v-for="n in 4">
        <img :src="imageUrl" alt="" class="circle">
        <span class="title">Title</span>
        <p>First Line <br>
            Second Line
        </p>
        <a href="#!" class="secondary-content"><icon value="grade"></icon></a>
      </collection-item>



      <collection-item avatar>
          <icon value="folder" class="circle"></icon>
          <span class="title">Title</span>
          <p>First Line <br>
              Second Line
          </p>
          <a href="#!" class="secondary-content"><icon value="grade"></icon></a>
      </collection-item>
      <collection-item avatar>
          <icon value="file" class="circle"></icon>
          <span class="title">Title</span>
          <p>First Line <br>
              Second Line
          </p>
          <a href="#!" class="secondary-content"><icon value="grade"></icon></a>
          <a href="#!" class="third-content"><icon value="grade"></icon></a>
      </collection-item>
    </collection>
</template>

<script>
  module.exports = {
    components: {
      'collection': require('material-ui-vue/components/collections/collection.vue'),
      'collection-item': require('material-ui-vue/components/collections/collection-item.vue'),
      'icon': require('material-ui-vue/components/icons/icon.vue')
    },
    data: function () {
      return {
        imageUrl: 'http://tnfs.tngou.net/image/ext/150714/1c1ac4694da29dbd38e78f93d12cbf5b.jpg_300x300'
      }
    }
  }
</script>
