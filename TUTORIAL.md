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

To start, add `echo hello questionnaire` at the top of the file you just created.

#### HINTS

- Add the suggested text to the `questionnaire.sh` file

## 35. sh questionnaire.sh

### 35.1

Your script has one command. Run it with `sh questionnaire.sh` to see what happens. `sh` stands for `shell`.

#### HINTS

- Type `sh questionnaire.sh` in the terminal and press enter
- Make sure you are in the `project` folder first
- Enter `cd ~/project` in the terminal to get to the project folder if you aren't there

## 40. bash questionnaire.sh

### 40.1

Using `sh` to run your script uses the `shell` interpreter. Run your script again with `bash questionnaire.sh` to use the `bash` interpreter. `bash` stands for `bourne-again shell`.

#### HINTS

- Type `bash questionnaire.sh` in the terminal and press enter
- Make sure you are in the `project` folder first
- Enter `cd ~/project` in the terminal to get to the project folder if you aren't there

## 50. which bash

### 50.1

The output was the same. There many interpreters which may not give the output you expect. Find out where the `bash` interpreter is located by entering `which bash` in the terminal.

#### HINTS

- Type `which bash` in the terminal and press enter

## 60. Add shebang

### 60.1

That's the absolute path to the `bash` interpreter. You can tell your program to use it by placing a "shebang" at the very top of the file like this: `#!<path_to_interpreter>`. Add a "shebang" at the very top of your file, the one you want looks like this: `#!/bin/bash`.

#### HINTS

- Add `#!/bin/bash` at the top of your `questionnaire.sh` file

## 70. ./questionnaire

### 70.1

Now, instead of using `sh` or `bash` to run your script. You can run it by executing the file and it will default to `bash`. Run your script by executing it with `./questionnaire.sh`

#### HINTS

- Type `./questionnaire.sh` in the terminal and press enter
- Make sure you are in the `project` folder first
- Enter `cd ~/project` in the terminal to get to the project folder if you aren't there

## 80. ls -l

### 80.1

You should have got a permission denied message because you don't have permissions to execute the script. List what's in the `project` folder in long list format with `ls -l` to see the file permissions.

#### HINTS

- Type `ls -l` in the terminal and press enter
- Make sure you are in the `project` folder first
- Enter `cd ~/project` in the terminal to get to the project folder if you aren't there

## 90. chmod +x questionnaire.sh

### 90.1

Next to your file is `-rw-r--r--`. All but the first character (`-`) describe permissions different users have with the file. `r` means `read`, `w` means `write`, `x` means `execute`. I don't see an `x` anywhere, so nobody can execute it. Enter `chmod +x questionnnaire.sh` in the terminal to give everyone executable permissions.

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

## 110. ./questionnaire

### 110.1

The `x` was added by each type of user to denote that anyone can execute the file. Run your file again by executing it with `./questionnaire.sh`.

#### HINTS

- Type `./questionnaire.sh` in the terminal and press enter
- Make sure you are in the `project` folder first
- Enter `cd ~/project` in the terminal to get to the project folder if you aren't there

## 140. Add ls -l

### 140.1

Now it works. In your script, you can add any commands that you would be able to enter in the terminal. Test this by adding the `ls -l` command below your other command.

#### HINTS

- Add `ls -l` at the bottom of your `questionnaire.sh` file

## 150. ./questionnaire

### 150.1

Run the script by executing it again.

#### HINTS

- Type `./questionnaire.sh` in the terminal and press enter
- Make sure you are in the `project` folder first
- Enter `cd ~/project` in the terminal to get to the project folder if you aren't there

## 160. Delete all - shebang

### 160.1

Your script printed the result of the two commands as if you entered them in the terminal. Delete everything but the "shebang" from your file so you can start making the questionnaire.

#### HINTS

- Only `#!/bin/bash` should remain in your `questionnaire.sh` file

## 170. Add QUESTION1 variable

### 170.1

Bash has variables, functions, and other things you might be familiar with. You can create a variable with `VARIABLE_NAME=VALUE`. There cannot be any spaces around the equal (`=`) sign. If a variable has any spaces in it, place double quotes around it. Create a variable named `QUESTION1` and set it's value to `"What's your name?"`.

#### HINTS

- Add `QUESTION1="What's your name?"` at the bottom of your `questionnaire.sh` file

## 180. Add echo $QUESTION1

### 180.1

To use a variable, place `$` in front of it like this: `$VARIABLE_NAME`. Shell scripts run from top to bottom, so you can only use variable below where it's created. Use `echo` to print your variable.

#### HINTS

- Add `echo $QUESTION1` at the bottom of your `questionnaire.sh` file

## 190. ./questionnaire

### 190.1

Run the file like you did before to see if it worked.

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

At the bottom of your script, use `echo` to print `Hello <name>.` to the terminal.

#### HINTS

- Use your `$NAME` variable in place of `<name>`
- Don't forget the period
- Add `echo Hello, $NAME.` at the bottom of your script

## 220. ./questionnaire

### 220.1

Run the file again. Type your name and press enter after it asks for it.

#### HINTS

- Run your file by executing it
- Type `./questionnaire.sh` in the terminal and press enter
- Make sure you are in the `project` folder first
- Enter `cd ~/project` in the terminal to get to the project folder if you aren't there
- You can press `ctrl+c` to close the program

## 230. Add QUESTION2 variable

### 230.1

Right below your first variable, create another one named `QUESTION2`. Set the value to, `Where are you from?`. Make sure to put it in double quotes.

#### HINTS

- Here's an example: `VARIABLE="value"`
- Add `QUESTION2="Where are you from?"` to your script

## 240. Add echo $QUESTION2

### 240.1

After your `read` command, use your new variable to print the next question.

#### HINTS

- Use `echo` to print the variable
- Add `echo $QUESTION2` below your `read` command

## 250. Add read LOCATION

### 250.1

Below where the second question is printed, use `read` to get input from the user into a variable named `LOCATION`.

#### HINTS

- Add `read LOCATION` to your script below `echo $QUESTION2`

## 260. Add echo Hello $NAME from $LOCATION

### 260.1

Change the existing response to `Hello <name> from <location>.`. Use your two variables in place of `<name>` and `<location`. Make sure the command is at the bottom of the file.

#### HINTS

- The suggested command should look like: `echo Hello $NAME from $LOCATION.`
- Make sure it's at the bottom of the file

## 270. ./questionnaire

### 270.1

Run the script and enter values when it is waiting for input.

#### HINTS

- Run your file by executing it
- Type `./questionnaire.sh` in the terminal and press enter
- Make sure you are in the `project` folder first
- You can press `ctrl+c` to close a program

## 280. Add echo "~~ Questionnaire ~~"

### 280.1

It's looking good. I want a title to appear when the program first starts. Use `echo` to print `~~ Questionnaire ~~` before anything else is printed.

#### HINTS

- Add `echo ~~ Questionnaire ~~` below your `shebang`

## 290. ./questionnaire

### 290.1

Run the script and enter values until it is done again so you can see what the title looks like.

#### HINTS

- Run your file by executing it
- Type `./questionnaire.sh` in the terminal and press enter
- Make sure you are in the `project` folder first
- You can press `ctrl+c` to close the program

## 300. echo --help

### 300.1

It would be nice if there was some empty lines around the title. You've probably used the `--help` flag before, see if you can use it with `echo` to try and find a way to add empty lines.

#### HINTS

- Type `echo --help` in the terminal and press enter

## 310. man echo

### 310.1

That didn't work as I hoped. Another way to find information about a command is with `man`. It stands for `manual` and you can use it like this: `man <command>`. See if there's a manual for `echo`.

#### HINTS

- Type `man echo` in the terminal and press enter
- Press enter until you have seen the whole menu

## 320. Add echo -e \n~~ Questionnaire ~~\n

### 320.1

Take a look at the menu. That `-e` option looks promising, and the `\n` below it says `new line`. Change the title command to `echo -e \n~~ Questionnaire ~~\n` to see if that works.

#### HINTS

- Change the suggested line to `echo -e \n~~ Questionnaire ~~\n`

## 323. ./questionnaire

### 323.1

Run it to see if it worked. You can press `ctrl+c` to close the program after it starts if you don't want to enter values.

#### HINTS

- Run your file by executing it
- Type `./questionnaire.sh` in the terminal and press enter
- Make sure you are in the `project` folder first
- You can press `ctrl+c` to close the program

## 326. Change to echo -e "\n~~ Questionnaire ~~\n"

### 326.1

It didn't print the empty lines. `echo` will only print empty lines if it is enclosed in quotes. Place double quotes around the title that gets printed to see if it works.

#### HINTS

- Change the suggested line to `echo -e "\n~~ Questionnaire ~~\n"`

## 330. ./questionnaire

### 330.1

Run your script.

#### HINTS

- Run your file by executing it
- Type `./questionnaire.sh` in the terminal and press enter
- Make sure you are in the `project` folder first
- You can press `ctrl+c` to close the program

## 340. Add QUESTION3 variable

### 340.1

Now it's working :smile: Create a `QUESTION3` variable next to the other two, and set it's value to `"What's your favorite coding website?"`

#### HINTS

- Add `QUESTION3="What's your favorite coding website?"` to your `questionnaire.sh` file
- Add it by the other two variables

## 345. echo QUESTION3 variable

### 345.1

Use `echo` to print the third question after you `read` the `LOCATION`.

#### HINTS

- Add `echo $QUESTION3` below the `read LOCATION`
- Add it to your `questionnaire.sh` file

## 350. read WEBSITE

### 350.1

After the question you just printed, add code to read input into a variable named `WEBSITE`. 

#### HINTS

- Add `read WEBSITE` below the `echo $QUESTION3`

## 360. echo final sentence

### 360.1

Change the `echo` command of the response to print this sentence instead: `Hello <name> from <location>. I learned that your favorite coding website is <website>!`.

#### HINTS

- Replace the `echo Hello $NAME from $LOCATION.` with the suggested sentence
- Use your three variables in place of `<name>`, `<location>`, and `<website>`
- The command should look like this: `echo Hello $NAME from $LOCATION. I learned that your favorite coding website is $WEBSITE!`

## 363. ./questionnaire

### 363.1

Run the script and enter values when the program is waiting. Lets see the final output.

#### HINTS

- Run your file by executing it
- Type `./questionnaire.sh` in the terminal and press enter
- Make sure you are in the `project` folder first

## 366. Add line breaks around final sentence

### 366.1

One last thing. Change that final response to print an empty line at the beginning of the sentence.

#### HINTS

- Use `echo` with the `-e` flag and a new line (`\n`) character like you did for the title
- Don't forget to put the response in double quotes so it prints the empty line
- Here's an example: `echo -e "\n<message>"`
- Only add a new line at the beginning of the response, not the end
- The final command should look like this: `echo "\nHello $NAME from $LOCATION. I learned that your favorite coding website is $WEBSITE!"`

## 370. ./questionnaire

### 370.1

Run it one last time and enter values when it asks to see if you like how it looks.

#### HINTS

- Run your file by executing it
- Type `./questionnaire.sh` in the terminal and press enter
- Make sure you are in the `project` folder first

## 380. touch countdown.sh

### 380.1

It looks good. I think you are done that script for now. The next program will be "countdown timer". Use the `touch` command to create a new file named `countdown.sh` in your `project` folder.

#### HINTS

- Type `touch countdown.sh` in the terminal and press enter
- Make sure you are in the `project` folder first
- Enter `cd ~/project` in the terminal to get to the project folder if you aren't there

## 390. chmod +x countdown.sh

### 390.1

Give your file executable permissions so you can run it like the other one. It's the `chmod` command with the `+x` flag.

#### HINTS

- Here's an example `chmod <permissions> <filename>`
- The value for permissions you want to use is `+x`
- You previously used `chmod +x questionnaire.sh`
- Type `chmod +x countdown.sh` in the terminal and press enter
- Make sure you are in the `project` folder first

## 400. Add shebang

### 400.1

You want to use the `bash` interpreter again. Add a `shebang` at the top of your new file to denote that.

#### HINTS

- A `shebang` looks like this: `#!<path_to_interpreter>`
- Enter `which bash` in the terminal to see the path to `bash`
- Look at the `shebang` in your first script to get the syntax
- It should look like this: `#!/bin/bash`
- Add `#!/bin/bash` at the top of your `countdown.sh` file

## 410. Add comment

### 410.1

Comments in `bash` look like this: `#<comment>`. Add a comment below the `shebang` that says `Program that counts down to zero from a given argument` so people know what it does. Note that the `shebang` is a special case and is not treated like a comment.

#### HINTS

- Add `#Program that counts down to zero from a given argument` to your `countdown.sh` file

## 420. Add echo $*

### 420.1

Programs can take arguments. You can access them a few different ways with `$`. Add `echo $*` in your script to print all arguments passed to it.

#### HINTS

- Add `echo $*` at the bottom of the `countdown.sh` file

## 425. ./countdown.sh

### 425.1

Execute your script with `./countdown.sh`.

#### HINTS

- Type `./countdown.sh` in the terminal and press enter
- Make sure you are in the `project` folder first

## 430. ./countdown.sh arg1 arg2 arg3

### 430.1

Nothing was printed. Run your script again, but this time add three arguments to the command; `arg1`, `arg2`, and `arg3`. Place them after the command with a space before each one.

#### HINTS

- Type `./countdown.sh arg1 arg2 arg3` in the terminal and press enter
- Make sure you are in the `project` folder first

## 440. Change to echo $1

### 440.1

`$*` printed all the arguments passed to your script. To access any one of them, use `$<number>`. `arg2` could have been accessed with `$2`. Change your script to `echo` the first argument instead of all the arguments.

#### HINTS

- Try running your script with an argument to make sure it’s giving the expected output
- Use `echo $1` to print the second argument
- Change `echo $*` to `echo $1` in your `countdown.sh` file

## 450. ./countdown.sh arg1 arg2 arg3

### 450.1

Run your file with `./countdown.sh arg1 arg2 arg3` again.

#### HINTS

- Type `./countdown.sh arg1 arg2 arg3` in the terminal and press enter
- Make sure you are in the `project` folder first

## 460. help

### 460.1

Now it just prints the first argument. Your program will test the first argument with an `if` to make sure it's a number that you can count down from. I wonder what the syntax would look like. Type `help` in the terminal to see if you can find anything.

#### HINTS

- Type `help` in the terminal and press enter

## 470. man if

### 470.1

This is a list of the built-in commands. One of them starts with `if`. See if you can find out more about it by checking its `man` page.

#### HINTS

- Here's an example: `man <command>`
- Type `man if` in the terminal and press enter

## 480. help if

### 480.1

I guess there isn't a `man` page for it. At the top of the `help` screen, I noticed you can use `help <command>` to find out more. Yet another way to find out about a command :disappointed_relieved: See if you can find out more about `if` with that method.

#### HINTS

- Here's an example `help <command>`
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

Remove the `echo $1` in your new script and replace it with an `if` condition that checks `if [[ $1 == arg1 ]]`. In its `then` area, use `echo` to print `true` to the screen. There's must be spaces on the inside of the brackets (`[[ ... ]]`) and around the operator (`==`).

#### HINTS

- Add the following to your `countdown.sh` file:
```sh
if [[ $1 == arg1 ]]
then
  echo true
fi
```

## 500. ./countdown arg1

### 500.1

The `if` statement will print `true` if you pass `arg1`. Notice that the end of the syntax is `fi` (`if` backwards). Run the script again with `arg1` as the only argument.

#### HINTS

- Type `./countdown.sh arg1` in the terminal and press enter
- Make sure you are in the `project` folder first

## 505. ./countdown !arg1

### 505.1

The `if` condition worked, it printed `true`. Run it again with anything except `arg1` as the first argument.

#### HINTS

- Type `./countdown.sh arg2` in the terminal and press enter
- Make sure you are in the `project` folder first

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

- Your `if` should look like this:
```sh
if [[ $1 == arg1 ]]
then
  echo true
else
  echo false
fi
```

## 520. ./countdown !arg1

### 520.1

Run the script again and use anything except `arg1` as the only argument.

#### HINTS

- Type `./countdown.sh !arg1` in the terminal and press enter
- Make sure you are in the `project` folder first
- Enter `cd ~/project` in the terminal to get to the project folder if you aren't there

## 530. Change if condition -lt 5

### 530.1

It printed `false` that time since the `if` condition failed. Your program is expecting an integer to count down from as its argument. You can compare integers inside the brackets (`[[ ... ]]`) of your `if` with `-eq` (equal), `-ne` (not equal), `-lt` (less than), `-le` (less than or equal), `-gt` (greater than), `-ge` (greater than or equal). Change your `if` condition to check if your first argument is less than `5`.

#### HINTS

- Your `if` condition should look like this: `[[ $1 -lt 5 ]]`
- Make sure there's spaces inside the brackets (`[[ ... ]]`) and around the operator (`-lt`)
- It's the one in the `countdown.sh` file
- The whole `if` should look like this:
- Add the following to your script:
```sh
if [[ $1 -lt 5 ]]
then
  echo true
else
  echo false
fi
```

## 540. ./countdown 4

### 540.1

Run the script again and use `4` as a first argument to make sure it's working.

#### HINTS

- Type `./countdown.sh 4` in the terminal and press enter
- Make sure you are in the `project` folder first

## 542. ./countdown 5

### 542.1

It printed `true` since your argument was less than `5`. Run it again with `5` as the argument.

#### HINTS

- Type `./countdown.sh 5` in the terminal and press enter
- Make sure you are in the `project` folder first

## 544. help

### 544.1

As expected, that printed `false`. Take a look at that `help` menu again. I want to see if we can find out more about how these expressions work.

#### HINTS

- Type `help` in the terminal and press enter

## 546. help [[ expression ]]

### 546.1

Near the top left, it says `[[ expression ]]`. See if you can get more info about that with the `help` command like you did with `help if`.

#### HINTS

- Here's an example: `help <command>`
- Type `help [[ expression ]]` in the terminal and press enter

## 548. help test

### 548.1

There's some good info there. Looks like you can use some, probably familiar, things like `&&`, `||`, `==` and `!=` to compare expressions. It says something about the `test` built-in command. See if you can bring up the `help` menu for that.

#### HINTS

- View the `help` menu of the suggested command like you did before
- Here's an example: `help <command>`
- Type `help test` in the terminal and press enter

## 550. Change if to [[ $1 -le 5 ]]

### 550.1

That's what I was looking for. At the top are some file operators. There's some string and other operators as well. You should take a look at them. You used the arithmetic operators with your `if` condition. Change the condition in your script to check if the first argument is less than or equal to `5`.

#### HINTS

- The `if` condition should look like this: `[[ $1 -le 5 ]]`
- Make sure there's spaces inside the brackets (`[[ ... ]]`) and around the operator (`-le`)
- It's the `if` in your `countdown.sh` file

## 552. ./countdown 5

### 552.1

Run the script again and use `5` as a first argument again.

#### HINTS

- Type `./countdown.sh 5` in the terminal and press enter
- Make sure you are in the `project` folder first

## 554. [[ 4 -le 5 ]]

### 554.1

Now it prints `true`. Remember I said any command can run in the terminal or a script. Try running an expression right in the terminal by entering `[[ 4 -le 5 ]]` in it.

#### HINTS

- Enter the suggested expression in the terminal
- Make sure there's spaces inside the brackets (`[[ ... ]]`) and around the operator (`-le`)
- Type `[[ 4 -le 5 ]]` in the terminal and press enter

## 556. echo $?

### 556.1

Nothing happened? Each command has an exit status that can be accessed with `$?`. View the exit status of the **last command** with `echo $?`.

#### HINTS

- Type `echo $?` in the terminal and press enter
- Your second to last command should be `[[ 4 -le 5 ]]`. So enter that before `echo $?`

## 558. [[ 4 -ge 5 ]]

### 558.1

The exit status of `0` means it was true, `4` is indeed less or equal to `5`. Try it again with `[[ 4 -ge 5 ]]`.

#### HINTS

- Enter the suggested expression in the terminal
- Make sure there's spaces inside the brackets (`[[ ... ]]`) and around the operator (`-ge`)
- Type `[[ 4 -ge 5 ]]` in the terminal and press enter

## 560. echo $?

### 560.1

Echo the exit status of the command you just entered.

#### HINTS

- Type `echo $?` in the terminal and press enter
- Your second to last command should be `[[ 4 -ge 5 ]]`. So enter that before `echo $?`

## 562. [[ 4 -ge 5 ]]; echo $?

### 562.1

It printed `1` this time for false. You can separate commands on a single line with `;`. Enter your last two commands on one line like this: `[[ 4 -ge 5 ]]; echo $?`. It will run the expression, then print the exit status of it since it was the last command.

#### HINTS

- Make sure there's spaces inside the brackets (`[[ ... ]]`) and around the operator (`-ge`)
- Type `[[ 4 -ge 5 ]]; echo $?` in the terminal and press enter

## 564. [[ 10 -ne 5 ]]; echo $?

### 564.1

Using the same syntax of `[[ ... ]]; echo$?`, check if `10` is not equal to `5` and print the exit status of the expression on one line.

#### HINTS

- Check the `help test` menu to find the `not equal` operator
- It's the `-ne` operator
- You previously used `[[ 4 -ge 5 ]]; echo $?`
- Make sure there's spaces inside the brackets and around the operator
- Type `[[ 10 -ne 5 ]]; echo $?` in the terminal and press enter

## 566. bad_command; echo $?

### 566.1

You can think of the exit status of `0` as true. But it means that the command had zero errors. All commands have an exit status. Using the same sytax, enter `bad_command;` and check its exit status on a single line.

#### HINTS

- The syntax looks like this: `<command>; echo $?`
- You previously used `[[ 10 -ne 5 ]]; echo $?`
- Type `bad_command; echo $?` in the terminal and press enter

## 568. ls; echo $?

### 568.1

`command not found`, with an exit status of `127`. Anything but `0` means there was an error with the command. `bad_command` didn't exist. Try it again with `ls`.

#### HINTS

- Use the same syntax you have been using
- Here's an example `<command>; echo $?`
- You previously used `bad_command; echo $?`
- Type `ls; echo $?` in the terminal and press enter

## 570. ls -y; echo $?

### 570.1

The command executed as expected and there were zero errors. So it gave you an exit status of `0`. Try it again with `ls -y`.

#### HINTS

- Use the same syntax you have been using
- Here's an example: `<command>; echo $?`
- You previously used `ls; echo $?`
- Type `ls -y; echo $?` in the terminal and press enter

## 572. help test

### 572.1

The `-y` flag doesn't work with `ls` so it gave you an exit status other than `0`, meaning that the command was unsuccessful. View the `help` menu of the `test` command again, I want to see what else is in that list.

#### HINTS

- Here's an example: `help <command>`
- Type `help test` in the terminal and press enter

## 574. [[ -a countdown.sh ]]; echo $?

### 574.1

You tried a few of the arithmetic operators, those work for integers. Try one of the file operators. The first one on the list checks if a file exists. Type `[[ -a countdown.sh ]]; echo $?` in the terminal to see if your file exists.

#### HINTS

- Enter the suggested commands in the terminal
- Type `[[ -a countdown.sh ]]; echo $?` in the terminal and press enter
- Don't forget the spaces inside the brackets
- Make sure you are in the `project` folder first

## 575. [[ -a bad_file.txt ]]; echo $?

### 575.1

The file must exist. It's checking the folder the command is entered from. Try it again with `bad_file.txt`.

#### HINTS

- Use the same syntax you have been using
- Here's an example: `<command>; echo $?`
- You previously used `[[ -a countdown.sh ]]; echo $?`
- Type `[[ -a bad_file.txt ]]; echo $?` in the terminal and press enter
- Don't forget the spaces inside the brackets

## 576. [[ -x countdown.sh ]]; echo $?

### 576.1

`bad_file.txt` doesn't exist. I think you're getting the hang of this. Using the same syntax, check if you have permissions to execute your `coundown.sh` file. You may want to look at that menu again.

#### HINTS

- View the `help test` menu to find the file operator for checking if a file is executable by you
- It's the `-x` operators
- The syntax you want is `[[ ... ]]; echo $?`
- Type `[[ -x countdown.sh ]]; echo $?` in the terminal and press enter
- Don't forget the spaces inside the brackets
- Make sure you are in the `project` folder first

## 582. help [[ expression ]]

### 582.1

You played around with a number of the expressions. View the `help [[ expression ]]` menu again that you looked at before to see a few more options.

#### HINTS

- Enter the suggested command in the terminal
- Type `help [[ expression ]]` in the terminal and press enter

## 584. [[ -x countdown.sh && 5 -le 4 ]]; echo $?

### 584.1

Some of these options existed in the `help test` menu, but these are more common. Enter `[[ -x countdown.sh && 5 -le 4 ]]; echo $?` in the terminal to test if both conditions are true.

#### HINTS

- Enter the suggested command in the terminal
- Type `[[ -x countdown.sh && 5 -le 4 ]]; echo $?` in the terminal and press enter
- Make sure there's spaces around the brackets and all the operators

## 586. [[ -x countdown.sh || 5 -le 4 ]]; echo $?

### 586.1

Both conditions weren't true, so the command gave an error. Try testing the same two conditions with the `or` operator.

#### HINTS

- Modify this `[[ -x countdown.sh && 5 -le 4 ]]; echo $?` with the suggestion and enter it in the terminal
- Use the or operator from the `help [[ expession ]]` menu
- The `or` operator is `||`
- Type `[[ -x countdown.sh || 5 -le 4 ]]; echo $?` in the terminal and press enter
- Make sure there's spaces around the brackets and all the operators

## 588. Change if to [[ $1 -gt 0 ]]

### 588.1

One of the conditions was true, so you didn't get any errors. I think that's enough of a detour. Back in your script, change the `if` condition to check if the first argument is greater than zero so you can be sure it's something you can count down from.

#### HINTS

- The `if` condition should look like this: `[[ $1 -gt 0 ]]`
- It's in the `countdown.sh` file

## 590. Change if !# message

### 590.1

The condition you added should check if a positive integer was entered and execute the `then` area. Change the message printed in the `else` area to `Include a positive integer as the first argument.` so a user knows what's expected.

#### HINTS

- The `else` area should look like this: `echo Include a positive integer as the first argument.`
- The whole `if` condition should look like this:
```sh
if [[ $1 -gt 0 ]]
then
  echo true
else
  echo Include a positive integer as the first argument.
fi
```

## 600. ./countdown 1

### 600.1

Run your script and use `1` as a first argument to make sure the condition is working.

#### HINTS

- Type `./countdown.sh 1` in the terminal and press enter
- Make sure you are in the `project` folder first

## 610. ./countdown 0

### 610.1

Run it again and use anything but a positive integer as the only argument.

#### HINTS

- Type `./countdown.sh 0` in the terminal and press enter
- Make sure you are in the `project` folder first

## 615. help

### 615.1

Looks like your `if` condition is working. Next, you want to loop over the argument and count down to zero from it. Check the `help` menu to see if there's any commands for this.

#### HINTS

- Enter the suggested command in the terminal
- Type `help` in the terminal and press enter

## 620. Add for loop for countdown

### 620.1

There's two `for` loops in there, you want the second one. Here's an example:

```sh
for (( i = 10; i > 0; i-- ))
do
  echo $i
done
```

The above would print `10` through `1` to the screen. In the `then` are of your condition, replace the `echo` with a `for` loop that prints from your `$1` argument to `1`.

#### HINTS

- Use the same syntax as the example except change the `10` to `$1`
- Don't include any extra commands in the `then` area
- Your `then` area should look like this:
```sh
for (( i = $1; i > 0; i-- ))
do
  echo $i
done
```
- The whole `if` condition should look like this:
```sh
if [[ $1 -gt 0 ]]
then
  for (( i = $1; i > 0; i-- ))
  do
    echo $i
  done
else
  echo Include a positive integer as the first argument.
fi
```

## 630. ./countdown 10

### 630.1

Run your script and use `10` and the first argument.

#### HINTS

- Type `./countdown.sh 10` in the terminal and press enter
- Make sure you are in the `project` folder first

## 640. help

### 640.1

It works :smile: But I want it to pause for one second between each number. Check the `help` menu again to see if there's any commands that might help.

#### HINTS

- Enter the suggested command in the terminal
- Type `help` in the terminal and press enter

## 650. ls /

### 650.1

I'm not seeing the command I was hoping to. These are the built-in commands, where are the rest? Type `ls /` to look around.

#### HINTS

- Enter the suggested command in the terminal
- Type `ls /` in the terminal and press enter

## 660. ls /bin

### 660.1

The `/` listed what's in the root of the file system. I see a `bin` folder, `bin` stands for `binary`. View what's in it with `ls /bin`.

#### HINTS

- Enter the suggested command in the terminal
- Type `ls /bin` in the terminal and press enter

## 670. man sleep

### 670.1

These are some non built-in commands. There's quite a few that should look familiar. One is `bash`, that's the one you used for the `shebang` in your scripts. I see one called `sleep`. View the manual of it.

#### HINTS

- View a manual with `man <command>`
- Enter `man sleep` in the terminal

## 675. sleep 3

### 675.1

It says you can pause execution for a number of seconds. Try it out in the terminal by entering `sleep 3`.

#### HINTS

- Enter the suggested command in the terminal
- Enter `sleep 3` in the terminal

## 680. Add sleep to for loop

### 680.1

That should work. In your `for` loop, use `sleep` to make the script pause for `1` second after each number is printed.

#### HINTS

- Add the suggestion to the `for` loop in your `countdown.sh` file
- Add `sleep 1` after you print `i` in your `for` loop

## 690. ./countdown 3

### 690.1

Run your script and use `3` and the first argument again.

#### HINTS

- Type `./countdown.sh 3` in the terminal and press enter
- Make sure you are in the `project` folder first

## 692. Change to >=

### 692.1

Awesome. Except it should print `0` instead of stopping at `1`. Change the condition in your for loop so that it checks for `i >= 0`.

#### HINTS

- Your `for` loop should look like this:
```sh
for (( i = $1; i >= 0; i-- ))
do
  echo $i
  sleep 1
done
```
- The whole `if` condition should look like this:
```sh
if [[ $1 -gt 0 ]]
then
  for (( i = $1; i >= 0; i-- ))
  do
    echo $i
    sleep 1
  done
else
  echo Include a positive integer as the first argument.
fi
```

## 694. ./countdown 3

### 694.1

Run your script and use `3` and the first argument.

#### HINTS

- Type `./countdown.sh 3` in the terminal and press enter
- Make sure you are in the `project` folder first

## 696. Add echo -e "title"

### 696.1

It's looking good. I want this program to display a title like the other one. Make it so that it prints `~~ Countdown Timer ~~` before anything else. Include a new line before and after it like you did for the other title.

#### HINTS

- Use the `echo` command with the `-e` flag and the new line (`\n`) character
- Make sure to place it in double quotes
- Here's an example: `echo -e "\n<string>\n"`
- Add `echo -e "\n~~ Countdown Timer ~~\n"` to the `countdown.sh` file after the `shebang`

## 698. ./countdown 1

### 698.1

Run your script and use `1` and the first argument again to see the title.

#### HINTS

- Type `./countdown.sh 1` in the terminal and press enter
- Make sure you are in the `project` folder first

## 700. Add Multiline comment

### 700.1

I'm having fun. You can create a multiline comment like this:

```sh
: '
  comment here
  more comment here
'
```

Comment out your `for` loop with a multiline comment. I want to try and do this with a `while` loop.

#### HINTS

- Comment out the `for` loop in your `countdown.sh` file with a multiline comment
- Your `for` loop should look like this:
```sh
: '
for (( i = $1; i >= 0; i-- ))
do
  echo $i
  sleep 1
done
'
```

## 710. help while

### 710.1

View the `help` menu for the `while` command to see if you can find anything.

#### HINTS

- Here's an example: `help <command>`
- Enter `help while` in the terminal

## 730. Add I variable

### 730.1

Below your comment, create a variable named `I` that is set to the value of your first argument. It will start there, then on each run of the `while` loop you can subtract `1` from it until it reaches `0`.

#### HINTS

- Add `I=$1` in the `then` area of your `if` statements below the multi-line comment
- The `then` area should look like this:
```sh
: '
for (( i = $1; i >= 0; i-- ))
do
  echo $i
  sleep 1
done
'
I=$1
```

## 740. Add while loop

### 740.1

The menu showed that you can make a `while` loop like this:

```sh
while [[ CONDITION ]]
do
  STATEMENTS
done
```

Add a `while` loop below the `I` variable you made. The condition should be `$I -ge 0` and you should `echo` the `I` variable in the `do` statements.

#### HINTS

- Your `while` loop should look like this:
```sh
while [[ $I -ge 0 ]]
do
  echo $I
done
```

## 750. Add (( I-- ))

### 750.1

You can subtract from `I` with double parenthesis (`((...))`) and the `--` operator. In your while loop, add `(( I-- ))` after you `echo $I` to subract one from `I` on each pass. 

#### HINTS

- Your `while` loop should look like this:
```sh
while [[ $I -ge 0 ]]
do
  echo $I
  (( I-- ))
done
```

## 760. Add sleep 1

### 760.1

The last thing to do is to add the `sleep` again. In your `while` loop, add the code to make it `sleep` for `1` second. Add the code after the `(( I-- ))`.

#### HINTS

- Use the same `sleep 1` you used in the `for` loop
- Your `while` loop should look like this:
```sh
while [[ $I -ge 0 ]]
do
  echo $I
  (( I-- ))
  sleep 1
done
```

## 770. ./countdown.sh 5

### 770.1

Run the script and use 5 as the first argument.

#### HINTS

- Type `./countdown.sh 5` in the terminal and press enter
- Make sure you are in the `project` folder first

## 780. touch bingo.sh

### 780.1

I think the countdown timer is finished. Feel free to try it with some other arguments. The next one is a bingo number generator. Use `touch` to create `bingo.sh` in the same folder as the others.

#### HINTS

- Type `touch bingo.sh` in the terminal and press enter
- Make sure you are in the `project` folder first

## 790. chmod +x bingo.sh

### 790.1

Give your file executable permissions like you did for the other two.

#### HINTS

- Use the `chmod` command with the `+x` flag
- Here's an example `chmod <permissions> <filename>`
- You previously used `chmod +x countdown.sh`
- Type `chmod +x bingo.sh` in the terminal and press enter

## 800. Add shebang

### 800.1

Add a "shebang" at the top of your new script. It should use `bash` again like other two.

#### HINTS

- A `shebang` looks like this: `#!<path_to_interpreter>`
- Enter `which bash` in the terminal to see the path to `bash`
- Look at the `shebang` in your first script to get the syntax
- It should look like this: `#!/bin/bash`
- Add `#!/bin/bash` at the top of your `bingo.sh` file

## 810. Add comment

### 810.1

Add a comment below the `shebang` that says, `Bingo Number Generator`.

#### HINTS

- Capitalization matters
- If the tests don't run automatically, "trash" all the terminals and try the instructions again

## 815. Add echo -e "title"

### 815.1

add echo -e "\n~~ Bingo Number Generator ~~\n"

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

`echo (( $NUMBER ))`

#### HINTS

- Capitalization matters
- If the tests don't run automatically, "trash" all the terminals and try the instructions again

## 840. ./bingo.sh

### 840.1

Run the script

#### HINTS

- Capitalization matters
- If the tests don't run automatically, "trash" all the terminals and try the instructions again

## 845. help let

### 845.1

`help let`

#### HINTS

- Capitalization matters
- If the tests don't run automatically, "trash" all the terminals and try the instructions again

## 850. Change to NUMBER=(( $RANDOM % 75 ))

### 850.1

change to `NUMBER=(( $RANDOM % 75 ))`

#### HINTS

- Capitalization matters
- If the tests don't run automatically, "trash" all the terminals and try the instructions again

## 860. run ./bingo.sh

### 860.1

Run the script

#### HINTS

- Capitalization matters
- If the tests don't run automatically, "trash" all the terminals and try the instructions again

## 863. echo $RANDOM

### 863.1

`echo $RANDOM`

#### HINTS

- Capitalization matters
- If the tests don't run automatically, "trash" all the terminals and try the instructions again

## 866. echo $RANDOM % 75

### 866.1

`echo $RANDOM % 75`

#### HINTS

- Capitalization matters
- If the tests don't run automatically, "trash" all the terminals and try the instructions again

## 869. echo (( $RANDOM % 75 ))

### 869.1

`echo (( $RANDOM % 75 ))`. You should get an error.

#### HINTS

- Capitalization matters
- If the tests don't run automatically, "trash" all the terminals and try the instructions again

## 872. (( $RANDOM % 75 ))

### 872.1

`(( $RANDOM % 75 ))`

#### HINTS

- Capitalization matters
- If the tests don't run automatically, "trash" all the terminals and try the instructions again

## 875. echo $?

### 875.1

`echo $?`

#### HINTS

- Capitalization matters
- If the tests don't run automatically, "trash" all the terminals and try the instructions again

## 878. echo $(( RANDOM % 75 ))

### 878.1

`echo $(( RANDOM % 75 ))`

#### HINTS

- Capitalization matters
- If the tests don't run automatically, "trash" all the terminals and try the instructions again

## 881. I=0

### 881.1

`I=0`

#### HINTS

- Capitalization matters
- If the tests don't run automatically, "trash" all the terminals and try the instructions again

## 884. echo $I

### 884.1

`echo $I`

#### HINTS

- Capitalization matters
- If the tests don't run automatically, "trash" all the terminals and try the instructions again

## 887. (( I++ )) 

### 887.1

`(( I++ ))`

#### HINTS

- Capitalization matters
- If the tests don't run automatically, "trash" all the terminals and try the instructions again

## 890. echo $I

### 890.1

`echo $I`

#### HINTS

- Capitalization matters
- If the tests don't run automatically, "trash" all the terminals and try the instructions again

## 893. (( I += 10 ))

### 893.1

`(( I += 10 ))`

#### HINTS

- Capitalization matters
- If the tests don't run automatically, "trash" all the terminals and try the instructions again

## 896. echo $I

### 896.1

`echo $I`

#### HINTS

- Capitalization matters
- If the tests don't run automatically, "trash" all the terminals and try the instructions again

## 899. echo $(( I + 4 ))

### 899.1

`echo $(( I + 4 ))`

#### HINTS

- Capitalization matters
- If the tests don't run automatically, "trash" all the terminals and try the instructions again

## 902. echo $I

### 902.1

`echo $I`

#### HINTS

- Capitalization matters
- If the tests don't run automatically, "trash" all the terminals and try the instructions again

## 905. J=$(( I - 6 ))

### 905.1

`J=$(( I - 6 ))`

#### HINTS

- Capitalization matters
- If the tests don't run automatically, "trash" all the terminals and try the instructions again

## 908. echo $J

### 908.1

`echo $J`

#### HINTS

- Capitalization matters
- If the tests don't run automatically, "trash" all the terminals and try the instructions again

## 911. echo $(( J * 5 + 25 ))

### 911.1

`echo $(( J * 5 + 25 ))`

#### HINTS

- Capitalization matters
- If the tests don't run automatically, "trash" all the terminals and try the instructions again

## 912. echo $J

### 912.1

`echo $J`

#### HINTS

- Capitalization matters
- If the tests don't run automatically, "trash" all the terminals and try the instructions again

## 914. declare -p J

### 914.1

`declare -p J`

#### HINTS

- Capitalization matters
- If the tests don't run automatically, "trash" all the terminals and try the instructions again

## 916. declare -p RANDOM

### 916.1

`declare -p RANDOM`

#### HINTS

- Capitalization matters
- If the tests don't run automatically, "trash" all the terminals and try the instructions again

## 920. NUM=$(( RANDOM % 75 + 1 ))

### 920.1

`NUM=$(( RANDOM % 75 + 1 ))`

#### HINTS

- Capitalization matters
- If the tests don't run automatically, "trash" all the terminals and try the instructions again

## 923. echo $NUM

### 923.1

`echo $NUM`

#### HINTS

- Capitalization matters
- If the tests don't run automatically, "trash" all the terminals and try the instructions again

## 928. Set NUMBER=$(( RANDOM % 75 + 1))

### 928.1

Change your number variable to `$(( RANDOM % 75 + 1 ))` and your echo statement to just echo $NUMBER again.

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

## 1000. ./bingo.sh

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

## 1020. chmod +x fortune.sh

### 1020.1

Change the permissions

#### HINTS

- Capitalization matters
- If the tests don't run automatically, "trash" all the terminals and try the instructions again

## 1030. Add shebang

### 1030.1

Add a shebang

#### HINTS

- Capitalization matters
- If the tests don't run automatically, "trash" all the terminals and try the instructions again

## 1040. Add comment

### 1040.1

Add comment `Program to tell a persons fortune`

#### HINTS

- Capitalization matters
- If the tests don't run automatically, "trash" all the terminals and try the instructions again

## 1050. Add echo "title"

### 1050.1

Add echo `~~ Fortune teller ~~`

#### HINTS

- Capitalization matters
- If the tests don't run automatically, "trash" all the terminals and try the instructions again

## 1060. ./fortune.sh

### 1060.1

fortune.sh

#### HINTS

- Capitalization matters
- If the tests don't run automatically, "trash" all the terminals and try the instructions again

## 1070. ARR=("a" "b" "c")

### 1070.1

In terminal: ARR=("a" "b" "c")

#### HINTS

- Capitalization matters
- If the tests don't run automatically, "trash" all the terminals and try the instructions again

## 1080. echo ${ARR[1]}

### 1080.1

`echo ${ARR[1]}`

#### HINTS

- Capitalization matters
- If the tests don't run automatically, "trash" all the terminals and try the instructions again

## 1090. echo ${ARR[@]}

### 1090.1

`echo ${ARR[@]}`

#### HINTS

- Capitalization matters
- If the tests don't run automatically, "trash" all the terminals and try the instructions again

## 1100. declare -p ARR

### 1100.1

`declare -p ARR`

#### HINTS

- Capitalization matters
- If the tests don't run automatically, "trash" all the terminals and try the instructions again

## 1110. Add RESPONSES array

### 1110.1

Create the array `RESPONSES=("Yes" "No" "Maybe")` - but with all entries

#### HINTS

- Capitalization matters
- If the tests don't run automatically, "trash" all the terminals and try the instructions again

## 1120. echo ${RESPONSES[5]}

### 1120.1

`echo ${RESPONSES[5]}`

#### HINTS

- Capitalization matters
- If the tests don't run automatically, "trash" all the terminals and try the instructions again

## 1130. ./fortune.sh

### 1130.1

`./fortune.sh`

#### HINTS

- Capitalization matters
- If the tests don't run automatically, "trash" all the terminals and try the instructions again

## 1140. Add N=$((RANDOM % 7))

### 1140.1

Add `N=$((RANDOM % 7))`

#### HINTS

- Capitalization matters
- If the tests don't run automatically, "trash" all the terminals and try the instructions again

## 1150. Change to echo ${RESPONSES[$N]}

### 1150.1

Change to `echo ${RESPONSES[$N]}`

#### HINTS

- Capitalization matters
- If the tests don't run automatically, "trash" all the terminals and try the instructions again

## 1160. help

### 1160.1

`help`

#### HINTS

- Capitalization matters
- If the tests don't run automatically, "trash" all the terminals and try the instructions again

## 1170. help function

### 1170.1

`help function`

#### HINTS

- Capitalization matters
- If the tests don't run automatically, "trash" all the terminals and try the instructions again

## 1180. Add GET_FORTUNE function

### 1180.1

Add `GET_FORTUNE` function. 

#### HINTS

- Capitalization matters
- If the tests don't run automatically, "trash" all the terminals and try the instructions again

## 1190. Add echo Ask a yes or no question

### 1190.1

Add echo ask a yes or no question

#### HINTS

- Capitalization matters
- If the tests don't run automatically, "trash" all the terminals and try the instructions again

## 1200. Add GET_FORTUNE function call

### 1200.1

Add `GET_FORTUNE` function call.

#### HINTS

- Capitalization matters
- If the tests don't run automatically, "trash" all the terminals and try the instructions again

## 1210. ./fortune.sh

### 1210.1

./fortune.sh

#### HINTS

- Capitalization matters
- If the tests don't run automatically, "trash" all the terminals and try the instructions again

## 1220. Add read QUESTION

### 1220.1

Add `read QUESTION`

#### HINTS

- Capitalization matters
- If the tests don't run automatically, "trash" all the terminals and try the instructions again

## 1230. ./fortune.sh

### 1230.1

./fortune.sh

#### HINTS

- Capitalization matters
- If the tests don't run automatically, "trash" all the terminals and try the instructions again

## 1240. help

### 1240.1

help

#### HINTS

- Capitalization matters
- If the tests don't run automatically, "trash" all the terminals and try the instructions again

## 1250. help until

### 1250.1

`help until`

#### HINTS

- Capitalization matters
- If the tests don't run automatically, "trash" all the terminals and try the instructions again

## 1260. Add until loop

### 1260.1

Add until [[ question == "test?" ]]

#### HINTS

- Capitalization matters
- If the tests don't run automatically, "trash" all the terminals and try the instructions again

## 1270. ./fortune.sh

### 1270.1

./fortune.sh

#### HINTS

- Capitalization matters
- If the tests don't run automatically, "trash" all the terminals and try the instructions again

## 1280. help [[ expression ]]

### 1280.1

`help [[ expression ]]`

#### HINTS

- Capitalization matters
- If the tests don't run automatically, "trash" all the terminals and try the instructions again

## 1290. [[ hello == hello ]]; echo $?

### 1290.1

`[[ hello == hello ]]; echo $?`

#### HINTS

- Capitalization matters
- If the tests don't run automatically, "trash" all the terminals and try the instructions again

## 1300. [[ hello == world ]]; echo $?

### 1300.1

`[[ hello == world ]]; echo $?`

#### HINTS

- Capitalization matters
- If the tests don't run automatically, "trash" all the terminals and try the instructions again

## 1310. [[ hello =~ el ]]; echo $?

### 1310.1

`[[ hello =~ el ]]; echo $?`

#### HINTS

- Capitalization matters
- If the tests don't run automatically, "trash" all the terminals and try the instructions again

## 1320. [[ "hello world" =~ "ello" ]]; echo $?

### 1320.1

`[[ "hello world" =~ "ello" ]]; echo $?`

#### HINTS

- Capitalization matters
- If the tests don't run automatically, "trash" all the terminals and try the instructions again

## 1330. [[ "hello world" =~ ^h ]]; echo $?

### 1330.1

`[[ "hello world" =~ ^h ]]; echo $?`

#### HINTS

- Capitalization matters
- If the tests don't run automatically, "trash" all the terminals and try the instructions again

## 1340. [[ "hello world" =~ ^h.+d? ]]; echo $?

### 1340.1

`[[ "hello world" =~ ^h.+d? ]]; echo $?`

#### HINTS

- Capitalization matters
- If the tests don't run automatically, "trash" all the terminals and try the instructions again

## 1350. VAR="hello world"

### 1350.1

`VAR="hello world"`

#### HINTS

- Capitalization matters
- If the tests don't run automatically, "trash" all the terminals and try the instructions again

## 1360. echo $VAR

### 1360.1

`echo $VAR`

#### HINTS

- Capitalization matters
- If the tests don't run automatically, "trash" all the terminals and try the instructions again

## 1370. [[ $VAR == "hello world" ]]; echo $?

### 1370.1

`[[ $VAR == "hello world" ]]; echo $?`

#### HINTS

- Capitalization matters
- If the tests don't run automatically, "trash" all the terminals and try the instructions again

## 1380. [[ $VAR =~ \?$ ]; echo $?

### 1380.1

`[[ $VAR =~ \?$ ]]; echo $?`

#### HINTS

- Capitalization matters
- If the tests don't run automatically, "trash" all the terminals and try the instructions again

## 1390. Change until condition

### 1390.1

Change until condition to see if it ends in a `?`

#### HINTS

- Capitalization matters
- If the tests don't run automatically, "trash" all the terminals and try the instructions again

## 1400. ./fortune.sh

### 1400.1

`./fortune.sh`

#### HINTS

- Capitalization matters
- If the tests don't run automatically, "trash" all the terminals and try the instructions again

## 1410. Add if to GET_FORTUNE

### 1410.1

Add `if` to `GET_FORTUNE`

#### HINTS

- Capitalization matters
- If the tests don't run automatically, "trash" all the terminals and try the instructions again

## 1420. ./fortune.sh

### 1420.1

`./fortune.sh`

#### HINTS

- Capitalization matters
- If the tests don't run automatically, "trash" all the terminals and try the instructions again

## 1430. touch five.sh

### 1430.1

`touch five.sh`

#### HINTS

- Capitalization matters
- If the tests don't run automatically, "trash" all the terminals and try the instructions again

## 1440. chmod +x five.sh

### 1440.1

chmod +x five.sh

#### HINTS

- Capitalization matters
- If the tests don't run automatically, "trash" all the terminals and try the instructions again

## 1450. Add shebang

### 1450.1

Add shebang

#### HINTS

- Capitalization matters
- If the tests don't run automatically, "trash" all the terminals and try the instructions again

## 1460. Add comment

### 1460.1

add comment 'program to run my other four programs'

#### HINTS

- Capitalization matters
- If the tests don't run automatically, "trash" all the terminals and try the instructions again

## 1470. Add ./questionnaire.sh

### 1470.1

Add questionnaire.sh to the file

#### HINTS

- Capitalization matters
- If the tests don't run automatically, "trash" all the terminals and try the instructions again

## 1480. ./five

### 1480.1

./five

#### HINTS

- Capitalization matters
- If the tests don't run automatically, "trash" all the terminals and try the instructions again

## 1490. Add the rest of the scripts

### 1490.1

Add the rest of the scripts to the file

#### HINTS

- Capitalization matters
- If the tests don't run automatically, "trash" all the terminals and try the instructions again

## 1500. Clear

### 1500.1

clear

#### HINTS

- Capitalization matters
- If the tests don't run automatically, "trash" all the terminals and try the instructions again

## 1510. ./five

### 1510.1

./five

#### HINTS

- Capitalization matters
- If the tests don't run automatically, "trash" all the terminals and try the instructions again

## 1520. help

### 1520.1

help

#### HINTS

- Capitalization matters
- If the tests don't run automatically, "trash" all the terminals and try the instructions again

## 1530. help type

### 1530.1

help type

#### HINTS

- Capitalization matters
- If the tests don't run automatically, "trash" all the terminals and try the instructions again

## 1540. type echo

### 1540.1

type echo

#### HINTS

- Capitalization matters
- If the tests don't run automatically, "trash" all the terminals and try the instructions again

## 1550. type read

### 1550.1

help type

#### HINTS

- Capitalization matters
- If the tests don't run automatically, "trash" all the terminals and try the instructions again

## 1560. type if

### 1560.1

type if

#### HINTS

- Capitalization matters
- If the tests don't run automatically, "trash" all the terminals and try the instructions again

## 1570. type then

### 1570.1

type then

#### HINTS

- Capitalization matters
- If the tests don't run automatically, "trash" all the terminals and try the instructions again

## 1580. type bash

### 1580.1

type bash

#### HINTS

- Capitalization matters
- If the tests don't run automatically, "trash" all the terminals and try the instructions again

## 1590. type psql

### 1590.1

type psql

#### HINTS

- Capitalization matters
- If the tests don't run automatically, "trash" all the terminals and try the instructions again

## 1600. type ./five.sh

### 1600.1

type ./five.sh

#### HINTS

- Capitalization matters
- If the tests don't run automatically, "trash" all the terminals and try the instructions again

## 1610. exit

### 1610.1

exit

#### HINTS

- Capitalization matters
- If the tests don't run automatically, "trash" all the terminals and try the instructions again
