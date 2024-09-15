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

To start, open the file in the main editor by clicking the filename in the left side panel.
Then, add the text `echo hello questionnaire` at the top of the file.

#### HINTS

- If the left side panel isn't visible, click the icon that looks like two pieces of paper 
at the top left to open the panel. Then, click on your file to open it
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

The output was the same. There are many interpreters which may not give the output you expect. Find out where the `bash` interpreter is located by entering `which bash` in the terminal.

#### HINTS

- Type `which bash` in the terminal and press enter

## 60. Add shebang

### 60.1

That's the absolute path to the `bash` interpreter. You can tell your program to use it by placing a `shebang` at the very top of the file like this: `#!<path_to_interpreter>`. Add a `shebang` at the very top of your file, the one you want looks like this: `#!/bin/bash`.

#### HINTS

- Add `#!/bin/bash` at the top of your `questionnaire.sh` file

## 70. ./questionnaire

### 70.1

Now, instead of using `sh` or `bash` to run your script. You can run it by executing the file and it will default to bash. Execute your script with `./questionnaire.sh`. You will get a permission denied error.

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

Next to your file is `-rw-r--r--`. All but the first character (`-`) describe permissions different users have with the file. `r` means `read`, `w` means `write`, `x` means `execute`. I don't see an `x` anywhere, so nobody can execute it. Enter `chmod +x questionnaire.sh` in the terminal to give everyone executable permissions.

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

Your script printed the result of the two commands as if you entered them in the terminal. Delete everything but the `shebang` from your file so you can start making the questionnaire.

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

The question was printed. Next, you want to be able to accept input from a user. You can do that with `read` like this: `read VARIABLE_NAME`. This will get user input and store it into a new variable. After you print the question, use `read` to get input and store it in a variable named `NAME`.

#### HINTS

- Add `read NAME` at the bottom of your `questionnaire.sh` file

## 210. Add echo Hello $NAME

### 210.1

At the bottom of your script, use `echo` to print `Hello <name>.` to the terminal.

#### HINTS

- You can use your `NAME` variable like this: `$NAME`
- Use your `$NAME` variable in place of `<name>`
- Don't forget the period
- Add `echo Hello $NAME.` at the bottom of your script

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

- Here's an example `read VARIABLE_NAME`
- Add `read LOCATION` to your script below `echo $QUESTION2`

## 260. Add echo Hello $NAME from $LOCATION

### 260.1

Change the existing response to `Hello <name> from <location>.`.

#### HINTS

- Use your two variables in place of `<name>` and `<location`
- Use your two variables with `$NAME` and `$LOCATION`
- Make sure the command is at the bottom of the file
- The suggested command should look like: `echo Hello $NAME from $LOCATION.`

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

- Enter the suggested command in the terminal
- Here's an example: `<command> <flag>`
- The command is `echo`, the flag is `--help`
- Type `echo --help` in the terminal and press enter

## 310. man echo

### 310.1

That didn't work as I hoped. Another way to find information about a command is with `man`. It stands for `manual` and you can use it like this: `man <command>`. See if there's a manual for `echo`.

#### HINTS

- Type `man echo` in the terminal and press enter
- Press enter until you have seen the whole menu

## 320. Add echo -e \n~~ Questionnaire ~~\n

### 320.1

At the top of the menu, the `-e` option looks promising. And the `\n` below it says `new line`. You should take a look at those. In your script, change the title to `echo -e \n~~ Questionnaire ~~\n` to see if that prints the empty lines.

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

It didn't print the empty lines. `echo` will only print empty lines if the value is enclosed in quotes. Place double quotes around the title that gets printed to see if it works.

#### HINTS

- Change the suggested line to `echo -e "\n~~ Questionnaire ~~\n"`

## 330. ./questionnaire

### 330.1

Run your script again to see if that fixed it.

#### HINTS

- Run your file by executing it
- Type `./questionnaire.sh` in the terminal and press enter
- Make sure you are in the `project` folder first
- You can press `ctrl+c` to close the program

## 340. Add QUESTION3 variable

### 340.1

Now it's working :smile: Create a `QUESTION3` variable next to the other two, set it's value to `"What's your favorite coding website?"`

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

Run the script and enter values when the program is waiting. Let's see the final output.

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

It looks good. I think you are done with that script for now. The next program will be countdown timer. Use the `touch` command to create a new file named `countdown.sh` in your `project` folder.

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

Comments in `bash` look like this: `# <comment>`. Add a comment below the `shebang` that says `Program that counts down to zero from a given argument` so people know what it does. Note that the `shebang` is a special case and is not treated like a comment.

#### HINTS

- Add `# Program that counts down to zero from a given argument` to your `countdown.sh` file

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

Now it just prints the first argument. Your program will accept an argument to count down from. You will test it with an `if` statement to make sure it's a positive integer. I wonder what that syntax would look like. Type `help` in the terminal to see if you can find anything.

#### HINTS

- Type `help` in the terminal and press enter

## 470. man if

### 470.1

This is a list of built-in commands. You should look over it, some of them may look familiar. I see `echo` in there. Another one is `if`. See if you can find out more about it by checking its `man` page.

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

Remove the `echo $1` in your script and add an `if` condition that checks `if [[ $1 == arg1 ]]`. In its `then` area, use `echo` to print `true` to the screen. There must be spaces on the inside of the brackets (`[[ ... ]]`) and around the operator (`==`).

#### HINTS

- Make sure to remove the `echo $1`
- Add the following to your `countdown.sh` file:
```sh
if [[ $1 == arg1 ]]
then
  echo true
fi
```

## 500. ./countdown arg1

### 500.1

Notice that the end of the syntax is `fi` (`if` backwards). It should print `true` if you pass `arg1` to your script now. Run the script with `arg1` as the only argument.

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

Nothing was printed. One of the optional parts of `if` was an `else` area. You can use it like this:

```sh
if [[ CONDITION ]]
then
  STATEMENTS
else
  STATEMENTS
fi
```

Add an `else` to your existing `if` condition. Use `echo` to print `false` if the condition fails.

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

Now it printed `false`. Your program is expecting an integer to count down from as its argument. You can compare integers inside the brackets (`[[ ... ]]`) of your `if` with `-eq` (equal), `-ne` (not equal), `-lt` (less than), `-le` (less than or equal), `-gt` (greater than), `-ge` (greater than or equal). Change your `if` condition to check if your first argument is less than `5`.

#### HINTS

- Make sure there's spaces inside the brackets (`[[ ... ]]`) and around the operator (`-lt`)
- Your `if` condition should look like this: `[[ $1 -lt 5 ]]`
- The whole `if` should look like this:
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

Near the top left, it says `[[ expression ]]`. Those look like the double brackets you are using. See if you can get more info about that with the `help` command like you did with `help if`.

#### HINTS

- Here's an example: `help <command>`
- Type `help [[ expression ]]` or `help [[` in the terminal and press enter

## 548. help test

### 548.1

It might not be a bad idea to read that. Looks like you can use some, probably familiar, things like `!`, `&&`, and `||` to compare multiple expressions. There's also `==` and `!=` operators for an individual expression. It says something about the `test` built-in command. See if you can bring up the `help` menu for that.

#### HINTS

- View the `help` menu of the suggested command like you did for the `help if`
- Here's an example: `help <command>`
- Type `help test` in the terminal and press enter

## 550. Change if to [[ $1 -le 5 ]]

### 550.1

That's what I was looking for. At the top are some file operators. There's some string and other operators as well. You should take a look at them. Near the bottom, are the arithmetic operators you used with your `if` condition. Change the condition in your script to check if the first argument is less than or equal to `5`.

#### HINTS

- The `if` condition should look like this: `[[ $1 -le 5 ]]`
- Make sure there's spaces inside the brackets (`[[ ... ]]`) and around the operator (`-le`)
- It's the `if` in your `countdown.sh` file

## 552. ./countdown 5

### 552.1

Run the script and use `5` as a first argument again.

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

Use `echo` to view the exit status of the command you just entered.

#### HINTS

- Type `echo $?` in the terminal and press enter
- Your second to last command should be `[[ 4 -ge 5 ]]`. So enter that right before `echo $?`

## 562. [[ 4 -ge 5 ]]; echo $?

### 562.1

It printed `1` this time for false. You can separate commands on a single line with `;`. Enter your last two commands on one line like this: `[[ 4 -ge 5 ]]; echo $?`. It will run the expression, then print the exit status of it since it was the last command.

#### HINTS

- Make sure there's spaces inside the brackets (`[[ ... ]]`) and around the operator (`-ge`)
- Type `[[ 4 -ge 5 ]]; echo $?` in the terminal and press enter

## 564. [[ 10 -ne 5 ]]; echo $?

### 564.1

It's still false. Using the same syntax of `[[ ... ]]; echo $?`, check if `10` is not equal to `5` and print the exit status of the expression on one line.

#### HINTS

- Check the `help test` menu to find the `not equal` operator
- It's the `-ne` operator
- You previously used `[[ 4 -ge 5 ]]; echo $?`
- Make sure there's spaces inside the brackets and around the operator
- Type `[[ 10 -ne 5 ]]; echo $?` in the terminal and press enter

## 566. bad_command; echo $?

### 566.1

You can think of an exit status of `0` as true. But it means that the command had zero errors. All commands have an exit status. Using the same syntax, enter `bad_command;` and check its exit status on a single line.

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

`bad_file.txt` doesn't exist. I think you're getting the hang of this. Using the same syntax, check if you have permissions to execute your `countdown.sh` file. You may want to look at that menu again.

#### HINTS

- View the `help test` menu to find the file operator for checking if a file is executable by you
- It's the `-x` operator
- The syntax you want is `[[ ... ]]; echo $?` to see if the condition is true
- Don't forget the spaces inside the brackets
- Type `[[ -x countdown.sh ]]; echo $?` in the terminal and press enter
- Make sure you are in the `project` folder first

## 582. help [[ expression ]]

### 582.1

You played around with a number of the expressions. View the `help [[ expression ]]` menu again that you looked at before to see a few more options. You can view the menu with just `help [[`.

#### HINTS

- Enter the suggested command in the terminal
- Type `help [[ expression ]]` or `help [[` in the terminal and press enter

## 584. [[ -x countdown.sh && 5 -le 4 ]]; echo $?

### 584.1

As I mentioned before, you can test multiple expressions with `&&` and `||`. Enter `[[ -x countdown.sh && 5 -le 4 ]]; echo $?` in the terminal to test the file is executable by you **and** five is less than or equal to four.

#### HINTS

- Enter the suggested command in the terminal
- Type `[[ -x countdown.sh && 5 -le 4 ]]; echo $?` in the terminal and press enter
- Make sure there's spaces around the brackets and all the operators

## 586. [[ -x countdown.sh || 5 -le 4 ]]; echo $?

### 586.1

Both conditions weren't true, so the exit status was `1` for `false`. Try testing the same two conditions with the `or` operator.

#### HINTS

- Modify this `[[ -x countdown.sh && 5 -le 4 ]]; echo $?` with the suggestion and enter it in the terminal
- Use the `or` operator from the `help [[ expression ]]` menu
- The `or` operator is `||`
- Type `[[ -x countdown.sh || 5 -le 4 ]]; echo $?` in the terminal and press enter
- Make sure there's spaces around the brackets and all the operators

## 588. Change if to [[ $1 -gt 0 ]]

### 588.1

One of the conditions was true so it printed `0`. I think that's enough of a detour. Back in your script, change the `if` condition to check if the first argument is **greater than zero** so you can be sure it's something you can count down from.

#### HINTS

- Use the `-gt` operator in your `if` condition
- The `if` condition should look like this: `[[ $1 -gt 0 ]]`
- It's in the `countdown.sh` file

## 590. Change if !# message

### 590.1

The condition you added checks if a positive integer was passed as an argument to the script and executes the `then` area. Change the existing `echo` command to print `Include a positive integer as the first argument.` if a positive integer is not used.

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

The above creates a variable (`i = 10`), then prints it, subtracts one, and repeats until `i` is not greater than `0`. So it prints `10` through `1`. In the `then` area of your condition, replace the `echo` with a `for` loop that prints from the argument (`$1`) to `1`.

#### HINTS

- Set the variable to the value of your argument (`$1`) initially
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

Run your script and use `10` as the first argument.

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

- View a manual with the `man` command
- Here's an example: `man <command>`
- Enter `man sleep` in the terminal
- Press enter until you have seen the whole menu

## 675. sleep 3

### 675.1

At the top, it says you can pause execution for a number of seconds. Try it out by entering `sleep 3` in the terminal.

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

Run your script and use `3` as the first argument.

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

Run your script with `3` as the argument again.

#### HINTS

- Type `./countdown.sh 3` in the terminal and press enter
- Make sure you are in the `project` folder first

## 696. Add echo -e "title"

### 696.1

Excellent. I want it to display a title like the other script. Make it so that it prints `~~ Countdown Timer ~~` before anything else. Include a new line before and after it like you did for the other title.

#### HINTS

- Use the `echo` command with the `-e` flag and the new line (`\n`) character
- Make sure to place the message in double quotes
- Here's an example: `echo -e "\n<message>\n"`
- Add `echo -e "\n~~ Countdown Timer ~~\n"` to the `countdown.sh` file after the comment

## 698. ./countdown 1

### 698.1

Run your script and use `1` as the first argument again to see the title.

#### HINTS

- Type `./countdown.sh 1` in the terminal and press enter
- Make sure you are in the `project` folder first

## 700. Add Multiline comment

### 700.1

This is fun. You can create a multiline comment like this:

```sh
: '
  comment here
  more comment here
'
```

Comment out your `for` loop with a multiline comment. I want to try and do this with a `while` loop.

#### HINTS

- Comment out the `for` loop in your `countdown.sh` file with a multiline comment
- Make sure there's a space between the `:` and `'`
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

It shows the syntax. First, below your comment, create a variable named `I` that is set to the value of your first argument. It will start there, then on each iteration of the `while` loop you can subtract `1` from it until it reaches `0`.

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

`I` never changes here, so you would have an infinite loop. You can subtract one from `I` with double parenthesis (`((...))`) and the `--` operator. In your while loop, add `(( I-- ))` after you `echo $I` to subtract one from `I` on each pass. 

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

Add a `shebang` at the top of your new script. It should use `bash` again like other two.

#### HINTS

- A `shebang` looks like this: `#!<path_to_interpreter>`
- Enter `which bash` in the terminal to see the path to `bash`
- Look at the `shebang` in one of your other scripts to get the syntax
- It should look like this: `#!/bin/bash`
- Add `#!/bin/bash` at the top of your `bingo.sh` file

## 810. Add comment

### 810.1

Add a comment below the `shebang` that says, `Bingo Number Generator`.

#### HINTS

- Comments look like this: `# <comment>`
- Add `#Bingo Number Generator` below the `shebang`
- Capitalization matters

## 815. Add echo -e "title"

### 815.1

Before I forget, use a single `echo` command to print a title for this program. It should say `~~ Bingo Number Generator ~~` with an empty line before and after it.

#### HINTS

- Use the `echo` command with the `-e` flag and the new line (`\n`) character
- Don't forget the double quotes when using a new line character
- Take a look at one of the title's from a previous file for a hint
- Here's an example: `echo -e "\n<message>\n"`
- You previously used `echo -e "\n~~ Countdown Timer ~~\n"`
- Add `echo -e "\n~~ Bingo Number Generator ~~\n"` below the comment of your `bingo.sh` file

## 817. Add NUMBER=5 variable

### 817.1

In your script, create a `NUMBER` variable that equals `5`.

#### HINTS

- Here's an example: `VARIABLE_NAME=VALUE`
- Add `NUMBER=5` to the bottom of your `bingo.sh` file

## 818. echo $NUMBER

### 818.1

Below your new variable, use `echo` to print it to the screen.

#### HINTS

- Here's an example: `echo $<variable>`
- Use `NUMBER` in place of `<variable>`
- Add `echo $NUMBER` at the bottom of your `bingo.sh` file

## 819. ./bingo.sh

### 819.1

Run the script by executing it.

#### HINTS

- Type `./bingo.sh` in the terminal and press enter
- Make sure you are in the `project` folder first

## 820. printenv

### 820.1

The numbers in bingo go up to 75, each number has a letter from the word `bingo` associated with it. You will need to randomly generate a number between 1 and 75. Bash may have something that can help you here. A shell comes with environment variables. View them by entering `printenv` in the terminal.

#### HINTS

- Type `printenv` in the terminal and press enter

## 822. echo $LANG

### 822.1

These are all environment variables, they are predefined and loaded with each shell. Most of them aren’t very relevant, but it’s nice to know they’re there. One of them is `LANG`. Use `echo` to print it in the terminal.

#### HINTS

- Here's an example: `echo $<variable>`
- Type `echo $LANG` in the terminal and press enter

## 824. declare -p

### 824.1

View all variables in the shell with `declare -p`. `-p` stands for `print`

#### HINTS

- Type `declare -p` in the terminal and press enter

## 826. echo $RANDOM

### 826.1

This list includes all the environment variables, and any others that may have been created in the current shell. There's one named `RANDOM`. Use `echo` to print it in the terminal.

#### HINTS

- Here's an example: `echo $<variable>`
- Type `echo $RANDOM` in the terminal and press enter

## 828. Change to NUMBER=$RANDOM

### 828.1

Back in your script, use the `RANDOM` variable to set `NUMBER` to a random number instead of `5`.

#### HINTS

- Change `NUMBER=5` to `NUMBER=$RANDOM`

## 830. ./bingo.sh

### 830.1

Run the script a few times in a row to make sure it's working.

#### HINTS

- Type `./bingo.sh` in the terminal and press enter two times in a row
- Make sure you are in the `project` folder first

## 835. Change to NUMBER=$RANDOM%75

### 835.1

The `RANDOM` variable will generate a random number between 0 and 32767. You can use the `modulus` operator to make it in the range you want. In your script, change the `NUMBER` variable to `$RANDOM%75`.

#### HINTS

- Change `NUMBER=$RANDOM` to `NUMBER=$RANDOM%75`

## 840. ./bingo.sh

### 840.1

Run the script again.

#### HINTS

- Type `./bingo.sh` in the terminal and press enter
- Make sure you are in the `project` folder first

## 881. I=0

### 881.1

Bash sees everything as a string so it just printed the `%75` part literally. In the terminal, create an `I` variable equal to `0` (zero), so you can play with it and figure out how to do some calculations.

#### HINTS

- Type `I=0` in the terminal and press enter

## 884. echo $I

### 884.1

In the terminal, use `echo` to print your new variable.

#### HINTS

- Here's an example: `echo $<variable>`
- Type `echo $I` in the terminal and press enter

## 887. (( I++ )) 

### 887.1

I noticed that you used double parenthesis in the `while` loop of your countdown timer to subtract one from `I`. Type `(( I++ ))` in the terminal to see if anything happens.

#### HINTS

- Type `(( I++ ))` in the terminal and press enter

## 890. echo $I

### 890.1

There was no output. Use `echo` to print `I` in the terminal again.

#### HINTS

- Type `echo $I` in the terminal and press enter

## 891. help let

### 891.1

The double parenthesis performed the calculation, changing the value of `I` from `0` to `1`. Enter `help let` in the terminal to see the operators you can use with the double parenthesis.

#### HINTS

- Type `help let` in the terminal and press enter

## 893. (( I += 10 ))

### 893.1

You used several of these now, including in the `for` loop from the countdown timer. Enter `(( I += 10 ))` in the terminal to increment `I` by `10`. Note that you don't need to prepend variables with `$` inside these parenthesis.

#### HINTS

- Type `(( I += 10 ))` in the terminal and press enter

## 896. echo $I

### 896.1

Use `echo` to print your `I` variable again.

#### HINTS

- Type `echo $I` in the terminal and press enter.

## 897. $(( I + 4 ))

### 897.1

It should have printed `11` for the value of `I`. Using the double parenthesis like you have been is good for changing variable values or making comparisons. It makes the calculation in place and provides no output. If you want to make a calculation and do something with the result, add a `$` in front like this: `$(( ... ))`. Type `$(( I + 4 ))` in the terminal to see what happens.

#### HINTS

- If it didn't print `11` for `I`, enter `I=11` to set it to `11`
- Type `$(( I + 4 ))` in the terminal and press enter

## 899. echo $(( I + 4 ))

### 899.1

It should say, `bash: 15: command not found`. It replaced the command with the result of the calculation. Effectively, trying to run `15` as a command. Enter the same command, but put `echo` in front of it. The command was `$(( I + 4 ))`

#### HINTS

- Type `echo $(( I + 4 ))` in the terminal and press enter

## 902. echo $I

### 902.1

Again, it replaced the calculation with the result. So it was basically the same as if you entered `echo 15`. Use `echo` to print `I` to the screen again.

#### HINTS

- Type `echo $I` in the terminal and press enter

## 905. J=$(( I - 6 ))

### 905.1

It should still have printed `11` for `I`. See the hints if it didn't. These double parenthesis with a `$` are how you can assign a variable to some calculation. In the terminal, create a `J` variable, and use the `$(( ... ))` syntax to set its value to `I - 6`.

#### HINTS

- If it didn't print `11` for `I`, enter `I=11` to set it to `11`
- Type `J=$(( I - 6 ))` in the terminal and press enter

## 908. echo $J

### 908.1

Use `echo` to print `J`.

#### HINTS

- Here's an example: `echo $<variable>`
- Type `echo $J` in the terminal and press enter

## 911. echo $(( J * 5 + 25 ))

### 911.1

`J` should equal `5`. For some more practice, use `echo` to print the value `J * 5 + 25`. 

#### HINTS

- Type `echo $(( J * 5 + 25 ))` in the terminal and press enter

## 912. echo $J

### 912.1

It should have printed `50`. Print `J` with `echo` again.

#### HINTS

- Here's an example: `echo $<variable>`
- Type `echo $J` in the terminal and press enter

## 913. declare -p

### 913.1

So, as a reminder, `(( ... ))` will perform a calculation or operation and output nothing. `$(( ... ))` will replace the calculation with the result of it. You made a few variables in this shell, view them with `declare -p`.

#### HINTS

- Type `declare -p` in the terminal and press enter

## 914. declare -p J

### 914.1

`declare` can be used to create variables, but you are just going to use it to view them for now. If you scroll up a little, you should find your `I` and `J` variables in there. View `J` with `declare -p J`.

#### HINTS

- Type `declare -p J` in the terminal and press enter

## 916. declare -p RANDOM

### 916.1

I saw `RANDOM` in that list, too. View it with `declare -p <variable>` like you did for `J`.

#### HINTS

- Type `declare -p RANDOM` in the terminal and press enter

## 918. echo $(( RANDOM % 75 ))

### 918.1

Okay, I think I finally know how to get the random number for the Bingo Number Generator. Use `echo` and `RANDOM % 75` to print a random number in the terminal.

#### HINTS

- Use the `$(( ... ))` syntax to calculate the random number
- Here's an example: `echo $(( <calculation> ))`
- Type `echo $(( RANDOM % 75 ))` in the terminal and press enter

## 920. echo $(( RANDOM % 75 + 1 ))

### 920.1

One tiny problem, that calculation will give a number between 0 and 74. Enter the same command in the terminal, but add `1` to the calculation to get a random number between 1 and 75.

#### HINTS

- Type `echo $(( RANDOM % 75 + 1 ))` in the terminal and press enter

## 928. Set NUMBER=$(( RANDOM % 75 + 1))

### 928.1

Back in your `bingo.sh` script, change the `NUMBER` variable so that it starts as a random number between 1 and 75 using the syntax you have been practicing.

#### HINTS

- Change the `NUMBER` variable to the result of the calculation `RANDOM % 75 + 1`
- Use the `$(( ... ))` syntax to make the calculation
- It should look like this: `NUMBER=$(( RANDOM % 75 + 1 ))`

## 930. run ./bingo.sh

### 930.1

Run your script a few times in a row to make sure it's working.

#### HINTS

- Type `./bingo.sh` in the terminal and press enter
- Make sure you are in the `project` folder first
- Run it at least two times in a row

## 940. Add TEXT variable

### 940.1

Next, create a `TEXT` variable and set the value to `"The next number is, "`. When the script is finished, the output will be something like `The next number is B:15`.

#### HINTS

- Make sure there's a space after the comma
- Add `TEXT="The next number is, "` to the `bingo.sh` file

## 945. help let

### 945.1

The letter that goes with the random number depends on what the number is. If it's 15 or less, it will be a `B`. I saw some comparisons in the `help let` menu, take a look at it again.

#### HINTS

- Type `help let` in the terminal and press enter

## 950. Add first if <= 15

### 950.1

You used the double square brackets with your `if` statement in the last program, but you can use the double parenthesis with these operators as well. In your script, create an `if` statement that uses double parenthesis for the condition. Check if the number variable is less than or equal to 15. If it is, use your two variables to print `The next number is, B:<number>`.

#### HINTS

- Make sure you only have two `echo` statements in your script, the title being one of them
- Here's an example of how your `if` statement should look:
```sh
if (( CONDITION ))
then
  STATEMENTS
fi
```
- The condition you want is `(( NUMBER <= 15 ))`
- In the statements area, use `echo` and your two variables to print `The next number is, B:<number>`
- The statements area should look like this: `echo $TEXT B:$NUMBER`
- The whole `if` statement should look like this:
```sh
if (( NUMBER <= 15 ))
then
  echo $TEXT B:$NUMBER
fi
```

## 960. Add elif -le 30

### 960.1

`if` statements can have an "else if" area like this:
```sh
if (( CONDITION ))
then
  STATEMENTS
elif [[ CONDITION ]]
then
  STATEMENTS
fi
```

Using the double square brackets this time, add an `elif` condition that checks if the number variable is less than or equal to `30`. If it is, use your two variables again to print `The next number is, I:<number>`

#### HINTS

- View the `help test` menu to see the operators you can use with the double square brackets
- The condition you want is `[[ $NUMBER -le 30 ]]`. Don't forget the `$`
- In the statements area, use `echo` and your two variables to print `The next number is, I:<number>`
- The statements area should look like this: `echo $TEXT I:$NUMBER`
- The `elif` area should look like this:
```sh
elif [[ $NUMBER -le 30 ]]
then
  echo $TEXT I:$NUMBER
fi
```
- The whole `if` statement should look like this:
```sh
if (( NUMBER <= 15 ))
then
  echo $TEXT B:$NUMBER
elif [[ $NUMBER -le 30 ]]
then
  echo $TEXT I:$NUMBER
fi
```

## 970. Add elif < 46

### 970.1

You can add as many `elif` sections to an `if` statement as you want. Add another `elif`, below the last, one that uses the double parenthesis to check if the number variable is less than 46. If it is, use your two variables to print `The next number is, N:<number>`

#### HINTS

- View the `help let` menu to see the operators you can use with the double parenthesis
- The operator you want it `<`
- You can add another `elif` like this:
```sh
if CONDITION
then
  STATEMENTS
elif CONDITION
then
  STATEMENTS
elif CONDITION
then
  STATEMENTS
fi
```
- The condition you want is `(( NUMBER < 46 ))`
- In the statements area, use `echo` and your two variables to print `The next number is, N:<number>`
- The statements area should look like this: `echo $TEXT N:$NUMBER`
- This `elif` area should look like this:
```sh
elif (( NUMBER < 46 ))
then
  echo $TEXT N:$NUMBER
fi
```
- The whole `if` statement should look like this:
```sh
if (( NUMBER <= 15 ))
then
  echo $TEXT B:$NUMBER
elif [[ $NUMBER -le 30 ]]
then
  echo $TEXT I:$NUMBER
elif (( NUMBER < 46 ))
then
  echo $TEXT N:$NUMBER
fi
```

## 980. Add elif -lt 61

### 980.1

Run your script if you want to see the output. It should print one of the sentences if the random number is less than 46. It may take a couple tries. Add another `elif`, below the last one, that uses double square brackets to check if the number variable is less than 61. If it is, use your two variables to print `The next number is, G:<number>`

#### HINTS

- View the `help test` menu to see the operators you can use with the double square brackets
- The operator you want it `-lt`
- The condition you want is `[[ $NUMBER -lt 61 ]]`. Don't forget the `$`
- The statements area should look like this: `echo $TEXT G:$NUMBER`
- This `elif` area should look like this:
```sh
elif [[ $NUMBER -lt 61 ]]
then
  echo $TEXT G:$NUMBER
fi
```
- The whole `if` statement should look like this:
```sh
if (( NUMBER <= 15 ))
then
  echo $TEXT B:$NUMBER
elif [[ $NUMBER -le 30 ]]
then
  echo $TEXT I:$NUMBER
elif (( NUMBER < 46 ))
then
  echo $TEXT N:$NUMBER
elif [[ $NUMBER -lt 61 ]]
then
  echo $TEXT G:$NUMBER
fi
```

## 990. Add else

### 990.1

One more case to handle. Add an `else` at the bottom of the `if` that uses your two variables to print `The next number is, O:<number>`.

#### HINTS

- View the `if/else` in your `countdown.sh` file to see how you did it before
- You don't need a condition or the `then` on this one
- Here's an example:
```sh
if CONDITION
then
  STATEMENTS
elif CONDITION
then
  STATEMENTS
...
else
  STATEMENTS
fi
```
- The `else` area should look like this:
```sh
else
  echo $TEXT O:$NUMBER
```
- The whole `if` should look like this:
```sh
if (( NUMBER <= 15 ))
then
  echo $TEXT B:$NUMBER
elif [[ $NUMBER -le 30 ]]
then
  echo $TEXT I:$NUMBER
elif (( NUMBER < 46 ))
then
  echo $TEXT N:$NUMBER
elif [[ $NUMBER -lt 61 ]]
then
  echo $TEXT G:$NUMBER
else
  echo $TEXT O:$NUMBER
fi
```

## 1000. ./bingo.sh

### 1000.1

Run your script a few times and make sure it's working.

#### HINTS

- Type `./bingo.sh` in the terminal and press enter
- Make sure you are in the `project` folder first
- Run it at least two times in a row

## 1010. touch fortune.sh

### 1010.1

I think the generator is done :smile: The next project is a fortune teller. Use the `touch` command to create `fortune.sh` in the same folder as the other scripts.

#### HINTS

- Type `touch fortune.sh` in the terminal and press enter
- Make sure you are in the `project` folder first

## 1020. chmod +x fortune.sh

### 1020.1

Give your file executable permissions.

#### HINTS

- Use the `chmod` command with the `+x` flag
- Here's an example `chmod <permissions> <filename>`
- You previously used `chmod +x bingo.sh`
- Type `chmod +x fortune.sh` in the terminal and press enter

## 1030. Add shebang

### 1030.1

Add a `shebang` at the top of your new file that uses `bash` again.

#### HINTS

- A `shebang` looks like this: `#!<path_to_interpreter>`
- Enter `which bash` in the terminal to see the path to `bash`
- Look at the `shebang` in one of your other scripts to get the syntax
- It should look like this: `#!/bin/bash`
- Add `#!/bin/bash` at the top of your `fortune.sh` file

## 1040. Add comment

### 1040.1

Add comment `Program to tell a persons fortune`

#### HINTS

- Comments look like this: `# <comment>`
- Add `#Program to tell a persons fortune` below the `shebang`
- Capitalization matters

## 1050. Add echo "title"

### 1050.1

Add a title for this one like the others. This one should say `~~ Fortune Teller ~~`. Don't forget the empty line before and after it.

#### HINTS

- Print the whole title and the empty lines with a single `echo` command
- Use the `echo` command with the `-e` flag and the new line (`\n`) character
- Don't forget to put it in double quotes
- Take a look at one of the title's from a previous file for a hint
- Here's an example: `echo -e "\n<message>\n"`
- You previously used `echo -e "\n~~ Bingo Number Generator ~~\n"`
- Add `echo -e "\n~~ Fortune Teller ~~\n"` below the comment of your `fortune.sh` file

## 1060. ./fortune.sh

### 1060.1

Run the file once to make sure it's working.

#### HINTS

- Type `./fortune.sh` in the terminal and press enter
- Make sure you are in the `project` folder first

## 1070. ARR=("a" "b" "c")

### 1070.1

This program will have an array of responses. One will be printed randomly after a user inputs a question. Practice first :smile: In the terminal, create an array like this: `ARR=("a" "b" "c")`

#### HINTS

- Type the suggested command in the terminal
- Type `ARR=("a" "b" "c")` in the terminal and press enter

## 1080. echo ${ARR[1]}

### 1080.1

Each variable in the array is like any other variable, just combined into a single variable. In the terminal, print the second item in the array with `echo ${ARR[1]}`. Note that the first item would be index zero.

#### HINTS

- Type `echo ${ARR[1]}` in the terminal

## 1090. echo ${ARR[@]}

### 1090.1

If you recall, you were able to print all the arguments to your `countdown.sh` script with `echo $*`. `echo $@` would have worked as well. Similarly, you can use the `*` or `@` to print your whole array. In the terminal, use `echo` to print all the items in your array.

#### HINTS

- Here's an example `echo ${ARR[<index>]}`
- Type `echo ${ARR[@]}` in the terminal and press enter

## 1100. declare -p ARR

### 1100.1

The variable must be in that `declare` list. View your array variable using the `declare` command and the `-p` flag.

#### HINTS

- Here's an example: `declare -p <variable>`
- Type `declare -p ARR` in the terminal

## 1110. Add RESPONSES array

### 1110.1

The `-a` next to it stands for `array`. In your script, create an array named `RESPONSES`. Give it these six values: `Yes`, `No`, `Maybe`, `Outlook good`, `Don't count on it`, and `Ask again later`.

#### HINTS

- Here's an example: `VARIABLE=(value value ...)`
- Make sure any values with spaces are in proper quotes
- You created your other array with `ARR=("a" "b" "c")`
- Add `RESPONSES=("Yes" "No" "Maybe" "Outlook good" "Don't count on it" "Ask again later")` in your script

## 1120. echo ${RESPONSES[5]}

### 1120.1

In your script, use `echo` to print the last item in the array.

#### HINTS

- Here's an example `echo ${ARR[<index>]}`
- Remember that the first item starts at zero
- Add `echo ${RESPONSES[5]}` to your `fortune.sh` file

## 1130. ./fortune.sh

### 1130.1

Run it to see the output.

#### HINTS

- Type `./fortune.sh` in the terminal and press enter
- Make sure you are in the `project` folder first

## 1140. Add N=$(( RANDOM % 6 ))

### 1140.1

You will randomly print one of the values. In your script, create a variable named `N`. Set it equal to a random number between `0` and `5`, the first and last index of the array.

#### HINTS

- Use the modulus (`%`) operator and `6` to get a number between `0` and `5`
- Look at the random number you created in the `bingo.sh` file for a hint
- Here's an example: `VARIABLE=$(( <calculation> ))`
- Calculate a random number in the range you want with `RANDOM % 6`
- Add `N=$(( RANDOM % 6 ))` to the script

## 1150. Change to echo ${RESPONSES[$N]}

### 1150.1

Change your `echo` command to print the item in the array whose index is the random number you generated.

#### HINTS

- Use your `$N` variable as the index where you print an item from the array
- Don't forget that scripts run from top to bottom, so you can't use any variables before they are created
- Change the `echo` line to `echo ${RESPONSES[$N]}`

## 1160. help

### 1160.1

You will create a function to generate an answer. Check the `help` menu to see if you can find anything.

#### HINTS

- Enter the suggested command in the terminal
- Type `help` in the terminal

## 1170. help function

### 1170.1

See any that might help? There's one that says `function`. See if you can find out more about it.

#### HINTS

- Use the `help` command to find out more
- Here's an example: `help <command>`
- Type `help function` in the terminal

## 1180. Add GET_FORTUNE function

### 1180.1

It looks like you can create a function like this:

```sh
FUNCTION_NAME() {
  STATEMENTS
}
```

Add an empty function named `GET_FORTUNE` to your script. Make sure the response you are printing is the last thing in the script.

#### HINTS

- Add this to your script:
```sh
GET_FORTUNE() {}
```
- Your `echo ${RESPONSES[$N]}` command should be at the bottom of the file

## 1190. Add echo Ask a yes or no question

### 1190.1

In your function, use `echo` to print `Ask a yes or no question:`

#### HINTS

- Your function should look like this:
```sh
GET_FORTUNE() {
  echo Ask a yes or no question:
}
```
- Your `echo ${RESPONSES[$N]}` command should be at the bottom of the file

## 1200. Add GET_FORTUNE function call

### 1200.1

Call your function by putting the name of it below where you create it. No `$` needed. Make sure the response you are printing is at the bottom of the file.

#### HINTS

- Add `GET_FORTUNE` below where you create your function to call it
- Your `echo ${RESPONSES[$N]}` command should be at the bottom of the file

## 1210. ./fortune.sh

### 1210.1

Run your script to make sure it's working.

#### HINTS

- Type `./fortune.sh` in the terminal and press enter
- Make sure you are in the `project` folder first

## 1220. Add read QUESTION

### 1220.1

In your function after you print the sentence, use `read` to get user input into a variable named `QUESTION`.

#### HINTS

- Add `read QUESTION` to your function below the `echo`
- Your function should look like this:
```sh
GET_FORTUNE() {
  echo Ask a yes or no question:
  read QUESTION
}
```
- Your `echo ${RESPONSES[$N]}` command should be at the bottom of the file

## 1230. ./fortune.sh

### 1230.1

Run the script again to test it out. Enter a question when it asks.

#### HINTS

- Type `./fortune.sh` in the terminal and press enter
- Make sure you are in the `project` folder first

## 1240. help

### 1240.1

I want to make sure the input is a question. You are going to add a loop that asks for input until the input ends with a question mark. View the `help` menu to see if you can find an appropriate loop.

#### HINTS

- Type `help` in the terminal and press enter

## 1250. help until

### 1250.1

View more about that `until` command. That might be the one to use here.

#### HINTS

- Use `help <command>` to view more about a command
- Type `help until` in the terminal and press enter

## 1260. Add until loop

### 1260.1

The `until` loop is very similar to the `while` loop you used. It will execute the loop until a condition is met. Here's an example:

```sh
until [[ CONDITION ]]
do
  STATEMENTS
done
```

Add an `until` loop below your function. Use the double brackets to check if `QUESTION` is equal to `test?`. Move the `GET_FORTUNE` function call to the statements area of the loop. It should run the function until you input `test?` as the question.

#### HINTS

- View the `help [[` or `help test` menu to see if you can find the operator to use
- You want the `==` operator
- The condition should look like this: `[[ $QUESTION == test? ]]`
- Your `until` loop should look like this:
```sh
until [[ $QUESTION == test? ]]
do
  GET_FORTUNE
done
```
- You should only call the `GET_FORTUNE` function once
- Your `echo ${RESPONSES[$N]}` command should be at the bottom of the file

## 1270. ./fortune.sh

### 1270.1

Run the script and enter something other than `test?`. Then enter `test?` after it asks for a question the second time.

#### HINTS

- Type `./fortune.sh` in the terminal and press enter
- Make sure you are in the `project` folder first

## 1280. help [[ expression ]]

### 1280.1

View that `help [[ expression ]]` menu again. You need to find out how to test if the input ends with a question mark (`?`).

#### HINTS

- Type `help [[` or `help [[ expression ]]` in the terminal and press enter

## 1290. [[ hello == hello ]]; echo $?

### 1290.1

Let's play with these again. You can test if two strings are the same with `==`. In the terminal, use the `[[ ... ]]; echo $?` syntax you used before to test if `hello` is equal to `hello`.

#### HINTS

- Be sure to use the `==` operator
- Type `[[ hello == hello ]]; echo $?` in the terminal and press enter

## 1300. [[ hello == world ]]; echo $?

### 1300.1

Exit status of `0`, it was true. Using the same syntax, test if `hello` is equal to `world`.

#### HINTS

- Use the `[[ ... ]]; echo $?` syntax
- Be sure to use the `==` operator
- Type `[[ hello == world ]]; echo $?` in the terminal and press enter

## 1310. [[ hello =~ el ]]; echo $?

### 1310.1

False. An important operator in that menu is `=~`. It allows for pattern matching. Using the same syntax but with this operator, check if `hello` contains the pattern `el`.

#### HINTS

- Use the `[[ ... ]]; echo $?` syntax
- Use the `=~` operator with it
- Type `[[ hello =~ el ]]; echo $?` in the terminal and press enter

## 1320. [[ "hello world" =~ "lo wor" ]]; echo $?

### 1320.1

True. The condition was checking for `el` within the word `hello`. Using the same syntax, check if `hello world` contains the pattern `lo wor`. You will need to put them both in quotes so it recognizes the spaces.

#### HINTS

- Use the `[[ ... ]]; echo $?` syntax
- Use the `=~` operator with it
- Type `[[ "hello world" =~ "lo wor" ]]; echo $?` in the terminal and press enter

## 1330. [[ "hello world" =~ ^h ]]; echo $?

### 1330.1

Your patterns have been checking for literal matches, `el` and `lo wor`. You can use regular expression characters as well, but you can't put the pattern in quotes when you do. Using the same syntax, check if `hello world` starts with an `h` by using `^h` as the pattern.

#### HINTS

- Make sure not to use quotes around the pattern when using regex characters it
- Type `[[ "hello world" =~ ^h ]]; echo $?` in the terminal

## 1340. [[ "hello world" =~ ^h.+d$ ]]; echo $?

### 1340.1

Do it again, but use `^h.+d$` as the pattern to see if the string starts with an `h`, has at least one character after it, and ends with a `d`.

#### HINTS

- Use the `[[ ... ]]; echo $?` syntax again
- Check if `hello world` contains the suggested pattern
- Make sure not to use quotes around the pattern when using regex characters it
- Type `[[ "hello world" =~ ^h.+d$ ]]; echo $?` in the terminal

## 1350. VAR="hello world"

### 1350.1

In the terminal, create a variable named `VAR` that equals `hello world`.

#### HINTS

- Type `VAR="hello world"` in the terminal

## 1360. echo $VAR

### 1360.1

Use `echo` to print the variable you just created.

#### HINTS

- Type `echo $VAR` in the terminal

## 1370. [[ $VAR == "hello world" ]]; echo $?

### 1370.1

Using the `[[ ... ]]; echo $?` syntax, check if your variable is equal to `hello world`.

#### HINTS

- Check the `help [[` menu to find the operator to use
- It's the `==` operator
- You want to check if `$VAR == "hello world"`
- Type `[[ $VAR == "hello world" ]]; echo $?` in the terminal

## 1380. [[ $VAR =~ \?$ ]; echo $?

### 1380.1

Using the same syntax, check if your variable ends with `?` by using the pattern `\?$`.

#### HINTS

- Be sure to use the pattern matching operator
- It's the `=~` operator
- You want to check if `$VAR =~ \?$`
- Type `[[ $VAR =~ \?$ ]]; echo $?` in the terminal

## 1385. [[ test? =~ \?$ ]; echo $?

### 1385.1

It doesn't end with `?`. Just to make sure I don't have the pattern wrong, check if `test?` ends with `?`.

#### HINTS

- Use the same `[[ ... ]]; echo $?` syntax you have been using
- Use the `\?$` pattern to see if a string ends with `?`
- Make sure you're using the pattern matching operator `=~`
- You want to check if `test? =~ \?$`
- Type `[[ test? =~ \?$ ]]; echo $?` in the terminal

## 1390. Change until condition

### 1390.1

I think that will work. Back in your script, change the `until` condition to see if your variable ends with `?`.

#### HINTS

- Use the pattern matching operator with `\?$`
- It's the `=~` operator
- Your condition should look like this: `[[ $QUESTION =~ \?$ ]]`
- Make sure there's spaces inside the brackets and around the operator

## 1400. ./fortune.sh

### 1400.1

Run the script and input something that doesn't end with `?` the first time, then something that does the second.

#### HINTS

- Type `./fortune.sh` in the terminal and press enter
- Make sure you are in the `project` folder first

## 1410. Add if to GET_FORTUNE

### 1410.1

I know that it asks the same thing if the input isn't what you want. You should let users know that it needs to end with `?`. Add an `if` condition in your **function** that checks `if [[ ! $1 ]]`. Put the existing `echo` statement in the `then` area and make sure the existing `read` is below the whole `if` condition.

#### HINTS

- Here's an example:
```sh
if [[ CONDITION ]]
then
  STATEMENTS
fi

read QUESTION
```
- Your function should look like this:
```sh
function GET_FORTUNE() {
  if [[ ! $1 ]]
  then
    echo Ask a yes or no question:
  fi

  read QUESTION
}
```

## 1412. Add else to if [[ ! $1 ]]

### 1412.1

You can pass arguments to functions like you did with your script. This condition will check if one isn't passed and print the sentence. Add an `else` to your `if`. Use `echo` to print `Try again. Make sure it ends with a question mark:` if the condition fails.

#### HINTS

- Here's an example:
```sh
if [[ CONDITION ]]
then
  STATEMENTS
else
  STATEMENTS
fi
```
- Your `if` condition should look like this:
```sh
if [[ ! $1 ]]
then
  echo Ask a yes or no question:
else
  echo Try again. Make sure it ends with a question mark:
fi
```

## 1413. Add argument to function call

### 1413.1

Now, your function will print one thing if you pass it any argument, and something else if not. In the `until` loop, add `again` as an argument to where you call the function.

#### HINTS

- Here's an example: `FUNCTION_NAME argument`
- Your function call should look like this: `GET_FORTUNE again`
- Your `until` loop should look like this:
```sh
until [[ $QUESTION =~ \?$ ]]
do
  GET_FORTUNE again
done
```

## 1416. Add Initial function call

### 1416.1

Now, each time the function is called in the `until` loop, it will pass `again` as an argument and print the `Try again...` sentence. Before your `until` loop, call the function without an argument so the first time it runs, it prints the initial sentence.

#### HINTS

- Add `GET_FORTUNE` before the `until` loop

## 1420. ./fortune.sh

### 1420.1

Run the script and enter something without a question mark when it asks the first time. Use a question mark the second time.

#### HINTS

- Type `./fortune.sh` in the terminal and press enter
- Make sure you are in the `project` folder first

## 1425. Add line break in front of response

### 1425.1

Awesome. One last thing. Add an empty line in front of where you print the response.

#### HINTS

- Change the existing `echo ${RESPONSES[$N]}` line
- Use the `-e` flag and the new line (`\n`) character with the `echo` statement
- Make sure to use quotes so it prints the new line
- Run the script and see if it's working
- The suggested command should look like this: `echo -e "\n${RESPONSES[$N]}"`

## 1428. ./fortune.sh

### 1428.1

Run the script one more time to see if you like the output.

#### HINTS

- Type `./fortune.sh` in the terminal and press enter
- Make sure you are in the `project` folder first

## 1430. touch five.sh

### 1430.1

Excellent. One last program to make. Use `touch` to create a new file named `five.sh` in the same folder as the others.

#### HINTS

- Type `touch five.sh` in the terminal and press enter
- Make sure you are in the `project` folder first

## 1440. chmod +x five.sh

### 1440.1

Give your file executable permissions.

#### HINTS

- Use the `chmod` command with the `+x` flag
- Here's an example `chmod <permissions> <filename>`
- You previously used `chmod +x fortune.sh`
- Type `chmod +x five.sh` in the terminal and press enter

## 1450. Add shebang

### 1450.1

Add a `shebang` to the new script that uses `bash` like the others.

#### HINTS

- A `shebang` looks like this: `#!<path_to_interpreter>`
- Enter `which bash` in the terminal to see the path to `bash`
- Look at the `shebang` in one of your other scripts to get the syntax
- It should look like this: `#!/bin/bash`
- Add `#!/bin/bash` at the top of your `five.sh` file

## 1460. Add comment

### 1460.1

Add a comment below the `shebang` that says, `Program to run my other four programs`

#### HINTS

- Comments look like this: `# <comment>`
- Add `# Program to run my other four programs` below the `shebang`
- Capitalization matters

## 1470. Add ./questionnaire.sh

### 1470.1

This program will run all the programs you made so far consecutively. Add the command to run the `questionnaire.sh` file.

#### HINTS

- The command should look like how you would execute the file in the terminal
- Add `./questionnaire.sh` to the `five.sh` file

## 1480. ./five

### 1480.1

Run the file to see if it works. Enter input when it asks.

#### HINTS

- Type `./five.sh` in the terminal and press enter
- Make sure you are in the `project` folder first

## 1490. Add the rest of the scripts

### 1490.1

Add commands to run the rest of your scripts in the file. They should be in this order: `questionnaire`, `countdown`, `bingo`, and `fortune`. Don't forget that your `countdown.sh` file needs an argument, so put a `3` next to it.

#### HINTS

- Your `five.sh` file should have these commands:
```sh
./questionnaire.sh
./countdown.sh 3
./bingo.sh
./fortune.sh
```

## 1500. Clear

### 1500.1

Okay, use `clear` to empty out what's in the terminal before the big moment.

#### HINTS

- Type `clear` in the terminal

## 1510. ./five

### 1510.1

Run the script and enter input when it asks.

#### HINTS

- Type `./five.sh` in the terminal and press enter
- Make sure you are in the `project` folder first

## 1520. help

### 1520.1

Cool. I think all the scripts are done. View the `help` menu again I want to explore one more thing.

#### HINTS

- Type `help` in the terminal and press enter

## 1530. help type

### 1530.1

View more about that `type` command.

#### HINTS

- Use `help <command>` to find out more about a command
- Type `help type` in the terminal and press enter

## 1540. type echo

### 1540.1

It says you can view the type of a command with `type <command>`. Just for fun, lets take a look at the type of a few different commands. View the type of `echo`.

#### HINTS

- Type `type echo` in the terminal and press enter

## 1550. type read

### 1550.1

View the type of the `read` command.

#### HINTS

- Type `type read` in the terminal and press enter

## 1560. type if

### 1560.1

View the type of `if`

#### HINTS

- Type `type if` in the terminal and press enter

## 1570. type then

### 1570.1

View the type of `then`

#### HINTS

- Type `type then` in the terminal and press enter

## 1580. type bash

### 1580.1

Those were all from the `help` menu and described as a `shell builtin` or `shell keyword`. View the type of `bash`

#### HINTS

- Type `type bash` in the terminal and press enter

## 1590. type psql

### 1590.1

That's the location of the `bash` command. View the type of `psql`.

#### HINTS

- Type `type psql` in the terminal and press enter

## 1600. type ./five.sh

### 1600.1

It's showing the location of the commands. View the type of your `./five.sh` file.

#### HINTS

- Type `type ./five.sh` in the terminal and press enter

## 1610. exit

### 1610.1

Last step, close the terminal with the `exit` command. Thanks and happy coding!

#### HINTS

- Type `exit` in the terminal and press enter
