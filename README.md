Eseguire il comando

npm i --legacy-peer-deps

Eseguire il comando

ionic serve

gitignore : https://theapache64.github.io/git-do-not-ignore/ for ignore file




# Overview
*In this section give a broad overview of the project goals and plan*

- **Academic Year**: 2019-2020
- **Project Title**: Cross-device interaction between smartphones and interactive surfaces
- **Students**: John Smith and Marco Rossi 
- **CFUs**: 9 (or 6)

In this project we will re-implement the underlying technology and some of the interaction modalities from the literature on cross-device interaction [1]. We will implement a Kivy-based subsystem for detecting touch events with smartphones on an interactive table. That is, we will detect when, where, and (some elements) of how a user physically touches the table with his smartphone. Key to this low-level subsystem will be the association of tap events with specific smartphones. This will be done using accelerometer and gyroscope measurements as described in \[1\]. Our implementation will require a both a mobile smartphone application, and a software component integrated in Kivy GUI application. Selected interaction modalities from [1] will be implemented to demonstrate the potential of this technology.

# Tools and Techniques
*In this section list the tools and any special techniques you will employ.*

The main tools and techniques we will employ are:
- **Kivy**: for the Android and GUI application running on the table \[2\].
- **ZeroMQ**: for communication between Android application and GUI \[3\].
...

# Expected Outcomes
*Here you should itemize the specific project outcomes.*

We expect the following outcomes from this project:
- A server component integrable in Kivy GUI applications. This component will serve as the main point of entry for mobile phone interactions with the table.
- An Android application supporting detection of interaction events. This application will read accelerometer (and possibly compass and gyroscope) data and stream it to the interaction server.
- An application demonstrating touch detection and phone association. This GUI application will demonstrate visually how smartphone interactions are detected and associated with a specific phone.
An application demonstrating bi-directional file transfer. This demonstrator will show-off a use case for cross-device interactions.

After a final phase of evaluation, we will decide whether to release this system on Github as part of the Kivy Garden.

# Summary
*Finally, here give a summary of the project with some indication of impact.*
The purpose of this project is to experiment with cross-device interaction and determine how feasible it can be in practice. Our goal is to consider implementation strategies and experiment with at least one use-case scenario. If successful, the prototype software components developed in this project could foster cross-device interaction in real application in the future.

# Project Documents
*Put links here to the **final report** and **presentation** for the project when finished.*

# Bibliography
*Be sure to include any relevant links to tools or bibliographic references to the literature.*

\[1\] Schmidt, D., Seifert, J., Rukzio, E. and Gellersen, H., 2012, June. “A cross-device interaction style for mobiles and surfaces.” In: Proceedings of the Designing Interactive Systems Conference (pp. 318-327). ACM.

\[2\] https://kivy.org/#home

\[3\] https://zeromq.org/

