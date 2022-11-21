---
title: Post Workshop - Obstacle Avoidance Robot
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
orderInSidebar: 9
---

<TOCInline toc={props.toc} toHeading={3} asDisclosure />

# Obstacle Avoiding Robot

Obstacle Avoiding Robot is an intelligent device which can automatically sense the obstacle in front of it and avoid them by turning itself.

You will need some components to make it ◉‿◉

- Arduino UNO
- Motor and Wheel
- Ultrasonic Sensor (HC Sr-04)
- Motor Driver (L293D)
- Jumper Cables
- Robot Chassis
- Battery And Holder

We need to make the following connections.

<Image src="/static/images/resources/Day3_Solutions/Obstacle_avoidance.jpeg" alt="IR" width='500' height='500' />

The robot would keeping moving straight until it detects an obstacle. Then it would move backwards and take a turn to continue the path.
Attached below is the code.

```c++
int trigPin = 9;      // Trig Pin Of HC-SR04
int echoPin = 8;     // Echo Pin Of HC-SR04
int l1 = 10; // Motor Pins
int l2 = 11;
int r1 = 12;
int r2 = 13;
long duration, distance;

void setup() {
  Serial.begin(9600);
  pinMode(l1, OUTPUT); // Set Motor Pins As O/P
  pinMode(l2, OUTPUT);
  pinMode(r1, OUTPUT);
  pinMode(r2, OUTPUT);
  pinMode(trigPin, OUTPUT); // Set Trig Pin As O/P To Transmit Waves
  pinMode(echoPin, INPUT); //Set Echo Pin As I/P To Recieve Reflected Waves
}

void loop() {

  digitalWrite(trigPin, LOW);
  delayMicroseconds(2);
  digitalWrite(trigPin, HIGH); // Transmit Waves For 10us
  delayMicroseconds(10);
  duration = pulseIn(echoPin, HIGH); // Recieve Reflected Waves
  distance = duration / 58.2; // Get Distance
  delay(10);
  if (distance > 20) // Condition For Absence Of Obstacle
  {
    digitalWrite(r2, HIGH); // Move Forward
    digitalWrite(r1, LOW);
    digitalWrite(l2, HIGH);
    digitalWrite(l1, LOW);
  }

  if (distance < 20) // Condition For Presence Of Obstacle
  {
    digitalWrite(r2, LOW); //Stop
    digitalWrite(r1, LOW);
    digitalWrite(l2, LOW);
    digitalWrite(l1, LOW);
    delay(500);
    digitalWrite(r2, LOW); // Move Backward
    digitalWrite(r1, HIGH);
    digitalWrite(l2, LOW);
    digitalWrite(l1, HIGH);
    delay(500);
    digitalWrite(r2, LOW);  //Stop
    digitalWrite(r1, LOW);
    digitalWrite(l2, LOW);
    digitalWrite(l1, LOW);
    delay(100);
    digitalWrite(r2, HIGH); // Move Left
    digitalWrite(r1, LOW);
    digitalWrite(l2, LOW);
    digitalWrite(l1, LOW);
    delay(500);
  }

}
```
