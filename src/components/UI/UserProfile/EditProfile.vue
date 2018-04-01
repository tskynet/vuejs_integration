<template>
  <div id="editProfile">
    <header>
      <h4>Edit Profile</h4>
    </header>
    <div class="formProfile">
      <b-form>
        <b-row>
          <b-col md="5">
            <b-form-group id="compagnyEdit" label="Compagny">
              <b-form-input id="compagnyInput" type="text" v-model="form.compagny" required disabled="disabled"></b-form-input>
            </b-form-group>
          </b-col>
          <b-col md="3">
            <b-form-group id="userNameEdit" label="Username">
              <b-form-input id="userNameInput" type="text" v-model="form.username" required placeholder="Username"></b-form-input>
            </b-form-group>
          </b-col>
          <b-col md="4">
            <b-form-group id="emailEdit" label="Email">
              <b-form-input id="emailInput" type="text" v-model="form.email" required placeholder="Email"></b-form-input>
            </b-form-group>
          </b-col>
        </b-row>
        <b-row>
          <b-col md="6">
            <b-form-group id="firstNameEdit" label="First Name">
              <b-form-input id="firstNameInput" type="text" v-model="form.firstname" required placeholder="First Name"></b-form-input>
            </b-form-group>
          </b-col>
          <b-col md="6">
            <b-form-group id="lastNameEdit" label="Last Name">
              <b-form-input id="lastNameInput" type="text"  v-model="form.lastname" required placeholder="Last Name"></b-form-input>
            </b-form-group>
          </b-col>
        </b-row>
        <b-row>
          <b-col>
            <b-form-group id="adressEdit" label="Address">
              <b-form-input id="adressInput" type="text" v-model="form.address" required placeholder="Address"></b-form-input>
            </b-form-group>
          </b-col>
        </b-row>
        <b-row>
          <b-col md="4">
            <b-form-group id="cityEdit" label="City">
              <b-form-input id="cityInput" type="text" v-model="form.city" required placeholder="City"></b-form-input>
            </b-form-group>
          </b-col>
          <b-col md="4">
            <b-form-group id="countryEdit" label="Country">
              <b-form-input id="countryInput" type="text" v-model="form.country" required placeholder="Country"></b-form-input>
            </b-form-group>
          </b-col>
          <b-col md="4">
            <b-form-group id="postalEdit" label="Postal Code">
              <b-form-input id="postalInput" type="number" v-model="form.postal" required placeholder="Postal Code"></b-form-input>
            </b-form-group>
          </b-col>
        </b-row>
        <b-row>
          <b-col>
            <b-form-group id="aboutEdit" label="About Me">
              <b-form-textarea id="aboutArea" v-model="form.aboutme" placeholder="" :rows="5" :max-rows="5" :no-resize="true"></b-form-textarea>
            </b-form-group>
          </b-col>
        </b-row>
        <b-row>
          <b-col>
            <div class="text-center">
              <b-button>Update Profile</b-button>
            </div>
          </b-col>
        </b-row>
      </b-form>
    </div>
  </div>
</template>
<script>
export default {
  name: 'EditProfile',
  data: () => ({
    form: {
      compagny: 'Compagny',
      username: 'pseudo123',
      email: '',
      firstname: '',
      lastname: '',
      address: 'New York, United States of America',
      city: 'New York',
      country: '',
      postal: ''
    },
    methods: {
      onSubmit (event) {
        event.preventDefault()
        console.log(JSON.stringify(this.form))
      }
    }
  })
}
</script>
<style scoped>
#editProfile{
  background:white;
  padding:15px 15px 10px 15px;
  border-radius: 6px;
  box-shadow: 0 2px 2px rgba(204, 197, 185, 0.5);
}
</style>
