#!/bin/bash

# Bingo Number Generator

echo -e "\n~~ Bingo Number Generator ~~\n"

NUMBER=$(( RANDOM % 75 + 1 ))
TEXT="The next number is, "

echo $NUMBER
