Testing and Test Automation in Game Development (e.g Testing in Unity / Unreal)
We explored Unity Mobile Apps with Appium and AltUnity:
Appium is one of popular option is Appium, an open-source framework which enables running automated tests on both Android and iOS devices.
There are a couple of scenarios for which you would want to use both of these frameworks at the same time:

By itself, AltUnity Tester cannot launch an app on a device. If you want to run tests in a pipeline, or by using cloud services, you can either create a script which will start your app, or you can use Appium before the test execution;
AltUnity Tester cannot perform some types of actions, such as interacting with any native popups your app might have, or putting the app in the background and resuming it. In any of these cases, you can use Appium to do the things that AltUnity Tester can’t.
With AltUnity Inspector you can’t visualize the native objects. For this you could use the Appium Inspector. 

==>We have created a word document for the features we explored on that framework for testing!
