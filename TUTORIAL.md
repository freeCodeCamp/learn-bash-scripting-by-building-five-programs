# Learn Bash Scripting by Building Five Programs

> Welcome to the Bash Scripting lessons!

## 10. Start the Terminal

### 10.1

**The first thing you need to do is start the terminal.** Do that by clicking the "hamburger" menu at the top left of the screen, going to the "terminal" section, and clicking "new terminal". Once you open a new one, type `echo hello terminal` into the terminal and press enter.

#### HINTS

- Capitalization matters
- If the tests don't run automatically, "trash" all the terminals and try the instructions again

## 20. touch questionnaire.sh

### 20.1

You can run commands in the terminal or put them in a file to be run as a script. You will be making five small programs to learn some scripting. The first one will be a "questionnaire". Use the `touch` command to create `questionnaire.sh` in the `project` folder.

#### HINTS

- Capitalization matters
- If the tests don't run automatically, "trash" all the terminals and try the instructions again

## 30. Add echo questionnaire

### 30.1

echo "hello questionnaire"

#### HINTS

- Capitalization matters
- If the tests don't run automatically, "trash" all the terminals and try the instructions again

## 40. bash questionnaire.sh

### 40.1

run the file with `bash questionnaire.sh`

#### HINTS

- Capitalization matters
- If the tests don't run automatically, "trash" all the terminals and try the instructions again

## 50. run ./questionnaire

### 50.1

Try running the file directly with `./questionnaire.sh`. You will get a permission denied message.

#### HINTS

- Capitalization matters
- If the tests don't run automatically, "trash" all the terminals and try the instructions again

## 60. ls -l

### 60.1

View the `ls -l`

#### HINTS

- Capitalization matters
- If the tests don't run automatically, "trash" all the terminals and try the instructions again

## 70. chmod +x questionnaire.sh

### 70.1

The categories on the left describe what permissions different users have for the files. Currently the file has read-only permissions. Use `chmod +x questionnnaire.sh` to give the file executable permissions.

#### HINTS

- Capitalization matters
- If the tests don't run automatically, "trash" all the terminals and try the instructions again

## 80. ls -l

### 80.1

ls -l again to see the new permissions.

#### HINTS

- Capitalization matters
- If the tests don't run automatically, "trash" all the terminals and try the instructions again

## 90. run ./questionnaire

### 90.1

The x was added by each group. r stands for `read`, `write`, `execute` etc...
run the file again with `./questionnaire.sh`

#### HINTS

- Capitalization matters
- If the tests don't run automatically, "trash" all the terminals and try the instructions again

## 100. which bash

### 100.1

There are various shells that can interpret your script. You want to make sure to use the bash interpreter. Find out where it's located by typing `which bash` in the terminal.

#### HINTS

- Capitalization matters
- If the tests don't run automatically, "trash" all the terminals and try the instructions again

## 110. Add shebang

### 110.1

That's the location of the shell interpreter that you want to use. You can tell your program to use it by placing a "shebang" at the very top of the file with `#! <path_to_interpreter>`. Add a "shebang" at the top of your file, the one you want looks like this: `#!/bin/bash`.

#### HINTS

- Capitalization matters
- If the tests don't run automatically, "trash" all the terminals and try the instructions again

## 120. Add which bash

### 120.1

Any commands you can use in the terminal can go in your script and they will be executed one by one. You just used `which bash` in the terminal. Test it out by adding that below your shebang.

#### HINTS

- Capitalization matters
- If the tests don't run automatically, "trash" all the terminals and try the instructions again

## 130. run ./questionnaire

### 130.1

Run the script again.

#### HINTS

- Capitalization matters
- If the tests don't run automatically, "trash" all the terminals and try the instructions again

## 140. Add ls

### 140.1

Add an `ls` command below the `which bash` command you just added.

#### HINTS

- Capitalization matters
- If the tests don't run automatically, "trash" all the terminals and try the instructions again

## 150. run ./questionnaire

### 150.1

Run the script again.

#### HINTS

- Capitalization matters
- If the tests don't run automatically, "trash" all the terminals and try the instructions again

## 160. Delete all

### 160.1

You can see the one file you create was printed to the terminal when you ran your script. Delete everything but the "shebang" from your file so you can start making the questionnaire.

#### HINTS

- Capitalization matters
- If the tests don't run automatically, "trash" all the terminals and try the instructions again

## 170. Add QUESTION1 variable

### 170.1

Bash has variables, functions, and other things you might be familiar with from other languages. You can declare a variable like this: `VARIABLE_NAME=VALUE`. There cannot be any spaces around the equal (`=`) sign. If a variable has any spaces in it, place double quotes around it. Create a variable named `QUESTION1` and set it's value to `"What's your name?"`.

#### HINTS

- Capitalization matters
- If the tests don't run automatically, "trash" all the terminals and try the instructions again

## 180. Add echo $QUESTION1

### 180.1

To use a variable, place a `$` in front of it like this, `$VARIABLE_NAME`. Instead of echoing `hello questionnaire`, echo the value of your variable. Shell scripts run from top to bottom, so you need to place the command below where you set the variable.

#### HINTS

- Capitalization matters
- If the tests don't run automatically, "trash" all the terminals and try the instructions again

## 190. run ./questionnaire

### 190.1

run the file again with `./questionnaire.sh`

#### HINTS

- Capitalization matters
- If the tests don't run automatically, "trash" all the terminals and try the instructions again

## 200. Add read NAME

### 200.1

You are using your variable to print that to the screen. Next, you want to be able to accept input from a user. You can do that with the `read` command like this: `read VARIABLE_NAME`. This will take what is entered by a user and put it into a new variable. Use `read` to get input and store it in a value named `NAME`.

#### HINTS

- Capitalization matters
- If the tests don't run automatically, "trash" all the terminals and try the instructions again

## 210. Add echo Your name is $NAME

### 210.1

`echo "Your name is $NAME."`

#### HINTS

- Capitalization matters
- If the tests don't run automatically, "trash" all the terminals and try the instructions again

## 220. run ./questionnaire

### 220.1

run the file again with `./questionnaire.sh` and enter your name and press enter after it asks for it.

#### HINTS

- Capitalization matters
- If the tests don't run automatically, "trash" all the terminals and try the instructions again

## 230. Add QUESTION2 variable

### 230.1

Remove the echo command you just added and create a new variable named `QUESTION2`. Set the value to a new question that asks, `Where are you from, $NAME?`. Make sure you put it in double quotes.

#### HINTS

- Capitalization matters
- If the tests don't run automatically, "trash" all the terminals and try the instructions again

## 240. Add echo $QUESTION2

### 240.1

use your new variable to echo the next question to the screen.

#### HINTS

- Capitalization matters
- If the tests don't run automatically, "trash" all the terminals and try the instructions again

## 250. Add read LOCATION

### 250.1

Use `read` to get input from the user into a variable named `LOCATION`.

#### HINTS

- Capitalization matters
- If the tests don't run automatically, "trash" all the terminals and try the instructions again

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

Use the touch command to create a new file named `countdown.sh`

#### HINTS

- Capitalization matters
- If the tests don't run automatically, "trash" all the terminals and try the instructions again

## 390. chmod +x countdown.sh

### 390.1

Give executable permissions to your file

#### HINTS

- Capitalization matters
- If the tests don't run automatically, "trash" all the terminals and try the instructions again

## 400. Add shebang

### 400.1

Add a shebang

#### HINTS

- Capitalization matters
- If the tests don't run automatically, "trash" all the terminals and try the instructions again

## 410. Add a comment

### 410.1

Add a comment `# Program that counts down from a given argument`

#### HINTS

- Capitalization matters
- If the tests don't run automatically, "trash" all the terminals and try the instructions again

## 420. Add echo $*

### 420.1

Programs can take arguments, that can be accessed with a `$`. echo $*

#### HINTS

- Capitalization matters
- If the tests don't run automatically, "trash" all the terminals and try the instructions again

## 430. run ./countdown.sh arg1 arg2 arg3

### 430.1

run your file with `./countdown.sh arg1 arg2 arg3`

#### HINTS

- Capitalization matters
- If the tests don't run automatically, "trash" all the terminals and try the instructions again

## 440. echo $1

### 440.1

You can see the arguments that have been passed to your script. `$*` gets all the arguments, you can access any one of them with `$#`. `$1` would give you `arg1`. Change your script to echo the first argument instead of all the arguments.

#### HINTS

- Capitalization matters
- If the tests don't run automatically, "trash" all the terminals and try the instructions again

## 450. run ./countdown.sh arg1 arg2 arg3

### 450.1

run your file with `./countdown.sh arg1 arg2 arg3` again

#### HINTS

- Capitalization matters
- If the tests don't run automatically, "trash" all the terminals and try the instructions again

## 460. help

### 460.1

help in terminal

#### HINTS

- Capitalization matters
- If the tests don't run automatically, "trash" all the terminals and try the instructions again

## 470. man if

### 470.1

man if

#### HINTS

- Capitalization matters
- If the tests don't run automatically, "trash" all the terminals and try the instructions again

## 480. help if

### 480.1

help if in terminal

#### HINTS

- Capitalization matters
- If the tests don't run automatically, "trash" all the terminals and try the instructions again

## 490. Add if arg1 print true

### 490.1

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

## 500. run ./countdown arg1

### 500.1

Run the script again with the `arg1` as your first argument.

#### HINTS

- Capitalization matters
- If the tests don't run automatically, "trash" all the terminals and try the instructions again

## 510. Add else print false

### 510.1

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

## 520. run ./countdown !arg1

### 520.1

Run the script again and use anything except `arg1` as a first argument.

#### HINTS

- Capitalization matters
- If the tests don't run automatically, "trash" all the terminals and try the instructions again

## 530. Change if condition -lt 5

### 530.1

Your countdown timer is expecting an integer as a first argument. You can compare numbers with `-eq` (equal), `-ne` (not equal), `-lt` (less than), `-le` (less than or equal), `-gt` (greater than), `-ge` (greater than or equal). Change your if condition to check if your first argument is less than `5`.

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
