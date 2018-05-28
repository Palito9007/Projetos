<template>
   <body>
       <br>

    
   </body>
</template>

<script>
//O navbar / menu esta nos layouts
export default {
  layout: 'sidenav'
}
</script>

<style scoped>
body{
    text-align:center;
}
ul {
    list-style-type: none;
    margin: 0;
    padding: 0;
    overflow: hidden;
    background-color: #333;
}

li {
    float: left;
}

li a {
    display: block;
    color: white;
    text-align: center;
    padding: 14px 16px;
    text-decoration: none;
}

li a:hover {
    background-color: #111;
}
</style>
