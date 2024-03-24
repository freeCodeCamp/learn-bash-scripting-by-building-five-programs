#!/bin/bash

echo -e "\n~~ Questionnaire ~~\n"

QUESTION1="What's your name?"
echo $QUESTION1
read NAME

QUESTION2="Where are you from?"
echo $QUESTION2
read LOCATION

QUESTION3="What's your favorite coding website?"
echo $QUESTION3
read  WEBSITE

echo -e "\nHello $NAME from $LOCATION. I learned that your favorite coding website is $WEBSITE!"

