---
headline: このBlogサイトのMarkdownで書かれた記事にCSSを作成してみる。
description: このブログは、Markdownをjsx記法に変換して作成しています。今現在書いているこちらもそうです。
             今回は、Markdown記法の記述について書留たいと思います。
img: /Imgs/320x180.webp
tag: Other
datePublished: "2024-03-06"
dateUpdated: "2024-03-06"
---
# H1
```css
h1 {
  font-size: 28px;
  font-weight: 700;
  line-height: 40px;
  position:relative;
  margin-bottom: 15px;
  
  &::after{
    content: "";
    display: block;
    width: 75%;
    height: 2px;
    background-color: #444;
    position: absolute;
    bottom: -5px;
  }
}
```
## H2
### H3
#### H4
##### H5
###### H6

konnnitiha
こんにちは

```html
<div>
    <h1>
        hoge
    </h1>
    <p>
        hogehoge
     </p>
</div>
```
`code`
