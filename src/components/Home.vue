<template>
    <v-container class="mt-0">
      <v-layout row wrpa class="mb-3">
        <v-flex xs12 sm6 class="text-xs-center text-sm-right">
          <v-btn large router to="/meetups" class="primary">Explore Meetups</v-btn>
        </v-flex>
        <v-flex xs12 sm6 class=" text-xs-center text-sm-left">
          <v-btn large router to="/meetup/new" class="primary">Organize Meetups</v-btn>
        </v-flex>
      </v-layout>
      <v-layout row wrap class="mb-2">
        <v-flex xs12>
          <v-carousel>
            <v-carousel-item
              v-for="meetup in meetups"
              :src="meetup.imageUrl"
              :key="meetup.id">
              <div class="title">
                {{meetup.title}}
              </div>
            </v-carousel-item>
          </v-carousel>
        </v-flex>
      </v-layout>
      <v-layout row wrpa class="mb-2">
        <v-flex xs12 class="text-xs-center">
          <p>Join our awesome meetups!</p>
        </v-flex>
      </v-layout>
    </v-container>
</template>

<script>
  export default {
    data () {
      return {
        meetups: [
          { imageUrl: 'http://d1aueex22ha5si.cloudfront.net/TEMP/time-square-new-york-city-istock-487537456-2-1501663358549.jpg', id: 'fjdsklafjldksafjlkdsafj123', title: 'Meetup in NewYork' },
          { imageUrl: 'http://europeanbusinessmagazine.com/wp-content/uploads/2017/07/paris.jpg', id: 'fjdsklafjldksafjlkdsafj1234', title: 'Meetup in Paris' },
          { imageUrl: 'https://www.lonelyplanet.com/travel-blog/tip-article/wordpress_uploads/2016/09/shutterstock_407897917-lotte-world-tower-seoul-61bbde30f1cf.jpg', id: 'fjdsklafjldksafjlkdsafj112345', title: 'Meetup in Seoul' }
        ]
      }
    }
  }
</script>

<style scoped>
  .title{
    position:absolute;
    bottom: 50px;
    background-color: rgba(0,0,0,0.5);
    color:#fff;
    padding:20px;
  }
</style>
