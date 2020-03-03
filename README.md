# Reactulator

* Author: Nicholas Anderson
* Contact: nick.b.anderson4@gmail.com
* Description: I dislike all calculators, so I'm making my own

## Work Log

* 15 Jan 2020
  * seed: expo-cli
  * read RN fundamentals
* 16 Jan 2020
  * begin main calculator
    * grid of buttons with state connected to display
  * basic theming in Colors.js : amoled baby
  * tried to replace nav with DrawerNavigation
    * can't fookin install react-navigation-drawer
* 25 Jan 2020
  * "yarn add react-navigation-drawer" just worked
  * need to wrap navigation-drawer in createAppContainer
    * https://stackoverflow.com/questions/53367195/invariant-violation-the-navigation-prop-is-missing-for-this-navigator
    * see DrawerNav.js
* 1 March 2020
  * starting with simple functionality
    ()CC
    ^ln/
    789*
    456-
    123+
    0.==
* 2 March 2020
  * fixed some shit


## Next
* pre/post/infix
* refactor everything using new skills; make sure to big picture plan
  * new names
* navigation
  * defunt: MainTabNavigator, AppNavigator
  * new: DrawerNav, just finish wrapping in AppContainer
* actual logic
* add (become full fledged TI-boi): vertical division, sin, cos, tan, log, ln, log2, e, pi


## Unknowns

* easy global themeing
* navigation
* need stack for back button to work?
* want tabs for different calculators: standard, cooking, etc 

## Notes

* differences from MUI+React
  * instead of grid, use css on views

* big picture how to handle logic
  * CalcDisplay has state of an array of inputs (numbers, operators, groupers)
  * only handle that array when hitting enter
    * use stack to handle groupings 