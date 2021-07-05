
  
  

![LICENSE](https://img.shields.io/badge/license-MIT-red) ![Next Version](https://img.shields.io/badge/npm-6.14.13-blueviolet) ![Next Version](https://img.shields.io/badge/node-14.17.3-green) 


## Table of contents

1. [Introduction](#introduction)
2. [Technologies](#technologies)
3. [Getting started](#getting-started)
4. [Screenshots](#screenshots)
5. [License](#license)

## Introduction

<p align="center"><img src="https://raw.githubusercontent.com/guilhermemcardoso/spacexplorer/main/.github/screenshot001.png" alt="Screenshot"
width="200"/></p>

The project is a simple mobile application developed with React Native. The app displays information about the latest SpaceX rocket launches. These information are retrieved directly from SpaceX's graphql api. 

The app contains two screens:
- Home screen: Shows the latest 10 SpaceX rocket launches.
- Details screen: Shows the details related to the previous selected rocket launch.

## Technologies

The project was developed using the following technologies:
- [React v17.0.1](https://reactjs.org/)
- [React Native v0.64.1](https://reactnative.dev/)
- [TypeScript v3.8.3](https://www.typescriptlang.org/)
- [GraphQL v15.5.1](https://graphql.org/)

## Getting started

Clone the project:

    $ git clone https://github.com/guilhermemcardoso/spacexplorer.git
    //if you are using SSH:
    $ git clone git@github.com:guilhermemcardoso/spacexplorer.git 

Access the project folder:

    $ cd spacexplorer

Install the dependencies

    $ npm  install
    //or if you are using yarn
    $ yarn

Install the pods (via Cocoapods) to complete the linking:

    $ cd ios && pod install

Start the metro server in a terminal tab:

    $ npx react-native start

And start the application in another terminal tab:

    $ npm run android //to run the android application
    //or 
    $ yarn android
    $ npm run ios //to run the ios application
    // or 
    $ yarn ios

## Screenshots

<div style="display: flex, flex-direction: row, align-items: center, justify-content: center">
<img src="https://raw.githubusercontent.com/guilhermemcardoso/spacexplorer/main/.github/screenshot001.png" alt="Home Screen" width="24%"/>
<img src="https://raw.githubusercontent.com/guilhermemcardoso/spacexplorer/main/.github/screenshot002.png" alt="Details Screen" width="24%"/>
<img src="https://raw.githubusercontent.com/guilhermemcardoso/spacexplorer/main/.github/screenshot003.png" alt="Home Screen" width="24%"/>
<img src="https://raw.githubusercontent.com/guilhermemcardoso/spacexplorer/main/.github/screenshot004.png" alt="Details Screen" width="24%"/>
</div>

## License

The project is licensed under the MIT License. See the [LICENSE](https://github.com/guilhermemcardoso/spacexplorer/blob/main/LICENSE) file for details.

