# PatikaDev - React Native Kursu - Navigation Ders İçi Birlikte Yap Projesi
Bu repo [Patika](www.patika.dev) React Native programımız kapsamında "React Native Kursu - Navigation" Ders İçi Birlikte Yap Projesi için oluşturulan repodur. İçerisinde bir adet "A6KebapFitnessApp" isimli React Native uygulaması barındırmaktadır.

# Installation
Öncelikle projeyi clonelayın. 

> git clone https://github.com/kahraman-mustafa/PatikaDev_ReactNative_A6KebapFitnessApp.git

# Usage
Projeyi klonladıktan sonra Visual Studio Code programında açınız.
Linux için:
> cd A5TodoApp
code .

![Proje Resmi-1](https://raw.githubusercontent.com/kahraman-mustafa/PatikaDev_ReactNative_A6KebapFitnessApp/master/A6KebapFitnessApp_1.png)
![Proje Resmi-2](https://raw.githubusercontent.com/kahraman-mustafa/PatikaDev_ReactNative_A6KebapFitnessApp/master/A6KebapFitnessApp_2.png)
![Proje Resmi-3](https://raw.githubusercontent.com/kahraman-mustafa/PatikaDev_ReactNative_A6KebapFitnessApp/master/A6KebapFitnessApp_3.png)
![Proje Resmi-4](https://raw.githubusercontent.com/kahraman-mustafa/PatikaDev_ReactNative_A6KebapFitnessApp/master/A6KebapFitnessApp_4.png)

# Issues Dealt With
Error:
> Could not create task ':react-native-safe-area-context:compileDebugAndroidTestKotlin'. > No enum constant org.jetbrains.kotlin.gradle.plugin.PropertiesProvider.JvmTargetValidation

My package versions were:
* "@react-navigation/native": "^6.1.8",
* "@react-navigation/native-stack": "^6.9.14",
* "react": "18.2.0",
* "react-native": "0.72.5",
* "react-native-safe-area-context": "^4.7.2",
* "react-native-screens": "^3.25.0"

**Solution Worked**
- https://github.com/facebook/react-native/issues/38379

- https://stackoverflow.com/questions/76698415/execution-failed-for-task-tasks

Applied this to android > build.gradle file:
> i try kotlin lastest version. this method worked for me

> kotlinVersion = '1.9.0'

> classpath "org.jetbrains.kotlin:kotlin-gradle-plugin:1.9.0"

https://stackoverflow.com/questions/71580187/how-to-set-kotlin-version

******************************************************************

# Contributing
Pull requestler kabul edilir. Büyük değişiklikler için, lütfen önce neyi değiştirmek istediğinizi tartışmak için bir konu açınız.

# License
[MIT](https://opensource.org/licenses/MIT)

This is a new [**React Native**](https://reactnative.dev) project, bootstrapped using [`@react-native-community/cli`](https://github.com/react-native-community/cli).

# Getting Started

>**Note**: Make sure you have completed the [React Native - Environment Setup](https://reactnative.dev/docs/environment-setup) instructions till "Creating a new application" step, before proceeding.

## Step 1: Start the Metro Server

First, you will need to start **Metro**, the JavaScript _bundler_ that ships _with_ React Native.

To start Metro, run the following command from the _root_ of your React Native project:

```bash
# using npm
npm start

# OR using Yarn
yarn start
```

## Step 2: Start your Application

Let Metro Bundler run in its _own_ terminal. Open a _new_ terminal from the _root_ of your React Native project. Run the following command to start your _Android_ or _iOS_ app:

### For Android

```bash
# using npm
npm run android

# OR using Yarn
yarn android
```

### For iOS

```bash
# using npm
npm run ios

# OR using Yarn
yarn ios
```

If everything is set up _correctly_, you should see your new app running in your _Android Emulator_ or _iOS Simulator_ shortly provided you have set up your emulator/simulator correctly.

This is one way to run your app — you can also run it directly from within Android Studio and Xcode respectively.

## Step 3: Modifying your App

Now that you have successfully run the app, let's modify it.

1. Open `App.tsx` in your text editor of choice and edit some lines.
2. For **Android**: Press the <kbd>R</kbd> key twice or select **"Reload"** from the **Developer Menu** (<kbd>Ctrl</kbd> + <kbd>M</kbd> (on Window and Linux) or <kbd>Cmd ⌘</kbd> + <kbd>M</kbd> (on macOS)) to see your changes!

   For **iOS**: Hit <kbd>Cmd ⌘</kbd> + <kbd>R</kbd> in your iOS Simulator to reload the app and see your changes!

## Congratulations! :tada:

You've successfully run and modified your React Native App. :partying_face:

### Now what?

- If you want to add this new React Native code to an existing application, check out the [Integration guide](https://reactnative.dev/docs/integration-with-existing-apps).
- If you're curious to learn more about React Native, check out the [Introduction to React Native](https://reactnative.dev/docs/getting-started).

# Troubleshooting

If you can't get this to work, see the [Troubleshooting](https://reactnative.dev/docs/troubleshooting) page.

# Learn More

To learn more about React Native, take a look at the following resources:

- [React Native Website](https://reactnative.dev) - learn more about React Native.
- [Getting Started](https://reactnative.dev/docs/environment-setup) - an **overview** of React Native and how setup your environment.
- [Learn the Basics](https://reactnative.dev/docs/getting-started) - a **guided tour** of the React Native **basics**.
- [Blog](https://reactnative.dev/blog) - read the latest official React Native **Blog** posts.
- [`@facebook/react-native`](https://github.com/facebook/react-native) - the Open Source; GitHub **repository** for React Native.
