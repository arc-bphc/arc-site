---
title: Day 3 - Line Follower Robot
tags: ['TeXt']
mode: normal
type: article
sharing: true
author: Automation and Robotics Club
show_author_profile: true
show_title: true
full_width: false
header: true
aside:
  toc: true
sidebar:
  nav: workshop-bar
orderInSidebar: 5
---

<TOCInline toc={props.toc} toHeading={3} asDisclosure />

# Introduction

In this section, you will be learning how to

- Assemble the chassis that is included in your kit
- Make all necessary connections with the relevant electronic components
- Program your bot!

# Assembling the chassis

## Quantity

The following is a list of all things necessary to build the chassis for the line follower robot. All the below listed items are included in the kit.

| Sl No. |      Name       | Quantity |
| :----: | :-------------: | :------: |
|   1    |  Chassis Base   |    1     |
|   2    |     Wheels      |    2     |
|   3    |  Caster Wheel   |    1     |
|   4    |    BO Motors    |    2     |
|   5    |  Encoded disks  |    2     |
|   6    |  Acrylic Tabs   |    4     |
|   7    |     Switch      |    1     |
|   8    | Battery holder  |    1     |
|   9    |     Screws      |    14    |
|   10   |      Nuts       |    6     |
|   11   |     Spacers     |    4     |
|   12   | Screwdriver kit |    1     |

## Video

<EmbedItem url='https://www.youtube.com/embed/R-Nf5t-5Lqs' />

# Wiring and Connections

## Components

The following components will be used to build the Line-follower robot.

1.  Chassis
2.  Arduino Uno
3.  IR Sensors
4.  BO Motors
5.  L293D Motor Driver
6.  Breadboard
7.  4 AA Batteries

In the previous section, you have seen how to assemble the chassis. We shall now move on to take a look at all the connections for the electronic components used in making the bot.

**NOTE** \- It would be a good idea to follow the same connections as explained below in the pictures to avoid confusion, and to make troubleshooting easier :)

## Circuit connections for IR Sensor

As discussed previously, the IR sensor has 3 pins which need to be connected to the Arduino Uno as follows:

- VCC - Connected to 5V pin on Uno
- GND - Connected to GND pin on Uno
- OUT - Connected to any digital pin on Uno

In the demonstration, we shall be connecting

- The OUT pin of right IR sensor to digital pin 5 of the Arduino board.
- The OUT pin of left IR sensor to digital pin 6 of the Arduino board.

Take a look at the below image.

<Image src="/static/images/resources/Day3_Session2/IR_circuit.png" alt="IR" width='500' height='500' />

### Explanation

Right IR Sensor:

1.  VCC pin connected to breadboard using Red jumper wire
2.  GND pin connected to breadboard using Black jumper wire
3.  OUT pin connected to digital pin 5 of Arduino Uno using Blue jumper wire

Left IR Sensor:

1.  VCC pin connected to breadboard using Orange jumper wire
2.  GND pin connected to breadboard using Brown jumper wire
3.  OUT pin connected to digital pin 6 of Arduino Uno using Magenta jumper wire

Common connections:

1.  5V pin on Arduino Uno is connected to breadboard using Red jumper wire (see left half of the breadboard)
2.  GND pin on Arduino Uno is connected to breadboard using Black jumper wire (see right half of the breadboard)

### Connections on the chassis

- The two IR Sensors can be mounted on the chassis by screwing them on the lower side of the base such that the two LEDs face vertically downwards (you can bend the LEDs gently to achieve this).
- The wires can be brought to the top by pushing them through the holes.
- The same connections, as above, can then be made.

It should look something like this.

<Image src="/static/images/resources/Day3_Session2/IR_chassis.png" alt="IR" width='500' height='500' />

### Calibrating the IR sensor

<EmbedItem url='https://www.youtube.com/embed/edGiIn5iiJk' />

## Circuit connections for L293D

The Motor Driver included in the kit is a mini shield, with the following pinout

**Case 1:** If the L293d model is as follows:
<Image src="/static/images/resources/Day3_Session2/case1.png" alt="case1" width='500' height='500' />

In the demonstration, we shall be connecting

- **Right Motor:** For the Right Motor, connect its top terminal to the MA2 of the motor driver and its bottom terminal to the MA1.
- **Left Motor:** For the Left Motor, connect the top terminal to the MB2 of the motor driver and the bottom terminal to the MB1.
- **Power Connections:** Connect the 9V power supply to the V+ and V- on motor driver.
- **Input Pins of Right Motor:**
  - connect the A1 and A2 pins to pins 2 and 3 on Arduino.
- **Enable Pins:** En A , En B go to 5V of Arduino.
- Connect Vcc and GND to 5V and GND on Arduino respectively.
- **Input Pins of Left Motor:**
  - B1 and B2 go to 4 and 5 pins on Arduino respectively.

**Case 2:** If the L293d model is as follows:
<Image src="/static/images/resources/Day3_Session2/case2.png" alt="IR" width='500' height='500' />

- **Right Motor:** For the Right Motor, connect its top terminal to the M1 of the motor driver and its bottom terminal to the M2.
- **Left Motor:** For the Left Motor, connect the top terminal to the M3 of the motor driver and the bottom terminal to the M4.
- **Power Connections:** Connect the positive terminal of 9V power supply to the 12V on motor driver. To the GND on the motor driver near the 12V, connect the negative terminal of the 9V battery. Also, connect the GND of the Arduino to the same GND on the motor driver, meaning, both the wires(black of battery and GND of Uno) to be connected to GND on motor driver.
- **Input Pins of Right Motor:**
  - connect the In1 and In2 pins to pins 3 and 2 on Arduino.
- **Enable Pins:** En A , En B go to 5V of Arduino.
- Connect 5V pin to 5V on Arduino respectively.
- **Input Pins of Left Motor:**
  - In3 and In4 go to 5 and 4 pins on Arduino respectively.

**Case 3:** If the L293d model is as follows:
<Image src="/static/images/resources/Day3_Session2/case3.png" alt="case3" width='500' height='500' />

- **Right Motor:** For the Right Motor, connect its top terminal to the MOTOR2 hole of the motor driver that is away from the voltage regulator IC and its bottom terminal to the MOTOR2 hole towards the voltage regulator IC.
- **Left Motor:** For the Left Motor, connect the top terminal to the MOTOR1 hole of the motor driver that is towards the voltage regulator IC and its bottom terminal to the MOTOR1 hole away from the voltage regulator IC.
- **Power Connections:** Connect the 9V power supply to the Vin+ on motor driver. Now connect both the negative terminal of the 9V battery and GND of the Arduino to the Vin- hole in the motor driver.
- **Input Pins of Right Motor:**
  - connect the MC6 pin that is away from the voltage regulator IC to pin 3 on Arduino and MC6 pin that is towards the voltage regulator IC to pin 2 on Arduino.
- **Input Pins of Left Motor:**
  - connect the MC5 pin that is away from the voltage regulator IC to pin 4 on Arduino and MC5 pin that is towards the voltage regulator IC to pin 5 on Arduino.

**NOTE** - The connections between the two IR sensors, ultrasonic sensor, the Arduino Uno and the breadboard have been removed to avoid confusion. You may keep the connections shown previously as it is.

The finished bot looks something like this:
_Top view_
<Image src="/static/images/resources/Day3_Session2/TopViewBot.png" alt="top-view" width='500' height='500' />

_Front view_
<Image src="/static/images/resources/Day3_Session2/FrontViewBot.JPG" alt="front-view" width='500' height='500' />

_Right view_
<Image src="/static/images/resources/Day3_Session2/RightViewBot.png" alt="right-view" width='500' height='500' />

_Left view_
<Image src="/static/images/resources/Day3_Session2/LeftViewBot.png" alt="left-view" width='500' height='500' />

## Schematics

### TYPE-1

<Image src="/static/images/resources/Day3_Session2/motordriver_type1.png" alt="IR" width='500' height='500' />

### TYPE-2

<Image src="/static/images/resources/Day3_Session2/motordriver_type2.png" alt="IR" width='500' height='500' />

### TYPE-3

<Image src="/static/images/resources/Day3_Session2/motordriver_type3.png" alt="IR" width='500' height='500' />


### Explanation

Right motor:

1.  The bottom pin of the motor is connected to M1 pin on the L293D motor driver using a Red wire.
2.  The upper pin of the motor is connected to M2 pin on the L293D motor driver using a Black wire.

Left motor:

1.  The bottom pin of the motor is connected to M3 pin on the L293D motor driver using a Red wire.
2.  The upper pin of the motor is connected to M4 pin on the L293D motor driver using a Black wire.

Power connections:

1.  The 12V and GND pins on the L293D motor driver are connected to a power supply through a switch using Blue wires.
2.  The 5V pin on the L293D is connected to the 5V pin on the Arduino Uno through the breadboard using Red jumper wire.
3.  The GND pin on the L293D is connected to the GND pin on the Arduino Uno through the breadboard using Black jumper wire.

Input pins:

1.  Input pins MTR(IN1) and IN1 on the L293D motor driver is connected to digital pins 5 and 6 on the Arduino Uno using Green jumper wires.
2.  Input pins MTR(IN2) and IN2 on the L293D motor driver are connected to digital pins 10 and 11 on the Arduino Uno using Yellow jumper wires.

**NOTE** \- The connections between the two IR sensors, the Arduino Uno and the breadboard have been removed to avoid confusion. You may keep the connections shown previously as it is.

## Schematics

Here is an image of the entire schematic, showing all the necessary connections between the electronic components involved in making the bot.

<Image src="/static/images/resources/Day3_Session2/Final.png" alt="Schematic" width='500' height='500' />

The finished bot should look something like this!

_Front view_

<Image src="/static/images/resources/Day3_Session2/Front.JPG" alt="Front" width='500' height='500' />

_Top View_

<Image src="/static/images/resources/Day3_Session2/Top.JPG" alt="Top" width='500' height='500' />

_Right View_

<Image src="/static/images/resources/Day3_Session2/Right.JPG" alt="Right" width='500' height='500' />

_Left View_

<Image src="/static/images/resources/Day3_Session2/Left.JPG" alt="Left" width='500' height='500' />

# Logic

The Line follower, as the name suggests, is a robot that can detect and follow a line drawn on the ground, which is usually a predefined path and is visible as a high contrast black line. The working of the line follower is pretty simple and can be easily understood.

- The two IR Sensors used in the bot, essentially act as "eyes" that help the robot sense the black line.
- The left IR sensor or "the left eye" and the right IR sensor or "the right eye" send _digital signals_ to the Arduino.
- The bot is steered based on these signals coming from the two eyes which drives the two BO motors mounted in fixed positions on the left and right side of the robot chassis using a motor driver.

<Image src="/static/images/resources/Day3_Session2/connection.png" alt="Logic" width='500' height='500' />

## Steering

- When both the eyes sense white, the robot moves forward. See fig.(a)
- If the left eye senses a black line, then the robot is turned to the left until both eyes point at the white surface. See fig.(b)
- If the right eye senses a black line, then the robot is turned to the right until both eyes point at the white surface. See fig.(c)
- The robot stops if both eyes sense a black line. See fig.(d)

<Image src="/static/images/resources/Day3_Session2/steering.png" alt="Steering" width='500' height='500' />

### How to make the robot turn?

The robot is arched to the left or to the right whenever the eyes sense a black line by varying the rotation speeds of the motors.

- By slowing the rotation speed of the right motor or by stopping it without changing the speed of the left motor, the robot can be turned to the right.
- By slowing the rotation speed of the left motor or by stopping it without changing the speed of the right motor, the robot can be turned to the left.
- The robot will move in a straight line of both motors rotate at the same speed.

<Image src="/static/images/resources/Day3_Session2/turning.png" alt="Turning" width='500' height='500' />

# Program your Bot

Before we show you the code, we'd encourage you to program the bot yourself. The code is pretty simple and all the necessary concepts have been taught to you in the previous sessions.

## Suggestions:

- It’s just a matter of writing the correct if statements, since you now know the logic behind how your Line-follower should work.
- Know that you have complete control of the Arduino Uno board.
- Test your code without the wheels attached. Otherwise, it is disappointing to see your bot run away from you while you’re working on it.

Nevertheless, here's the code!

```c++
int motorRight = 9; // Right motor connected to PWM pin 9
int motorLeft = 10; // Left motor connected to PWM pin 10

int rightEye = 5; // Right IR sensor connected to digital pin 5
int leftEye = 6; // Left IR sensor connected to digital pin 6

int left = 0; // Initialize variable 'left'
int right = 0; // Initialize variable 'right'

void setup()
{
  pinMode(motorRight,OUTPUT); // setting the PWM pin 9 as output
  pinMode(motorLeft,OUTPUT); // setting the PWM pin 10 as output

  pinMode(rightEye,INPUT); // setting the digital pin 5 as input
	pinMode(leftEye,INPUT); // setting the digital pin 6 as input

  digitalWrite(rightEye,LOW); // sets the right IR sensor to low (or 0)
	digitalWrite(leftEye,LOW); // sets the left IR sensor to low (or 0)
}

void loop()
{
  analogWrite(motorRight,255); // sets right motor to analog value 255 (max rpm)
  analogWrite(motorLeft,255); // sets left motor to analog value 255 (max rpm)

  right = digitalRead(rightEye); // reads value from right IR sensor and assigns it to the variable 'right'
	left = digitalRead(leftEye); // reads value from left IR sensor and assigns it to the variable 'left'


  if(right==1 && left==0) // When right PIR sensor detects the black line, right motor is stopped while left motor continues to rotate.
      // This produces a turning effect and the bot turns to the right.
  {
    analogWrite(motorRight,0); // right motor set to 0 (min rpm)
    analogWrite(motorLeft,255); // left motor set to 255 (max rpm)
  }


	if(left==1 && right==0)  // When left PIR sensor detects the black line, left motor is stopped while right motor continues to rotate.
      // This produces a turning effect and the bot turns to the left.
  {
      analogWrite(motorLeft,0); // left motor set to 0 (min rpm)
      analogWrite(motorRight,255); // right motor set to 255 (max rpm)
  }


  if(left==1 && right==1) // When both PIR sensors detect the black line, both motors are stopped due to which the bot comes to rest.
  {
    analogWrite(motorRight,0); // right motor set to 0 (min rpm)
    analogWrite(motorLeft,0); // left motor set to 0 (min rpm)
  }

}

```

**NOTE** - The below code is written with reference to the frame of the bot. This means that 'left PIR sensor' refers to the sensor that is to the left of the bot when both IR sensors are facing away from you, and vice-versa.
So BLACK = 1 and WHITE = 0.

Now upload the code, draw a circle using black insulation tape, power up the bot and get it running!

Did it work?

- If yes, then GG!
- If not, then review your code and check for any loose connections.
  Where there is a line, there is a way! So hope for it to work the next time :)
