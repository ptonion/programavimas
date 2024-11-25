let body = document.querySelector('body') 
let header = document.createElement('header')

let div1 = document.createElement('div')
let div2 = document.createElement('div')
let div3 = document.createElement('div')
let div4 = document.createElement('div')
let div5 = document.createElement('div')
let div6 = document.createElement('div')
let div7 = document.createElement('div')
let div8 = document.createElement('div')
let div9 = document.createElement('div')
let div10 = document.createElement('div')
let div11 = document.createElement('div')
let div12 = document.createElement('div')
let div13 = document.createElement('div')
let div14 = document.createElement('div')
let div15 = document.createElement('div')
let div16 = document.createElement('div')

let img1 = document.createElement('img')
let img2 = document.createElement('img')
let img3 = document.createElement('img')

let p1 = document.createElement('p')
let p2 = document.createElement('p')
let p3 = document.createElement('p')
let p4 = document.createElement('p')
let p5 = document.createElement('p')
let p6 = document.createElement('p')


let button1 = document.createElement('button')
let button2 = document.createElement('button')

let h1 = document.createElement('h1')

let h2 = document.createElement('h2')
let h2_2 = document.createElement('h2')
let h2_3 = document.createElement('h2')
let h2_4 = document.createElement('h2')
let h2_5 = document.createElement('h2')

let h3 = document.createElement('h3')
img1["src"] = "logo.svg";
img2["src"] = "image-computer.png";
img3["src"] = "image-devices.png";

body.prepend(header)
header.prepend(div1)
div1.classList.add('container-small')
div1.append(div2)
div2.classList.add('hero')
div2.prepend(img1)
img1.classList.add('logo')
img1.after(div3)
div3.prepend(h1)
h1.textContent = 'A history of everything you copy'
h1.after(p1)
p1.textContent = 'Clipboard allows you to track and organize everything you copy. Instantly access your clipboard on all your devices.'
div3.after(div4)
div4.classList.add('buttonsBox')
div4.prepend(button1)
button1.textContent = 'Download for iOS'
button1.after(button2)
button2.textContent = 'Download for Macs'

header.after(div5)
div5.classList.add('container-small')
div5.prepend(div6)
div6.classList.add('track-wrapper')
div6.classList.add('text-center')
div6.prepend(h2)
h2.textContent = 'Keep track of your snippets'
div6.append(p2)
p2.textContent = 'Clipboard instantly stores any item you copy in the cloud, meaning you can access your snippets immediately on all your devices. Our Mac and iOS apps will help you organize everything.'
div5.after(div7)
div7.classList.add('middle')
div7.prepend(div8)
div8.classList.add('computer')
div8.prepend(img2)
div8.after(div9)
div9.classList.add('middle-text')
div9.prepend(div10)
div10.classList.add('middle-text-wrapper')
div10.prepend(h2_2)
h2_2.textContent = 'Quick Search'
h2_2.after(p3)
p3.classList.add('text-left')
p3.textContent = 'Easily search your snippets by content, category, web address, application, and more.'
div10.after(div11)
div11.classList.add('middle-text-wrapper')
div11.prepend(h2_3)
h2_3.textContent = 'iCloud Sync'
h2_3.after(p4)
p4.classList.add('text-left')
p4.textContent = 'Instantly saves and syncs snippets across all your devices.'
div11.after(div12)
div12.classList.add('middle-text-wrapper')
div12.prepend(h2_4)
h2_4.textContent = 'Complete History'
h2_4.after(p5)
p5.classList.add('text-left')
p5.textContent = 'Retrieve any snippets from the first moment you started using the app.'
div7.after(div13)
div13.classList.add('container-small')
div13.prepend(div14)
div14.classList.add('track-wrapper')
div14.classList.add('text-center')
div14.prepend(h2_5)
h2_5.textContent = 'Access Clipboard anywhere'
h2_5.after(p6)
p6.textContent = 'Whether you’re on the go, or at your computer, you can access all your Clipboard snippets in a few simple clicks.'
div14.after(div15)
div15.classList.add('devices')
div15.prepend(img3)
img3.classList.add('devices-img')

