<template>
    <v-container class="mt-0">
      <v-layout row wrap  v-for="meetup in meetups" :key="meetup.id" class="mb-2">
        <v-flex xs12 sm10 md8 offset-sm1 offset-md2>
          <v-card class="info">
            <v-container fluid>
              <v-layout row>
                <v-flex xs5 sm4 md3>
                  <v-card-media
                    :src="meetup.imageUrl"
                    height="140px"
                  ></v-card-media>
                </v-flex>
                <v-flex xs7 sm8 md9>
                  <v-card-title>
                    <div>
                      <h3 class="white--text mb-2">{{ meetup.title }}</h3>
                      <div>{{ meetup.date | date }}</div>
                    </div>
                  </v-card-title>
                  <v-card-actions>
                    <v-btn float class="btn_meetup" :to="'/meetups/' + meetup.id" style="background-color:transparent">
                      <v-icon left light>arrow_forward</v-icon>
                      View Meetup
                    </v-btn>
                  </v-card-actions>
                </v-flex>
              </v-layout>
            </v-container>
          </v-card>
        </v-flex>
      </v-layout>
    </v-container>
</template>

<script>
  export default {
    computed: {
      meetups () {
        return this.$store.getters.loadedMeetups
      },
      userIsAuthenticated () {
        return this.$store.getters.user !== null && this.$store.getters.user !== undefined
      },
      userIsCreator () {
        if (!this.userIsAuthenticated) {
          return false
        }
        return this.$store.getters.user.id === this.meetup.creatorId
      }
    }
  }
</script>


<style scoped>
  .btn_meetup{
    background-color:transparent;
    box-shadow:0 0;
    border:0;
  }
</style>
