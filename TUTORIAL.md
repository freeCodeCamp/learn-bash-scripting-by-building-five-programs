# Learn Bash Scripting by Building Five Programs

> Welcome to the Bash Scripting lessons!

## 10. Start the Terminal

### 10.1

**The first thing you need to do is start the terminal.** Do that by clicking the "hamburger" menu at the top left of the screen, going to the "terminal" section, and clicking "new terminal". Once you open a new one, type `echo hello bash` into the terminal and press enter.

#### HINTS

- Capitalization matters
- If the tests don't run automatically, "trash" all the terminals and try the instructions again

## 20. touch questionnaire.sh

### 20.1

You can run commands in the terminal or put them in a file to be run as a script. You will be making five small programs to learn some scripting. The first one will be a "questionnaire". Use the `touch` command to create `questionnaire.sh` in the `project` folder.

#### HINTS

- Type `touch questionnaire.sh` in the terminal and press enter
- Make sure you are in the `project` folder first
- Enter `cd ~/project` in the terminal to get to the project folder if you aren't there

## 30. Add echo questionnaire

### 30.1

To start, just add `echo Hello Questionnaire` at the top of the file you just created.

#### HINTS

- Add the suggested text to the `questionnaire.sh` file

## 35. sh questionnaire.sh

### 35.1

Your script has one command. Run it with `sh questionnaire.sh` to see what happens. `sh` stands for `shell`.

#### HINTS

- Type `bash questionnaire.sh` in the terminal and press enter
- Make sure you are in the `project` folder first
- Enter `cd ~/project` in the terminal to get to the project folder if you aren't there

## 40. bash questionnaire.sh

### 40.1

When you ran the script, the `shell` interpreter was used. Run your script again with `bash questionnaire.sh` to use the `bash` interpreter. `bash` stands for `bourne-again shell`.

#### HINTS

- Type `bash questionnaire.sh` in the terminal and press enter
- Make sure you are in the `project` folder first
- Enter `cd ~/project` in the terminal to get to the project folder if you aren't there

## 50. which bash

### 50.1

The output was the same, but there are other interpreters along with those. You may not get the expected output with some. What you want to do is define which one to use in your script. You want to use `bash`, find out where it's located by entering `which bash` in the terminal.

#### HINTS

- Type `which bash` in the terminal and press enter

## 60. Add shebang

### 60.1

That's the absolute path the `bash` interpreter on this file system. You can tell your program to use it by placing a "shebang" at the very top of the file like this: `#! <path_to_interpreter>`. Add a "shebang" at the top of your file, the one you want looks like this: `#!/bin/bash`.

#### HINTS

- Add `#!/bin/bash` at the top of your `questionnaire.sh` file

## 70. run ./questionnaire

### 70.1

Now, instead of using `sh` or `bash` to run your script. You can run it be executing the file and it will default to `bash`. Run your script by executing it with `./questionnaire.sh`

#### HINTS

- Type `./questionnaire.sh` in the terminal and press enter
- Make sure you are in the `project` folder first
- Enter `cd ~/project` in the terminal to get to the project folder if you aren't there

## 80. ls -l

### 80.1

You should have got a permission denied message. List what's in the `project` folder in long list format with `ls -l`.

#### HINTS

- Type `ls -l` in the terminal and press enter
- Make sure you are in the `project` folder first
- Enter `cd ~/project` in the terminal to get to the project folder if you aren't there

## 90. chmod +x questionnaire.sh

### 90.1

You should see `-rw-r--r--` next to your file. The first `-` is nothing, the rest describe the permissions certain users have with it. Enter `chmod +x questionnnaire.sh` in the terminal to give the file executable permissions.

#### HINTS

- Type `chmod +x questionnaire.sh` in the terminal and press enter
- Make sure you are in the `project` folder first
- Enter `cd ~/project` in the terminal to get to the project folder if you aren't there

## 100. ls -l

### 100.1

List what's in the folder again with `ls -l` to see the new permissions.

#### HINTS

- Type `ls -l` in the terminal and press enter
- Make sure you are in the `project` folder first
- Enter `cd ~/project` in the terminal to get to the project folder if you aren't there

## 110. run ./questionnaire

### 110.1

The `x` was added by each type of user to denote that anyone can execute the file. Run your file by executing it again with `./questionnaire.sh`.

#### HINTS

- Type `./questionnaire.sh` in the terminal and press enter
- Make sure you are in the `project` folder first
- Enter `cd ~/project` in the terminal to get to the project folder if you aren't there

## 140. Add ls

### 140.1

Now it works. In your script, you can add any commands that you would be able to enter in the terminal. Test this by adding the `ls -l` command below your other command.

#### HINTS

- Add `ls -l` at the bottom of your `questionnaire.sh` file

## 150. run ./questionnaire

### 150.1

Run the script by executing it again.

#### HINTS

- Type `./questionnaire.sh` in the terminal and press enter
- Make sure you are in the `project` folder first
- Enter `cd ~/project` in the terminal to get to the project folder if you aren't there

## 160. Delete all

### 160.1

Your script printed the one file as if you entered the `ls -l` in the terminal. Delete everything but the "shebang" from your file so you can start making the questionnaire.

#### HINTS

- Only `#!/bin/bash` should remain in your `questionnaire.sh` file

## 170. Add QUESTION1 variable

### 170.1

Bash has variables, functions, and other things you might be familiar with. You can declare a variable like this: `VARIABLE_NAME=VALUE`. There cannot be any spaces around the equal (`=`) sign. If a variable has any spaces in it, place double quotes around it. Create a variable named `QUESTION1` and set it's value to `"What's your name?"`.

#### HINTS

- Add `QUESTION1="What's your name?"` at the bottom of your `questionnaire.sh` file

## 180. Add echo $QUESTION1

### 180.1

To use a variable, place `$` in front of it like this, `$VARIABLE_NAME`. Shell scripts run from top to bottom, so you can only use variable below where it's created. Use `echo` to print your question.

#### HINTS

- Add `echo $QUESTION1` at the bottom of your `questionnaire.sh` file

## 190. run ./questionnaire

### 190.1

Run the file to see if it worked.

#### HINTS

- Run your file by executing it
- Type `./questionnaire.sh` in the terminal and press enter
- Make sure you are in the `project` folder first
- Enter `cd ~/project` in the terminal to get to the project folder if you aren't there

## 200. Add read NAME

### 200.1

The question was printed. Next, you want to be able to accept input from a user. You can do that with `read` like this: `read VARIABLE_NAME`. This will get user input and store it into a new variable. Use `read` to get input and store it in a variable named `NAME`.

#### HINTS

- Add `read NAME` at the bottom of your `questionnaire.sh` file

## 210. Add echo Hello $NAME

### 210.1

At the bottom of your script, use `echo` to print `Hello, <name>.` to the terminal.

#### HINTS

- Use your `$NAME` variable in place of `<name>`
- Add `echo Hello, $NAME.` at the bottom of your script

## 220. run ./questionnaire

### 220.1

Run the file again. Type your name and press enter after it asks for it.

#### HINTS

- Run your file by executing it
- Type `./questionnaire.sh` in the terminal and press enter
- Make sure you are in the `project` folder first
- Enter `cd ~/project` in the terminal to get to the project folder if you aren't there

## 230. Add QUESTION2 variable

### 230.1

Create a new variable named `QUESTION2`. Set the value to, `Where are you from?`. Make sure to put it in double quotes.

#### HINTS

- Here's an example: `VARIABLE="value"`
- Add `QUESTION2="Where are you from?"` to your script

## 240. Add echo $QUESTION2

### 240.1

Use your new variable to print the next question.

#### HINTS

- Use `echo` to print the variable
- Add `echo $QUESTION2` below everything else

## 250. Add read LOCATION

### 250.1

Use `read` to get input from the user into a variable named `LOCATION`.

#### HINTS

- Add `read LOCATION` to your script below everything else

## 260. Add echo Hello $NAME from $LOCATION

### 260.1

`echo "Hello $NAME from $LOCATION."`

#### HINTS

- Capitalization matters
- If the tests don't run automatically, "trash" all the terminals and try the instructions again

## 270. run ./questionnaire

### 270.1

Run the script and enter values when it is waiting for input.

#### HINTS

- Capitalization matters
- If the tests don't run automatically, "trash" all the terminals and try the instructions again

## 280. Add echo "~~ Questionnaire ~~"

### 280.1

Add echo "~~ Questionnaire ~~"

#### HINTS

- Capitalization matters
- If the tests don't run automatically, "trash" all the terminals and try the instructions again

## 290. run ./questionnaire

### 290.1

run script

#### HINTS

- Capitalization matters
- If the tests don't run automatically, "trash" all the terminals and try the instructions again

## 300. echo --help

### 300.1

echo --help in terminal

#### HINTS

- Capitalization matters
- If the tests don't run automatically, "trash" all the terminals and try the instructions again

## 310. man echo

### 310.1

man echo

#### HINTS

- Capitalization matters
- If the tests don't run automatically, "trash" all the terminals and try the instructions again

## 320. Add echo -e "\n~~ Questionnaire ~~\n"

### 320.1

Add echo -e "\n~~ Questionnaire ~~\n"

#### HINTS

- Capitalization matters
- If the tests don't run automatically, "trash" all the terminals and try the instructions again

## 330. run ./questionnaire

### 330.1

run script

#### HINTS

- Capitalization matters
- If the tests don't run automatically, "trash" all the terminals and try the instructions again

## 340. Add QUESTION3 variable

### 340.1

Create a `QUESTION3` variable and set the value to "And what's your favorite food?"

#### HINTS

- Capitalization matters
- If the tests don't run automatically, "trash" all the terminals and try the instructions again

## 350. read FOOD

### 350.1

read FOOD

#### HINTS

- Capitalization matters
- If the tests don't run automatically, "trash" all the terminals and try the instructions again

## 360. echo a sentence with all read variables

### 360.1

Use the `echo` command and your variables to print this line to the terminal, `I found out that your name is <name>, you are from <location>, and your favorite food is <food>`. Use your three variables in place of `<name>`, `<location>`, and `<food>`.

#### HINTS

- Capitalization matters
- If the tests don't run automatically, "trash" all the terminals and try the instructions again

## 370. run ./questionnaire

### 370.1

Run the script and enter values when asked.

#### HINTS

- Capitalization matters
- If the tests don't run automatically, "trash" all the terminals and try the instructions again

## 380. touch countdown.sh

### 380.1

I think you are done that script for now. Use the `touch` command to create a new file named `countdown.sh` in your `project` folder. This program will count down from a given input.

#### HINTS

- Type `touch countdown.sh` in the terminal and press enter
- Make sure you are in the `project` folder first
- Enter `cd ~/project` in the terminal to get to the project folder if you aren't there

## 390. chmod +x countdown.sh

### 390.1

Give executable permissions to your file for all users so you can run it like the other one. It's the `chmod` command.

#### HINTS

- Here's an example `chmod <permissions> <filename>`
- The value for permissions you want to use is `+x`
- You previously used `chmod +x questionnaire.sh`
- Type `chmod +x countdown.sh` in the terminal and press enter
- Make sure you are in the `project` folder first
- Enter `cd ~/project` in the terminal to get to the project folder if you aren't there

## 400. Add shebang

### 400.1

You want to use the `bash` interpreter again. Add a `shebang` at the top of your new file to denote that.

#### HINTS

- Look at the `shebang` in your first script to get the syntax
- It should look like this: `#!/bin/bash`
- Add `#!/bin/bash` at the top of your `countdown.sh` file

## 410. Add a comment

### 410.1

Comments in `bash` start with `\#`. Here's an example: `\# <comment>`. Add a comment below the `shebang` that says `Program that counts down to zero from a given argument` so people know what it does.

#### HINTS

- Add `\# Program that counts down to zero from a given argument` to your `countdown.sh` file

## 420. Add echo $*

### 420.1

Programs can take arguments. You can access them a few different ways with `$`. Add `echo $*` in your script to print all arguments passed to it.

#### HINTS

- Add `echo $*` at the bottom of the `countdown.sh` file

## 425. run ./countdown.sh

### 425.1

Execute your script with `./countdown.sh`.

#### HINTS

- Type `./countdown.sh` in the terminal and press enter
- Make sure you are in the `project` folder first
- Enter `cd ~/project` in the terminal to get to the project folder if you aren't there

## 430. run ./countdown.sh arg1 arg2 arg3

### 430.1

Run your script again, but this time add three arguments to the command; `arg1`, `arg2`, and `arg3`. Just place them after the command with a space before each one.

#### HINTS

- Type `./countdown.sh arg1 arg2 arg3` in the terminal and press enter
- Make sure you are in the `project` folder first
- Enter `cd ~/project` in the terminal to get to the project folder if you aren't there

## 440. echo $1

### 440.1

`$*` printed all the arguments passed to your script. To access any one of them, use `$<number>`. `arg1` could have been accessed with `$1`. Change your script to `echo` the second argument instead of all the arguments.

#### HINTS

- Use `echo $2` to print the second argument
- Change `echo $*` to `echo $2`

## 450. run ./countdown.sh arg1 arg2 arg3

### 450.1

Run your file with `./countdown.sh arg1 arg2 arg3` again.

#### HINTS

- Type `./countdown.sh arg1 arg2 arg3` in the terminal and press enter
- Make sure you are in the `project` folder first
- Enter `cd ~/project` in the terminal to get to the project folder if you aren't there

## 460. help

### 460.1

Now it just prints the second argument. Your program will only need one argument, you will add an `if` statement to test it. I wonder what the syntax would look like. Type `help` in the terminal to see if you can find anything.

#### HINTS

- Type `help` in the terminal and press enter

## 470. man if

### 470.1

This is a list of the built-in commands. One of them starts with `if`. See if you can find out more about it by checking its `man` page.

#### HINTS

- Type `man if` in the terminal and press enter

## 480. help if

### 480.1

I guess there isn't a `man` page for it. At the top of the `help` screen, I noticed you can use `help <command>` to find out more. See if you can find out more about `if`. 

#### HINTS

- Type `help if` in the terminal and press enter

## 490. Add if arg1 print true

### 490.1

The syntax is at the top, not all of it is required. Here's another example:

```sh
if [[ CONDITION ]]
then
  STATEMENTS
fi
```

Remove the `echo $2` and replace it with an `if` condition that checks `if [[ $1 == "arg1" ]]`. In its `then` area, use `echo` to print `true` to the screen.

#### HINTS

- Add the following to your script:
```sh
if [[ $1 == "arg1" ]]
then
  echo true
fi
```

## 500. run ./countdown arg1

### 500.1

The `if` statement will print `true` if you pass it `arg1`. Run the script again with `arg1` as the only argument.

#### HINTS

- Type `./countdown.sh arg1` in the terminal and press enter
- Make sure you are in the `project` folder first
- Enter `cd ~/project` in the terminal to get to the project folder if you aren't there

## 510. Add else print false

### 510.1

One of the optional parts of `if` was an `else` area. You can use it like this:

```sh
if [[ CONDITION ]]
then
  STATEMENTS
else
  STATEMENTS
fi
```

Add an `else` to your existing `if` condition. Use `echo` to print `false` to the terminal in its `STATEMENTS` area.

#### HINTS

- Add the following to your script:
```sh
if [[ $1 == "arg1" ]]
then
  echo true
else
  echo false
fi
```

## 520. run ./countdown !arg1

### 520.1

Run the script again and use anything except `arg1` as a first argument.

#### HINTS

- Type `./countdown.sh !arg1` in the terminal and press enter
- Make sure you are in the `project` folder first
- Enter `cd ~/project` in the terminal to get to the project folder if you aren't there

## 530. Change if condition -lt 5

### 530.1

Your program is expecting an integer as a first argument. You can compare integers inside the brackets (`[]`) of your `if` with `-eq` (equal), `-ne` (not equal), `-lt` (less than), `-le` (less than or equal), `-gt` (greater than), `-ge` (greater than or equal). Change your if condition to check if your first argument is less than `5`.

#### HINTS

- Capitalization matters
- If the tests don't run automatically, "trash" all the terminals and try the instructions again

## 540. run ./countdown 4

### 540.1

Run the script again and use `4` as a first argument.

#### HINTS

- Capitalization matters
- If the tests don't run automatically, "trash" all the terminals and try the instructions again

## 550. run ./countdown 5

### 550.1

Run the script again and use `5` as a first argument.

#### HINTS

- Capitalization matters
- If the tests don't run automatically, "trash" all the terminals and try the instructions again

## 560. Change condition to -le

### 560.1

Change your if condition to use less than or equal.

#### HINTS

- Capitalization matters
- If the tests don't run automatically, "trash" all the terminals and try the instructions again

## 570. run ./countdown 5

### 570.1

Run the script again and use `5` as a first argument. Now it should be true.

#### HINTS

- Capitalization matters
- If the tests don't run automatically, "trash" all the terminals and try the instructions again

## 580. Change if to regex

### 580.1

You really want to be able to accept any interger as a first argument. You can compare against a regular expression pattern with `=~`. Change your if condition to `if [[ $1 =~ ^[0-9]+$ ]]`. This regular expression checks that an integer is the first argument.

#### HINTS

- Capitalization matters
- If the tests don't run automatically, "trash" all the terminals and try the instructions again

## 590. Change if !# message

### 590.1

Change the message in the else area to "Expected an integer as first argument."

#### HINTS

- Capitalization matters
- If the tests don't run automatically, "trash" all the terminals and try the instructions again

## 600. run ./countdown 1

### 600.1

Run the script again and use `1` as a first argument.

#### HINTS

- Capitalization matters
- If the tests don't run automatically, "trash" all the terminals and try the instructions again

## 610. run ./countdown a

### 610.1

Run the script again and use `a` as a first argument.

#### HINTS

- Capitalization matters
- If the tests don't run automatically, "trash" all the terminals and try the instructions again

## 620. Add for loop for countdown

### 620.1

Looks like it's working. Next, you want to make your timer count down so you need to finish the `then` area. You can create a `for` loop like this:

```sh
  for (( i = 1; i <= 10; i++ ))
  do
    echo $i
  done
```

The above would print 1 through 10 to the screen. Create a for loop that prints from your `$1` argument to zero (inclusive) to the screen.

#### HINTS

- Capitalization matters
- If the tests don't run automatically, "trash" all the terminals and try the instructions again

## 630. run ./countdown 3

### 630.1

The double brackets (`[[ ]]`) you used on your if condition are used more for conditions like that, and the double parenthesis (`(( ))`) are used for mathematical operations and these for loops. Run your script and use `3` and the first argument.

#### HINTS

- Capitalization matters
- If the tests don't run automatically, "trash" all the terminals and try the instructions again

## 640. help

### 640.1

help

#### HINTS

- Capitalization matters
- If the tests don't run automatically, "trash" all the terminals and try the instructions again

## 650. ls /

### 650.1

ls /

#### HINTS

- Capitalization matters
- If the tests don't run automatically, "trash" all the terminals and try the instructions again

## 660. ls /bin

### 660.1

ls /bin

#### HINTS

- Capitalization matters
- If the tests don't run automatically, "trash" all the terminals and try the instructions again

## 670. man sleep

### 670.1

man sleep

#### HINTS

- Capitalization matters
- If the tests don't run automatically, "trash" all the terminals and try the instructions again

## 680. Add sleep to for loop

### 680.1

It works, but it all prints instantly. I want it to wait a second between printing. You can pause your script with the `sleep` command like this: `sleep seconds` where `seconds` is the number of second to wait. Make your script wait for one second after printing each number.

#### HINTS

- Capitalization matters
- If the tests don't run automatically, "trash" all the terminals and try the instructions again

## 690. run ./countdown 3

### 690.1

Run your script and use `3` and the first argument again.

#### HINTS

- Capitalization matters
- If the tests don't run automatically, "trash" all the terminals and try the instructions again

## 700. Add Multiline comment

### 700.1

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

## 710. Add I variable

### 710.1

Below your comment, create a variable named `I` that is set to the value of your first argument.

#### HINTS

- Capitalization matters
- If the tests don't run automatically, "trash" all the terminals and try the instructions again

## 720. help

### 720.1

help

#### HINTS

- Capitalization matters
- If the tests don't run automatically, "trash" all the terminals and try the instructions again

## 730. help while

### 730.1

help while

#### HINTS

- Capitalization matters
- If the tests don't run automatically, "trash" all the terminals and try the instructions again

## 740. Add while loop

### 740.1

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

## 750. Add sleep 1

### 750.1

Add `sleep 1`

#### HINTS

- Capitalization matters
- If the tests don't run automatically, "trash" all the terminals and try the instructions again

## 760. Add I--

### 760.1

add `((I--))`

#### HINTS

- Capitalization matters
- If the tests don't run automatically, "trash" all the terminals and try the instructions again

## 770. run ./countdown.sh 3

### 770.1

Run the script and use 3 as the first argument.

#### HINTS

- Capitalization matters
- If the tests don't run automatically, "trash" all the terminals and try the instructions again

## 780. touch bingo.sh

### 780.1

I think the countdown clock is looking good. The next one is a bingo number generator. Use `touch` to create `bingo.sh` in the same folder as the others.

#### HINTS

- Capitalization matters
- If the tests don't run automatically, "trash" all the terminals and try the instructions again

## 790. Add shebang

### 790.1

Add a "shebang" at the top. It's the same as the other two files.

#### HINTS

- Capitalization matters
- If the tests don't run automatically, "trash" all the terminals and try the instructions again

## 800. chmod +x bingo.sh

### 800.1

Give your file executable permissions.

#### HINTS

- Capitalization matters
- If the tests don't run automatically, "trash" all the terminals and try the instructions again

## 810. Add comment

### 810.1

Add a comment that says, `Bingo Number Generator`

#### HINTS

- Capitalization matters
- If the tests don't run automatically, "trash" all the terminals and try the instructions again

## 820. Add NUMBER=5 variable

### 820.1

NUMBER=5

#### HINTS

- Capitalization matters
- If the tests don't run automatically, "trash" all the terminals and try the instructions again

## 830. echo $NUMBER

### 830.1

echo (($NUMBER))

#### HINTS

- Capitalization matters
- If the tests don't run automatically, "trash" all the terminals and try the instructions again

## 840. run ./bingo.sh

### 840.1

Run the script

#### HINTS

- Capitalization matters
- If the tests don't run automatically, "trash" all the terminals and try the instructions again

## 850. echo $NUMBER + 1

### 850.1

echo (($NUMBER + 1))

#### HINTS

- Capitalization matters
- If the tests don't run automatically, "trash" all the terminals and try the instructions again

## 860. run ./bingo.sh

### 860.1

Run the script

#### HINTS

- Capitalization matters
- If the tests don't run automatically, "trash" all the terminals and try the instructions again

## 870. change to subshell

### 870.1

change to echo $((NUMBER + 1))

#### HINTS

- Capitalization matters
- If the tests don't run automatically, "trash" all the terminals and try the instructions again

## 880. run ./bingo.sh

### 880.1

Run the script

#### HINTS

- Capitalization matters
- If the tests don't run automatically, "trash" all the terminals and try the instructions again

## 890. echo $RANDOM

### 890.1

echo $RANDOM

#### HINTS

- Capitalization matters
- If the tests don't run automatically, "trash" all the terminals and try the instructions again

## 900. echo $RANDOM%75

### 900.1

echo $RANDOM%75

#### HINTS

- Capitalization matters
- If the tests don't run automatically, "trash" all the terminals and try the instructions again

## 910. Change to subshell

### 910.1

echo $((RANDOM%75))

#### HINTS

- Capitalization matters
- If the tests don't run automatically, "trash" all the terminals and try the instructions again

## 920. Set NUMBER to random%75

### 920.1

Change your number variable to $(($RANDOM % 75 + 1)) and your echo statement to just echo $NUMBER again.

#### HINTS

- Capitalization matters
- If the tests don't run automatically, "trash" all the terminals and try the instructions again

## 930. run ./bingo.sh

### 930.1

Run the script to make sure it's working

#### HINTS

- Capitalization matters
- If the tests don't run automatically, "trash" all the terminals and try the instructions again

## 940. Add TEXT variable

### 940.1

Create `TEXT="The next number is, "`

#### HINTS

- Capitalization matters
- If the tests don't run automatically, "trash" all the terminals and try the instructions again

## 950. Add first if <= 15

### 950.1

Create `if (( $NUMBER <= 15 )) then echo $TEXT B:$NUMBER fi`

#### HINTS

- Capitalization matters
- If the tests don't run automatically, "trash" all the terminals and try the instructions again

## 960. Add elif < 31

### 960.1

Add elif (( $NUMBER < 31 )) then

#### HINTS

- Capitalization matters
- If the tests don't run automatically, "trash" all the terminals and try the instructions again

## 970. Add elif -le 45

### 970.1

Add elif [[ number -le 45 ]]

#### HINTS

- Capitalization matters
- If the tests don't run automatically, "trash" all the terminals and try the instructions again

## 980. Add elif -lt 61

### 980.1

elif [[ number -lt 61 ]]

#### HINTS

- Capitalization matters
- If the tests don't run automatically, "trash" all the terminals and try the instructions again

## 990. else echo G:#

### 990.1

elso echo $TEXT G:$NUMBER

#### HINTS

- Capitalization matters
- If the tests don't run automatically, "trash" all the terminals and try the instructions again

## 1000. run .bingo.sh

### 1000.1

Run your script a few times and make sure it's working.

#### HINTS

- Capitalization matters
- If the tests don't run automatically, "trash" all the terminals and try the instructions again

## 1010. touch fortune.sh

### 1010.1

Looks like it's working :smile: Next project is a fortune teller. Use the `touch` command to create `fortune.sh` in the same folder as the other scripts.

#### HINTS

- Capitalization matters
- If the tests don't run automatically, "trash" all the terminals and try the instructions again

## 1020. add shebang

### 1020.1

Add a shebang

#### HINTS

- Capitalization matters
- If the tests don't run automatically, "trash" all the terminals and try the instructions again

## 1030. chmod +x fortune.sh

### 1030.1

Change the permissions

#### HINTS

- Capitalization matters
- If the tests don't run automatically, "trash" all the terminals and try the instructions again

## 1040. Add RESPONSES array

### 1040.1

Create the array `RESPONSES=("Yes" "No" "Maybe")`

#### HINTS

- Capitalization matters
- If the tests don't run automatically, "trash" all the terminals and try the instructions again

## 1050. echo ${RESPONSES[0]}

### 1050.1

echo ${RESPONSES[0]}

#### HINTS

- Capitalization matters
- If the tests don't run automatically, "trash" all the terminals and try the instructions again
