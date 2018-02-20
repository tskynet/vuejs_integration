<template>
  <div id="userProfileContainer">
    <b-row>
      <b-col lg="4" md="5">
        <ResumeClient></ResumeClient>
      </b-col>
      <b-col lg="8" md="7">
        <EditProfile></EditProfile>
      </b-col>
    </b-row>
  </div>
</template>
<script>
import ResumeClient from '@/components/UI/UserProfile/ResumeClient'
import EditProfile from '@/components/UI/UserProfile/EditProfile'
export default {
  name: 'UserProfileContainer',
  components: {
    ResumeClient,
    EditProfile
  },
  data: () => ({

  })
}
</script>
<style scoped>
</style>
