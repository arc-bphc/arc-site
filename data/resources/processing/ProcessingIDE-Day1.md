---
title: Day 1
tags: ['Processing']
mode: normal
type: article
sharing: true
author: Automation and Robotics Club
show_author_profile: true
show_title: true
full_width: false
orderInSidebar: 1
---

# What is Processing IDE

Processing is a flexible software sketchbook and a language for learning how to code within the context of the visual arts.

## Getting Started

Basic coding structure of Processing IDE is divided into 2 parts :- void setup() and void draw().

![3b65e638dbbdda79fea575bf08781ff7.png](/static/assets/images/processingResources/3b65e638dbbdda79fea575bf08781ff7.png)

`void setup()` - This part of code will be executed only once.
`void loop()` - This part of code will be executed continously infinite times.

## size()

To spawn a window, we need to give a command for it, which specify its width and height.
Syntax - `size(width, height, renderer);`

Let's try using size(640,320) in `void setup()`
![23f7f58b9a5f62b00771f6156b9dc3ad.png](/static/assets/images/processingResources/23f7f58b9a5f62b00771f6156b9dc3ad.png)

![bc838b28ed453df521c016ecd9f62b30.png](/static/assets/images/processingResources/bc838b28ed453df521c016ecd9f62b30.png)

As you can see, it summoned a blank window with width 640 and height 320.
In `renderer` part, you can specify which redering engine to use. For example, if you input 'P2D', it means 2D graphics renderer that makes use of OpenGL-compatible graphics hardware. P3D is for 3D graphics and there are many more. If you didn't specify the type of renderer, it will pick up default renderer.
If you want to summon the window in full screen mode, you can enter your computer resolution in size() function, or, you can use `fullScreen()` which only takes renderer as input (it will be fine if you don't specify any)

## background()

Now, to set a background, we will call `background()` command
Syntax - background(Red,Green,Blue), background(grayvalue), background(img)

Let's try running this command in void setup() -

![58397811db48987202cdc234de522608.png](/static/assets/images/processingResources/58397811db48987202cdc234de522608.png)
![1f341701a79fd7adfd863ea8967f0c63.png](/static/assets/images/processingResources/1f341701a79fd7adfd863ea8967f0c63.png)

Now, let's try using gray value,

![06239f37909dee4cedf93871612cb736.png](/static/assets/images/processingResources/06239f37909dee4cedf93871612cb736.png)
![3c342346c46872cffe8d53e2f7ccbfb5.png](/static/assets/images/processingResources/3c342346c46872cffe8d53e2f7ccbfb5.png)

We can even set an image in background, but for that, first we need to define a variable for image using 'PImage', which we will look into that later

## Drawing Shapes

Let's start with drawing lines
For drawing a shape, you must know how coordinate system works in windows. The top left corner in the window is considered to be origin. Top edge is considered as X-axis, left edge is considered as Y-axis (Going downwards will result in increase in 'y' coordinate, going right will result in increase in 'x' coordinate)

The syntax for line command is - line(x1,y1,x2,y2),
where (x1,y1) is coordinate of first end point of the line and (x2,y2) is coordinate of second end point of the line

Let's execute it in Processing IDE
![1de8f10996f58faf354e8a765ffdf13c.png](/static/assets/images/processingResources/1de8f10996f58faf354e8a765ffdf13c.png)
![8f71e7339de72131ff024fe77e2cd969.png](/static/assets/images/processingResources/8f71e7339de72131ff024fe77e2cd969.png)

As you can see, a black line is drawn. But what if we want to draw different colors, width of lines?
So for changing colors, we use a command before line command, that is, stroke()

Syntax - stroke(R,G,B), stroke(gray)

So, before giving any shape command, to specify it's outline color, we need to use stroke command before it.

For example :-
![29c0889373e5707796ad26a90c5e4e78.png](/static/assets/images/processingResources/29c0889373e5707796ad26a90c5e4e78.png)
![b739839830ad467fff5f5e44b6672bdd.png](/static/assets/images/processingResources/b739839830ad467fff5f5e44b6672bdd.png)

For changing it's width, we will be using strokeWeight(), similar to stroke() command,

![01f5021316e43207e7a299b5033b03ff.png](/static/assets/images/processingResources/01f5021316e43207e7a299b5033b03ff.png)
![144a760a8f6fb8369d7a750c4ad9082f.png](/static/assets/images/processingResources/144a760a8f6fb8369d7a750c4ad9082f.png)

As you can see, it got super thicc :)

Now, let's move on to different shape. Let's try Rectangle now

### Rectangle -

Syntax - rect(x,y,w,h), rect(x,y,w,h,r), rect(x,y,w,h,tl,tr,br,bl)
where,
(x,y) is coordinate of reference point of rectangle (The location of reference point depends on rectMode(), which will be covered later. For default, it is it's top-left corner's coordinate)
w - Width of rectangle
h - Height of rectangle
r - Radii of all corner
tl - radius for top-left corner
tr - radius for top-right corner
br - radius for bottom-right corner
bl - radius for bottom-left corner

Let's execute!!!!!!!!!!!!!!!!
![3c74c3cf07565b8f01d6f6031c7f863c.png](/static/assets/images/processingResources/3c74c3cf07565b8f01d6f6031c7f863c.png)
![78f5339a42bc8a810e29fbb8c0fcdc15.png](/static/assets/images/processingResources/78f5339a42bc8a810e29fbb8c0fcdc15.png)

Let's try changing stroke size and color

![dd0aaf332356b0b0393b630745f87201.png](/static/assets/images/processingResources/dd0aaf332356b0b0393b630745f87201.png)
![3bcbd766b7c8fd94da36cc42ef26acae.png](/static/assets/images/processingResources/3bcbd766b7c8fd94da36cc42ef26acae.png)

As you can see, the thickness got increased, and outline changed to purple (cz we set stroke to purple)

What if?
What if I want to change the white color present inside the rectangle.
For that, we will use `fill()`

Syntax - fill(R,G,B), fill(gray)
It is similar to stroke command

Execution Time!!!

![fc593e08820a49ca5af21453f60fa180.png](/static/assets/images/processingResources/fc593e08820a49ca5af21453f60fa180.png)
![afed7648a0e5f1657daba705ba72bc1d.png](/static/assets/images/processingResources/afed7648a0e5f1657daba705ba72bc1d.png)

What if? (2)
What if we don't want to fill any color inside it (Like it automatically adopts background color?)

Yup, for that, we can use `noFill()`
Syntax - noFill()

![67e87bdfee985974c57eb25248d74a5e.png](/static/assets/images/processingResources/67e87bdfee985974c57eb25248d74a5e.png)
![173abcb9e733b2363020ab8bb016a5af.png](/static/assets/images/processingResources/173abcb9e733b2363020ab8bb016a5af.png)

What if? (3)
What if we don't want outline in similar way?

Similar to `noFill()`, there exist `noStroke()`

![5eae2865962ee332c4eea178112f6010.png](/static/assets/images/processingResources/5eae2865962ee332c4eea178112f6010.png)
![a0668d7ea6fd31a850b8f747eb50ec46.png](/static/assets/images/processingResources/a0668d7ea6fd31a850b8f747eb50ec46.png)

What if? (4)
What if we use both command at once :) ?

![13ebcb8065483561939fc1b85de253e3.png](/static/assets/images/processingResources/13ebcb8065483561939fc1b85de253e3.png)
![668ac9c1647a0b01de79c50543417367.png](/static/assets/images/processingResources/668ac9c1647a0b01de79c50543417367.png)

Now, if you remember correctly, I talked about `rectMode()`

This command takes type of mode as an input and decide the reference point poisition in the rectangle

The default mode is `rectMode(CORNER)`, which interprets the first two parameters of `rect()` as the upper-left corner of the shape, while the third and fourth parameters are its width and height.

`rectMode(CORNERS)` interprets the first two parameters of `rect()` as the location of one corner, and the third and fourth parameters as the location of the opposite corner.

`rectMode(CENTER)` interprets the first two parameters of `rect()` as the shape's center point, while the third and fourth parameters are its width and height.

`rectMode(RADIUS)` also uses the first two parameters of `rect()` as the shape's center point, but uses the third and fourth parameters to specify half of the shape's width and height.

## Ellipse

To make an ellipse, we use command `ellipse()`
Syntax - ellipse(x,y,c,d)
(x,y) is the reference point of the ellipse (Depends on ellipse mode, in default, it is at center)
c - Width of the ellipse by default
d - Height of the ellipse by default

Similar to the `rectMode()`, there is `ellipseMode()` for ellipse.

The default mode is `ellipseMode(CENTER)`, which interprets the first two parameters of `ellipse()` as the shape's center point, while the third and fourth parameters are its width and height.

`ellipseMode(RADIUS)` also uses the first two parameters of `ellipse()` as the shape's center point, but uses the third and fourth parameters to specify half of the shape's width and height.

`ellipseMode(CORNER)` interprets the first two parameters of `ellipse()` as the upper-left corner of the shape, while the third and fourth parameters are its width and height.

`ellipseMode(CORNERS)` interprets the first two parameters of `ellipse()` as the location of one corner of the ellipse's bounding box, and the third and fourth parameters as the location of the opposite corner.

Executing it,

![688edbdf667d3b30065e2a560eb67430.png](/static/assets/images/processingResources/688edbdf667d3b30065e2a560eb67430.png)
![2180428e9ecd53e78f4d762bee29688f.png](/static/assets/images/processingResources/2180428e9ecd53e78f4d762bee29688f.png)
![c2b2891cce3f407db294b85866104ac0.png](/static/assets/images/processingResources/c2b2891cce3f407db294b85866104ac0.png)
![0f84d4b3d90c778752d221f049661bc4.png](/static/assets/images/processingResources/0f84d4b3d90c778752d221f049661bc4.png)

### Arc (Automation and Robotics Club :p)

For making an arc, we can use `arc()`
Syntax - arc(x,y,c,d,start,stop,mode) or arc(x,y,c,d,start,stop)
(x,y) is coordinate of reference point of arc's ellipse (We can change the reference point of ellipse by using `ellipseMode()`)
c - width of the arc's ellipse by default
d - height of the arc's ellipse by default
start - angle to start the arc, specified in radians
stop - angle to stop the arc, specified in radians

Types of mode :- OPEN, CHORD, PIE

![255277cc8b34183d3a3a92d51e30a310.png](/static/assets/images/processingResources/255277cc8b34183d3a3a92d51e30a310.png)
![c4e04816f27c07eef896f58ddd6d9069.png](/static/assets/images/processingResources/c4e04816f27c07eef896f58ddd6d9069.png)
![88828de5e737a840e9ef0874578fb8de.png](/static/assets/images/processingResources/88828de5e737a840e9ef0874578fb8de.png)
![1860caf7346c07c592a7f536ad9ae94c.png](/static/assets/images/processingResources/1860caf7346c07c592a7f536ad9ae94c.png)

## Fun Fact

![7c617ff36c79b5dbbd67f8309d0b295f.png](/static/assets/images/processingResources/7c617ff36c79b5dbbd67f8309d0b295f.png)

Try to guess the result here, will the screen be green, red or mix?

The Answer -
![c7f988050fcb8c80efcadeccc277e667.png](/static/assets/images/processingResources/c7f988050fcb8c80efcadeccc277e667.png)

What if we switch places?
![136abb9a2df77518ec4287c2ed10bb2e.png](/static/assets/images/processingResources/136abb9a2df77518ec4287c2ed10bb2e.png)

That's right, the window's graphics only get updated when the code jumps from end of `void draw()` to start of it.

# Assignments

1. Rotating Line :- Show it in class
2. Rotating Rectangle :- Classwork
3. Pendulumn :- Homework
