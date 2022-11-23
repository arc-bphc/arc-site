---
title: Day 1 - Workshop
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
orderInSidebar: 3
---

<TOCInline toc={props.toc} toHeading={3} asDisclosure />

# Basic Components

This text will aim to give a basic introduction of the components that will be used in the workshop and to familiarise with their general uses.

<EmbedItem url='https://www.youtube.com/embed/qeSS72w7fvo' />

- **Breadboard**

  <Image src="/static/images/resources/Day1_Session1/breadboard.png" alt="IR" width='500' height='500' /><br />

  A breadboard is a construction base for prototyping of electronics. It is used to build and test circuits quickly before finalizing any circuit design. It has many holes into which circuit components like ICs and resistors can be inserted.

<EmbedItem url='https://www.youtube.com/embed/KU7fZZUBKmA' />

- **LED**

   <Image src="/static/images/resources/Day1_Session1/LED.png" alt="IR" width='500' height='500' />

  A Light Emitting Diode or LED is a semiconductor diode that produces light when a voltage is applied across it. It is primarily used for lighting purposes in electronics and automative industries.

- **Resistors**

  <Image src="/static/images/resources/Day1_Session1/resistor.png" alt="IR" width='500' height='500' />

  A resistor is a passive two-terminal electrical component that implements electrical resistance as a circuit element.

- **Multimeter**

    <Image src="/static/images/resources/Day1_Session1/multimeter.jpg" alt="IR" width='500' height='500' />

  A Multimeter is a device that can measure multiple electrical properties. It is mostly used in debugging our circuits.

- **Arduino Uno**

  Arduino is basically an open source electronics platform providing both software and hardware. Arduino Uno is perhaps the most widely used microcontroller developed by Arduino.

  On a personal note, the board is pretty robust and is easy to work around.

  Your board looks like this,

  <Image src="/static/images/resources/Day1_Session1/arduino_uno.png" alt="IR" width='500' height='500' />

- **Arduino Cable**
  <Image src="/static/images/resources/Day1_Session1/arduino_cable.png" alt="IR" width='500' height='500' />

  This is a Cable For Arduino UNO/MEGA (USB A to B). You can use it to connect “Arduino Uno”, “Arduino Mega 2560″ or any board with the USB female A port of your computer.

- **LDRs**
  <Image src="/static/images/resources/Day1_Session1/LDR.png" alt="IR" width='500' height='500' />

  A Light Dependent Resistor or LDR is basically a resistor whose resistance varies depending on the intensity of light falling on it. It can be used in building alarm clocks, burglar alarm circuits, etc. We would be using these to build a Light Follower robot in the workshop.

- **IR Module**
  <Image src="/static/images/resources/Day1_Session1/IR.jpeg" alt="IR" width='500' height='500' />

  IR Sensors are crucial components for building the Line Follower robot. These sensors will be required to keep our bot on the path and is pretty much what will guide our bot.

- **BO Motors**
  <Image src="/static/images/resources/Day1_Session1/BO.png" alt="IR" width='500' height='500' />

  Bo motor (Battery Operated) lightweight DC geared motor which gives good torque and rpm at lower voltages. We will be using 2 BO motors for our purpose. These motors will be connected to the L293D motor driver which will help us control the direction of motion of the motor as well as the torque generated.

- **L293D Motor Driver**
  <Image src="/static/images/resources/Day1_Session1/L293D_1.png" alt="IR" width='500' height='500' />
  <Image src="/static/images/resources/Day1_Session1/L293D_2.png" alt="IR" width='500' height='500' />

  A motor driver is an integrated circuit chip which is usually used to control motors in autonomous robots. Motor driver act as an interface between Arduino and the motors . L293D, the motor driver included in your kit, is one of the most popular motor drivers.

- **HC-SR04**

    <Image src="/static/images/resources/Day1_Session1/HC-SR04.png" alt="IR" width='500' height='500' />

  HC-SR04 is an Ultrasonic Sensor that is used for detecting the distance to an object. This sensor would be a key component in building the Obstacle Avoidance robot.

- **HC-05**

    <Image src="/static/images/resources/Day1_Session1/bluetooth_1.jpg" alt="IR" width='500' height='500' />

  HC-05 is a bluetooth module that gives bluetooth properties to your robot. It enables you to wirelessly control your robot using your phone. This would be a key component in building the Bluetooth Controlled Bot.

- **Jumper Wires**
  <Image src="/static/images/resources/Day1_Session1/jumper_wires.png" alt="IR" width='500' height='500' />

  Jumper wires are simply wires that have connector pins at each end, allowing them to be used to connect two points to each other without soldering. Jumper wires are typically used with breadboards and other prototyping tools in order to make it easy to change a circuit as needed.

- **Chassis**

  A chassis is basically the load bearing framework of an artificial object, say a car or in our case a robot. It provides structural support to our framework. Following are few pictures to give an idea what a chassis would look like -

    <Image src="/static/images/resources/Day1_Session1/chassis_1.png" alt="IR" width='500' height='500' />  

  <Image src="/static/images/resources/Day1_Session1/chassis_2.png" alt="IR" width='500' height='500' />

# How to make connections on a Breadboard?

As mentioned before, a breadboard is a circuit board that is used to make temporary circuits. It is a device having electronics and test circuit designs. The electronic elements inside the electronic circuits can be interchanged by inserting the terminals and leads into holes and later connecting it with the help of appropriate wires.

The metal strips are laid out as shown below. Note that the top and bottom rows of holes are connected horizontally and split in the middle while the remaining holes are connected vertically.

<Image src="/static/images/resources/Day1_Session1/b_1.png" alt="IR" width='500' height='500' />

In the below image, you can see how all holes in the selected row and selected column are connected together. The set of connected holes can be called a node.

<Image src="/static/images/resources/Day1_Session1/b_2.png" alt="IR" width='500' height='500' />

To interconnect the selected row (node A) and column (node B) a cable going from any hole in the row to any hole in the column is needed:

<Image src="/static/images/resources/Day1_Session1/b_3.png" alt="IR" width='500' height='500' />

Now the selected column (node B) and row (node A) are interconnected:

<Image src="/static/images/resources/Day1_Session1/b_4.png" alt="IR" width='500' height='500' />

Thus, in a Breadboard

<Image src="/static/images/resources/Day1_Session1/b_5.png" alt="IR" width='500' height='500' />

You can refer to the following video for more information - [Understanding How Breadboards Work](https://www.youtube.com/watch?v=CfdaJ4z4u4w)

## Basic LED - Breadboard connection

The below image shows how to make a simple LED - Breadboard connection.

<Image src="/static/images/resources/Day1_Session1/b_LED.png" alt="IR" width='500' height='500' />

### Explanation

Power connections:

- The positive terminal of the 9V battery is connected to one of the horizontal rails on the breadboard, in this case the one marked with the + sign, through a Red wire.
- Similarly, the negative terminal of the 9V battery is connected to the other horizontal rail on the breadboard, in this case the one marked with the - sign, through a Black wire.

LED connections:

- The positive terminal of the LED, which is longer and bent, is connected to the positive rail (+) on the breadboard through a Red wire.
- The negative terminal of the LED, which is shorter and straight, is connected to a resistor.

Resistor connections:

- One end of the resistor is connected to the negative terminal of the LED.
- The other end of the resistor is connected to the negative rail (-) on the breadboard through a Black wire.

You can take a look at the TinkerCAD Simulation [here](https://www.tinkercad.com/things/5Ts8yDRppe7).

## Using a Multimeter

### What is a multimeter?

A multimeter is a device that can measure many electrical properties depending on its mode.

### Connections of Multimeter

<Image src="/static/images/resources/Day1_Session1/multimeter_1.png" alt="IR" width='500' height='500' />

1. Knob:- This is used to select the functions and desired ranges as well as to turn ON/OFF the device.
2. Display:- It is used to display the values it reads based on the functions it selected.
3. “COM” Jack:- Use to plug in black connector for negative test lead.
4. “V ΩmA” Jack:- Use to plug in red connector for positive test lead for all voltage, resistance, and current ( up to 200mA ) measurements.
5. “10 A” Jack:- Use to plug in red connector for positive test lead for current ( between 200mA and 10A ) measurement. There is no fuse for the "10A" jack. To use safely, each measurement can not last for more than 10 seconds, and the interval between each measurement must be more than 15 minutes.

### Function’s of Multimeter

<Image src="/static/images/resources/Day1_Session1/multimeter_2.png" alt="IR" width='500' height='500' />

#### AC Voltage (V~)

- There will be a region up-right to the knob marked with the above symbol.
- It is used to measure AC voltages between 2 terminals.
- The various options given in this specify the maximum AC voltage it is going to read.
- Readings will be shown in V.

#### DC Voltage (V⎓)

- There will be a region up-left to the knob marked with the above symbol.
- It is used to measure DC voltages between 2 terminals.
- The various options given in this specify the maximum DC voltage it is going to read.
- If you select 2000m or 200m, the reading will be shown in mV. For other cases, it will show in V.

#### DC Current (A⎓)

- There will be a region right to the knob marked with the above symbol.
- It is used to measure DC currents across a circuit.
- The various options given in this specify the maximum DC current it is going to read.
- For measuring upto 10A, connect red connector in “10A” jack. For other than 10A, connect red to “V ΩmA” jack.
  If you select 2000μ, then the readings will be displayed in μA. If you have selected 20m or 200m, it will show reading in mA and if you have selected 10A, it will show in A.

**Caution -** Do not connect the multimeter directly with a voltage source in this mode. If you do so, you will end up blowing your multimeter.

#### Resistance (Ω)

- There will be a region bottom-left to the knob marked with the above symbol.
- It is used to measure resistance between 2 terminals.
- The various options are used to select the maximum resistance.
- If you select max resistance 2000k, 200k, 20k, it will show reading in kΩ. For the rest of the cases, readings will show in Ω.

#### Continuity (<Image src="/static/images/resources/Day1_Session1/multimeter_3.png" alt="IR" width='500' height='500' />)

- There will be a region bottom-left to the knob marked with the above symbol.
- When you will touch 2 terminals to some point on a circuit, if there is continuity (if those points are directly connected to each other), it will make ‘beep’ sound.

#### OFF mode

- Located at top of knob.
- For switching off multimeter.

# Introduction to Arduino

Arduino is an open-source electronics platform based on easy-to-use hardware and software. It consists of both a physical programmable circuit board (a microcontroller) and a piece of software, or [IDE](https://www.arduino.cc/en/software) (Integrated Development Environment) that runs on your computer and allows you to write and upload computer code to the physical board.

Arduino boards are able to read inputs such as lights on a sensor, pressure on a button, etc., and turn them into desired outputs such as activating a motor or turning on an LED. The set of instructions required to perform such tasks are given to the Arduino board using the IDE.

Unlike most previous programmable circuit boards, the Arduino does not need a separate piece of hardware (called a programmer) to load new code onto the board - you can simply use a USB cable. Additionally, the Arduino IDE uses a simplified version of C++, making the programming easier.

Arduino manufactures a wide range of boards. These have different sizes, different microcontrollers, and different processing capabilities.
The Uno is one of the most popular boards in the Arduino family and an excellent choice for beginners.

## Main components

<Image src="/static/images/resources/Day1_Session1/uno_components.png" alt="IR" width='500' height='500' />

1.  Power (USB):
    The Arduino UNO is connected to a power source via a USB cable that is terminated in a barrel jack. The USB connection is also used to load code onto your Arduino board.
    The recommended voltage for most Arduino models is between 6 and 12 Volts. A power supply greater than 20 Volts will damage the Arduino board.
2.  Pins:
    The pins on the Arduino board are where the connections are made in order to construct the required circuit (in conjunction with a breadboard and connecting wires). The Arduino has several kinds of pins, each of which is used for a different purpose.

    - 5V and 3.3V Pins: These pins are used for power supply to the Arduino. 5V or 3.3V is sufficient for most of the simple components used.
    - GND: These pins are used to 'ground' the circuit.
    - GPIO (General Purpose Input Output Pins): These are specific pins that are programmed to input/output signals.

3.  RX and TX LEDs:
    RX and TX stand for Receiving and Transmitting, and these LEDs are used to indicate Serial communication (like when we're loading a new program onto the board). The TX and RX LEDs blink whenever there is communication between the onboard microcontroller and the computer through the USB to serial converter chip present near the USB port. The lighting up of the LEDs indicates the direction of the flow of data. When a bit of data goes from the Arduino board to the computer, the TX LED glows. The RX LED glows when a bit of data goes from the computer to the Arduino board.
4.  Reset Switch:
    This functions as a reset button. Pushing it will temporarily connect the reset pin to ground and restart any code that is loaded on the Arduino. This can be very useful if your code doesn't repeat, but you want to test it multiple times.
5.  Main IC:
    This functions as the brain of the Arduino. The main IC on the Arduino is slightly different from board type to board type but is usually from the ATmega line of IC's from the ATMEL company. This can be important, as you may need to know the IC type (along with your board type) before loading up a new program from the Arduino software. This information can usually be found in writing on the top side of the IC.
6.  Voltage regulator:
    It is used to regulate the power supply to the Arduino board. The regulator still has limitations, and hence a supply greater than 20 Volts must not be used as it may damage the board.

## Arduino Uno

Arduino Uno is a microcontroller board based on the [ATmega328P](http://ww1.microchip.com/downloads/en/DeviceDoc/Atmel-7810-Automotive-Microcontrollers-ATmega328P_Datasheet.pdf). It has 14 digital input/output pins (of which 6 can be used as PWM outputs), 6 analog inputs, a USB connection, a power jack, an ICSP header, and a reset button. It contains everything needed to support the microcontroller; simply connect it to a computer with a USB cable to get started.

# General Purpose Input Ouput Pins (GPIO)

<Image src="/static/images/resources/Day1_Session1/gpio_1.png" alt="IR" width='500' height='500' />

GPIO pins are programmed to input/output signals. These bridge the gap between programming and electronics.
There are two types of GPIO pins:

- Digital GPIO pins
- Analog GPIO pins

<Image src="/static/images/resources/Day1_Session1/gpio_2.png" alt="IR" width='500' height='500' />

## 1\. Digital Pins

The digital pins in the Arduino are labelled 0-13 (14 pins). These pins can be used for both digital input as well as digital output.

The pins on the Arduino that are marked with a tilde symbol (~) are known as PWM pins, and are used for analog output. On most Arduino boards (those with the ATmega168 or ATmega328), the PWM pins are 3, 5, 6, 9, 10, and 11 (6 pins).
More information about PWM will be provided later.

Pin 13 of the Arduino Uno has a special function. It has an LED and a resistor attached to it. This makes it difficult to configure in the input modes.

Pins 0 and 1 (named RX and TX) are for serial connection and should not be used for other uses.

<Image src="/static/images/resources/Day1_Session1/gpio_digital.png" alt="IR" width='500' height='500' />

In order to use the pins for digital input, the digitalRead() function is used.
In order to use the pins for digital output, the digitalWrite() function is used.

**NOTE** \- The digitalRead() and digitalWrite() functions will be explained later.

## 2\. Analog Pins

The analog pins in the Arduino are labeled A0-A5 (6 pins). The Arduino has an analog-to-digital (A/D) converter. The converter has 10 bit resolution, returning integers from 0 to 1023. Hence the pins can read analog input voltages between 0 and the operating voltage (usually 5 V). This input is mapped to a value between 0 and 1023 appropriately using the analog to digital converter.

The analog pins are primarily used for analog input signals. But they can also be used like digital GPIO pins (HIGH or LOW input/output). Thus, pins marked as "ANALOG IN" on the board can work either as analog input (using the Analog to Digital Converter), digital input, or digital output.

<Image src="/static/images/resources/Day1_Session1/gpio_analog.png" alt="IR" width='500' height='500' />

In order to use the pins for reading **analog** input signals, analogRead() function is used.
**NOTE** \- You will learn more about the analogRead() function in the further sessions.

**NOTE** \- The analogWrite() function is reserved to PWM pins. A more detailed explanation of PWM pins, their function, and the analogWrite() function will be provided later.

| Digital/Analog | Pin Number    | Function used  |
| -------------- | ------------- | -------------- |
| Digital Input  | 0-13, A0-A5   | digitalRead()  |
| Digital Output | 0-13, A0-A5   | digitalWrite() |
| Analog Input   | A0-A5         | analogRead()   |
| Analog Output  | 3,5,6,9,10,11 | analogWrite()  |

# Digital Vs Analog

By the time you are reading this, you would be having a fair idea of what an Arduino is, and what exactly are GPIO pins. On a brief note, Arduino is a microcontroller, while GPIO pins stand for General Purpose Input Output pins. These GPIO pins are further classified into Digital and Analog pins. Now let’s look into what these are and by the end of this document let’s try to make a small circuit using Arduino and a LED.

Before we look into Digital and Analog pins, let's see what are Digital and Analog Signals.

## Signals

Signals, in electrical engineering, mean **_time-varying_** quantities, usually voltages. These signals are of two types, one is Digital Signal, other is Analog Signal.

### Digital Signals

Digital signals refer to signals which are finite or discrete. Meaning different values passed by these signals are finite. For example, in Arduino the digital signals that can be passed are two, \***\*$5V$ and $0V$\*\***. They can be more than two too. But remember, Digital signals are never infinite.

<Image src="/static/images/resources/Day1_Session1/digital.png" alt="IR" width='500' height='500' />

_This is how a Digital Signal looks like._

### Analog Signals

Unlike Digital signals, Analog Signals are infinite. Meaning it can take any number of values, but usually restricted in an continues interval. For example, in Arduino, the Analog signals sent can **_vary between $0V$ and $5V$, both inclusive_**.

<Image src="/static/images/resources/Day1_Session1/analog.png" alt="IR" width='500' height='500' />

_This is how a Analog Signal looks like._

## Getting Started With Arduino

You will be learning how to talk to your Arduino and interface it with other sensors to make it smarter.

### The Sketch

Every individual program that is written for the Arduino is called as a "**sketch**", the most basic of all the sketches is the "**blank sketch**" its the first sketch you see when you open a new IDE page. Which kinda looks like this

```c++
void setup(){
    // Code written here will be only be executed once

}

void loop(){
    // Code written here will be run indefinitely

}


```

Go ahead and open your IDE, open a new sketch in case you have some other sketch pre-loaded.

Every _(mostly)_ arduino sketch has two components and they are the **[void setup()](https://www.arduino.cc/reference/en/language/structure/sketch/setup/)** and the **[void loop()](https://www.arduino.cc/reference/en/language/structure/sketch/loop/)**.

> **void setup()**
> The setup() function is called when a sketch starts. Use it to initialise variables, pin modes, start using libraries, etc. The setup() function will only run once, after each power up or reset of the Arduino board.

In layman terms, the **setup()** part of the sketch contains code that needs to be only run once.

> **void loop()**
> After creating a setup() function, which initialises and sets the initial values, the loop() function does precisely what its name suggests, and loops consecutively, allowing your program to change and respond. Use it to actively control the Arduino board.

In layman terms, the **loop()** part of the sketch contains code that is to be run indefinitely.

Now that you understand the basic layout of a sketch, lets start learning how to code.

## Input/Output

Like the laptop/desktop through which your currently reading this walk-through can be connected to external devices like keyboards, mouse, printers, joysticks. The Arduino which is a microcontroller can also be connected to external input/output devices (input devices are usually called sensors) and just like devices for your laptop most of these sensors can be classified into two categories.

1.  Input
2.  Output

The names are self-explanatory but lets go through a few examples for better understanding.

| Category | Laptop                    | Arduino Uno                                      |
| -------- | ------------------------- | ------------------------------------------------ |
| Input    | Mouse, Keyboard, Joystick | Push Button, Keypad, IR Sensor, Temp Sensor, LDR |
| Output   | Monitor, Printer          | Motors, LED, LCD Display                         |

Just like your laptop has USB, HDMI and microUSB ports that can be used to connect external devices, the Arduino has a set of pins called the **GPIOs (General Purpose Input/Output pins)** that can be used to connect external devices to the Uno.

### pinMode()

Now that you know what kinda external devices you will be working with its high time you also learn how to let your arduino know what device it is about to work with using [pinMode()](https://www.arduino.cc/en/Reference.PinMode).

> **pinMode()**
> Configures the specified pin to behave either as an input or an output. See the description of digital pins for details on the functionality of the pins.

**Example Sketch**

```c++
void setup(){
    // The "8" refers to the digital pin 8 on the arduino board
    pinMode(8,INPUT); // for an INPUT device
    // The "9" refers to the digital pin 9 on the arduino board
    pinMode(9,OUTPUT); // for an OUTPUT device
}

void loop(){

}

```

Since the nature of a device (input/output) and the pin its connected to, doesn't change mid-program, its often sufficient to let the Arduino know about the devices its dealing with once at the start of the sketch, hence **pinMode()** is placed inside the **void setup()** and not inside the **void loop()**.

The pin numbers for the Arduino board are mentioned on the board and can be used as it is inside the **pinMode()** function.

# C for Arduino Microcontrollers

### Programming the Arduino Microcontrollers

> Note: This doc assumes some basic familiarity with programming concepts as covered in CS F111: Computer Programming at BITS. Although some pre-requisite knowledge of programming structures is recommended, it is not requried.

## Control Structure of a simple Arduino Program

Almost any arduino program consists of two important functions: `setup()` and `loop()`. These two functions are the building blocks of any arduino program. Most programs that you need to run on a microcontroller device have two major components:

1. Setting up the hardware and the program variables
2. Recurring tasks like collecting data or sending some data

These tasks are handled by the following two functions:

### The setup() function

This function is called when your Arduino Board starts up. It is used to initalize any variables that you have to use in your program. It can also be used to set up any hardware that you need to use. The crucial part to remember is that this function is called exactly once. Anything, and everyhting that you don't need to run more than once, should be within this function.

### The loop() function

This function is called repeatedly. It is the main function of your program. It is where you should put all the code that you want to run repeatedly. The loop function is called repeatedly until the program is stopped. (How is a program stopped?)

Sample Code Structure:

```c++
// Define Global Variables

void setup() {
    // Set up your microcontroller here
    // Initialize Variables
}

void loop() {
    // Collect some data
    // Send some data back
}

```

Once we understand the strucutre of a program, we can start writing the code. Let us look at the building blocks.

## Some extra knowledge (For assignments)

This would be reqiured to solve the Programming assignment.

## <s>TV</s> Serial

### ~~TV~~ Serial

Sometimes its really useful to see what's going on inside the brain of a microcontroller. Whilst there are many ways to send and receive information to and from a microcontroller and the computer, using the Serial port turns out to be the easiest.
Serial communication is the process of sending one bit of data at a time, sequentially from one device to another. The main purpose of this serial communication is to transfer the sketch from computer to Arduino, to send information to computer etc. All Arduino boards have at least one serial port and it communicates on digital pins 0 (RX) and 1 (TX).
The serial port is connected to the USB port on the board, and we can use the built-in Arduino Serial library to send data to the serial monitor in the Arduino IDE or to an external serial monitor.

#### Monitor

The Serial Monitor is basically a window in the Arduino IDE that allows you to send messages from your computer to an Arduino board (over USB) as well as receive messages from the Arduino.

#### Here's how you can access the Serial Monitor

1.  Open your Arduino IDE. Click on 'Tools' in the Menu bar, and select 'Serial Monitor'.
2.  Alternatively, you can use the hotkey Ctrl+Shift+M

This is how your Serial Monitor will typically look like

<Image src="/static/images/resources/Day2_Session1/monitor.png" alt="IR" width='500' height='500' />


#### begin()

The Serial.begin( ) function is a part of the serial object in the Arduino. It tells the serial object to perform initialization steps to send and receive data on the Rx and Tx (pins 1 and 0). It sets the baud rate for serial communication between your Arduino board and another device.

The most common reason to use serial.begin() is when you want to output some information from your Arduino to your computer screen. 99% of the time, you’ll be putting the Serial.begin() function inside of the setup() function. As you may know, setup() only runs once, and since you’ll only need to establish the Serial Communication one time – it makes sense to have it there.

**Syntax**: `Serial.begin(speed)`

_speed_: It signifies the baud rate. The default baud rate in Arduino is 9600. We can specify other baud rates as well, such as 4800, 14400, 38400, 28800, etc.

Probably the most important practical thing you need to know is that for serial communication to work, the baud rate in Serial.begin() and the baud rate set on the receiving device need to match. If you are using the Arduino IDE Serial Monitor window to read the information from your Arduino, then you can use the baud rate drop down to set the baud rate. But remember! If these two values don’t match – then anything you try to send over serial will not work right.

### Basic program to print your name

As you know whatever we do in the `void setup()` is only run once whereas as the part in the `void loop()` keeps on runing until Arduino is powered.
This is an example to print your name once when the board is powered.

```c++
void setup()
{
  Serial.begin(9600);  //Begin serial communication at 9600(Baud rate)
  Serial.println("Hi, I'm Bhavya Jain");  //Print text
}

void loop(){ }
```

`Serial.print()` is used to print in a single line.
`Serial.println()` moves to next line after printing.

## Add delay to your program

`delay()` function is used to add some time delay to your program.
For example if you want to print "1" and thenafter 1 second you want to print "2" and so on. You will need delay function.

The function takes milliseconds as input.

```c++
void setup(){
	Serial.begin(9600);
}
void loop(){
	//This will print 1,2,1,2...infinitely
	Serial.print(1);
	delay(1000); // Do nothing for 1 second
	Serial.print(2);
	delay(1000); // Do nothing for 1 second
}

```


#### print 'F'

The **Serial.print( )** function in Arduino prints data to the serial port. It allows you to send information from your Arduino to your computer, so that you can see the value displayed on your Serial Monitor.

**Syntax**: `Serial.print(value, format)`

_value_: It signifies the value to print, which includes any data type value.

_format_: It consists of number bases, such as OCT (Octal), BIN (Binary), HEX (Hexadecimal), etc. for the integral data types. It also specifies the number of decimal places.

You can read more about this function [here](https://www.arduino.cc/reference/en/language/functions/communication/serial/print/).

If we wish to print the data in different lines, we can use the **Serial.println()** function. This function is basically the same as the Serial.print() function (except that it prints data in different lines) and has the same syntax.

## Variables and DataTypes in C++

The Arduino microcontroller uses variables identical to C++ on most parts. Hence, we have the familiar C++ data types like `int`, `float`, `double`, `char`, `bool`, etc. However, beyond the C++ data types, we have the `string` datatype, which is used to store a sequence of characters.

// TODO: Variable Naming Conventions

Example:

```c++

int32_t myverylongvariable; // Bad Naming, Extremely Unreadable
int32_t my_very_long_variable; // Good, but unconvetional
int32_t MyVeryLongVariable; // Good, but unconventional. Pascal case is used with Classes

int32_t myVeryLongVariable; // Good

```

Most of these datatypes have sizes that depend on the compiler architecture being used (x32 or x64), and is often unreliable. To counteract this problem, we have integer datatypes that specify the size (in bytes) explicitly. For Example, `int8_t` has a fixed size of 8 bits, `int32_t` has a size of 32 bits or 4 bytes. Similarly, there are unsigned variations of the same types availabel as well. For example, `uint8_t`, `uint64_t`. We strongly recommend that you use these fixed-size integer datatypes whenever possible.

Size and Range of Some Standard Data Types:

| typename | Size    | Range                     |
| -------- | ------- | ------------------------- |
| char     | 1 byte  | 0 to 255                  |
| int8_t   | 1 byte  | $-2^7$ to $2^7$ - 1       |
| int16_t  | 2 bytes | $-2^{15}$ to $2^{15}$ - 1 |
| int32_t  | 4 bytes | $-2^{31}$ to $2^{31}$ - 1 |
| ...      | ...     | ...                       |
| uint8_t  | 1 byte  | 0 to $2^8$ - 1            |
| uint16_t | 2 bytes | 0 to $2^{16}$ - 1         |
| ...      | ...     | ...                       |
| float    | 4 bytes | ...                       |
| double   | 8 bytes | ...                       |

Examples:

```c++

int a = 5;
int32_t b = 7; // Equicvalent to int in x64 compilers

unsigned int mask = 1234;
uint8_t mask = 0x11; // 8 bit unsigned integers most frequently used as bit masks

float f = 2.5f; // the f at the end of 2.5 signifies explicitly that this is a float
double d = 3.5; // floating point numbers are double precision by default

```

### Bonus: Implicit and Explicit Type Casting

> Please refer to [this](https://www.programiz.com/cpp-programming/type-conversion) source for information on this topic

## Operators

Operators may be unary (single operand) or binary (two operands). We look at the following types of operators:

1. Arithmetic Operators:

| operator | operation                                     | Example                    |
| -------- | --------------------------------------------- | -------------------------- |
| `+`      | addition                                      | 3 + 5 = 8                  |
| `-`      | subtraction                                   | 3 - 5 = -2                 |
| `*`      | multiplication                                | 3 \* 5 = 15                |
| `/`      | division                                      | 5 / 3 = 1, 3.0 / 2.0 = 1.5 |
| `%`      | modulo (Remainder after integer division)     | 5 % 3 = 2                  |
| `x++`    | postfix increment (Add 1 to the value)        | a++ = a + 1                |
| `++x`    | prefix increment (Add 1 to the value)         | ++a = a + 1                |
| `x--`    | postfix decrement (Subtract 1 from the value) | a-- = a - 1                |
| `--x`    | prefix decrement (Subtract 1 from the value)  | --a = a - 1                |

> `%` is used with integer datatypes (eg: `uint8_t`, `int32_t`, etc) only.

2. Assignment Operations:

| operator | operation                     | Example  |
| -------- | ----------------------------- | -------- |
| `=`      | assignment                    | a = 5;   |
| `+=`     | addition and assignment       | a += 5;  |
| `-=`     | subtraction and assignment    | a -= 5;  |
| `*=`     | multiplication and assignment | a \*= 5; |
| `/=`     | division and assignment       | a /= 5;  |
| `%=`     | modulo and assignment         | a %= 5;  |

3. Relational operators:

> `int a = 7`

| operator | operation                | Example             |
| -------- | ------------------------ | ------------------- |
| `==`     | equal                    | a == 5; is `false`  |
| `!=`     | not equal                | a != 5; is `true`   |
| `<`      | less than                | a \< 5; is `false`  |
| `>`      | greater than             | a > 5; is `true`    |
| `<=`     | less than or equal to    | a \<= 5; is `false` |
| `>=`     | greater than or equal to | a >= 5; is `true`   |

4. Logical operators:

> `bool a = true`

> `bool b = false`

| operator | operation | Example              |
| -------- | --------- | -------------------- |
| `&&`     | AND       | a && b is `false`    |
| `\|\|`   | OR        | a `\|\|` b is `true` |
| `!`      | NOT       | !a is `false`        |

5. Bitwise operators:

> `uint8_t a = 0b0000_1011 = 0x0B`

> `uint8_t b = 0b0000_0010 = 0x02`

| operator | operation   | Example                        |
| -------- | ----------- | ------------------------------ |
| `&`      | AND         | a & b `= 0b0000_0010 = 0x02`   |
| `\|`     | OR          | a \| b `= 0b0000_1011 = 0x0B`  |
| `^`      | XOR         | a ^ b `= 0b0000_1001 = 0x09`   |
| `~`      | NOT         | ~a `= 0b1111_0100 = 0xF4`      |
| `<<`     | LEFT SHIFT  | a \<< b `= 0b0010_1100 = 0x2C` |
| `>>`     | RIGHT SHIFT | a >> b `= 0b0000_0010 = 0x02`  |

We will look at Bitwise operations in more detail further.

## Assignment 2

### Variables and operators

1. Write a program to make a variable "A" and assign the value "25" to it. Print the value of "A" only once on the monitor.
2. Write a program to print natural numbers infinitely.
3. Write a program to print the following series infinitely-
   a. 1, 3 ,5, 7, 9...
   b. 1, ,2 ,4, 8, 16...
   c. 32000, 16000, 8000...
   d. 10, 10, 20, 20, 30, 30....
   e. 10, 90, 20, 80, 30, 70...

## Conditionals

We now look at how to control the flow of execution of the program. Typically, every statement is executed line by line. However, there are times when we want to execute a statement only when a condition is true. This is where conditionals come in.

We have the following structure of Programs:

```c++
if (condition1) {
    // do something when condition1 is true
} else if (condition2) {
    // do something when condition2 is true
} else {
    // do something when neither condition is true
}
```

### The ternary Operator

Ternary operator provides a simple way to execute a statement when a condition is true or false.

```c++
variable = condition ? value when condition is true : value when condition is false;
```

This is equivalent to:

```c++
if (condition) {
    variable = value when condition is true;
} else {
    variable = value when condition is false;
}
```

Example:

```c++
int32_t a = 5, b = 7;
int32_t maxAB = (a > b) ? a : b; // maxAB = 7
```

## Loops

Loops are commands that execute a set of statements multiple times. There are two types of loops: `while` and `for`.

### while loop

These loops execute a set of statements as long as a condition is true. The condition is checked at the beginning of each loop iteration. The loop is exited when the condition becomes false.

Syntax:

```c++
while (condition) {
    // Loop body
}
```

Example:

```c++
int32_t i = 0;
while (i < 10) {
    i++;
}

// Value of i after loop exits: 10 (Why not 9?)
```

### for loop

These loops execute a set of statements once for each element in a collection. The collection is specified by the loop variable. This collection is defined by the loop variable.

Syntax:

```c++
for (variable = initial value; condition; increment variable) {
    // Loop Body
}
```

Example:

```cpp
int32_t i;
for (i = 0; i < 10; i++) {
    // do something
}
```

### The unspoken Brother

The third kind of Loops are the `do while` loops. These loops execute a set of statements as long as a condition is true. The condition is checked at the end of each loop iteration. The loop is exited when the condition becomes false.

> Point out a case where `do while` loop is preferred over `while` loop.

Syntax:

```cpp
do {
    // Loop Body
} while (condition);
```

## Assignment 3

### Conditional Programming

1. Print natural numbers only till 25
2. Make a variable and assign thevalue 0 to it. Keep adding 1 to it but print the value of variable only from 20-30
3. Print table of 5 till 50 only
4. From the series given in Assignment 2, print the numbers only till the 7th term.

## Functions

A function is a named sequence of statements that perform a specific task. It is a block of code that performs a specific task.

Suppose we need to create a program to create a circle and color it. We can create two functions to solve this problem:

1. A function to draw the circle
2. A function to color the circle

Dividing a complex problem into smaller chunks makes our program easy to understand and reusable.

There are two types of function:

1. _User-defined functions_: Created by users
2. _Built-in functions_: Predefined in C++, or the compiler

### User Defined Functions:

Naming A Function: In C++, the conventional practive is to use Camel Case for naming functions. This is similar to how variables are named.

Example:

```c++

int32_t myverylongfunction(); // Bad Naming, Extremely Unreadable
int32_t my_very_long_function(); // Good, but unconvetional
int32_t MyVeryLongFunction(); // Good, but unconventional. Pascal case is used with Classes

int32_t myVeryLongFunction(); // Good

```

Every function has a protype (or its signature/declaration) and a definition. The protype contains the return type of the function, the function name, and its parameters. The function definition contains the statements that the function performs.

Syntax:

```c++
returnType functionName (parameter1, parameter2, ...); // Function Protype

returnType functionName (parameter1, parameter2, ...) { // Function Definition
    // Function Body
}

```

> The protype may exists independantly of the definition, but the definition always includes the protype.

Example:

```c++

bool isOdd(int32_t n) {
    /*
    Check if the number passed is odd
    Args:
        int32_t n: The number to check
    Returns:
        bool: True if the number is odd, false otherwise
    */
    return (n & 1);
}
```

Now that you've finished this section, you have all the **programming knowledge** required to get started our workshop.

# Microcontrollers

## What is a microcontroller?

A microcontroller is a compact integrated circuit designed to govern a specific operation in an embedded system. A typical microcontroller includes a processor, memory, and input/output (I/O) peripherals on a single chip.

Also known as _embedded controllers or microcontroller units (MCUs)_, they are found in a variety of devices, including automobiles, robotics, office equipment, medical devices, mobile wireless transceivers, vending machines, and home appliances. They are essentially simple miniature personal computers (PCs) with no complex front-end operating system, designed to operate small features of a bigger component (OS).

## How do microcontrollers work?

A microcontroller is embedded inside a system and controls a single function. It accomplishes this by employing its core Processor to evaluate data received from its I/O peripherals. The microcontroller's temporary information is stored in its data memory, where the processor accesses it and decodes and applies the incoming data using instructions stored in its programme memory. It then communicates with its I/O peripherals and takes the required action.

## Core Elements of a Microcontroller

**The processor (CPU)**
A processor might be compared to the device's brain. It interprets and responds to a variety of commands that control the microcontroller's operation. This includes basic arithmetic, logic, and input/output (I/O) operations. It also performs data transfer operations that send commands to other embedded system components.

**Memory**
The memory of a microcontroller is used to retain the data that the processor receives and to respond to commands that it has been programmed to carry out. There are two types of memory in a microcontroller:

_Program memory_ is where the CPU keeps long-term information about the instructions it executes. Program memory is non-volatile memory, which means it may store data indefinitely without the need for a power source.

_Data memory_ is needed to store temporary data while the instructions are being executed. Data memory is volatile, which means that the data it stores is only transient and is only kept if the device is powered up.

**I/O peripherals**
The processor's input and output devices serve as its interface to the outside world. The input ports take in information and transfer it to the processor as binary data. The processor receives that data and sends the necessary instructions to output devices that execute tasks external to the microcontroller.

While the processor, memory, and I/O peripherals are the most important components of a microprocessor, other components are typically incorporated as well. Supporting components that interface with the memory and CPU are referred to as I/O peripherals. Peripherals are a broad category that includes a wide range of supporting components. Because they are the method via which the processor is applied, having some form of an I/O peripheral is essential to a microprocessor.

## Examples of Microcontrollers

- Most Arduino boards consist of an **Atmel 8-bit AVR microcontroller** (ATmega8, ATmega168, ATmega328, ATmega1280, or ATmega2560)
- ARM is a family of microcontroller developed by makers like ST Microelectronics and Motorola.

<Image src="/static/images/resources/Day1_Session1/microcontroller_examples.png" alt="IR" width='500' height='500' />

Fig 1.2: Arduino with ATmega328 Microcontroller


# Microprocessors

### What is a microprocessor?

A microprocessor is an integrated circuit (IC) that houses the central processing unit (CPU) of a computer . It is a clock-driven, register-based programmable multipurpose silicon device that accepts binary data as input and processes it according to instructions stored in the memory.

### Why we need a Microprocessor?

A microprocessor, like our brain, can be trained to perform any task. Based on its instruction set and capabilities, it can be programmed to perform anything we desire. When we try to solve a problem without programming, the solution can be exceedingly complex.

When we try to solve a problem without programming, the solution can be exceedingly complex.

Assume you wish to construct a large structure. The use of BRICKS will simplify and reduce the cost of building. It will also allow you to design the building in whatever shape or size you like. The bricks that you can employ to solve your problem are instructions stored in a microprocessor. You can quickly solve difficult programmes by following those guidelines.

### How does a Microprocessor work ?

A processor is the brain of a computer which basically consists of _Arithmetical and Logical Unit (ALU), Control Unit and Register Array_.

- **ALU** performs all arithmetic and logical operations on the data received from input devices or memory.
- **Register array** consists of a series of registers like accumulator (A), B, C, D etc. which acts as temporary fast access memory locations for processing data.
- **Control Unit** controls the flow of instructions and data throughout the system.

So basically a microprocessor takes input from input devices, process it as per instructions given in the memory and produces output.

### Advantages of Microprocessors

**Low Cost**
Microprocessors are available at low cost due to integrated circuit technology which reduces the cost of a computer system.

**High Speed**
Microprocessor chips can work at very high speed due to the technology involved in it. It is capable of executing millions of instructions per second.

**Small Size**
Due to very large scale and ultra large scale integration technology, a microprocessor is fabricated in a very less footprint. This will reduce the size of the entire computer system.

**Versatile**
Microprocessors are very versatile, the same chip can be used for a number of applications by simply changing the program (instructions stored in the memory).

**Low Power Consumption**
Microprocessors are usually manufactured using metal oxide semiconductor technology, in which MOSFETs (Metal Oxide Semiconductor Field Effect Transistors) are working in saturation and cut off modes. So the power consumption is very low compared to others.

**Less Heat Generation**
Compared to vacuum tube devices, semiconductor devices won’t emit that much heat.

**Reliable**
Microprocessors are very reliable, failure rate is very less as semiconductor technology is used.

**Portable**
Devices or computer system made with microprocessors can be made portable due to the small size and low power consumption.

### Examples of Microprocessors

- Intel 4004 – The First Microprocessor
- Intel 8085
- Intel 8086
- Intel Pentium 4
- Intel Core i7
- AMD Athlon

### Key differences between Microcontrollers & Microprocessors:

|                      | MicroConrollers                                                                                                                                                          | MicroProcessors                                                                                                                                                                                                                                     |
| -------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Structure            | CPU, Memory, I/O port and all other devices are connected on the single chip. The structure is fixed. Once it is designed the user cannot change the peripheral devices. | It has only the CPU in the chip. Other devices like I/O port, memory & timer are connected externally. The structure of the microprocessor is flexible. Users can decide the amount of memory, the number of I/O ports and other peripheral devices |
| Application          | It is used where the task is fixed & predefined. It is used in the washing machine, alarm, microwave oven etc.                                                           | It is used where intensive processing is required. It is used in personal computers, laptops, mobiles, video games, etc.                                                                                                                            |
| Programming          | The program for the microcontroller is fixed once it is designed.                                                                                                        | The program for the microprocessor can be changed for different applications. The programming of the microprocessor is difficult compared to the microcontroller.                                                                                   |
| Clock Speed          | The clock speed of the microcontroller is less. It is in terms of the MHz. it ranges between 1 MHz to 300 MHz.                                                           | The clock speed of the microprocessor is high. It is in terms of the GHz. It ranges between 1 GHz to 4 GHz.                                                                                                                                         |
| Power Consumption    | The power consumption for the microcontroller is less.                                                                                                                   | The power consumption for the microprocessor is more.                                                                                                                                                                                               |
| Peripheral Interface | The common peripheral interface for the microcontroller is I2C, SPI, and UART.                                                                                           | The common peripheral interface for the microprocessor is USB, UART, and high-speed Ethernet.                                                                                                                                                       |
| RAM                  | The volatile memory (RAM) for the microcontroller is in the range of 2 KB to 256 KB.                                                                                     | The volatile memory (RAM) for the microprocessor is in the range of 512 MB to 32 GB.                                                                                                                                                                |
| ROM                  | The hard drive or flash memory (ROM) is in the range of 32 KB to 2 MB.                                                                                                   | The hard disk (ROM) for the microprocessor is in the range of 128 GB to 2 TB.                                                                                                                                                                       |
| Bit Size             | It is available in 8-bit, 16-bit, and 36-bit.                                                                                                                            | It is available in 32-Bit and 64-bit.                                                                                                                                                                                                               |
| Size                 | The overall size of the system is small.                                                                                                                                 | The overall size of the system is large.                                                                                                                                                                                                            |
| Example              | Arduino UNO                                                                                                                                                              | Raspberry Pi                                                                                                                                                                                                                                        |
| Cost                 | The cost of the microcontroller is low compared to the microprocessor.                                                                                                   | Comparatively expensive.                                                                                                                                                                                                                            |

Here is a YouTube video you might refer to:
[Difference Between MicroController & Microprocessor](https://youtu.be/U2vBsZbgw8M). (use subtitles)
