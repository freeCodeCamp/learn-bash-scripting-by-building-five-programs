#!/bin/bash

echo -e "\n~~ Questionnaire ~~\n"

QUESTION1="What's your name?"
QUESTION2="Where are you from?"

echo $QUESTION1
read NAME

echo $QUESTION2
read LOCATION

echo Hello $NAME from $LOCATION.
