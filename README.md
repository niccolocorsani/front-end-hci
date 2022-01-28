Eseguire il comando

npm i --legacy-peer-deps

Eseguire il comando

ionic serve

gitignore : https://theapache64.github.io/git-do-not-ignore/ for ignore file




# Overview

- **Academic Year**: 2021-2022
- **Project Title**: Client consultant interaction application
- **Students**: Niccolò Corsani
- **CFUs**: 9

The Project concerns the development of a web application for the management, saving and manipulation of different types of data useful for the interaction between generic customers and consultants. In particular, the functions made available by the application are those of: saving data that identify a customer and a consultant, booking an appointment between them and displaying the consultants' position on a map.

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

