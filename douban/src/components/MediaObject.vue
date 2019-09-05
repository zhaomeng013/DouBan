<template>
    <div>
        <a class="thumbnail" id="con" v-for="(v,i) in data" :key="i" >
            <div class="media myMedia" >
                <div class="media-body">
                    <h4 class="media-heading">{{v.title|titFilter}}</h4>
                    <p>{{v.content|conFilter}}</p>
                </div>
                <div class="media-right media-middle" id="myImg">
                    <a href="#">
                        <img class="media-object" :src="v.image">
                    </a>
                </div>
            </div>
        
       
            <div class="author">{{v.category_name}}</div>

        </a>
        
        
    </div>
</template>
<script>
export default {
    filters:{
        titFilter(val){
            return val.substring(0,20)
        },
        conFilter(val){
            return val.substring(0,30)
        }
    },
    props:{
        data:{
            type:Array
        }
    }
}
</script>
<style scoped>
@import 'bootstrap/dist/css/bootstrap.min.css';

#con{
    width: 100%;
    border: none;
    border-radius: 0;
    border-bottom: .01rem solid #e3e3e3;
    padding: .25rem 0;
    margin: 0rem;
    text-decoration: none;
    
}

.myMedia h4{
    line-height: 1.41;
    text-align: justify;
    font-size: 0.18rem;
    color: #494949;
    margin-bottom: 0.1rem;
}
.myMedia p{
    font-size: .12rem;
    color: #aaa;
    line-height: 1.5;
    text-align: justify;
}

.myMedia a{
    display: inline-block;
    width: 0.86rem;
    height: 0.86rem;
}
#myImg{
    padding: 0;
    padding-left: 0.2rem;
    margin: 0;
}
#myImg img{
    width: 0.86rem;
    height: 0.86rem;
    margin-top: -0.15rem;

}
.author{
    clear: both;
    font-size: .12rem;
    color: #ccc;
    margin-top: -0.25rem;
}

</style>