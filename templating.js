document.addEventListener("DOMContentLoaded", function () {
   const navHTML=`
      <style>
         * {
            font-family: "Roboto Flex";
            margin: 0;
            padding: 0;
            box-sizing: border-box;
         }
         .nav {
            width: 200px;
            height: 100vh;
            background-color: #white;
            color: black;
            padding: 20px;
            position: fixed;
            right: 0;
            top: 0;
         }
         .nav ul {
            list-style: none;
         }
         .nav ul li {
            margin: 20px 0;
         }
         .nav ul li a {
            color: black;
            text-decoration: none;
            transition: color 0.3s ease, text-decoration 0.3s ease;
         }
         .nav ul li a:hover {
            color:rgb(17, 0, 255);
            text-decoration: underline;
         }
      </style>

      <nav class="nav">
         <strong>CMIS 311 ASSIGNMENT 5</strong>
         <hr>
         <ul>
            <li><a href="index.html">Home</a></li>
            <li><a href="ch1.html">Chapter 1</a></li>
            <li><a href="ch2.html">Chapter 2</a></li>
            <li><a href="ch3.html">Chapter 3</a></li>
            <li><a href="ch4.html">Chapter 4</a></li>
            <li><a href="ch5.html">Chapter 5</a></li>
            <li><a href="ch6.html">Chapter 6</a></li>
            <li><a href="ch7.html">Chapter 7</a></li>
            <li><a href="ch8.html">Chapter 8</a></li>
            <li><a href="ch9.html">Chapter 9</a></li>
         </ul>
      </nav>
   `;
   document.getElementById("nav-template").innerHTML = navHTML;
});
