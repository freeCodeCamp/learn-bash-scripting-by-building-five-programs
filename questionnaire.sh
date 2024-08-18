#!/bin/bash

echo -e \n~~ Questionnaire ~~\n

QUESTION1="What's your name?"

echo $QUESTION1
read NAME

echo Hello $NAME.

QUESTION2="Where are you from?"

echo $QUESTION2
read LOCATION

echo Hello $NAME from $LOCATION.
