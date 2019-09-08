<template>
    <div class="diary">
        <img src="../../static/img/logo1.png" alt="">
        <div class="diaryTit">
            <h3>豆瓣<span>写了日记</span></h3>
            <p>{{data}}</p>
            <div class="diaryCon">
                <h4>豆瓣App 4.12.0 主要更新</h4>
                <p>可以写读书笔记了，同时支持编辑。随时随地，摘录怦然心动的段落，写下阅读时的随感。来写笔记吧，你...</p>
            </div>
            <div class="com">
                <div class="like">
                    <p><i class="el-icon-star-off"></i>&nbsp;&nbsp;5</p>
                    <p><i class="el-icon-chat-dot-round"></i>&nbsp;&nbsp;0</p>
                    <p><i class="el-icon-position"></i>&nbsp;&nbsp;3</p>
             
                </div>
                <div class="more">
                    <i class="el-icon-more"></i>
                </div>
            </div>
            
        </div>
    </div>
</template>
<script>
export default {
    computed: {
        data(){
            return new Date().toLocaleString()
        }
    },
}
</script>
<style scoped>
.diary{
    width: 100%;
    font-size: .14rem;
    display: flex;
    margin-top: 0.2rem;
    border-bottom: .01rem solid #d8d8d8;
}
.diary>img{
    width: .4rem;
    height: .4rem;
    margin-right: .1rem;
    border-radius: 50%;
}
.diaryTit>h3>span{
    color: #aaa;
    font-weight: 400;
}
.diaryTit>p{

    margin-top: .06rem;
    color: #aaa;  
}
 .diaryCon{
     margin-top: 0.1rem;
     margin-bottom: 0.2rem;
     padding: 0.15rem;
    border-radius: .02rem;
    border: .01rem solid #d8d8d8;
 }  

.diaryCon>h4{
    font-size: .18rem;
    font-weight: 500;
    color: #494949;
    margin-bottom: .05rem;
    overflow: hidden;  
}
.diaryCon>p{
    color: #aaa;
    font-size: .12rem;
  }  
  .com{
      width: 100%;
      display: flex;
      margin-bottom: 0.2rem;
  }
  .like{
      width: 40%;
      display: flex;
      color: #ccc; 
      justify-content: space-between;

  } 
  .more{
      width: 60%;
      display: flex;
      justify-content: flex-end;
       color: #ccc; 

  }   
</style>