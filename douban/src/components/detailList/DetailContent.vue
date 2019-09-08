<template>
    <div>
        <h3>活动详情</h3>
        <!-- <p>展览“奇妙的不确定性”旨在强调当代艺术中某些特定叙事的重要性：它们聚焦于具有隐晦、不确定性和不可能性的现象，并立足于人类学方面的考量，对这些现象的独特社会文化语境及其在具体情境中的意义进行剖析。充斥着黑暗、混乱和恐惧的领域是构成人类现实的一部分，而艺术家的角色便是将其中所隐匿的叙事和经验揭示出来。艺术家通过自己的激烈想象，描绘出令人不安和引发动荡的不可能性，以折射并阐明有关人类存在的复杂经验和特征。</p> -->
        <div v-html="content"></div>
    </div>
</template>
<script>
export default {
    props:{
        content:{
            type:String
        }
    }
}
</script>
<style scoped>
h3{
    color: #072;
    margin: 0.2rem 0;
}
</style>