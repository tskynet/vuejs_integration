<template>
  <div id="userProfileContainer">
    <b-row>
      <b-col lg="4" md="5">
        <div>
          <ResumeClient></ResumeClient>
        </div>
        <div>
          <TeamMemberList></TeamMemberList>
        </div>
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
import TeamMemberList from '@/components/UI/UserProfile/TeamMemberList'
export default {
  name: 'UserProfileContainer',
  components: {
    ResumeClient,
    EditProfile,
    TeamMemberList
  },
  data: () => ({

  })
}
</script>
<style scoped>
</style>
