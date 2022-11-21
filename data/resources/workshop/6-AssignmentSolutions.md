---
title: Assignment Solutions
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
orderInSidebar: 6
---

<TOCInline toc={props.toc} toHeading={3} asDisclosure />
# Day 1
## Assignment 1 Solution

As you might already know, a Wheatstone bridge is an electrical circuit used to measure an unknown electrical resistance by balancing two legs of the bridge circuit.
In the balanced state, no current passses through the bridged leg, and hence theoretically, the bridged LED should not glow. We can demonstrate this practically by connecting 5 LEDs and 5 resistors in the following way.

### Circuit connections

<Image src="/static/images/resources/Day1_Assignment/4.png" alt="df4697c32deb09cbc098f7638db80098.png" width="500" height="500" className="jop-noMdConv" />

### Explanation

Battery connections:

- The positive terminal of LED 1 and positive terminal of LED 2 are connected to each other with a Red wire, which is then connected to the positive terminal of the 9V battery.
- The negative terminal of LED 3 and negative terminal of LED 4 are connected to each other with a Black wire, which is then connected to the negative terminal of the 9V battery.

Resistor connections:

- The negative terminal of LED 1 and LED 2 are connected to resistors.
- Similarly, the positive terminal of LED 3 and LED 4 are connected to resistors.

Bridged LED connections:

- One end of the bridged LED (positive terminal in this case) is placed at a junction, which is connected to LED 1 and LED 3 through resistors.
- The other end of the bridged LED (negative terminal in this case) is connected to a resistor, which placed at a junction and is connected to LED 2 and LED 4 through resistors.

On completion of the circuit, we see that LED 1, LED 2, LED 3, LED 4 glow while LED 5 doesn't.

## Assignment 2 Solution

<EmbedItem url='https://www.youtube.com/embed/zUeYGrADu3M' />

The finished drawing of the gear should look like this
<Image src="/static/images/resources/Day1_Assignment/5.png" alt="df4697c32deb09cbc098f7638db80098.png" width="500" height="500" className="jop-noMdConv" />

# Day 2

## Assignment 1 Solution

We divide the solution in 3 parts:

1. Initialise (in setup)
2. Detecting wherther the visitor enters or exits.
3. Printing the output.

### Part 1

We initialise the count variable

```c++
int count = 0;
```

Now Initialise the sensor pins as Input

```c++
pinMode(2, INPUT);  //Sensor 1
pinMode(3, INPUT);  //Sensor 2
```

Begin Serial communication with baud rate 9600.

```c++
Serial.begin(9600);
```

### Part 2

So when the visitor is entering first the **Sensor1** would detect it and after few milliseconds **Sensor2** would detect it. So, as the Sensor1 detects we create a while loop and wait till the Sensor2 detects the person.

```c++
//if Sensor1 detects obstacle
if (digitalRead(2) == LOW){
    while (digitalRead(3) == HIGH)
    {
      //Do nothing
      //Wait for sensor2 to detect
    }
```

Now we increase the count by 1 as the person is entering

```c++
count = (count + 1 );  //Increase the count by 1
```

Follow the same for detecting exit.

1. Interchange Sensor 1 and 2
2. decrease the count

### Part 3

Add this to both the IFs of entry and exit.
We first print whether "In" or "Out"

```c++
Serial.println("In");
```

Next we print the number of people and wait for a second using delay

```c++
Serial.print("Number of people: ");
Serial.println(count);
delay(1000);
```

**Now setup the electronics and the output is ready!**
The final code would look like this.

```c++
void setup() {
  int count = 0;
  pinMode(2, INPUT);  //Sensor 1
  pinMode(3, INPUT);  //Sensor 2
  Serial.begin(9600);

}

void loop(){
  if (digitalRead(2) == LOW){
    while (digitalRead(3) == HIGH)
    {
      //Do nothing
      //Wait for sensor2 to detect
    }
    count = (count + 1 );  //Increase the count by 1
    Serial.println("In");
    Serial.print("Number of people: ");
    Serial.println(count);
    delay(1000);
  }
  if (digitalRead(3) == LOW){
    while (digitalRead(2) == HIGH)
    {
      //Do nothing
      //Wait for sensor1 to detect
    }
    count = (count - 1);  //Decrease the count by 1
    Serial.println("Out");
    Serial.print("Number of people: ");
    Serial.println(count);
    delay(1000);
  }
}
```

### Bonus Solution

Initialise the LED as output in setup.
Then, add the below code at the end of the loop. This will turn on the light if there is someone inside and turn off if the room is empty.

```c++
if(count>0){
  digitalWrite(4,HIGH);
}
else{
  digitalWrite(4,LOW);
}
```

## Assignment 2 Solution

<EmbedItem url='https://www.youtube.com/embed/qH9BAVQ1UXg' />

# Day 3

# Assignment 1 Solution

<iframe width="725" height="453" src="https://www.tinkercad.com/embed/ackUdSH6CMH?editbtn=1" frameBorder="0" marginWidth="0" marginHeight="0" scrolling="no"></iframe>

**Code:**

```c++

#define echoPin 2 // attach pin D2 Arduino to pin Echo of HC-SR04
#define trigPin 3 //attach pin D3 Arduino to pin Trig of HC-SR04

// defines variables
long duration; // variable for the duration of sound wave travel
int distance; // variable for the distance measurement

void setup() {
  pinMode(trigPin, OUTPUT); // Sets the trigPin as an OUTPUT
  pinMode(echoPin, INPUT); // Sets the echoPin as an INPUT
  Serial.begin(9600); // // Serial Communication is starting with 9600 of baudrate speed
  pinMode(10, OUTPUT);
  pinMode(11, OUTPUT);
  Serial.println("Ultrasonic Sensor HC-SR04 Test"); // print some text in Serial Monitor
  Serial.println("with Arduino UNO R3");
}
void loop() {
  // Clears the trigPin condition
  digitalWrite(trigPin, LOW);
  delayMicroseconds(2);
  // Sets the trigPin HIGH (ACTIVE) for 10 microseconds
  digitalWrite(trigPin, HIGH);
  delayMicroseconds(10);
  digitalWrite(trigPin, LOW);
  // Reads the echoPin, returns the sound wave travel time in microseconds
  duration = pulseIn(echoPin, HIGH);
  // Calculating the distance
  distance = duration * 0.034 / 2; // Speed of sound wave divided by 2 (go and back)
  // Displays the distance on the Serial Monitor
  Serial.print("Distance: ");
  Serial.print(distance);
  Serial.println(" cm");
  int writer=0;
  writer=map(distance,0,100,0,255);//google what the map function is
  analogWrite(10,distance);
  digitalWrite(11,LOW);
}
```

# Assignment 2 Solution

**Schematic:**

<Image src="/static/images/resources/Day3_Solutions/ass2.png" alt="IR" width='500' height='500' />

**Code:**

```c++
int irPin = 8;

int motorPin1 = 10;
int motorPin2 = 11;

int val = 0;
int num = 0;

void setup()
{
  pinMode(irPin,INPUT);

  pinMode(motorPin1,OUTPUT);
  pinMode(motorPin2,OUTPUT);

  Serial.begin(9600);
}

void loop()
{
  val = digitalRead(irPin);

  if(val==0)
  {
    num = val;
  }

    while(num == 0)
    {
      analogWrite(motorPin1,255);
      analogWrite(motorPin2,0);

      val = digitalRead(irPin);
      if(val==0)
      {
        num = 1;
      }
    }

    while(num == 1)
    {
      analogWrite(motorPin1,0);
      analogWrite(motorPin2,255);

      val = digitalRead(irPin);
      if(val==0)
      {
        num = 0;
      }
    }
}
```
