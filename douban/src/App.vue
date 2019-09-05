<template>
  <div id="app">
    <!-- <topNav></topNav> -->
    <router-view/>
    <foot></foot>
  </div>
</template>

<script>
// import topNav from './components/topNav'
import foot from './components/Foot'


export default {
  name: 'App',
  components:{
    // topNav
    foot
  }
  //  directives:{
  //       focus:{
  //           update(el){
  //               el.focus()
  //           }
  //       }
  //   }
}

</script>

<style>
body,p,ul,ol,dl,dd,h1,h2,h3,h4,h5,h6,hr,input,td,select,textarea{
	margin:0;
	padding: 0;
}
a{
	text-decoration: none;
}
ul,ol{
	list-style: none;
}
img{
	border:none;
	display: block;
}
html{
	font-size: 26.67vw;
}
body{
	font-family: "微软雅黑";
  background-color: #fff;
	
}
/* #app{
  width: 100%;
  padding: 0 .18rem;
  box-sizing: border-box;

} */

/* 清除定位公共样式 */
.clear{
  width: 100%;
  margin-top: 0.48rem;
  padding:0 0.18rem;
  box-sizing: border-box;
}
</style>
