# Welcome Riley & Grey Frontend Developer candidates!

This repo holds the the base Rails/Angular-1.x application that you will be using to complete the assessment.

## To get started:
0. This project uses ruby-2.4.0 (feel free to use whichever ruby verion manager you are most comfortable with; we use RVM).
1. `git clone https://github.com/AndrewHYi/rg_quiz_db && cd rg_quiz_db` (branch off master; the name of the branch doesn't matter)
2. `bundle`
3. `rake db:create && rake db:migrate` to create/migrate the database
4. `rails s` to start the server.
5. Load the app at `http://localhost:3000`

# Part 1: HTML/CSS
## Task
*Without* modifying the markup in `rg_quiz_db/app/assets/javascripts/angular_app/templates/question_one.html.erb`, please update `rg_quiz_db/app/assets/stylesheets/marketing/pages/_home.scss` to match the specifications in the following design documents:

*(note: all assets necessary for completing this assessment are located in the `app/assets/images` directory)*

Desktop: https://s3.amazonaws.com/cdn-rileygrey-dev/rg_quiz/desktop.png
Mobile: https://s3.amazonaws.com/cdn-rileygrey-dev/rg_quiz/mobile.png

# Part 2: Angular-1.x/JS
## Assessment Questions
*(Only modify the code in `app/assets/javascripts/angular_app/controllers/templates/question_two.js` and the markup in `app/assets/javascripts/angular_app/templates/question_two.html`)*
1) Bug fix: Clicking on the button 'Click me #1' should *not* redirect the page to '/' after clicking the 'OK' confirm dialog.
2) Bug fix: Clicking on 'Click me #2' doesn't seem to be working quite correctly.
3) Bug fix: Clicking on button #3 seems to correctly sum the 5 numbers: 0, 7, 17, 19 and 23. However, on closer inspection, there seems to be a bug when one or more of the input fields are modified.
4) Implement: Update the getFizzBuzzResult() function to the following specifications: For multiples of three the function should return "Fizz". For the multiples of five it should return "Buzz". For numbers which are multiples of both three and five it should "FizzBuzz". (The correct results should appear on the page.)
5) Implement: Add a counter to the page that meets the following specifications: Scrolling up on the mousewheel increments the counter. Scrolling down on the mousewheel decrements the counter. The counter cannot be less than 0, and cannot be greater than 100.
6) [EXTRA CREDIT] Implement: Update the application such that the url doesn't include the # hash.

# Part 3: Submission
Please submit a pull request to the master branch repository within the 24 hour assessment time window.