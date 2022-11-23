---
title: Day 2 - Workshop
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
orderInSidebar: 4
---

<TOCInline toc={props.toc} toHeading={3} asDisclosure />
## How Not To Blowup Your Laptop

The Arduino Uno has undergone many revisions, and hence the [Arduino power supply circuit](https://technobyte.org/arduino-uno-power-supply-arduino-hardware-core/) has evolved to an almost foolproof design. In this project, we will learn about the three different ways in which we can power up the Arduino Uno. While making any Arduino project, it is necessary to know these techniques, since there are instances when flexibility with regards to the power supply is required.

Modern Arduino Uno boards allow the board to have more than one source of power to be connected simultaneously. An intelligent switching circuitry ensures that the highest available voltage is selected and sent to the onboard voltage regulator, and eventually powers up the board.

<EmbedItem url='https://www.youtube.com/embed/dT7WYkca8hY' />

### Power Scheme 1

**Using the USB Cable**
The USB port of the Arduino Uno can be connected to a desktop/laptop. If the computer recognizes the device, the current supplied to the board is 500mA at 5V. If the connection is not enumerated, 100mA is supplied at 5V.

<Image src="/static/images/resources/Day2_Session1/power_1.png" alt="IR" width='500' height='500' />

### Power Scheme 2

**Using an AC to DC adapter plugged into the barrel connector**
The barrel connector can be supplied with an input of 7-12V. This is regulated to 5V by the onboard voltage regulator, and the board is powered on.

<Image src="/static/images/resources/Day2_Session1/power_2.png" alt="IR" width='500' height='500' />

### Power Scheme 3

**Using Vin pin**
Connect a 9V battery with the positive terminal connected to the Vin pin and the negative terminal connected to the GND pin. The Vin port allows an input between 7 and 12 Volts, and the current should not exceed 500mA.

<Image src="/static/images/resources/Day2_Session1/power_4.png" alt="IR" width='500' height='500' />

**NOTE - If the Vin / 5V and GND pins are being used to power up the Arduino, double-check the polarity because if the GND and 5V/Vin pins are mixed up, it can potentially damage the Arduino board.**

## Talking Digital

Now that the Arduino has an heads up about the kind of device its dealing with its time we start talking with these devices.

Most of these devices while they can be **Input/Output** can be also classified as **Digital/Analog**.

> **Digital Devices**
> Examples include push buttons/switches that can either be ON(Logic HIGH) or OFF(logic LOW), these devices have discrete set of states in which they can exist.

> **Analog Devices**
> Examples include LED, Motors, LDR these devices have a continuous set of states in which they can exist. For example an LED can stay turned ON with different amounts of brightness and a motor can be rotating at different speeds based on the control voltage.

NOTE: Some devices can be both digital and analog based on how they are interfaced.

### digitalWrite()

Since digital devices usually have only two known states either HIGH(ON) or LOW(OFF), we will be using the **[digitalWrite()](https://www.arduino.cc/reference/en/language/functions/digital-io/digitalwrite/)** function to either make a pin go HIGH or LOW, therefore turning ON or OFF the external device connected to the Arduino pin.

A pin in its HIGH state is set to 5 Volts, a pin in LOW state has 0 Volts.

**NOTE: A pin has to be set to OUTPUT using pinMode() before you can do a digitalWrite() on it**

**Turning on an LED**

```c++
void setup(){
    /* LED_BUILTIN is a special keyword for the inbuilt LED connected
    to digital pin 13 on the arduino, it is usually used for debugging */
    pinMode(LED_BUILTIN,OUTPUT); // Setting the LED as an OUTPUT device
}

void loop(){
    digitalWrite(LED_BUILTIN,HIGH); // Turning on the LED by sending it 5V
}

```

Compile and upload the above sketch, you should see a tiny orange LED near the **digital pin 13** light up, congratulations on your first step towards getting to play with digital devices.

NOTE: Upload a new **"blank sketch"** after your done staring at the LED, if you don't want it to be turned ON forever. Alternatively you can change the HIGH to LOW in the above sketch and upload it as well.

Now that we know how to turn ON an LED, let us go one step further and make it blink (Turn ON and OFF periodically).

The most intuitive way of doing this would be to first turn ON the LED and then turn it OFF and do this in a loop forever, which when translated into code looks like this

**Blinking Attempt 1**

```c++
void setup(){
    // Set the pin (D13) the LED is connected to as OUTPUT
    pinMode(LED_BUILTIN,OUTPUT);
}
void loop(){
    digitalWrite(LED_BUILTIN,HIGH); // Turn the LED ON
    digitalWrite(LED_BUILTIN,LOW); // Turn the LED OFF
}
```

Compile and upload the above sketch and try to look very closely at the LED you should see it flicker very slightly, just kidding don't strain your eyes too much you won't be able to see it blink unless your Barry Allen, to help normal mortals make sense and visualise digital signals that are usually super fast, humans have invented a few instruments (Logic Analyzers, Oscilloscope). I went ahead and connected a logic analyzer to see exactly what's happening to the LED in the above sketch.

<Image src="/static/images/resources/Day1_Session1/logic_without_delay.png" alt="IR" width='500' height='500' />

Lo and behold, the LED does blink but it stays on for a mere fraction of 3.375 microseconds and stays off for another 3.375 microseconds, welcome to the world of an Arduino Uno, the ATmega328p thanks to the 16MHz external crystal runs at such incredible speeds due to which it appears like as if the LED has never been turned OFF.

Now that we know whats causing the problem its time we try to fix it.

#### Bitsian Standard Time - (BST)

> **Bitsian Lore**
> While the whole of India follows the India Standard Time, we Bitsians unfortunately take pride in following the Bitsian Standard Time which basically is a time zone that runs anywhere from 10 to 40 minutes behind the IST. Most event timings during fests are not inclusive of BST due to which participants from other colleges often think the events are **delayed**, if only there were as lite as we are.

### delay()

In great pride, lets meet the next function **[delay()](https://www.arduino.cc/reference/en/language/functions/time/delay/)** which is like the **Bitsian Standard Time** equivalent in the world of Arduino, while it does cause delays it isn't as unpredictable as we bitsians are.

> **delay()**
> Pauses the program for the amount of time (in milliseconds) specified as parameter. (There are 1000 milliseconds in a second.)

Lets use the delay() function to stall the arduino for a second after and before changing the state of the LED.

**Blink Attempt 2**

```c++
void setup(){
    pinMode(LED_BUILTIN,OUTPUT);
}
void loop(){
    digitalWrite(LED_BUILTIN,HIGH);//turn ON the LED
    delay(1000); // Do nothing for 1 second
    digitalWrite(LED_BUILTIN,LOW); // turn OFF the LED
    delay(1000); // Do nothing for 1 second
}

```

Compile and upload the above sketch and viola, you should now finally have an blinking LED.

The above code in a logic analyzer looks like the following

<Image src="/static/images/resources/Day2_Session1/led_with_delay.png" alt="IR" width='500' height='500' />

As we can see the LED is on for almost a second, while not exact its close enough.

**NOTE: Using delay() will cause your Arduino to sit idle for the specified amount of time without doing anything, which might be fine if our only intention is to blink an LED, but the use of delay should be avoided if we want the arduino to perform multiple tasks**

### Building your first Arduino Circuit : Blinking an LED

Now that you have gained a basic understanding of digital and analog pins, let's build a simple circuit using an Arduino. For this circuit, we will be using **an Arduino, a LED, and a resistor**. The circuit connection looks as below :

<Image src="/static/images/resources/Day2_Session1/blink.png" alt="IR" width='500' height='500' />

The code of this circuit is :

```c++
void setup()
{
  pinMode(9, OUTPUT);//Declaring the mode of pin
}

void loop()
{
  digitalWrite(9, HIGH);//Providing 5V
  delay(1000); // Wait for 1000 millisecond(s)
  digitalWrite(9, LOW);//Providing 0V
  delay(1000); // Wait for 1000 millisecond(s)
}
```

By the above circuit connection and the usage of the above code, the LED will blink until the Arduino is given power.

<iframe width="400" height="253" src="https://www.tinkercad.com/embed/6NIZm9eNqsL?editbtn=1" frameBorder="0" marginWidth="0" marginHeight="0" scrolling="no"></iframe>

There maybe a lot in the above code that you might not understand at present, but still try to copy the code and replicate the circuit and run the simulation. This will help you grasp the concepts better in the later sessions.

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

#### print 'F'

The **Serial.print( )** function in Arduino prints data to the serial port. It allows you to send information from your Arduino to your computer, so that you can see the value displayed on your Serial Monitor.

**Syntax**: `Serial.print(value, format)`

_value_: It signifies the value to print, which includes any data type value.

_format_: It consists of number bases, such as OCT (Octal), BIN (Binary), HEX (Hexadecimal), etc. for the integral data types. It also specifies the number of decimal places.

You can read more about this function [here](https://www.arduino.cc/reference/en/language/functions/communication/serial/print/).

If we wish to print the data in different lines, we can use the **Serial.println()** function. This function is basically the same as the Serial.print() function (except that it prints data in different lines) and has the same syntax.

### Getting To Know Your Digital Companion

#### digitalRead()

digitalRead() function is used to read the logic state at a pin. It is capable of telling us whether the voltage at a pin is 5V or 0V, or in other words, if the pin is at logic state 1 (HIGH) or 0 (LOW).

**NOTE: A pin has to be set to INPUT using pinMode() before you can do a digitalRead() on it**.

Take a look at the following code to understand better

```c++
int ledPin = 13;  // LED connected to digital pin 13
int inPin = 7;    // pushbutton connected to digital pin 7
int val = 0;      // variable to store the read value

void setup() {
  pinMode(ledPin, OUTPUT);  // sets the digital pin 13 as output
  pinMode(inPin, INPUT);    // sets the digital pin 7 as input
}

void loop() {
  val = digitalRead(inPin);   // read the input pin
  digitalWrite(ledPin, val);  // sets the LED to the button's value
}

```

#### The IR Module

The IR sensor (or Infrared sensor) is an electronic device that senses objects around it by emitting light, which usually in the infrared spectrum. It is also capable of measuring the heat radiated by an object and can sense motion.

#### Working principle of IR Module

An IR sensor consists of two parts, the emitter circuit and the receiver circuit. This is collectively known as a photo-coupler or an optocoupler.

The emitter is an IR LED and the detector is an IR photodiode. The IR phototdiode is sensitive to the IR light emitted by an IR LED. The photo-diode’s resistance and output voltage change in proportion to the IR light received. This is the underlying working principle of the IR sensor. When the IR transmitter emits radiation, it reaches the object and some of the radiation reflects back to the IR receiver. Based on the intensity of the reception by the IR receiver, the output of the sensor is defined.

<Image src="/static/images/resources/Day2_Session1/ir_1.png" alt="IR" width='500' height='500' />

#### Distinguishing Between Black and White Colors:

It is universal that black color absorbs the entire radiation incident on it and white color reflects the entire radiation incident on it. Based on this principle, the second positioning of the sensor couple can be made. The IR LED and the photodiode are placed side by side. When the IR transmitter emits infrared radiation, since there is no direct line of contact between the transmitter and receiver, the emitted radiation must reflect back to the photodiode after hitting any object. The surface of the object can be divided into two types: reflective surface and non-reflective surface. If the surface of the object is reflective in nature i.e. it is white or other light color, most of the radiation incident on it will get reflected back and reaches the photodiode. Depending on the intensity of the radiation reflected back, current flows in the photodiode.

If the surface of the object is non-reflective in nature i.e. it is black or other dark color, it absorbs almost all the radiation incident on it. As there is no reflected radiation, there is no radiation incident on the photodiode and the resistance of the photodiode remains higher allowing no current to flow. This situation is similar to there being no object at all.

The pictorial representation of the above scenarios is shown below

<Image src="/static/images/resources/Day2_Session1/ir_2.png" alt="IR" width='500' height='500' />

#### Pins description

<Image src="/static/images/resources/Day2_Session1/ir_3.png" alt="IR" width='500' height='500' />

| Pin Name | Description         |
| -------- | ------------------- |
| VCC      | Power Supply Input  |
| GND      | Power Supply Ground |
| OUT      | Digital Output      |

#### Interfacing with Arduino

We shall now take a look at how we can use the IR sensor with an Arduino Uno and better understand the digitalRead() function.

Connections:

1.  Connect VCC of IR sensor to the 5V pin of Arduino Uno
2.  Connect GND of IR sensor to the GND pin of Arduino Uno
3.  Connect OUT pin of IR sensor to any digital pin on the Uno board. In the demonstration, we will be connecting it to digital pin 6.

Code:

```c++
void setup()
{
  pinMode(13,OUTPUT); // pin 13 on Uno set as output
  pinMode(6,INPUT); // pin 6 on Uno set as input
}
void loop()
{
  if(digitalRead(6) == LOW) // if pin 6 reads low
  {
    digitalWrite(13,HIGH); // LED connected to digital pin 13 turns ON
    delay(10); // delay time
  }
  else  // if pin 6 reads high
  {
    digitalWrite(13,LOW); // LED connected to digital pin 13 turns OFF
    delay(10); // delay time
  }
}
```

The digitalRead() function is used to read the state of pin 6 and performs the desired function based on the state of this pin.

- If digitalRead() reads LOW from the pin, pin 13 on the Uno is set to high, which turns ON the onboard LED.
- If digitalRead() reads HIGH from the pin, pin 13 on the Uno is set to low, which turns OFF the onboard LED.

# PWM

By now you must be fairly familiar with GPIO pins (Digital and Analog pins). Now let’s discuss about PWM and a special set of Digital pins, called PWM pins.

- Pulse Width Modulation, or PWM, is a technique for getting analog results with digital means.
- Digital control is used to create a square wave, a signal switched between on and off. This on-off pattern can simulate voltages in between the full Vcc of the board (e.g., 5 V on Uno, 3.3 V on a MKR board) and off (0 Volts) by changing the portion of the time the signal spends on versus the time that the signal spends off.
- The duration of "on time" is called the pulse width. To get varying analog values, you change, or modulate, that pulse width.
- If you repeat this on-off pattern fast enough with an LED for example, the result is as if the signal is a steady voltage between 0 and Vcc controlling the brightness of the LED.

### Duty Cycle

When the Arduino sends a $5V$ signal we can call it “on time”. Now Duty Cycle is defined as the ratio of on time by total time :

> Duty Cycle = t<sub>ON</sub>/(t<sub>ON</sub>+t<sub>OFF</sub>)

The Average voltage is :

> V<sub>average</sub> = $5V$ X Duty Cycle

Thus, Duty Cycle specifically describes the percentage of time a digital signal in ON (5V) over an interval or period of time.

<Image src="/static/images/resources/Day2_Session1/pwm_1.png" alt="IR" width='500' height='500' />

### PWM Pins

PWM pins are special-purpose Digital pins that are capable of sending voltage signals between $0V$ and $5V$ too.

Let us consider a simple circuit consisting of an LED, a resistor, a pushbutton, and an Arduino. When the pushbutton is pressed, the LED turns ON because it receives a 5V voltage. When the pushbutton is released, the LED turns OFF because it does not receive any voltage as the circuit is broken, or in other words, it receives 0V. This is demonstrated below using an oscilloscope.

_When pushbutton is pressed, 5V output_

<Image src="/static/images/resources/Day2_Session1/pwm_2.png" alt="IR" width='500' height='500' />

_When pushbutton is released, 0V output_

<Image src="/static/images/resources/Day2_Session1/pwm_3.png" alt="IR" width='500' height='500' />

Now let's say you want to control the brightness of the LED instead of having a simple ON-OFF circuit. This can be achieved using the PWM pins on the Arduino, by varying the portion of time for which the signal stays ON (5V) versus the time for which the signal stays OFF (0V). This is demonstrated below using an oscilloscope.

<Image src="/static/images/resources/Day2_Session1/pwm_4.png" alt="IR" width='500' height='500' />

#### Where are they present on the Arduino?

Identifying a PWM pin is an easy task. There are 6 PWM pins in total in an Arduino (3,5,6,9,10,11). If we observe we can see that the above-mentioned pins are accompanied by a ‘~’ symbol. This is the indication saying that a particular pin is a PWM pin. See the picture below :

<Image src="/static/images/resources/Day2_Session1/pwm_5.png" alt="IR" width='500' height='500' />

#### Sending Analog Signals using PWM pins

For usage purposes, the PWM pins are of $8-bit$ resolution is used. In this, voltages varying between $0V$to $5V$ are divided into 256 (2<sup>8</sup>, hence $8-bit$ resolution) parts, such that $0V$ is $0$ and $5V$ is $255$. Using this we can send analog signals through PWM pins. As to how we do that will be covered in the upcoming topics.

For further clarity on PWM check out this [video](https://www.youtube.com/watch?v=yhpk4V9w-ZM).

# The Ancient Art of Analog

### analogRead()

#### Description

analogRead() is an inbuilt function in the Arduino IDE which takes the name of the analog pin to be read as its parameter and reads the value of that specified analog pin. This is facilitated by a built in 10-bit ADC(Analog to Digital Convertor). The Analog pins on the Arduino UNO are shown in the diagram below.

<Image src="/static/images/resources/Day2_Session1/an_1.png" alt="IR" width='500' height='500' />

#### What is an ADC?

An ADC converts an analog signal picked up by the pin to a digital signal which can further be processed by the microcontroller. The input signals are stored electronically in binary within the ADC.The conversion is achieved by quantising the input signal into discrete values. The resolution of an ADC indicates the number of discrete values it can produce over the allowed range of analog input values. The Arduino UNO is equipped with a 10-bit analog to digital converter. This means that it will map input voltages between 0 and 5V into integer values between 0 and 1023. This yields a resolution between readings of: 5 volts / 1024 units or, 0.0049 volts (4.9 mV) per unit.

<Image src="/static/images/resources/Day2_Session1/an_2.png" alt="IR" width='500' height='500' />

<Image src="/static/images/resources/Day2_Session1/an_3.png" alt="IR" width='500' height='500' />

#### Syntax

`analogRead(analogPin)`

**Parameter**: The name of the analog input pin to read from. The analog pins vary from board to board. In the case of the Arduino UNO it is from A0 to A5.

**Return Value**: It returns the analog reading of the pin

**Code**:

```c++
int analogPin = A2; // A2 chosen as analog pin
int val = 0; // variable initialized to store analog read

void setup(){
    pinMode(analogPin, INPUT);
    Serial.begin(9600);
}

void loop()
{
    val = analogRead(analogPin);
    Serial.println(val);
    delay(500);
}
```

Watch this video for a better understanding - [Video](https://www.youtube.com/watch?v=5TitZmA66bI)

#### LDR - An analog sensor

A Light Dependent Resistor (a.k.a photoresistor or LDR) is a device whose resistivity varies with the incident electromagnetic radiation. Hence, they are light-sensitive devices. Also called photoconductors photoconductive cells or simply photocells. When the light of enough energy falls on it, the number of electrons available for the conduction increases proportional to the intensity of light

Follow these resources for a circuit diagram and a better understanding.

<iframe width="725" height="453" src="https://www.tinkercad.com/embed/j79CRtmYT1A?editbtn=1" frameBorder="0" marginWidth="0" marginHeight="0" scrolling="no"></iframe>

[Video](https://www.youtube.com/watch?v=2fvXW4OEWLE)

#### Project using LDR, LED and Arduino

```c++
int ldr = A0; // Set A0 (analog input) for LDR
int value = 0;

void setup(){
    pinMode(3, OUTPUT);
    Serial.begin(9600);
}

void loop()
{
    value = analogRead(ldr); // Reads the value of LDR
    Serial.print("LDR Value is: "); // Prints the value of LDR to Serial Monitor
    Serial.println(value);

    if(value < 200)
    {
        digitalWrite(3, HIGH); // Makes the LED glow in dark
    }
    else
    {
        digitalWrite(3, LOW); // Turns the LED OFF in light
    }
}
```

<iframe width="725" height="453" src="https://www.tinkercad.com/embed/bzoSiWt6QLX?editbtn=1" frameBorder="0" marginWidth="0" marginHeight="0" scrolling="no"></iframe>

### analogWrite()

#### Description

analogRead is an inbuilt function in the Arduino IDE which takes the name of the analog pin to which an analog value has to be written as its parameter and a duty cycle which takes values between 0 and 255.

#### Parameters

1.  The Arduino pin to write to
2.  The Duty Cycle between 0 and 255

#### Return Value

There is no return value

#### Syntax

```c++
int ledPin = 9; // LED connected to digital pin 9
int analogPin = 3; // potentiometer connected to analog pin 3
int val = 0; // variable to store the read value

void setup(){
    pinMode(ledPin, OUTPUT); // sets the pin as output
}

void loop(){
    val = analogRead(analogPin); // read the input pin
    analogWrite(ledPin, val / 4); // analogRead values go from 0 to 1023, analogWrite values from 0 to 255
}

```

You can read more about this function [here](https://www.arduino.cc/reference/en/language/functions/analog-io/analogwrite/).
Also, you can watch this [video](https://www.youtube.com/watch?v=YfV-vYT3yfQ) for a better understanding.

#### Dimming an LED using analogWrite()

```c++
int brightness = 0;

void setup(){
    pinMode(9, OUTPUT);
}

void loop()
{
    // increase brightness from 0 to 255
    for (brightness = 0; brightness <= 255; brightness += 5)
    {
        analogWrite(9, brightness);
        delay(30);
    }
    // decrease brightness from 255 to 0
    for (brightness = 255; brightness >= 0; brightness -= 5)
    {
        analogWrite(9, brightness);
        delay(30);
    }
}
```

<iframe width="600" height="453" src="https://www.tinkercad.com/embed/5OJLL9YWGF9?editbtn=1" frameBorder="0" marginWidth="0" marginHeight="0" scrolling="no"></iframe>

# Motors and Motor Drivers

### About

In everyday life, we see rotating devices like a drill, wheels in a vehicle, and a fan that make our tasks easier because their ability to "turn" helps in these cases. But what is the cause that drives them to turn? Well, this cannot be the sole job of electrical or manual work but is a combined effort of certain laws that lead to an electric motor's principle.

### Electric Motor

Energy transformation is the basic principle of an electric motor, and it is pretty evident that in this case, it is from electrical energy to the energy that leads to the motion of a rotor which indeed is mechanical. But what is the cause of the rotation? There has to be a force responsible for this turning effect known as torque. Here, the interrelation between electric current and magnetism helps. It is a known fact that a current-carrying conductor experiences a force in a magnetic field and when it is a conducting loop, it experiences a torque! So torque of a motor is indeed an important factor for selecting a motor for our purpose.

#### Components of an Electric Motor

The basic parts include:

- Rotor
- Stator
- Brush
- Commutator
- Armature

<Image src="/static/images/resources/Day3_Session1/DC_motor_parts.png" alt="IR" width='500' height='500' />

#### Working

<Image src="/static/images/resources/Day3_Session1/DC_motor_working.png" alt="IR" width='500' height='500' />

It is essential to understand that providing power to a motor depends on its size and complexity. A smaller motor can be manually supplied power through a battery, whereas a larger motor, the ones that are used in industries and other high power-driven motors, requires a mechanism which, when energized, connects its terminals to the high power supply. This method of starting a motor is called a "direct on line starter method."

Another fact about these motors is that they draw a huge amount of current to go to the full-speed state from the initial state (to overcome inertia). This leads to drawing a huge amount of starting current from the power supply (for higher starting voltage across the terminals), which may cause damage to the circuits. So "adjustable speed-drives" and "current limiting resistors" are used to prevent problems to the circuits and the motor itself.

#### Types of control in a system

Now that we got a good idea about motors let us discuss the two control systems: open-loop and closed-loop systems.
The reason behind discussing these is to know about how control is established in various systems.

#### 1) Open-loop system:

○ This is used when the system under consideration is not complex and need not require that much supervision for its working—for example, the lighting in your room, we just turn the lights on, but we do not ensure if it is working with the same brightness for every time interval. The same is the case with ordinary DC Motor; there is no special mechanism to ensure if it is maintaining a constant rpm or torque for every time interval. If it is fine, it works, else it undergoes certain problems.

<Image src="/static/images/resources/Day3_Session1/open_loop_system.png" alt="IR" width='500' height='500' />

The above picture shows an open-loop system.
● Commanded variable: The output that you desire.
● Controller: Arduino or any other controller
● Actuator: The device which actually does the process or which enables other devices to work on the process
● Process: The task which we want to perform(here, rotation of the motor)
● Controlled variable: The Actual result/output the we get

#### 2) Closed-loop system:

○ It is clear that in an open-loop schematic, there can be a deviation of the "controlled variable" from the "commanded variable" called the "error variable". This error can cause undesirable consequences when working on huge projects. Here comes the closed-loop system. The special feature of this is that there is a feedback mechanism with the help of sensors that lets the controller know about the situation of the controlled variable with which we can measure the error factor and make our output as desirable as possible.

<Image src="/static/images/resources/Day3_Session1/closed_loop_system.png" alt="IR" width='500' height='500' />

#### Other types of Motors

#### 1) Servo Motor

- This motor follows a closed-loop system. So it has got the advantage of precision. This motor provides high torque along with the precise position of the shaft, which gives its feedback control.
  <Image src="/static/images/resources/Day3_Session1/servo_working.png" alt="IR" width='500' height='500' />

- The above is the schematic of the servo motor. It is to be noted that input is given to it in the form of PWM signals (pulse-width modulation) which leads to the position control of the motor (Of Course, digital signals also can be used for its position control). Also the position sensors in this closed-loop control are generally potentiometers.
- This is not all; servos can also be encoded depending on the complexity of the task that is involved making them gain access to speed and torque feedback along with regular position control. And here comes the actual problem of using these complex closed-loop systems when it is essential to perform the task but such skilled workers are not available. Skilled programmers are essential for optimizing the internal algorithms of closed-loop systems which is not an easy task.

So there is another type of motor that is in much use in the real world, the stepper motor.

#### 2) Stepper Motor

This motor utilizes an open-loop system.

- Stepper motors have a permanent magnetic rotating shaft called a rotor and stationary electromagnets surrounding the rotor called the stator.
  <Image src="/static/images/resources/Day3_Session1/stator_rotor.png" alt="IR" width='500' height='500' />

- Stepper motors have typically 50 to 100 electromagnet poles (pairs of north and south poles) generated either by a permanent magnet or an electric current.
- The greater the number of poles the more is the precision.

There are two main ways in which a stepper motor can be driven:

#### Full-step mode:

The rotor turns through a bigger angle at once. This can be done by energizing either one or two phases( in general) at a time.

<Image src="/static/images/resources/Day3_Session1/full_step_mode.png" alt="IR" width='500' height='500' />

It can be seen that the torque in two phase on mode is higher than that of one phase one mode.

#### Microstepping:

This mode is essential when precision is an important factor in the process. In this case, the rotor is controlled by two phases such that the current in both of them is varied such that the magnetic field produced keeps varying with time, and so is the torque acting on the rotor. This is done such that the rotor moves through small angles( depending in the magnitude of the current and the way you vary it).

<Image src="/static/images/resources/Day3_Session1/microstepping.png" alt="IR" width='500' height='500' />

In general, Servo Motors run more smoothly than a stepper motor except when micro stepping are used.

A Servo Motor will typically provide 2-3 times the speed of a typical stepper motor as the Servo Motor speed increases, the torque of the Servo Motor remains constant, thus performing better than a stepper motor at higher speeds usually above 1000 RPM

### H-Bridge

The direction in which the motor rotates is expected to change depending on the situation and this cannot be always manually changed. Here comes the role of a H-Bridge which enables the change in direction of the motor by changing the state of the switches in its circuit which can be accomplished by logical HIGH or LOW to the respective switch.

<Image src="/static/images/resources/Day3_Session1/hb_1.png" alt="IR" width='500' height='500' />

It is evident from the above diagram about the way in which this works. When S1 and S4 are closed (S2 and S3 being open), the motor rotates in one direction while on closing S2 and S3 (keeping S1 and S4 open) the motor turns in the other direction.

<Image src="/static/images/resources/Day3_Session1/hb_2.png" alt="IR" width='500' height='500' />

<Image src="/static/images/resources/Day3_Session1/hb_3.png" alt="IR" width='500' height='500' />

<Image src="/static/images/resources/Day3_Session1/hb_4.png" alt="IR" width='500' height='500' />

This above diagram shows shorting of circuit which may lead to the burning of H-Bridge.

Also it is not advisable to drive the motor and change the direction at the same time.

<Image src="/static/images/resources/Day3_Session1/hb_5.png" alt="IR" width='500' height='500' />

### Motor Driver

A motor driver at a basic level is an integrated circuit chip used to control a motor as per given instructions with the help of H Bridge topology in the case of the L293D.

Well, lets break this down and look into it closely one at a time.

#### Why do we need a motor driver?

- In the world of autonomous technology, we would require efficient communication between microcontrollers like the arduino and a motor which draws a huge amount of current to work at the desired rate. Meanwhile, micro controllers operate on low level voltage/current (Eg: Arduino has an operating voltage of 5V).
- Thus, to bridge this gap of power output from the arduino to the motor, a motor driver can act as the interface taking in the low current signals from the Arduino and converting them into higher current signals which can help drive the motor as required.
- Thus, we can control the speed and direction of rotation of motor based on voltage provided.

<Image src="/static/images/resources/Day3_Session1/motor_driver_1.png" alt="IR" width='500' height='500' />

#### The L293D motor driver

We will now specifically look into the L293D

<Image src="/static/images/resources/Day3_Session1/L293D_1.png" alt="IR" width='500' height='500' />

- It is a commonly used and a popular 16 pin motor driver IC.
- It is capable of running 2 motors at the same time and works on the principle of a H Bridge.

#### Working principle

The IC works on the principle of H-Bridge (this can be understood on checking how the IC conveys signals to the motor).

<Image src="/static/images/resources/Day3_Session1/L293D_working.png" alt="IR" width='500' height='500' />

- As we see, VCC2 is the pin that drives the motor at its required voltage and VCC1 is for charging the 16-pin IC which is connected to the Arduino 5V pin. One important point is that whenever there are any components in a project, we need to provide a common ground to them. Same is the case here, all the ground pins in the circuit are to be connected with the GND pin of the Arduino.
- It should also be noted that the enable pins are going to control the speed of the rotation through the PWM signals (Pulse width modulation) which can be established by connecting them to the PWM digital pins on Arduino.

[Reference](https://components101.com/articles/what-is-motor-driver-h-bridge-topology-and-direction-control)

#### L293D PIN DESCRIPTION

The following image shows the pinout of the L293D.

<Image src="/static/images/resources/Day3_Session1/L293D_pins.png" alt="IR" width='500' height='500' />

Understanding this is very crucial to facilitate its usage in the circuit.

| Pin Number | Pin Name   | Description                                                        |
| ---------- | ---------- | ------------------------------------------------------------------ |
| 1          | Enable 1,2 | This pin enables the input pin Input 1(2) and Input 2(7)           |
| 2          | Input 1    | Directly controls the Output 1 pin, Controlled by digital circuits |
| 3          | Output 1   | Connected to one end of Motor 1                                    |
| 4          | Ground     | Ground pins are connected to ground of circuit (0V)                |
| 5          | Ground     | Ground pins are connected to ground of circuit (0V)                |
| 6          | Output 2   | Connected to another end of Motor 1                                |
| 7          | Input 2    | Directly controls the Output 2 pin, Controlled by digital circuits |
| 8          | Vcc2 (Vs)  | Connected to Voltage pin for running motors (4.5V to 36V)          |
| 9          | Enable 3,4 | This pin enables the input pin Input 3(10) and Input 4(15)         |
| 10         | Input 3    | Directly controls the Output 3 pin, Controlled by digital circuits |
| 11         | Output 3   | Connected to one end of Motor 2                                    |
| 12         | Ground     | Ground pins are connected to ground of circuit (0V)                |
| 13         | Ground     | Ground pins are connected to ground of circuit (0V)                |
| 14         | Output 4   | Connected to another end of Motor 2                                |
| 15         | Input 4    | Directly controls the Output 4 pin, Controlled by digital circuits |
| 16         | Vcc1 (Vss) | Connected to +5V to enable IC function                             |

Few points to be noted:

- There is a notch on the top of the IC, to guide us with proper connections.
- Input pins: The ones to which we give signals
- Output pins: The ones connected to the motors.
- The enable pins are there to “enable” the output pins. If enable pins are set to logic HIGH then the output pins match up to the input pins.
- If the enable pins are set to logic LOW then regardless of logic states of input pins, the output pins are always set to zero.

[Reference](https://components101.com/ics/l293d-pinout-features-datasheet)

You can also take a look at the [datasheet](https://components101.com/asset/sites/default/files/component_datasheet/L293D%20Datasheet.pdf) of L293D for more information.

Now that we have a fair idea of the the L293D, lets use it in a circuit to grasp the complete picture

#### Using L293D with motors and Arduino

<EmbedItem url='https://www.youtube.com/embed/y7WFVobzf1M' />

#### _Circuit on TinkerCAD_

<iframe width="725" height="453" src="https://www.tinkercad.com/embed/l1ABNFeVqaz?editbtn=1" frameBorder="0" marginWidth="0" marginHeight="0" scrolling="no"></iframe>

#### Code

```c++
int speedPinR = 5; // connect enable pin 1,2
int dirR1 = 4; // connect input pin 1 which controls output pin 1
int dirR2 = 2; // connect input pin 2 which controls output pin 2
int speedPinL = 6; // connect enable pin 3,4
int dirL1 = 7; // connect input pin 3 which controls output pin 3
int dirL2 = 12; // connect input pin 4 which controls output pin 4
const int mSpeedL = 79; // to maintain approx 5000rpm for left wheel
const int mSpeedR = 79; // to maintain approx 5000rpm for right wheel
int dt = 1000; // delay time

// Output pins 1,2 connected to right motor
// Output pins 3,4 connected to left motor

void setup()
{
  Serial.begin(9600);

// set pinMode for all pins
  pinMode(speedPinR, OUTPUT);
  pinMode(dirR1, OUTPUT);
  pinMode(dirR2, OUTPUT);
  pinMode(speedPinL, OUTPUT);
  pinMode(dirL1, OUTPUT);
  pinMode(dirL2, OUTPUT);
}

void loop()
{
  digitalWrite(dirR1, HIGH); // input pin 1 set to high
  digitalWrite(dirR2, LOW); // enable pin 1,2 set to low
  analogWrite(speedPinR,mSpeedR); // 5000rpm FOR RIGHT

  digitalWrite(dirL1, HIGH); // input pin 3 set to high
  digitalWrite(dirL2, LOW); // enable pin 3,4 set to low
  analogWrite(speedPinL,mSpeedL); // 5000rpm FOR LEFT

  delay(dt); // set delay time
 }

```

[TinkerCAD Simulation](https://www.tinkercad.com/things/l1ABNFeVqaz)

Refer to the above to get an idea on how to make the connections and how to work with the L293D.

Here is a very useful video by Paul MCWhorter. Do give it a watch!
https://www.youtube.com/watch?v=fPLEncYrl4Q

<Image src="/static/images/resources/Day3_Session1/schematic99.png" alt="IR" width='500' height='500' />

#### Code

```c++
int dirR1 = 11;
int dirR2 = 10;
int dirL1 = 9;
int dirL2 = 6;
int mSpeedL = 250;
int mSpeedL1 = 0;
int mSpeedR = 250;
int mSpeedR1 =0;
int dt=1000; // delay time

void setup()
{
  Serial.begin(9600);

// set pinMode for all pins
  pinMode(dirR1, OUTPUT);
  pinMode(dirR2, OUTPUT);
  pinMode(dirL1, OUTPUT);
  pinMode(dirL2, OUTPUT);
}

void loop()
{
  analogWrite(dirR1,mSpeedR);
  analogWrite(dirR2,mSpeedR2);
  analogWrite(dirL1,mSpeedL);
  analogWrite(dirL2,mSpeedL2);

  delay(dt); // set delay time
 }
```

## Servo

### About

A servo motor is a type of motor that can rotate with great precision. Normally this type of motor consists of a control circuit that provides feedback on the current position of the motor shaft, this feedback allows the servo motors to rotate with great precision. If you want to rotate an object at some specific angles or distance, then you use a servo motor

It has 3 pins, 1. Power, 2. Ground and 3. Signal

<Image src="/static/images/resources/Servo-Motor.jpg" alt="IR" width='600' height='500' />

This is a simple Servo Arduino code, that takes input from a potentiometer which gives you input between 0 and 1023 since it's an analogRead. Then we scale down 1024 to 180 and give the servo an angle at which it should rotate to

### Knob

```c
#include <Servo.h>

Servo myservo;  // create servo object to control a servo

int potpin = 0;  // analog pin used to connect the potentiometer
int val;    // variable to read the value from the analog pin

void setup() {
  myservo.attach(9);  // attaches the servo on pin 9 to the servo object
}

void loop() {
  val = analogRead(potpin);            // reads the value of the potentiometer (value between 0 and 1023)
  val = map(val, 0, 1023, 0, 180);     // scale it to use it with the servo (value between 0 and 180)
  myservo.write(val);                  // sets the servo position according to the scaled value
  delay(15);                           // waits for the servo to get there
}
```

<Image src="/static/images/resources/arduino.png" alt="IR" width='600' height='400' />

### Sweep

You can also make it move through the 180 degrees

```c
#include <Servo.h>

Servo myservo;  // create servo object to control a servo
// twelve servo objects can be created on most boards

int pos = 0;    // variable to store the servo position

void setup() {
  myservo.attach(9);  // attaches the servo on pin 9 to the servo object
}

void loop() {
  for (pos = 0; pos <= 180; pos += 1) { // goes from 0 degrees to 180 degrees
    // in steps of 1 degree
    myservo.write(pos);              // tell servo to go to position in variable 'pos'
    delay(15);                       // waits 15ms for the servo to reach the position
  }
  for (pos = 180; pos >= 0; pos -= 1) { // goes from 180 degrees to 0 degrees
    myservo.write(pos);              // tell servo to go to position in variable 'pos'
    delay(15);                       // waits 15ms for the servo to reach the position
  }
}
```

## Ultrasonic Sensor HC-SR04

### About

The HC-SR04 ultrasonic sensor is used to calculate the distance of an obstacle in the path of the bot. It consists of four pins: VCC, trigger, echo & ground. It also includes a transmitter and receiver, which transmit and receive the US signals, respectively.

<Image src="/static/images/resources/Day3_Session1/HC-SR04_1.png" alt="IR" width='500' height='500' />

### Working Principle

The HC-SR04 sensor detects the travel time of a signal from transmission till it's received. The sensor sends out a ping, and an echo is heard. The duration of travel of the signal is then measured by the sensor.
When the Trig pin of the sensor receives a pulse of HIGH for at least 10 microseconds, it will initiate the sensor, which will transmit out 8 cycles of ultrasonic burst and wait for the reflected ultrasonic burst. When the sensor detects US signals from the receiver, it will set the Echo pin to HIGH and delay for a period proportional to distance.

The sensor transmits 8 cycles of ultrasonic bursts since the receiver needs to hear enough cycles to reach its full output and set the Echo pin to HIGH.

### Pins Description

- VCC: This powers the sensor with +5V and is connected to the 5V supply of the Arduino.
- Trigger: It is an Input pin. It is connected to any digital pin on the Arduino. On sending a HIGH signal to this pin, the transmitter sends out US signals until a LOW signal is sent.
- Echo: It is an Output pin. It is connected to any digital pin on the Arduino. This pin goes HIGH for the duration equal to the time taken by the receiver to receive US signals after being transmitted.
- Ground: This pin is connected to the ground of the Arduino.

The following image shows the connection of the terminals of the sensor to the Arduino:

<Image src="/static/images/resources/Day3_Session1/HC-SR04_2.png" alt="IR" width='500' height='500' />

[Reference](https://components101.com/sensors/ultrasonic-sensor-working-pinout-datasheet)
You can also refer to the [datasheet](https://cdn.sparkfun.com/datasheets/Sensors/Proximity/HCSR04.pdf) for more information.

### Distance Calculation

As described earlier, the HC-SR04 sensor sends out ultrasonic signals and receives the echo, then measures the pingTimeTravel of the signal.

We know, $Speed = Distance \hspace{0.1cm} / \hspace{0.1cm}Time$

Sound waves travel at a speed of about $340 m/s$ at room temperature.
$\therefore Speed = 340 m/s$

The time given by HC-SR04 is in microseconds. We need to divide the time by 2 since this is the time taken by the sound waves from the transmitter to the object back to the receiver.

<Image src="/static/images/resources/Day3_Session1/HC-SR04_distance.png" alt="IR" width='500' height='500' />

Thus, the formula becomes,
$Distance = 340 * (pingTravelTime / 2)$

You can watch the following videos to understand better:

- [Measuring Speed of Sound With HC-SR04 Sensor](https://www.youtube.com/watch?v=BTMMNsL0_b0)
- [Measuring Distance With HC-SR04 Ultrasonic Sensor](https://www.youtube.com/watch?v=2hwrDSVHQ-E)

### Code

<Image src="/static/images/resources/Day3_Session1/HC-SR04_arduino.png" alt="IR" width='500' height='500' />

```c++
int trigPin = 12; // connect trig pin of HC-SR04
int echoPin = 11; // connect echo pin of HC-SR04
int pingTravelTime; // initialize variable

void setup() {
    pinMode(trigPin,OUTPUT); // trig pin set as OUTPUT
    pinMode(echoPin,INPUT); // echo pin set as INPUT
    Serial.begin(9600);
}

void loop() {
    digitalWrite(trigPin,LOW); // trig pin set to low
    delayMicroseconds(10); // delay time in microseconds

    digitalWrite(trigPin,HIGH); // trig pin set to high
    delayMicroseconds(10); // delay time in microseconds
    digitalWrite(trigPin,LOW); // trig pin set to low

    pingTravelTime = pulseIn(echoPin,HIGH); // pulseIn() function explained below
    delay(25); // delay time
    Serial.println(pingTravelTime); // print pingTravelTime on Serial Monitor
}
```

<iframe width="725" height="453" src="https://www.tinkercad.com/embed/cGqyGisEibf?editbtn=1" frameBorder="0" marginWidth="0" marginHeight="0" scrolling="no"></iframe>

### pulseIn() Function

The pulseIn() function measures the time period of either HIGH or LOW pulse input signal.
The syntax of pulseIn() function is:
`pulseIn(pin, value)`

- pin: the number of the pin on which the pulse is to be read.
- value: the value of the pulse, either HIGH or LOW.

In the above code, the pin is the echoPin, and the value is HIGH, i.e. the function measures the time period of the HIGH pulse input signal on the echoPin.

Hence it indirectly measures the travel time of the signal. Thus the pingTimeTravel can be calculated using the pulseIn() function.

<EmbedItem url='https://www.youtube.com/embed/M-UKXCUI0r' />
