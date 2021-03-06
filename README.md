# robot-control-panel


<!-- PROJECT IMAGE -->
<p align="center">
<img src="image/image.png" alt="image" width="500">
</p>

<!-- TABLE OF CONTENTS -->
## Table of Contents

* [About the Project](#about-the-project)
* [Interface](#interface)
* [Database](#database)
* [Implementation](#implementation)
  * [Buttons](#buttons)
  * [Files](#files)

<!-- ABOUT THE PROJECT -->
## About The Project
The aim of this project is to control a robot's move remotely without the need for direct intervention. In order to achieve this, a web interface has been designed to helps the user control the robotic arm. Moreover, this project relied on databases in the process of communication between hardware components and commands sent from a web page by PHP.

<!-- INTERFACE -->
## Interface
The interface is designed in a simple way for ease of use. It also met the main things (such as: the movement, start/stop button, A small gif to represent the current movement, and the language in the top of the page). Figure 1 for the large screen and Figure 2 for the mobile web interface (small screen).
<p align="center">
    <img src="image/interfaceA.png" alt="interface" width="700">
    <p align="center">
        figure 1: Interface.
    </p>
</p>
    <br>
<p align="center">
    <img src="image/mobileInterface.png" alt="mobile interface" width="375">
    <p align="center">
        figure 2: Mobile web interface.
    </p>
</p>
<br>
In the interface, the gif and image are used to make the current state of the robot visible to the user. see figure 3,4,5,6,7, and 8
<p align="center">
    <img src="image/stop.gif" alt="Stop state" width="150"><br>
    figure 3: Stop state.<br>
    <img src="image/start.png" alt="Start stat (English)" width="150"><br>
    figure 4: Start stat.<br>
    <img src="image/forward.gif" alt="Forward move" width="150"><br>
    figure 5: Forward move.<br>
    <img src="image/left.gif" alt="Left move" width="150"><br>
    figure 6: Left move.<br>
    <img src="image/right.gif" alt="Right move" width="150"><br>
    figure 7: Right move.<br>
    <img src="image/backward.gif" alt="Backward move" width="150"><br>
    figure 8: Backward move.<br>
</p>

<!-- DATABASE -->
## Database
This project only needs to design two tables. One is to save the current state for the robot (Table 1) and the other is to save the last action performed (Table 2).
<br/>
<p align="center"> Table 1: Moves table.
</p>

| Attribute |                   Description                      | Datatype |  PK |
|:---------:|:--------------------------------------------------:|:--------:|:---:|
|    id     |       This id used to determine which robot        |  integer | yes |
|    run    | Used to check whether the robot has started or not |  string  | no  |
|    move   |      Used to store the direction of movement       |  string  | no  |
<br/>
<p align="center"> Table 2: Last move table.
</p>

| Attribute |              Description              | Datatype |  PK |
|:---------:|:-------------------------------------:|:--------:|:---:|
|    id     | This id used to determine which tobot |  integer | yes |
|   action  |     Used to store the last action     |  string  | no  |

<!-- IMPLEMENTATION -->
## Implementation
This section explains what each button does and explains the implementation of the files.

<!-- BUTTONS -->
### Buttons
- forward, left, right, backward button: Used to Used to give a command to move in the specified direction (figure 9).
- start/stop button: Used to  give a command to start/stop move (figure 9, 10).
- ????????/english button: Used to change the language (figure 11).
<p align="center">
    <img src="image/button.png" alt="button" width="300">
    <br/>
    figure 9: Buttons
</p>
<p align="center">
    <img src="image/stopButton.png" alt="stop button" width="200">
    <br/>
    figure 10: Stop button
</p>
<p align="center">
    <img src="image/languageButton.png" alt="language button" width="200">
    <br/>
    figure 11: Language button
</p>

<!-- FILES -->
### Files
- moves.php and run.php: Used to store data in the specified table. moves.php to store move and run state, and run.php to store start and stop operation.
- runInfo.php: Used to return a json file to the javascript file with information about the whether the robot is already run or not.
- response.php: Used to give information about the current robot (php page to share data with the hardware).
- index.html: Contains the main page interface.
- index.css: Used to improve the interface.
- index.js: This file is responsible for converting the language of the main page (arabic/english). Moreover, it is responsible for taking the response from the runInfo.php file in order to change the necessary parts of the main page. Furthermore, it responsible for transferring data to the php files.
