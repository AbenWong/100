[TOC]



# 透明度opacity与rgba运用

## 理论

### opacity

opacity：x，css3中有opacity设定透明度，其数值在[0,1]范围内,当数值为0时即为全透明，而1为不透明，opacity适用于整个元素（包括其内容）。

### background

background：rgba（r,g,b,a）,r：红色值，g：绿色值，b：蓝色值，a：Alpha透明度，取[0,1]之间，正整数为十进制0~255任意值，而百分比亦之同理。

### 区别

opacity在设定上会适用于整个元素，也就是说它不仅仅对自己生效，还会影响其子元素的透明度（不管其子元素透明度多少都会以设定opacity为主）

background在设定上只对其本身起作用，不会被子元素所继承。原因在于，其通过alpha通道去操作元素，而非直接去影响dom

### 案例

展示	

<img src="C:\Users\12632\AppData\Roaming\Typora\typora-user-images\image-20210309180118115.png" alt="image-20210309180118115" style="zoom:80%;" />

代码：

```HTML
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <style>
        .box {
            width: 40%;
            height: 40%;
            position: absolute;
            margin: auto;
            top: 0;
            bottom: 0;
            left: 0;
            right: 0;
        }
        
        .content {
            position: relative;
        }
        
        .common {
            position: absolute;
            width: 60%;
            height: 60%;
            border-radius: 15px;
            background: #808080;
            color: white;
            height: 40%;
        }
    </style>
</head>

<body>
    <div class="box">
        <div class="content">
            <p>Internet has been playing an increasingly important role in our daily life. It has brought a lot of benefits but has created some serious problems as well. With the development of science and technology, there are more and more people believe
                that e-books will replace traditional books. Internet has been playing an increasingly important role in our daily life. It has brought a lot of benefits but has created some serious problems as well. With the development of science and
                technology, there are more and more people believe that e-books will replace traditional books. Internet has been playing an increasingly important role in our daily life. It has brought a lot of benefits but has created some serious problems
                as well. With the development of science and technology, there are more and more people believe that e-books will replace traditional books.
            </p>
            <!-- opacity -->
            <div class="box1 common " style="top:10%; left:20%;opacity: 0.8;">
                <div>opacity</div>
                <p>This box is opaque.That means you can see through it . Cool! </p>
            </div>
            <!-- background -->
            <div class="box2 common" style="top:60%; left:20%;background:rgba(0,0,0,0.5);">
                <p>RGBA</p>
                <p>This box has an alphs value of 0.8. That means you can see through it . Cool! </p>
            </div>
        </div>
    </div>
    </div>
</body>

</html>
```

### 写在后面

本文章思路来自MAD与CSDN，感谢以上站点与作者提供的知识分享，特此总结知识点与案例，文章可联系作者后转载。后续我会更新更多好玩有趣的案例与知识点，欢迎关注收藏点赞。山水有相逢，我们下期再会~~