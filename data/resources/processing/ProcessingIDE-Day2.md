---
title: Day 2
tags: ['Processing']
mode: normal
type: article
sharing: true
author: Automation and Robotics Club
show_author_profile: true
show_title: true
full_width: false
orderInSidebar: 2
---

# Processing IDE

Welcome to Day 2 :)
Previously we learnt how to draw different shapes.
Now, as you know, GUI is not only about animations, it also takes inputs from user. So in this session, we will teach that how to read different types of inputs in different ways

## Mouse

For reading mouse coordinates, there are inbuilt variables which represents live cooridnates of mouse.
Syntax - mouseX, mouseY
mouseX represents X-coordinate of the mouse, similar mouseY represent Y-coordinate of mouse

Let's create a moving rectangle

![140e4bace8effa5bf55a8b2b1e265123.png](/static/assets/images/processingResources/140e4bace8effa5bf55a8b2b1e265123.png)

![ezgif-2-8e501ecaed.gif](/static/assets/images/processingResources/ezgif-2-8e501ecaed.gif)

As you can see, it is following me, but also creating a mess ;-;

For that, we could just add `background(51)` at the start

![7107b346171eaaf17dfa94aef3d85dc2.png](/static/assets/images/processingResources/7107b346171eaaf17dfa94aef3d85dc2.png)

[2022-04-12 21-01-03.mkv](/static/assets/images/processingResources/2022-04-12 21-01-03.mkv)

Let's paint something with mouse.
For that, we need to know new and previous coordinate of the mouse
We can time-by-time save previous coordinate of mouse. But to prevent all these complexities, processing IDE has inbuilt variables for that also

Syntax - pmouseX, pmouseY

These are the system variables that always contains the horizontal and vertical position of the mouse in the frame previous to the current frame.

Let's write a code for painter
![345c99d102f515374c59f09d6a7495b1.png](/static/assets/images/processingResources/345c99d102f515374c59f09d6a7495b1.png)
![ezgif-5-b0d40d961f.gif](/static/assets/images/processingResources/ezgif-5-b0d40d961f.gif)

But eh....it continously paints.
How do I make the code such that it draws only when I wish.

Let's discover some more functions related to mouse.

Variables :- mousePressed, mouseButton
mousePressed - Inbuilt system variable, which returns true when mouse is pressed, returns false if mouse is not pressed
mouseButton - When a mouse button is pressed, the value of the system variable mouseButton is set to either LEFT, RIGHT, or CENTER, depending on which button is pressed. When nothing is pressed, it returns to zero

Let's try some examples -
![fd587b293d366699c0ec04b164aefec4.png](/static/assets/images/processingResources/fd587b293d366699c0ec04b164aefec4.png)

![ezgif-5-c7f50ef9eb.gif](/static/assets/images/processingResources/ezgif-5-c7f50ef9eb.gif)

Functions -
`void mousePressed()` - Called once after every time a mouse button is pressed
`void mouseClicked()` - Called once after a mouse button has been pressed and then released
`void mouseDragged()` - Called once every time the mouse moves and a mouse button is pressed
`void mouseReleased()` - Called every time a mouse button is released
`void mouseMoved()` - Called every time the mouse moves and a mouse button is not pressed
`void mouseWheel()` - The code within the mouseWheel() event function is run when the mouse wheel is moved

Lemme show an example with `void mousePressed()`
![47d624ac4f7d6dbd14de60c5e32aba31.png](/static/assets/images/processingResources/47d624ac4f7d6dbd14de60c5e32aba31.png)
![ezgif-5-5fce717412.gif](/static/assets/images/processingResources/ezgif-5-5fce717412.gif)

Let's make a painter which only paints when we wish (i.e., when we press left key of mouse)

![270ffdee1f9a91fc3581f1398e92af21.png](/static/assets/images/processingResources/270ffdee1f9a91fc3581f1398e92af21.png)
![ezgif-5-741cd368b4.gif](/static/assets/images/processingResources/ezgif-5-741cd368b4.gif)

## Keyboard

Similar to mouse, processing IDE also reads keyboards input in similar way.

Variables :
key - The system variable that always contains the value of the most recent key on the keyboard that was used (either pressed or released)
keyCode - Used to detect special keys such as the UP, DOWN, LEFT, RIGHT arrow keys and ALT, CONTROL, SHIFT
keyPressed - The boolean system variable that is true if any key is pressed and false if no keys are pressed

Functions :
`void keyPressed()` - Called once every time a key is pressed
`void keyReleased()` - Called once every time a key is released
`void keyTyped()` - Called once every time a key is pressed, but action keys such as Ctrl, Shift, and Alt are ignored

Let's run some examples :-
![aea7a2320b054e9cce335bf44b1fec03.png](/static/assets/images/processingResources/aea7a2320b054e9cce335bf44b1fec03.png)
![ezgif-4-5e325060af.gif](/static/assets/images/processingResources/ezgif-4-5e325060af.gif)

Let's modify the previous paint code by adding a feature which will clear the windows if we pressed 'c'

![f73ad8f7016a0390c2b7d8bb16944574.png](/static/assets/images/processingResources/f73ad8f7016a0390c2b7d8bb16944574.png)
![ezgif-4-a6699b4662.gif](/static/assets/images/processingResources/ezgif-4-a6699b4662.gif)

## Drawing Text

If you want to draw a text, instead of going through a lot of shape functions to just make an alphabet, which will be very hectic, there is an inbuilt function just for this purpose.

Syntax - text(val,x,y)
val - It could be string, number or a character
x - X-coordinate of text
y - Y-coordinate of text

Let's perform an example

![0716a0d47d72301ca5127fe13632e595.png](/static/assets/images/processingResources/0716a0d47d72301ca5127fe13632e595.png)

![ezgif-3-f85faea4bf.gif](/static/assets/images/processingResources/ezgif-3-f85faea4bf.gif)

For increasing it's size, we could use `textSize()` function

![8c2290667d89cdf56650ae63208e0725.png](/static/assets/images/processingResources/8c2290667d89cdf56650ae63208e0725.png)
![ezgif-3-d197c7144e.gif](/static/assets/images/processingResources/ezgif-3-d197c7144e.gif)

You are all prepared for Day 3 capstone project :)
