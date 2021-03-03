# Learn Bash Scripting by Building Five Programs

> Welcome to the Bash Scripting lessons!

## 10. Start the Terminal

### 10.1

**The first thing you need to do is start the terminal.** Do that by clicking the "hamburger" menu at the top left of the screen, going to the "terminal" section, and clicking "new terminal". Once you open a new one, type `echo hello terminal` into the terminal and press enter.

#### HINTS

- Capitalization matters
- If the tests don't run automatically, "trash" all the terminals and try the instructions again

## 10. Start the Terminal

### 10.1

You can run commands in the terminal or put them into a `.sh` file to be run as a script. You will be making five little scripts to learn some scripting. The first one will be a small "questionnaire". Use the `touch` command to create a `questionnaire.sh` file in the `project` folder.

#### HINTS

- Capitalization matters
- If the tests don't run automatically, "trash" all the terminals and try the instructions again

## 10. Start the Terminal

### 10.1

Echo "hello questionnaire"

#### HINTS

- Capitalization matters
- If the tests don't run automatically, "trash" all the terminals and try the instructions again

## 10. Start the Terminal

### 10.1

run the file with `bash questionnaire.sh`

#### HINTS

- Capitalization matters
- If the tests don't run automatically, "trash" all the terminals and try the instructions again

## 10. Start the Terminal

### 10.1

Try running the file directly with `./questionnaire.sh`. You will get a permission denied message.

#### HINTS

- Capitalization matters
- If the tests don't run automatically, "trash" all the terminals and try the instructions again

## 10. Start the Terminal

### 10.1

View the `ls -l`

#### HINTS

- Capitalization matters
- If the tests don't run automatically, "trash" all the terminals and try the instructions again

## 10. Start the Terminal

### 10.1

The categories on the left describe what permissions different users have for the files. Currently the file has read only permissions. Use `chmod +x questionnnaire.sh` to give the file executable permissions.

#### HINTS

- Capitalization matters
- If the tests don't run automatically, "trash" all the terminals and try the instructions again

## 10. Start the Terminal

### 10.1

ls -l again to see the new permissions

#### HINTS

- Capitalization matters
- If the tests don't run automatically, "trash" all the terminals and try the instructions again

## 10. Start the Terminal

### 10.1

run the file again with `./questionnaire.sh`

#### HINTS

- Capitalization matters
- If the tests don't run automatically, "trash" all the terminals and try the instructions again

## 10. Start the Terminal

### 10.1

There are various shells that can interpret your script. You want to make sure to use the bash interpreter. Find out where it's located by typing `which bash` in the terminal.

#### HINTS

- Capitalization matters
- If the tests don't run automatically, "trash" all the terminals and try the instructions again

## 10. Start the Terminal

### 10.1

That's the location of the program that you want to use with your script. You can tell your script to use it with a "shebang". They are placed at the very top of a script and the one you want looks like this, `#! /bin/bash`

#### HINTS

- Capitalization matters
- If the tests don't run automatically, "trash" all the terminals and try the instructions again

## 10. Start the Terminal

### 10.1

Bash has variables, functions, and many other things you might be familiar with from other languages. You can declare a variable like this: `VARIABLE_NAME=VALUE`. There cannot be any spaces around the equal (`=`) sign. If the value of your variable has any spaces in it, you can put it in double quotes. Create a variable named `QUESTION1` and set it's value to `"What's your name?"`.

#### HINTS

- Capitalization matters
- If the tests don't run automatically, "trash" all the terminals and try the instructions again

## 10. Start the Terminal

### 10.1

To use a variable, just place a `$` in front of it like this, `$VARIABLE_NAME`. Instead of echoing `hello questionnaire`, echo the value of your variable. Scripts run from top to bottom, so you need to make sure to place the command below where you set the variable.

#### HINTS

- Capitalization matters
- If the tests don't run automatically, "trash" all the terminals and try the instructions again

## 10. Start the Terminal

### 10.1

run the file again with `./questionnaire.sh`

#### HINTS

- Capitalization matters
- If the tests don't run automatically, "trash" all the terminals and try the instructions again

## 10. Start the Terminal

### 10.1

You are using your variable to print that to the screen. Next, you want to be able to accept input from a user. You can do that with the `read` command like this: `read VARIABLE_NAME`. This will take what is entered by a user and put it into a new variable. Use `read` to get input and store it in a value named `NAME`.

#### HINTS

- Capitalization matters
- If the tests don't run automatically, "trash" all the terminals and try the instructions again

## 10. Start the Terminal

### 10.1

`echo "Your name is $NAME"`

#### HINTS

- Capitalization matters
- If the tests don't run automatically, "trash" all the terminals and try the instructions again

## 10. Start the Terminal

### 10.1

run the file again with `./questionnaire.sh` and enter your name when it is waiting for input.

#### HINTS

- Capitalization matters
- If the tests don't run automatically, "trash" all the terminals and try the instructions again

## 10. Start the Terminal

### 10.1

Remove the echo command you just added and create a new variable named `QUESTION2`. Set the value to a new question that asks, `Where are you from, $NAME?`. Make sure you put it in double quotes.

#### HINTS

- Capitalization matters
- If the tests don't run automatically, "trash" all the terminals and try the instructions again

## 10. Start the Terminal

### 10.1

use your new variable to echo the next question to the screen.

#### HINTS

- Capitalization matters
- If the tests don't run automatically, "trash" all the terminals and try the instructions again

## 10. Start the Terminal

### 10.1

Use `read` to get input from the user into a variable named `LOCATION`.

#### HINTS

- Capitalization matters
- If the tests don't run automatically, "trash" all the terminals and try the instructions again

## 10. Start the Terminal

### 10.1

Run the script and enter values when it is waiting for input.

#### HINTS

- Capitalization matters
- If the tests don't run automatically, "trash" all the terminals and try the instructions again

## 10. Start the Terminal

### 10.1

Create a `QUESTION3` variable and set the value to "And what's your favorite food?"

#### HINTS

- Capitalization matters
- If the tests don't run automatically, "trash" all the terminals and try the instructions again

## 10. Start the Terminal

### 10.1

read FOOD

#### HINTS

- Capitalization matters
- If the tests don't run automatically, "trash" all the terminals and try the instructions again

## 10. Start the Terminal

### 10.1

Use the `echo` command and your variables to print this line to the terminal, `I found out that your name is <name>, you are from <location>, and your favorite food is <food>`. Use your three variables in place of `<name>`, `<location>`, and `<food>`.

#### HINTS

- Capitalization matters
- If the tests don't run automatically, "trash" all the terminals and try the instructions again

## 10. Start the Terminal

### 10.1

Run the script and enter values when asked.

#### HINTS

- Capitalization matters
- If the tests don't run automatically, "trash" all the terminals and try the instructions again

## 10. Start the Terminal

### 10.1

Use the touch command to create a new file named `countdown.sh`

#### HINTS

- Capitalization matters
- If the tests don't run automatically, "trash" all the terminals and try the instructions again

## 10. Start the Terminal

### 10.1

Give executable permissions to your file

#### HINTS

- Capitalization matters
- If the tests don't run automatically, "trash" all the terminals and try the instructions again

## 10. Start the Terminal

### 10.1

Add a shebang

#### HINTS

- Capitalization matters
- If the tests don't run automatically, "trash" all the terminals and try the instructions again

## 10. Start the Terminal

### 10.1

Add a comment `# Program that counts down from a given argument`

#### HINTS

- Capitalization matters
- If the tests don't run automatically, "trash" all the terminals and try the instructions again

## 10. Start the Terminal

### 10.1

Programs can take arguments, that can be accessed with a `$`. echo $*

#### HINTS

- Capitalization matters
- If the tests don't run automatically, "trash" all the terminals and try the instructions again

## 10. Start the Terminal

### 10.1

run your file with `./countdown.sh arg1 arg2 arg3`

#### HINTS

- Capitalization matters
- If the tests don't run automatically, "trash" all the terminals and try the instructions again

## 10. Start the Terminal

### 10.1

You can see the arguments that have been passed to your script. `$*` gets all the arguments, you can access any one of them with `$#`. `$1` would give you `arg1`. Change your script to echo the first argument instead of all the arguments.

#### HINTS

- Capitalization matters
- If the tests don't run automatically, "trash" all the terminals and try the instructions again

## 10. Start the Terminal

### 10.1

run your file with `./countdown.sh arg1 arg2 arg3` again

#### HINTS

- Capitalization matters
- If the tests don't run automatically, "trash" all the terminals and try the instructions again

## 10. Start the Terminal

### 10.1

Now, only `arg1` is printed to the screen. You can create an `if` condition like this:

```sh
if [[ CONDITION ]]
then
  STATEMENTS
fi
```

Create an `if` condition that checks `if [[ $1 == "arg1" ]]`. Use `echo` to print `true` to the screen if it's true.

#### HINTS

- Capitalization matters
- If the tests don't run automatically, "trash" all the terminals and try the instructions again

## 10. Start the Terminal

### 10.1

Run the script again with the `arg1` as your first argument.

#### HINTS

- Capitalization matters
- If the tests don't run automatically, "trash" all the terminals and try the instructions again

## 10. Start the Terminal

### 10.1

You can add an else to your `if` condition like this:

```sh
if [[ CONDITION ]]
then
  STATEMENTS
else
  STATEMENTS
fi
```

Add an `else` to your existing `if` condition that uses `echo` to print `false` to the terminal.

#### HINTS

- Capitalization matters
- If the tests don't run automatically, "trash" all the terminals and try the instructions again

## 10. Start the Terminal

### 10.1

Run the script again and use anything except `arg1` as a first argument.

#### HINTS

- Capitalization matters
- If the tests don't run automatically, "trash" all the terminals and try the instructions again

## 10. Start the Terminal

### 10.1

Your countdown timer is expecting an integer as a first argument. You can compare numbers with `-eq` (equal), `-ne` (not equal), `-lt` (less than), `-le` (less than or equal), `-gt` (greater than), `-ge` (greater than or equal). Change your if condition to check if your first argument is less than `5`.

#### HINTS

- Capitalization matters
- If the tests don't run automatically, "trash" all the terminals and try the instructions again

## 10. Start the Terminal

### 10.1

Run the script again and use `4` as a first argument.

#### HINTS

- Capitalization matters
- If the tests don't run automatically, "trash" all the terminals and try the instructions again

## 10. Start the Terminal

### 10.1

Run the script again and use `5` as a first argument.

#### HINTS

- Capitalization matters
- If the tests don't run automatically, "trash" all the terminals and try the instructions again

## 10. Start the Terminal

### 10.1

Change your if condition to use less than or equal.

#### HINTS

- Capitalization matters
- If the tests don't run automatically, "trash" all the terminals and try the instructions again

## 10. Start the Terminal

### 10.1

Run the script again and use `5` as a first argument. Now it should be true.

#### HINTS

- Capitalization matters
- If the tests don't run automatically, "trash" all the terminals and try the instructions again

## 10. Start the Terminal

### 10.1

Run the script again and use `5` as a first argument. Now it should be true.

#### HINTS

- Capitalization matters
- If the tests don't run automatically, "trash" all the terminals and try the instructions again

## 10. Start the Terminal

### 10.1

You really want to be able to accept any interger as a first argument. You can compare against a regular expression pattern with `=~`. Change your if condition to `if [[ $1 =~ ^[0-9]+$ ]]`. This regular expression checks that an integer is the first argument.

#### HINTS

- Capitalization matters
- If the tests don't run automatically, "trash" all the terminals and try the instructions again

## 10. Start the Terminal

### 10.1

Change the message in the else area to "Expected an integer as first argument."

#### HINTS

- Capitalization matters
- If the tests don't run automatically, "trash" all the terminals and try the instructions again

## 10. Start the Terminal

### 10.1

Run the script again and use `1` as a first argument.

#### HINTS

- Capitalization matters
- If the tests don't run automatically, "trash" all the terminals and try the instructions again

## 10. Start the Terminal

### 10.1

Run the script again and use `a` as a first argument.

#### HINTS

- Capitalization matters
- If the tests don't run automatically, "trash" all the terminals and try the instructions again

## 10. Start the Terminal

### 10.1

Looks like it's working. Next, you want to make your timer count down so you need to finish the `then` area. You can create a `for` loop like this:

```
  for (( i = 1; i <= 10; i++ ))
  do
    echo $i
  done
```

The above would print 1 through 10 to the screen. Create a for loop that prints from your `$1` argument to zero (inclusive) to the screen.

#### HINTS

- Capitalization matters
- If the tests don't run automatically, "trash" all the terminals and try the instructions again

## 10. Start the Terminal

### 10.1

The double brackets (`[[ ]]`) you used on your if condition are used more for conditions like that, and the double parenthesis (`(( ))`) are used for mathematical operations and these for loops. Run your script and use `3` and the first argument.

#### HINTS

- Capitalization matters
- If the tests don't run automatically, "trash" all the terminals and try the instructions again

## 10. Start the Terminal

### 10.1

It works, but it all prints instantly. I want it to wait a second between printing. You can pause your script with the `sleep` command like this: `sleep seconds` where `seconds` is the number of second to wait. Make your script wait for one second after printing each number.

#### HINTS

- Capitalization matters
- If the tests don't run automatically, "trash" all the terminals and try the instructions again

## 10. Start the Terminal

### 10.1

Run your script and use `3` and the first argument again.

#### HINTS

- Capitalization matters
- If the tests don't run automatically, "trash" all the terminals and try the instructions again

## 10. Start the Terminal

### 10.1

Run your script and use `3` and the first argument again.

#### HINTS

- Capitalization matters
- If the tests don't run automatically, "trash" all the terminals and try the instructions again

## 10. Start the Terminal

### 10.1

Now it works, you can create a multiline comment like this:

```sh
: '
  comment here
  comment here
'
```

Comment out your `for` loop with a multiline comment. I want to try to make this program in a different way.

#### HINTS

- Capitalization matters
- If the tests don't run automatically, "trash" all the terminals and try the instructions again

## 10. Start the Terminal

### 10.1

Below your comment, create a variable named `I` that is set to the value of your first argument.

#### HINTS

- Capitalization matters
- If the tests don't run automatically, "trash" all the terminals and try the instructions again

## 10. Start the Terminal

### 10.1

You can make a `while` loop like this:

```sh
while [[ CONDITION ]]
do
  STATEMENTS
done
```

Echo your `I` variable to the screen while `I` is greater than zero.

#### HINTS

- Capitalization matters
- If the tests don't run automatically, "trash" all the terminals and try the instructions again

## 10. Start the Terminal

### 10.1

Add `sleep 1`

#### HINTS

- Capitalization matters
- If the tests don't run automatically, "trash" all the terminals and try the instructions again

## 10. Start the Terminal

### 10.1

add `((I--))`

#### HINTS

- Capitalization matters
- If the tests don't run automatically, "trash" all the terminals and try the instructions again

## 10. Start the Terminal

### 10.1

Run the script and use 3 as the first argument.

#### HINTS

- Capitalization matters
- If the tests don't run automatically, "trash" all the terminals and try the instructions again

## 10. Start the Terminal

### 10.1

Run the script and use 3 as the first argument.

#### HINTS

- Capitalization matters
- If the tests don't run automatically, "trash" all the terminals and try the instructions again

## 10. Start the Terminal

### 10.1

I think the countdown clock is looking good. The next one is a bingo number generator. Use `touch` to create `bingo.sh` in the same folder as the others.

#### HINTS

- Capitalization matters
- If the tests don't run automatically, "trash" all the terminals and try the instructions again

## 10. Start the Terminal

### 10.1

Add a "shebang" at the top. It's the same as the other two files.

#### HINTS

- Capitalization matters
- If the tests don't run automatically, "trash" all the terminals and try the instructions again

## 10. Start the Terminal

### 10.1

Give your file executable permissions.

#### HINTS

- Capitalization matters
- If the tests don't run automatically, "trash" all the terminals and try the instructions again

## 10. Start the Terminal

### 10.1

Add a comment that says, `Bingo Number Generator`

#### HINTS

- Capitalization matters
- If the tests don't run automatically, "trash" all the terminals and try the instructions again

## 10. Start the Terminal

### 10.1

NUMBER=5

#### HINTS

- Capitalization matters
- If the tests don't run automatically, "trash" all the terminals and try the instructions again

## 10. Start the Terminal

### 10.1

echo (($NUMBER))

#### HINTS

- Capitalization matters
- If the tests don't run automatically, "trash" all the terminals and try the instructions again

## 10. Start the Terminal

### 10.1

Run the script

#### HINTS

- Capitalization matters
- If the tests don't run automatically, "trash" all the terminals and try the instructions again

## 10. Start the Terminal

### 10.1

echo (($NUMBER + 1))

#### HINTS

- Capitalization matters
- If the tests don't run automatically, "trash" all the terminals and try the instructions again

## 10. Start the Terminal

### 10.1

Run the script

#### HINTS

- Capitalization matters
- If the tests don't run automatically, "trash" all the terminals and try the instructions again

## 10. Start the Terminal

### 10.1

change to echo $((NUMBER + 1))

#### HINTS

- Capitalization matters
- If the tests don't run automatically, "trash" all the terminals and try the instructions again

## 10. Start the Terminal

### 10.1

Run the script

#### HINTS

- Capitalization matters
- If the tests don't run automatically, "trash" all the terminals and try the instructions again

## 10. Start the Terminal

### 10.1

echo $RANDOM

#### HINTS

- Capitalization matters
- If the tests don't run automatically, "trash" all the terminals and try the instructions again

## 10. Start the Terminal

### 10.1

echo $RANDOM%75

#### HINTS

- Capitalization matters
- If the tests don't run automatically, "trash" all the terminals and try the instructions again

## 10. Start the Terminal

### 10.1

echo $((RANDOM%75))

#### HINTS

- Capitalization matters
- If the tests don't run automatically, "trash" all the terminals and try the instructions again

## 10. Start the Terminal

### 10.1

Change your number variable to $(($RANDOM % 75 + 1)) and your echo statement to just echo $NUMBER again.

#### HINTS

- Capitalization matters
- If the tests don't run automatically, "trash" all the terminals and try the instructions again

## 10. Start the Terminal

### 10.1

Run the script to make sure it's working

#### HINTS

- Capitalization matters
- If the tests don't run automatically, "trash" all the terminals and try the instructions again

## 10. Start the Terminal

### 10.1

Create `TEXT="The next number is, "`

#### HINTS

- Capitalization matters
- If the tests don't run automatically, "trash" all the terminals and try the instructions again

## 10. Start the Terminal

### 10.1

Create `if (( $NUMBER <= 15 )) then echo $TEXT B:$NUMBER fi`

#### HINTS

- Capitalization matters
- If the tests don't run automatically, "trash" all the terminals and try the instructions again

## 10. Start the Terminal

### 10.1

Add elif (( $NUMBER < 31 )) then

#### HINTS

- Capitalization matters
- If the tests don't run automatically, "trash" all the terminals and try the instructions again

## 10. Start the Terminal

### 10.1

Add elif [[ number -le 45 ]]

#### HINTS

- Capitalization matters
- If the tests don't run automatically, "trash" all the terminals and try the instructions again

## 10. Start the Terminal

### 10.1

elif [[ number -lt 61 ]]

#### HINTS

- Capitalization matters
- If the tests don't run automatically, "trash" all the terminals and try the instructions again

## 10. Start the Terminal

### 10.1

elso echo $TEXT G:$NUMBER

#### HINTS

- Capitalization matters
- If the tests don't run automatically, "trash" all the terminals and try the instructions again

## 10. Start the Terminal

### 10.1

Run your script a few times and make sure it's working.

#### HINTS

- Capitalization matters
- If the tests don't run automatically, "trash" all the terminals and try the instructions again

## 10. Start the Terminal

### 10.1

Looks like it's working :smile: Next project is a fortune teller.

#### HINTS

- Capitalization matters
- If the tests don't run automatically, "trash" all the terminals and try the instructions again

## 10. Start the Terminal

### 10.1

Use the `touch` command to create `fortune.sh` in the same folder as the other scripts.

#### HINTS

- Capitalization matters
- If the tests don't run automatically, "trash" all the terminals and try the instructions again

## 10. Start the Terminal

### 10.1

Add a shebang

#### HINTS

- Capitalization matters
- If the tests don't run automatically, "trash" all the terminals and try the instructions again

## 10. Start the Terminal

### 10.1

Change the permissions

#### HINTS

- Capitalization matters
- If the tests don't run automatically, "trash" all the terminals and try the instructions again

## 10. Start the Terminal

### 10.1

Create the array `RESPONSES=("Yes" "No" "Maybe")`

#### HINTS

- Capitalization matters
- If the tests don't run automatically, "trash" all the terminals and try the instructions again

## 10. Start the Terminal

### 10.1

echo ${RESPONSES[0]}

#### HINTS

- Capitalization matters
- If the tests don't run automatically, "trash" all the terminals and try the instructions again
