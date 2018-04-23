<template>
  <div id="resumeClient">
    <div class="imageBackground">
      <img src="static/img/backgroundProfile.jpg" alt="backgroundImg" />
    </div>
    <div class="content">
      <div class="resumeContent">
        <div class="profile">
          <img src="static/img/face.jpg" alt="photo" />
          <h4>{{ name }}</h4>
          <a href="#">{{ hashtag }}</a>
          <p>
            <!-- "I like the way you work<br>it No diggity</br>I wanna bag it up" -->
            {{ description }}
          </p>
        </div>
        <hr>
        <div class="footerProfile">
          <b-row>
            <b-col lg="4" sm="12">
              <h5>{{ files }}</h5>
              <span>Files</span>
            </b-col lg="4" sm="12">
            <b-col>
              <h5>{{ gb }}GB</h5>
              <span>Used</span>
            </b-col lg="4" sm="12">
            <b-col>
              <h5>{{ spent }}$</h5>
              <span>Spent</span>
            </b-col>
          </b-row>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import axios from 'Axios'
export default {
  name: 'resumeClient',
  data () {
    return {
      name: '',
      hashtag: '',
      description: '',
      files: '',
      gb: '',
      spent: ''
    }
  },
  mounted () {
    axios.get('http://localhost:3000/resumeClient')
      .then(reponse => {
        this.name = reponse.data.client.resumeClient.name
        this.hashtag = reponse.data.client.resumeClient.hashtag
        this.description = reponse.data.client.resumeClient.description
        console.log(reponse.data.client.informationClient)
        this.files = reponse.data.client.informationClient.files
        this.gb = reponse.data.client.informationClient.gb
        this.spent = reponse.data.client.informationClient.spent
      })
      .catch(error => {
        console.error(error)
      })
  }
}
</script>
<style scoped>
#resumeClient{
  text-align:center;
  background:white;
  margin-bottom:20px;
  border-radius:6px;
  box-shadow:0 2px 2px rgba(204, 197, 185, 0.5);
  overflow:hidden;
}
#resumeClient hr{
  margin-top:5px;
  margin-bottom:5px;
}
#resumeClient .imageBackground{
  height:150px;
  overflow:hidden;
  width:100%;
}
#resumeClient .imageBackground img{
  width: 100%;
}
#resumeClient .resumeContent .profile{
  font-size:16px;
  color:#66615b;
  margin-top:-50px;
  padding: 15px 15px 10px 15px;
}
#resumeClient .resumeContent .profile img{
  width: 100px;
  height : 100px;
  border-radius : 50%;
  border : 5px solid white;
  margin-bottom:15px;
  position:relative;
}
#resumeClient .resumeContent .profile h4{
  font-weight : 600px;
  margin:0;
}
#resumeClient .resumeContent .profile a{
  display:block;
  font-size:12px;
  text-decoration: none;
  color: #ccc5b9;
}
#resumeClient .resumeContent .profile p{
  margin-top:10px;
  margin-bottom: 10px;
}
/*FOOTER*/
#resumeClient .footerProfile{
  padding-top:10px;
  padding-bottom:10px;
}
#resumeClient .footerProfile h5{
  color:rgb(37,36,34);
  font-weight:400;
  margin:0;
  font-size:18px;
}
#resumeClient .footerProfile span{
  font-size:13px;
  font-weight:300;
  color:#9A9A9A;
}
/*END FOOTER*/
</style>
